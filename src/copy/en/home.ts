import {
  consultingFaq,
  contentHubs,
  homeHero,
  howWeWork,
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
  // What we automate: the four repetitive jobs the brief asks about. Capabilities,
  // not past projects: no client claims until there are measured ones (CONTEXT.md).
  automate: {
    eyebrow: "What we automate",
    title: "The work you redo every week, done by software",
    description:
      "Four repetitive jobs that cost a small business hours. For each one, what the software does and what stays with you.",
    doesLabel: "What the software does",
    staysLabel: "What stays with you",
    items: [
      {
        title: "Answering customer email",
        does: "Reads the requests that come in, drafts a reply in your tone with the right details (availability, prices, terms) and leaves it in your drafts.",
        stays: "You read it, fix it if needed, and press Send.",
      },
      {
        title: "Preparing quotes",
        does: "Takes the request, matches it against your price list and fills in the quote in your own format, ready to check.",
        stays: "You decide the final price and terms.",
      },
      {
        title: "Retyping data between tools",
        does: "Moves data between the tools you already use (email, spreadsheets, your management software, Shopify) without anyone retyping it.",
        stays: "You see what moved, and where.",
      },
      {
        title: "Handling bookings and orders",
        does: "Collects requests and confirmations, updates the calendar and sends the reminders.",
        stays: "You handle the exceptions.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "Scope, ship, support, measure",
    description:
      "A written proposal with today's hours in it, working software early, a direct line after launch, and the same hours measured again.",
    steps: howWeWork,
  },
  products: {
    eyebrow: "What we ship",
    title: "Four products. Public stores. Public reviews.",
    // Products are proof of reliability, not of capability (redesign ticket 03).
    description:
      "The software we build, publish and maintain for ourselves, with users and reviews on the stores. It says one thing: what we ship stays online and works.",
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
    items: ["Online shops", "Professional practices", "Vacation rentals", "Agencies and studios"],
  },
  // Closes the page: back to the brief at the top, or the contact page.
  closing: {
    title: "Want a number to start from?",
    description:
      "Answer the four questions at the top of the page: in a minute you know how many hours a month repetitive work costs you today. Or write to us.",
    primary: { label: "Go to the brief", href: "#brief" },
    secondary: { label: "Write to us", href: "/contact" },
  },
  // The brief: the visitor's own baseline (src/lib/brief.ts). It shows what a task
  // costs today, never a saving (CONTEXT.md, "Measured saving").
  brief: {
    eyebrow: "The brief",
    title: "How many hours does it cost you today?",
    lede: "Four taps. The number stays on your phone until you decide to send it.",
    // Option keys differ by language on purpose (each market has its own kinds of
    // business, redesign ticket 08), so they are typed as a plain record.
    business: {
      legend: "Your business",
      options: {
        online: "Online shop (Shopify or other)",
        practice: "Professional practice",
        rental: "Vacation rental or B&B",
        agency: "Agency or studio",
        other: "Something else",
      } as Record<string, string>,
    },
    task: {
      legend: "The repetitive work that takes most of your time",
      options: {
        email: "Answering customer email",
        quotes: "Preparing quotes",
        retyping: "Retyping data between tools",
        bookings: "Handling bookings and orders",
        other: "Something else",
      } as Record<string, string>,
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
    barCta: "See it",
    send: "Send it by email",
    copy: "Copy the brief",
    copied: "Copied",
    fallback: "Mail app not opening? Write to us at",
    privacy: "Nothing leaves this page until you press Send in your own mail app.",
  },
};

export type HomeCopy = typeof home;
