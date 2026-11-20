/**
 * Quote software: the first of the four automation pages (keyword research of
 * 17 Nov 2026, OpenSEO log). It answers the searches for a quoting program
 * ("programma preventivi", "software preventivi", "preventivo excel") with the
 * studio's offer: a quote filled in from the client's own price list.
 *
 * Claims are the home's (home.automate, consulting FAQ): no prices, no savings,
 * no clients. The price list and the quote are sample data, labelled as such.
 */
export const quotes = {
  meta: {
    title: "Custom quote software for small businesses",
    description:
      "Quote software built on your price list: it reads the request, fills in the quote in your format and leaves it for you to check. A Milan software studio.",
  },
  breadcrumb: "Quote software",
  // The search phrase itself, two lines at most at every width; the standfirst says the rest.
  title: ["Software for your quotes."],
  standfirst:
    "Built on your price list. The software uses AI to read the customer's request, match it against your price list and fill in the quote in your own format. You check price and terms, then you send it.",
  primaryCta: { label: "Count your hours", href: "/#brief" },
  secondaryCta: { label: "Write to us", href: "/contact" },

  // The page's photographs (components/marketing/photo.tsx): the reader's world, not clients.
  photos: {
    hero: "Hands typing on a laptop at a carpenter's workbench, among tools and sheets of paper",
    handwritten: "A craftsman writing by hand on a clipboard at his workbench",
    creditLabel: "Photos:",
    creditSource: "on Pexels.",
  },

  // The live thing: pick lines from a sample price list, the quote fills itself in.
  demo: {
    heading: "From your price list to the quote",
    lead: "Pick the lines the customer asked for. The quote fills in from the price list, in the format you already use.",
    // The customer's email the quote answers: it asks for the two lines picked to start.
    request: {
      subject: "Quote request",
      from: "Bianchi Srl",
      body: "Good morning, we need a website with a year of maintenance. Could you send us a quote?",
    },
    listLabel: "Price list",
    sample: "Sample price list",
    client: "Bianchi Srl",
    quoteTitle: "Quote",
    totalLabel: "Total",
    empty: "No lines yet",
    status: "Filled in from your price list",
    // [line, amount in euro cents]. The first two are picked to start: the home film's quote.
    items: [
      ["Website", 240000],
      ["Yearly maintenance", 48000],
      ["Product photos", 60000],
      ["Online shop setup", 90000],
    ] as Array<[string, number]>,
    initial: [0, 1],
    locale: "en-IE",
  },

  // Three ways to make a quote, told honestly: the reader searched for a program.
  choice: {
    heading: "A ready program, Excel, or custom: which pays off?",
    items: [
      {
        lead: "A ready-made quoting program",
        body: "works when your quotes are simple and you are the one who types them in, line by line. Many are free, and for a few quotes a month they may be all you need.",
      },
      {
        lead: "An Excel template",
        body: "works while the price list is short and one person keeps it up to date. When requests arrive by email, someone still has to read them and copy the lines across.",
      },
      {
        lead: "Custom software",
        body: "is for when the quote starts from a written request and from your own rules: your price list, your combinations, your format. It does the reading and the filling in, and you keep the decision.",
      },
    ],
    note: "If a ready-made program is enough for you, we tell you on the first call.",
    // The Excel template as interface, beside the heading: the same quote, typed by hand.
    sheet: {
      file: "quote.xlsx",
      columns: ["Line", "Amount"],
      rows: [
        ["Website", "€2,400"],
        ["Yearly maintenance", "€480"],
      ],
      totalLabel: "Total",
      total: "€2,880",
      status: "Typed in by hand",
    },
  },

  // What the software does, in the order it happens.
  flow: {
    heading: "What the software does",
    steps: [
      {
        title: "Reads the request.",
        description: "The customer's email, or the form on your website: what they want, how much, by when.",
      },
      {
        title: "Finds it in your price list.",
        description: "It matches each request to the right lines and prices, with the rules you use today.",
      },
      {
        title: "Fills in your quote.",
        description: "In your own format, the one your customers already know, ready to check.",
      },
      {
        title: "Copies the data across.",
        description: "Customer and amount go into your spreadsheet or management software, without anyone retyping them.",
      },
    ],
    stays: "Stays with you: the final price and terms, and the Send button.",
    // The last step as interface: the quote's total copied to the client sheet.
    data: {
      from: "Quote",
      to: "Client sheet",
      client: "Client",
      clientValue: "Bianchi Srl",
      amount: "Amount",
      amountValue: "€2,880",
      status: "Copied from the quote",
    },
  },

  // The method, told for quotes.
  method: {
    heading: "How we work",
    items: [
      {
        lead: "First we count the hours.",
        body: "How many quotes a week, how many minutes each. The written proposal starts from that number and says what we build, what it costs and when it is ready.",
      },
      {
        lead: "It works with what you already use.",
        body: "We build around your price list, your quote template and your tools (spreadsheets, management software, email) instead of replacing them.",
      },
      {
        lead: "The code is yours.",
        body: "On final payment the code written for you becomes yours, with the documentation for any developer to carry it on.",
      },
    ],
  },

  faq: {
    title: "Questions about quote software",
    items: [
      {
        question: "How much does custom quote software cost?",
        answer:
          "It depends on what we build, and you know it in writing before you commit. The first call is free and ends with a proposal: what we do, what it costs, when it is ready.",
      },
      {
        question: "Is there free quote software?",
        answer:
          "Yes, there are free programs and templates, and for simple quotes they can be enough. Custom software makes sense when quotes start from requests that someone has to read and from a price list with your own rules.",
      },
      {
        question: "Can I keep my Excel or Word quote?",
        answer:
          "Yes. Your template stays the format of the quote: the software fills it in for you, so your customers receive the same document as today.",
      },
      {
        question: "Does the quote go out to the customer on its own?",
        answer:
          "No. The software prepares it and leaves it for you to check. You decide price and terms, and you send it.",
      },
      {
        question: "Does it work with the software I already use?",
        answer:
          "Yes. Most of the time we connect it to tools you already have: spreadsheets, CRMs, Shopify, email, other APIs. We build around what you use, we do not replace it.",
      },
      {
        question: "Where does my data go?",
        answer:
          "We build the tools on your accounts and your keys, not ours. The proposal lists in writing the external services the software uses: you know beforehand where the data goes, and you can say no.",
      },
    ],
  },
};

export type QuotesCopy = typeof quotes;
