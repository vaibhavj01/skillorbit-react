import { useEffect } from "react";
import { SITE_URL } from "../../data/siteConfig";

/**
 * Lightweight SEO helper (no extra dependency). Sets document title,
 * meta description, canonical URL and basic Open Graph tags per page.
 */
export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | SkillOrbit Academy` : "SkillOrbit Academy — Build Skills. Build Careers.";
    document.title = fullTitle;

    const setMeta = (name, content, attr = "name") => {
      if (!content) return;
      let el = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `${SITE_URL}${path}`, "property");
    setMeta("og:type", "website", "property");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${path}`);
  }, [title, description, path]);

  return null;
}
