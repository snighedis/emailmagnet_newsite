import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "@/components/ui/icons";
import { JsonLd } from "@/components/marketing/json-ld";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { BrowserFrame } from "@/components/marketing/browser-frame";
import { TrustBar } from "@/components/marketing/trust-bar";
import { StatStrip } from "@/components/marketing/stat-strip";
import { FeatureCard } from "@/components/marketing/feature-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";
import {
  companyTrustCues,
  dentokuFrameworks,
  emailMagnetConfig,
  productPortfolio,
  siteConfig,
} from "@/data/site";
import { buildItemListSchema } from "@/lib/schema";

const relatedProductLinks: Record<string, Array<{ label: string; href: string }>> = {
  "/countdown321": [
    { label: "Shopify countdown timer guide", href: "/countdown321/shopify-countdown-timer-app" },
    { label: "Shopify urgency app guide", href: "/countdown321/shopify-urgency-app" },
  ],
};

const heroHighlights = [
  "Chrome-first extraction and productivity",
  "Shopify campaign and urgency tooling",
  "Clear docs, support, and upgrade paths",
];

const spotlightStats = [
  { value: "2,000+", label: "Professionals, sales teams, and businesses" },
  { value: "200 / mo", label: "Free captures on the EmailMagnet free plan" },
  { value: "One-time", label: "Lifetime PRO upgrade — no subscription" },
];

export default function Home() {
  const featuredProduct = productPortfolio.find((product) => product.featured) ?? productPortfolio[0];

  return (
    <>
      <JsonLd data={buildItemListSchema("Dentoku Dev software products", productPortfolio)} />

      {/* Hero */}
      <Section variant="gradient" containerClassName="relative" spacing="loose">
        <div
          className="bg-brand/20 pointer-events-none absolute -top-10 -right-24 h-72 w-72 rounded-full blur-3xl"
          aria-hidden
        />
        <div
          className="bg-ink/10 pointer-events-none absolute -bottom-24 -left-32 h-80 w-80 rounded-full blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-7">
            <span className="bg-brand-soft text-eyebrow ring-brand/15 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold ring-1">
              Dentoku Dev · founder-led product studio
            </span>
            <h1 className="text-ink max-w-4xl text-5xl font-semibold tracking-[-0.02em] text-balance md:text-7xl">
              Browser-first software for teams that do real operational work
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              We build focused tools for repetitive workflows — Chrome extensions, Shopify
              utilities, and compact products that ship quickly and stay understandable.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" className="font-semibold">
                <Link href="#products">
                  View products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-slate-300 bg-white/70">
                <Link href="/overview">Read overview</Link>
              </Button>
            </div>
            <TrustBar
              highlight="Chosen by 2,000+ professionals, sales teams, and businesses"
              items={["Free plan — no credit card"]}
            />
          </div>

          <div className="relative">
            <BrowserFrame
              src="/brand/emailmagnet-hero-new.png"
              alt="EmailMagnet extension interface"
              url="EmailMagnet · capture visible business emails"
              priority
            />
            <div className="shadow-soft-lg absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-100 bg-white p-4 sm:block">
              <p className="text-eyebrow text-xs font-semibold tracking-[0.14em] uppercase">
                Featured
              </p>
              <p className="mt-1 font-semibold text-slate-950">{featuredProduct.name}</p>
              <p className="mt-0.5 text-sm text-slate-500">Free plan available</p>
            </div>
          </div>
        </div>

        <ul className="relative mt-12 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
          {heroHighlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="text-accent-teal mt-0.5 h-4 w-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Portfolio */}
      <Section id="products" variant="default">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <Eyebrow>Portfolio</Eyebrow>
            <h2 className="text-ink text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
              Four products, each built around one repeated task
            </h2>
          </div>
          <Link className="text-eyebrow text-sm font-semibold hover:underline" href="/contact">
            Need product support?
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {productPortfolio.map((product) => (
            <article
              key={product.href}
              className="group shadow-soft hover:shadow-soft-lg relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:-translate-y-0.5 md:p-7"
            >
              {product.featured ? (
                <span className="bg-brand-soft text-eyebrow absolute top-6 right-6 z-10 rounded-full px-3 py-1 text-xs font-semibold">
                  Flagship
                </span>
              ) : null}
              <Image
                src={product.icon}
                alt={`${product.name} icon`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl border border-slate-200 bg-slate-50 object-contain p-3"
              />
              <p className="text-eyebrow mt-5 text-xs font-semibold tracking-[0.14em] uppercase">
                {product.category}
              </p>
              <h3 className="mt-1.5 text-2xl font-semibold text-slate-950">
                {/* Stretched link makes the whole card clickable while keeping the related links below tappable */}
                <Link href={product.href} className="after:absolute after:inset-0">
                  {product.name}
                </Link>
              </h3>
              <p className="mt-2 leading-7 text-slate-600">{product.description}</p>
              {relatedProductLinks[product.href] ? (
                <div className="relative z-10 mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
                  {relatedProductLinks[product.href].map((link) => (
                    <Link key={link.href} href={link.href} className="text-eyebrow hover:underline">
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
              <span className="text-eyebrow mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                View product
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* Studio method */}
      <Section variant="ink">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4">
            <Eyebrow tone="ink">Studio method</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
              Small scope, fast delivery, clear ownership
            </h2>
            <p className="text-ink-muted text-lg leading-8">
              We keep each product legible: one workflow, one promise, one support path, one page
              that explains what it does.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {companyTrustCues.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                tone="ink"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Frameworks */}
      <Section variant="blue">
        <div className="max-w-3xl">
          <Eyebrow>Frameworks</Eyebrow>
          <h2 className="text-ink mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Internal frameworks that keep products practical
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {dentokuFrameworks.map((framework) => (
            <article
              key={framework.name}
              className="shadow-soft rounded-2xl border border-slate-200/80 bg-white p-6 md:p-7"
            >
              <h3 className="text-2xl font-semibold text-slate-950">{framework.name}</h3>
              <p className="mt-3 leading-7 text-slate-600">{framework.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {framework.steps.map((step) => (
                  <li
                    key={step}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* EmailMagnet spotlight */}
      <Section variant="default">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <Eyebrow>Spotlight</Eyebrow>
            <h2 className="text-ink text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
              EmailMagnet, the flagship Chrome workflow
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Capture visible public business emails while browsing, review the list, and export to
              CSV or TXT for qualification. Free plan available, PRO is a one-time upgrade.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-semibold">
                <Link href={emailMagnetConfig.href}>
                  Explore EmailMagnet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/docs/getting-started">Read docs</Link>
              </Button>
            </div>
            <StatStrip stats={spotlightStats} className="border-t border-slate-200 pt-8" />
          </div>
          <BrowserFrame
            src="/brand/emailmagnet-hero-new.png"
            alt="EmailMagnet extension interface"
            url="EmailMagnet · review and export captured emails"
            width={1361}
            height={852}
          />
        </div>
      </Section>

      <CtaBand
        eyebrow="Contact"
        title="Talk with Dentoku Dev about product support and portfolio fit"
        description="Reach out for support, billing questions, or details on the current roadmap across our browser and ecommerce products."
        primary={{ label: siteConfig.supportEmail, href: `mailto:${siteConfig.supportEmail}` }}
        secondary={{ label: "View products", href: "#products" }}
      />
    </>
  );
}
