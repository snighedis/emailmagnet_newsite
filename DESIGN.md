# DESIGN.md

The visual system decided in `docs/adr/0002-warm-editorial-redesign.md`. Tokens live in
`src/app/globals.css`; this file says what they mean and how to use them.

## Mood

Warm editorial. A software studio in Milan that talks to small-business owners: calm,
legible, one colour, real photographs. Nothing that reads as "agency": no WebGL, no
custom cursors, no decorative motion.

## Colour

- **One orange, `#f05423` (`--brand`).** It is a field under ink text (buttons), display
  text from 24px up (the hero accent, the brief's number), icons, rules, the focus ring
  and the label colour on ink sections. It is never small text and never
  sits behind white text: white on it is 3.50:1, it on the ground 3.34:1, it on ink 4.68:1.
  Hover states derive from it (`--brand-cta-hover`), they are not a second orange.
- **Ink, `--ink` (navy ≈ #11212f).** Text, headings, the one dark section per page,
  secondary buttons. `--ink-soft` lifts it for labels and links (`--eyebrow`).
- **Ground.** `--background` and `--surface-soft` are warm whites; `--surface-muted` is
  the single alternation tint for long pages; `--brand-soft` is the orange at 4% for
  highlighted boxes. Cards are white on the ground.
- **Greys are warm.** Utilities use the `stone` scale; `--muted-foreground` is warm.
  No `slate`, no teal: the old second accent maps to the orange.

## Type

- **Newsreader** for headings at weight 500, hierarchy by size: `.type-display`,
  `.type-h1`, `.type-h2`, `.type-h3`.
- **Inter** for text: `.type-lead` for introductions, 16px/1.7 for reading.
- **Mono** (`.type-label`) for section labels with numbers ("01", "02"), formulas and
  small data. The orange in a label is a hairline rule, not the text.
- **Logo:** the original two-layer symbol in its greys (#999 behind, #4d4d4d in front),
  never orange, beside DENTOKU DEV in Fira Sans Condensed SemiBold capitals. Both live in
  `src/components/brand/logo.tsx`: the symbol as the original PNG (no redrawn vector, it
  distorts the shape), the wordmark as outlines so no web font is loaded for it.

## Components

- `Button`: default is an orange field with an ink label; `secondary` is ink with white;
  `outline` and `ghost` are ink on the ground; `link` is ink underlined in orange.
- `Section`: `default`/`soft` (ground), `muted` (alternation), `ink` (dark). The older
  `blue`, `mint` and `gradient` names map onto these.
- `Eyebrow index="01"`: numbered section label with the orange rule.
- Cards: white, 1px warm border, `rounded-2xl`, no heavy shadows.
- Press feedback on every control (`active:scale-[0.97]`); reduced motion keeps only
  cross-fades.

## Layout & motion

- Sections on the ground are separated by a hairline, not by colour changes.
- Motion only where content would otherwise jump: accordions, the cookie banner, the
  tab pill, the brief's result. Under 300ms, the site curve `cubic-bezier(0.16, 1, 0.3, 1)`.
