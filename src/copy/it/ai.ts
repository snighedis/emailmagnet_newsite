import type { AiCopy } from "@/copy/en/ai";

/**
 * La pagina sulla consulenza AI. Translation of src/copy/en/ai.ts: same claims.
 * The title carries the search ("consulenza AI"); the argument is the studio's
 * own: consulenza misurata in ore, una persona dall’analisi al codice.
 */
export const ai: AiCopy = {
  meta: {
    title: "Consulenza AI per piccole imprese, misurata in ore",
    description:
      "Consulenza AI che si misura in ore: contiamo quanto ti costa un lavoro ripetitivo, lo automatizziamo con l’intelligenza artificiale e ricontiamo dopo il rilascio. Chi fa l’analisi scrive il codice.",
  },
  breadcrumb: "Consulenza AI",
  title: ["Consulenza AI,", "misurata in ore."],
  standfirst:
    "Ogni settimana un lavoro ripetitivo ti porta via delle ore. Le contiamo con te, le togliamo con l’intelligenza artificiale e le ricontiamo dopo il rilascio. Chi fa l’analisi scrive il codice.",
  primaryCta: { label: "Calcola le tue ore", href: "/#brief" },
  secondaryCta: { label: "Scrivici", href: "/contact" },

  photos: {
    hero: "Una stilista lavora al portatile nel suo atelier, tra cartamodelli e abiti",
    documents: "Mani che controllano una fattura accanto a una calcolatrice e a un portatile",
    shop: "Un negoziante al telefono legge un biglietto davanti al suo negozio",
    creditLabel: "Foto:",
    creditSource: "su Pexels.",
  },

  card: {
    title: "Analisi",
    tag: "Prima call",
    rows: [
      ["Lavoro", "Preventivi dalle email"],
      ["Oggi", "6 ore a settimana"],
      ["L’AI", "Legge e compila"],
      ["Tu", "Controlli e invii"],
    ],
    status: "Il numero da cui parte la proposta",
  },

  definition: {
    heading: "Cos’è la consulenza AI",
    body: "La consulenza AI aiuta un’azienda a capire dove l’intelligenza artificiale le fa risparmiare tempo. Dentoku Dev, studio software di Milano fondato nel 2024, la misura in ore: conta con te quanto ti costa oggi un lavoro ripetitivo, costruisce l’automazione sui programmi che usi già e riconta le ore dopo il rilascio. Chi ti dà il parere scrive anche il codice.",
    facts: [
      {
        term: "Prima",
        detail: "Contiamo le ore che il lavoro ti costa ogni mese. Su quel numero scriviamo la proposta, con prezzo e tempi.",
      },
      {
        term: "Durante",
        detail: "Costruiamo l’automazione sui programmi che usi già. Dalle prime settimane la provi nel tuo browser.",
      },
      {
        term: "Dopo",
        detail: "Ricontiamo le ore insieme. Il numero ti dice se il software ha fatto il suo lavoro.",
      },
      {
        term: "Sempre",
        detail: "Lo stesso gruppo, dalla prima call gratuita di 30 minuti all’assistenza dopo il rilascio.",
      },
    ],
  },

  split: {
    heading: "L’AI prepara. Tu decidi.",
    lead: "L’intelligenza artificiale legge, estrae i dati e scrive le bozze. Le decisioni che contano restano tue.",
    does: {
      title: "Cosa fa l’AI",
      items: [
        "Legge email, PDF e moduli e capisce cosa chiede il cliente.",
        "Estrae i dati e li porta nel foglio di calcolo, nel gestionale o in Shopify.",
        "Scrive le bozze di risposta con il tuo tono.",
        "Confronta la richiesta con il tuo listino e compila il preventivo.",
      ],
    },
    stays: {
      title: "Cosa resta a te",
      items: [
        "Decidere prezzi, sconti e condizioni.",
        "Rileggere e premere Invia.",
        "I casi particolari, che il software ti segnala.",
        "Scegliere quali dati possono uscire dall’azienda.",
      ],
    },
  },

  contrast: {
    heading: "Cosa cambia rispetto a un consulente AI",
    items: [
      { not: "Non un parere.", is: "Un software che lavora sui tuoi programmi." },
      { not: "Non una stima di risparmio.", is: "Le ore, contate prima e dopo." },
      { not: "Non un account manager.", is: "Ti risponde chi ha scritto il codice." },
      { not: "Non un capitolato da scrivere.", is: "Un lavoro da contare insieme." },
    ],
  },

  after: {
    heading: "Dopo la consegna non resti solo",
    items: [
      {
        lead: "Un gruppo su misura.",
        body: "Per ogni progetto scegliamo i collaboratori che servono, e chi ha fatto l’analisi segue il lavoro fino alla consegna.",
      },
      {
        lead: "Una linea diretta.",
        body: "Niente ticket e niente code: scrivi, anche su WhatsApp, e ti risponde chi conosce il tuo software.",
      },
      {
        lead: "Assistenza a canone.",
        body: "Dopo il rilascio puoi affidarci l’assistenza con un canone mensile, da 250 € al mese.",
      },
    ],
    link: { label: "Scrivici", href: "/contact" },
  },

  data: {
    heading: "I tuoi dati restano a nome tuo",
    items: [
      {
        lead: "Account intestati a te.",
        body: "Gli account dei modelli di intelligenza artificiale e degli strumenti sono intestati alla tua azienda, non a noi.",
      },
      {
        lead: "Niente addestramento.",
        body: "Usiamo i modelli tramite le loro API, con l’opzione che esclude i tuoi dati dall’addestramento.",
      },
      {
        lead: "Un DPA firmato.",
        body: "Firmiamo un accordo sul trattamento dei dati come responsabili del trattamento.",
      },
      {
        lead: "Server europei, quando si può.",
        body: "Scegliamo fornitori e server nell’Unione europea quando il servizio lo permette, e la proposta elenca per iscritto i servizi che il software usa.",
      },
    ],
  },

  demands: {
    heading: "Prima di firmare, pretendi tre cose",
    lead: "Da chiunque ti venda l’AI. Noi te le diamo tutte e tre per iscritto.",
    items: [
      {
        lead: "Le ore, per iscritto.",
        body: "Quante ore al mese ti costa oggi il lavoro. Senza questo numero nessuno può dirti se il software ha funzionato.",
      },
      {
        lead: "Il prezzo, per iscritto.",
        body: "Cosa si costruisce, quanto costa e quando è pronto. Prima di impegnarti, non dopo.",
      },
      {
        lead: "Account e codice a nome tuo.",
        body: "Gli account sono intestati alla tua azienda e, con il saldo, il codice è tuo: qualsiasi sviluppatore può continuarlo.",
      },
    ],
  },

  no: {
    heading: "Niente ore, niente progetto.",
    body: "Se il lavoro non ti costa abbastanza tempo, o se ti basta un programma già pronto, te lo diciamo alla prima call.",
    note: "Per un progetto enterprise ti indichiamo una software house più grande.",
  },

  products: {
    title: "Non raccontiamo l’AI. La pubblichiamo.",
    caption:
      "ClickPilot AI è la nostra estensione per Chrome che scrive, corregge e traduce con l’intelligenza artificiale. La costruiamo, la pubblichiamo e la manteniamo noi, come EmailMagnet, Volume Control PRO e Countdown321.",
  },

  faq: {
    title: "Domande sulla consulenza AI",
    items: [
      {
        question: "Che cosa fa una consulenza AI?",
        answer:
          "Ti mostra dove l’intelligenza artificiale fa risparmiare tempo nella tua azienda. Da noi finisce con un software funzionante, e si misura in ore: contate prima del progetto e ricontate dopo il rilascio.",
      },
      {
        question: "Siete un’agenzia AI?",
        answer:
          "Siamo uno studio software: chi fa l’analisi scrive il codice, con collaboratori scelti per ogni progetto. Il lavoro è quello di un’agenzia AI, senza account manager in mezzo.",
      },
      {
        question: "Quanto costa?",
        answer:
          "Dipende da cosa costruiamo. Come orientamento: l’automazione di un processo con l’intelligenza artificiale va da 1.200 a 6.500 €, un software o gestionale su misura da 6.500 a 16.000 €, l’assistenza dopo il rilascio parte da 250 € al mese. Il prezzo vero è scritto nella proposta, dopo la prima call gratuita e prima che tu ti impegni.",
      },
      {
        question: "Promettete un risparmio?",
        answer:
          "No. Non promettiamo una percentuale: contiamo le ore con te prima del progetto e le ricontiamo dopo il rilascio. Il risultato lo vedi nel numero, non in una promessa.",
      },
      {
        question: "Quando vedo il primo risultato?",
        answer:
          "Lavoriamo a cicli brevi: dalle prime settimane provi il software nel tuo browser. I tempi esatti sono scritti nella proposta.",
      },
      {
        question: "Devo cambiare i programmi che uso?",
        answer:
          "Quasi mai. Colleghiamo l’automazione a quello che usi già: email, fogli di calcolo, gestionale, CRM, Shopify. Sostituire uno strumento che funziona è l’ultima scelta.",
      },
      {
        question: "Dove finiscono i dati aziendali?",
        answer:
          "Restano su account a nome della tua azienda. Usiamo i modelli tramite le loro API con l’opzione che esclude i dati dall’addestramento, firmiamo un DPA come responsabili del trattamento e scegliamo server europei quando il servizio lo permette.",
      },
    ],
  },
};
