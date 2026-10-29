
export const about = {
  meta: {
    title: "About Dentoku Dev Products",
    description:
      "Learn about Dentoku Dev, the product studio behind EmailMagnet, ClickPilot AI, Volume Control PRO, and focused software for browser workflows.",
  },
  breadcrumb: "About",
  itemListName: "Dentoku Dev product portfolio",
  // Two authored lines: the headline rises line by line.
  title: ["Focused software,", "built in Milan."],
  standfirst:
    "Dentoku Dev is a Milan software studio that ships four browser and ecommerce products and builds custom, AI-ready software for small and mid-sized businesses.",
  primaryCta: { label: "Start your project", href: "/contact" },
  founderLink: "Meet the founder",
  // The short answer, set large as one statement.
  statement: {
    heading: "Short answer",
    body: "Dentoku Dev is the product studio behind EmailMagnet, ClickPilot AI, Volume Control PRO and Countdown321.",
    founder: {
      before: "The studio is founded and maintained by",
      link: "the Dentoku Dev founder",
      after: ", with product support handled through Dentoku Dev.",
    },
  },
  // One reading column, each paragraph opening with a bold run-in.
  principles: {
    heading: "What the studio is",
    items: [
      {
        lead: "A product studio in Milan.",
        body: "Dentoku Dev owns and maintains a portfolio of focused software products rather than a single broad SaaS platform.",
      },
      {
        lead: "Browser, ecommerce, business.",
        body: "The portfolio includes Chrome extensions for browser workflows, Shopify apps for ecommerce stores, and lightweight utilities for practical business tasks.",
      },
      {
        lead: "One page per product.",
        body: "Each product has a dedicated page, support path, metadata, and structured content so users can quickly understand what the product does and who it is for.",
      },
      {
        lead: "Built for people who want focused tools.",
        body: "Dentoku Dev products are built for operators, founders, merchants, researchers, and teams that want focused tools without unnecessary platform complexity.",
      },
    ],
  },
  portfolio: {
    title: "The product portfolio",
    description:
      "The portfolio is intentionally split into clear product entities. This makes support, documentation, pricing, and product discovery easier to understand.",
    overviewLink: "See all products",
  },
};

export type AboutCopy = typeof about;
