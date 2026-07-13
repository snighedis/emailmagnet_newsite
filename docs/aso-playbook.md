# ASO Playbook — Chrome Web Store + Shopify App Store

_Operational checklist for the store listings, where installs actually happen. You execute this in
the Chrome Web Store Developer Dashboard and the Shopify Partner dashboard. Nothing here is code._

**Why this first:** installs happen in the store, not on dentokudev.com. Optimizing the listing lifts
installs from the traffic the store already sends you, and the store re-ranks in days/weeks (vs months
for Google). Install velocity is a flywheel: more installs → higher in-store rank → more installs.

**Ground rule (truthfulness):** every word in a listing must be verifiable from the product itself.
Do not add a feature or number you cannot demonstrate. Before publishing any copy below, check it
against the current live listing and the actual extension. Countdown321 bills monthly, so never use
"no subscription" language for it.

---

## How Chrome Web Store search ranks (the levers you control)

CWS has no keyword field. It indexes the **name** and the **description**, then ranks with heavy
weight on **ratings/reviews**, **install count + velocity**, and **retention (low uninstall rate)**.
So the fast levers, in order of impact:

1. **Reviews** — the single fastest mover for both rank and click-through (stars show in search).
2. **Name + short description** — the indexed, above-the-fold text. Must carry the primary keyword.
3. **First screenshot + promo tile** — drives the click-to-install conversion.
4. **Retention** — set correct expectations in the listing so people don't install then uninstall.

---

## Phase 0 — The 3 fastest wins (do these first, all products)

### 1. Reviews solicitation (biggest, fastest lever) — compliant
- **Never incentivize reviews** (CWS + Shopify both prohibit rewards for reviews — it risks removal).
- **Ask at the moment of success**, in the user's flow, with a direct link to the review page:
  - EmailMagnet: after a successful export.
  - Volume Control PRO: after a boost has been active a while.
  - ClickPilot AI: after a few successful rewrites.
  - _(This needs a small in-extension prompt — flag to engineering if not already present.)_
- **Email/newsletter push**: ask existing satisfied users to leave an honest review. Direct links:
  - EmailMagnet reviews: `https://chromewebstore.google.com/detail/emailmagnet-email-extract/gnlnbefnecaoocmamafbnefjepbeppli/reviews`
  - (Build the same `/reviews` deep link for each product from its listing URL.)
- **Respond to every review** (positive and negative) — signals an active, maintained product.
- Target: a steady trickle of fresh reviews. Recency matters more than a big one-time batch.

### 2. Rewrite each short description (132 chars, indexed + shown in search)
Lead with the primary keyword and the benefit. See per-product copy below.

### 3. Replace the first screenshot with a benefit-led hero
The first image is the one people judge. One glance must answer "what does this do for me?" —
big visual of the product in action + a short benefit caption baked into the image.

---

## Per-product optimization

> For each: compare the "Target" against the current live listing, adapt to your voice, verify every
> claim, then update in the dashboard. CWS name policy discourages keyword-stuffed names — a single
> clear descriptor after the brand is fine; a list of keywords is not.

### 1. Volume Control PRO — LEAD (free, highest volume potential, already gets impressions)
GSC shows it already earning impressions for "volume control extension" (pos ~28) and "tab volume
control" (pos ~37). The store is where these convert.

- **Target name:** `Volume Control PRO: Volume Booster up to 600%`
  (adds "volume booster", the high-volume head term, + the 600% differentiator)
- **Target short description (≤132):**
  `Boost any tab's volume up to 600% with one slider. Free volume booster and audio amplifier for Chrome, with per-site volume memory.`
- **Keywords to weave naturally into the detailed description:** volume booster, sound booster,
  increase volume, boost volume, audio amplifier, tab volume control, louder videos, quiet audio.
- **First screenshot:** the slider set high over a recognizable video (e.g. YouTube), with a "600%"
  callout and caption "Make quiet videos loud." Honesty note already on-site: boosting works best on
  YouTube/HTML5; keep that accurate in the listing.
