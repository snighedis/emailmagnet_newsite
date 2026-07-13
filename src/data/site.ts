import type { IconType } from "@/components/ui/icons";
import {
  BadgeCheck,
  Download,
  FileDown,
  Globe2,
  Layers3,
  MailCheck,
  MousePointerClick,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "@/components/ui/icons";

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

export type FeatureItem = {
  title: string;
  description: string;
  icon: IconType;
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
  logo: "/brand/dentoku-dev-logo-128x128.png",
  socialImage: "/brand/dentoku-social-preview.png",
  googleAnalyticsId: "G-WKYOX8TLY9",
  googleAdsId: "AW-16653473127",
  description:
    "Dentoku Dev is a Milan software studio that ships four browser and ecommerce products and builds custom, AI-ready software for small and mid-sized businesses.",
  // Footer-only positioning line. Kept separate from the SEO `description` so the
  // meta keeps its product keywords while the footer speaks to the studio's range.
  footerTagline:
    "A software studio that ships its own products and provides digital and AI consulting.",
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
  role: "CEO & Founder",
  href: "/founder",
  location: "Milan, Italy",
  description:
    "Nicola Orlandi is the CEO and founder of Dentoku Dev, a software studio building Chrome extensions, Shopify apps, AI writing tools, and focused productivity software.",
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

export const footerNav = {
  Products: productPortfolio.map((product) => ({
    label: product.name,
    href: product.href,
  })),
  Resources: [
    { label: "Overview", href: "/overview" },
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "/docs" },
    { label: "FAQ", href: "/faq" },
    { label: "Chrome email extractor", href: "/emailmagnet/chrome-email-extractor" },
    { label: "Free email extractor", href: "/emailmagnet/free-email-extractor" },
    { label: "Extractor vs scraper", href: "/emailmagnet/email-extractor-vs-scraper" },
    { label: "Sales prospecting", href: "/use-cases/emailmagnet-sales-prospecting" },
    { label: "Manual copy comparison", href: "/compare/manual-email-copying" },
    { label: "Chrome integration", href: "/integrations/emailmagnet-chrome" },
    { label: "Email extraction glossary", href: "/glossary/email-extraction" },
    { label: "ClickPilot AI writer", href: "/clickpilot-ai/ai-writing-assistant-chrome-extension" },
    { label: "Chrome volume booster", href: "/volume-control-pro/chrome-volume-booster-600" },
    { label: "Getting started guide", href: "/docs/getting-started" },
    { label: "Exporting emails", href: "/docs/exporting-emails" },
    { label: "Responsible use", href: "/docs/responsible-use" },
    { label: "Shopify countdown timer", href: "/countdown321/shopify-countdown-timer-app" },
    { label: "Shopify urgency app", href: "/countdown321/shopify-urgency-app" },
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
    description: "Try the browser workflow on real research sessions before you need higher limits.",
    features: [
      "200 emails per month.",
      "Export up to 100 emails at once.",
      "One-click email extraction.",
      "CSV and TXT export.",
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
      "Unlimited email extraction.",
      "Unlimited export size.",
      "Autosave while browsing.",
      "Bulk extraction for reviewed URL lists.",
      "Faster processing for recurring research sessions.",
      "CSV and TXT export.",
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
    question: "What are the free version restrictions?",
    answer:
      "EmailMagnet Free includes 200 email extractions per month, exports up to 100 emails at once, CSV/TXT export, and email support. It is built for trying the workflow and handling occasional research sessions.",
  },
  {
    question: "What does the PRO version include?",
    answer:
      "PRO ($19 lifetime) includes unlimited email extraction, unlimited export size, autosave while browsing, bulk extraction for reviewed URL lists, faster processing, and priority support. No monthly subscription.",
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

export const valueProps: FeatureItem[] = [
  {
    title: "Stop manual copy-paste forever",
    description:
      "Capture visible emails from pages you are already reviewing instead of scanning, copying, and formatting each address by hand.",
    icon: MailCheck,
  },
  {
    title: "Export ready-to-use contact lists",
    description:
      "Save reviewed emails as CSV or TXT files that can move into spreadsheets, CRMs, qualification steps, or follow-up workflows.",
    icon: FileDown,
  },
  {
    title: "Keep source context in the workflow",
    description:
      "EmailMagnet fits research sessions where you can see why an address is public before deciding whether it belongs in your list.",
    icon: BadgeCheck,
  },
];

export const howItWorks = [
  {
    title: "Install and start instantly",
    description: "Add EmailMagnet to Chrome in seconds. No setup, no configuration needed.",
    icon: Puzzle,
  },
  {
    title: "Browse websites as usual",
    description: "Visit company directories, contact pages, vendor lists, event pages, or profiles with visible business emails.",
    icon: Globe2,
  },
  {
    title: "Extract and export instantly",
    description: "Capture visible emails, review the result, and export CSV or TXT for spreadsheets, CRM import, or qualification.",
    icon: Download,
  },
];

export const trustCues: FeatureItem[] = [
  {
    title: "Clear product ownership",
    description:
      "Dentoku Dev is the parent company, and every product page states that relationship clearly.",
    icon: ShieldCheck,
  },
  {
    title: "Chrome-first workflow",
    description:
      "EmailMagnet is designed for teams that work inside Chrome and want a lighter alternative to complex scraping setups.",
    icon: MousePointerClick,
  },
  {
    title: "Fast extraction flow",
    description:
      "The product turns visible website email discovery into a short, repeatable action.",
    icon: Zap,
  },
];

export const companyTrustCues: FeatureItem[] = [
  {
    title: "Focused product studio",
    description:
      "Dentoku Dev builds practical software products for browser, commerce, and productivity workflows.",
    icon: Layers3,
  },
  {
    title: "Chrome and commerce workflows",
    description:
      "The portfolio structure supports Chrome extensions, Shopify apps, and focused software tools under one company brand.",
    icon: Puzzle,
  },
  {
    title: "Clear product pages",
    description:
      "Each product gets a dedicated page with direct positioning, support paths, and practical documentation.",
    icon: Globe2,
  },
  {
    title: "Honest pricing, no lock-in.",
    description:
      "No hidden fees, no price games, no cancellation hoops. Each product page states its exact pricing model upfront, and is just as upfront about what the tool won't do.",
    icon: ShieldCheck,
  },
];

export const dentokuFrameworks = [
  {
    name: "Focused Tool Method",
    description:
      "Dentoku Dev builds small, clear software products around one painful workflow before expanding features.",
    steps: ["Define the repeated task", "Ship the shortest useful workflow", "Document the product entity"],
  },
  {
    name: "BROWSE Framework",
    description:
      "EmailMagnet turns browser-based email discovery into a repeatable extraction workflow.",
    steps: ["Browse", "Recognize", "Organize", "Work the list", "Save", "Export"],
  },
  {
    name: "CLEAR Contact Workflow",
    description:
      "A responsible-use checklist for turning extracted contacts into qualified outreach lists.",
    steps: ["Context", "Lawful purpose", "Evaluate", "Audit trail", "Respect opt-outs"],
  },
  {
    name: "TIMER Framework",
    description:
      "Countdown321 helps Shopify stores structure urgency messages around a clear campaign moment.",
    steps: ["Timing", "Incentive", "Message", "Event", "Result"],
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

export const heroHighlights = [
  "Built for public business contact research.",
  "CSV and TXT export for review workflows.",
  "Keeps the source page for every captured email.",
];

export const socialProof = {
  trustedBy: "Built for practical lead research",
  stats: [
    { label: "Setup", value: "Chrome" },
    { label: "Data source", value: "Visible emails" },
    { label: "Export", value: "CSV/TXT" },
  ],
};

// ---------------------------------------------------------------------------
// Homepage: consulting-first narrative (hero, showcase, process, FAQ).
// All homepage copy lives here, not in JSX, so a phased Italian localization
// can swap these objects without touching page structure.
// ---------------------------------------------------------------------------

export const homeHero = {
  eyebrow: "Independent software studio, Milan",
  titleLead: "Custom software, built by people",
  titleAccent: "who ship their own.",
  subhead:
    "We design and build AI-ready tools, browser extensions, and ecommerce apps for small and mid-sized businesses. Our four products are the proof.",
  primaryCta: { label: "Start your project", href: "/contact" },
  secondaryCta: { label: "See what we build", href: "/#services" },
  trustNote: "4 products live on public stores",
};

export type ServiceShowcaseMedia =
  | { kind: "image"; src: string; alt: string; width?: number; height?: number }
  | { kind: "video"; src: string }
  | { kind: "volume-demo" };

export type ServiceShowcaseItem = {
  key: string;
  label: string;
  title: string;
  description: string;
  outcomes: string[];
  proof: { name: string; href: string; note: string };
  media: ServiceShowcaseMedia;
};

// Services-as-tabs, each proven by a product we shipped for ourselves. This one
// section replaces the old Portfolio + Studio method + Frameworks + Spotlight.
export const servicesShowcase: ServiceShowcaseItem[] = [
  {
    key: "internal-tools",
    label: "Internal tools & automation",
    title: "Workflow tools that remove manual work",
    description:
      "We build the small, focused tools your team is missing: data collection, research workflows, back-office automation. EmailMagnet is our own take on this. It turned manual email copy-paste into a one-click browser workflow.",
    outcomes: [
      "Replace repetitive copy-paste with one-click workflows",
      "Export-ready data: CSV, TXT, or straight into your stack",
      "Scoped small, shipped fast, easy to maintain",
    ],
    proof: {
      name: "EmailMagnet",
      href: "/emailmagnet",
      note: "Built for ourselves. 5.0 stars on the Chrome Web Store.",
    },
    media: {
      kind: "image",
      src: "/brand/emailmagnet-hero-new.webp",
      alt: "EmailMagnet extension collecting business emails while browsing",
      width: 1361,
      height: 852,
    },
  },
  {
    key: "ai-integration",
    label: "AI integration",
    title: "AI where it actually helps",
    description:
      "We integrate AI into real workflows: writing, summarizing, translating, custom automations. ClickPilot AI is our proof. It is an assistant that works inside any text field in the browser, no tab switching.",
    outcomes: [
      "AI features embedded in the tools you already use",
      "Practical scope: fix, rewrite, summarize, translate, custom actions",
      "Your data stays in your accounts, with your own API keys",
    ],
    proof: {
      name: "ClickPilot AI",
      href: "/clickpilot-ai",
      note: "Built for ourselves. Live on the Chrome Web Store.",
    },
    media: { kind: "video", src: "/clickpilot-ai-demo.mp4" },
  },
  {
    key: "ecommerce",
    label: "Ecommerce & Shopify",
    title: "Storefront apps that drive action",
    description:
      "We build Shopify apps and storefront features for merchants: campaign tools, urgency, conversion helpers. Countdown321 is ours. It powers countdown timers for product launches and promotions.",
    outcomes: [
      "Shopify apps built on the official platform",
      "Campaign-ready: fixed-date, recurring, and evergreen logic",
      "Designed for non-technical store owners",
    ],
    proof: {
      name: "Countdown321",
      href: "/countdown321",
      note: "Built for ourselves. Live on the Shopify App Store.",
    },
    media: {
      kind: "image",
      src: "/brand/countdown321-hero.webp",
      alt: "Countdown321 Shopify countdown timer on a storefront",
    },
  },
  {
    key: "browser-products",
    label: "Browser extensions",
    title: "Extensions people install and keep",
    description:
      "We design Chrome extensions end to end: product, UX, store listing, updates. Volume Control PRO is ours. It is a free audio booster that raises tab volume up to 600%.",
    outcomes: [
      "Full lifecycle: build, review, publish, maintain",
      "Chrome Web Store policies handled for you",
      "Small, fast, and privacy-respecting by default",
    ],
    proof: {
      name: "Volume Control PRO",
      href: "/volume-control-pro",
      note: "Built for ourselves. Free on the Chrome Web Store.",
    },
    media: { kind: "volume-demo" },
  },
];

// "How we work": direct with the builder, no agency layers.
export const howWeWork = [
  {
    title: "Scope",
    description:
      "A short call and a written proposal: what we build, what it costs, when it ships. No obligation until you approve it.",
  },
  {
    title: "Ship",
    description:
      "We design and build in short cycles, with working software you can try from the first weeks.",
  },
  {
    title: "Support",
    description:
      "After launch you keep a direct line to the people who wrote the code. No handoffs, no ticket queues.",
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
      "With a short call and a written proposal covering scope, cost, and timeline. You know exactly what we build and when it ships before committing to anything.",
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
    question: "Where are you based?",
    answer: "Milan, Italy. We work with clients remotely, in English and Italian.",
  },
  {
    question: "How do we know you can ship?",
    answer:
      "Judge us by what we build for ourselves: four products live on public stores, with real users and public reviews. Client work gets the same craft.",
  },
];

export const accentIcon = Sparkles;
