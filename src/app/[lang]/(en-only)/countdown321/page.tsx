import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import {
  FaqTiles,
  FeatureList,
  PageOpening,
  PlanPanels,
  RelatedLinks,
  ShortAnswer,
  RowTable,
  SideSection,
  type Plan,
} from "@/components/marketing/editorial";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
import { productPortfolio, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildProductSoftwareSchema } from "@/lib/schema";

const shopifyStoreUrl = "https://apps.shopify.com/countdown321";

export const metadata = createMetadata({
  title: "Countdown321 Shopify Countdown Timer App",
  description:
    "Countdown321 is a Dentoku Dev Shopify app for product, landing, and bar countdown timers with fixed-date, recurring, and evergreen modes.",
  path: "/countdown321",
});

const features = [
  {
    title: "On the product page",
    description: "A deadline right where the buying decision happens.",
  },
  {
    title: "On landing pages",
    description: "A clear countdown that frames the whole offer of a campaign or launch.",
  },
  {
    title: "In announcement bars",
    description: "Top or bottom bars, sticky if you like, keep the deadline in view while shoppers browse.",
  },
  {
    title: "Fixed, recurring, evergreen",
    description: "Count down to a launch, repeat daily deals on schedule, or run a timer per visitor.",
  },
  {
    title: "Styled like your theme",
    description: "Colour, font, background and position controls, including how it shows on mobile.",
  },
  {
    title: "No theme code",
    description: "Publishes through Theme App Extensions and App Embeds. Nothing in your theme to maintain.",
  },
];

const useCases = [
  {
    goal: "A flash sale",
    message: "The sale ends at a set date and time",
    why: "The deadline is visible at the moment of decision.",
  },
  {
    goal: "Daily deals",
    message: "A recurring timer that resets on schedule",
    why: "Repeat urgency without re-creating the campaign.",
  },
  {
    goal: "A product drop",
    message: "The product launches when the countdown ends",
    why: "Sets expectations before the stock is available.",
  },
  {
    goal: "A seasonal promotion",
    message: "A timed announcement bar across the store",
    why: "The campaign window stays visible on every page.",
  },
];

const plans: Plan[] = [
  { name: "Free", price: "$0", cadence: "for good", features: ["1 timer", "1,000 views a month", "Product page placement"] },
  { name: "Launch", price: "$4.99", cadence: "a month", features: ["Multiple timers", "10,000 views a month", "No branding"] },
  { name: "Grow", price: "$7.99", cadence: "a month", features: ["Unlimited timers", "50,000 views a month", "No branding"] },
  { name: "Scale", price: "$19.99", cadence: "a month", features: ["Unlimited timers", "Unlimited views", "No branding"] },
];

const faqs = [
  {
    question: "What is Countdown321?",
    answer:
      "Countdown321 is a Shopify app by Dentoku Dev for adding product, landing, and bar countdown timers to storefront campaigns: fixed-date, recurring, or evergreen.",
  },
  {
    question: "Where can timers appear?",
    answer:
      "On product pages, landing pages, and as top or bottom announcement bars, with sticky banner options and mobile display controls.",
  },
  {
    question: "What timer modes are supported?",
    answer:
      "Fixed-date countdowns for launches and sales, recurring countdowns for daily deals, and evergreen countdowns that run per visitor.",
  },
  {
    question: "How much does Countdown321 cost?",
    answer:
      "There is a Free plan (1 timer, 1,000 views/month, product page placement). Paid plans are Launch at $4.99/month, Grow at $7.99/month, and Scale at $19.99/month, each with a 7-day free trial.",
  },
  {
    question: "Does it require custom theme code?",
    answer:
      "No. Countdown321 publishes through Shopify Theme App Extensions and App Embeds, so timers are added without editing theme code by hand.",
  },
  {
    question: "Where can I install Countdown321?",
    answer: "Countdown321 is available through the Shopify App Store listing at apps.shopify.com/countdown321.",
  },
];

const related = [
  { label: "Shopify countdown timer guide", href: "/countdown321/shopify-countdown-timer-app" },
  { label: "Shopify urgency app guide", href: "/countdown321/shopify-urgency-app" },
  { label: "Dentoku Dev product overview", href: "/overview" },
  { label: "Contact Dentoku Dev support", href: "/contact" },
];

