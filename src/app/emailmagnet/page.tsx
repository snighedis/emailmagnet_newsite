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
  socialProof,
  valueProps,
} from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "EmailMagnet Chrome Email Extractor",
  description:
    "Extract emails while browsing with EmailMagnet for Chrome, then export clean CSV or TXT lists. Start free with 200 emails/month and upgrade to PRO when needed.",
  path: "/emailmagnet",
});

export default function EmailMagnetPage() {
  return (
    <>
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
                Find and export emails faster from any website
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-700">
                Stop copying emails manually. EmailMagnet detects email addresses while you browse, then exports them instantly as CSV or TXT. Start free with 200 emails per month.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-emerald-900">{socialProof.trustedBy}</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {socialProof.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg font-bold text-emerald-700">{stat.value}</div>
                    <div className="text-sm text-emerald-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                <Link href={emailMagnetConfig.secondaryCta.href}>
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-white">
                <Link href={emailMagnetConfig.primaryCta.href}>Upgrade to PRO ($19)</Link>
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
            title="Turn browsing into email prospecting"
            description="Extract emails automatically from company directories, contact pages, and team listings. No more manual copy-paste."
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
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-slate-950">Where EmailMagnet fits best</h2>
              <p className="leading-8 text-slate-600">
                EmailMagnet is most useful when a person is already reviewing websites and needs to
                capture visible contact emails without turning the task into a scraping project.
                It is built for browser-first research, not hidden data extraction or automatic
                outreach.
              </p>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Best EmailMagnet source pages and review steps</caption>
                  <thead className="bg-slate-50 text-slate-950">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Source page</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Why it works</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="px-4 py-4 font-medium text-slate-950">Company contact pages</td>
                      <td className="px-4 py-4">The source context usually explains why the address is public.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-slate-950">Team and directory pages</td>
                      <td className="px-4 py-4">Useful for role-based review before any outreach decision.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-slate-950">Partner or vendor lists</td>
                      <td className="px-4 py-4">Good fit when each contact can be tied to a specific business reason.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-slate-950">Event and exhibitor pages</td>
                      <td className="px-4 py-4">Works well when the next step is spreadsheet cleanup and qualification.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid gap-5">
              <Image
                src="/brand/emailmagnet-01.png"
                alt="EmailMagnet extension panel showing detected emails and export actions"
                width={1411}
                height={1411}
                className="h-auto w-full rounded-xl border border-slate-200 bg-white"
              />
              <Image
                src="/brand/emailmagnet-02.png"
                alt="EmailMagnet export workflow for saving extracted emails"
                width={1411}
                height={1411}
                className="h-auto w-full rounded-xl border border-slate-200 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps to faster email extraction"
            description="Install once, then extract emails instantly from any website while you browse. No setup, no complexity."
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
            title="Start free, upgrade when ready"
            description="Begin with our free plan. Upgrade to PRO for unlimited extraction when you need more."
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

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="EmailMagnet questions and answers"
            description="Everything you need to know about EmailMagnet: features, pricing, legal use, and getting started."
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

      <SupportBlock />
    </>
  );
}
