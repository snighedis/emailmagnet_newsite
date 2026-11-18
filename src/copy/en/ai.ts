/**
 * The AI consulting page: how the studio works with AI, for the searches
 * "consulenza AI" / "consulente AI" (OpenSEO research of 18 Nov 2026: 520 a
 * month in Italy, a SERP of small consultants) and the AI-answer prompts about
 * AI agencies for small businesses.
 *
 * Its argument is the studio's own, so it does not read like a competitor's
 * "AI agency" page: AI consulting measured in hours (counted before, counted
 * again after release), whoever does the analysis writes the code, support
 * after delivery, and AI the studio ships in its own products. The founder is
 * left to About and Founder (owner, 18 Nov 2026): the page must not read as a
 * one-person business. Written declaratively (owner's request, 18
 * Nov 2026, "saas-copywriter" voice), in the site's plain words.
 *
 * Claims (owner, 18 Nov 2026): the AI and tool accounts are in the client's
 * name; models are used through APIs with training on the data switched off; a
 * DPA is signed as processor; EU servers when the service allows; the price
 * ranges in the FAQ. Everything else is already on the site: the free 30-minute
 * first call, the written proposal, short cycles, the hours counted twice, the
 * code handed over on final payment. No studio to visit, no clients, no savings
 * figures.
 */
