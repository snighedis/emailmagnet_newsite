import { describe, expect, it } from "vitest";

import { blogPosts } from "@/content/blog";
import { faqItems, pricingPlans, siteConfig } from "@/data/site";
import { buildArticleSchema, buildFaqSchema, buildSoftwareSchema } from "@/lib/schema";

describe("EmailMagnet site content", () => {
  it("keeps canonical product positioning and support details explicit", () => {
    expect(siteConfig.name).toBe("EmailMagnet");
    expect(siteConfig.description).toContain("find and extract emails");
    expect(siteConfig.supportEmail).toBe("support@dentokudev.com");
    expect(siteConfig.primaryCta.href).toContain("buy.stripe.com");
    expect(siteConfig.secondaryCta.href).toContain("chromewebstore.google.com");
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

describe("EmailMagnet structured data", () => {
  it("generates SoftwareApplication and FAQ schema from visible site content", () => {
    expect(buildSoftwareSchema()).toMatchObject({
      "@type": "SoftwareApplication",
      name: "EmailMagnet",
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
