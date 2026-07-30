# Off-Site Authority Playbook — links, mentions, and entity signals

_Operational checklist for everything that happens OUTSIDE dentokudev.com and outside the store
listings. You execute this; almost none of it is code. Companion to `docs/aso-playbook.md` (which
covers the store listings themselves)._

**Why this now:** the on-site work is done and it is not the bottleneck. As of July 2026 the site has
36 indexed pages and roughly 1.3K impressions per quarter, but only **6 clicks**, at an average
position of ~23. Pages exist and Google can see them; they simply rank too low to be clicked.
Adding more pages does not fix that. Position is a function of authority, and authority is built
off-site. This is the lever that has been deferred twice.

**Expectation setting, honestly:** this is the slowest work in the whole SEO plan. Store listings
re-rank in weeks; off-site authority moves over months. Nothing here produces a result you can see
next week. Do it anyway, because nothing else unblocks the rankings.

**Ground rule (truthfulness):** the same rule as everywhere else. Every claim in a submission, a
launch post, or an outreach email must be verifiable from the live product. Volume Control PRO is
free to install with an optional one-time Audio Studio PRO upgrade; Countdown321 bills monthly, so
never use "no subscription" language for it.

---

## What actually builds authority (ranked by honesty of return)

1. **Real product presence on platforms people already use.** Four live store listings are the
   strongest asset this business has. Everything below leverages them.
2. **Launches that create a burst of genuine attention** (Product Hunt, Show HN). Value is the
   referral traffic and the brand searches they trigger, not the link itself.
3. **Entity consistency.** Google needs to be sure "Dentoku Dev" is one real company. Same name,
   same address, same URL everywhere. This already feeds `brandProfiles` in `src/data/site.ts`,
   which renders as `sameAs` in the Organization schema.
4. **Curated directories that a human actually maintains.** A handful of relevant ones, not a
   hundred generic ones.
5. **Being useful in public** where the audience already asks questions.

Not on this list, deliberately: paid links, link exchanges, guest-post networks, and mass directory
blasts. See "Policy landmines".

---

## Phase 0 — The fastest wins

### 1. Product Hunt for the three products that have not launched
EmailMagnet is already on Product Hunt (it is in `brandProfiles`). ClickPilot AI, Volume Control
PRO, and Countdown321 are not.

- **Launch one product at a time**, several weeks apart. Three launches on one day wastes three
  audiences and looks like spam.
- **Suggested order:** Volume Control PRO first (free, broadest appeal, lowest friction to try),
  then ClickPilot AI, then Countdown321 (narrowest audience: Shopify merchants only).
- Launch Tuesday to Thursday, 00:01 PT. Prepare the assets the night before.
- Needs: tagline, 3 to 5 gallery images, a short maker comment explaining why you built it, and the
  real store link.
- **The maker comment is the highest-leverage text.** Write it as the studio's story ("we build our
  own tools and sell the same work as consulting"), not as an ad.
- Afterwards: add the resulting Product Hunt URL to `brandProfiles` in `src/data/site.ts` so it
  joins the Organization `sameAs` set.

### 2. Google Business Profile for the studio
Dentoku Dev is a real business at a real Milan address (Via Bullona 8, 20154 Milano, P.IVA
IT13625480960 — already public in the privacy policy). A verified Business Profile is one of the
strongest entity signals available, it is free, and it is the one thing on this list that can
produce local consulting leads directly.

- Verify the listing, use the exact same business name and URL as the site.
- Category: software company / software development.
- This matters more than any directory below.

### 3. Consistent founder and company profiles
Nicola Orlandi is the founder (`founderConfig` in site.ts, plus `/founder`). Make the public
profiles agree with each other and with the site:

- LinkedIn company page for Dentoku Dev + founder profile linking to dentokudev.com.
- GitHub organization or profile with the site in the bio.
- Crunchbase entry for the company.
- Each of these that exists should be added to `brandProfiles`.

---

## Per-channel playbook

### Product Hunt (highest value, most effort)
Covered above. One rule worth repeating: never buy upvotes. Product Hunt detects it, and a
penalized launch is worse than no launch.

