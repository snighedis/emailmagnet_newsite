import { describe, expect, it } from "vitest";

import { blogPosts } from "@/content/blog";
import {
  emailMagnetConfig,
  footerNav,
  founderConfig,
  faqItems,
  pricingPlans,
  productPortfolio,
  siteConfig,
} from "@/data/site";
import {
  buildArticleSchema,
  buildFaqSchema,
  buildFounderSchema,
  buildHowToSchema,
  buildItemListSchema,
  buildOrganizationSchema,
  buildPersonSchema,
  buildProductSoftwareSchema,
  buildSoftwareSchema,
  buildVideoSchema,
} from "@/lib/schema";

describe("Dentoku Dev site hierarchy", () => {
  it("models Dentoku Dev as the parent company and EmailMagnet as a product", () => {
    expect(siteConfig.name).toBe("Dentoku Dev");
    expect(siteConfig.logo).toBe("/brand/dentoku-dev-logo-128x128.png");
    // Dual positioning: product studio + custom software for SMBs, with the
    // shipped products as the standing proof.
    expect(siteConfig.description).toContain("software studio");
    expect(siteConfig.description).toContain("custom");
    // Countdown321 bills monthly via Shopify — portfolio-wide no-subscription
    // claims are off the table, generic or otherwise.
    expect(siteConfig.description).not.toMatch(/subscription/i);
    expect(emailMagnetConfig.name).toBe("EmailMagnet");
    expect(emailMagnetConfig.icon).toBe("/brand/emailmagnet-icon-padded.png");
    expect(emailMagnetConfig.logo).toBe("/brand/emailmagnet-logo-wide.png");
    expect(emailMagnetConfig.cover).toBe("/brand/emailmagnet-cover.png");
    expect(emailMagnetConfig.parentBrand).toBe("Dentoku Dev");
    expect(emailMagnetConfig.href).toBe("/emailmagnet");
    expect(emailMagnetConfig.description).toContain("public business emails");
    expect(siteConfig.supportEmail).toBe("support@dentokudev.com");
    expect(emailMagnetConfig.primaryCta.href).toContain("buy.stripe.com");
    expect(emailMagnetConfig.secondaryCta.href).toContain("chromewebstore.google.com");
  });

  it("populates a scalable Products menu with the required portfolio entries", () => {
    expect(productPortfolio.map((product) => product.name)).toEqual([
      "EmailMagnet",
      "ClickPilot AI",
      "Volume Control PRO",
      "Countdown321",
    ]);
    expect(productPortfolio[0]).toMatchObject({
      category: "Chrome Extension",
      featured: true,
      href: "/emailmagnet",
      icon: "/brand/emailmagnet-icon-padded.png",
    });
    expect(productPortfolio[1]).toMatchObject({
      category: "Chrome Extension",
      href: "/clickpilot-ai",
    });
    expect(productPortfolio[2]).toMatchObject({
      category: "Chrome Extension",
      href: "/volume-control-pro",
    });
    expect(productPortfolio[3]).toMatchObject({
      category: "Shopify app",
      externalUrl: "https://apps.shopify.com/countdown321",
      href: "/countdown321",
    });
    expect(productPortfolio.map((product) => product.icon)).toEqual([
      "/brand/emailmagnet-icon-padded.png",
      "/brand/clickpilot-ai-icon.png",
      "/brand/volume-control-pro-icon.png",
      "/brand/countdown321-icon.png",
    ]);
    const portfolioCopy = JSON.stringify(productPortfolio).toLowerCase();
    for (const forbidden of ["placeholder", "to be finalized", "coming soon", "future"]) {
      expect(portfolioCopy).not.toContain(forbidden);
    }
  });

  it("uses production-safe social labels", () => {
    // Social links live as icons (LinkedIn / X) in the footer brand block and the
    // header nav, not as footerNav text links — so footerNav must not carry a
    // mislabeled social entry.
    const footerLabels = Object.values(footerNav).flat().map((item) => item.label);
    expect(footerLabels).not.toContain("Twitter/X");
    expect(footerLabels).not.toContain("Twitter");
    expect(footerLabels).not.toContain("X");
    expect(footerLabels).not.toContain("LinkedIn");
  });

  it("models the current free and pro pricing structure without invented plans", () => {
    expect(pricingPlans).toHaveLength(2);
    expect(pricingPlans.map((plan) => plan.name)).toEqual(["Free plan", "PRO plan"]);
    expect(pricingPlans[0].features).toContain("200 emails per month.");
    expect(pricingPlans[1].price).toBe("$19");
    expect(pricingPlans[1].features).toContain("Autosave while browsing.");
    expect(pricingPlans[1].features).toContain("Bulk extraction for reviewed URL lists.");
  });

  it("includes required FAQ answers for users and AI answer engines", () => {
    const questions = faqItems.map((item) => item.question);
    expect(questions).toContain("How does EmailMagnet work?");
    expect(questions).toContain("How reliable is EmailMagnet?");
    expect(questions).toContain("Is email extraction legal?");
    expect(questions).toContain("What are the free version restrictions?");
  });
});

