import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import {
  FaqTiles,
  FeatureList,
  PageOpening,
  RelatedLinks,
  ShortAnswer,
  RowTable,
  SideSection,
  Steps,
} from "@/components/marketing/editorial";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
import { productPortfolio, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildProductSoftwareSchema } from "@/lib/schema";

const chromeStoreUrl =
  "https://chromewebstore.google.com/detail/volume-control-pro-600%-s/bjjpdehblihhfdfcoonadnnfmkblmogf";

export const metadata = createMetadata({
  title: "Volume Control PRO Chrome Booster",
  description:
    "Volume Control PRO is a Dentoku Dev Chrome extension for boosting tab audio up to 600%, with one-click amplification and per-site volume memory.",
  path: "/volume-control-pro",
});

const features = [
  {
    title: "Up to 600%",
    description: "Raise quiet browser audio well above Chrome's usual ceiling, for videos, music and calls.",
  },
  {
    title: "One slider",
    description: "Open the extension, move the slider and hear the difference at once. No settings pages.",
  },
  {
    title: "Remembered per site",
    description: "Saved site settings mean the next visit starts at the level you already chose.",
  },
  {
    title: "Steady on live pages",
    description: "Pages that update in real time keep their boosted audio smooth.",
  },
  {
    title: "A clean fallback",
    description: "If a site limits boosting, the extension steps aside instead of breaking playback.",
  },
  {
    title: "Seven languages",
    description: "English, German, Spanish, French, Italian, Japanese and Korean.",
  },
];

const useCases = [
  {
    useCase: "Quiet videos and tutorials",
    problem: "Speech recorded too low to follow comfortably.",
    fit: "Boost the active tab past 100% without touching the system volume.",
  },
  {
    useCase: "Online classes and webinars",
    problem: "Presenters and platforms at different levels.",
    fit: "Set the level once and adjust it live as the session changes.",
  },
  {
    useCase: "Podcasts and interviews",
    problem: "Several speakers mixed at different volumes.",
    fit: "Lift the low parts without re-encoding or downloading.",
  },
  {
    useCase: "Video calls and meetings",
    problem: "A colleague's microphone is too quiet.",
    fit: "Raise only the call's tab while the other tabs stay as they are.",
  },
  {
    useCase: "Streaming with uneven loudness",
    problem: "Volume jumps between episodes, ads and platforms.",
    fit: "Per-site memory keeps your level for each platform.",
  },
];

const steps = [
  { title: "Open the extension", description: "Click the Volume Control PRO icon in your Chrome toolbar." },
  { title: "Set your level", description: "Move the slider to the level you need, up to 600%." },
  { title: "Keep listening", description: "The audio changes at once, and the site keeps its level next time." },
];

const faqs = [
  {
    question: "What is Volume Control PRO?",
    answer:
      "Volume Control PRO is a Dentoku Dev Chrome extension for boosting tab audio, adjusting low-volume browser content, and remembering volume settings by site.",
  },
  {
    question: "What does 600% volume boost mean?",
    answer:
      "Chrome caps normal playback at 100% of the source volume. Volume Control PRO amplifies the active tab's audio up to six times that level, which is the limit described in the Chrome Web Store listing.",
  },
  {
    question: "Does it work on every website?",
    answer:
      "It works very well on YouTube and most HTML5 media sites. Some protected web players (for example, certain Spotify Web playback scenarios) may have limited boost support due to browser restrictions.",
  },
  {
    question: "Does it collect my data?",
    answer:
      "No. The Chrome Web Store disclosure states the developer does not collect or use your data. Nothing is sold to third parties or used for unrelated purposes.",
  },
  {
    question: "Is Volume Control PRO free?",
    answer:
      "Installing it is free, and volume boosting up to 600% with per-site memory stays free. There are no ads and no subscription. An optional Audio Studio PRO upgrade unlocks the advanced audio tools for a one-time payment.",
  },
  {
    question: "Who should use Volume Control PRO?",
    answer:
      "People who watch low-volume videos, attend browser-based calls, listen to webinars, or switch between sites with inconsistent audio levels.",
  },
];

