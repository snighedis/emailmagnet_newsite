import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Download,
  FileDown,
  Globe2,
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

export const siteConfig = {
  name: "EmailMagnet",
  companyName: "Dentoku Dev",
  url: "https://www.dentokudev.com",
  description:
    "EmailMagnet helps users find and extract emails from websites quickly while browsing, saving time and eliminating manual copy-paste work.",
  supportEmail: "support@dentokudev.com",
  location: "Milan, Italy",
  primaryCta: {
    label: "Unlock PRO for $19",
    href: "https://buy.stripe.com/9B6eV64rk7iE64R68vgw006",
  },
  secondaryCta: {
    label: "Start for free",
    href: "https://chromewebstore.google.com/",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/dentoku-dev/",
    x: "https://x.com/dentokudev",
  },
};

export const mainNav: NavItem[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  Product: [
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Security", href: "/security" },
    { label: "Docs", href: "/docs" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: siteConfig.social.linkedin },
    { label: "Twitter/X", href: siteConfig.social.x },
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
    description: "A simple way to try EmailMagnet while browsing.",
    features: [
      "200 emails per month.",
      "Export up to 100 emails at once.",
      "Basic email extraction only.",
      "CSV, TXT export.",
      "Email support.",
    ],
    cta: {
      label: "Continue Free",
      href: siteConfig.secondaryCta.href,
    },
  },
  {
    name: "PRO plan",
    eyebrow: "Early adopter",
    price: "$19",
    description: "Pay once - Lifetime access",
    features: [
      "Unlimited email extraction.",
      "Unlimited export size.",
      "AUTOSAVE while browsing.",
      "AUTOMATION: Bulk extraction (1,000+ URLs).",
      "Faster processing.",
      "CSV, TXT export.",
      "Priority email support.",
    ],
    cta: siteConfig.primaryCta,
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
    title: "Find emails while you browse",
    description:
      "EmailMagnet detects email addresses from website content so you do not need to scan pages manually.",
    icon: MailCheck,
  },
  {
    title: "Export in practical formats",
    description:
      "Save extracted emails as CSV or TXT for follow-up workflows, research lists, and outreach preparation.",
    icon: FileDown,
  },
  {
    title: "Pay once for PRO",
    description:
      "The PRO plan uses lifetime access positioning: one $19 payment and no monthly subscription.",
    icon: BadgeCheck,
  },
];

export const howItWorks = [
  {
    title: "Install the extension",
    description: "Add EmailMagnet to Chrome and keep it available while you browse.",
    icon: Puzzle,
  },
  {
    title: "Browse any website",
    description: "Open the pages you already research, prospect, or review.",
    icon: Globe2,
  },
  {
    title: "Extract and export",
    description: "Collect detected emails in one click and export them instantly.",
    icon: Download,
  },
];

export const trustCues: FeatureItem[] = [
  {
    title: "Clear data handling",
    description:
      "Security and privacy pages explain how EmailMagnet is intended to handle user workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Chrome-first workflow",
    description:
      "EmailMagnet is designed for users who live in the browser and need a lighter workflow than external scraping tools.",
    icon: MousePointerClick,
  },
  {
    title: "Fast extraction flow",
    description:
      "The product focuses on turning visible website email discovery into a short, repeatable action.",
    icon: Zap,
  },
];

export const placeholderProofPoints = [
  "Customer logos placeholder",
  "Product screenshots placeholder",
  "Testimonials placeholder",
  "Release notes placeholder",
  "Case studies placeholder",
  "Usage statistics placeholder",
];

export const contentHubs = [
  {
    title: "Use cases",
    href: "/use-cases/sales-prospecting",
    description: "Workflow pages for prospecting, research, recruiting, and small-business outreach.",
  },
  {
    title: "Glossary",
    href: "/glossary/email-extraction",
    description: "Definitions for email extraction, bulk extraction, CSV export, autosave, and compliance terms.",
  },
  {
    title: "Comparisons",
    href: "/compare/manual-email-copying",
    description: "Citation-friendly comparison pages for manual workflows and heavier scraping tools.",
  },
  {
    title: "Integrations",
    href: "/integrations/chrome",
    description: "Integration pages starting with Chrome and export workflows.",
  },
];

export const heroHighlights = [
  "Extract emails from any website in one click.",
  "$19 lifetime - no subscription.",
  "CSV and TXT export.",
];

export const accentIcon = Sparkles;
