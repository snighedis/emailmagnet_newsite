import type { BlogPost } from "@/content/blog";
import type { FaqItem } from "@/data/site";
import {
  emailMagnetConfig,
  founderConfig,
  pricingPlans,
  productPortfolio,
  siteConfig,
} from "@/data/site";

const base = siteConfig.url;

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    url: base,
    logo: `${base}${siteConfig.logo}`,
    email: siteConfig.supportEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milan",
      addressCountry: "IT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.supportEmail,
      availableLanguage: ["en"],
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

export function buildFounderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: founderConfig.name,
    description: founderConfig.description,
    url: `${base}${founderConfig.href}`,
    about: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milan",
        addressCountry: "IT",
      },
      knowsAbout: founderConfig.focusAreas,
    },
  };
}

export function buildSoftwareSchema() {
  const proPlan = pricingPlans.find((plan) => plan.name === "PRO plan");
  const freePlan = pricingPlans.find((plan) => plan.name === "Free plan");

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: emailMagnetConfig.name,
    applicationCategory: "BrowserApplication",
    applicationSubCategory: "Chrome Extension",
    operatingSystem: "Chrome",
    description: "Chrome extension for extracting email addresses from websites while browsing. Free plan available with 200 emails/month. PRO plan offers unlimited extraction for $19 lifetime.",
    keywords: "email extractor, Chrome extension, email finder, lead generation, prospecting, CSV export, browser email extraction",
    url: `${base}${emailMagnetConfig.href}`,
    downloadUrl: emailMagnetConfig.secondaryCta.href,
    isPartOf: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
    },
    offers: [
      {
        "@type": "Offer",
        name: freePlan?.name ?? "Free Plan",
        price: "0",
        priceCurrency: "USD",
        url: emailMagnetConfig.secondaryCta.href,
        category: "Free Plan",
        description: "200 emails per month, export up to 100 emails at once"
      },
      {
        "@type": "Offer",
        name: proPlan?.name ?? "PRO Plan",
        price: proPlan?.price.replace("$", "") ?? "19",
        priceCurrency: "USD",
        url: emailMagnetConfig.primaryCta.href,
        category: "Lifetime access",
        description: "Unlimited email extraction, unlimited export size, autosave, bulk extraction"
      }
    ],
    featureList: [
      "Extract emails while browsing",
      "CSV and TXT export",
      "One-click email collection",
      "Company directory support",
      "Contact page email detection",
      "Bulk extraction (PRO)",
      "Autosave functionality (PRO)"
    ],
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
    },
  };
}

export function buildProductSoftwareSchema(product = productPortfolio[0]) {
  const isShopifyApp = product.category.toLowerCase().includes("shopify");

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: isShopifyApp ? "BusinessApplication" : "BrowserApplication",
    operatingSystem: isShopifyApp ? "Shopify" : "Chrome",
    description: product.description,
    url: `${base}${product.href}`,
    sameAs: product.externalUrl ? [product.externalUrl] : undefined,
    isPartOf: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
      logo: `${base}${siteConfig.logo}`,
    },
  };
}

export function buildItemListSchema(
  name: string,
  items: Array<{ name: string; href: string; description?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${base}${item.href}`,
      name: item.name,
      description: item.description,
    })),
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
  const publishedTime = new Date(post.date);
  const modifiedTime = new Date(post.updated);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.featuredImage ? `${base}${post.featuredImage}` : `${base}${siteConfig.logo}`,
    keywords: post.tags,
    datePublished: Number.isNaN(publishedTime.getTime()) ? post.date : publishedTime.toISOString(),
    dateModified: Number.isNaN(modifiedTime.getTime()) ? post.updated : modifiedTime.toISOString(),
    articleSection: post.tags,
    author: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}${siteConfig.logo}`,
      },
    },
    mainEntityOfPage: `${base}/blog/${post.slug}`,
  };
}

export function buildHowToSchema(input: {
  name: string;
  description: string;
  path: string;
  steps: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: `${base}${input.path}`,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step,
      text: step,
    })),
  };
}

export function buildVideoSchema(input: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: input.name,
    description: input.description,
    thumbnailUrl: [`${base}${input.thumbnailUrl}`],
    uploadDate: input.uploadDate,
    embedUrl: input.embedUrl,
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      logo: {
        "@type": "ImageObject",
        url: `${base}${siteConfig.logo}`,
      },
    },
  };
}

export function buildContactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Dentoku Dev Support",
    url: `${base}/contact`,
    about: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: base,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.supportEmail,
        availableLanguage: ["en"],
      },
    },
  };
}