describe("Dentoku Dev structured data", () => {
  it("generates Organization schema for the Dentoku Dev homepage", () => {
    expect(buildOrganizationSchema()).toMatchObject({
      "@type": "Organization",
      name: "Dentoku Dev",
      url: "https://www.dentokudev.com",
    });
  });

  it("generates a founder page schema without exposing a personal name", () => {
    expect(buildFounderSchema()).toMatchObject({
      "@type": "AboutPage",
      name: founderConfig.name,
      url: "https://www.dentokudev.com/founder",
      about: expect.objectContaining({ name: "Dentoku Dev" }),
    });
  });

  it("generates SoftwareApplication and FAQ schema from visible site content", () => {
    expect(buildSoftwareSchema()).toMatchObject({
      "@type": "SoftwareApplication",
      name: "EmailMagnet",
      isPartOf: expect.objectContaining({ name: "Dentoku Dev" }),
      applicationCategory: "BusinessApplication",
      offers: expect.arrayContaining([
        expect.objectContaining({ price: 19, priceCurrency: "USD" }),
      ]),
    });

    expect(buildFaqSchema(faqItems)).toMatchObject({
      "@type": "FAQPage",
      mainEntity: expect.arrayContaining([
        expect.objectContaining({
          name: "How does EmailMagnet work?",
        }),
      ]),
    });
  });

  it("generates product, list, how-to, and video schemas for AEO pages", () => {
    const productSchema = buildProductSoftwareSchema(productPortfolio[1], {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
    });
    // Google's SoftwareApplication rich result requires offers/review/rating.
    expect(productSchema.offers).toMatchObject({ "@type": "Offer", price: 0 });
    expect(productSchema).toMatchObject({
      "@type": "SoftwareApplication",
      name: "ClickPilot AI",
      operatingSystem: "Windows, macOS, Linux, ChromeOS",
      publisher: expect.objectContaining({ name: "Dentoku Dev" }),
    });

    expect(buildItemListSchema("Dentoku Dev products", productPortfolio)).toMatchObject({
      "@type": "ItemList",
      itemListElement: expect.arrayContaining([
        expect.objectContaining({ name: "EmailMagnet", position: 1 }),
      ]),
    });

    expect(
      buildHowToSchema({
        name: "How to extract emails with EmailMagnet",
        description: "Install, browse, extract, and export.",
        path: "/docs/getting-started",
        steps: ["Install EmailMagnet", "Open a website", "Export results"],
      }),
    ).toMatchObject({
      "@type": "HowTo",
      step: expect.arrayContaining([
        expect.objectContaining({ "@type": "HowToStep", position: 1 }),
      ]),
    });

    expect(
      buildVideoSchema({
        name: "EmailMagnet demo",
        description: "Demo video.",
        thumbnailUrl: "/brand/emailmagnet-01.webp",
        uploadDate: "2026-05-12",
        embedUrl: "https://www.youtube.com/embed/example",
      }),
    ).toMatchObject({
      "@type": "VideoObject",
      publisher: expect.objectContaining({ name: "Dentoku Dev" }),
    });
  });

  it("generates article schema for MDX blog posts with a named Person author", () => {
    const post = blogPosts[0];
    expect(buildArticleSchema(post)).toMatchObject({
      "@type": "BlogPosting",
      headline: post.title,
      author: expect.objectContaining({
        "@type": "Person",
        name: "Nicola Orlandi",
        worksFor: expect.objectContaining({
          "@type": "Organization",
          name: "Dentoku Dev",
        }),
      }),
      publisher: expect.objectContaining({
        "@type": "Organization",
        name: "Dentoku Dev",
      }),
    });
  });

  it("generates Person schema for the named author", () => {
    expect(buildPersonSchema()).toMatchObject({
      "@type": "Person",
      name: "Nicola Orlandi",
      jobTitle: "CEO & Founder at Dentoku Dev",
      url: "https://www.dentokudev.com/founder",
      worksFor: expect.objectContaining({ name: "Dentoku Dev" }),
    });
  });
});
