import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
  Layers3,
  Pen,
  Puzzle,
  Repeat,
  Sparkles,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { cn } from "@/lib/utils";
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
    title: "Product page timers",
    description:
      "Put a deadline right where the buying decision happens — on the product page itself.",
    icon: Clock,
  },
  {
    title: "Landing page timers",
    description:
      "Give campaign and launch pages a clear countdown that frames the whole offer.",
    icon: Sparkles,
  },
  {
    title: "Announcement bars & sticky banners",
    description:
      "Top or bottom bars, with sticky display options, keep the deadline visible while shoppers browse.",
    icon: Layers3,
  },
  {
    title: "Fixed-date, recurring, evergreen",
    description:
      "Count down to a launch, repeat daily deals automatically, or run evergreen timers per visitor.",
    icon: Repeat,
  },
  {
    title: "Full styling control",
    description:
      "Match your theme with color, font, background, and position controls — including mobile display.",
    icon: Pen,
  },
  {
    title: "Native Shopify publishing",
    description:
      "Publishes through Theme App Extensions and App Embeds — no custom storefront code to maintain.",
    icon: Puzzle,
  },
];

const useCaseRows = [
  {
    goal: "Launch a flash sale",
    message: "Sale ends at a specific date and time",
    why: "Makes the promotion deadline visible at the moment of decision.",
  },
  {
    goal: "Run daily deals",
    message: "Recurring timer that resets on schedule",
    why: "Automates repeat urgency without re-creating campaigns.",
  },
  {
    goal: "Promote a product drop",
    message: "Product launches when the countdown ends",
    why: "Sets expectations before inventory becomes available.",
  },
  {
    goal: "Seasonal storefront promotion",
    message: "Time-based announcement bar across the store",
    why: "Keeps the campaign window visible on every page.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    features: ["1 timer", "1,000 views/month", "Product page placement"],
    featured: false,
  },
  {
    name: "Launch",
    price: "$4.99",
    cadence: "per month",
    features: ["Multiple timers", "10,000 views/month", "No branding"],
    featured: false,
  },
  {
    name: "Grow",
    price: "$7.99",
    cadence: "per month",
    features: ["Unlimited timers", "50,000 views/month", "No branding"],
    featured: true,
  },
  {
    name: "Scale",
    price: "$19.99",
    cadence: "per month",
    features: ["Unlimited timers", "Unlimited views", "No branding"],
    featured: false,
  },
];

const faqs = [
  {
    question: "What is Countdown321?",
    answer:
      "Countdown321 is a Shopify app by Dentoku Dev for adding product, landing, and bar countdown timers to storefront campaigns — fixed-date, recurring, or evergreen.",
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
    answer:
      "Countdown321 is available through the Shopify App Store listing at apps.shopify.com/countdown321.",
  },
];

const countdownProduct = productPortfolio.find((product) => product.href === "/countdown321");

