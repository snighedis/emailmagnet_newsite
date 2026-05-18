import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileSpreadsheet,
  ListChecks,
  Search,
  ShieldCheck,
  UsersRound,
  XCircle,
} from "lucide-react";
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

const audienceCards = [
  {
    title: "Sales researchers",
    description: "Build small prospecting lists from company pages, vendor directories, and partner ecosystems.",
  },
  {
    title: "Recruiting operators",
    description: "Collect visible role or team emails while reviewing public company and profile pages.",
  },
  {
    title: "Founders and agencies",
    description: "Turn repetitive market research into a cleaner export workflow without a heavy scraping stack.",
  },
];

const trustSignals = [
  "Detects visible page content only.",
  "No automatic outreach or sending.",
  "Review before export by design.",
  "Support from Dentoku Dev.",
];

const workflowComparison = [
  {
    manual: "Open every page and scan for addresses.",
    emailMagnet: "Run one Chrome action on the page you are already reviewing.",
  },
  {
    manual: "Copy, paste, deduplicate, and fix formatting by hand.",
    emailMagnet: "Collect detected emails into a structured export workflow.",
  },
  {
    manual: "Lose source context after the list moves to a spreadsheet.",
    emailMagnet: "Keep the research step tied to visible public pages before export.",
  },
];

const proTriggers = [
  "You research contact pages, directories, or event lists every week.",
  "You regularly hit the free extraction or export limits.",
  "You need autosave and larger exports for repeated lead research sessions.",
  "You work from reviewed URL lists and want bulk extraction without a manual tab-by-tab process.",
];

const notFor = [
  "bypassing login walls or protected/private data",
  "automatic outreach or spam campaigns",
  "replacing qualification, consent checks, or opt-out handling",
];

export const metadata = createMetadata({
  title: "EmailMagnet Chrome Email Extractor",
  description:
    "Collect public business emails while researching websites in Chrome, review detected contacts, and export CSV or TXT lists with EmailMagnet.",
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
                Collect public business emails while researching leads in Chrome
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-700">
                EmailMagnet helps sales researchers, recruiters, founders, and agencies capture
                visible contact emails from relevant websites, review the results, and export clean
                CSV or TXT lists.
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
            <div className="grid gap-3 rounded-xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-700 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                <Link href={emailMagnetConfig.secondaryCta.href}>
                  Add to Chrome for free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-white">
                <Link href="#pricing">See PRO workflow</Link>
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
              alt="EmailMagnet Chrome extension interface for extracting visible business emails"
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
            title="Lead research without manual copy-paste"
            description="EmailMagnet is for legitimate browser-based research: review relevant pages, capture visible business emails, then export a cleaner list for qualification."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {audienceCards.map((audience) => (
              <Card key={audience.title} className="rounded-xl border-slate-200 bg-slate-50 shadow-sm">
                <CardContent className="space-y-3 p-6">
                  <UsersRound className="h-6 w-6 text-[#c43618]" />
                  <h3 className="text-xl font-semibold text-slate-950">{audience.title}</h3>
                  <p className="leading-7 text-slate-600">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <Image
                src="/brand/emailmagnet-directory-showcase.png"
                alt="EmailMagnet extension extracting visible emails from a company directory page"
                width={1411}
                height={1411}
                className="h-auto w-full"
              />
              <div className="flex flex-col justify-center gap-5 p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <Search className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                  <div>
                    <h3 className="font-semibold text-slate-950">Review the source page first</h3>
                    <p className="mt-1 leading-7 text-slate-600">
                      Use EmailMagnet when the page context explains why the email is public and
                      relevant to your research.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                  <div>
                    <h3 className="font-semibold text-slate-950">Review before you export</h3>
                    <p className="mt-1 leading-7 text-slate-600">
                      The tool speeds up collection. You still decide which contacts belong in the
                      final list.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileSpreadsheet className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                  <div>
                    <h3 className="font-semibold text-slate-950">Export for qualification</h3>
                    <p className="mt-1 leading-7 text-slate-600">
                      CSV and TXT exports are made for spreadsheet cleanup, CRM import, and follow-up
                      preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src="/brand/emailmagnet-01.png"
                  alt="EmailMagnet extension panel showing detected emails and export actions"
                  width={1411}
                  height={1411}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600">
                  Detect visible emails on the page and review the list before export.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src="/brand/emailmagnet-02.png"
                  alt="EmailMagnet export workflow for saving extracted emails"
                  width={1411}
                  height={1411}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600">
                  Export CSV or TXT for spreadsheet cleanup, CRM import, or internal review.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#213343] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <Badge className="rounded-full bg-white/10 px-3 py-1 text-sm text-teal-100">
              Before and after
            </Badge>
            <h2 className="text-3xl font-semibold tracking-normal md:text-5xl">
              Replace the fragile part of lead research
            </h2>
            <p className="text-lg leading-8 text-slate-200">
              EmailMagnet does not replace judgment. It removes the repeated copy-paste work between
              finding a relevant page and building a list you can qualify.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/15 bg-white/5">
            <div className="grid grid-cols-2 border-b border-white/15 bg-white/10 text-sm font-semibold uppercase tracking-wide text-teal-100">
              <div className="px-4 py-3">Manual workflow</div>
              <div className="px-4 py-3">With EmailMagnet</div>
            </div>
            <div className="divide-y divide-white/10">
              {workflowComparison.map((row) => (
                <div key={row.manual} className="grid gap-0 text-sm leading-6 md:grid-cols-2">
                  <div className="flex gap-3 px-4 py-4 text-slate-300">
                    <XCircle className="mt-1 h-4 w-4 shrink-0 text-orange-200" />
                    <span>{row.manual}</span>
                  </div>
                  <div className="flex gap-3 px-4 py-4 text-white">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-200" />
                    <span>{row.emailMagnet}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps from page review to export"
            description="Install once, then use EmailMagnet during normal research sessions. No setup, no scraping stack, no outreach automation."
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

      <section id="pricing" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Pricing"
            title="Start free, upgrade when research becomes recurring"
            description="The free plan is enough to test real pages. PRO is for repeated lead research, larger exports, autosave, and reviewed URL-list workflows."
          />
          <div className="mt-10 rounded-xl border border-teal-100 bg-teal-50 p-6">
            <div className="flex items-start gap-3">
              <ListChecks className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
              <div>
                <h3 className="text-xl font-semibold text-slate-950">Upgrade to PRO when...</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
                  {proTriggers.map((trigger) => (
                    <li key={trigger} className="flex gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-700" />
                      <span>{trigger}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
                  <td className="px-4 py-4">Autosave, reviewed URL-list bulk extraction, faster processing</td>
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

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2">
          <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-teal-700" />
                <h2 className="text-2xl font-semibold text-slate-950">Responsible by design</h2>
              </div>
              <p className="mt-4 leading-8 text-slate-600">
                EmailMagnet is built for public business contact research on pages you can access
                and review. It helps with collection and export; your team still controls source
                selection, lawful purpose, qualification, storage, outreach, and opt-out handling.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Public pages", "Visible emails", "Manual review", "CSV/TXT export"].map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3">
                <XCircle className="h-6 w-6 text-[#c43618]" />
                <h2 className="text-2xl font-semibold text-slate-950">What EmailMagnet is not for</h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {notFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <XCircle className="mt-1 h-4 w-4 shrink-0 text-[#c43618]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/docs/responsible-use"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#c43618] hover:underline"
              >
                Read the responsible use guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
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
