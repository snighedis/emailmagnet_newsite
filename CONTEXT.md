# Context / Glossary

Shared language for dentokudev.com (Dentoku Dev studio marketing site). Glossary only:
definitions of the domain terms used across SEO, growth, and product work. No implementation
detail lives here.

## Conversion events

These are distinct events. "Download" is ambiguous and should be avoided in favor of the
precise term.

- **Install** — a user adds a product from its store: a Chrome extension from the Chrome Web
  Store (EmailMagnet, ClickPilot AI, Volume Control PRO) or a Shopify app from the Shopify
  App Store (Countdown321). Free and off-site. The site's north-star metric is total Installs
  across all four products.
- **Purchase** — a paid one-time upgrade: EmailMagnet PRO ($19, Stripe) or ClickPilot AI PRO
  ($19, Gumroad). Off-site checkout.
- **Trial** — a Countdown321 paid plan started from its Shopify listing (subscription, 7-day
  free trial, $0 to $19.99/mo). The only recurring-revenue product.
- **Consulting Lead** — an inbound request for custom work (Services) sent through the contact
  page. The homepage's primary conversion. Installs remain the north-star for product surfaces
  (store listings, product pages, money pages), which is where product users actually convert.

## Discovery surfaces

- **Website SEO** — ranking dentokudev.com pages in Google organic search. The site is the
  landing layer; every install CTA points off-site to a store.
- **Store ASO** (App Store Optimization) — ranking a product inside its store's own search
  (Chrome Web Store search, Shopify App Store search). A separate discovery surface from
  Website SEO, often the larger install driver.
- **Off-site authority / distribution** — backlinks, mentions, directory listings, community
  posts, and PR that build the domain authority Website SEO depends on and drive referral
  traffic directly.

## Offering

- **Services** — custom software development with AI integration, sold to small and mid-sized
  businesses (PMI): internal tools, workflow automation, browser extensions, Shopify and
  ecommerce apps. Converted via Consulting Leads. Credibility rests on the four shipped
  Products ("judge us by what we build for ourselves"): no client logos or invented metrics
  are used as proof.
- **Studio** — Dentoku Dev is founder-led: Nicola Orlandi plus collaborators engaged per
  project when the work needs them. Not a stable multi-person team. "Small team" is accurate;
  copy must not imply permanent staff, departments, or account managers.
- **Source handover** — on final payment the client owns the code written for their project,
  with documentation for any other developer to continue it. The studio keeps its pre-existing
  reusable components and grants the client a perpetual licence to use them. This is the
  studio's answer to the continuity objection a founder-led studio raises; the exact clause
  lives in the contract template.
- **Discovery call** — the short first call that precedes every written proposal. It is the
  only "consulting" the studio offers: there is no standalone advisory service (no AI
  assessment, workshop, or paid analysis phase). Copy in any language must not promise one;
  the answer to "where should we start with AI?" is always a small built tool, not a plan.

## Products

- **EmailMagnet** — Chrome extension for extracting visible business emails while browsing;
  exports CSV/TXT. Freemium, PRO is $19 one-time. Flagship; most content lives here.
- **ClickPilot AI** — Chrome extension: in-browser AI writing assistant (fix, rewrite,
  summarize, translate, custom shortcuts). Freemium, PRO $19 one-time, requires the user's
  own OpenAI API key (BYOK).
- **Volume Control PRO** — Chrome extension that boosts tab audio up to 600% with per-site
  memory. Freemium: free to install, Audio Studio PRO unlocks for €9.99 one-time. Highest
  raw-install-volume upside.
- **Countdown321** — Shopify app for storefront countdown timers. Subscription SaaS
  ($0 to $19.99/mo). Highest LTV; smallest addressable audience (Shopify merchants only).

## Content structures

- **Content hub** — a dynamic `[slug]` route rendering many entries from one data object:
  Glossary, Compare, Use-cases, Integrations. Each currently holds one entry; scaling a hub
  means adding keys, not files.
- **Money page** — a long-tail, high-commercial-intent product subpage (for example
  `/emailmagnet/chrome-email-extractor`) targeting a specific search query.

## Localisation

- **Claim** — any statement a reader could verify on a store listing, an invoice, or a
  contract: ratings, install counts, prices, plan limits, feature lists, "no subscription".
  Claims are invariant across languages: the Italian text carries exactly the English claim,
  never a stronger or vaguer one.
- **Argument** — everything around the claims: which need or ambition the page speaks to, the
  order of the sections, the tone, the objections it answers. The argument may differ by
  market.
- **Translation** — Italian text that keeps both the claims and the argument of the English
  page. The default for every surface that speaks to a product user (product pages, EmailMagnet
  FAQ, docs, chrome, legal), because those audiences are global.
- **Transcreation** — Italian text that keeps the claims but rewrites the argument for the
  Italian market. Allowed only on the consulting funnel: homepage, contact page, the
  "Working with us" FAQ. The consulting reader in Italy is a PMI owner exploring AI, not the
  North American buyer the English argument was written for.
