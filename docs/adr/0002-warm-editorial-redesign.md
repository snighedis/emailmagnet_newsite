# 2. Warm editorial redesign, with the brief as the homepage opening

Date: 2026-10-14

## Status

Accepted (to be built on a branch and reviewed on a Vercel preview before merging)

## Context

The owner wants a full redesign that fits the Italian market (small Italian businesses, see
CONTEXT.md "Positioning"). Award-winning agency sites (Awwwards, "Design Agencies") were
reviewed on 14 October 2026. Most rely on WebGL, custom cursors and experimental navigation:
to a small-business owner that reads as the expensive agency the studio positions against,
and it costs speed and SEO. Three references carry something that fits, studied for their
grammar only (no copy, assets, fonts or layouts are reused):

- **Neutomni**: one solid colour on a warm white, hierarchy by size, monospace section
  labels with numbers, one italic word for emphasis, the process in numbered steps.
- **Hart Studio**: a real, warm workspace instead of 3D renders; the place stated in the
  main heading; clients named by kind of business.
- **New Minds**: the project brief as the primary call to action.

## Decision

- **Scope:** one new visual system on every page, in both languages. The Italian argument
  still changes only on the consulting funnel (AGENTS.md); product pages, blog and docs keep
  their global argument and get the new look.
- **The brief opens the homepage** (EN and IT), right under the heading: the visitor's own
  baseline of what one repetitive task costs today (CONTEXT.md "Brief"). On the English home
  the business options are adapted to that market.
- **Type:** Newsreader for headings, Inter for text, monospace for labels and numbers.
  Hierarchy comes from size more than weight.
- **Colour:** one accent only, orange `#f05423`, for the symbol, accents and buttons, on a
  warm off-white ground. Navy is ink (text, one dark section), not a second brand colour.
- **Wordmark:** "DENTOKU DEV" in Fira Sans Condensed capitals, with the symbol in orange.
  The social card and every other use align to it.
- **Images:** real photos of the founder and the work, plus real product screenshots. Until
  the shoot happens the redesign ships with the current 29-second hero film.
- **Delivery:** built on a branch, reviewed as a whole on a Vercel preview URL, merged to
  `main` in one go. `main` stays releasable for fixes meanwhile.

## Consequences

- The `--brand` and `--brand-cta` tokens collapse to one orange; contrast for white text on
  it must be rechecked (WCAG 1.4.3).
- The closing CTA band and the gradient/tinted section variants leave the homepage.
- A photo shoot becomes a dependency for the final look, not for the launch.
