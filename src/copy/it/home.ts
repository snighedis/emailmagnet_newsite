import type { HomeCopy } from "@/copy/en/home";
import { site } from "@/copy/it/site";

/**
 * Italian homepage. Same structure and the same claims as the English
 * narrative in src/data/site.ts: ratings, counts and prices are identical.
 */
export const home: HomeCopy = {
  meta: {
    title: "Dentoku Dev: software su misura, estensioni Chrome e app Shopify",
    description: site.description,
  },
  itemListName: "Prodotti software di Dentoku Dev",
  hero: {
    eyebrow: "Uno studio software di Milano, non un'agenzia.",
    titleLead: "Il lavoro ripetitivo",
    titleAccent: "lo fa il software.",
    subhead:
      "Software su misura per piccole imprese: togliamo il lavoro ripetitivo con l'AI e misuriamo quanto ti fa risparmiare.",
    primaryCta: { label: "Raccontaci il problema", href: "/contact" },
    secondaryCta: { label: "Guarda cosa costruiamo", href: "/#services" },
    trustNote: "4 prodotti online su store pubblici",
  },
  heroVideo: {
    src: "/brand/studio-hero-it.mp4",
    poster: "/brand/studio-hero-it-poster.jpg",
    label:
      "Video in loop di 29 secondi: il titolare di un agriturismo chiede di rispondere agli ospiti mentre fa altro; Dentoku Dev lo progetta, collega WhatsApp e l'AI e mostra Kallmy in anteprima",
    controls: { play: "Riproduci il video", pause: "Metti in pausa il video" },
    aiDisclosure: "Riprese generate con l’AI",
  },
  trustBar: { reviewLabel: "Chrome Web Store", labels: { on: "su", outOfFive: "su 5" } },
  automate: {
    eyebrow: "Cosa automatizziamo",
    title: "Il lavoro che rifai ogni settimana, fatto dal software",
    description:
      "Quattro lavori ripetitivi che costano ore a una piccola impresa. Per ciascuno, cosa fa il software e cosa resta a te.",
    doesLabel: "Cosa fa il software",
    staysLabel: "Cosa resta a te",
    items: [
      {
        title: "Rispondere alle email",
        does: "Legge le richieste che arrivano, prepara una risposta nel tuo tono con le informazioni giuste (disponibilità, prezzi, condizioni) e la lascia in bozza.",
        stays: "Tu la leggi, la correggi se serve e premi Invia.",
      },
      {
        title: "Preparare preventivi",
        does: "Prende la richiesta, la confronta con il tuo listino e compila il preventivo nel tuo formato, pronto da controllare.",
        stays: "Tu decidi prezzo e condizioni finali.",
      },
      {
        title: "Ricopiare dati",
        does: "Sposta i dati tra i programmi che usi già (email, fogli di calcolo, gestionale, Shopify) senza che nessuno li ricopi a mano.",
        stays: "Tu vedi cosa è passato, e dove.",
      },
      {
        title: "Gestire prenotazioni",
        does: "Raccoglie richieste e conferme, aggiorna il calendario e manda i promemoria.",
        stays: "Tu gestisci le eccezioni.",
      },
    ],
  },
  process: {
    eyebrow: "Come lavoriamo",
    title: "Perimetro, rilascio, supporto, misura",
    description:
      "Una proposta scritta con le ore di oggi, software da provare presto, una linea diretta dopo il rilascio, e le stesse ore rimisurate.",
    steps: [
      {
        title: "Perimetro",
        description:
          "Una breve call e una proposta scritta: cosa costruiamo, quanto costa, quando è pronto e quante ore al mese ti costa oggi il problema. Nessun impegno finché non la approvi.",
      },
      {
        title: "Rilascio",
        description:
          "Progettiamo e sviluppiamo in cicli brevi, con software funzionante che puoi provare dalle prime settimane.",
      },
      {
        title: "Supporto",
        description:
          "Dopo il lancio mantieni una linea diretta con chi ha scritto il codice. Niente passaggi di mano, niente code di ticket.",
      },
      {
        title: "Misura",
        description:
          "Dopo il rilascio contiamo di nuovo insieme le ore al mese che il lavoro ti costa. È il numero da cui era partita la proposta, e dice se il software ha fatto quello che doveva.",
      },
    ],
  },
  products: {
    eyebrow: "Software nostro",
    title: "Quattro prodotti. Store pubblici. Recensioni pubbliche.",
    description:
      "È il software che costruiamo, pubblichiamo e manteniamo per noi, con utenti e recensioni sugli store. Dice una cosa sola: quello che rilasciamo resta online e funziona.",
    overviewLink: "Vedi la panoramica completa",
    viewProduct: "Vai al prodotto",
  },
  explore: {
    eyebrow: "Esplora",
    title: "Guide, confronti e documentazione",
    links: [
      {
        title: "Casi d'uso",
        href: "/use-cases/emailmagnet-sales-prospecting",
        description: "Flussi pratici per prospecting, ricerca, recruiting e outreach per piccole imprese.",
      },
      {
        title: "Glossario",
        href: "/glossary/email-extraction",
        description:
          "Definizioni di estrazione email, estrazione in blocco, esportazione CSV, salvataggio automatico e termini di conformità.",
      },
      {
        title: "Confronti",
        href: "/compare/manual-email-copying",
        description: "Pagine di confronto chiare tra flussi manuali e strumenti di scraping più pesanti.",
      },
      {
        title: "Integrazioni",
        href: "/integrations/emailmagnet-chrome",
        description: "Pagine di integrazione, a partire da Chrome e dai flussi di esportazione.",
      },
      {
        title: "Documentazione",
        href: "/docs/getting-started",
        description: "Guide di configurazione, flussi di esportazione e documentazione sull'uso responsabile.",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Guide pratiche su ricerca di lead, conformità e flussi di lavoro nel browser.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Lavorare con noi",
    description: "Le domande che vale la pena fare prima di affidarsi a un piccolo studio.",
    items: [
      {
        question: "Che tipo di progetti seguite?",
        answer:
          "Software su misura per piccole e medie imprese: strumenti interni, automazione dei flussi di lavoro, estensioni per browser, app Shopify ed ecommerce, integrazione dell'AI nei processi esistenti. Se assomiglia a uno dei nostri prodotti, siamo la scelta giusta.",
      },
      {
        question: "Come inizia un progetto?",
        answer:
          "Con una breve call e una proposta scritta che copre perimetro, costi e tempi, e quante ore al mese ti costa oggi il problema. Sai esattamente cosa costruiamo e quando sarà pronto prima di impegnarti in qualsiasi cosa. Dopo il rilascio misuriamo insieme il risparmio.",
      },
      {
        question: "Chi lavorerà davvero al mio progetto?",
        answer:
          "Lo stesso piccolo team che progetta, costruisce e rilascia i quattro prodotti di questo sito. Parli direttamente con chi scrive il codice, non con un account manager.",
      },
      {
        question: "Potete lavorare con i nostri sistemi esistenti?",
        answer:
          "Sì. La maggior parte dei progetti si collega a strumenti che già usi: fogli di calcolo, CRM, Shopify, flussi nel browser e API. Costruiamo attorno al tuo stack invece di sostituirlo.",
      },
      {
        question: "Come si lavora insieme, a distanza?",
        answer:
          "Siamo a Milano e lavoriamo con clienti in tutta Italia in videochiamata, in italiano: la prima call, la proposta e gli aggiornamenti durante il progetto passano tutti da lì. Il software lo provate voi, nel vostro browser, dalle prime settimane.",
      },
      {
        question: "Non abbiamo competenze tecniche interne. È un problema?",
        answer:
          "No, è il caso più comune. La proposta scritta descrive cosa farà il software in linguaggio comune, senza gergo, e dopo la consegna resta una linea diretta con chi ha scritto il codice. Non serve nessuno in azienda che sappia programmare.",
      },
      {
        question: "I nostri dati dove finiscono?",
        answer:
          "Costruiamo gli strumenti attorno ai vostri account e alle vostre chiavi, non ai nostri. La proposta indica per iscritto quali servizi esterni usa il software, così sapete prima dove passano i dati e potete dire di no.",
      },
      {
        question: "Cosa succede al software se un giorno non lavoriamo più insieme?",
        answer:
          "Il codice scritto per il vostro progetto è vostro al saldo, con la documentazione per farlo proseguire a qualsiasi sviluppatore. I nostri componenti riutilizzabili restano in licenza d'uso perpetua, quindi potete mantenere e modificare il software anche senza di noi.",
      },
      {
        question: "Usate l'intelligenza artificiale nel vostro lavoro?",
        answer:
          "Sì: assistenti per scrivere codice e testi, e strumenti che trascrivono le call. Lo diciamo prima di iniziare e lo scriviamo nella lettera d'incarico, con l'elenco degli strumenti e dove passano i dati.",
      },
      {
        question: "Quanto costa iniziare?",
        answer:
          "Dipende dal perimetro, e lo sapete per iscritto prima di impegnarvi: la prima call non costa nulla e si chiude con una proposta che indica cosa costruiamo, quanto costa e quando è pronto.",
      },
    ],
  },
  audience: {
    label: "Per",
    items: ["Agriturismi e B&B", "Studi professionali", "Negozi", "Artigiani"],
  },
  closing: {
    title: "Vuoi un numero da cui partire?",
    description:
      "Rispondi alle quattro domande in cima alla pagina: in un minuto sai quante ore al mese ti costa oggi il lavoro ripetitivo. Oppure scrivici.",
    primary: { label: "Vai al brief", href: "#brief" },
    secondary: { label: "Scrivici", href: "/contact" },
  },
  brief: {
    eyebrow: "Il brief",
    title: "Quante ore ti costa oggi?",
    lede: "Quattro tocchi. Il numero resta sul tuo telefono finché non decidi di inviarlo.",
    business: {
      legend: "La tua attività",
      options: {
        farmstay: "Agriturismo o B&B",
        office: "Studio professionale",
        shop: "Negozio",
        workshop: "Artigiano o laboratorio",
        other: "Altro",
      },
    },
    task: {
      legend: "Il lavoro ripetitivo che ti ruba più tempo",
      options: {
        email: "Rispondere alle email",
        quotes: "Preparare preventivi",
        retyping: "Ricopiare dati",
        bookings: "Gestire prenotazioni",
        other: "Altro",
      },
    },
    times: { legend: "Quante volte a settimana" },
    minutes: { legend: "Minuti ogni volta", unit: "min" },
    result: {
      idle: "Rispondi alle quattro domande per vedere quanto ti costa oggi.",
      lead: "Oggi ti costa",
      tail: "al mese.",
    },
    text: {
      hours: { underOne: "meno di un’ora", one: "circa {count} ora", other: "circa {count} ore" },
      formula: "{times} × {minutes} min × {weeks} settimane",
      mail: {
        subject: "[Brief] {task}, {hours} al mese",
        intro: "Ciao Dentoku Dev, ecco il mio brief dal sito.",
        business: "Attività",
        task: "Lavoro ripetitivo",
        frequency: "Quanto spesso",
        baseline: "Quanto mi costa oggi",
        formula: "Calcolo",
        method: "È una mia stima: la misuriamo bene nella proposta.",
        more: "Altro che dovreste sapere:",
      },
    },
    method: "È il punto di partenza della proposta. Dopo il rilascio lo rimisuriamo insieme.",
    barCta: "Vedi",
    send: "Mandacelo per email",
    copy: "Copia il brief",
    copied: "Copiato",
    fallback: "Non si apre la posta? Scrivici a",
    privacy: "Niente lascia questa pagina finché non premi Invia nella tua app di posta.",
  },
};
