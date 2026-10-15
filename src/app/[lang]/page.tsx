import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/ui/icons";
import { JsonLd } from "@/components/marketing/json-ld";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { HeroVideo } from "@/components/marketing/hero-video";
import { TrustBar } from "@/components/marketing/trust-bar";
import { Brief } from "@/components/marketing/brief";
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
      {/* The hero loop poster is the LCP element. */}
      <link rel="preload" as="image" href={copy.heroVideo.poster} fetchPriority="high" />
      <JsonLd data={buildItemListSchema(copy.itemListName, products)} />

      {/* Hero: consulting-first promise, products as standing proof.
          Centered compact copy, then the video spans the full container width
          as the protagonist (Apollo pattern). */}
      <Section variant="soft" containerClassName="max-w-7xl">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Eyebrow className="text-[12px] font-medium">{copy.hero.eyebrow}</Eyebrow>
          <h1 className="type-display text-ink">
            {copy.hero.titleLead} <span className="text-brand">{copy.hero.titleAccent}</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-8 text-stone-700">{copy.hero.subhead}</p>
          {/* Who the studio works for, named by kind of business */}
          <p className="mx-auto flex max-w-2xl flex-wrap justify-center gap-x-4 gap-y-1.5 font-mono text-xs tracking-[0.08em] text-stone-500 uppercase">
            <span className="text-eyebrow">{copy.audience.label}</span>
            {copy.audience.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            {/* The hero CTA pair is the only pill-shaped element on the site */}
            <Button asChild size="xl" className="btn-sheen rounded-full font-semibold hover:-transtone-y-0.5">
              <a href="#brief">
                {copy.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
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
        {/* Hero loop (video/src/StudioHero.tsx): silent, play/pause only. */}
        <div className="mt-10">
          <HeroVideo
            src={copy.heroVideo.src}
            poster={copy.heroVideo.poster}
            label={copy.heroVideo.label}
            controls={copy.heroVideo.controls}
            width={1728}
            height={864}
          />
        </div>
      </Section>

      {/* What we build: services proven by our own products (tabbed showcase) */}
      <Section id="services" variant="soft" className="border-t border-stone-200/70">
        <div className="max-w-3xl space-y-3">
          <Eyebrow index="01">{copy.services.eyebrow}</Eyebrow>
          <h2 className="type-h2 text-ink">
            {copy.services.title}
          </h2>
          <p className="text-lg leading-8 text-stone-600">{copy.services.description}</p>
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
            <Eyebrow tone="ink" index="02">{copy.process.eyebrow}</Eyebrow>
            <h2 className="type-h2 text-white">
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

      {/* Products strip: each card shows what the product does and where it is published */}
      <Section variant="soft">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Eyebrow index="03">{copy.products.eyebrow}</Eyebrow>
            <h2 className="type-h2 text-ink">
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
              className="group shadow-soft hover:shadow-soft-lg relative flex flex-col rounded-2xl border border-stone-200/80 bg-white p-6 transition duration-200 hover:-transtone-y-0.5 active:scale-[0.98] motion-reduce:transition-none"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={product.icon}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-xl border border-stone-200 bg-stone-50 object-contain p-2"
                />
                <p className="text-eyebrow text-xs font-semibold tracking-[0.14em] uppercase">
                  {product.category}
                </p>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-stone-950">
                <LocaleLink href={product.href} className="after:absolute after:inset-0">
                  {product.name}
                </LocaleLink>
              </h3>
              <p className="mt-2 mb-5 text-sm leading-6 text-stone-600">{product.description}</p>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-stone-100 pt-4 text-sm">
                {/* Store names are never translated (AGENTS.md) */}
                <span className="whitespace-nowrap text-stone-500">
                  {product.externalUrl?.includes("shopify.com") ? "Shopify App Store" : "Chrome Web Store"}
                </span>
                {/* The whole card is the link (the name's ::after); the label stays for screen readers */}
                <span className="text-eyebrow inline-flex items-center">
                  <span className="sr-only">{copy.products.viewProduct}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:transtone-x-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Explore more: one compact row of crawlable links to the content hubs */}
      <Section variant="soft" spacing="none" containerClassName="border-t border-stone-200 py-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <h2 className="text-ink shrink-0 text-lg font-semibold">{copy.explore.title}</h2>
          <ul className="flex flex-wrap gap-2">
            {copy.explore.links.map((item) => (
              <li key={item.href}>
                <LocaleLink
                  href={item.href}
                  title={item.description}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:text-stone-950 active:scale-[0.97] motion-reduce:transition-none"
                >
                  {item.title}
                  <ArrowRight className="h-3.5 w-3.5 text-stone-400" />
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Consulting FAQ (no FAQPage schema here; that lives on /faq) */}
      <Section variant="soft" containerClassName="border-t border-stone-200 pt-18 md:pt-24" spacing="none" className="pb-18 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <Eyebrow index="04">{copy.faq.eyebrow}</Eyebrow>
            <h2 className="type-h2 text-ink">
              {copy.faq.title}
            </h2>
            <p className="text-lg leading-8 text-stone-600">{copy.faq.description}</p>
          </div>
          <FaqList items={copy.faq.items} collapsible />
        </div>
      </Section>

      {/* The brief closes the page: the hero's primary call to action lands here. */}
      <Section id="brief" variant="soft" containerClassName="border-t border-stone-200 pt-18 md:pt-24" spacing="none" className="scroll-mt-20 pb-18 md:pb-24">
        <div className="max-w-3xl space-y-4">
          <Eyebrow index="05">{copy.brief.eyebrow}</Eyebrow>
          <h2 className="type-h2 text-ink">
            {copy.brief.title}
          </h2>
          <p className="text-lg leading-8 text-stone-600">{copy.brief.lede}</p>
        </div>
        <div className="mt-12">
          <Brief copy={copy.brief} lang={lang} />
        </div>
      </Section>
    </>
  );
}
