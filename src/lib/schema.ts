import type { BlogPost } from "@/content/blog";
import type { FaqItem } from "@/data/site";
import { emailMagnetConfig, pricingPlans, siteConfig } from "@/data/site";

const base = siteConfig.url;

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    url: base,
    email: siteConfig.supportEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milan",
      addressCountry: "IT",
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.x],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: base,
    description: siteConfig.description,
  };
}

export function buildSoftwareSchema() {
  const proPlan = pricingPlans.find((plan) => plan.featured);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: emailMagnetConfig.name,
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    description: emailMagnetConfig.description,
    url: `${base}${emailMagnetConfig.href}`,
    isPartOf: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
    },
    offers: {
      "@type": "Offer",
      price: proPlan?.price.replace("$", "") ?? "19",
      priceCurrency: "USD",
      url: emailMagnetConfig.primaryCta.href,
      category: "Lifetime access",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
    },
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.href}`,
    })),
  };
}

export function buildArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
    },
    mainEntityOfPage: `${base}/blog/${post.slug}`,
  };
}

export function buildContactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: "customer support",
    email: siteConfig.supportEmail,
    availableLanguage: ["en"],
  };
}
