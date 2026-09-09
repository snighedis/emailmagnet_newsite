import Image from "next/image";
import type { Metadata } from "next";
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
import { getCopy, getPageCopy } from "@/copy";
import { LocaleLink } from "@/i18n/locale-link";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildItemListSchema } from "@/lib/schema";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).home;
  const metadata = createMetadata({ title: meta.title, description: meta.description, path: "/", lang });
  // The home keeps the layout's default title verbatim, outside the "%s | Dentoku" template.
  return { ...metadata, title: { absolute: meta.title } };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).home;
  const { products } = getCopy(lang).site;

  return (
    <>
      {/* Preload the hero video poster: it's the LCP element. */}
      <link rel="preload" as="image" href="/brand/homepage-hero-poster.jpg" fetchPriority="high" />
      <JsonLd data={buildItemListSchema(copy.itemListName, products)} />

      {/* Hero: consulting-first promise, products as standing proof.
          Centered compact copy, then the video spans the full container width
          as the protagonist (Apollo pattern). */}
      <Section variant="gradient" containerClassName="max-w-7xl">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Eyebrow className="text-[12px] font-medium">{copy.hero.eyebrow}</Eyebrow>
          <h1 className="text-ink text-4xl font-semibold tracking-[-0.02em] text-balance md:text-[70px] md:leading-[1.05]">
            {copy.hero.titleLead} <span className="text-brand">{copy.hero.titleAccent}</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-8 text-slate-700">{copy.hero.subhead}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            {/* The hero CTA pair is the only pill-shaped element on the site */}
            <Button asChild size="xl" className="btn-sheen rounded-full font-semibold hover:-translate-y-0.5">
              <LocaleLink href={copy.hero.primaryCta.href}>
                {copy.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </LocaleLink>
            </Button>
            <Button asChild size="xl" variant="outline" className="rounded-full">
              <LocaleLink href={copy.hero.secondaryCta.href}>{copy.hero.secondaryCta.label}</LocaleLink>
            </Button>
          </div>
          <div className="flex justify-center">
            <TrustBar
              rating={5.0}
              reviewLabel={copy.trustBar.reviewLabel}
              labels={copy.trustBar.labels}
              items={[copy.hero.trustNote]}
            />
          </div>
        </div>
        <div className="mt-10">
          <HeroVideo label={copy.heroVideoLabel} />
        </div>
      </Section>

      {/* What we build: services proven by our own products (tabbed showcase) */}
      <Section id="services" variant="default">
        <div className="max-w-3xl space-y-3">
          <Eyebrow>{copy.services.eyebrow}</Eyebrow>
          <h2 className="text-ink text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            {copy.services.title}
          </h2>
          <p className="text-lg leading-8 text-slate-600">{copy.services.description}</p>
        </div>
        <div className="mt-12">
          <ServiceShowcase
            items={copy.services.items}
            labels={{ tablist: copy.services.tablistLabel, explore: copy.services.explore }}
          />
        </div>
      </Section>

      {/* How we work: dense ink panel */}
      <Section variant="ink">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-4">
            <Eyebrow tone="ink">{copy.process.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
              {copy.process.title}
            </h2>
            <p className="text-ink-muted text-lg leading-8">{copy.process.description}</p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-3">
            {copy.process.steps.map((step, index) => (
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
            <Eyebrow>{copy.products.eyebrow}</Eyebrow>
            <h2 className="text-ink text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
              {copy.products.title}
            </h2>
          </div>
          <LocaleLink className="text-eyebrow text-sm font-semibold hover:underline" href="/overview">
            {copy.products.overviewLink}
          </LocaleLink>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
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
                <LocaleLink href={product.href} className="after:absolute after:inset-0">
                  {product.name}
                </LocaleLink>
              </h3>
              {copy.products.related[product.href] ? (
                <div className="relative z-10 mt-2 flex flex-col gap-1 text-sm font-medium">
                  {copy.products.related[product.href].map((link) => (
                    <LocaleLink key={link.href} href={link.href} className="text-eyebrow hover:underline">
                      {link.label}
                    </LocaleLink>
                  ))}
                </div>
              ) : null}
              <span className="text-eyebrow mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                {copy.products.viewProduct}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* Explore more: content hubs + docs + blog (SEO crawl paths preserved) */}
      <Section variant="soft" spacing="compact">
        <div className="max-w-3xl">
          <Eyebrow>{copy.explore.eyebrow}</Eyebrow>
          <h2 className="text-ink mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            {copy.explore.title}
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {copy.explore.links.map((item) => (
            <LocaleLink
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
            </LocaleLink>
          ))}
        </div>
      </Section>

      {/* Consulting FAQ (no FAQPage schema here; that lives on /faq) */}
      <Section variant="default">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <Eyebrow>{copy.faq.eyebrow}</Eyebrow>
            <h2 className="text-ink text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              {copy.faq.title}
            </h2>
            <p className="text-lg leading-8 text-slate-600">{copy.faq.description}</p>
          </div>
          <FaqList items={copy.faq.items} />
        </div>
      </Section>

      <CtaBand
        eyebrow={copy.cta.eyebrow}
        title={copy.cta.title}
        description={copy.cta.description}
        primary={copy.cta.primary}
        secondary={copy.cta.secondary}
      />
    </>
  );
}
