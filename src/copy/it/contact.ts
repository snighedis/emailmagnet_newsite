import type { ContactCopy } from "@/copy/en/contact";

/**
 * Italian Contact page. Part of the consulting funnel (redesign tickets 05 and 11):
 * "two ways", the brief and the free form, in the homepage's voice ("tu").
 */
export const contact: ContactCopy = {
  meta: {
    title: "Contatta Dentoku Dev, studio software a Milano",
    description:
      "Raccontaci il lavoro che ti ruba tempo: ti risponde chi scrive il codice. Prima call gratuita, poi una proposta scritta con costi e tempi.",
  },
  breadcrumb: "Contatti",
  contactPointName: "Contatta il supporto Dentoku Dev",
  title: ["Scrivici, o conta", "le tue ore."],
  standfirst:
    "Due strade per cominciare: quattro domande che ti danno il numero da cui parte la proposta, o un messaggio con parole tue. In entrambi i casi ti risponde chi scrive il codice.",
  briefCta: "Calcola le tue ore",
  writeCta: "Scrivi un messaggio",
  write: {
    title: "Preferisci scrivere?",
    lead: "Raccontaci il problema con parole tue, o chiedi aiuto su uno dei nostri prodotti. Il modulo apre la tua app di posta con il messaggio pronto.",
    whatsapp: { lead: "Preferisci WhatsApp?", label: "Scrivici al" },
    reply: "Ti rispondiamo entro un giorno lavorativo, sul modulo e su WhatsApp.",
    nextTitle: "Cosa succede dopo",
    next: [
      { lead: "Scrivi qualche riga.", body: "Il problema, o la domanda su un prodotto." },
      { lead: "Fissiamo una videochiamata gratuita di 30 minuti.", body: "Per capire il perimetro e quante ore ti costa oggi il lavoro." },
      { lead: "Ricevi una proposta scritta.", body: "Cosa costruiamo, quanto costa, quando è pronto." },
    ],
  },
  before: {
    title: "Prima di scrivere",
    items: [
      {
        question: "La prima call è gratuita?",
        answer:
          "Sì. È una videochiamata di 30 minuti: ci racconti il lavoro che ti ruba tempo e capiamo quante ore ti costa. Si chiude con una proposta scritta.",
      },
      {
        question: "Quanto ci mettete a rispondere?",
        answer: "Entro un giorno lavorativo, che tu scriva dal modulo o su WhatsApp.",
      },
      {
        question: "Devo preparare qualcosa?",
        answer:
          "No. Basta sapere quale lavoro ripetitivo ti ruba più tempo. Se hai una stima delle ore, anche approssimativa, ancora meglio.",
      },
      {
        question: "Lavorate solo a Milano?",
        answer: "No. Lavoriamo in videochiamata con imprese in tutta Italia, in italiano o in inglese.",
      },
      {
        question: "Che fine fa quello che vi mando?",
        answer:
          "Il modulo apre la tua app di posta e il messaggio arriva alla nostra casella: lo usiamo solo per risponderti e, se lavoriamo insieme, per seguire il progetto. I dettagli sono nell’informativa privacy.",
      },
    ],
    privacyLink: { label: "Leggi l’informativa privacy", href: "/privacy" },
  },
  products: {
    title: "Una domanda su un prodotto?",
    caption: "Scegli il prodotto come argomento nel modulo qui sopra, o apri la sua pagina.",
    overviewLink: "Vedi tutti i prodotti",
  },
};
