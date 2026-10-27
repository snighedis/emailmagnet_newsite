import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import {
  FaqTiles,
  FeatureList,
  PageOpening,
  PlanPanels,
  RelatedLinks,
  ShortAnswer,
  SideSection,
  Steps,
  type Plan,
} from "@/components/marketing/editorial";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
import { productPortfolio, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildProductSoftwareSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "ClickPilot AI Chrome Writing Assistant",
  description:
    "ClickPilot AI is a Dentoku Dev Chrome extension that improves writing in-browser with fix, rewrite, summarize, translate, and custom shortcut actions.",
  path: "/clickpilot-ai",
});

const storeUrl = "https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb";
const proUrl = "https://dentoku.gumroad.com/l/clickpilotAI";

const clickPilotProduct = productPortfolio.find((product) => product.href === "/clickpilot-ai");

const oldWay = [
  "Write in Gmail or LinkedIn",
  "Select and copy the text",
  "Open ChatGPT in a new tab",
  "Paste it and ask for help",
  "Wait for the answer",
  "Copy the result",
  "Switch back to the first tab",
  "Paste it and fix the formatting",
];

const newWay = [
  "Write in Gmail or LinkedIn",
  "Select the text",
  "Right-click and open ClickPilot AI",
  "Choose fix, rewrite, summarize or translate",
];

const features = [
  { title: "Fix grammar and clarity", description: "Improve what you wrote without leaving the text field." },
  { title: "Rewrite in another tone", description: "Turn a message into the right tone for the person reading it." },
  { title: "Summarize long text", description: "Get the short version of a long passage you have selected." },
  { title: "Translate", description: "Translate the selected text in place." },
  { title: "Your own shortcuts", description: "Save your own prompts for the tasks you repeat. Part of PRO." },
];

const places = [
  { name: "Gmail", description: "Emails" },
  { name: "LinkedIn", description: "Posts and messages" },
  { name: "X", description: "Posts and replies" },
  { name: "Notion", description: "Notes and documents" },
  { name: "Most websites", description: "Any text field" },
];

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    cadence: "for good",
    description: "The core writing actions, to try ClickPilot AI on your own text first.",
    features: [
      "Fix, rewrite, summarize and translate.",
      "Works on most websites with text fields.",
      "Runs on your own OpenAI API key.",
    ],
    action: { label: "Add to Chrome", href: storeUrl },
  },
  {
    name: "PRO",
    price: "$19",
    cadence: "once",
    description: "One payment for every PRO feature, for life.",
    features: [
      "Lifetime PRO licence.",
      "Every PRO feature.",
      "Unlimited use on the extension side.",
      "Custom AI shortcuts.",
      "No monthly subscription.",
    ],
    action: { label: "Get lifetime PRO", href: proUrl },
    featured: true,
  },
];

const activation = [
  { title: "Buy on Gumroad", description: "The ClickPilot AI lifetime licence costs $19, paid once." },
  { title: "Get the key by email", description: "Gumroad sends your licence key to the address you used." },
  { title: "Paste it in ClickPilot AI", description: "Open the extension, enter the key, and the PRO features switch on." },
];

const faqs = [
  {
    question: "Do I need my own OpenAI API key?",
    answer:
      "Yes. ClickPilot AI uses your own OpenAI API key (bring your own key). API usage costs are separate and paid directly to OpenAI.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT means switching tabs and copying text back and forth. ClickPilot AI works inside the sites you write in, such as Gmail, LinkedIn and X, and PRO adds custom shortcuts for repeated tasks.",
  },
  {
    question: "Does it work on all websites?",
    answer:
      "It works on Gmail, LinkedIn, X, Notion and most websites with text fields. Some platforms, such as Google Docs, may have limited support.",
  },
  {
    question: "What's included in the $19 lifetime license?",
    answer:
      "A lifetime PRO license with every PRO feature, unlimited usage on the extension side, custom AI shortcuts, and no monthly subscription.",
  },
  {
    question: "How do I activate the PRO features?",
    answer:
      "After buying on Gumroad you receive a license key by email. Paste the key in ClickPilot AI to switch on the PRO features.",
  },
];

const related = [
  { label: "Dentoku Dev product overview", href: "/overview" },
  { label: "Product and support FAQ", href: "/faq" },
  { label: "Browser productivity articles", href: "/blog" },
  { label: "Contact Dentoku Dev support", href: "/contact" },
];

/**
 * ClickPilot AI (redesign: product pages in the homepage's system). The store
 * picture under the title with the AI notice, the old way against the new, what
 * it does and where, the plans, activation on the orange, the questions, then
 * the other products and the proposal.
 */
