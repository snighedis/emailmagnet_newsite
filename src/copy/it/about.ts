import type { AboutCopy } from "@/copy/en/about";

/**
 * Italian About page. Part of the consulting funnel (CONTEXT.md, "Transcreation"):
 * same keys and claims as English, argument rewritten for a small Italian business.
 */
export const about: AboutCopy = {
  meta: {
    title: "Chi siamo: Dentoku Dev, studio software a Milano",
    description:
      "Dentoku Dev è uno studio software di Milano guidato dal fondatore: software su misura che toglie il lavoro ripetitivo alle piccole imprese, con il risparmio misurato.",
  },
  breadcrumb: "Chi siamo",
  itemListName: "Portfolio prodotti di Dentoku Dev",
  eyebrow: "Chi siamo",
  title: "Uno studio software di Milano, guidato dal fondatore",
  description:
    "Costruiamo software su misura per le piccole imprese: togliamo il lavoro ripetitivo con l’AI e misuriamo quanto fa risparmiare.",
  shortAnswer: {
    title: "In breve",
    body: "Dentoku Dev è uno studio software di Milano. Lo guida il fondatore, che segue ogni progetto dal problema al rilascio, con collaboratori scelti per progetto quando il lavoro lo richiede. Non ci sono account manager né passaggi di mano.",
    founder: {
      before: "Chi c’è dietro lo studio lo trovi nella pagina del",
      link: "fondatore",
      after: ".",
    },
  },
  cards: [
    {
      title: "Come lavoriamo",
      body: "Quattro passi: una proposta scritta con costi, tempi e le ore al mese che il problema ti costa oggi; software da provare dalle prime settimane; una linea diretta dopo il rilascio; e le stesse ore misurate di nuovo.",
    },
    {
      title: "Il risparmio, misurato",
      body: "Non promettiamo percentuali. Contiamo con te le ore che il lavoro ripetitivo ti costa prima di iniziare, e le ricontiamo dopo il rilascio. È il numero da cui parte la proposta e quello con cui la verifichiamo.",
    },
    {
      title: "Il codice è tuo",
      body: "Al saldo il codice scritto per il tuo progetto è tuo, con la documentazione per farlo proseguire a qualsiasi sviluppatore. I nostri componenti riutilizzabili restano in licenza d’uso perpetua.",
    },
    {
      title: "Software nostro, online",
      body: "Oltre ai progetti per i clienti costruiamo, pubblichiamo e manteniamo quattro prodotti nostri, con utenti e recensioni sugli store. Sono la prova che quello che rilasciamo resta online e funziona.",
    },
  ],
  portfolio: {
    title: "Il software che pubblichiamo e manteniamo",
    description:
      "Quattro prodotti nostri, sugli store pubblici. Sono strumenti semplici e specifici: non la vetrina di cosa possiamo costruire per te, ma la prova che quello che rilasciamo resta online.",
    caption: "Prodotti Dentoku Dev e cosa fanno",
    columns: { product: "Prodotto", category: "Categoria", solves: "Cosa fa" },
  },
};
