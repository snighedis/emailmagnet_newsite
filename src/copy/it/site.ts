import type { SiteCopy } from "@/copy/en/site";
import { footerNav, productPortfolio } from "@/data/site";

/**
 * Italian navigation. Rule for labels: a link is translated only when the
 * page it opens exists in Italian (one row in src/i18n/slugs.ts). Links to
 * English-only pages keep their English label, so the label always matches
 * the page the visitor lands on. The legal labels are translated because the
 * legal pages are localised in the same phase.
 */
const productCopy: Record<string, Pick<SiteCopy["products"][number], "category" | "description">> = {
  EmailMagnet: {
    category: "Estensione Chrome",
    description: "Estensione Chrome per trovare ed estrarre email mentre navighi.",
  },
  "ClickPilot AI": {
    category: "Estensione Chrome",
    description:
      "Assistente di scrittura AI per Chrome con azioni di correzione, riscrittura, riassunto, traduzione e scorciatoie personalizzate nei campi di testo.",
  },
  "Volume Control PRO": {
    category: "Estensione Chrome",
    description:
      "Amplificatore audio per le schede di Chrome, fino al 600% e con memoria del volume per ogni sito.",
  },
  Countdown321: {
    category: "App Shopify",
    description: "App Shopify per conto alla rovescia e messaggi a tempo in vetrina.",
  },
};

const products = productPortfolio.map((product) => {
  const translated = productCopy[product.name];
  if (!translated) {
    throw new Error(`Missing Italian copy for product "${product.name}" in src/copy/it/site.ts`);
  }
  return { ...product, ...translated };
});

export const site: SiteCopy = {
  mainNav: [
    { label: "Servizi", href: "/#services" },
    { label: "Chi siamo", href: "/about" },
  ],
  resourcesNav: [
    { label: "Overview", href: "/overview" },
    { label: "Docs", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  products,
  footerColumns: [
    { label: "Prodotti", items: products.map((product) => ({ label: product.name, href: product.href })) },
    // English-only destinations: same list, same labels as the English footer.
    { label: "Risorse", items: footerNav.Resources },
    {
      label: "Azienda",
      items: [
        { label: "Chi siamo", href: "/about" },
        { label: "Fondatore", href: "/founder" },
        { label: "Contatti", href: "/contact" },
      ],
    },
    {
      label: "Note legali",
      items: [
        { label: "Informativa sulla privacy", href: "/privacy" },
        { label: "Termini di servizio", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ],
  footerTagline:
    "Uno studio software che realizza i propri prodotti e offre consulenza digitale e AI.",
  location: "Milano, Italia",
  description:
    "Dentoku Dev è uno studio software di Milano che pubblica quattro prodotti per browser ed ecommerce e realizza software su misura, pronto per l'AI, per piccole e medie imprese.",
};
