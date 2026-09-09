import {
  consultingFaq,
  contentHubs,
  homeHero,
  howWeWork,
  servicesShowcase,
  siteConfig,
} from "@/data/site";

/**
 * English homepage copy. The narrative objects (hero, showcase, process, FAQ)
 * stay in src/data/site.ts and are re-exported here unchanged; this module
 * adds the strings that used to live in the page JSX.
 */
export const home = {
  meta: {
    // The layout's default title, kept verbatim so the home <title> does not change.
    title: "Dentoku Dev: Custom Software, Chrome Extensions and Shopify Apps",
    description: siteConfig.description,
  },
  itemListName: "Dentoku Dev software products",
  hero: homeHero,
  heroVideoLabel: "Short looping showcase of the four Dentoku Dev products",
  trustBar: { reviewLabel: "Chrome Web Store", labels: { on: "on", outOfFive: "out of 5" } },
  services: {
    eyebrow: "What we build",
    title: "We only sell what we already ship",
    description:
      "No slide decks. No paper promises. Every service below is backed by a product we build, run, and maintain for ourselves.",
    tablistLabel: "What we build",
    /** `{name}` is replaced with the product name. */
    explore: "Explore {name}",
    items: servicesShowcase,
  },
  process: {
    eyebrow: "How we work",
    title: "You talk to the builder, not an account manager",
    description:
      "Small team. Direct answers. Working software early. The same discipline that keeps four products alive on public stores.",
    steps: howWeWork,
  },
  products: {
    eyebrow: "Products",
    title: "Four products. Public stores. Public reviews.",
    overviewLink: "See the full overview",
    viewProduct: "View product",
    // Deep product pages we keep linked from the homepage for SEO (crawl paths).
    related: {
      "/countdown321": [
        { label: "Shopify countdown timer guide", href: "/countdown321/shopify-countdown-timer-app" },
        { label: "Shopify urgency app guide", href: "/countdown321/shopify-urgency-app" },
      ],
    } as Record<string, Array<{ label: string; href: string }>>,
  },
  explore: {
    eyebrow: "Explore more",
    title: "Guides, comparisons, and docs",
    // The four content hubs plus the docs and blog entry points.
    links: [
      ...contentHubs,
      {
        title: "Documentation",
        href: "/docs/getting-started",
        description: "Setup guides, export workflows, and responsible-use documentation.",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Practical guides on lead research, compliance, and browser workflows.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Working with us",
    description: "The questions worth asking before you hire a small studio.",
    items: consultingFaq,
  },
  cta: {
    eyebrow: "Start",
    title: "Tell us what you want to build",
    description:
      "One call. A written proposal. Software that ships. Or try one of our products first and judge the craft yourself.",
    primary: { label: "Start your project", href: "/contact" },
    secondary: { label: "See what we build", href: "/#services" },
  },
};

export type HomeCopy = typeof home;
