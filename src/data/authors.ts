import { siteConfig } from "@/data/site";

export type Author = {
  id: string;
  /** Display name shown in bylines and Person schema. */
  name: string;
  /** Job title / role, e.g. "CEO & Founder at Dentoku Dev". */
  role: string;
  /** Canonical profile URL — the founder page. */
  url: string;
  /** First-person, factual bio. Powers the article author-context block and E-E-A-T. */
  bio: string;
  /** Profile links for Person.sameAs. Swap in personal LinkedIn/X when available. */
  sameAs: string[];
  /** Optional headshot path under /public. Adds Person.image when set. */
  image?: string;
};

/**
 * Named authors for E-E-A-T. A single author today; map post.author → an id here
 * if per-post bylines are ever needed.
 */
export const authors = {
  nicolaOrlandi: {
    id: "nicola-orlandi",
    name: "Nicola Orlandi",
    role: "CEO & Founder at Dentoku Dev",
    url: `${siteConfig.url}/founder`,
    bio: "I'm Nicola Orlandi, CEO and founder of Dentoku Dev. I design, build, ship, and support every tool in the studio myself — EmailMagnet, ClickPilot AI, Volume Control PRO, and Countdown321 — so what you read here comes from actually making and maintaining these products, not from the outside looking in.",
    // Default to the company profiles; replace with Nicola's personal LinkedIn/X when available.
    sameAs: [siteConfig.social.linkedin, siteConfig.social.x],
  },
} satisfies Record<string, Author>;

export const defaultAuthor: Author = authors.nicolaOrlandi;
