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
    title: ["Il lavoro ripetitivo", "lo fa il software."],
    standfirst:
      "Siamo uno studio software di Milano. Costruiamo software su misura per piccole imprese e contiamo con te le ore che ti fa risparmiare.",
    primaryCta: { label: "Calcola le tue ore", href: "#brief" },
    secondaryCta: { label: "Scrivici", href: "/contact" },
  },
  heroVideo: {
    src: "/brand/studio-hero-v2-it.mp4",
    poster: "/brand/studio-hero-v2-it-poster.jpg",
    phone: {
      src: "/brand/studio-hero-v2-phone-it.mp4",
      poster: "/brand/studio-hero-v2-phone-it-poster.jpg",
      width: 1080,
      height: 1350,
    },
    label:
      "Video in loop di 37 secondi con riprese generate con l’AI: una commercialista, un’agenzia e un agriturismo perdono tempo con email, dati ricopiati a mano e doppie prenotazioni; il metodo di Dentoku Dev dall’analisi del problema al rilascio, con Kallmy come esempio in produzione, e in chiusura il campo del brief",
    controls: { play: "Riproduci il video", pause: "Metti in pausa il video" },
    aiDisclosure: "Generato con AI",
  },
  proof: {
    audience: "Lavoriamo con agriturismi e B&B, studi professionali, negozi e artigiani.",
    rating: "I nostri quattro prodotti sono online su store pubblici, con {rating} su 5 su Chrome Web Store.",
  },
  automate: {
    heading: "Cosa automatizziamo",
    statement:
      "Il software risponde alle email, prepara i preventivi, ricopia i dati da un programma all’altro e tiene in ordine le prenotazioni. A te restano le decisioni.",
    staysLabel: "A te resta:",
    items: [
      {
        title: "Rispondere alle email.",
        does: "Il software legge le richieste, scrive una risposta con il tuo tono e le informazioni giuste (disponibilità, prezzi, condizioni) e la lascia in bozza.",
        stays: "rileggerla, sistemarla se serve e premere Invia.",
      },
      {
        title: "Preparare i preventivi.",
        does: "Legge la richiesta, la confronta con il tuo listino e compila il preventivo nel tuo formato, pronto da controllare.",
        stays: "decidere prezzo e condizioni.",
      },
      {
        title: "Ricopiare i dati.",
        does: "Sposta i dati tra i programmi che usi già (email, fogli di calcolo, gestionale, Shopify) senza che nessuno li ricopi a mano.",
        stays: "vedere cosa è passato e dove.",
      },
      {
        title: "Gestire le prenotazioni.",
        does: "Raccoglie richieste e conferme, aggiorna il calendario e manda i promemoria.",
        stays: "i casi particolari.",
      },
    ],
  },
  process: {
    heading: "Come lavoriamo",
    steps: [
      {
        title: "Prima contiamo le ore.",
        description:
          "Una call breve, poi una proposta scritta: cosa costruiamo, quanto costa, quando è pronto e quante ore al mese ti costa oggi il problema. Non ti impegni finché non la approvi.",
      },
      {
        title: "Poi costruiamo.",
        description:
          "Lavoriamo a cicli brevi: dalle prime settimane hai software funzionante da provare.",
      },
      {
        title: "Dopo restiamo in linea.",
        description:
          "Dopo il lancio parli direttamente con chi ha scritto il codice. Nessun passaggio di mano, nessuna coda di ticket.",
      },
      {
        title: "Infine ricontiamo.",
        description:
          "Rifacciamo insieme il conto delle ore al mese. È il numero da cui partiva la proposta, e dice se il software ha fatto il suo lavoro.",
      },
    ],
  },
  products: {
    title: "Il nostro software",
    caption:
      "EmailMagnet, Volume Control PRO e ClickPilot AI su Chrome Web Store, Countdown321 su Shopify App Store. Li costruiamo, li pubblichiamo e li manteniamo noi.",
    overviewLink: "Vedi tutti i prodotti",
  },
  // Not shown on the Italian home (the guides are English-only pages); kept so the
  // module matches the English shape.
  explore: {
    title: "Guide e documentazione",
    lead: "Leggi",
    links: [
      { title: "Casi d’uso", href: "/use-cases/emailmagnet-sales-prospecting", description: "Flussi pratici per prospecting, ricerca, recruiting e outreach." },
      { title: "Glossario", href: "/glossary/email-extraction", description: "I termini dell’estrazione email e della conformità." },
      { title: "Confronti", href: "/compare/manual-email-copying", description: "Flussi manuali e strumenti di scraping a confronto." },
      { title: "Integrazioni", href: "/integrations/emailmagnet-chrome", description: "Le integrazioni, a partire da Chrome." },
      { title: "Documentazione", href: "/docs/getting-started", description: "Configurazione, esportazione e uso responsabile." },
      { title: "Blog", href: "/blog", description: "Guide pratiche su ricerca di lead e conformità." },
    ],
  },
  faq: {
    title: "Domande prima di iniziare",
    items: [
      {
        question: "Che progetti seguite?",
        answer:
          "Software su misura per piccole e medie imprese: strumenti interni, automazione del lavoro d’ufficio, estensioni per il browser, app Shopify ed ecommerce, AI dentro i processi che hai già. Se somiglia a uno dei nostri prodotti, siamo lo studio giusto.",
      },
      {
        question: "Come inizia un progetto?",
        answer:
          "Con una call breve e una proposta scritta: cosa costruiamo, quanto costa, quando è pronto e quante ore al mese ti costa oggi il problema. Decidi solo dopo averla letta. Dopo il rilascio misuriamo insieme il risparmio.",
      },
      {
        question: "Chi lavora davvero al mio progetto?",
        answer:
          "Lo stesso piccolo team che ha costruito i quattro prodotti di questo sito. Parli con chi scrive il codice, non con un account manager.",
      },
      {
        question: "Il software funziona con i programmi che uso già?",
        answer:
          "Sì. Quasi sempre lo colleghiamo a strumenti che hai già: fogli di calcolo, CRM, Shopify, il browser, altre API. Costruiamo attorno a quello che usi, non lo sostituiamo.",
      },
      {
        question: "Come lavoriamo insieme, a distanza?",
        answer:
          "Siamo a Milano e lavoriamo con clienti in tutta Italia in videochiamata, in italiano: la prima call, la proposta e gli aggiornamenti passano tutti da lì. Il software lo provi tu, nel tuo browser, dalle prime settimane.",
      },
      {
        question: "In azienda nessuno sa di tecnologia. È un problema?",
        answer:
          "No, è il caso più comune. La proposta spiega in parole semplici cosa farà il software, e dopo la consegna resta una linea diretta con chi ha scritto il codice. Non serve nessuno che sappia programmare.",
      },
      {
        question: "I miei dati dove finiscono?",
        answer:
          "Costruiamo gli strumenti sui tuoi account e sulle tue chiavi, non sui nostri. La proposta elenca per iscritto i servizi esterni che il software usa: sai prima dove passano i dati e puoi dire di no.",
      },
      {
        question: "Se smettiamo di lavorare insieme, che fine fa il software?",
        answer:
          "Con il saldo, il codice scritto per te diventa tuo, con la documentazione per farlo continuare a qualsiasi sviluppatore. I nostri componenti riutilizzabili restano in licenza d’uso perpetua: puoi mantenere e modificare il software anche senza di noi.",
      },
      {
        question: "Usate l’intelligenza artificiale nel vostro lavoro?",
        answer:
          "Sì: assistenti per scrivere codice e testi, e strumenti che trascrivono le call. Lo diciamo prima di iniziare e lo scriviamo nella lettera d’incarico, con l’elenco degli strumenti e dove passano i dati.",
      },
      {
        question: "Quanto costa iniziare?",
        answer:
          "Dipende da cosa costruiamo, e lo sai per iscritto prima di impegnarti. La prima call è gratuita e si chiude con una proposta: cosa facciamo, quanto costa, quando è pronto.",
      },
    ],
  },
  closing: {
    title: "Parti dalle tue ore.",
    fill: ["Oggi ti costa", "ore al mese."],
    description: "Quattro domande, un minuto. Da quel numero parte la proposta.",
    aside:
      "La proposta scritta dice cosa costruiamo, quanto costa e quando è pronto, e parte dalle ore che il lavoro ripetitivo ti costa oggi.",
    primary: { label: "Calcola le tue ore", href: "#brief" },
  },
  brief: {
    title: "Quante ore ti costa oggi?",
    lede: "Quattro tocchi e hai il numero. Resta sul tuo telefono finché non decidi di mandarcelo.",
    business: {
      legend: "Che attività hai",
      options: {
        farmstay: "Agriturismo o B&B",
        office: "Studio professionale",
        shop: "Negozio",
        workshop: "Artigiano o laboratorio",
        other: "Altro",
      },
    },
    task: {
      legend: "Il lavoro che ti porta via più tempo",
      options: {
        email: "Rispondere alle email",
        quotes: "Preparare preventivi",
        retyping: "Ricopiare dati",
        bookings: "Gestire prenotazioni",
        other: "Altro",
      },
    },
    times: { legend: "Quante volte a settimana" },
    minutes: { legend: "Quanti minuti ogni volta", unit: "min" },
    result: {
      idle: "Rispondi alle quattro domande e vedi quanto ti costa oggi.",
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
    method: "Da questo numero parte la nostra proposta. Dopo il rilascio lo ricontiamo insieme.",
    barCta: "Vedi",
    send: "Mandacelo per email",
    copy: "Copia il brief",
    copied: "Copiato",
    fallback: "La posta non si apre? Scrivici a",
    privacy: "Nulla esce da questa pagina finché non premi Invia nella tua app di posta.",
  },
};
