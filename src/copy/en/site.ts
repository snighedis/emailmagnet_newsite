import {
  footerNav,
  mainNav,
  productPortfolio,
  resourcesNav,
  siteConfig,
  type NavItem,
  type ProductItem,
} from "@/data/site";

/**
 * Navigation and site-level strings for the chrome, in English. Everything
 * here is re-exported from `@/data/site` unchanged: that module stays the
 * single source of truth for the English site (its tests pin the claims), and
 * this file only gives it the shape the Italian module has to match.
 */
export type SiteCopy = {
  mainNav: NavItem[];
  resourcesNav: NavItem[];
  /** Product names never change across languages; description and category do. */
  products: ProductItem[];
  footerColumns: Array<{ label: string; items: NavItem[] }>;
  footerTagline: string;
  location: string;
};

export const site: SiteCopy = {
  mainNav,
  resourcesNav,
  products: productPortfolio,
  footerColumns: Object.entries(footerNav).map(([label, items]) => ({ label, items })),
  footerTagline: siteConfig.footerTagline,
  location: siteConfig.location,
};
