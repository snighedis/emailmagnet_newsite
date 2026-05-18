import type { LucideIcon } from "lucide-react";
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
} from "lucide-react";

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
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
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
  logo: "/brand/dentoku-logo.jpg",
  socialImage: "/brand/dentoku-social-preview.png",
  googleAnalyticsId: "G-WKYOX8TLY9",
  description:
    "Dentoku Dev is a product studio building focused Chrome extensions, Shopify apps, and lightweight software for practical business workflows.",
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
  name: "Dentoku Dev founder",
  role: "Founder-led product studio",
  href: "/founder",
  location: "Milan, Italy",
  description:
    "Dentoku Dev is a founder-led software studio building Chrome extensions, Shopify apps, AI writing tools, and focused productivity software.",
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
  icon: "/brand/emailmagnet-icon.png",
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
};

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const productPortfolio: ProductItem[] = [
  {
    name: "EmailMagnet",
    href: "/emailmagnet",
    category: "Chrome Extension",
    description: "Chrome extension for finding and extracting emails while browsing.",
    icon: "/brand/emailmagnet-icon.png",
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
    { label: "Shopify countdown timer", href: "/countdown321/shopify-countdown-timer-app" },
    { label: "Shopify urgency app", href: "/countdown321/shopify-urgency-app" },
    { label: "What is EmailMagnet?", href: "/blog/what-is-emailmagnet" },
    { label: "Stop copying emails manually", href: "/blog/stop-copying-emails-manually" },
    { label: "Qualify extracted emails", href: "/blog/how-to-qualify-extracted-emails-before-outreach" },
    { label: "Free vs PRO guide", href: "/blog/free-vs-pro-when-to-upgrade-emailmagnet" },
    { label: "Compliance checklist", href: "/blog/email-extraction-compliance-checklist" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Founder", href: founderConfig.href },
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: siteConfig.social.linkedin },
    { label: "X/Twitter", href: siteConfig.social.x },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
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
    featured: true,
  },
  {
    name: "PRO plan",
    eyebrow: "For recurring research",
    price: "$19",
    description: "One payment for teams that collect, review, and export contacts repeatedly.",
    features: [
      "Unlimited email extraction.",
      "Unlimited export size.",
      "Autosave while browsing.",
      "Bulk extraction for reviewed URL lists.",
      "Faster processing for recurring research sessions.",
      "CSV and TXT export.",
      "Priority email support.",
    ],
    cta: emailMagnetConfig.primaryCta,
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

export const heroHighlights = [
  "Built for public business contact research.",
  "CSV and TXT export for review workflows.",
  "Free plan includes 200 emails/month.",
];

export const socialProof = {
  trustedBy: "Built for practical lead research",
  stats: [
    { label: "Setup", value: "Chrome" },
    { label: "Data source", value: "Visible emails" },
    { label: "Export", value: "CSV/TXT" },
  ],
};

export const accentIcon = Sparkles;
