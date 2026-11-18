/**
 * The Milan page: it answers "software house in Milan for small businesses"
 * (AI visibility baseline of 17 Nov 2026, OpenSEO report 6045de84: answers
 * cite each studio's own "software house Milano" page). The search word in the
 * title, the studio's own word ("software studio") on the page.
 *
 * Claims are the site's: a studio of Milan, a free 30-minute first video call,
 * video calls across Italy, the written proposal, the hours counted, the code
 * handed over. No prices, no clients, no team size. No street address and no
 * meetings in person (owner, 18 Nov 2026: there is no studio to visit; Via
 * Bullona 8 is a residence and appears only in the legal pages).
 */
export const milan = {
  meta: {
    title: "Software house in Milan for small businesses",
    description:
      "Dentoku Dev is a software studio from Milan: AI automation and custom software for small businesses. It starts with a free 30-minute video call, from anywhere in Italy.",
  },
  breadcrumb: "Software house in Milan",
  title: ["Software studio in Milan."],
  standfirst:
    "From Milan we build AI automation and custom software for small businesses. It starts with a free 30-minute video call, from anywhere in Italy.",
  primaryCta: { label: "Count your hours", href: "/#brief" },
  secondaryCta: { label: "Write to us", href: "/contact" },

  // The page's photographs (components/marketing/photo.tsx): the city, not clients.
  photos: {
    hero: "A historic tram passes the Arco della Pace in Milan",
    street: "Corso Sempione in Milan in autumn, with the Arco della Pace at the end of the avenue",
    tram: "A man with an umbrella crosses the tram tracks in Milan",
    creditLabel: "Photos:",
    creditSource: "on Pexels.",
  },

  // The first call as a piece of interface, over the hero picture.
  call: {
    title: "First call",
    tag: "Free",
    rows: [
      ["How", "Video call"],
      ["Length", "30 minutes"],
      ["Language", "Italian or English"],
    ] as Array<[string, string]>,
    status: "Ends with a written proposal",
  },

  // What the studio builds, the four jobs first.
  build: {
    heading: "What we build for small businesses",
    lead: "Software that takes the repetitive work off the office, built on the tools you already use.",
    items: [
      {
        lead: "Answering email.",
        body: "AI reads the requests and drafts a reply in your tone, with the right details. You read it and press Send.",
      },
      {
        lead: "Preparing quotes.",
        body: "The request is matched against your price list and the quote is filled in your own format, ready to check.",
        link: { label: "How the quote software works", href: "/quote-software" },
      },
      {
        lead: "Moving data.",
        body: "Data goes from email to spreadsheets, management software or Shopify without anyone retyping it.",
      },
      {
        lead: "Bookings and orders.",
        body: "Requests and confirmations are collected, the calendar is updated and the reminders go out.",
      },
    ] as Array<{ lead: string; body: string; link?: { label: string; href: string } }>,
    more: "We also build internal tools, browser extensions and Shopify apps.",
  },

  // The honest difference from a larger software house.
  difference: {
    heading: "How we differ from a software house",
    items: [
      {
        lead: "You talk to the person who writes the code.",
        body: "A founder and collaborators chosen for each project, no account managers in between.",
      },
      {
        lead: "A written proposal before any contract.",
        body: "What we build, what it costs, when it is ready, and how many hours a month the problem costs you today.",
      },
      {
        lead: "The hours, counted twice.",
        body: "Before the project and after release, together. That is how you know whether the software did its job.",
      },
      {
        lead: "The code is yours.",
        body: "On final payment the code written for you becomes yours, with the documentation for any developer to carry it on.",
      },
    ],
    note: "For an enterprise project a bigger software house is the better choice: we tell you on the first call.",
  },

  // How it starts: the first video call, set large.
  visit: {
    heading: "How it starts",
    lines: ["30 minutes,", "by video call."],
    items: [
      {
        lead: "Free.",
        body: "The first call costs nothing and ends with a written proposal.",
      },
      {
        lead: "From anywhere in Italy.",
        body: "The first call, the proposal and the updates all happen by video call, in Italian or English. You try the software in your browser from the first weeks.",
      },
    ],
    contact: { label: "Write to us", href: "/contact" },
  },

  products: {
    title: "Software we publish ourselves",
    caption:
      "EmailMagnet, Volume Control PRO and ClickPilot AI on the Chrome Web Store, Countdown321 on the Shopify App Store. We build, publish and maintain them from Milan.",
  },

  faq: {
    title: "Questions about working with us",
    items: [
      {
        question: "Are you a software house?",
        answer:
          "We are a software studio: a founder who writes the code and collaborators chosen for each project, with no account managers. We do the work of a software house, on projects sized for small businesses.",
      },
      {
        question: "How does the first call work?",
        answer:
          "It is a free 30-minute video call: you tell us about the work that takes your time and we work out together how many hours it costs you. It ends with a written proposal.",
      },
      {
        question: "Do you only work with businesses in Milan?",
        answer: "No. We work by video call with businesses across Italy, in Italian and English.",
      },
      {
        question: "How much does custom software cost?",
        answer:
          "It depends on what we build, and you know it in writing before you commit. The first call is free and ends with a proposal: what we do, what it costs, when it is ready.",
      },
      {
        question: "What do you automate with AI?",
        answer:
          "The repetitive office work of small businesses: reading emails and drafting replies, preparing quotes from the price list, moving data between programs, handling bookings and orders. AI reads the written requests and prepares the work; you check it and decide.",
      },
      {
        question: "What happens to the software if we stop working together?",
        answer:
          "On final payment the code written for you becomes yours, with the documentation for any developer to carry it on. For our reusable components you get a perpetual licence to use them, so you can maintain and change the software without us.",
      },
    ],
  },
};

export type MilanCopy = typeof milan;
