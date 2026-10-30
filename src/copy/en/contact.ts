export const contact = {
  meta: {
    title: "Contact Dentoku Dev, custom software studio in Milan",
    description:
      "Talk to Dentoku Dev about product support, a new build, or a software project. We design, build, and ship digital products and bring the same craft to your team.",
  },
  breadcrumb: "Contact",
  contactPointName: "Contact Dentoku Dev Support",
  // Two authored lines: the headline rises line by line.
  title: ["Write to us, or", "count your hours."],
  standfirst:
    "Two ways to start: four questions that give you the number a proposal starts from, or a message in your own words. Either way, the person who writes the code replies.",
  briefCta: "Count your hours",
  writeCta: "Write a message",
  // The second way: the free form, with what happens after it.
  write: {
    title: "Prefer to write?",
    lead: "Tell us about the problem in your own words, or ask for help with one of our products. The form opens your email app with the message ready.",
    direct: "Or write directly to",
    nextTitle: "What happens next",
    next: [
      { lead: "You write a few lines.", body: "The problem, or a question about a product." },
      { lead: "We set up a short call.", body: "To scope the work and how many hours it costs you today." },
      { lead: "You get a written proposal.", body: "What we build, what it costs, when it is ready." },
    ],
  },
  products: {
    title: "A question about a product?",
    caption: "Pick the product as the topic in the form above, or open its page.",
    overviewLink: "See all products",
  },
};

export type ContactCopy = typeof contact;
