export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  eyebrow?: string;
  description: string;
  features: string[];
  cta: Cta;
  featured?: boolean;
  /** Small value-anchor line under the price (e.g. "One-time payment."). */
  priceNote?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProductItem = {
  name: string;
  href: string;
  category: string;
  description: string;
  icon: string;
  externalUrl?: string;
  featured?: boolean;
};

export const siteConfig = {
  name: "Dentoku Dev",
  companyName: "Dentoku Dev",
  url: "https://www.dentokudev.com",
  logo: "/brand/dentoku-dev-logo-256.png",
  // The link preview, one per language: made by scripts/social-preview/make.mjs.
  socialImage: {
    en: "/brand/dentoku-social-preview-en.png",
    it: "/brand/dentoku-social-preview-it.png",
  },
  googleAnalyticsId: "G-WKYOX8TLY9",
  googleAdsId: "AW-16653473127",
  description:
    "Dentoku Dev is a Milan software studio that ships four browser and ecommerce products and builds custom, AI-ready software for small and mid-sized businesses.",
  // Footer-only positioning line. Kept separate from the SEO `description` so the
  // meta keeps its product keywords while the footer speaks to the studio's range.
  footerTagline:
    "A Milan software studio. We automate small businesses' repetitive work with AI, and measure how much it saves you.",
  supportEmail: "support@dentokudev.com",
  location: "Milan, Italy",
  primaryCta: {
    label: "View products",
    href: "#products",
  },
  secondaryCta: {
    label: "Contact Dentoku Dev",
    href: "/contact",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/dentoku-dev/",
    x: "https://x.com/dentokudev",
  },
};

export const founderConfig = {
  name: "Nicola Orlandi",
  role: "Founder & AI Automation Specialist",
  href: "/founder",
  location: "Milan, Italy",
  description:
    "Nicola Orlandi is the founder of Dentoku Dev, a Milan software studio. He designs and builds custom software that removes repetitive work from small businesses, and ships the studio's Chrome extensions and Shopify app.",
  // Career, from the founder's public portfolio (portfolio-nicola-orlandi.vercel.app).
  // Employment, not client work: copy says he worked there, never that they are clients.
  experience: [
    { from: 2024, to: null, role: "Founder & AI Automation Specialist", company: "Dentoku Dev", place: { en: "Milan", it: "Milano" } },
    { from: 2023, to: 2024, role: "Digital Communication Manager", company: "Fantini S.p.A.", place: { en: "Pella", it: "Pella" } },
    { from: 2017, to: 2023, role: "Digital Communication & E‑commerce Specialist", company: "Artemide / Danese Milano", place: { en: "Milan", it: "Milano" } },
    { from: 2013, to: 2017, role: "Digital Communication Expert", company: "iGuzzini", place: { en: "Recanati", it: "Recanati" } },
    { from: 2012, to: 2013, role: "Product Assistant, Design Lab", company: "iGuzzini", place: { en: "Recanati", it: "Recanati" } },
  ],
  focusAreas: [
    "Chrome extension workflows",
    "Shopify storefront tools",
    "AI-assisted browser productivity",
    "Small SaaS and indie software products",
  ],
};

export const emailMagnetConfig = {
  name: "EmailMagnet",
  parentBrand: "Dentoku Dev",
  href: "/emailmagnet",
  icon: "/brand/emailmagnet-icon-padded.png",
  logo: "/brand/emailmagnet-logo-wide.png",
  cover: "/brand/emailmagnet-cover.png",
  description:
    "EmailMagnet helps teams collect public business emails while researching relevant websites in Chrome, then export reviewed contacts as CSV or TXT.",
  primaryCta: {
    label: "Unlock PRO for $19",
    href: "https://buy.stripe.com/9B6eV64rk7iE64R68vgw006",
  },
  secondaryCta: {
    label: "Start for free",
    href: "https://chromewebstore.google.com/detail/emailmagnet-email-extract/gnlnbefnecaoocmamafbnefjepbeppli",
  },
  reviewsUrl:
    "https://chromewebstore.google.com/detail/emailmagnet-email-extract/gnlnbefnecaoocmamafbnefjepbeppli/reviews",
  productHuntUrl: "https://www.producthunt.com/products/emailmagnet",
};

