import type { AboutCopy } from "@/copy/en/about";

/**
 * Italian About page. Part of the consulting funnel (CONTEXT.md, "Transcreation"):
 * same keys and claims as English, argument rewritten for a small Italian business,
 * in the homepage's voice ("tu").
 */
export const about: AboutCopy = {
  meta: {
    title: "Chi siamo: Dentoku Dev, studio software a Milano",
    description:
      "Dentoku Dev è uno studio software di Milano guidato dal fondatore: software su misura che toglie il lavoro ripetitivo alle piccole imprese, con il risparmio misurato.",
  },
  breadcrumb: "Chi siamo",
  itemListName: "Portfolio prodotti di Dentoku Dev",
  title: ["Uno studio,", "un fondatore."],
  standfirst:
    "Siamo a Milano e costruiamo software su misura per le piccole imprese: togliamo il lavoro ripetitivo e contiamo con te le ore che ti fa risparmiare.",
  primaryCta: { label: "Raccontaci il problema", href: "/contact" },
  founderLink: "Chi è il fondatore",
  statement: {
    heading: "In breve",
    body: "Il fondatore segue ogni progetto dal problema al rilascio, con collaboratori scelti per progetto quando il lavoro lo richiede. Non ci sono account manager né passaggi di mano.",
    founder: {
      before: "Chi c’è dietro lo studio lo trovi nella pagina del",
      link: "fondatore",
      after: ".",
    },
  },
  principles: {
    heading: "Come lavoriamo",
    items: [
      {
        lead: "Prima una proposta scritta.",
        body: "Ti diciamo per iscritto cosa costruiamo, quanto costa, quando è pronto e quante ore al mese ti costa oggi il problema. Poi software da provare dalle prime settimane, e una linea diretta dopo il rilascio.",
      },
      {
        lead: "Il risparmio si conta, non si promette.",
        body: "Non promettiamo percentuali. Contiamo con te le ore prima di iniziare e le ricontiamo dopo il rilascio: è il numero da cui parte la proposta e quello con cui la verifichiamo.",
      },
      {
        lead: "Il codice è tuo.",
        body: "Con il saldo il codice scritto per il tuo progetto diventa tuo, con la documentazione per farlo continuare a qualsiasi sviluppatore. I nostri componenti riutilizzabili restano in licenza d’uso perpetua.",
      },
      {
        lead: "Il nostro software è online.",
        body: "Oltre ai progetti per i clienti costruiamo, pubblichiamo e manteniamo quattro prodotti nostri, con utenti e recensioni sugli store: la prova che quello che rilasciamo resta online e funziona.",
      },
    ],
  },
  portfolio: {
    title: "Il software che pubblichiamo",
    description:
      "Quattro prodotti nostri, sugli store pubblici. Strumenti semplici e specifici: non la vetrina di cosa possiamo costruire per te, ma la prova che quello che rilasciamo resta online.",
    overviewLink: "Vedi tutti i prodotti",
  },
};
