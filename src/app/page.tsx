import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { ProductVisual } from "@/components/marketing/product-visual";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SupportBlock } from "@/components/marketing/support-block";
import {
  contentHubs,
  faqItems,
  heroHighlights,
  howItWorks,
  placeholderProofPoints,
  pricingPlans,
  siteConfig,
  trustCues,
  valueProps,
} from "@/data/site";
import { buildFaqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={buildFaqSchema(faqItems.slice(0, 4))} />
      <section className="overflow-hidden bg-[#fff7f2]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <Badge className="rounded-full bg-white px-4 py-2 text-[#213343] shadow-sm">
              Chrome Extension for faster email discovery
            </Badge>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-balance text-[#213343] md:text-7xl">
                Find emails in seconds. Pay once. Use forever.
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-700">
                Extract emails from any website in one click. Save time, skip manual work, and
                export instantly. $19 lifetime - no subscription.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                <Link href={siteConfig.primaryCta.href}>
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
            <div className="inline-flex rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              Available for Chrome - install prompt placeholder
            </div>
          </div>
          <ProductVisual />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Value proposition"
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
        </div>
      </section>

      <section className="bg-[#f3fbfa] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Trust roadmap"
            title="Built for clear, maintainable product trust"
            description="The site includes clean placeholders for future proof points without inventing testimonials, logos, metrics, or claims."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-5">
              {trustCues.map((item) => (
                <div key={item.title} className="rounded-xl border border-teal-100 bg-white p-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-950">Placeholder slots</h3>
              <p className="mt-2 leading-7 text-slate-600">
                These are intentionally marked for later editing so the site stays honest until real
                proof is available.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {placeholderProofPoints.map((item) => (
                  <div key={item} className="rounded-md bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Answer-first content for users, Google AI Overviews, and other answer engines."
          />
          <FaqList items={faqItems.slice(0, 6)} />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="AI discoverability"
            title="Structured for future content growth"
            description="EmailMagnet has a content hub architecture for use cases, glossary terms, comparisons, integrations, and education."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contentHubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-950">{hub.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{hub.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SupportBlock />
    </>
  );
}
