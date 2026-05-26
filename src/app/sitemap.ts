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
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.8,
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

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
