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
  socialImage: "/brand/emailmagnet-cover.png",
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

export const emailMagnetConfig = {
  name: "EmailMagnet",
  parentBrand: "Dentoku Dev",
  href: "/emailmagnet",
  icon: "/brand/emailmagnet-icon.png",
  logo: "/brand/emailmagnet-logo-wide.png",
  cover: "/brand/emailmagnet-cover.png",
  description:
    "EmailMagnet helps users find and extract emails from websites while browsing, so teams can move faster and skip manual copy-paste work.",
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
  { label: "Contact", href: "/contact" },
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
    { label: "AI overview", href: "/overview" },
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "/docs" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About", href: "/about" },
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
    price: "free",
    description: "Start with core extraction and export tools at no cost.",
    features: [
      "200 emails per month.",
      "Export up to 100 emails at once.",
      "Basic email extraction only.",
      "CSV, TXT export.",
      "Email support.",
    ],
    cta: {
      label: "Continue Free",
      href: emailMagnetConfig.secondaryCta.href,
    },
  },
  {
    name: "PRO plan",
    eyebrow: "Early adopter",
    price: "$19",
    description: "One payment. Lifetime access.",
    features: [
      "Unlimited email extraction.",
      "Unlimited export size.",
      "AUTOSAVE while browsing.",
      "AUTOMATION: Bulk extraction (1,000+ URLs).",
      "Faster processing.",
      "CSV, TXT export.",
      "Priority email support.",
    ],
    cta: emailMagnetConfig.primaryCta,
    featured: true,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How does EmailMagnet work?",
    answer:
      "EmailMagnet is a Chrome Extension that works while you browse. Open a website as usual, click the extension, and EmailMagnet detects email addresses from the page so you can save or export them.",
  },
  {
    question: "How reliable is EmailMagnet?",
    answer:
      "EmailMagnet finds emails directly from real website content. If an email is visible or accessible on the page, EmailMagnet will usually detect it instantly.",
  },
  {
    question: "Is email extraction legal?",
    answer:
      "Email extraction can be legal when it complies with privacy and anti-spam rules such as GDPR and CAN-SPAM. Use extracted emails responsibly, follow applicable laws, and avoid unsolicited or abusive outreach.",
  },
  {
    question: "What are the free version restrictions?",
    answer:
      "The free version includes 200 emails per month, export up to 100 emails at once, basic email extraction, CSV/TXT export, and email support. PRO removes export limits and adds autosave, bulk extraction, faster processing, and priority support.",
  },
  {
    question: "Does EmailMagnet require a scraping tool?",
    answer:
      "No. EmailMagnet is built as a Chrome Extension for browsing workflows. It helps extract emails from websites without requiring a separate scraping setup.",
  },
  {
    question: "Can I pay monthly?",
    answer:
      "EmailMagnet PRO is positioned as lifetime access for a one-time $19 payment. There is no monthly subscription on the current pricing structure.",
  },
];

export const valueProps: FeatureItem[] = [
  {
    title: "Capture emails while you browse",
    description:
      "EmailMagnet detects email addresses directly from page content, so manual scanning is no longer part of the workflow.",
    icon: MailCheck,
  },
  {
    title: "Export in formats teams already use",
    description:
      "Save extracted emails as CSV or TXT for follow-up, list building, and handoff to the next step.",
    icon: FileDown,
  },
  {
    title: "Upgrade once, keep PRO forever",
    description:
      "PRO is a one-time $19 purchase with lifetime access and no recurring subscription.",
    icon: BadgeCheck,
  },
];

export const howItWorks = [
  {
    title: "Install the extension",
    description: "Add EmailMagnet to Chrome and keep it ready in your browser toolbar.",
    icon: Puzzle,
  },
  {
    title: "Browse any website",
    description: "Open the pages you already review for research, prospecting, or outreach.",
    icon: Globe2,
  },
  {
    title: "Extract and export",
    description: "Collect detected emails in one click, then export instantly.",
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
  "Extract emails from websites in one click.",
  "$19 lifetime, no subscription.",
  "CSV and TXT export.",
];

export const accentIcon = Sparkles;
