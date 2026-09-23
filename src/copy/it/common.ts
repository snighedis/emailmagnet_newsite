import type { CommonCopy } from "@/copy/en/common";

/**
 * Italian copy for the global chrome. Same claims as the English module,
 * translated, never rewritten: a rating, a limit or a price here must match
 * the English string and the store listing it comes from.
 */
export const common: CommonCopy = {
  languageSwitcher: {
    label: "EN",
    ariaLabel: "English",
  },
  header: {
    products: "Prodotti",
    resources: "Risorse",
    featuredBadge: "Prodotto in evidenza",
    viewProduct: "Vai alla pagina del prodotto",
    portfolioLabel: "Portfolio prodotti",
    resourceDescriptions: {
      "/overview": "Tutti i prodotti e il ruolo di ciascuno, in una sola pagina.",
      "/docs": "Configurazione, esportazioni e guide all'uso responsabile.",
      "/blog": "Guide pratiche sui flussi di lavoro nel browser.",
      "/faq": "Risposte brevi su prezzi, limiti e assistenza.",
    },
    getEmailMagnet: "Scarica EmailMagnet",
    getEmailMagnetFree: "Scarica EmailMagnet gratis",
    startProject: "Raccontaci il problema",
    openNavigation: "Apri il menu",
    navigationTitle: "Menu di Dentoku Dev",
    logoAlt: "Logo Dentoku Dev",
  },
  footer: {
    builtWith: "Realizzato con",
    linkedinAria: "Dentoku Dev su LinkedIn",
    xAria: "Dentoku Dev su X",
    copyright: "© 2026 Dentoku Dev. Tutti i diritti riservati.",
    cookiePreferences: "Preferenze cookie",
    logoAlt: "Logo Dentoku Dev",
  },
  cookieBanner: {
    dialogAria: "Consenso ai cookie",
    title: "Rispettiamo la tua privacy",
    preferencesTitle: "Preferenze cookie",
    closeAria: "Rifiuta i cookie non essenziali e chiudi",
    intro: {
      before:
        "Usiamo cookie strettamente necessari per far funzionare il sito e, solo con il tuo consenso, cookie di analisi e di marketing. Puoi accettare, rifiutare o scegliere per categoria. Leggi la nostra",
      link: "Cookie Policy",
      after: ".",
    },
    categories: {
      necessary: {
        title: "Strettamente necessari",
        description:
          "Necessari al funzionamento del sito e per ricordare la tua scelta sui cookie. Sempre attivi.",
      },
      analytics: {
        title: "Analisi",
        description:
          "Google Analytics e metriche d'uso rispettose della privacy che ci aiutano a migliorare il sito. Attiva anche la chat di assistenza AI opzionale (Chatbase, USA), che elabora ciò che scrivi al suo interno.",
      },
      marketing: {
        title: "Marketing",
        description:
          "Tag di Google Ads usati per misurare le conversioni delle campagne. Disattivi finché non li autorizzi.",
      },
    },
    rejectAll: "Rifiuta tutti",
    saveChoices: "Salva le scelte",
    acceptAll: "Accetta tutti",
    managePreferences: "Gestisci le preferenze",
  },
  exitIntent: {
    closeAria: "Chiudi",
    eyebrow: "Checklist gratuita",
    title: "Prima di andare, scarica la checklist sulla conformità",
    body: "La checklist GDPR e CAN-SPAM che usiamo per trasformare le email estratte in liste a cui puoi davvero scrivere. Ricevi il PDF e unisciti a commerciali, recruiter e team growth che valutano EmailMagnet 5.0★.",
    emailPlaceholder: "tu@azienda.com",
    emailAria: "Indirizzo email",
    sending: "Invio in corso…",
    submit: "Inviami la checklist",
    genericError: "Qualcosa è andato storto, riprova.",
    tooMany: "Troppe iscrizioni, riprova tra poco.",
    consent: {
      before:
        "Ti invieremo ogni tanto guide e aggiornamenti sui prodotti. Niente spam, puoi disiscriverti quando vuoi. Leggi la nostra",
      link: "Informativa sulla privacy",
      after: ".",
    },
    successTitle: "La tua checklist è pronta",
    successBody:
      "Grazie per l'iscrizione. Scarica la tua copia qui sotto e tieni d'occhio la casella di posta per le prossime guide.",
    download: "Scarica la checklist",
  },
  contactForm: {
    firstName: "Nome",
    lastName: "Cognome",
    email: "Email",
    topic: "Argomento",
    message: "Messaggio",
    firstNamePlaceholder: "Nome",
    lastNamePlaceholder: "Cognome",
    emailPlaceholder: "Email",
    messagePlaceholder: "Raccontaci cosa vuoi realizzare o su cosa ti serve aiuto.",
    selectTopic: "Seleziona un argomento",
    requiredSr: " obbligatorio",
    topics: [
      { value: "EmailMagnet", label: "EmailMagnet" },
      { value: "ClickPilot AI", label: "ClickPilot AI" },
      { value: "Volume Control PRO", label: "Volume Control PRO" },
      { value: "Countdown321", label: "Countdown321" },
      { value: "A new project", label: "Un nuovo progetto" },
      { value: "General inquiry", label: "Richiesta generica" },
    ],
    consent:
      "Inviando questo modulo confermi di aver letto e accettato l'Informativa sulla privacy.",
    incomplete: "Compila nome, cognome, un'email valida e il messaggio prima di inviare.",
    success:
      "Dovrebbe aprirsi la tua app di posta con il messaggio pronto da inviare. Se non succede, scrivici direttamente a {email}.",
    submit: "Invia il messaggio",
  },
  notFound: {
    eyebrow: "404",
    title: "Pagina non trovata",
    body: "La pagina che hai richiesto non esiste.",
    home: "Torna alla home",
  },
  newsletter: {
    title: "Iscriviti alla newsletter",
    body: "Ricevi aggiornamenti sui prodotti, consigli sui flussi di lavoro e note di rilascio da Dentoku Dev.",
    loading: "Caricamento del modulo di iscrizione...",
    emailPlaceholder: "tu@esempio.com",
    wait: "Attendi...",
    subscribe: "Iscriviti",
    thanks: "Grazie! Ti scriveremo presto.",
    back: "← Indietro",
    genericError: "Ops! Qualcosa è andato storto, riprova",
    tooMany: "Troppe iscrizioni, riprova tra poco",
  },
  leadMagnet: {
    eyebrow: "Checklist gratuita",
    title: "Trasformala in una lista a cui puoi davvero scrivere",
    body: "Ricevi la checklist di conformità GDPR e CAN-SPAM che usiamo per qualificare i contatti estratti prima di qualsiasi attività di outreach. Un PDF di una pagina.",
    emailPlaceholder: "tu@azienda.com",
    emailAria: "Indirizzo email",
    sending: "Invio in corso…",
    submit: "Inviami la checklist",
    consent: "Ti invieremo ogni tanto guide e aggiornamenti sui prodotti. Niente spam, puoi disiscriverti quando vuoi.",
    successTitle: "La tua checklist è pronta",
    successBody:
      "Grazie per l'iscrizione. Scarica la tua copia qui sotto e tieni d'occhio la casella di posta per le prossime guide.",
    download: "Scarica la checklist",
    genericError: "Qualcosa è andato storto, riprova.",
    tooMany: "Troppe iscrizioni, riprova tra poco.",
  },
  support: {
    eyebrow: "Assistenza via email",
    title: "Serve aiuto?",
    body: "Contatta l'assistenza EmailMagnet per domande sul prodotto, aiuto con la fatturazione o richieste sulla documentazione.",
    responseTime: "Tempo di risposta tipico: entro un giorno lavorativo.",
  },
  trustBar: {
    on: "su",
    outOfFive: "su 5",
  },
};
