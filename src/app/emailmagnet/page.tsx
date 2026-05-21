import Image from "next/image";
import Link from "next/link";
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
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { NewsletterSignup } from "@/components/marketing/newsletter-signup";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { SupportBlock } from "@/components/marketing/support-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    description: "Build prospecting lists from company pages, partner directories, and local branch indexes.",
  },
  {
    title: "Recruiting operators",
    description: "Collect visible role/team emails while reviewing employers, portfolios, and hiring pages.",
  },
  {
    title: "Founders and agencies",
    description: "Turn repeated market research into a structured list without maintaining a scraping stack.",
  },
];

const trustSignals = [
  "Detects visible content only",
  "No automatic outreach",
  "Human review before export",
  "Direct support from Dentoku Dev",
];

const workflowComparison = [
  {
    manual: "Open each page, scan for addresses, and paste manually into a sheet.",
    emailMagnet: "Run one action inside Chrome and collect emails into a single export flow.",
  },
  {
    manual: "Spend extra time fixing duplicates and inconsistent formatting.",
    emailMagnet: "Export a structured list ready for qualification in CSV or TXT.",
  },
  {
    manual: "Lose source context when the copy-paste step gets long.",
    emailMagnet: "Keep collection tied to the exact pages you are actively reviewing.",
  },
];

const proTriggers = [
  "You research directories, contact pages, or partner lists every week.",
  "The free extraction/export limits are now your bottleneck.",
  "You want autosave and larger export batches for repeated sessions.",
  "You work from pre-reviewed URL lists and need faster processing.",
];

