# EU AI Act audit — dentokudev.com and the AI products

_Audit run 3 August 2026, the day after Regulation (EU) 2024/1689 became generally applicable
(2 August 2026). Scope: the website, the legal pages, and the AI-related product claims._

**What this document is and is not.** This is a technical and editorial audit against the
transparency obligations in Article 50, carried out by reading the codebase and the published
pages. It is not legal advice. Two findings below (F3 and F4) turn on legal classification
questions that a lawyer should confirm, and one of them depends on technical standards that were
still being finalised by the Commission during 2026.

**Starting point:** the site is not starting from zero. Commit `ebc39a3`
(`feat(compliance): EU AI Act Art. 50 transparency for the AI chatbot & products`) already added a
chatbot disclosure component, a privacy-policy section on AI transparency, and a transparency
notice on the ClickPilot AI page. This audit checks that work against the obligations now in force
and looks for what it missed.

---

## The obligations that actually bite here

From Article 50, in the version now applicable:

- **50(1)** — providers of AI systems intended to interact directly with natural persons must
  ensure the person is informed they are interacting with an AI, "unless this is obvious" to a
  reasonably well-informed person. → **the support chatbot.**
- **50(2)** — providers of AI systems generating synthetic audio, image, video or text must mark
  outputs in a machine-readable format, detectable as artificially generated or manipulated.
  **Exemption, verbatim:** "This obligation shall not apply to the extent the AI systems perform an
  assistive function for standard editing or do not substantially alter the input data provided by
  the deployer or the semantics thereof." → **ClickPilot AI.**
- **50(4)** — deployers must disclose deep fakes, and must disclose AI-generated text published to
  inform the public on matters of public interest, except where the content underwent human review
  or editorial control and someone holds editorial responsibility. → **the hero video and the
  blog.**

---

## Findings, most severe first

### F1 — A false privacy claim on the ClickPilot AI page (CRITICAL, and not an AI Act issue)

`src/app/clickpilot-ai/page.tsx`, trust badge at ~line 307:

> **Privacy First** / "Your text never leaves your browser"

Roughly twenty lines above it, on the same page, the transparency notice says the opposite:

> ClickPilot AI generates text using artificial intelligence (**via your own OpenAI key**). Outputs
> are machine-generated and may be inaccurate or biased.

If the extension calls OpenAI, the text leaves the browser by definition. Both statements cannot be
true. This is the most serious finding in the audit and it is not about the AI Act at all: it is a
false statement about data handling on a product page, which is a consumer-protection exposure and
a direct breach of this project's own truthfulness rule.

The intent was probably "your text never reaches Dentoku's servers", which may well be accurate and
is a genuinely good selling point. It has to be said in words that are true.

**Blocking question:** does the extension call the OpenAI API directly from the browser, or does it
route through a Dentoku backend? The correct wording depends on the answer.

### F2 — The chatbot AI disclosure can be dismissed permanently (HIGH, Art. 50(1))

`src/components/analytics/chatbot-disclosure.tsx` renders the required notice:

> Our support chat is an AI assistant. Replies are automated and may be inaccurate. For anything
> important, email support@dentokudev.com.

Three properties weaken it:

1. **Dismissal is permanent.** `localStorage` key `chatbot-ai-notice-dismissed` means the notice
   appears once per browser, ever. On every later visit the user sees the chat launcher with no AI
   labelling originating from this codebase.
2. **It appears 1.5 seconds after mount**, so it is not present at the very first moment of
   exposure.
3. **The launcher itself carries no label from this repo.** `chatbase-widget.tsx` returns `null`;
   the bubble, any teaser text and the opening message are all rendered by the remote Chatbase
   embed and cannot be audited from here.

Article 50(1) requires the person to be informed at the time of first interaction. A notice that is
gone forever after one dismissal does not reliably do that for a returning visitor.

**The durable fix is in the Chatbase dashboard, not in this repo:** set the bot's opening message so
it states it is an AI assistant. That message is present at the moment of interaction, every time,
for every user.

**Resolved the same day.** The opening message was set, and it renders both as the launcher teaser
and as the first message inside the chat. The site-rendered notice was then removed: with the
Chatbase text in place the two said the same thing and overlapped visually, and the in-chat message
is the stronger of the two because it cannot be dismissed and always appears at the point of
interaction. `chatbot-disclosure.tsx` no longer exists; the rationale is recorded as a comment in
`analytics-gate.tsx` so nobody re-adds it without knowing why it went.

### F3 — Machine-readable marking of ClickPilot AI outputs is unresolved (HIGH, Art. 50(2))

ClickPilot AI performs, per its own feature list: fix grammar and clarity, **rewrite in different
tones and styles**, **summarize**, **translate**, and run custom AI shortcuts.

Applying the exemption quoted above:

- "Fix grammar and clarity" plausibly is "an assistive function for standard editing" and does not
  substantially alter semantics. Likely exempt.
- **Rewrite, summarize and translate do substantially alter the input data or its semantics.**
  These plausibly fall inside the marking obligation.

Two things make this hard rather than simply a to-do:

1. Whether Dentoku is a "provider" of an AI system here, given the extension calls a third-party
   model with the user's own key (BYOK), is a classification question for a lawyer.
2. Machine-readable marking of **text** is the least settled part of Article 50 in practice, and
   the Commission's implementing guidance and code of practice on marking were still in preparation
   during 2026. There is no obvious drop-in technical solution for text inserted into arbitrary web
   forms.

