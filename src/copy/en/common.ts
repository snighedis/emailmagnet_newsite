/**
 * English copy for the global chrome: header, footer, cookie banner,
 * exit-intent modal, contact form, 404, newsletter and lead-magnet forms.
 * English is the form of truth: `CommonCopy` is derived from this object and
 * the Italian module must satisfy it, so a missing or extra key fails tsc.
 *
 * Plain data only (no JSX, no functions): the object is handed to client
 * components through LocaleProvider, so it must serialise.
 */
export const common = {
  languageSwitcher: {
    /** Short label of the OTHER language, shown in the header. */
    label: "IT",
    /** Full name of the other language, in that language, for assistive tech. */
    ariaLabel: "Italiano",
  },
  header: {
    products: "Products",
    resources: "Resources",
    featuredBadge: "Featured product",
    viewProduct: "View product page",
    portfolioLabel: "Product portfolio",
    resourceDescriptions: {
      "/overview": "Every product and where it fits, on one page.",
      "/docs": "Setup, exports, and responsible-use guides.",
      "/blog": "Practical guides on browser workflows.",
      "/faq": "Short answers on pricing, limits, and support.",
    } as Record<string, string>,
    getEmailMagnet: "Get EmailMagnet",
    getEmailMagnetFree: "Get EmailMagnet for free",
    startProject: "Start your project",
    openNavigation: "Open navigation",
    navigationTitle: "Dentoku Dev navigation",
    logoAlt: "Dentoku Dev logo",
  },
  footer: {
    builtWith: "Built with",
    linkedinAria: "Dentoku Dev on LinkedIn",
    xAria: "Dentoku Dev on X",
    copyright: "© 2026 Dentoku Dev. All rights reserved.",
    cookiePreferences: "Cookie preferences",
    logoAlt: "Dentoku Dev logo",
  },
  cookieBanner: {
    dialogAria: "Cookie consent",
    title: "We value your privacy",
    preferencesTitle: "Cookie preferences",
    closeAria: "Reject non-essential cookies and close",
    intro: {
      before:
        "We use strictly necessary cookies to run this site, and, only with your consent, analytics and marketing cookies. You can accept, reject, or choose per category. Read our",
      link: "Cookie Policy",
      after: ".",
    },
    categories: {
      necessary: {
        title: "Strictly necessary",
        description:
          "Required for the site to work and to remember your cookie choice. Always on.",
      },
      analytics: {
        title: "Analytics",
        description:
          "Google Analytics and privacy-friendly usage metrics that help us improve the site. This also loads our optional AI support chat (Chatbase, USA), which processes what you type in it.",
      },
      marketing: {
        title: "Marketing",
        description:
          "Google Ads tags used to measure campaign conversions. Off unless you allow them.",
      },
    },
    rejectAll: "Reject all",
    saveChoices: "Save choices",
    acceptAll: "Accept all",
    managePreferences: "Manage preferences",
  },
  exitIntent: {
    closeAria: "Close",
    eyebrow: "Free checklist",
    title: "Before you go, grab the compliance checklist",
    body: "The GDPR & CAN-SPAM checklist we use to turn raw email extraction into lists you can actually send to. Get the PDF and join the sales reps, recruiters, and growth teams who rate EmailMagnet 5.0★.",
    emailPlaceholder: "you@company.com",
    emailAria: "Email address",
    sending: "Sending…",
    submit: "Send me the checklist",
    genericError: "Something went wrong, please try again.",
    tooMany: "Too many signups, please try again in a little while",
    consent: {
      before:
        "We'll email you occasional guides and product updates. No spam, unsubscribe anytime. See our",
      link: "Privacy Policy",
      after: ".",
    },
    successTitle: "Your checklist is ready",
    successBody:
      "Thanks for subscribing. Grab your copy below and look out for new guides in your inbox.",
    download: "Download the checklist",
  },
  contactForm: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    topic: "Topic",
    message: "Message",
    firstNamePlaceholder: "First name",
    lastNamePlaceholder: "Last name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Tell us what you want to build, or what you need help with.",
    selectTopic: "Select a topic",
    requiredSr: " required",
    /** `value` is what reaches support and stays English; `label` is shown. */
    topics: [
      { value: "EmailMagnet", label: "EmailMagnet" },
      { value: "ClickPilot AI", label: "ClickPilot AI" },
      { value: "Volume Control PRO", label: "Volume Control PRO" },
      { value: "Countdown321", label: "Countdown321" },
      { value: "A new project", label: "A new project" },
      { value: "General inquiry", label: "General inquiry" },
    ],
    consent:
      "By submitting this form, you confirm that you have read and accepted the Privacy Policy.",
    incomplete: "Fill first name, last name, a valid email, and message before sending.",
    /** `{email}` is replaced with the support address. */
    success:
      "Your email app should open with the message ready to send. If it doesn't, email us directly at {email}.",
    submit: "Send message",
  },
  notFound: {
    eyebrow: "404",
    title: "Page not found",
    body: "The page you requested does not exist in the EmailMagnet site architecture.",
    home: "Return home",
  },
  newsletter: {
    title: "Join the newsletter",
    body: "Get product updates, workflow tips, and release notes from Dentoku Dev.",
    loading: "Loading subscription form...",
    emailPlaceholder: "you@example.com",
    wait: "Please wait...",
    subscribe: "Subscribe",
    thanks: "Thanks! We'll be in touch!",
    back: "← Back",
    genericError: "Oops! Something went wrong, please try again",
    tooMany: "Too many signups, please try again in a little while",
  },
  leadMagnet: {
    eyebrow: "Free checklist",
    title: "Turn this into a list you can actually send to",
    body: "Get the GDPR & CAN-SPAM compliance checklist we use to qualify extracted contacts before any outreach. Delivered as a one-page PDF.",
    emailPlaceholder: "you@company.com",
    emailAria: "Email address",
    sending: "Sending…",
    submit: "Send me the checklist",
    consent: "We'll email you occasional guides and product updates. No spam, unsubscribe anytime.",
    successTitle: "Your checklist is ready",
    successBody:
      "Thanks for subscribing. Grab your copy below and look out for new guides in your inbox.",
    download: "Download the checklist",
    genericError: "Something went wrong, please try again.",
    tooMany: "Too many signups, please try again in a little while.",
  },
  support: {
    eyebrow: "Email support",
    title: "Need support?",
    body: "Contact EmailMagnet support for product questions, billing help, or documentation requests.",
    responseTime: "Typical response time is within one business day.",
  },
  trustBar: {
    /** "5.0 on Chrome Web Store" */
    on: "on",
    /** Screen-reader text after the rating: "5 out of 5" */
    outOfFive: "out of 5",
  },
};

export type CommonCopy = typeof common;
