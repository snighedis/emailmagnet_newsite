# 1. No self-hosted aggregateRating / review schema

Date: 2026-07-10

## Status

Accepted

## Context

The product pages display genuine 5.0-star testimonials (verbatim Chrome Web Store
reviews, in `src/data/site.ts`). Adding `aggregateRating` or `review` schema to the
`SoftwareApplication` markup would make star ratings eligible to appear as a rich
result in Google Search, which lifts click-through rate.

However, Google's structured-data guidelines state that review snippets should not be
sourced from a business writing/collecting reviews about itself and displaying them on
its own site ("self-serving reviews"). Marking those up as `aggregateRating` on our own
domain risks the ratings being ignored, and in the worst case a manual action against
the site. The authoritative, third-party rating for each extension already lives on the
Chrome Web Store, which surfaces stars directly in its own search results.

## Decision

We do **not** emit `aggregateRating` or `review` schema built from on-site testimonials on
any product page. Product pages carry `SoftwareApplication` schema with `offers` only (the
rich-result requirement is satisfied by `offers`). The star rating stays on the Chrome Web
Store listing, which is its legitimate source.

## Consequences

- No star rich snippet on our own product pages. We accept the lost CTR to stay inside
  Google's guidelines and avoid manual-action risk.
- The `offers` / `AggregateOffer` on each product's `SoftwareApplication` remains the field
  that keeps the rich result valid (`src/lib/schema.ts`: `buildSoftwareSchema`,
  `buildProductSoftwareSchema`).
- If we later want star snippets, the compliant path is third-party review platforms that
  provide their own markup, not self-hosted testimonials. Revisit only with that in place.