**Recommendation:** do not improvise a technical marking scheme. Get the classification question
answered, then follow whatever standard emerges. In the meantime the user-facing transparency
notice already on the page is the right mitigation and should stay.

### F4 — Terms of Service say nothing about AI at all (MEDIUM)

`src/app/terms/page.tsx` contains no AI content whatsoever:

- Section 1 "Services" defines only "Software products: currently EmailMagnet" and consulting.
  **ClickPilot AI is not defined as a service anywhere in the Terms.** It appears once, as a
  payment-processor reference.
- No clause on the accuracy of AI output, no allocation of responsibility for generated text, no
  mention that a third-party model provider is involved, no clause on the user's own API key and
  their separate relationship with OpenAI.
- The warranty and liability sections are generic "provided as is" boilerplate.

Selling an AI writing product with terms that never mention AI is the largest documentation gap
found. This is contract drafting and should be done with a lawyer, not improvised in a commit.

### F5 — The privacy policy has no ClickPilot AI section and never names OpenAI (MEDIUM)

Section 11 covers the EmailMagnet extension in detail. There is no equivalent for ClickPilot AI,
and OpenAI appears nowhere in the policy, neither as a sub-processor nor as a recipient. Whatever
the correct controller/processor analysis is for BYOK, the data flow should be described, since the
user's text is sent to a third party in the United States.

### F6 — The cookie banner never mentions that Analytics consent loads the AI chat (LOW)

`analytics-gate.tsx` binds `ChatbaseWidget` and `ChatbotDisclosure` to the **analytics** consent
category. The banner's Analytics description reads only "Google Analytics and privacy-friendly
usage metrics that help us improve the site." Accepting analytics is what loads a US-hosted AI chat
that processes whatever the user types. That coupling is disclosed in the cookie policy and the
privacy policy, but not at the point of consent. This is a GDPR specificity point more than an AI
Act one.

Minor related gap: the cookies page prose says Chatbase "may store local data in your browser", but
the storage table lists only `_ga` and `_ga_*`, with no Chatbase entry, key or duration.

### F7 — AI literacy obligation (Art. 4) (LOW, verify)

Article 4 requires providers and deployers to ensure a sufficient level of AI literacy among staff
dealing with the operation and use of AI systems. For a sole trader this is light, but it is not
zero, and it has applied since well before the August 2026 milestone. Worth confirming what, if
any, record-keeping is expected at this size.

---

## Checked and found compliant, no action needed

Recording these explicitly so no effort is wasted on them.

- **The fal.ai imagery in the hero video is not a deep fake.** `scripts/generate-hero-assets.mjs`
  generates only soft-focus abstract backdrops and geometry, with the negative prompt "no readable
  text, no letters, no words, no logos, no watermarks, **no people**". Nothing depicts a real
  person, object, place or event, so it does not meet the deep-fake definition in Article 50(4).
  The project rule that a model must never render product UI is doing real work here: every
  foreground element in that video is a genuine screen recording or a real asset.
- **The blog does not trigger the Article 50(4) text obligation.** No post is AI-generated, and in
  any case the posts have human review and editorial responsibility, which is the exemption.
- **Chatbot consent gating is sound.** Nothing loads before an explicit consent choice; the widget
  is strictly opt-in under the analytics category, and the script itself is deferred until first
  interaction.
- **The privacy policy already carries an Article 50 disclosure** and correctly states that no
  automated decision with legal or similarly significant effects is made (Art. 22 GDPR).

---

## What to do, in order

| # | Action | Owner | Status |
|---|---|---|---|
| 1 | Fix the "Your text never leaves your browser" badge | Dev | **Done 3 Aug 2026.** Data flow confirmed as browser to OpenAI directly, no Dentoku server. Badge now reads "Your text goes to your own OpenAI account, never to our servers." |
| 2 | Set the AI disclosure as the Chatbase bot's opening message | You, in the Chatbase dashboard | **Done 3 Aug 2026.** This is now the primary Art. 50(1) disclosure: it shows as the launcher teaser and as the first message in the chat, so it is present at the moment of interaction on every visit and cannot be dismissed permanently. |
| 3 | Stop the on-site chatbot notice dismissing forever | Dev | **Superseded 3 Aug 2026.** The site-rendered notice was first moved to `sessionStorage`, then removed entirely once item 2 landed: it duplicated the Chatbase text and the two overlapped on screen. One disclosure at the point of interaction is both cleaner and stronger than two competing ones. |
| 4 | Add an AI clause set to the Terms of Service | Lawyer | **Open.** Largest documentation gap. ClickPilot AI is still not a defined service in the Terms. |
| 5 | Add a ClickPilot AI / OpenAI section to the privacy policy | Dev + lawyer review | **Drafted 3 Aug 2026** as § 12. States that text goes from the browser straight to OpenAI under the user's own account and agreement, never through our servers, so OpenAI is **not** our processor for that flow. Worth a legal read. |
| 6 | Name the AI chat in the cookie banner's Analytics description | Dev | **Done 3 Aug 2026.** |
| 7 | Resolve the Art. 50(2) marking classification for ClickPilot | Lawyer | **Open.** See F3; do not improvise a marking scheme. |

**As of 3 August 2026 every Article 50(1) item is closed.** What remains is item 4 (Terms of Service
review) and item 7 (the Art. 50(2) marking classification), both of which need a lawyer and neither
of which is an obstacle to operating in the meantime. See `docs/ai-act-art50-assessment.md` for the
reasoning held on file for item 7.
