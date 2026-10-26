import type { FounderCopy } from "@/copy/en/founder";

/**
 * Italian Founder page. Part of the consulting funnel (CONTEXT.md, "Transcreation"):
 * same keys and claims as English, argument rewritten for a consulting client, in the
 * homepage's voice ("tu"). The role stays in English, as on LinkedIn (CONTEXT.md,
 * "Founder role").
 */
export const founder: FounderCopy = {
  meta: {
    title: "Nicola Orlandi, fondatore di Dentoku Dev",
    description:
      "Nicola Orlandi, fondatore di Dentoku Dev a Milano: progetta e costruisce software su misura che toglie il lavoro ripetitivo alle piccole imprese, e misura il risparmio.",
  },
  breadcrumb: "Fondatore",
  role: "Founder & AI Automation Specialist",
  location: "Milano",
  description:
    "Progetta e costruisce il software su misura che toglie il lavoro ripetitivo alle piccole imprese, e conta con i clienti quante ore fa risparmiare.",
  primaryCta: { label: "Raccontaci il problema", href: "/contact" },
  studioLink: "Com’è fatto lo studio",
  shortAnswer: {
    title: "In breve",
    body: "Lo studio è a {location} e lo guida {name}: segue lui ogni progetto, dal problema al rilascio, con collaboratori scelti quando serve.",
  },
  proofPoints: {
    heading: "Come lavora",
    items: [
      {
        title: "Dal problema al rilascio.",
        description:
          "La prima call, la proposta scritta, la costruzione e il rilascio passano dalla stessa persona. Non spieghi due volte il tuo lavoro e niente si perde nei passaggi di mano.",
      },
      {
        title: "Il risparmio, contato.",
        description:
          "Ogni proposta parte dalle ore al mese che il lavoro ripetitivo ti costa oggi, e dopo il rilascio le ricontate insieme. Nessuna promessa di percentuali: un numero tuo, prima e dopo.",
      },
      {
        title: "A distanza, in italiano.",
        description:
          "Lo studio è a Milano e lavora con clienti in tutta Italia in videochiamata. Il software lo provi tu, nel tuo browser o nei tuoi strumenti, dalle prime settimane.",
      },
    ],
  },
  experience: {
    heading: "Esperienza",
    intro:
      "Architetto di formazione, ha passato oltre dieci anni a guidare la comunicazione digitale di brand del design, prima di fondare Dentoku Dev nel 2024.",
    present: "oggi",
  },
  products: {
    title: "I prodotti che ha costruito",
    description:
      "Oltre ai progetti per i clienti, pubblica e mantiene quattro prodotti propri sugli store: strumenti semplici e specifici, con utenti e recensioni pubbliche.",
    overviewLink: "Vedi tutti i prodotti",
  },
};