export default function Countdown321Page() {
  return (
    <>
      {countdownProduct ? (
        <JsonLd
          data={buildProductSoftwareSchema(countdownProduct, [
            {
              "@type": "Offer",
              name: "Free Plan",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/countdown321`,
            },
            {
              "@type": "Offer",
              name: "Launch Plan",
              price: "4.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/countdown321`,
            },
            {
              "@type": "Offer",
              name: "Grow Plan",
              price: "7.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/countdown321`,
            },
            {
              "@type": "Offer",
              name: "Scale Plan",
              price: "19.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/countdown321`,
            },
          ])}
        />
      ) : null}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Countdown321", href: "/countdown321" },
        ])}
      />

      {/* Hero */}
      <Section variant="default">
        <Eyebrow>Shopify app</Eyebrow>
        <h1 className="text-ink mt-3 text-4xl font-semibold tracking-[-0.02em] text-balance md:text-6xl">
          Countdown321 Shopify countdown timer app
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
          Add product, landing, and bar countdown timers to your Shopify store and launch urgency
          campaigns in minutes — with fixed-date, recurring, or evergreen countdowns that match
          your theme.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="font-semibold">
            <Link href={shopifyStoreUrl}>
              View on Shopify App Store
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
            <p className="mt-2 leading-7 text-slate-700">
              Use Countdown321 when the search intent is “Shopify countdown timer app,” “Shopify
              urgency app,” or “countdown timer for ecommerce campaigns.” It gives merchants a
              focused way to show time-sensitive messages without custom storefront development.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">What it is not</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Countdown321 is not a full marketing-automation suite. It handles time-based
              countdowns and urgency messages — not email campaigns, discount-code logic, or
              multi-step funnels.
            </p>
          </div>
        </div>
        <div className="shadow-soft mt-12 overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
          <Image
            src="/brand/countdown321-hero.webp"
            alt="Countdown321 timer styles preview"
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>
      </Section>

      {/* Features */}
      <Section variant="blue">
        <SectionHeading
          eyebrow="Features"
          title="Every placement and mode a campaign needs"
          description="Timers where shoppers actually look, with scheduling that fits how promotions really run."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* Use cases + framework */}
      <Section variant="default">
        <SectionHeading
          eyebrow="Use cases"
          title="What Countdown321 does for Shopify stores"
        />
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-950">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Shopify goal
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Countdown321 message
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Why it helps
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {useCaseRows.map((row) => (
                <tr key={row.goal}>
                  <td className="px-4 py-4 font-medium text-slate-900">{row.goal}</td>
                  <td className="px-4 py-4">{row.message}</td>
                  <td className="px-4 py-4">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card className="shadow-soft mt-10 rounded-2xl border-slate-200/80">
          <CardContent className="p-6 md:p-7">
            <h3 className="text-2xl font-semibold text-slate-950">TIMER Framework</h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Dentoku Dev uses the TIMER Framework for urgency tools: Timing, Incentive, Message,
              Event, and Result. Countdown321 should make the campaign deadline clear, connect it
              to a meaningful offer, and keep the storefront message easy to understand.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Pricing */}
      <Section variant="soft">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your traffic"
          description="Start free with one timer. Paid plans include a 7-day free trial and remove branding."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-white p-6",
                plan.featured
                  ? "border-brand/40 shadow-soft-lg ring-brand/10 ring-1"
                  : "shadow-soft border-slate-200/80",
              )}
            >
              {plan.featured ? (
                <span className="bg-brand absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-lg font-semibold text-slate-950">{plan.name}</h3>
              <div className="mt-3 flex items-end gap-1.5">
                <span className="text-ink text-4xl font-semibold tracking-[-0.02em]">
                  {plan.price}
                </span>
                <span className="pb-1.5 text-sm font-medium text-slate-500">{plan.cadence}</span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
          Honest note: unlike our Chrome extensions, which are one-time purchases, Countdown321
          runs on Shopify’s recurring app billing — plans scale by monthly timer views. Prices are
          listed on the Shopify App Store and may change there first.
        </p>
      </Section>

      {/* FAQ */}
      <Section variant="default">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-ink mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              Countdown321 FAQ
            </h2>
            <nav
              aria-label="Countdown321 related Dentoku Dev pages"
              className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-lg font-semibold text-slate-950">Related pages</h3>
              <ul className="mt-3 space-y-2 text-sm font-medium">
                <li>
                  <Link
                    className="text-eyebrow hover:underline"
                    href="/countdown321/shopify-countdown-timer-app"
                  >
                    Shopify countdown timer guide
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-eyebrow hover:underline"
                    href="/countdown321/shopify-urgency-app"
                  >
                    Shopify urgency app guide
                  </Link>
                </li>
                <li>
                  <Link className="text-eyebrow hover:underline" href="/overview">
                    Dentoku Dev product overview
                  </Link>
                </li>
                <li>
                  <Link className="text-eyebrow hover:underline" href="/contact">
                    Contact Dentoku Dev support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <FaqList items={faqs} />
        </div>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title="Put a real deadline on your next campaign"
        description="Install Countdown321 from the Shopify App Store — the Free plan covers your first timer, and paid plans include a 7-day trial."
        primary={{ label: "View on Shopify App Store", href: shopifyStoreUrl }}
        secondary={{ label: "Contact support", href: "/contact" }}
      />
    </>
  );
}
