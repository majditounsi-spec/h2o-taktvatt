<?php
/**
 * Plugin Name: H2O Taktvätt – Headless CMS
 * Description: Lägger till custom post types och REST API endpoints för H2O Taktvätt headless frontend.
 * Version: 1.0.0
 * Author: H2O Taktvätt
 */

if (!defined('ABSPATH')) exit;

// ================================================
// 1. Custom Post Types
// ================================================

add_action('init', function () {
    // Tjänster
    register_post_type('services', [
        'labels' => [
            'name'          => 'Tjänster',
            'singular_name' => 'Tjänst',
            'add_new'       => 'Lägg till tjänst',
            'add_new_item'  => 'Lägg till ny tjänst',
            'edit_item'     => 'Redigera tjänst',
        ],
        'public'       => false,
        'show_ui'      => true,
        'show_in_rest' => true,
        'rest_base'    => 'services',
        'supports'     => ['title', 'editor', 'excerpt', 'thumbnail', 'page-attributes', 'custom-fields'],
        'menu_icon'    => 'dashicons-admin-home',
        'has_archive'  => false,
    ]);

    // Omdömen
    register_post_type('testimonials', [
        'labels' => [
            'name'          => 'Omdömen',
            'singular_name' => 'Omdöme',
            'add_new'       => 'Lägg till omdöme',
            'add_new_item'  => 'Lägg till nytt omdöme',
            'edit_item'     => 'Redigera omdöme',
        ],
        'public'       => false,
        'show_ui'      => true,
        'show_in_rest' => true,
        'rest_base'    => 'testimonials',
        'supports'     => ['title', 'custom-fields'],
        'menu_icon'    => 'dashicons-format-quote',
        'has_archive'  => false,
    ]);
});

// ================================================
// 2. Meta fields exposed in REST API
// ================================================

add_action('init', function () {
    // Tjänster meta
    $service_fields = [
        'price'     => 'string',
        'features'  => 'array',
        'guarantee' => 'string',
        'duration'  => 'string',
        'icon_type' => 'string',
    ];

    foreach ($service_fields as $key => $type) {
        register_post_meta('services', $key, [
            'show_in_rest'  => true,
            'single'        => true,
            'type'          => $type,
            'auth_callback' => '__return_true',
        ]);
    }

    // Omdömen meta
    $testimonial_fields = [
        'name'     => 'string',
        'location' => 'string',
        'text'     => 'string',
        'service'  => 'string',
        'rating'   => 'integer',
    ];

    foreach ($testimonial_fields as $key => $type) {
        register_post_meta('testimonials', $key, [
            'show_in_rest'  => true,
            'single'        => true,
            'type'          => $type,
            'auth_callback' => '__return_true',
        ]);
    }
});

// ================================================
// 3. Site Settings REST endpoint
// ================================================

add_action('rest_api_init', function () {
    register_rest_route('h2o/v1', '/settings', [
        'methods'             => 'GET',
        'callback'            => 'h2o_get_settings',
        'permission_callback' => '__return_true',
    ]);
});

function h2o_get_settings() {
    return [
        'title'         => get_option('h2o_site_title', 'H2O Taktvätt'),
        'description'   => get_option('h2o_site_description', 'Professionell taktvätt och takmålning'),
        'phone'         => get_option('h2o_phone', '070-123 45 67'),
        'email'         => get_option('h2o_email', 'info@h2otaktvatt.se'),
        'address'       => get_option('h2o_address', ''),
        'opening_hours' => get_option('h2o_opening_hours', 'Mån–Fre: 07–17 | Lör: 08–14'),
        'coverage_area' => get_option('h2o_coverage_area', 'Kalmar län & Skåne'),
    ];
}

// ================================================
// 4. Settings page in wp-admin
// ================================================

add_action('admin_menu', function () {
    add_options_page(
        'H2O Inställningar',
        'H2O Taktvätt',
        'manage_options',
        'h2o-settings',
        'h2o_settings_page'
    );
});

function h2o_settings_page() {
    if (isset($_POST['h2o_save']) && wp_verify_nonce($_POST['_wpnonce'], 'h2o_settings')) {
        $fields = ['h2o_phone', 'h2o_email', 'h2o_address', 'h2o_opening_hours', 'h2o_coverage_area', 'h2o_site_title', 'h2o_site_description'];
        foreach ($fields as $f) {
            update_option($f, sanitize_text_field($_POST[$f] ?? ''));
        }
        echo '<div class="notice notice-success"><p>Sparat!</p></div>';
    }
    ?>
    <div class="wrap">
        <h1>H2O Taktvätt – Inställningar</h1>
        <p>Dessa inställningar visas på hemsidan via REST API.</p>
        <form method="post">
            <?php wp_nonce_field('h2o_settings'); ?>
            <table class="form-table">
                <?php
                $fields = [
                    ['h2o_site_title', 'Företagsnamn', 'H2O Taktvätt'],
                    ['h2o_site_description', 'Beskrivning', 'Professionell taktvätt och takmålning'],
                    ['h2o_phone', 'Telefon', '070-123 45 67'],
                    ['h2o_email', 'E-post', 'info@h2otaktvatt.se'],
                    ['h2o_address', 'Adress', ''],
                    ['h2o_opening_hours', 'Öppettider', 'Mån–Fre: 07–17 | Lör: 08–14'],
                    ['h2o_coverage_area', 'Verksamhetsområde', 'Kalmar län & Skåne'],
                ];
                foreach ($fields as [$key, $label, $default]) {
                    $val = esc_attr(get_option($key, $default));
                    echo "<tr><th><label for='$key'>$label</label></th><td><input type='text' id='$key' name='$key' value='$val' class='regular-text' /></td></tr>";
                }
                ?>
            </table>
            <p><input type="submit" name="h2o_save" class="button button-primary" value="Spara inställningar" /></p>
        </form>
    </div>
    <?php
}

// ================================================
// 5. CORS headers for headless frontend
// ================================================

add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $origin = get_http_origin();
        if ($origin) {
            header("Access-Control-Allow-Origin: $origin");
        } else {
            header("Access-Control-Allow-Origin: *");
        }
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        return $value;
    });
}, 15);
