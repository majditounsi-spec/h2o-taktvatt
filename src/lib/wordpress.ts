// WordPress Headless CMS Configuration
// Ändra denna URL till din WordPress-installation
// Exempel: "https://admin.h2otaktvatt.se" eller "https://dindomän.se/wp"
export const WP_URL = import.meta.env.VITE_WORDPRESS_URL || "";

// Om WordPress inte är konfigurerat, använd statisk data
export const isWordPressEnabled = () => WP_URL.length > 0;

// --- Types ---

export type WPPage = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  acf?: Record<string, unknown>; // Advanced Custom Fields
};

export type WPMedia = {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, { source_url: string; width: number; height: number }>;
  };
};

export type WPService = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  acf?: {
    price?: string;
    features?: string[];
    guarantee?: string;
    duration?: string;
    icon_type?: string;
  };
};

export type WPTestimonial = {
  id: number;
  title: { rendered: string };
  acf?: {
    name?: string;
    location?: string;
    text?: string;
    service?: string;
    rating?: number;
  };
};

export type WPSiteSettings = {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  opening_hours?: string;
  coverage_area?: string;
};

// --- API Client ---

async function wpFetch<T>(endpoint: string): Promise<T | null> {
  if (!isWordPressEnabled()) return null;

  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    console.warn(`WordPress API unavailable: ${endpoint}`);
    return null;
  }
}

// --- Public API ---

export async function getPage(slug: string): Promise<WPPage | null> {
  const pages = await wpFetch<WPPage[]>(`pages?slug=${slug}&_embed`);
  return pages?.[0] ?? null;
}

export async function getServices(): Promise<WPService[] | null> {
  return wpFetch<WPService[]>("services?_embed&per_page=10&orderby=menu_order&order=asc");
}

export async function getTestimonials(): Promise<WPTestimonial[] | null> {
  return wpFetch<WPTestimonial[]>("testimonials?per_page=10");
}

export async function getMedia(id: number): Promise<WPMedia | null> {
  if (!id) return null;
  return wpFetch<WPMedia>(`media/${id}`);
}

export async function getSiteSettings(): Promise<WPSiteSettings | null> {
  if (!isWordPressEnabled()) return null;
  try {
    const res = await fetch(`${WP_URL}/wp-json/h2o/v1/settings`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
