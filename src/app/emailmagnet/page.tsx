import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { NewsletterSignup } from "@/components/marketing/newsletter-signup";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SupportBlock } from "@/components/marketing/support-block";
import {
  emailMagnetConfig,
  faqItems,
  heroHighlights,
  howItWorks,
  pricingPlans,
  valueProps,
} from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildSoftwareSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "EmailMagnet",
  description:
    "EmailMagnet is a Chrome Extension by Dentoku Dev for finding and extracting emails from websites while browsing, with Free and PRO lifetime access options.",
  path: "/emailmagnet",
});

export default function EmailMagnetPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(faqItems.slice(0, 4))} />
      <JsonLd data={buildSoftwareSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "EmailMagnet", href: "/emailmagnet" },
        ])}
      />
      <section className="overflow-hidden bg-[#fff7f2]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:py-28 lg:grid-cols-1">
          <div className="relative z-10 order-1 max-w-2xl space-y-8 lg:mx-auto lg:max-w-4xl">
            <Badge className="gap-2 rounded-full bg-white px-4 py-2 text-[#213343] shadow-sm">
              <Image
                src={emailMagnetConfig.icon}
                alt="EmailMagnet icon"
                width={18}
                height={18}
                className="h-4.5 w-4.5 object-contain"
              />
              A Dentoku Dev product · Chrome Extension
            </Badge>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-balance text-[#213343] md:text-7xl">
                EmailMagnet is a Chrome email extractor for finding emails while browsing.
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-700">
                EmailMagnet is made by Dentoku Dev. It helps users extract emails from websites in
                one click, save time, skip manual work, and export instantly. $19 lifetime - no
                subscription.
              </p>
            </div>
            <div className="rounded-xl border border-teal-100 bg-white/80 p-5">
              <h2 className="text-lg font-semibold text-[#213343]">Quick answer</h2>
              <p className="mt-2 leading-7 text-slate-700">
                Use EmailMagnet when you need a browser-based email extractor that detects visible
                website emails, supports CSV and TXT export, and avoids a monthly subscription.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                <Link href={emailMagnetConfig.primaryCta.href}>
                  Unlock PRO for $19
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-white">
                <Link href="#how-it-works">See how it works</Link>
              </Button>
            </div>
            <ul className="grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
              {heroHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-2 min-w-0 lg:-mx-16 xl:-mx-28">
            <Image
              src="/brand/emailmagnet-hero-new.png"
              alt="EmailMagnet Chrome extension interface"
              width={1361}
              height={852}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Why EmailMagnet"
            title="Stop copying emails manually"
            description="EmailMagnet finds and extracts emails for you while you browse. No scraping tools. No complexity."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {valueProps.map((item) => (
              <Card key={item.title} className="rounded-xl border-slate-200 shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="leading-7 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <Image
              src="/brand/emailmagnet-directory-showcase.png"
              alt="EmailMagnet extension extracting emails from a company directory page"
              width={1411}
              height={1411}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="How it works"
            title="A three-step extraction workflow"
            description="EmailMagnet keeps the process short: install the extension, browse websites, then extract and export emails."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#ff5c35]/10 text-[#c43618]">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-sm text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Pricing"
            title="Pay once. Extract forever."
            description="No monthly fees. Start finding emails in seconds."
          />
          <div className="mt-12">
            <PricingCards plans={pricingPlans} />
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">EmailMagnet Free vs PRO comparison</caption>
              <thead className="bg-slate-50 text-slate-950">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Feature</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Free</th>
                  <th scope="col" className="px-4 py-3 font-semibold">PRO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">Monthly extraction</td>
                  <td className="px-4 py-4">200 emails per month</td>
                  <td className="px-4 py-4">Unlimited email extraction</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">Export size</td>
                  <td className="px-4 py-4">Up to 100 emails at once</td>
                  <td className="px-4 py-4">Unlimited export size</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">Formats</td>
                  <td className="px-4 py-4">CSV and TXT</td>
                  <td className="px-4 py-4">CSV and TXT</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">Advanced workflow</td>
                  <td className="px-4 py-4">Basic extraction</td>
                  <td className="px-4 py-4">Autosave, bulk extraction, faster processing</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">Price</td>
                  <td className="px-4 py-4">Free</td>
                  <td className="px-4 py-4">$19 lifetime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#f3fbfa] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Newsletter"
            title="Stay updated on EmailMagnet"
            description="Subscribe to receive product updates, workflow improvements, and release announcements."
          />
          <div className="mt-12">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Direct answers about EmailMagnet, pricing, exports, and responsible use."
          />
          <div className="space-y-6">
            <FaqList items={faqItems.slice(0, 6)} />
            <nav aria-label="EmailMagnet related help pages" className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-950">Related help pages</h2>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li>
                  <Link className="font-medium text-[#c43618] hover:underline" href="/docs/getting-started">
                    Install and use EmailMagnet
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-[#c43618] hover:underline" href="/docs/exporting-emails">
                    Export emails as CSV or TXT
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-[#c43618] hover:underline" href="/pricing">
                    Compare Free and PRO pricing
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-[#c43618] hover:underline" href="/overview">
                    Dentoku Dev product overview
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <SupportBlock />
    </>
  );
}
