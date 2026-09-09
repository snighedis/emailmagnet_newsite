import { siteConfig } from "@/data/site";

export const about = {
  meta: {
    title: "About Dentoku Dev Products",
    description:
      "Learn about Dentoku Dev, the product studio behind EmailMagnet, ClickPilot AI, Volume Control PRO, and focused software for browser workflows.",
  },
  breadcrumb: "About",
  itemListName: "Dentoku Dev product portfolio",
  eyebrow: "About Dentoku Dev",
  title: "Dentoku Dev builds focused Chrome extensions, Shopify apps, and productivity tools",
  description: siteConfig.description,
  shortAnswer: {
    title: "Short answer",
    body: "Dentoku Dev is the product studio behind EmailMagnet, ClickPilot AI, Volume Control PRO, and Countdown321. The studio builds small, practical software products for browser, ecommerce, and business workflows.",
    founder: {
      before: "The studio is founded and maintained by",
      link: "the Dentoku Dev founder",
      after: ", with product support handled through Dentoku Dev.",
    },
  },
  cards: [
    {
      title: "What Dentoku Dev is",
      body: "Dentoku Dev is a product studio based in Milan, Italy. It owns and maintains a portfolio of focused software products rather than a single broad SaaS platform.",
    },
    {
      title: "What the studio builds",
      body: "The portfolio includes Chrome extensions for browser workflows, Shopify apps for ecommerce stores, and lightweight utilities for practical business tasks.",
    },
    {
      title: "How products are organized",
      body: "Each product has a dedicated page, support path, metadata, and structured content so users can quickly understand what the product does and who it is for.",
    },
    {
      title: "Who the products are for",
      body: "Dentoku Dev products are built for operators, founders, merchants, researchers, and teams that want focused tools without unnecessary platform complexity.",
    },
  ],
  portfolio: {
    title: "Dentoku Dev product portfolio",
    description:
      "The portfolio is intentionally split into clear product entities. This makes support, documentation, pricing, and product discovery easier to understand.",
    caption: "Dentoku Dev products and use cases",
    columns: { product: "Product", category: "Category", solves: "What it solves" },
  },
};

export type AboutCopy = typeof about;
