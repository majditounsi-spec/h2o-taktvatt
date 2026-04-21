// reCAPTCHA v3 site key (public – safe to expose in client bundle).
// Can be overridden via the VITE_RECAPTCHA_V3_SITE_KEY env var at build time.
export const RECAPTCHA_V3_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY ||
  "6LemYsIsAAAAADyZhCGVsR3N5dJf4za3obqxIVys";
