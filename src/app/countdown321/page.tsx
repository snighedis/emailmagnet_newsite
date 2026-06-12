import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

const useCases = [
  "Limited-time sales campaigns",
  "Product launch countdowns",
  "Seasonal storefront promotions",
  "Cart and collection urgency messages",
];

const faqs = [
  {
    question: "What is Countdown321?",
    answer:
      "Countdown321 is a Shopify app by Dentoku Dev for adding countdown timers and time-based urgency messages to storefront campaigns.",
  },
  {
    question: "Who is Countdown321 for?",
    answer:
      "Countdown321 is for Shopify merchants who want a focused way to communicate deadlines, launches, sales windows, and time-sensitive offers.",
  },
  {
    question: "Where can I install Countdown321?",
    answer:
      "Countdown321 is available through the Shopify App Store listing at apps.shopify.com/countdown321.",
  },
];

export const metadata = createMetadata({
  title: "Countdown321 Shopify Countdown Timer App",
  description:
    "Countdown321 is a Dentoku Dev Shopify app for adding countdown timers and time-based storefront urgency messages to ecommerce campaigns.",
  path: "/countdown321",
});

export default function Countdown321Page() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Countdown321", href: "/countdown321" },
        ])}
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-eyebrow">
            Dentoku Dev portfolio
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-normal text-balance text-slate-950">
            Countdown321 Shopify countdown timer app
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-600">
            Countdown321 is a Shopify app by Dentoku Dev for adding countdown timers and
            time-based storefront messages to promotions, launches, and sales campaigns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-md bg-brand text-white hover:bg-brand-strong">
              <Link href="https://apps.shopify.com/countdown321">
                View on Shopify App Store
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <Link href="/contact">Contact support</Link>
            </Button>
          </div>
          <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
            <p className="mt-2 leading-7 text-slate-700">
              Use Countdown321 when the search intent is “Shopify countdown timer app,” “Shopify
              urgency app,” or “countdown timer for ecommerce campaigns.” It gives merchants a
              focused way to show time-sensitive messages without custom storefront development.
            </p>
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">What it is not</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Countdown321 is not a full marketing-automation suite. It handles time-based countdowns
              and urgency messages — not email campaigns, discount-code logic, or multi-step funnels.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/brand/countdown321-hero.png"
              alt="Countdown321 timer styles preview"
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950 md:text-4xl">
            What Countdown321 does for Shopify stores
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-slate-950">Best use cases</h3>
                <ul className="mt-5 space-y-3">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-7 text-slate-700">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-slate-950">TIMER Framework</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Dentoku Dev uses the TIMER Framework for urgency tools: Timing, Incentive,
                  Message, Event, and Result. Countdown321 should make the campaign deadline clear,
                  connect it to a meaningful offer, and keep the storefront message easy to
                  understand.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-950">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Shopify goal</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Countdown321 message</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Why it helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="px-4 py-4">Launch a sale</td>
                  <td className="px-4 py-4">Sale ends at a specific time</td>
                  <td className="px-4 py-4">Makes the promotion deadline visible.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4">Promote a product drop</td>
                  <td className="px-4 py-4">Product launches in a countdown window</td>
                  <td className="px-4 py-4">Sets expectations before inventory becomes available.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4">Improve campaign clarity</td>
                  <td className="px-4 py-4">Time-based storefront banner</td>
                  <td className="px-4 py-4">Reduces ambiguity around urgency and timing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Countdown321 FAQ</h2>
            <nav aria-label="Countdown321 related Dentoku Dev pages" className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-950">Related pages</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <Link className="font-medium text-eyebrow hover:underline" href="/overview">
                    Dentoku Dev product overview
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-eyebrow hover:underline" href="/countdown321/shopify-countdown-timer-app">
                    Shopify countdown timer guide
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-eyebrow hover:underline" href="/countdown321/shopify-urgency-app">
                    Shopify urgency app guide
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-eyebrow hover:underline" href="/contact">
                    Contact Dentoku Dev support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
