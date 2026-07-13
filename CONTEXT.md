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

## Products

- **EmailMagnet** — Chrome extension for extracting visible business emails while browsing;
  exports CSV/TXT. Freemium, PRO is $19 one-time. Flagship; most content lives here.
- **ClickPilot AI** — Chrome extension: in-browser AI writing assistant (fix, rewrite,
  summarize, translate, custom shortcuts). Freemium, PRO $19 one-time, requires the user's
  own OpenAI API key (BYOK).
- **Volume Control PRO** — Chrome extension that boosts tab audio up to 600% with per-site
  memory. 100% free (no revenue; brand/portfolio value). Highest raw-install-volume upside.
- **Countdown321** — Shopify app for storefront countdown timers. Subscription SaaS
  ($0 to $19.99/mo). Highest LTV; smallest addressable audience (Shopify merchants only).

## Content structures

- **Content hub** — a dynamic `[slug]` route rendering many entries from one data object:
  Glossary, Compare, Use-cases, Integrations. Each currently holds one entry; scaling a hub
  means adding keys, not files.
- **Money page** — a long-tail, high-commercial-intent product subpage (for example
  `/emailmagnet/chrome-email-extractor`) targeting a specific search query.
