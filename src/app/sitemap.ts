import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { productPortfolio, siteConfig } from "@/data/site";
import { hasItalianTwin, italianSlugs, italianUrlPath } from "@/i18n/slugs";

const routes = [
  "",
  "/emailmagnet",
  "/pricing",
  "/faq",
  "/overview",
  "/contact",
  "/about",
  "/founder",
  "/privacy",
  "/terms",
  "/cookies",
  "/blog",
  "/docs",
  "/docs/getting-started",
  "/docs/exporting-emails",
  "/docs/responsible-use",
  "/glossary/email-extraction",
  "/compare/manual-email-copying",
  "/use-cases/emailmagnet-sales-prospecting",
  "/integrations/emailmagnet-chrome",
  "/emailmagnet/chrome-email-extractor",
  "/emailmagnet/free-email-extractor",
  "/emailmagnet/email-extractor-vs-scraper",
  "/clickpilot-ai/ai-writing-assistant-chrome-extension",
  "/volume-control-pro/chrome-volume-booster-600",
  "/volume-control-pro/chrome-volume-control-extension",
  "/volume-control-pro/tab-volume-control",
  "/countdown321/shopify-countdown-timer-app",
  "/countdown321/shopify-urgency-app",
];

const englishUrl = (route: string) => `${siteConfig.url}${route === "/" ? "" : route}`;
const italianUrl = (route: string) => `${siteConfig.url}${italianUrlPath(route)}`;

/**
 * hreflang pair for a page that exists in both languages. Gated on the slug
 * map, the same source the proxy and createMetadata use, so the sitemap can
 * never advertise an Italian URL that is not live.
 */
function alternatesFor(route: string) {
  const path = route === "" ? "/" : route;
  if (!hasItalianTwin(path)) return {};
  return { alternates: { languages: { en: englishUrl(path), it: italianUrl(path) } } };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.8,
    ...alternatesFor(route),
  }));
  const italianRoutes = Object.keys(italianSlugs).map((path) => ({
    url: italianUrl(path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
    ...alternatesFor(path),
  }));
  const productRoutes = productPortfolio
    .filter((product) => !routes.includes(product.href))
    .map((product) => ({
      url: `${siteConfig.url}${product.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...italianRoutes, ...productRoutes, ...blogRoutes];
}
