import type { FaqCopy } from "@/copy/en/faq";

/**
 * Same claims and price as src/data/site.ts faqItems, in the same order: on Free 15 sites a day,
 * 100 addresses per file, local autosave and masked previews; a PRO trial the user starts; $19 lifetime.
 */
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
    plans: "Il piano Free include l’autosalvataggio locale e permette di copiare ed esportare da un massimo di 15 siti al giorno, fino a 100 indirizzi per file; PRO toglie il limite giornaliero e aggiunge i risultati completi della pagina Contatti, un’unica lista tra le pagine, la ricerca in tutto un sito, l’estrazione in blocco da elenchi di URL, export senza tetto e supporto prioritario.",
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
        "EmailMagnet Free include estrazione con un clic, autosalvataggio locale sotto il tuo controllo e supporto via email. Puoi copiare ed esportare le email di un massimo di 15 siti diversi al giorno (un sito già usato quel giorno resta aperto), in file CSV o TXT fino a 100 indirizzi ciascuno. La lista mostra la pagina che hai aperto, più un’anteprima delle email trovate nelle altre pagine: le 3 più recenti per intero, una per sito, e le altre mascherate. Quando EmailMagnet legge per te la pagina Contatti di un sito, anche gli indirizzi in più che trova lì compaiono mascherati, in anteprima. Se usavi già EmailMagnet, l’estensione ti mostra un avviso e questi limiti valgono per te 7 giorni dopo la prima volta che lo vedi.",
    },
    {
      question: "Cosa include la versione PRO?",
      answer:
        "PRO (19 $ una tantum, a vita) mostra per intero i risultati della pagina Contatti e non ha limiti giornalieri. Mette tutte le email di tutte le pagine in un’unica lista, cerca in tutto un sito (fino a 20 pagine), scansiona in automatico un elenco fino a 1.000 URL, esporta tutti i risultati senza tetto e aggiunge il supporto prioritario. Nessun abbonamento mensile. Puoi provare PRO gratis per 7 giorni quando vuoi, dall’estensione, senza carta e senza registrazione; alla fine della prova EmailMagnet continua a funzionare con il piano gratuito e non perdi nulla di quello che hai trovato.",
    },
    {
      question: "L’estrazione di email è legale?",
      answer:
        "L’estrazione di email da siti web pubblicamente visibili può essere legale se fatta in modo responsabile. Rispetta le leggi sulla privacy applicabili come GDPR e CAN-SPAM, raccogli solo email mostrate pubblicamente, usale per scopi commerciali legittimi, conserva il contesto della fonte e rispetta le richieste di opt-out. EmailMagnet è pensato per una ricerca responsabile, non per l’invio automatico.",
    },
    {
      question: "Su quali siti funziona EmailMagnet?",
      answer:
        "EmailMagnet funziona sui siti che mostrano indirizzi email visibili: pagine contatti aziendali, directory del team, pagine chi siamo, elenchi di attività, pagine partner e pagine di eventi. Rileva le email che un visitatore vede sulla pagina. Questo comprende gli indirizzi protetti dall’offuscamento delle email di Cloudflare, che decodifica solo in ciò che un visitatore vedrebbe sulla pagina. Non legge mai dati nascosti o privati.",
    },
    {
      question: "E se una pagina mostra poche email, o nessuna?",
      answer:
        "Quando la pagina aperta mostra da 0 a 2 email, EmailMagnet legge da solo la pagina Contatti dello stesso sito. Legge fino a 2 pagine, solo su quel sito, senza cookie e interamente nel tuo browser, e mai più di una volta ogni 24 ore per la stessa pagina. PRO mostra per intero gli indirizzi in più che trova lì. Il piano gratuito li mostra mascherati, in anteprima: per esempio m***@domain.com, oppure ***@domain.com per i nomi generici o brevi.",
    },
    {
      question: "Come esporto le email?",
      answer:
        "Dopo l’estrazione, fai clic sul pulsante di esportazione nel popup di EmailMagnet. Scegli CSV per la compatibilità con i fogli di calcolo o TXT per il testo semplice. I file si scaricano subito sul tuo computer e funzionano con la maggior parte dei CRM e degli strumenti di outreach.",
    },
  ],
};