export default function ClickPilotAiPage() {
  const { products } = getCopy("en").site;
  const { home } = getPageCopy("en");

  return (
    <>
      {clickPilotProduct ? (
        <JsonLd
          data={buildProductSoftwareSchema(
            clickPilotProduct,
            {
              "@type": "AggregateOffer",
              lowPrice: 0,
              highPrice: 19,
              priceCurrency: "USD",
              offerCount: 2,
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/clickpilot-ai`,
            },
            [storeUrl, proUrl],
          )}
        />
      ) : null}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "ClickPilot AI", href: "/clickpilot-ai" },
        ])}
      />
      <HomeReveal />

      <PageOpening
        title={["Write better", "where you type."]}
        standfirst="ClickPilot AI is a Chrome extension that fixes, rewrites, summarizes and translates the text you select, inside Gmail, LinkedIn and most websites. No copying into another tab."
        primary={{ label: "Add to Chrome, free", href: storeUrl }}
        secondary={{ label: "Lifetime PRO, $19", href: "#plans" }}
        picture={{
          src: "/brand/clickpilot-ai-showcase.png",
          alt: "Text selected in a Gmail window with ClickPilot AI's actions below it: Fix Grammar, Translate, Explain easy",
          width: 1280,
          height: 800,
        }}
        facts={[
          { term: "Free to start", detail: "Fix, rewrite, summarize and translate." },
          { term: "PRO, $19 once", detail: "Custom AI shortcuts, no subscription." },
          { term: "Your own key", detail: "Runs on your OpenAI API key. Usage is billed by OpenAI." },
        ]}
        note={
          <p>
            <strong className="font-semibold">AI transparency:</strong> ClickPilot AI generates text with
            artificial intelligence, through your own OpenAI key. Outputs are machine-generated and may be
            inaccurate or biased. Review and edit them before you send or publish.
          </p>
        }
      />

      <ShortAnswer
        title="In short"
        body="Select the text, right-click, choose what to do. It all happens on the page you are writing on, with no second tab and no copying back and forth."
        aside={{
          title: "What it is not",
          body: "A document editor or a content manager. It improves the text in fields you are already writing in and hands control straight back to you.",
        }}
      />

      <SideSection
        title="Four steps instead of eight"
        lead="The same task, done the usual way and with ClickPilot AI."
      >
        <div className="grid gap-2 md:grid-cols-2">
          <div className="bg-surface-muted text-ink p-6 md:p-8">
            <h3 className="t-lead font-semibold">Without ClickPilot AI</h3>
            <ol className="t-body mt-5 list-decimal space-y-2 pl-5">
              {oldWay.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="bg-brand text-ink p-6 md:p-8">
            <h3 className="t-lead font-semibold">With ClickPilot AI</h3>
            <ol className="t-body mt-5 list-decimal space-y-2 pl-5 font-medium">
              {newWay.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </SideSection>

      <SideSection
        tone="muted"
        title="What it does, and where"
        lead="One click on the text you have selected."
        aside={
          <p className="t-body text-ink max-w-[40ch]">
            Some platforms, such as Google Docs, may have limited support.
          </p>
        }
      >
        <FeatureList items={features} />
        <h3 className="t-lead text-ink mt-16 font-semibold">Where it works</h3>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {places.map((place) => (
            <li key={place.name} className="bg-background text-ink p-5">
              <span className="t-3 block">{place.name}</span>
              <span className="t-body mt-1 block">{place.description}</span>
            </li>
          ))}
        </ul>
      </SideSection>

      <SideSection
        id="plans"
        title="Free to start, $19 for life"
        lead="Both plans run on your own OpenAI API key. API usage is paid to OpenAI and is not part of the licence."
      >
        <PlanPanels plans={plans} />
      </SideSection>

      <Steps
        title="How activation works"
        lead="You need Chrome, the extension from the Chrome Web Store and your own OpenAI API key."
        steps={activation}
      />

      <SideSection
        id="faq"
        title="ClickPilot AI questions"
        aside={<RelatedLinks title="Related pages" ariaLabel="ClickPilot AI related Dentoku Dev pages" links={related} />}
      >
        <FaqTiles items={faqs} />
      </SideSection>

      <ProductShowcase
        products={products}
        lang="en"
        title="More from the studio"
        caption="We build, publish and maintain our products ourselves."
        overviewLink={home.products.overviewLink}
        exclude="/clickpilot-ai"
        limit={2}
      />

      <ProposalClose closing={home.closing} actionHref="/#brief" />
    </>
  );
}
