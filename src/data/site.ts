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
    price: "Free",
    eyebrow: "Perfect to get started",
    description: "Start extracting emails immediately at no cost. Upgrade when you need more.",
    features: [
      "200 emails per month",
      "Export up to 100 emails at once",
      "One-click email extraction",
      "CSV and TXT export",
      "Email support",
    ],
    cta: {
      label: "Start Free",
      href: emailMagnetConfig.secondaryCta.href,
    },
    featured: true,
  },
  {
    name: "PRO plan",
    eyebrow: "For power users",
    price: "$19",
    description: "One payment. Lifetime access. No subscription.",
    features: [
      "Unlimited email extraction",
      "Unlimited export size",
      "AUTOSAVE while browsing",
      "AUTOMATION: Bulk extraction (1,000+ URLs)",
      "Faster processing speed",
      "CSV and TXT export",
      "Priority email support",
    ],
    cta: emailMagnetConfig.primaryCta,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How does EmailMagnet work?",
    answer:
      "EmailMagnet is a Chrome Extension that detects email addresses while you browse. Visit any website, click the extension icon, and EmailMagnet instantly finds all visible email addresses. You can then export them as CSV or TXT files with one click.",
  },
  {
    question: "Is there a free version?",
    answer:
      "Yes. EmailMagnet offers a free plan with 200 email extractions per month and exports up to 100 emails at once. This includes CSV/TXT export and email support. Perfect for trying the tool and light usage.",
  },
  {
    question: "What does the PRO version include?",
    answer:
      "PRO ($19 lifetime) includes unlimited email extraction, unlimited export size, autosave while browsing, bulk extraction for 1,000+ URLs, faster processing, and priority support. No monthly subscription.",
  },
  {
    question: "Is email extraction legal and ethical?",
    answer:
      "Email extraction from publicly visible websites can be legal when done responsibly. Follow applicable privacy laws (GDPR, CAN-SPAM), only extract publicly displayed emails, use them for legitimate purposes, and respect opt-out requests. EmailMagnet is designed for responsible prospecting and research.",
  },
  {
    question: "What websites work with EmailMagnet?",
    answer:
      "EmailMagnet works on any website that displays email addresses, including company contact pages, team directories, about pages, and business listings. It detects emails from visible page content, not hidden or protected sources.",
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
      "EmailMagnet detects email addresses automatically from page content. No more tedious manual scanning and copying.",
    icon: MailCheck,
  },
  {
    title: "Export ready-to-use contact lists",
    description:
      "Save extracted emails as CSV or TXT files that work with your CRM, outreach tools, and follow-up workflows.",
    icon: FileDown,
  },
  {
    title: "Start free, upgrade when ready",
    description:
      "Begin with 200 emails/month at no cost. Upgrade to PRO for unlimited extraction at just $19 lifetime.",
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
    description: "Visit company directories, contact pages, or any site with emails. EmailMagnet works in the background.",
    icon: Globe2,
  },
  {
    title: "Extract and export instantly",
    description: "Click once to capture all emails. Export to CSV or TXT for your CRM, outreach tools, or follow-up.",
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
  "Free plan available with 200 emails/month.",
  "CSV and TXT export included.",
];

export const socialProof = {
  trustedBy: "Join professionals who extract smarter",
  stats: [
    { label: "Install time", value: "30 seconds" },
    { label: "Learning curve", value: "Zero setup" },
    { label: "Export speed", value: "Instant CSV" },
  ],
};

export const accentIcon = Sparkles;
