import type { ContactCopy } from "@/copy/en/contact";

/**
 * Italian Contact page. Part of the consulting funnel (redesign tickets 05 and 11):
 * "two ways", the brief and the free form, in the homepage's voice ("tu").
 */
export const contact: ContactCopy = {
  meta: {
    title: "Contatta Dentoku Dev",
    description:
      "Parla con Dentoku Dev per supporto sui prodotti, un nuovo sviluppo o un progetto software. Progettiamo, costruiamo e rilasciamo prodotti digitali e portiamo la stessa cura nel tuo team.",
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
    direct: "Oppure scrivi direttamente a",
    nextTitle: "Cosa succede dopo",
    next: [
      { lead: "Scrivi qualche riga.", body: "Il problema, o la domanda su un prodotto." },
      { lead: "Fissiamo una call breve.", body: "Per capire il perimetro e quante ore ti costa oggi il lavoro." },
      { lead: "Ricevi una proposta scritta.", body: "Cosa costruiamo, quanto costa, quando è pronto." },
    ],
  },
  products: {
    title: "Una domanda su un prodotto?",
    caption: "Scegli il prodotto come argomento nel modulo qui sopra, o apri la sua pagina.",
    overviewLink: "Vedi tutti i prodotti",
  },
};
