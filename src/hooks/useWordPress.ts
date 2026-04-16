import { useState, useEffect } from "react";
import {
  getPage, getServices, getTestimonials, getSiteSettings,
  isWordPressEnabled,
  type WPPage, type WPService, type WPTestimonial, type WPSiteSettings
} from "@/lib/wordpress";

// Generic hook for WP data with static fallback
function useWPData<T>(fetcher: () => Promise<T | null>, fallback: T): { data: T; loading: boolean; fromWP: boolean } {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(isWordPressEnabled());
  const [fromWP, setFromWP] = useState(false);

  useEffect(() => {
    if (!isWordPressEnabled()) return;

    fetcher().then((result) => {
      if (result) {
        setData(result);
        setFromWP(true);
      }
      setLoading(false);
    });
  }, []);

  return { data, loading, fromWP };
}

// --- Specific hooks ---

export function useWPPage(slug: string, fallback: { title: string; content: string }) {
  return useWPData<{ title: string; content: string }>(
    async () => {
      const page = await getPage(slug);
      if (!page) return null;
      return {
        title: page.title.rendered,
        content: page.content.rendered,
      };
    },
    fallback
  );
}

export function useWPServices(fallback: Array<{
  title: string;
  description: string;
  price: string;
  features: string[];
  link: string;
  image: string;
  accent: string;
}>) {
  return useWPData(
    async () => {
      const services = await getServices();
      if (!services || services.length === 0) return null;
      return services.map((s) => ({
        title: s.title.rendered,
        description: s.excerpt.rendered.replace(/<[^>]*>/g, "").trim(),
        price: s.acf?.price || "",
        features: s.acf?.features || [],
        link: `/tjanster/${s.slug}`,
        image: "", // Will be resolved via featured_media
        accent: s.acf?.icon_type === "orange" ? "orange" : "blue",
      }));
    },
    fallback
  );
}

export function useWPTestimonials(fallback: Array<{
  name: string;
  location: string;
  text: string;
  service: string;
  initials: string;
}>) {
  return useWPData(
    async () => {
      const testimonials = await getTestimonials();
      if (!testimonials || testimonials.length === 0) return null;
      return testimonials.map((t) => ({
        name: t.acf?.name || t.title.rendered,
        location: t.acf?.location || "",
        text: t.acf?.text || "",
        service: t.acf?.service || "",
        initials: (t.acf?.name || t.title.rendered).split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase(),
      }));
    },
    fallback
  );
}

export function useWPSettings(fallback: WPSiteSettings) {
  return useWPData<WPSiteSettings>(
    () => getSiteSettings(),
    fallback
  );
}