const countdownProduct = productPortfolio.find((product) => product.href === "/countdown321");

/**
 * Countdown321 (redesign: product pages in the homepage's system). The store
 * picture under the title, the short answer, what it does, what it is for as a
 * real table, the four plans, the questions, then the other products and the
 * proposal.
 */
export default function Countdown321Page() {
  const { products } = getCopy("en").site;
  const { home } = getPageCopy("en");

  return (
    <>
      {countdownProduct ? (
        <JsonLd
          data={buildProductSoftwareSchema(countdownProduct, {
            "@type": "AggregateOffer",
            lowPrice: 0,
            highPrice: 19.99,
            priceCurrency: "USD",
            offers: plans.map((plan) => ({
              "@type": "Offer",
              name: `${plan.name} Plan`,
              price: Number(plan.price.slice(1)),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/countdown321`,
            })),
          })}
        />
      ) : null}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Countdown321", href: "/countdown321" },
        ])}
      />
      <HomeReveal />

      <PageOpening
        title={["Countdown timers", "for Shopify."]}
        standfirst="Countdown321 is a Shopify app that adds countdown timers to product pages, landing pages and announcement bars: fixed-date, recurring or evergreen, styled to match your theme."
        primary={{ label: "View on the Shopify App Store", href: shopifyStoreUrl }}
        secondary={{ label: "See the plans", href: "#plans" }}
        picture={{
          src: "/brand/countdown321-hero.webp",
          alt: "Countdown321 timer styles: product page cards and an announcement bar counting down",
          width: 1600,
          height: 900,
        }}
        facts={[
          { term: "Free plan", detail: "One timer and 1,000 views a month, on the product page." },
          { term: "From $4.99 a month", detail: "Paid plans start with a 7-day free trial and remove branding." },
          { term: "No theme code", detail: "Added through Shopify's own app extensions." },
        ]}
      />

      <ShortAnswer
        title="In short"
        body="Put the deadline of a sale, a drop or a daily deal where shoppers see it, without touching your theme's code."
        aside={{
          title: "What it is not",
          body: "A marketing-automation suite. It handles time-based countdowns and urgency messages, not email campaigns, discount-code logic or multi-step funnels.",
        }}
      />

      <SideSection title="Every placement a campaign needs" lead="Timers where shoppers actually look, on the schedule promotions really run.">
        <FeatureList items={features} />
      </SideSection>

      <SideSection
        tone="muted"
        title="What it is for"
        lead="Four campaigns, and the message each one puts on the store."
        aside={
          <p className="t-body text-ink max-w-[40ch]">
            We design urgency tools around Timing, Incentive, Message, Event and Result: a clear deadline, tied to a
            real offer, in a message that is easy to understand.
          </p>
        }
      >
        <RowTable
          caption="What Countdown321 does for Shopify stores"
          columns={["Campaign", "The timer says", "Why it helps"]}
          rows={useCases.map((row) => [row.goal, row.message, row.why] as const)}
          onMuted
        />
      </SideSection>

      <SideSection
        id="plans"
        title="Plans that grow with your traffic"
        lead="Start free with one timer. Paid plans include a 7-day free trial."
        aside={
          <p className="t-body text-ink max-w-[40ch]">
            Unlike our Chrome extensions, which are one-time purchases, Countdown321 uses Shopify&apos;s recurring app
            billing. Prices are listed on the Shopify App Store and may change there first.
          </p>
        }
      >
        <PlanPanels plans={plans} />
        <div className="mt-8">
          <a
            href={shopifyStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-ink text-base font-medium"
          >
            Install from the Shopify App Store
          </a>
        </div>
      </SideSection>

      <SideSection
        id="faq"
        tone="muted"
        title="Countdown321 questions"
        aside={<RelatedLinks title="Related pages" ariaLabel="Countdown321 related Dentoku Dev pages" links={related} />}
      >
        <FaqTiles items={faqs} onMuted />
      </SideSection>

      <ProductShowcase
        products={products}
        lang="en"
        title="More from the studio"
        caption="We build, publish and maintain our products ourselves."
        overviewLink={home.products.overviewLink}
        exclude="/countdown321"
        limit={2}
      />

      <ProposalClose closing={home.closing} actionHref="/#brief" />
    </>
  );
}
