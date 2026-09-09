import type { AboutCopy } from "@/copy/en/about";
import { site } from "@/copy/it/site";

export const about: AboutCopy = {
  meta: {
    title: "Chi è Dentoku Dev",
    description:
      "Scopri Dentoku Dev, lo studio di prodotto dietro EmailMagnet, ClickPilot AI, Volume Control PRO e software mirato per i flussi di lavoro nel browser.",
  },
  breadcrumb: "Chi siamo",
  itemListName: "Portfolio prodotti di Dentoku Dev",
  eyebrow: "Chi è Dentoku Dev",
  title: "Dentoku Dev realizza estensioni Chrome, app Shopify e strumenti di produttività mirati",
  description: site.description,
  shortAnswer: {
    title: "In breve",
    body: "Dentoku Dev è lo studio di prodotto dietro EmailMagnet, ClickPilot AI, Volume Control PRO e Countdown321. Lo studio realizza prodotti software piccoli e pratici per i flussi di lavoro nel browser, nell'ecommerce e in azienda.",
    founder: {
      before: "Lo studio è fondato e gestito dal",
      link: "fondatore di Dentoku Dev",
      after: ", con il supporto ai prodotti gestito tramite Dentoku Dev.",
    },
  },
  cards: [
    {
      title: "Cos'è Dentoku Dev",
      body: "Dentoku Dev è uno studio di prodotto con sede a Milano. Possiede e mantiene un portfolio di prodotti software mirati, invece di un'unica grande piattaforma SaaS.",
    },
    {
      title: "Cosa costruisce lo studio",
      body: "Il portfolio comprende estensioni Chrome per i flussi di lavoro nel browser, app Shopify per i negozi ecommerce e utility leggere per attività aziendali pratiche.",
    },
    {
      title: "Come sono organizzati i prodotti",
      body: "Ogni prodotto ha una pagina dedicata, un percorso di supporto, metadati e contenuti strutturati, così gli utenti capiscono subito cosa fa e a chi è rivolto.",
    },
    {
      title: "A chi sono rivolti i prodotti",
      body: "I prodotti Dentoku Dev sono pensati per operatori, founder, merchant, ricercatori e team che vogliono strumenti mirati senza la complessità superflua di una piattaforma.",
    },
  ],
  portfolio: {
    title: "Il portfolio prodotti di Dentoku Dev",
    description:
      "Il portfolio è volutamente suddiviso in entità di prodotto distinte. Questo rende più semplici da capire supporto, documentazione, prezzi e scoperta dei prodotti.",
    caption: "Prodotti Dentoku Dev e casi d'uso",
    columns: { product: "Prodotto", category: "Categoria", solves: "Cosa risolve" },
  },
};
