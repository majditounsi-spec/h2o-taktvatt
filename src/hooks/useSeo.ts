import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      el.setAttribute("rel", "canonical");
    } else {
      el = document.createElement("meta");
      const name = selector.match(/\[(name|property)="([^"]+)"\]/);
      if (name) el.setAttribute(name[1], name[2]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

/**
 * Lightweight SEO hook — updates <title>, meta description, OG tags, and canonical
 * on route change. Uses native DOM instead of react-helmet to avoid dependencies.
 */
export const useSeo = ({ title, description, canonical, ogImage }: SeoProps) => {
  useEffect(() => {
    const fullTitle = title.includes("H2O") ? title : `${title} | H2O Taktvätt`;
    document.title = fullTitle;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);

    if (ogImage) {
      setMeta('meta[property="og:image"]', "content", ogImage);
      setMeta('meta[name="twitter:image"]', "content", ogImage);
    }

    const canonicalUrl = canonical ?? window.location.origin + window.location.pathname;
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
  }, [title, description, canonical, ogImage]);
};
