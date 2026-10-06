<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Re-read a product's claims whenever the product changes

Copy gets written while a product is still an intention, and nobody goes back to
it when the product takes a different road. Three false claims reached production
that way and were each found by audit, not by the change that broke them:

- **ClickPilot AI** sold "Your text never leaves your browser" twenty lines below
  its own notice saying the text is sent to OpenAI.
- **Volume Control PRO** was "100% free" after Audio Studio PRO shipped at €9.99.
- **EmailMagnet** advertises a free tier capped at 100 emails per export and a PRO
  that lifts the cap. Neither limit exists in the product.

**The rule: when you change what a product does, re-read that product's entries in
`src/data/site.ts` in the same change.** It takes five minutes and would have
caught all three.

Two places are easy to miss and belong in the same pass:

- `src/lib/schema.ts` — feature and price claims here go into JSON-LD, so they are
  declared to Google rather than merely written on a page.
- `src/lib/site.test.ts` — asserts on specific claim strings, so changing copy
  without it fails the suite.

Do not publish a claim before the feature is live on the store. If the copy has to
land first, say what is true today. The privacy policy's analytics opt-out
paragraph was deliberately held back for exactly this reason until the extension
version shipping the checkbox was live.

# Localisation: English at the root, Italian under /it

The site is bilingual. Read this before adding a page, a link, or a line of copy.

**A page exists in Italian if and only if it has a row in `src/i18n/slugs.ts`.** That map
drives the proxy, `createMetadata` (hreflang), the sitemap, the language switcher and
`localizedHref`, so they can never disagree. Adding a row publishes the page in Italian:
in the same commit, move its directory out of `src/app/[lang]/(en-only)/` and give it an
Italian copy module. Pages left in `(en-only)` are a 404 under `/it` by construction.

- **English is the form of truth.** Each Italian copy module is typed from the English one
  (`src/copy/en/*` exports `typeof`), so a missing or extra key fails `tsc`.
- **Claims are identical in every language** (see the product-claims rule above and
  CONTEXT.md, "Claim"). Italian may change the *argument* only on the consulting funnel
  (home, contact, "Working with us" FAQ); everywhere else it is a faithful translation.
- **Italian copy is never pushed without the owner's read.**
- **Legal pages:** the English version prevails and the Italian pages carry a "pending legal
  review" notice. Every change to `src/copy/en/legal/*.tsx` must be mirrored in
  `src/copy/it/legal/*.tsx` in the same commit.
- **Shared chrome** gets its strings from `useCopy()` (client) or `getCopy(lang)` (server).
  `src/copy/index.ts` is `server-only`: never import copy modules into a client component.
- **Links in shared components use `LocaleLink`.** A link to an English-only page stays in
  English, label included, so the label always matches the page the reader lands on.
- **Never translated:** product names, store names, testimonials (quote them verbatim in
  English, caption in Italian), framework acronyms.
- **Italian prose in JSX** uses the typographic apostrophe `’` (a plain `'` trips
  `react/no-unescaped-entities`). No em dash in either language.

Verify with `npm run check:i18n` (local dev server) or
`npm run check:i18n -- https://www.dentokudev.com` after a deploy.
