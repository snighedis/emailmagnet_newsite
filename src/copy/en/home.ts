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
  heroVideo: {
    src: "/brand/studio-hero-en.mp4",
    poster: "/brand/studio-hero-en-poster.jpg",
    label:
      "29-second loop: a farm-stay owner asks to answer guests while busy with something else; Dentoku Dev plans it, connects WhatsApp and AI, and shows a sneak peek of Kallmy",
    controls: { play: "Play video", pause: "Pause video" },
  },
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
  // Hart-style: who the studio works for, named by kind of business.
  audience: {
    label: "For",
    items: ["Farm stays and B&Bs", "Professional offices", "Shops", "Workshops"],
  },
  // The brief: the visitor's own baseline (src/lib/brief.ts). It shows what a task
  // costs today, never a saving (CONTEXT.md, "Measured saving").
  brief: {
    eyebrow: "The brief",
    title: "How many hours does it cost you today?",
    lede: "Four taps. The number stays on your phone until you decide to send it.",
    business: {
      legend: "Your business",
      options: {
        farmstay: "Farm stay or B&B",
        office: "Professional office",
        shop: "Shop",
        workshop: "Workshop or craft",
        other: "Something else",
      },
    },
    task: {
      legend: "The repetitive work that takes most of your time",
      options: {
        email: "Answering email",
        quotes: "Preparing quotes",
        retyping: "Retyping data",
        bookings: "Handling bookings",
        other: "Something else",
      },
    },
    times: { legend: "How many times a week" },
    minutes: { legend: "Minutes each time", unit: "min" },
    result: {
      idle: "Answer the four questions to see what it costs you today.",
      lead: "Today it costs you",
      tail: "a month.",
    },
    text: {
      hours: { underOne: "less than an hour", one: "about {count} hour", other: "about {count} hours" },
      formula: "{times} × {minutes} min × {weeks} weeks",
      mail: {
        subject: "[Brief] {task}, {hours} a month",
        intro: "Hello Dentoku Dev, here is my brief from the website.",
        business: "Business",
        task: "Repetitive work",
        frequency: "How often",
        baseline: "What it costs me today",
        formula: "Calculation",
        method: "My own estimate: we will measure it properly in the proposal.",
        more: "Anything else you should know:",
      },
    },
    method: "This is where the proposal starts. After release we measure it again, together.",
    send: "Send it by email",
    copy: "Copy the brief",
    copied: "Copied",
    fallback: "Mail app not opening? Write to us at",
    privacy: "Nothing leaves this page until you press Send in your own mail app.",
  },
};

export type HomeCopy = typeof home;