export const ai = {
  meta: {
    title: "AI consulting for small businesses, measured in hours",
    description:
      "AI consulting measured in hours: we count what a repetitive job costs you, automate it with AI and count again after release. The person who does the analysis writes the code.",
  },
  breadcrumb: "AI consulting",
  title: ["AI consulting,", "measured in hours."],
  standfirst:
    "Every week a repetitive job takes hours from you. We count them with you, take them off with AI and count them again after release. The person who does the analysis writes the code.",
  primaryCta: { label: "Count your hours", href: "/#brief" },
  secondaryCta: { label: "Write to us", href: "/contact" },

  // The page's photographs (components/marketing/photo.tsx): the reader's world, not clients.
  photos: {
    hero: "A fashion designer at a laptop in a studio, among patterns and garments",
    documents: "Hands checking an invoice beside a calculator and a laptop",
    shop: "A shopkeeper on the phone reads a note outside the shop",
    creditLabel: "Photos:",
    creditSource: "on Pexels.",
  },

  // The first call's count as a piece of interface, over the hero picture.
  card: {
    title: "Analysis",
    tag: "First call",
    rows: [
      ["Job", "Quotes from email"],
      ["Today", "6 hours a week"],
      ["AI", "Reads and fills in"],
      ["You", "Check and send"],
    ] as Array<[string, string]>,
    status: "The number the proposal starts from",
  },

  // The definition, written to be quoted, and the loop of the hours beside it.
  definition: {
    heading: "What AI consulting is",
    body: "AI consulting helps a business see where artificial intelligence saves it time. Dentoku Dev, a software studio from Milan founded in 2024, measures it in hours: it counts with you what a repetitive job costs today, builds the automation on the tools you already use and counts the hours again after release. Whoever gives the advice also writes the code.",
    facts: [
      {
        term: "Before",
        detail: "We count the hours the job costs you each month. The proposal, with price and timing, is written on that number.",
      },
      {
        term: "During",
        detail: "We build the automation on the tools you already use. From the first weeks you try it in your browser.",
      },
      {
        term: "After",
        detail: "We count the hours again, together. The number tells you whether the software did its job.",
      },
      {
        term: "Always",
        detail: "The same team, from the free 30-minute first call to support after release.",
      },
    ],
  },

  // What the AI does in the studio's software, and what stays with a person.
  split: {
    heading: "AI prepares. You decide.",
    lead: "AI reads, pulls out the data and drafts. The decisions that matter stay yours.",
    does: {
      title: "What AI does",
      items: [
        "Reads emails, PDFs and forms and works out what the customer is asking.",
        "Pulls out the data and takes it to the spreadsheet, the management software or Shopify.",
        "Drafts replies in your tone.",
        "Matches the request against your price list and fills in the quote.",
      ],
    },
    stays: {
      title: "What stays with you",
      items: [
        "Deciding prices, discounts and terms.",
        "Reading it over and pressing Send.",
        "The special cases, which the software flags for you.",
        "Choosing which data may leave the business.",
      ],
    },
  },

  // The difference, defined by what the studio is not.
  contrast: {
    heading: "What changes compared with an AI consultant",
    items: [
      { not: "Not advice.", is: "Software that works on your tools." },
      { not: "Not a savings estimate.", is: "The hours, counted before and after." },
      { not: "Not an account manager.", is: "Whoever wrote the code answers you." },
      { not: "Not a specification to write.", is: "A job to count together." },
    ],
  },

  // After delivery, beside the shopkeeper on the phone: continuity, not one person.
  after: {
    heading: "After delivery, you are not on your own",
    items: [
      {
        lead: "A team sized to the project.",
        body: "For each project we bring in the collaborators it needs, and whoever did the analysis follows the work through to delivery.",
      },
      {
        lead: "A direct line.",
        body: "No tickets and no queue: write, on WhatsApp too, and someone who knows your software replies.",
      },
      {
        lead: "Support with a set fee.",
        body: "After release you can keep us on support for a monthly fee, from €250 a month.",
      },
    ],
    link: { label: "Write to us", href: "/contact" },
  },

  // Where the client's data goes (owner's statements, 18 Nov 2026).
  data: {
    heading: "Your data stays in your name",
    items: [
      {
        lead: "Accounts in your name.",
        body: "The accounts for the AI models and the tools are in your business's name, not ours.",
      },
      {
        lead: "No training.",
        body: "We use the models through their APIs, with the option that keeps your data out of training.",
      },
      {
        lead: "A signed DPA.",
        body: "We sign a data processing agreement as your data processor.",
      },
      {
        lead: "European servers, where possible.",
        body: "We choose EU suppliers and servers when the service allows it, and the proposal lists in writing the services the software uses.",
      },
    ],
  },

  // Three things to insist on from any AI supplier.
  demands: {
    heading: "Before you sign, insist on three things",
    lead: "From anyone selling you AI. We give you all three in writing.",
    items: [
      {
        lead: "The hours, in writing.",
        body: "How many hours a month the job costs you today. Without that number, nobody can tell you whether the software worked.",
      },
      {
        lead: "The price, in writing.",
        body: "What gets built, what it costs and when it is ready. Before you commit, not after.",
      },
      {
        lead: "Accounts and code in your name.",
        body: "The accounts are in your business's name and, on final payment, the code is yours: any developer can carry it on.",
      },
    ],
  },

  // When there is no project.
  no: {
    heading: "No hours, no project.",
    body: "If the job does not cost you enough time, or a ready-made program will do, we tell you on the first call.",
    note: "For an enterprise project we point you to a bigger software house.",
  },

  products: {
    title: "We do not just talk about AI. We ship it.",
    caption:
      "ClickPilot AI is our Chrome extension that writes, corrects and translates with AI. We build, publish and maintain it ourselves, like EmailMagnet, Volume Control PRO and Countdown321.",
  },

  faq: {
    title: "Questions about AI consulting",
    items: [
      {
        question: "What does AI consulting do?",
        answer:
          "It shows you where AI saves time in your business. With us it ends in working software, and it is measured in hours: counted before the project and counted again after release.",
      },
      {
        question: "Are you an AI agency?",
        answer:
          "We are a software studio: whoever does the analysis writes the code, with collaborators chosen for each project. The work is an AI agency's, without account managers in between.",
      },
      {
        question: "How much does it cost?",
        answer:
          "It depends on what we build. As a guide: automating one process with AI runs from €1,200 to €6,500, custom software or a management tool from €6,500 to €16,000, and support after release starts at €250 a month. The real price is written in the proposal, after the free first call and before you commit.",
      },
      {
        question: "Do you promise a saving?",
        answer:
          "No. We do not promise a percentage: we count the hours with you before the project and count them again after release. You see the result in the number, not in a promise.",
      },
      {
        question: "When do I see the first result?",
        answer:
          "We work in short cycles: from the first weeks you try the software in your browser. The exact timing is written in the proposal.",
      },
      {
        question: "Do I have to change the programs I use?",
        answer:
          "Almost never. We connect the automation to what you already use: email, spreadsheets, management software, CRM, Shopify. Replacing a tool that works is the last resort.",
      },
      {
        question: "Where does our business data go?",
        answer:
          "It stays on accounts in your business's name. We use the models through their APIs with the option that keeps data out of training, sign a DPA as your data processor and choose European servers when the service allows it.",
      },
    ],
  },
};

export type AiCopy = typeof ai;