// Verbatim Chrome Web Store reviews (5.0★). Keep these in sync with the listing
// so every quote stays verifiable per the product-claims truthfulness rule.
export const emailMagnetTestimonials = [
  {
    quote:
      "Working in sales, this tool is excellent to gather prospect contacts. While simply surfing the web I am collecting contact data effortlessly.",
    name: "Glenn Jacobs",
  },
  {
    quote:
      "EmailMagnet has become an essential tool in my digital toolkit. The way it collects emails while I browse has saved me precious time.",
    name: "lucia nadalin",
  },
  {
    quote: "I really like this extension, it's a very useful tool that saved me a lot of time!",
    name: "Francesco Abenante",
  },
  {
    quote: "What I was looking for. Intuitive, fast, effective!",
    name: "Elena",
  },
];

export const mainNav: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
];

// Grouped under the "Resources" dropdown in the header (Apollo-style richer nav).
// Blog moved here from mainNav; it stays reachable from the footer too.
export const resourcesNav: NavItem[] = [
  { label: "Overview", href: "/overview" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export const productPortfolio: ProductItem[] = [
  {
    name: "EmailMagnet",
    href: "/emailmagnet",
    category: "Chrome Extension",
    description: "Chrome extension for finding and extracting emails while browsing.",
    icon: "/brand/emailmagnet-icon-padded.png",
    featured: true,
  },
  {
    name: "ClickPilot AI",
    href: "/clickpilot-ai",
    category: "Chrome Extension",
    description:
      "AI writing assistant for Chrome with fix, rewrite, summarize, translate, and custom shortcut actions inside text fields.",
    icon: "/brand/clickpilot-ai-icon.png",
  },
  {
    name: "Volume Control PRO",
    href: "/volume-control-pro",
    category: "Chrome Extension",
    description: "Audio booster for Chrome tabs with up to 600% amplification and per-site volume memory.",
    icon: "/brand/volume-control-pro-icon.png",
  },
  {
    name: "Countdown321",
    href: "/countdown321",
    category: "Shopify app",
    description: "Shopify app for countdown and time-based storefront messaging.",
    icon: "/brand/countdown321-icon.png",
    externalUrl: "https://apps.shopify.com/countdown321",
  },
];

// Owned brand properties, consolidated for the Organization `sameAs`. Linking the
// studio to every store listing + profile it controls is the strongest on-site brand
// entity signal: it helps Google connect "Dentoku Dev" and its products across the web
// (brand SERP ownership + knowledge panel eligibility for the specific brand terms).
export const brandProfiles: string[] = [
  siteConfig.social.linkedin,
  siteConfig.social.x,
  emailMagnetConfig.secondaryCta.href, // EmailMagnet — Chrome Web Store
  emailMagnetConfig.productHuntUrl, // EmailMagnet — Product Hunt
  "https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb", // ClickPilot AI — Chrome Web Store
  "https://dentoku.gumroad.com/l/clickpilotAI", // ClickPilot AI — Gumroad
  "https://chromewebstore.google.com/detail/volume-control-pro-600%-s/bjjpdehblihhfdfcoonadnnfmkblmogf", // Volume Control PRO — Chrome Web Store
  "https://apps.shopify.com/countdown321", // Countdown321 — Shopify App Store
];

/** Every search guide, grouped by product: listed on /overview so each one keeps a hub link. */
export const guideLinks: Array<{ product: string; items: NavItem[] }> = [
  {
    product: "EmailMagnet",
    items: [
      { label: "Chrome email extractor", href: "/emailmagnet/chrome-email-extractor" },
      { label: "Free email extractor", href: "/emailmagnet/free-email-extractor" },
      { label: "Email extractor vs scraper", href: "/emailmagnet/email-extractor-vs-scraper" },
      { label: "Sales prospecting", href: "/use-cases/emailmagnet-sales-prospecting" },
      { label: "Manual copying comparison", href: "/compare/manual-email-copying" },
      { label: "Chrome integration", href: "/integrations/emailmagnet-chrome" },
      { label: "Email extraction glossary", href: "/glossary/email-extraction" },
      { label: "Getting started guide", href: "/docs/getting-started" },
      { label: "Exporting emails", href: "/docs/exporting-emails" },
      { label: "Responsible use", href: "/docs/responsible-use" },
    ],
  },
  {
    product: "ClickPilot AI",
    items: [{ label: "AI writing assistant for Chrome", href: "/clickpilot-ai/ai-writing-assistant-chrome-extension" }],
  },
  {
    product: "Volume Control PRO",
    items: [
      { label: "Chrome volume booster", href: "/volume-control-pro/chrome-volume-booster-600" },
      { label: "Chrome volume control extension", href: "/volume-control-pro/chrome-volume-control-extension" },
      { label: "Tab volume control", href: "/volume-control-pro/tab-volume-control" },
    ],
  },
  {
    product: "Countdown321",
    items: [
      { label: "Shopify countdown timer", href: "/countdown321/shopify-countdown-timer-app" },
      { label: "Shopify urgency app", href: "/countdown321/shopify-urgency-app" },
    ],
  },
];

export const footerNav = {
  Products: productPortfolio.map((product) => ({
    label: product.name,
    href: product.href,
  })),
  // The hubs only: the search guides are listed on /overview (guideLinks) and
  // linked from their product pages, so the footer stays a close, not a sitemap.
  Resources: [
    { label: "Overview", href: "/overview" },
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "/docs" },
    { label: "FAQ", href: "/faq" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Founder", href: founderConfig.href },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free plan",
    price: "Free",
    eyebrow: "Perfect to get started",
    description: "Extraction, local autosave and CSV or TXT export, up to 100 addresses per file.",
    features: [
      "One-click email extraction.",
      "CSV and TXT export, up to 100 addresses per file.",
      "Local autosave you control: a history across pages, or only the page you are on.",
      "7 days of PRO with every new install, no card.",
      "Email support.",
    ],
    cta: {
      label: "Start Free",
      href: emailMagnetConfig.secondaryCta.href,
    },
  },
  {
    name: "PRO plan",
    eyebrow: "Best value",
    price: "$19",
    priceNote: "One-time payment. No subscription, ever.",
    description: "Pay once, keep it for life. No subscription, no seats, no renewals.",
    features: [
      "Every email from every page in one list.",
      "Bulk extraction across a list of URLs, up to 1,000 per run.",
      "CSV and TXT export with no cap.",
      "Priority email support.",
    ],
    cta: {
      label: "Get lifetime PRO",
      href: emailMagnetConfig.primaryCta.href,
    },
    featured: true,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How does EmailMagnet work?",
    answer:
      "EmailMagnet is a Chrome extension that detects visible email addresses while you browse relevant websites. Open a contact page, directory, vendor list, or public profile, run EmailMagnet, review the detected emails, then export the list as CSV or TXT.",
  },
  {
    question: "How reliable is EmailMagnet?",
    answer:
      "EmailMagnet is designed for visible email detection on pages you are already reviewing in Chrome. Results depend on how the website displays contact information, so users should always review extracted addresses before exporting or using them.",
  },
  {
    question: "What does the free version include?",
    answer:
      "EmailMagnet Free includes one-click extraction, local autosave you control, CSV/TXT export of up to 100 addresses per file, and email support. Every new install also gets 7 days of PRO, with no card.",
  },
  {
    question: "What does the PRO version include?",
    answer:
      "PRO ($19 once, lifetime) puts every email from every page in one list, scans a list of URLs in bulk (up to 1,000 per run), exports every result with no cap, and adds priority support. No monthly subscription.",
  },
  {
    question: "Is email extraction legal?",
    answer:
      "Email extraction from publicly visible websites can be legal when done responsibly. Follow applicable privacy laws such as GDPR and CAN-SPAM, only collect publicly displayed emails, use them for legitimate business purposes, keep source context, and respect opt-out requests. EmailMagnet is designed for responsible research, not automatic outreach.",
  },
  {
    question: "What websites work with EmailMagnet?",
    answer:
      "EmailMagnet works on websites that display visible email addresses, including company contact pages, team directories, about pages, business listings, partner pages, and event pages. It detects emails from visible page content, not hidden, protected, or private sources.",
  },
  {
    question: "How do I export the emails?",
    answer:
      "After extracting emails, click the export button in the EmailMagnet popup. Choose CSV for spreadsheet compatibility or TXT for plain text. Files download instantly to your computer and work with most CRMs and outreach tools.",
  },
];

export const contentHubs = [
  {
    title: "Use cases",
    href: "/use-cases/emailmagnet-sales-prospecting",
    description: "Practical workflows for prospecting, research, recruiting, and small-business outreach.",
  },
  {
    title: "Glossary",
    href: "/glossary/email-extraction",
    description: "Definitions for email extraction, bulk extraction, CSV export, autosave, and compliance terms.",
  },
  {
    title: "Comparisons",
    href: "/compare/manual-email-copying",
    description: "Clear comparison pages for manual workflows and heavier scraping tools.",
  },
  {
    title: "Integrations",
    href: "/integrations/emailmagnet-chrome",
    description: "Integration pages starting with Chrome and export workflows.",
  },
];

// Curated, high-value internal links shared by the content hubs (PlannedContentPage)
// and product money pages (MoneyPage). Rendered as a "Related resources" block so
// these deeper pages cross-link each other instead of sitting as crawl orphans.
export const relatedResourceLinks: NavItem[] = [
  { label: "EmailMagnet overview", href: "/overview" },
  { label: "Sales prospecting use case", href: "/use-cases/emailmagnet-sales-prospecting" },
  { label: "Email extraction glossary", href: "/glossary/email-extraction" },
  { label: "Manual copying comparison", href: "/compare/manual-email-copying" },
  { label: "Chrome integration", href: "/integrations/emailmagnet-chrome" },
  { label: "Free email extractor", href: "/emailmagnet/free-email-extractor" },
  { label: "Email extractor vs scraper", href: "/emailmagnet/email-extractor-vs-scraper" },
  { label: "Getting started guide", href: "/docs/getting-started" },
];

// ---------------------------------------------------------------------------
// Homepage: consulting-first narrative (hero, showcase, process, FAQ).
// These objects are the ENGLISH source of truth: src/copy/en/home.ts re-exports
// them. The Italian homepage lives in src/copy/it/home.ts, typed against the
// English module and transcreated for the Italian market (CONTEXT.md,
// "Transcreation"): change a claim here and update the Italian module too.
// ---------------------------------------------------------------------------

export const homeHero = {
  // Two authored lines: the headline rises line by line (masked reveal).
  title: ["Repetitive work,", "done by software."],
  standfirst:
    "A Milan software studio. Four products you can install today, and custom software for small businesses that measures the hours it saves.",
  primaryCta: { label: "Count your hours", href: "#brief" },
  secondaryCta: { label: "Write to us", href: "/contact" },
};

// "How we work": direct with the builder, no agency layers. Each stage is one
// line of display type that starts with its order word, so no numbers are shown.
export const howWeWork = [
  {
    title: "First, we count the hours.",
    description:
      "A short call and a written proposal: what we build, what it costs, when it ships, and how many hours a month the problem costs you today. No obligation until you approve it.",
  },
  {
    title: "Then we build.",
    description:
      "We design and build in short cycles, with working software you can try from the first weeks.",
  },
  {
    title: "After launch, we stay.",
    description:
      "After launch you keep a direct line to the people who wrote the code. No handoffs, no ticket queues.",
  },
  {
    title: "Finally, we count again.",
    description:
      "After release we count the monthly hours again, together. It is the number the proposal started from, and it says whether the software did what it was meant to.",
  },
];

export const consultingFaq: FaqItem[] = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Custom software for small and mid-sized businesses: internal tools, workflow automation, browser extensions, Shopify and ecommerce apps, and AI integration into existing processes. If it looks like one of our own products, we are a strong fit.",
  },
  {
    question: "How does a project start?",
    answer:
      "With a short call and a written proposal covering scope, cost, and timeline, plus how many hours a month the problem costs you today. You know exactly what we build and when it ships before committing to anything. After release we measure the saving together.",
  },
  {
    question: "Who will actually work on my project?",
    answer:
      "The same small team that designs, builds, and ships the four products on this site. You talk directly to the people writing the code, not an account manager.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Yes. Most projects plug into tools you already use: spreadsheets, CRMs, Shopify, browser workflows, and APIs. We build around your stack instead of replacing it.",
  },
  {
    question: "Do you use AI in your own work?",
    answer:
      "Yes: assistants for writing code and text, and tools that transcribe calls. We say so before we start and put it in the engagement letter, with the list of tools and where the data goes.",
  },
  {
    question: "Where are you based?",
    answer: "Milan, Italy. We work with clients remotely, in English and Italian.",
  },
];

