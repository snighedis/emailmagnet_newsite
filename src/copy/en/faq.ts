import { faqItems } from "@/data/site";

export const faq = {
  meta: {
    title: "EmailMagnet FAQ and Support",
    description:
      "Answers to common EmailMagnet questions about how it works, reliability, legality, what the free plan includes, and lifetime PRO access.",
  },
  breadcrumb: "FAQ",
  // Two authored lines: the headline rises line by line.
  title: ["Questions about", "EmailMagnet."],
  description: "Concise answers about EmailMagnet, exports, pricing, reliability, and responsible use.",
  storeCta: "Add to Chrome, free",
  // The short answer: one statement set large, the plans beneath it.
  shortAnswer: {
    title: "Short answer",
    body: "EmailMagnet is a Chrome extension by Dentoku Dev for finding and extracting emails from websites while browsing.",
    plans: "Its Free plan has no monthly or per-export limit; PRO adds autosave, bulk extraction, and priority support.",
  },
  questionsTitle: "All the questions",
  related: {
    ariaLabel: "FAQ related pages",
    title: "Related pages",
    links: [
      { label: "EmailMagnet product page", href: "/emailmagnet" },
      { label: "EmailMagnet pricing", href: "/pricing" },
      { label: "Responsible use guide", href: "/docs/responsible-use" },
      { label: "Contact Dentoku Dev", href: "/contact" },
    ],
  },
  items: faqItems,
};

export type FaqCopy = typeof faq;
