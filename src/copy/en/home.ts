import {
  consultingFaq,
  contentHubs,
  homeHero,
  howWeWork,
} from "@/data/site";

/**
 * English homepage copy. The narrative objects (hero, showcase, process, FAQ)
 * stay in src/data/site.ts and are re-exported here unchanged; this module
 * adds the strings that used to live in the page JSX.
 */
export const home = {
  meta: {
    // The home speaks to small businesses first; the products have their own pages.
    // Also the title and text of the link preview.
    title: "Dentoku Dev: custom software for small businesses",
    description:
      "A Milan software studio. We automate the emails, quotes, retyped data and bookings of small businesses, and count with you the hours you save.",
  },
  itemListName: "Dentoku Dev software products",
  hero: homeHero,
  heroVideo: {
    src: "/brand/studio-hero-v2-en.mp4",
    poster: "/brand/studio-hero-v2-en-poster.jpg",
    // The same film laid out at 4:5, shown below 1024px where the 2:1 film's type is too small.
    phone: {
      src: "/brand/studio-hero-v2-phone-en.mp4",
      poster: "/brand/studio-hero-v2-phone-en-poster.jpg",
      width: 1080,
      height: 1350,
    },
    // AI Act Art. 50(4): the footage of people at work is AI-generated. The film carries
    // its own "AI-generated" label in every frame, poster included; below 1024px it is too
    // small to read, so the page shows aiDisclosure there instead.
    label:
      "37-second loop with AI-generated footage: an accountant, an agency and a farm stay lose time on emails, data copied by hand and double bookings; Dentoku Dev's method from understanding the problem to shipping, with Kallmy as an example in production, ending on the brief field",
    controls: { play: "Play video", pause: "Pause video" },
    aiDisclosure: "AI-generated",
  },
  // One sentence under the brief: who the studio works for, and the public proof.
  // The rating is the real Chrome Web Store score (src/data/site.ts).
  proof: {
    audience:
      "We work with online shops, professional practices, vacation rentals, and agencies and studios.",
    rating: "Our four products are live on public stores, rated {rating} out of 5 on the Chrome Web Store.",
  },
  // What we automate: the four repetitive jobs the brief asks about. Capabilities,
  // not past projects: no client claims until there are measured ones (CONTEXT.md).
  automate: {
    heading: "What we automate",
    statement:
      "The software answers email, writes quotes, moves your data and keeps bookings in order. You keep the decisions.",
    staysLabel: "Stays with you:",
    items: [
      {
        title: "Answering customer email.",
        does: "Reads the requests that come in, drafts a reply in your tone with the right details (availability, prices, terms) and leaves it in your drafts.",
        stays: "you read it, fix it if needed, and press Send.",
      },
      {
        title: "Preparing quotes.",
        does: "Takes the request, matches it against your price list and fills in the quote in your own format, ready to check.",
        stays: "the final price and terms.",
      },
      {
        title: "Retyping data between tools.",
        does: "Moves data between the tools you already use (email, spreadsheets, your management software, Shopify) without anyone retyping it.",
        stays: "seeing what moved, and where.",
      },
      {
        title: "Handling bookings and orders.",
        does: "Collects requests and confirmations, updates the calendar and sends the reminders.",
        stays: "the exceptions.",
      },
    ],
  },
  process: {
    heading: "How we work",
    steps: howWeWork,
  },
  products: {
    title: "Our own software",
    // Products are proof of reliability, not of capability (redesign ticket 03).
    caption:
      "EmailMagnet, Volume Control PRO and ClickPilot AI on the Chrome Web Store, Countdown321 on the Shopify App Store. We build, publish and maintain them ourselves.",
    overviewLink: "See all products",
  },
  explore: {
    title: "Guides and docs",
    lead: "Read the",
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
    title: "Before you start",
    items: consultingFaq,
  },
  // Closes the page: the written proposal as a card, with the number it starts from.
  closing: {
    title: "Start from your hours.",
    fill: ["Today it costs you", "hours a month."],
    description: "Four questions, one minute. The proposal starts from that number.",
    aside:
      "The written proposal says what we build, what it costs and when it is ready, and it starts from the hours repetitive work costs you today.",
    primary: { label: "Count your hours", href: "#brief" },
  },
  // The brief: the visitor's own baseline (src/lib/brief.ts). It shows what a task
  // costs today, never a saving (CONTEXT.md, "Measured saving").
  brief: {
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