const notFor = [
  "bypassing login walls or protected/private data",
  "automatic outreach or spam campaigns",
  "skipping consent checks, qualification, or opt-out handling",
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

      <section className="relative overflow-hidden bg-[#10263a] text-white">
        <div className="pointer-events-none absolute left-[-7rem] top-[-6rem] h-72 w-72 rounded-full bg-[#ff5c35]/30 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] top-12 h-80 w-80 rounded-full bg-[#2dd4bf]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-18 md:py-22 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="space-y-7 lg:contents">
            <div className="space-y-7 lg:col-start-1 lg:row-start-1">
              <Badge className="w-fit gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white">
                <Image
                  src={emailMagnetConfig.icon}
                  alt="EmailMagnet icon"
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] object-contain"
                />
                Dentoku Dev product · Chrome extension
              </Badge>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.02em] text-balance md:text-7xl">
                Capture visible business emails while you research in Chrome
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                EmailMagnet helps researchers, recruiters, founders, and agencies collect public
                contact emails, review results quickly, and export clean lists as CSV or TXT.
              </p>
            </div>

            <div className="hero-trust-panel grid min-h-[92px] gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-slate-100 sm:grid-cols-2 lg:col-start-1 lg:row-start-2">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-200" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-start-1 lg:row-start-3">
              <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                <Link href={emailMagnetConfig.secondaryCta.href}>
                  Add to Chrome for free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="#pricing">See PRO workflow</Link>
              </Button>
            </div>

            <ul className="grid gap-2 text-sm font-medium text-slate-200 sm:grid-cols-3 lg:col-start-1 lg:row-start-4">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 lg:contents">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 lg:col-start-2 lg:row-start-1">
              <Image
                src="/brand/emailmagnet-hero-new.png"
                alt="EmailMagnet Chrome extension interface"
                width={1361}
                height={852}
                className="h-auto w-full rounded-xl"
                priority
              />
            </div>
            <div className="hero-stats-panel grid min-h-[92px] grid-cols-3 items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4 text-center lg:col-start-2 lg:row-start-2">
              {socialProof.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {audienceCards.map((audience, index) => (
              <article key={audience.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-6 flex items-center justify-between">
                  <UsersRound className="h-6 w-6 text-[#c43618]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">0{index + 1}</span>
                </div>
                <h2 className="text-2xl font-semibold text-slate-950">{audience.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{audience.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <Image
                src="/brand/emailmagnet-directory-showcase.png"
                alt="EmailMagnet extracting visible emails from a directory page"
                width={1411}
                height={1411}
                className="h-full w-full object-cover"
              />
              <div className="space-y-5 p-6 md:p-8">
                <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950">
                  Research first, collect second, export third
                </h2>
                <p className="leading-8 text-slate-600">
                  EmailMagnet is designed for pages you are already evaluating. The tool speeds up
                  collection, while your team keeps control of source quality and usage decisions.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Search,
                      title: "Confirm context on-page",
                      text: "Use extraction on pages where the business context is visible and relevant.",
                    },
                    {
                      icon: ClipboardCheck,
                      title: "Review before export",
                      text: "Choose what belongs in your final list instead of bulk-exporting blindly.",
                    },
                    {
                      icon: FileSpreadsheet,
                      title: "Export for qualification",
                      text: "Move CSV/TXT output into spreadsheet, CRM, and compliance review steps.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <item.icon className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                      <div>
                        <h3 className="font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c43618]">Before and after</p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-[#132333] md:text-5xl">
              Replace the fragile part of lead research
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              EmailMagnet does not replace judgment. It removes the repetitive copy-paste work
              between finding a relevant page and preparing a clean list.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="hidden grid-cols-2 bg-slate-100 text-sm font-semibold uppercase tracking-wide text-slate-700 md:grid">
              <div className="px-4 py-3">Manual workflow</div>
              <div className="px-4 py-3">With EmailMagnet</div>
            </div>
            <div className="divide-y divide-slate-200">
              {workflowComparison.map((row) => (
                <div key={row.manual} className="grid gap-0 text-sm leading-6 md:grid-cols-2">
                  <div className="flex gap-3 bg-slate-50 px-4 py-4 text-slate-600">
                    <XCircle className="mt-1 h-4 w-4 shrink-0 text-[#c43618]" />
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500 md:hidden">
                        Manual workflow
                      </p>
                      <span>{row.manual}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 px-4 py-4 text-slate-800">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0f766e]" />
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500 md:hidden">
                        With EmailMagnet
                      </p>
                      <span>{row.emailMagnet}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#10263a] py-18 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-200">How it works</p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
              Three steps from page review to export
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <step.icon className="h-6 w-6 text-teal-200" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-200">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-18 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c43618]">Pricing</p>
              <h2 className="text-4xl font-semibold tracking-[-0.02em] text-[#132333] md:text-5xl">
                Start free, upgrade when research becomes recurring
              </h2>
              <p className="text-lg leading-8 text-slate-700">
                Free is enough to validate real workflows. PRO is for repeated research sessions,
                larger exports, autosave, and reviewed URL-list processing.
              </p>
            </div>

            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">
              <div className="flex items-start gap-3">
                <ListChecks className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">Upgrade to PRO when...</h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
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
          </div>

          <div className="mt-10">
            <PricingCards plans={pricingPlans} />
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-18 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-teal-700" />
              <h2 className="text-2xl font-semibold text-slate-950">Responsible by design</h2>
            </div>
            <p className="mt-4 leading-8 text-slate-600">
              EmailMagnet is built for public contact research on pages you can access and review.
              The extension helps with collection and export, but your team controls lawful purpose,
              qualification, storage, outreach policy, and opt-out handling.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {valueProps.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-[#c43618]" />
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
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
            <Button asChild variant="outline" className="mt-7 rounded-md">
              <Link href="/docs/responsible-use">
                Read responsible use guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="bg-white py-18 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c43618]">FAQ</p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-[#132333] md:text-5xl">
              Questions before rollout
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Short answers on capabilities, pricing, and responsible use before you adopt the
              extension in recurring workflows.
            </p>
          </div>
          <div className="space-y-6">
            <FaqList items={faqItems.slice(0, 6)} />
            <nav aria-label="EmailMagnet related help pages" className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-950">Related help pages</h3>
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

      <section className="bg-[#ecf9f7] py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c43618]">Newsletter</p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-[#132333] md:text-5xl">
              Stay updated on EmailMagnet improvements
            </h2>
          </div>
          <div className="mt-10">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <SupportBlock />
    </>
  );
}