- **Category:** confirm it's in the most relevant productivity/accessibility category.

### 2. EmailMagnet — SECOND (leverage the existing 5.0★ social proof)
GSC shows real demand: "email extractor chrome" (pos ~17), plus many email-extractor impressions.

- **Target name:** `EmailMagnet: Email Extractor for Chrome`
  ("email extractor" is the money term already surfacing in GSC)
- **Target short description (≤132):**
  `Extract visible business emails while you browse, review them, and export CSV or TXT. Free Chrome email extractor for lead research.`
- **Keywords for the detailed description:** email extractor, extract emails from website, email
  finder, CSV export, lead research, contact extraction. Keep the responsible-use framing.
- **First screenshot:** the popup with captured emails over a directory/map + an "Export CSV" cue and
  caption "Turn any page into a lead list."
- **Reviews:** you have 5.0★ but few. This is your best short-term lever — push for more via the flow
  in Phase 0. More recent reviews lift both rank and CTR.

### 3. ClickPilot AI — THIRD (fix the naming collision + activation friction)
"clickpilot" (bare) is dominated by an unrelated bigger namesake, so target the descriptive intent.

- **Target name:** `ClickPilot AI: AI Writing Assistant for Chrome`
  (owns "AI writing assistant", the real intent; avoids fighting bare "clickpilot")
- **Target short description (≤132):**
  `Fix, rewrite, summarize, and translate text in any field with AI, without leaving the page. Bring your own OpenAI key.`
- **Set the BYOK expectation in the listing** (it needs the user's OpenAI key). Saying it upfront
  reduces install-then-uninstall, which protects your ranking. Retention is a ranking factor.
- **Keywords:** AI writing assistant, rewrite text, fix grammar, summarize, translate, Chrome AI.
- **First screenshot:** the right-click menu (Fix / Rewrite / Summarize / Translate) open inside Gmail.

### 4. Countdown321 — Shopify App Store (DIFFERENT store, different rules)
This is not Chrome Web Store — it's `apps.shopify.com/countdown321`, with its own ranking (app store
search + category + **reviews** + install base) and its own analytics in the Partner dashboard.

- Lead the listing intro/tagline with "Shopify countdown timer" (your primary term).
- **Reviews are decisive** on the Shopify App Store — prioritize the same compliant review flow.
- Keep pricing claims accurate (it is subscription with a free tier + trials; never "no subscription").
- Fill every listing field Shopify offers (keywords, categories, demo store, screenshots, video).

---

## Measurement (know if it worked)

- **CWS Developer Dashboard:** track **weekly installs** and **weekly uninstalls** (retention) per
  product. Re-check ~1-2 weeks after each listing change (allow for store review approval).
- **In-store rank check:** manually search the Chrome Web Store for your target terms (e.g. "volume
  booster", "email extractor chrome") and note where your listing appears; recheck weekly.
- **Shopify Partner dashboard:** installs, uninstalls, and listing-page conversion for Countdown321.
- **Tie back to the site:** the GA4 events already fire on outbound store clicks (`click_chrome_store`,
  `click_shopify_listing`) — cross-reference site-driven clicks vs total store installs.

## Policy landmines (don't)

- No keyword-stuffed names or descriptions (rejection / rank suppression).
- No incentivized, fake, or exchanged reviews (removal risk on both stores).
- No misleading screenshots or claims (store policy + our truthfulness rule).
- Don't change a name drastically overnight — users find listings by their known name/icon.

## Suggested order of execution
1. Turn on the review-ask flow for all products (Phase 0.1).
2. Volume Control PRO listing (name + short desc + first screenshot).
3. EmailMagnet listing + a review push to existing users.
4. ClickPilot AI listing (name + BYOK expectation).
5. Countdown321 Shopify listing.
6. Wait ~2 weeks, read the dashboard, iterate on whichever moved least.
