import type { FounderCopy } from "@/copy/en/founder";

/**
 * Italian Founder page. Part of the consulting funnel (CONTEXT.md, "Transcreation"):
 * same keys and claims as English, argument rewritten for a consulting client. The
 * role stays in English, as on LinkedIn (CONTEXT.md, "Founder role").
 */
export const founder: FounderCopy = {
  meta: {
    title: "Nicola Orlandi, fondatore di Dentoku Dev",
    description:
      "Nicola Orlandi, fondatore di Dentoku Dev a Milano: progetta e costruisce software su misura che toglie il lavoro ripetitivo alle piccole imprese, e misura il risparmio.",
  },
  breadcrumb: "Fondatore",
  eyebrow: "Fondatore",
  role: "Founder & AI Automation Specialist",
  location: "Milano",
  description:
    "Progetta e costruisce il software su misura che toglie il lavoro ripetitivo alle piccole imprese, e misura con i clienti quanto fa risparmiare.",
  shortAnswer: {
    title: "In breve",
    body: "Dentoku Dev è uno studio software con sede a {location}, guidato da {name}, {role}. Ogni progetto lo segue lui, dal problema al rilascio, con collaboratori scelti per progetto quando il lavoro lo richiede.",
  },
  proofPoints: [
    {
      title: "Dal problema al rilascio",
      description:
        "La call iniziale, la proposta scritta, la costruzione e il rilascio passano dalla stessa persona. Non spieghi due volte il tuo lavoro e nessuno si perde nei passaggi di mano.",
    },
    {
      title: "Il risparmio, misurato",
      description:
        "Ogni proposta parte dalle ore al mese che il lavoro ripetitivo ti costa oggi, e dopo il rilascio le ricontiamo insieme. Nessuna promessa di percentuali: un numero tuo, prima e dopo.",
    },
    {
      title: "A distanza, in italiano",
      description:
        "Lo studio è a Milano e lavora con clienti in tutta Italia in videochiamata. Il software lo provi tu, nel tuo browser o nei tuoi strumenti, dalle prime settimane.",
    },
  ],
  products: {
    title: "Il software che mantiene",
    description:
      "Oltre ai progetti per i clienti, pubblica e mantiene quattro prodotti propri sugli store: strumenti semplici e specifici, con utenti e recensioni pubbliche.",
  },
  contact: {
    title: "Scrivigli direttamente",
    body: "Le richieste per un nuovo progetto e il supporto ai prodotti arrivano allo stesso indirizzo.",
  },
};
