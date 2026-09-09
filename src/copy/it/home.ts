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
    eyebrow: "Non un'agenzia. Uno studio software di Milano.",
    titleLead: "Software su misura. AI dove conta.",
    titleAccent: "Consegnato.",
    subhead:
      "Dentoku Dev è uno studio software di Milano che realizza estensioni Chrome, app Shopify e strumenti interni per piccole e medie imprese. Prova quello che rilasciamo prima di affidarci un progetto.",
    primaryCta: { label: "Avvia il tuo progetto", href: "/contact" },
    secondaryCta: { label: "Guarda cosa costruiamo", href: "/#services" },
    trustNote: "4 prodotti online su store pubblici",
  },
  heroVideoLabel: "Breve video in loop che mostra i quattro prodotti Dentoku Dev",
  trustBar: { reviewLabel: "Chrome Web Store", labels: { on: "su", outOfFive: "su 5" } },
  services: {
    eyebrow: "Cosa costruiamo",
    title: "Vendiamo solo ciò che abbiamo già rilasciato",
    description:
      "Niente slide. Niente promesse sulla carta. Ogni servizio qui sotto è sostenuto da un prodotto che costruiamo, gestiamo e manteniamo per noi stessi.",
    tablistLabel: "Cosa costruiamo",
    explore: "Scopri {name}",
    items: [
      {
        key: "internal-tools",
        label: "Strumenti interni e automazione",
        title: "Il lavoro ripetitivo, risolto con il software.",
        description:
          "Costruiamo i piccoli strumenti mirati che mancano al tuo team: raccolta dati, flussi di ricerca, automazione del back office. EmailMagnet è la nostra versione di tutto questo: ha trasformato il copia e incolla manuale delle email in un flusso nel browser a un clic.",
        outcomes: [
          "Sostituisci il copia e incolla ripetitivo con flussi a un clic",
          "Dati pronti per l'esportazione: CSV, TXT o direttamente nel tuo stack",
          "Perimetro ridotto, rilascio rapido, manutenzione semplice",
        ],
        proof: {
          name: "EmailMagnet",
          href: "/emailmagnet",
          note: "Costruito per noi stessi. 5.0 stelle sul Chrome Web Store.",
        },
        media: {
          kind: "image",
          src: "/brand/emailmagnet-hero-new.webp",
          alt: "L'estensione EmailMagnet raccoglie email aziendali durante la navigazione",
          width: 1361,
          height: 852,
        },
      },
      {
        key: "ai-integration",
        label: "Integrazione AI",
        title: "L'AI nel flusso di lavoro, non d'intralcio.",
        description:
          "Integriamo l'AI in flussi di lavoro reali: scrittura, sintesi, traduzione, automazioni personalizzate. ClickPilot AI è la nostra prova: un assistente che lavora dentro qualsiasi campo di testo del browser, senza cambiare scheda.",
        outcomes: [
          "Funzioni AI integrate negli strumenti che già usi",
          "Perimetro concreto: correggi, riscrivi, riassumi, traduci, azioni personalizzate",
          "I tuoi dati restano nei tuoi account, con le tue chiavi API",
        ],
        proof: {
          name: "ClickPilot AI",
          href: "/clickpilot-ai",
          note: "Costruito per noi stessi. Disponibile sul Chrome Web Store.",
        },
        media: {
          kind: "image",
          src: "/brand/clickpilot-ai-showcase.png",
          alt: "Barra delle azioni di ClickPilot AI con Fix Grammar, Translate ed Explain easy sopra un testo evidenziato in Chrome",
          width: 1280,
          height: 799,
          framed: false,
        },
      },
      {
        key: "ecommerce",
        label: "Ecommerce e Shopify",
        title: "App che trasformano la navigazione in acquisti.",
        description:
          "Costruiamo app Shopify e funzionalità di vetrina per i merchant: strumenti per le campagne, urgenza, aiuti alla conversione. Countdown321 è nostra: gestisce i timer di conto alla rovescia per lanci di prodotto e promozioni.",
        outcomes: [
          "App Shopify costruite sulla piattaforma ufficiale",
          "Pronte per le campagne: logica a data fissa, ricorrente ed evergreen",
          "Pensate per titolari di negozio non tecnici",
        ],
        proof: {
          name: "Countdown321",
          href: "/countdown321",
          note: "Costruito per noi stessi. Disponibile sullo Shopify App Store.",
        },
        media: {
          kind: "image",
          src: "/brand/countdown321-hero.webp",
          alt: "Timer di conto alla rovescia Countdown321 su una vetrina Shopify",
        },
      },
      {
        key: "browser-products",
        label: "Estensioni per browser",
        title: "Estensioni che le persone installano e tengono.",
        description:
          "Progettiamo estensioni Chrome dall'inizio alla fine: prodotto, UX, scheda sullo store, aggiornamenti. Volume Control PRO è nostra: alza il volume delle schede fino al 600%, gratis da installare, con un upgrade opzionale una tantum per gli strumenti audio avanzati.",
        outcomes: [
          "Ciclo completo: sviluppo, revisione, pubblicazione, manutenzione",
          "Le policy del Chrome Web Store le gestiamo noi",
          "Piccole, veloci e rispettose della privacy per impostazione predefinita",
        ],
        proof: {
          name: "Volume Control PRO",
          href: "/volume-control-pro",
          note: "Costruito per noi stessi. Gratis da installare sul Chrome Web Store.",
        },
        media: {
          kind: "video",
          src: "/brand/volume-control-demo.mp4",
          url: "youtube.com, Volume Control PRO alza il volume di una scheda silenziosa",
        },
      },
    ],
  },
  process: {
    eyebrow: "Come lavoriamo",
    title: "Parli con chi costruisce, non con un account manager",
    description:
      "Team piccolo. Risposte dirette. Software funzionante fin dalle prime settimane. La stessa disciplina che tiene quattro prodotti online su store pubblici.",
    steps: [
      {
        title: "Perimetro",
        description:
          "Una breve call e una proposta scritta: cosa costruiamo, quanto costa, quando è pronto. Nessun impegno finché non la approvi.",
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
    ],
  },
  products: {
    eyebrow: "Prodotti",
    title: "Quattro prodotti. Store pubblici. Recensioni pubbliche.",
    overviewLink: "Vedi la panoramica completa",
    viewProduct: "Vai al prodotto",
    related: {
      "/countdown321": [
        { label: "Guida al timer di conto alla rovescia per Shopify", href: "/countdown321/shopify-countdown-timer-app" },
        { label: "Guida all'app di urgenza per Shopify", href: "/countdown321/shopify-urgency-app" },
      ],
    },
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
          "Con una breve call e una proposta scritta che copre perimetro, costi e tempi. Sai esattamente cosa costruiamo e quando sarà pronto prima di impegnarti in qualsiasi cosa.",
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
        question: "Dove siete?",
        answer: "A Milano. Lavoriamo con i clienti da remoto, in italiano e in inglese.",
      },
      {
        question: "Come sappiamo che siete in grado di consegnare?",
        answer:
          "Giudicaci da ciò che costruiamo per noi stessi: quattro prodotti online su store pubblici, con utenti reali e recensioni pubbliche. Il lavoro per i clienti riceve la stessa cura.",
      },
    ],
  },
  cta: {
    eyebrow: "Inizia",
    title: "Raccontaci cosa vuoi costruire",
    description:
      "Una call. Una proposta scritta. Software che va online. Oppure prova prima uno dei nostri prodotti e giudica tu la qualità.",
    primary: { label: "Avvia il tuo progetto", href: "/contact" },
    secondary: { label: "Guarda cosa costruiamo", href: "/#services" },
  },
};
