import type { FaqCopy } from "@/copy/en/faq";

/** Same claims and price as src/data/site.ts faqItems: no extraction or export limit, $19 lifetime. */
export const faq: FaqCopy = {
  meta: {
    title: "FAQ e supporto EmailMagnet",
    description:
      "Risposte alle domande più comuni su EmailMagnet: come funziona, affidabilità, legalità, cosa include il piano gratuito e accesso PRO a vita.",
  },
  breadcrumb: "FAQ",
  title: ["Domande frequenti", "su EmailMagnet."],
  description: "Risposte concise su EmailMagnet, esportazioni, prezzi, affidabilità e uso responsabile.",
  storeCta: "Aggiungi a Chrome, gratis",
  shortAnswer: {
    title: "In breve",
    body: "EmailMagnet è un’estensione Chrome di Dentoku Dev per trovare ed estrarre email dai siti web durante la navigazione.",
    plans: "Il piano Free non ha limiti mensili né per esportazione; PRO aggiunge salvataggio automatico, estrazione in blocco e supporto prioritario.",
  },
  questionsTitle: "Tutte le domande",
  related: {
    ariaLabel: "Pagine correlate alle FAQ",
    title: "Pagine correlate",
    links: [
      { label: "EmailMagnet product page", href: "/emailmagnet" },
      { label: "EmailMagnet pricing", href: "/pricing" },
      { label: "Responsible use guide", href: "/docs/responsible-use" },
      { label: "Contatta Dentoku Dev", href: "/contact" },
    ],
  },
  items: [
    {
      question: "Come funziona EmailMagnet?",
      answer:
        "EmailMagnet è un’estensione Chrome che rileva gli indirizzi email visibili mentre navighi sui siti pertinenti. Apri una pagina contatti, una directory, un elenco di fornitori o un profilo pubblico, avvia EmailMagnet, controlla le email rilevate e poi esporta l’elenco in CSV o TXT.",
    },
    {
      question: "Quanto è affidabile EmailMagnet?",
      answer:
        "EmailMagnet è pensato per rilevare le email visibili nelle pagine che stai già consultando in Chrome. I risultati dipendono da come il sito mostra le informazioni di contatto, quindi controlla sempre gli indirizzi estratti prima di esportarli o usarli.",
    },
    {
      question: "Cosa include la versione gratuita?",
      answer:
        "EmailMagnet Free include estrazione con un clic, esportazione CSV/TXT e supporto via email, senza limiti mensili né per esportazione sulle email che estrai. PRO aggiunge funzioni per la ricerca ricorrente, non più volume.",
    },
    {
      question: "Cosa include la versione PRO?",
      answer:
        "PRO (19 $ una tantum, a vita) aggiunge salvataggio automatico durante la navigazione, estrazione in blocco da elenchi di URL già verificati e supporto prioritario. Nessun abbonamento mensile.",
    },
    {
      question: "L’estrazione di email è legale?",
      answer:
        "L’estrazione di email da siti web pubblicamente visibili può essere legale se fatta in modo responsabile. Rispetta le leggi sulla privacy applicabili come GDPR e CAN-SPAM, raccogli solo email mostrate pubblicamente, usale per scopi commerciali legittimi, conserva il contesto della fonte e rispetta le richieste di opt-out. EmailMagnet è pensato per una ricerca responsabile, non per l’invio automatico.",
    },
    {
      question: "Su quali siti funziona EmailMagnet?",
      answer:
        "EmailMagnet funziona sui siti che mostrano indirizzi email visibili: pagine contatti aziendali, directory del team, pagine chi siamo, elenchi di attività, pagine partner e pagine di eventi. Rileva le email dal contenuto visibile della pagina, non da fonti nascoste, protette o private.",
    },
    {
      question: "Come esporto le email?",
      answer:
        "Dopo l’estrazione, fai clic sul pulsante di esportazione nel popup di EmailMagnet. Scegli CSV per la compatibilità con i fogli di calcolo o TXT per il testo semplice. I file si scaricano subito sul tuo computer e funzionano con la maggior parte dei CRM e degli strumenti di outreach.",
    },
  ],
};
