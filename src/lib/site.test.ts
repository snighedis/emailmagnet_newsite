import { describe, expect, it } from "vitest";

import { blogPosts } from "@/content/blog";
import {
  emailMagnetConfig,
  faqItems,
  pricingPlans,
  productPortfolio,
  siteConfig,
} from "@/data/site";
import {
  buildArticleSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildSoftwareSchema,
} from "@/lib/schema";

describe("Dentoku Dev site hierarchy", () => {
  it("models Dentoku Dev as the parent company and EmailMagnet as a product", () => {
    expect(siteConfig.name).toBe("Dentoku Dev");
    expect(siteConfig.description).toContain("product studio");
    expect(emailMagnetConfig.name).toBe("EmailMagnet");
    expect(emailMagnetConfig.parentBrand).toBe("Dentoku Dev");
    expect(emailMagnetConfig.href).toBe("/emailmagnet");
    expect(emailMagnetConfig.description).toContain("find and extract emails");
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
      featured: true,
      href: "/emailmagnet",
    });
    expect(productPortfolio.slice(1).every((product) => product.description.includes("Placeholder"))).toBe(
      true,
    );
  });

  it("models the current free and pro pricing structure without invented plans", () => {
    expect(pricingPlans).toHaveLength(2);
    expect(pricingPlans.map((plan) => plan.name)).toEqual(["Free plan", "PRO plan"]);
    expect(pricingPlans[0].features).toContain("200 emails per month.");
    expect(pricingPlans[1].price).toBe("$19");
    expect(pricingPlans[1].features).toContain("AUTOSAVE while browsing.");
    expect(pricingPlans[1].features).toContain("AUTOMATION: Bulk extraction (1,000+ URLs).");
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

  it("generates SoftwareApplication and FAQ schema from visible site content", () => {
    expect(buildSoftwareSchema()).toMatchObject({
      "@type": "SoftwareApplication",
      name: "EmailMagnet",
      isPartOf: expect.objectContaining({ name: "Dentoku Dev" }),
      applicationCategory: "BrowserApplication",
      offers: expect.objectContaining({ price: "19" }),
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

  it("generates article schema for MDX blog posts", () => {
    const post = blogPosts[0];
    expect(buildArticleSchema(post)).toMatchObject({
      "@type": "Article",
      headline: post.title,
      author: expect.objectContaining({ name: post.author }),
    });
  });
});
