import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/data/site";

const routes = [
  "",
  "/pricing",
  "/faq",
  "/contact",
  "/about",
  "/privacy",
  "/terms",
  "/security",
  "/blog",
  "/docs",
  "/docs/getting-started",
  "/docs/exporting-emails",
  "/docs/responsible-use",
  "/glossary/email-extraction",
  "/compare/manual-email-copying",
  "/use-cases/sales-prospecting",
  "/integrations/chrome",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
  }));
  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
  }));

  return [...staticRoutes, ...blogRoutes];
}
