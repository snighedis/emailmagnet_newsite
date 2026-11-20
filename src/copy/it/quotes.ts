import type { QuotesCopy } from "@/copy/en/quotes";

/**
 * Software per preventivi. Translation of src/copy/en/quotes.ts: same claims,
 * same argument. The title carries the searches it answers ("software
 * preventivi", "programma preventivi", "preventivo excel").
 */
export const quotes: QuotesCopy = {
  meta: {
    title: "Software per preventivi su misura per PMI",
    description:
      "Software per preventivi costruito sul tuo listino: legge la richiesta, compila il preventivo nel tuo formato e te lo lascia da controllare. Studio di Milano.",
  },
  breadcrumb: "Software per preventivi",
  title: ["Software per preventivi."],
  standfirst:
    "Fatto sul tuo listino. Con l’intelligenza artificiale il software legge la richiesta del cliente, la confronta con il tuo listino e compila il preventivo nel tuo formato. Tu controlli prezzo e condizioni, poi lo mandi.",
  primaryCta: { label: "Calcola le tue ore", href: "/#brief" },
  secondaryCta: { label: "Scrivici", href: "/contact" },

  photos: {
    hero: "Mani su un portatile al banco di una falegnameria, tra attrezzi e fogli",
    handwritten: "Un artigiano scrive a mano su una cartellina al banco di lavoro",
    creditLabel: "Foto:",
    creditSource: "su Pexels.",
  },

  demo: {
    heading: "Dal listino al preventivo",
    lead: "Scegli le voci che il cliente ha chiesto. Il preventivo si compila dal listino, nel formato che usi già.",
    request: {
      subject: "Richiesta preventivo",
      from: "Bianchi Srl",
      body: "Buongiorno, ci serve un sito web con la manutenzione per un anno. Ci mandate un preventivo?",
    },
    listLabel: "Listino",
    sample: "Listino di prova",
    client: "Bianchi Srl",
    quoteTitle: "Preventivo",
    totalLabel: "Totale",
    empty: "Nessuna voce",
    status: "Compilato dal tuo listino",
    items: [
      ["Sito web", 240000],
      ["Manutenzione annuale", 48000],
      ["Foto dei prodotti", 60000],
      ["Apertura negozio online", 90000],
    ],
    initial: [0, 1],
    locale: "it-IT",
  },

  choice: {
    heading: "Programma pronto, Excel o su misura: cosa conviene?",
    items: [
      {
        lead: "Un programma per preventivi già pronto",
        body: "va bene quando i preventivi sono semplici e sei tu a scriverli, voce per voce. Molti sono gratuiti, e per pochi preventivi al mese possono bastare.",
      },
      {
        lead: "Un modello Excel",
        body: "funziona finché il listino è corto e lo aggiorna una persona sola. Quando le richieste arrivano per email, qualcuno deve comunque leggerle e ricopiare le voci.",
      },
      {
        lead: "Un software su misura",
        body: "serve quando il preventivo parte da una richiesta scritta e dalle tue regole: il tuo listino, le tue combinazioni, il tuo formato. Legge e compila al posto tuo, e la decisione resta tua.",
      },
    ],
    note: "Se ti basta un programma già pronto, te lo diciamo alla prima call.",
    sheet: {
      file: "preventivo.xlsx",
      columns: ["Voce", "Importo"],
      rows: [
        ["Sito web", "€ 2.400"],
        ["Manutenzione annuale", "€ 480"],
      ],
      totalLabel: "Totale",
      total: "€ 2.880",
      status: "Scritto a mano",
    },
  },

  flow: {
    heading: "Cosa fa il software",
    steps: [
      {
        title: "Legge la richiesta.",
        description: "L’email del cliente, o il modulo del tuo sito: cosa vuole, quanto, per quando.",
      },
      {
        title: "La trova nel listino.",
        description: "Abbina ogni richiesta alle voci e ai prezzi giusti, con le regole che usi oggi.",
      },
      {
        title: "Compila il preventivo.",
        description: "Nel tuo formato, quello che i tuoi clienti conoscono già, pronto da controllare.",
      },
      {
        title: "Ricopia i dati.",
        description: "Cliente e importo passano nel tuo foglio di calcolo o nel gestionale, senza che nessuno li ricopi a mano.",
      },
    ],
    stays: "A te restano prezzo finale, condizioni e il tasto Invia.",
    data: {
      from: "Preventivo",
      to: "Foglio clienti",
      client: "Cliente",
      clientValue: "Bianchi Srl",
      amount: "Importo",
      amountValue: "€ 2.880",
      status: "Ricopiato dal preventivo",
    },
  },

  method: {
    heading: "Come lavoriamo",
    items: [
      {
        lead: "Prima contiamo le ore.",
        body: "Quanti preventivi a settimana, quanti minuti ciascuno. La proposta scritta parte da quel numero e dice cosa costruiamo, quanto costa e quando è pronto.",
      },
      {
        lead: "Funziona con quello che usi già.",
        body: "Costruiamo attorno al tuo listino, al tuo modello di preventivo e ai tuoi strumenti (fogli di calcolo, gestionale, email), senza sostituirli.",
      },
      {
        lead: "Il codice è tuo.",
        body: "Con il saldo, il codice scritto per te diventa tuo, con la documentazione per farlo continuare a qualsiasi sviluppatore.",
      },
    ],
  },

  faq: {
    title: "Domande sul software per preventivi",
    items: [
      {
        question: "Quanto costa un software per preventivi su misura?",
        answer:
          "Dipende da cosa costruiamo, e lo sai per iscritto prima di impegnarti. La prima call è gratuita e si chiude con una proposta: cosa facciamo, quanto costa, quando è pronto.",
      },
      {
        question: "Esiste un programma per preventivi gratis?",
        answer:
          "Sì, esistono programmi e modelli gratuiti, e per preventivi semplici possono bastare. Il software su misura ha senso quando i preventivi partono da richieste che qualcuno deve leggere e da un listino con le tue regole.",
      },
      {
        question: "Posso tenere il mio preventivo in Excel o Word?",
        answer:
          "Sì. Il tuo modello resta il formato del preventivo: il software lo compila al posto tuo, e i tuoi clienti ricevono lo stesso documento di oggi.",
      },
      {
        question: "Il preventivo parte da solo verso il cliente?",
        answer:
          "No. Il software lo prepara e lo lascia da controllare. Prezzo e condizioni li decidi tu, e sei tu a mandarlo.",
      },
      {
        question: "Funziona con i programmi che uso già?",
        answer:
          "Sì. Quasi sempre lo colleghiamo a strumenti che hai già: fogli di calcolo, CRM, Shopify, email, altre API. Costruiamo attorno a quello che usi, non lo sostituiamo.",
      },
      {
        question: "I miei dati dove finiscono?",
        answer:
          "Costruiamo gli strumenti sui tuoi account e sulle tue chiavi, non sui nostri. La proposta elenca per iscritto i servizi esterni che il software usa: sai prima dove passano i dati e puoi dire di no.",
      },
    ],
  },
};
