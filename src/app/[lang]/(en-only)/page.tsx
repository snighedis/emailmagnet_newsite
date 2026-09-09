import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { JsonLd } from "@/components/marketing/json-ld";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { HeroVideo } from "@/components/marketing/hero-video";
import { TrustBar } from "@/components/marketing/trust-bar";
import { CtaBand } from "@/components/marketing/cta-band";
import { FaqList } from "@/components/marketing/faq-list";
import { ServiceShowcase } from "@/components/marketing/service-showcase";
import { Button } from "@/components/ui/button";
import {
  consultingFaq,
  contentHubs,
  homeHero,
  howWeWork,
  productPortfolio,
  servicesShowcase,
} from "@/data/site";
import { buildItemListSchema } from "@/lib/schema";

// Deep product pages we keep linked from the homepage for SEO (crawl paths).
const relatedProductLinks: Record<string, Array<{ label: string; href: string }>> = {
  "/countdown321": [
    { label: "Shopify countdown timer guide", href: "/countdown321/shopify-countdown-timer-app" },
    { label: "Shopify urgency app guide", href: "/countdown321/shopify-urgency-app" },
  ],
};

// "Explore more" rows: the four content hubs plus the docs and blog entry points.
const exploreLinks = [
  ...contentHubs,
  {
    title: "Documentation",
    href: "/docs/getting-started",
    description: "Setup guides, export workflows, and responsible-use documentation.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Practical guides on lead research, compliance, and browser workflows.",
  },
];

export default function Home() {
  return (
    <>
      {/* Preload the hero video poster: it's the LCP element. */}
      <link rel="preload" as="image" href="/brand/homepage-hero-poster.jpg" fetchPriority="high" />
      <JsonLd data={buildItemListSchema("Dentoku Dev software products", productPortfolio)} />

      {/* Hero: consulting-first promise, products as standing proof.
          Centered compact copy, then the video spans the full container width
          as the protagonist (Apollo pattern). */}
      <Section variant="gradient" containerClassName="max-w-7xl">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Eyebrow className="text-[12px] font-medium">{homeHero.eyebrow}</Eyebrow>
          <h1 className="text-ink text-4xl font-semibold tracking-[-0.02em] text-balance md:text-[70px] md:leading-[1.05]">
            {homeHero.titleLead} <span className="text-brand">{homeHero.titleAccent}</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-8 text-slate-700">{homeHero.subhead}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            {/* The hero CTA pair is the only pill-shaped element on the site */}
            <Button asChild size="xl" className="btn-sheen rounded-full font-semibold hover:-translate-y-0.5">
              <Link href={homeHero.primaryCta.href}>
                {homeHero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="rounded-full">
              <Link href={homeHero.secondaryCta.href}>{homeHero.secondaryCta.label}</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <TrustBar rating={5.0} reviewLabel="Chrome Web Store" items={[homeHero.trustNote]} />
          </div>
        </div>
        <div className="mt-10">
          <HeroVideo />
        </div>
      </Section>

      {/* What we build: services proven by our own products (tabbed showcase) */}
      <Section id="services" variant="default">
        <div className="max-w-3xl space-y-3">
          <Eyebrow>What we build</Eyebrow>
          <h2 className="text-ink text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            We only sell what we already ship
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            No slide decks. No paper promises. Every service below is backed by a product we
            build, run, and maintain for ourselves.
          </p>
        </div>
        <div className="mt-12">
          <ServiceShowcase items={servicesShowcase} />
        </div>
      </Section>

      {/* How we work: dense ink panel */}
      <Section variant="ink">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-4">
            <Eyebrow tone="ink">How we work</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
              You talk to the builder, not an account manager
            </h2>
            <p className="text-ink-muted text-lg leading-8">
              Small team. Direct answers. Working software early. The same discipline that keeps
              four products alive on public stores.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-3">
            {howWeWork.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="font-mono text-xs text-white/60">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-ink-muted mt-2 text-sm leading-6">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Products strip: compact, keeps every SEO crawl path */}
      <Section variant="blue">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Eyebrow>Products</Eyebrow>
            <h2 className="text-ink text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
              Four products. Public stores. Public reviews.
            </h2>
          </div>
          <Link className="text-eyebrow text-sm font-semibold hover:underline" href="/overview">
            See the full overview
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productPortfolio.map((product) => (
            <article
              key={product.href}
              className="group shadow-soft hover:shadow-soft-lg relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:-translate-y-0.5"
            >
              <Image
                src={product.icon}
                alt={`${product.name} icon`}
                width={44}
                height={44}
                className="h-11 w-11 rounded-xl border border-slate-200 bg-slate-50 object-contain p-2"
              />
              <p className="text-eyebrow mt-4 text-xs font-semibold tracking-[0.14em] uppercase">
                {product.category}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-slate-950">
                <Link href={product.href} className="after:absolute after:inset-0">
                  {product.name}
                </Link>
              </h3>
              {relatedProductLinks[product.href] ? (
                <div className="relative z-10 mt-2 flex flex-col gap-1 text-sm font-medium">
                  {relatedProductLinks[product.href].map((link) => (
                    <Link key={link.href} href={link.href} className="text-eyebrow hover:underline">
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
              <span className="text-eyebrow mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                View product
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* Explore more: content hubs + docs + blog (SEO crawl paths preserved) */}
      <Section variant="soft" spacing="compact">
        <div className="max-w-3xl">
          <Eyebrow>Explore more</Eyebrow>
          <h2 className="text-ink mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Guides, comparisons, and docs
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {exploreLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group shadow-soft hover:shadow-soft-lg flex items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:-translate-y-0.5"
            >
              <span>
                <span className="block font-semibold text-slate-950">{item.title}</span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">
                  {item.description}
                </span>
              </span>
              <ArrowRight className="text-eyebrow mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </Section>

      {/* Consulting FAQ (no FAQPage schema here; that lives on /faq) */}
      <Section variant="default">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-ink text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              Working with us
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              The questions worth asking before you hire a small studio.
            </p>
          </div>
          <FaqList items={consultingFaq} />
        </div>
      </Section>

      <CtaBand
        eyebrow="Start"
        title="Tell us what you want to build"
        description="One call. A written proposal. Software that ships. Or try one of our products first and judge the craft yourself."
        primary={{ label: "Start your project", href: "/contact" }}
        secondary={{ label: "See what we build", href: "/#services" }}
      />
    </>
  );
}
