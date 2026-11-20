import type { MilanCopy } from "@/copy/en/milan";

/**
 * La pagina Milano. Translation of src/copy/en/milan.ts: same claims. The
 * title carries the search ("software house Milano"), the page the studio's
 * own word ("studio software").
 */
export const milan: MilanCopy = {
  meta: {
    title: "Software house a Milano per piccole imprese",
    description:
      "Studio software di Milano: automazioni con l’AI e software su misura per piccole imprese. Prima videochiamata gratuita di 30 minuti, da tutta Italia.",
  },
  breadcrumb: "Software house a Milano",
  title: ["Studio software a Milano."],
  standfirst:
    "Da Milano costruiamo automazioni con l’intelligenza artificiale e software su misura per piccole imprese. Si comincia con una videochiamata gratuita di 30 minuti, da qualsiasi parte d’Italia.",
  primaryCta: { label: "Calcola le tue ore", href: "/#brief" },
  secondaryCta: { label: "Scrivici", href: "/contact" },

  photos: {
    hero: "Un tram storico passa davanti all’Arco della Pace, a Milano",
    street: "Corso Sempione a Milano in autunno, con l’Arco della Pace in fondo al viale",
    tram: "Un uomo con l’ombrello attraversa i binari del tram, a Milano",
    creditLabel: "Foto:",
    creditSource: "su Pexels.",
  },

  call: {
    title: "Prima call",
    tag: "Gratuita",
    rows: [
      ["Come", "Videochiamata"],
      ["Durata", "30 minuti"],
      ["Lingua", "Italiano o inglese"],
    ],
    status: "Si chiude con una proposta scritta",
  },

  build: {
    heading: "Cosa costruiamo per le piccole imprese",
    lead: "Software che toglie il lavoro ripetitivo all’ufficio, costruito sui programmi che usi già.",
    items: [
      {
        lead: "Rispondere alle email.",
        body: "L’intelligenza artificiale legge le richieste e scrive una bozza di risposta con il tuo tono e le informazioni giuste. Tu la rileggi e premi Invia.",
      },
      {
        lead: "Preparare i preventivi.",
        body: "La richiesta viene confrontata con il tuo listino e il preventivo si compila nel tuo formato, pronto da controllare.",
        link: { label: "Come funziona il software per preventivi", href: "/quote-software" },
      },
      {
        lead: "Spostare i dati.",
        body: "I dati passano dall’email ai fogli di calcolo, al gestionale o a Shopify senza che nessuno li ricopi a mano.",
      },
      {
        lead: "Prenotazioni e ordini.",
        body: "Richieste e conferme vengono raccolte, il calendario si aggiorna e i promemoria partono da soli.",
      },
    ],
    more: "Costruiamo anche strumenti interni, estensioni per il browser e app Shopify.",
  },

  difference: {
    heading: "Cosa cambia rispetto a una software house",
    items: [
      {
        lead: "Parli con chi scrive il codice.",
        body: "Un fondatore e collaboratori scelti per ogni progetto, senza account manager in mezzo.",
      },
      {
        lead: "Una proposta scritta prima di ogni contratto.",
        body: "Cosa costruiamo, quanto costa, quando è pronto e quante ore al mese ti costa oggi il problema.",
      },
      {
        lead: "Le ore, contate due volte.",
        body: "Prima del progetto e dopo il rilascio, insieme. Così sai se il software ha fatto il suo lavoro.",
      },
      {
        lead: "Il codice è tuo.",
        body: "Con il saldo, il codice scritto per te diventa tuo, con la documentazione per farlo continuare a qualsiasi sviluppatore.",
      },
    ],
    note: "Per un progetto enterprise è meglio una software house più grande: te lo diciamo alla prima call.",
  },

  visit: {
    heading: "Come si comincia",
    lines: ["30 minuti,", "in videochiamata."],
    items: [
      {
        lead: "Gratuita.",
        body: "La prima call non costa niente e si chiude con una proposta scritta.",
      },
      {
        lead: "Da tutta Italia.",
        body: "La prima call, la proposta e gli aggiornamenti passano tutti dalla videochiamata, in italiano o in inglese. Il software lo provi tu, nel tuo browser, dalle prime settimane.",
      },
    ],
    contact: { label: "Scrivici", href: "/contact" },
  },

  products: {
    title: "Il software che pubblichiamo noi",
    caption:
      "EmailMagnet, Volume Control PRO e ClickPilot AI su Chrome Web Store, Countdown321 su Shopify App Store. Li costruiamo, li pubblichiamo e li manteniamo da Milano.",
  },

  faq: {
    title: "Domande su come lavoriamo",
    items: [
      {
        question: "Siete una software house?",
        answer:
          "Siamo uno studio software: un fondatore che scrive il codice e collaboratori scelti per ogni progetto, senza account manager. Facciamo il lavoro di una software house, su progetti a misura di piccola impresa.",
      },
      {
        question: "Come si svolge la prima call?",
        answer:
          "È una videochiamata gratuita di 30 minuti: ci racconti il lavoro che ti ruba tempo e capiamo insieme quante ore ti costa. Si chiude con una proposta scritta.",
      },
      {
        question: "Lavorate solo con aziende di Milano?",
        answer: "No. Lavoriamo in videochiamata con imprese in tutta Italia, in italiano e in inglese.",
      },
      {
        question: "Quanto costa un software su misura?",
        answer:
          "Dipende da cosa costruiamo, e lo sai per iscritto prima di impegnarti. La prima call è gratuita e si chiude con una proposta: cosa facciamo, quanto costa, quando è pronto.",
      },
      {
        question: "Che cosa automatizzate con l’intelligenza artificiale?",
        answer:
          "Il lavoro ripetitivo d’ufficio delle piccole imprese: leggere le email e scrivere le bozze di risposta, preparare i preventivi dal listino, ricopiare i dati tra i programmi, gestire prenotazioni e ordini. L’intelligenza artificiale legge le richieste scritte e prepara il lavoro; tu controlli e decidi.",
      },
      {
        question: "Se smettiamo di lavorare insieme, che fine fa il software?",
        answer:
          "Con il saldo, il codice scritto per te diventa tuo, con la documentazione per farlo continuare a qualsiasi sviluppatore. I nostri componenti riutilizzabili restano in licenza d’uso perpetua: puoi mantenere e modificare il software anche senza di noi.",
      },
    ],
  },
};
