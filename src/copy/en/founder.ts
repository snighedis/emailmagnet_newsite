import { founderConfig } from "@/data/site";

export const founder = {
  meta: {
    title: "Dentoku Dev Founder Led Studio",
    description:
      "Learn about the founder-led Dentoku Dev studio behind EmailMagnet, ClickPilot AI, Countdown321, and focused software tools.",
  },
  breadcrumb: "Founder",
  role: founderConfig.role,
  location: founderConfig.location,
  description: founderConfig.description,
  primaryCta: { label: "Start your project", href: "/contact" },
  studioLink: "About the studio",
  shortAnswer: {
    title: "Short answer",
    /** `{location}`, `{name}` and `{role}` are replaced by the page; the role is
     *  already shown beside the name, so the statement leaves it out. */
    body: "Run by {name} in {location}: he designs, builds, ships and supports every product, with collaborators engaged per project when needed.",
  },
  // Each point opens with a bold run-in; set as reading text in two columns.
  proofPoints: {
    heading: "How the studio works",
    items: [
      {
        title: "Product ownership.",
        description:
          "Dentoku Dev product pages, docs, pricing, and support paths are maintained under one studio entity rather than anonymous single-purpose pages.",
      },
      {
        title: "Browser workflow focus.",
        description:
          "EmailMagnet, ClickPilot AI, and Volume Control PRO all start from the same operating idea: reduce repetitive browser work with narrow, understandable tools.",
      },
      {
        title: "Responsible product content.",
        description:
          "Documentation and blog content cover practical use, export workflows, privacy considerations, and responsible contact handling.",
      },
    ],
  },
  // The career list itself lives in founderConfig.experience (src/data/site.ts).
  experience: {
    heading: "Experience",
    intro:
      "An architect by training, he spent over ten years leading digital communication for design brands before founding Dentoku Dev in 2024.",
    present: "today",
  },
  products: {
    title: "The products he built",
    description:
      "The portfolio is intentionally made of small, specific products. Each tool has a dedicated product page, support route, and documentation path so users can understand what the product does before installing or buying.",
    overviewLink: "See all products",
  },
};

export type FounderCopy = typeof founder;
