import { describe, expect, it } from "vitest";
import { common as commonEn } from "./en/common";
import { site as siteEn } from "./en/site";
import { common as commonIt } from "./it/common";
import { site as siteIt } from "./it/site";

type Tree = Record<string, unknown>;

function leafPaths(value: unknown, prefix = ""): string[] {
  if (typeof value === "string") return [prefix];
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => leafPaths(item, `${prefix}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value as Tree).flatMap(([key, child]) =>
      leafPaths(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

function leaves(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(leaves);
  if (value && typeof value === "object") return Object.values(value as Tree).flatMap(leaves);
  return [];
}

describe("chrome copy: Italian mirrors English", () => {
  it("has exactly the same keys, including array lengths", () => {
    expect(leafPaths(commonIt)).toEqual(leafPaths(commonEn));
  });

  it("has no empty strings", () => {
    for (const text of leaves(commonIt)) expect(text.trim()).not.toBe("");
  });

  it("never uses an em dash, in either language", () => {
    for (const text of [...leaves(commonEn), ...leaves(commonIt), ...leaves(siteIt)]) {
      expect(text, text).not.toContain("—");
    }
  });

  it("keeps the interpolation placeholders of the English strings", () => {
    expect(commonIt.contactForm.success).toContain("{email}");
  });

  it("keeps the verifiable claims identical (rating, checklist scope)", () => {
    expect(commonIt.exitIntent.body).toContain("5.0★");
    expect(commonIt.exitIntent.body).toContain("GDPR");
    expect(commonIt.exitIntent.body).toContain("CAN-SPAM");
  });

  it("keeps the topic values the support inbox expects, translating only labels", () => {
    expect(commonIt.contactForm.topics.map((topic) => topic.value)).toEqual(
      commonEn.contactForm.topics.map((topic) => topic.value),
    );
  });
});

describe("site copy: Italian navigation points at the same pages", () => {
  it("keeps product names and hrefs, translating description and category", () => {
    expect(siteIt.products.map((product) => product.name)).toEqual(siteEn.products.map((p) => p.name));
    expect(siteIt.products.map((product) => product.href)).toEqual(siteEn.products.map((p) => p.href));
    for (const [en, it] of siteEn.products.map((product, index) => [product, siteIt.products[index]] as const)) {
      expect(it.description).not.toBe(en.description);
      expect(it.icon).toBe(en.icon);
    }
  });

  it("has the same footer columns with the same hrefs in the same order", () => {
    const hrefs = (columns: typeof siteEn.footerColumns) =>
      columns.map((column) => column.items.map((item) => item.href));
    expect(hrefs(siteIt.footerColumns)).toEqual(hrefs(siteEn.footerColumns));
  });

  it("has the same main and resources navigation hrefs", () => {
    expect(siteIt.mainNav.map((item) => item.href)).toEqual(siteEn.mainNav.map((item) => item.href));
    expect(siteIt.resourcesNav.map((item) => item.href)).toEqual(siteEn.resourcesNav.map((item) => item.href));
  });
});
