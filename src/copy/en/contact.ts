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
    // Replaces the old "write directly to" line, which repeated the form's own inbox.
    whatsapp: { lead: "Prefer WhatsApp?", label: "Message us at" },
    reply: "We reply within one working day, to the form and on WhatsApp.",
    nextTitle: "What happens next",
    next: [
      { lead: "You write a few lines.", body: "The problem, or a question about a product." },
      { lead: "We set up a free 30-minute video call.", body: "To scope the work and how many hours it costs you today." },
      { lead: "You get a written proposal.", body: "What we build, what it costs, when it is ready." },
    ],
  },
  // The questions asked before writing, as an accordion under the form.
  before: {
    title: "Before you write",
    items: [
      {
        question: "Is the first call free?",
        answer:
          "Yes. It is a 30-minute video call: you tell us about the work that takes your time and we work out how many hours it costs you. It ends with a written proposal.",
      },
      {
        question: "How quickly do you reply?",
        answer: "Within one working day, whether you use the form or WhatsApp.",
      },
      {
        question: "Do I need to prepare anything?",
        answer:
          "No. It is enough to know which repetitive job takes you the most time. If you have an estimate of the hours, even a rough one, all the better.",
      },
      {
        question: "Do you only work in Milan?",
        answer: "No. We work by video call with businesses across Italy, in Italian or English.",
      },
      {
        question: "What happens to what I send you?",
        answer:
          "The form opens your email app and the message reaches our inbox; we use it only to reply to you and, if we work together, to run the project. The details are in the privacy policy.",
      },
    ],
    privacyLink: { label: "Read the privacy policy", href: "/privacy" },
  },
  products: {
    title: "A question about a product?",
    caption: "Pick the product as the topic in the form above, or open its page.",
    overviewLink: "See all products",
  },
};

export type ContactCopy = typeof contact;
