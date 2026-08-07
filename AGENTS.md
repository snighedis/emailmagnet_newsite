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