const related = [
  { label: "Chrome volume booster 600% guide", href: "/volume-control-pro/chrome-volume-booster-600" },
  { label: "Chrome volume control extension", href: "/volume-control-pro/chrome-volume-control-extension" },
  { label: "Tab volume control for Chrome", href: "/volume-control-pro/tab-volume-control" },
  { label: "Dentoku Dev product overview", href: "/overview" },
  { label: "Browser productivity articles", href: "/blog" },
  { label: "Contact Dentoku Dev support", href: "/contact" },
];

const volumeControlProduct = productPortfolio.find((product) => product.href === "/volume-control-pro");

/**
 * Volume Control PRO (redesign: product pages in the homepage's system). The
 * store picture under the title, the short answer, what it does, where it
 * helps as a real table, the three steps on the orange, the questions, then the
 * other products and the proposal.
 */
export default function VolumeControlProPage() {
  const { products } = getCopy("en").site;
  const { home } = getPageCopy("en");

  return (
    <>
      {volumeControlProduct ? (
        <JsonLd
          data={buildProductSoftwareSchema(
            volumeControlProduct,
            {
              "@type": "Offer",
              price: 0,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/volume-control-pro`,
            },
            [chromeStoreUrl],
          )}
        />
      ) : null}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Volume Control PRO", href: "/volume-control-pro" },
        ])}
      />
      <HomeReveal />

      <PageOpening
        title={["Every tab,", "up to 600%."]}
        standfirst="Volume Control PRO is a Chrome extension that turns quiet tabs up past 100% and remembers the level for each site. Your system volume stays where it is."
        primary={{ label: "Add to Chrome, free", href: chromeStoreUrl }}
        secondary={{ label: "Questions and answers", href: "#faq" }}
        picture={{
          src: "/brand/volume-control-landscape-en.webp",
          alt: "Volume Control PRO's popup with the volume slider at 150%, beside the line Every tab, up to 600%",
          width: 1600,
          height: 1000,
        }}
        facts={[
          { term: "Free to install", detail: "Boosting and per-site memory stay free, with no ads and no subscription." },
          { term: "Remembered per site", detail: "The next visit starts at the level you already chose." },
          { term: "Your data stays yours", detail: "The store disclosure states the developer does not collect or use it." },
        ]}
      />

      <ShortAnswer
        title="In short"
        body="For the moment a video, a call or a class is too quiet: boost that one tab, past what Chrome allows, without touching the rest of the computer."
        aside={{
          title: "What it is not",
          body: "A system-wide equalizer or an audio recorder. It controls the volume of browser tabs only, not other applications or your operating system's master volume.",
        }}
      />

      <SideSection title="Small extension, full control" lead="Everything here comes from the Chrome Web Store listing.">
        <FeatureList items={features} />
      </SideSection>

      <SideSection
        tone="muted"
        title="Where it helps"
        lead="The everyday moments when browser audio is simply too quiet."
        aside={
          <p className="t-body text-ink max-w-[40ch]">
            Boosting works very well on YouTube and most HTML5 media sites. Some protected web players, such as
            certain Spotify Web playback, may limit it because of browser restrictions.
          </p>
        }
      >
        <RowTable
          caption="Where Volume Control PRO helps"
          columns={["When", "The problem", "What it does"]}
          rows={useCases.map((row) => [row.useCase, row.problem, row.fit] as const)}
          onMuted
        />
      </SideSection>

      <Steps title="Three steps to a louder tab" steps={steps} />

      <SideSection
        id="faq"
        title="Volume Control PRO questions"
        aside={<RelatedLinks title="Related pages" ariaLabel="Volume Control PRO related Dentoku Dev pages" links={related} />}
      >
        <FaqTiles items={faqs} />
      </SideSection>

      <ProductShowcase
        products={products}
        lang="en"
        title="More from the studio"
        caption="We build, publish and maintain our products ourselves."
        overviewLink={home.products.overviewLink}
        exclude="/volume-control-pro"
        limit={2}
      />

      <ProposalClose closing={home.closing} actionHref="/#brief" />
    </>
  );
}