### Show HN (Hacker News)
Good fit for Volume Control PRO and ClickPilot AI (developer-adjacent, technically interesting).
Title format: `Show HN: Volume Control PRO – boost any Chrome tab up to 600%`. Be present in the
comments and answer technical questions honestly, including limitations. HN punishes marketing
language ruthlessly and rewards candour about tradeoffs.

### Extension and app directories (pick few, verify each)
Submit only where a real human curates and where the listing is genuinely relevant. Verify each
site is still active before submitting:

- **AlternativeTo** — list each product as an alternative to the obvious incumbents. High-quality,
  long-lived listings.
- **SaaSHub** / **Slant** — comparison-style sites, reasonable fit.
- **Shopify app aggregators and review sites** for Countdown321 specifically.
- **AI tool directories** for ClickPilot AI. This category is full of low-quality sites: submit only
  to ones with real editorial curation and actual traffic.

Rule of thumb: if the site will list anything for free in five seconds with no review, its link is
worth nothing and may be actively harmful.

### G2 / Capterra
Worth it for **Countdown321** only (B2B SaaS with a subscription, which is what these platforms
index well). Free listings exist; do not pay for placement at this stage.

### Being useful in public
Where the audience already asks the question your product answers:

- Reddit: r/chrome_extensions, r/shopify, r/edmproduction and similar audio-adjacent subs for
  Volume Control PRO.
- The rule: answer the question fully, then mention the product only if it genuinely fits, and
  disclose that you built it. Undisclosed self-promotion gets you banned and is dishonest.
- One good answer in a thread that ranks in Google is worth more than ten forum drops.

### Reviews (cross-reference)
Review solicitation lives in `docs/aso-playbook.md` because it primarily moves store rank. It also
builds off-site trust signals. Same hard rule: **never incentivize reviews**. Both the Chrome Web
Store and Shopify prohibit it and both will remove listings for it.

---

## Measurement (know if it worked)

Check quarterly, not weekly. This work has a long lag.

- **GSC → Links report**: total external links and linking domains. This is the direct readout.
- **GSC → Performance, brand queries**: search for "dentoku", "clickpilot", "emailmagnet",
  "volume control pro". Rising brand-query impressions is the earliest signal that awareness is
  growing, and it usually moves before rankings do.
- **GA4 referral traffic**: did Product Hunt / HN / a directory actually send humans?
- **The real target**: average position on the money queries moving from ~23 into the top 10, and
  the first clicks arriving. Today the Volume Control cluster has 66 impressions and zero clicks.
- **Do not** track sitewide average position as a success metric. It gets worse as you rank for
  more queries, which is why it fell from 5.8 to 18.4 while impressions grew 50%.

---

## Policy landmines (don't)

- **Never buy links.** Paid links that pass PageRank violate Google's spam policies and risk a
  manual action. The site currently has zero manual actions; keep it that way.
- **Never buy or incentivize reviews or upvotes.** Store removal risk, Product Hunt penalty risk.
- **No link exchanges or "we'll link to you if you link to us" schemes.** Detectable and penalized.
- **No mass directory submission services.** A burst of low-quality links is a spam signal.
- **No fake accounts or sockpuppets** in forums or reviews.
- **No AI-generated guest posts** placed at scale on content farms.
- Disclose that you are the maker whenever you mention your own product.

---

## Suggested order of execution

1. Google Business Profile (highest signal-to-effort ratio, and can produce consulting leads).
2. LinkedIn company page + founder profile consistency.
3. Product Hunt launch: Volume Control PRO.
4. AlternativeTo listings for all four products.
5. Show HN for Volume Control PRO (a few weeks after the PH launch, not the same week).
6. Product Hunt launch: ClickPilot AI.
7. Crunchbase, GitHub org, remaining profile consistency.
8. Product Hunt launch: Countdown321 + G2/Capterra listing.
9. Ongoing, low intensity: useful public answers where the audience is.

After each step that produces a public profile URL, add it to `brandProfiles` in
`src/data/site.ts` so the Organization `sameAs` set stays current.
