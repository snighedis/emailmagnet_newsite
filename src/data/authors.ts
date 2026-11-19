import { siteConfig } from "@/data/site";

export type Author = {
  id: string;
  /** Display name shown in bylines and Person schema. */
  name: string;
  /** Job title / role, e.g. "Founder & AI Automation Specialist at Dentoku Dev". */
  role: string;
  /** Canonical profile URL — the founder page. */
  url: string;
  /** First-person, factual bio. Powers the article author-context block and E-E-A-T. */
  bio: string;
  /** The person's own profiles for Person.sameAs, never the studio's accounts. */
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
    role: "Founder & AI Automation Specialist at Dentoku Dev",
    url: `${siteConfig.url}/founder`,
    // No "every tool myself": the studio works with collaborators chosen for each
    // project, and must not read as a one-person business (owner, 18 Nov 2026).
    bio: "I'm Nicola Orlandi, founder of Dentoku Dev, a software studio in Milan. I do the analysis and write the code, with collaborators chosen for each project, and the studio builds and maintains its own products (EmailMagnet, ClickPilot AI, Volume Control PRO and Countdown321), so what you read here comes from making them, not from the outside looking in.",
    // Nicola's own profiles (the portfolio links the same LinkedIn), so AI search
    // and Google can tie the founder entity together; the studio's accounts stay
    // on the Organization.
    sameAs: ["https://www.linkedin.com/in/nicolaorlandi/", "https://portfolio-nicola-orlandi.vercel.app/"],
  },
} satisfies Record<string, Author>;

export const defaultAuthor: Author = authors.nicolaOrlandi;
