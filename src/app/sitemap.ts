import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { productPortfolio, siteConfig } from "@/data/site";

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
  "/countdown321/shopify-countdown-timer-app",
  "/countdown321/shopify-urgency-app",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
  }));
  const productRoutes = productPortfolio
    .filter((product) => !routes.includes(product.href))
    .map((product) => ({
      url: `${siteConfig.url}${product.href}`,
      lastModified: now,
    }));
  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
