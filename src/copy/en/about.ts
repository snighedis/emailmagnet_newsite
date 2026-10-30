
export const about = {
  meta: {
    title: "About Dentoku Dev, a software studio in Milan",
    description:
      "Dentoku Dev is a Milan software studio: custom software that takes the repetitive work off small businesses, with the saving measured.",
  },
  breadcrumb: "About",
  itemListName: "Dentoku Dev product portfolio",
  // Two authored lines: the headline rises line by line.
  title: ["One studio,", "one founder."],
  standfirst:
    "We are in Milan and build custom software for small businesses: we take the repetitive work off your hands and count with you the hours it saves.",
  primaryCta: { label: "Tell us the problem", href: "/contact" },
  founderLink: "Meet the founder",
  // The short answer, set large as one statement.
  statement: {
    heading: "Short answer",
    body: "The founder follows every project from the problem to the release, with collaborators brought in when the work needs them: no account managers, no handoffs.",
    founder: {
      before: "Read who is behind the studio on the",
      link: "founder's page",
      after: ".",
    },
  },
  // One reading column, each paragraph opening with a bold run-in.
  principles: {
    heading: "How we work",
    items: [
      {
        lead: "First, a written proposal.",
        body: "We put in writing what we build, what it costs, when it ships and how many hours a month the problem costs you today. Then working software to try from the first weeks, and a direct line after release.",
      },
      {
        lead: "The saving is counted, not promised.",
        body: "We do not promise percentages. We count the hours with you before we start and count them again after release: it is the number the proposal starts from and the one we check it against.",
      },
      {
        lead: "The code is yours.",
        body: "On final payment the code written for your project becomes yours, with the documentation for any developer to carry it on. For our reusable components you get a perpetual licence to use them.",
      },
      {
        lead: "Our software is live.",
        body: "Besides client projects we build, publish and maintain four products of our own, with users and reviews on public stores: proof that what we ship stays online and works.",
      },
    ],
  },
  portfolio: {
    title: "The software we publish",
    description:
      "Four products of our own, on public stores. Simple, specific tools: not a showcase of what we can build for you, but proof that what we ship stays online.",
    overviewLink: "See all products",
  },
};

export type AboutCopy = typeof about;
