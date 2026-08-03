# Reasoned assessment — Article 50(2) marking obligation and ClickPilot AI

_Internal record. Drafted 3 August 2026. Author: Dentoku Dev. Status: **provisional, pending legal
review.** Not legal advice._

**Why this document exists.** Article 50(2) of Regulation (EU) 2024/1689 requires providers of AI
systems that generate synthetic text to mark outputs in a machine-readable format. Whether and how
far it applies to ClickPilot AI is not obvious, and the technical standards for marking text were
not settled when the obligation became applicable on 2 August 2026. This record sets out the
analysis made in good faith, the position taken in the meantime, and what will trigger a change.
Keeping a dated record of the reasoning is itself the point: it evidences that the question was
considered rather than ignored.

---

## 1. The obligation, verbatim

Article 50(2) requires that outputs of AI systems generating synthetic audio, image, video or text
be "marked in a machine-readable format and detectable as artificially generated or manipulated".

The exemption, verbatim:

> This obligation shall not apply to the extent the AI systems perform an assistive function for
> standard editing or do not substantially alter the input data provided by the deployer or the
> semantics thereof.

Two things about the wording matter. It says "**to the extent**", so the analysis is per function,
not all-or-nothing for the product. And it offers two independent escapes: assistive standard
editing, **or** no substantial alteration of the input or its semantics.

## 2. Function-by-function analysis

| ClickPilot AI function | Assessment | Confidence |
|---|---|---|
| **Fix grammar and clarity** | Assistive function for standard editing. The user's own words and meaning are preserved; the system corrects them. Squarely inside the exemption. | High |
| **Translate** | Translation is designed to preserve semantics and change only the language. Strong argument that it "does not substantially alter ... the semantics thereof". | Medium |
| **Summarize** | Input is the user's own source text, and the output is a reduction of it rather than new content. Weaker than translation, because condensing does alter what is conveyed. | Low to medium |
| **Rewrite in a different tone or style** | Produces new formulations that the user did not write. Hardest to fit in the exemption. | Assume **not** exempt |
| **Custom AI shortcuts** | Depends entirely on what the user's prompt does. Can be anything from a fix to open-ended generation. Cannot be assumed exempt. | Assume **not** exempt |

**Working conclusion:** the obligation plausibly reaches at least the rewrite and custom-shortcut
functions. We do not rely on the exemption covering the whole product.

## 3. The provider question

Article 3(3) defines a provider as a party that develops an AI system and places it on the market
under its own name or trademark. Dentoku Dev develops ClickPilot AI and publishes it on the Chrome
Web Store under its own name, so the provider role is likely ours, even though the underlying model
belongs to OpenAI, which carries the separate obligations of a general-purpose AI model provider.

We are not treating the BYOK architecture as a way out of the provider role. The user supplying the
API key changes who pays OpenAI and who the data controller is for the text, not who placed the
system on the market.

## 4. Why no technical marking is implemented today

This is a capability limit, not a decision to ignore the obligation.

1. **There is no viable place to put a mark.** ClickPilot AI writes plain text into arbitrary web
   form fields belonging to third parties: a Gmail compose box, a LinkedIn message, an X post.
   Plain text inserted into someone else's input field cannot carry metadata, a manifest, or a
   provenance header. Any watermarking that survives is either invisible character insertion, which
   corrupts the user's text and is trivially stripped, or a visible label appended to the output,
   which is not what "machine-readable" means and would make the product unusable.
2. **The standard did not exist.** Harmonised standards and the Commission's code of practice on
   marking and detection of AI-generated content were still in preparation during 2026. Inventing a
   proprietary scheme now would risk being both ineffective and incompatible with whatever is
   adopted.
3. **Proportionality and SME provisions.** The Regulation provides simplified arrangements for small
   and medium enterprises. Dentoku Dev is a sole trader.

## 5. Position taken in the meantime

We do not claim the marking obligation is satisfied. We claim that the obligation cannot currently
be met by any available technical means for this class of output, and that we have instead
maximised the transparency that **is** achievable:

- The product page states plainly, above the fold, that ClickPilot AI generates text with
  artificial intelligence, that output is machine-generated and may be inaccurate or biased, and
  that the user should review and edit before sending or publishing.
- The privacy policy carries an equivalent statement in the ClickPilot AI section.
- The Terms of Service allocate responsibility for reviewing output to the user and disclaim
  warranties on generated text.
- The user is always the one who decides to send or publish. Every output passes through a human
  before it reaches anyone else, which is the practical substance of what the marking rule is
  meant to protect against.

On Article 50(4), the deployer-side duty for text published to inform the public on matters of
public interest, the typical ClickPilot use is private correspondence rather than public-interest
publication, and where a user does publish, the human review and editorial responsibility exemption
would normally apply to them, not to us.

## 6. What changes this position

Review this document when any of the following happens, and at the latest at the next annual
review:

- The Commission publishes the code of practice or guidance on marking and detecting
  AI-generated content.
- A harmonised standard for text provenance becomes available and implementable in a browser
  extension.
- OpenAI or another upstream provider exposes a usable provenance signal we can pass through.
- A national market surveillance authority issues guidance addressed to systems of this kind.
- ClickPilot AI's feature set changes so that it generates content from scratch rather than
  transforming text the user supplies.

## 7. Open items for legal review

Take these to a lawyer when one is available. This is a review brief, not a blank sheet.

1. Confirm the provider classification in Section 3, and whether Article 25 changes it.
2. Confirm the per-function analysis in Section 2, especially translate and summarize.
3. Confirm whether the position in Section 5 is defensible as an interim measure, and whether
   anything further should be documented.
4. Review the AI clauses added to the Terms of Service, and decide whether the express 90-day
   warranty in Section 10 of the Terms, currently written for EmailMagnet only, should be extended
   to the other products or deliberately left product-specific.
