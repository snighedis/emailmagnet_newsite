import { founderConfig } from "@/data/site";

export const founder = {
  meta: {
    title: "Dentoku Dev Founder Led Studio",
    description:
      "Learn about the founder-led Dentoku Dev studio behind EmailMagnet, ClickPilot AI, Countdown321, and focused software tools.",
  },
  breadcrumb: "Founder",
  eyebrow: "Founder",
  role: founderConfig.role,
  location: founderConfig.location,
  description: founderConfig.description,
  shortAnswer: {
    title: "Short answer",
    /** `{location}`, `{name}` and `{role}` are replaced by the page. */
    body: "Dentoku Dev is a founder-led software studio based in {location}, run by {name}, {role}. He designs, builds, ships, and supports every product in the portfolio. Focused tools for browser, ecommerce, AI writing, and practical business workflows.",
  },
  proofPoints: [
    {
      title: "Product ownership",
      description:
        "Dentoku Dev product pages, docs, pricing, and support paths are maintained under one studio entity rather than anonymous single-purpose pages.",
    },
    {
      title: "Browser workflow focus",
      description:
        "EmailMagnet, ClickPilot AI, and Volume Control PRO all start from the same operating idea: reduce repetitive browser work with narrow, understandable tools.",
    },
    {
      title: "Responsible product content",
      description:
        "Documentation and blog content cover practical use, export workflows, privacy considerations, and responsible contact handling.",
    },
  ],
  products: {
    title: "Products maintained by Dentoku Dev",
    description:
      "The portfolio is intentionally made of small, specific products. Each tool has a dedicated product page, support route, and documentation path so users can understand what the product does before installing or buying.",
  },
  contact: {
    title: "Contact and support",
    body: "Product support and business questions should go through Dentoku Dev support so each request can be connected to the right product.",
  },
};

export type FounderCopy = typeof founder;
