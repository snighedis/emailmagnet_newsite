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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative z-10 max-w-2xl space-y-8">
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
                Find emails in seconds. Pay once. Use forever.
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-700">
                EmailMagnet is made by Dentoku Dev. It helps users extract emails from websites in
                one click, save time, skip manual work, and export instantly. $19 lifetime - no
                subscription.
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
          <div className="relative min-w-0 lg:-mr-24">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-20 bg-gradient-to-r from-[#fff7f2] to-transparent lg:block" />
            <Image
              src="/brand/emailmagnet-01.png"
              alt="EmailMagnet Chrome extension interface"
              width={1600}
              height={1000}
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
              src="/brand/emailmagnet-02.png"
              alt="EmailMagnet extension extracting emails from a company directory page"
              width={2000}
              height={1848}
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
            description="Answer-first content for users, Google AI Overviews, and other answer engines."
          />
          <FaqList items={faqItems.slice(0, 6)} />
        </div>
      </section>

      <SupportBlock />
    </>
  );
}
