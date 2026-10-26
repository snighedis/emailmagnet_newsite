# DESIGN.md

The visual system decided in `docs/adr/0002-warm-editorial-redesign.md`, as amended on
26 October 2026: the owner adopted every house rule of the tasteskill design skill
(`design-taste-frontend`). Tokens live in `src/app/globals.css`; this file says what they
mean and how to use them. The homepage, the header, the footer, the cookie banner and the
buttons follow it; the other templates move over as their tickets are done.

## Mood

An edited report, not an agency site. A software studio in Milan that talks to
small-business owners: one column line, large type, whole pages of flat colour, real
pictures of the products. The idea of the homepage: the hours repetitive work costs each
month become the report's headline figure (the brief), counted again after release.

## House rules (checked by the skill's inspector)

Headlines on two lines or fewer at every width, with one `h1` that says what the page is.
No eyebrow labels above headings, no monospace outside code, no 01/02/03 numbering, no thin
rules or 1px outlined boxes (except form fields, tables and `data-ui` interface pieces), no
gradients (a neutral scrim over a photo is the one exception), no shadows on things at
rest (overlays may float), no glass, no tiny uppercase labels, no rows of icon cards, no
styled accent word inside a headline, two typefaces at most, nothing under 13px.

## Colour

- **One orange, `#f05423` (`--brand`).** A field under ink text (buttons, and a whole
  section page such as "How we work"), never small text, never behind white text: white on
  it is 3.50:1, ink on it 4.68:1. Hover lightens it (`--brand-cta-hover`).
- **Ink, `--ink` (navy ≈ #11212f).** Text in full ink for everything people read; the close
  and the footer are one ink field.
- **Ground.** `--background` is a stone white (#fbfbfa), below the inspector's cream
  threshold; `--surface-muted` (#f1f1ef) is the one tone step, used as a filled surface
  (the brief, the guides), never as a line.

## Type

- **Newsreader** 500 for headings, **Inter** for text. Five steps on a page:
  `.t-display` (clamp 42-96px), `.t-2` (30-62px), `.t-3` (24-36px, also statement size),
  `.t-lead` (20px, 18 on a phone), `.t-body` (16px/1.6); 14px for small notes.
- Headlines that matter are authored as two lines and rise line by line (`.lines`).
- **Logo:** the original two-layer symbol in its greys (#999 behind, #4d4d4d in front),
  never orange, beside DENTOKU DEV in Fira Sans Condensed SemiBold capitals. Both live in
  `src/components/brand/logo.tsx`: the symbol as the original PNG (no redrawn vector, it
  distorts the shape), the wordmark as outlines so no web font is loaded for it.

## Layout

- One pair of margins (`.page-x`, `--margin`, 20-48px) for header, content and footer.
- Header: wordmark, plain text links (`.text-link.link-quiet`: underlined only on hover or
  when a menu is open), the language as a link, one filled button. The menus are text only:
  products grouped by store (Chrome Web Store, Shopify App Store), name in Newsreader and one
  line on what it does, each group sized by how many products it holds and adding columns as
  it grows, then "See all products"; resources in columns that fill the width. On a phone the menu fills the screen: one size
  of link in the bar's order, sections separated by space, the action pinned at the bottom.
- The column line (`.axis`) at 42% of the viewport: headings and body start on it, the zone
  to its left holds a standfirst or a side note. Below 1024px it collapses to the margin.
- Sections are separated by space or a change of field colour, never by a rule.
- Square corners on buttons, brief choices and panels; one button shape everywhere.
- Pictures are shown whole: the film at its own 2:1 shape, product screenshots with
  `object-contain` on a filled field. Never crop an interface or a scene into a slice.
  The AI label sits bottom-right on the film, clear of the film's own logo at the top.
- Product pictures are 16:10 store-style images (EmailMagnet's current store image;
  Volume Control PRO's store popup on the same dark ground, one image per language). No
  third-party content (other creators' thumbnails) in any of them.
- The FAQ is an accordion of filled tiles (native `<details>`, one open at a time): closed
  tiles one tone step from the ground, the open one in the orange with ink text, a plus that
  turns into a minus. Every answer stays in the HTML.
- The close is the written proposal as a paper card on the ink field, tilted and cropped by
  the section's bottom edge; the crop only ever takes the card's bottom margin, never its
  button.

## Motion

- Tokens `--ease-out`, `--ease-expo`, `--ease-soft`. The headline rises line by line; the
  parts of each section enter once as they scroll in (`[data-reveal]`, `--d` for the
  stagger, `home-reveal.tsx`); press and hover on every control; the film is the moving
  picture. Everything hidden for a reveal is gated on `html.js` and on
  `prefers-reduced-motion: no-preference`, so nothing stays hidden without script.
