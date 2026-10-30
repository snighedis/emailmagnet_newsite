import { founderConfig } from "@/data/site";

export const founder = {
  meta: {
    title: "Nicola Orlandi, founder of Dentoku Dev",
    description:
      "Nicola Orlandi, founder of Dentoku Dev in Milan: custom software that takes the repetitive work off small businesses, with the saving measured.",
  },
  breadcrumb: "Founder",
  role: founderConfig.role,
  location: founderConfig.location,
  description: founderConfig.description,
  primaryCta: { label: "Tell us the problem", href: "/contact" },
  studioLink: "About the studio",
  shortAnswer: {
    title: "Short answer",
    /** `{location}`, `{name}` and `{role}` are replaced by the page; the role is
     *  already shown beside the name, so the statement leaves it out. */
    body: "Run by {name} in {location}: he follows every project himself, from the problem to the release, with collaborators brought in when the work needs them.",
  },
  // Each point opens with a bold run-in; set as reading text in two columns.
  proofPoints: {
    heading: "How he works",
    items: [
      {
        title: "From the problem to the release.",
        description:
          "The first call, the written proposal, the build and the release all go through the same person. You explain your work once, and nothing gets lost in handoffs.",
      },
      {
        title: "The saving, counted.",
        description:
          "Every proposal starts from the hours a month the repetitive work costs you today, and after release you count them again together. No promised percentages: your own number, before and after.",
      },
      {
        title: "Remote, by video call.",
        description:
          "The studio is in Milan and works with clients by video call. You try the software yourself, in your browser or in your own tools, from the first weeks.",
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
      "Besides client projects, he publishes and maintains four products of his own on public stores: simple, specific tools with public users and reviews.",
    overviewLink: "See all products",
  },
};

export type FounderCopy = typeof founder;
