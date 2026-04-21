// reCAPTCHA v3 site key.
// Replace with your real v3 site key from https://www.google.com/recaptcha/admin.
// The default value below is Google's official v3 test key (always returns a
// valid token with a passing score – use only in development).
export const RECAPTCHA_V3_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY ||
  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
