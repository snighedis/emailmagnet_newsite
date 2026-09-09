import { faqItems } from "@/data/site";

export const faq = {
  meta: {
    title: "EmailMagnet FAQ and Support",
    description:
      "Answers to common EmailMagnet questions about how it works, reliability, legality, free plan restrictions, and lifetime PRO access.",
  },
  breadcrumb: "FAQ",
  eyebrow: "FAQ",
  title: "EmailMagnet frequently asked questions",
  description: "Concise answers about EmailMagnet, exports, pricing, reliability, and responsible use.",
  shortAnswer: {
    title: "Short answer",
    body: "EmailMagnet is a Chrome extension by Dentoku Dev for finding and extracting emails from websites while browsing. It has a Free plan for light use and a PRO plan for unlimited extraction, autosave, bulk extraction, and priority support.",
  },
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
