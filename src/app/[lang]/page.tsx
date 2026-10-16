import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/ui/icons";
import { JsonLd } from "@/components/marketing/json-ld";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { HomeHero } from "@/components/marketing/home-hero";
import { FaqList } from "@/components/marketing/faq-list";
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
  const order: HomeSectionKey[] =
    lang === "it"
      ? ["automate", "process", "products", "faq"]
      : ["products", "automate", "process", "explore", "faq"];

  return (
    <>
      {/* The hero loop poster is the LCP element. */}
      <link rel="preload" as="image" href={copy.heroVideo.poster} fetchPriority="high" />
      <JsonLd data={buildItemListSchema(copy.itemListName, products)} />

      {/* The opening: heading, the brief, then the film (docs/adr/0002) */}
      <Section variant="soft" containerClassName="max-w-7xl">
        <HomeHero copy={copy} lang={lang} />
      </Section>

      {/* The sections after the opening. Their order differs by language
          (redesign tickets 05 and 08): the Italian consulting funnel leads with what
          we automate; the English page keeps the products first, and keeps the row
          of guides, which are English-only pages. Numbers follow the order. */}
      {order.map((key, index) => (
        <HomeSection key={key} id={key} index={index + 1} copy={copy} products={products} />
      ))}

      {/* Closing: back to the brief at the top, or the contact page */}
      <Section variant="soft" containerClassName="border-t border-stone-200 pt-18 md:pt-24" spacing="none" className="pb-18 md:pb-24">
        <div className="mx-auto max-w-2xl space-y-5 text-center">
          <h2 className="type-h2 text-ink">{copy.closing.title}</h2>
          <p className="text-lg leading-8 text-stone-600">{copy.closing.description}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="xl" className="font-semibold">
              <a href={copy.closing.primary.href}>
                {copy.closing.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="xl" variant="outline">
              <LocaleLink href={copy.closing.secondary.href}>{copy.closing.secondary.label}</LocaleLink>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

type HomeSectionKey = "automate" | "process" | "products" | "explore" | "faq";

type HomeSectionProps = {
  id: HomeSectionKey;
  index: number;
  copy: ReturnType<typeof getPageCopy>["home"];
  products: ReturnType<typeof getCopy>["site"]["products"];
};

function HomeSection({ id, index, copy, products }: HomeSectionProps) {
  const number = String(index).padStart(2, "0");
  const divider = "border-t border-stone-200";

  if (id === "automate") {
    return (
      <Section id="services" variant="soft" className={divider}>
        <div className="max-w-3xl space-y-3">
          <Eyebrow index={number}>{copy.automate.eyebrow}</Eyebrow>
          <h2 className="type-h2 text-ink">{copy.automate.title}</h2>
          <p className="text-lg leading-8 text-stone-600">{copy.automate.description}</p>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 sm:grid-cols-2">
          {copy.automate.items.map((item, i) => (
            <li key={item.title} className="flex flex-col gap-5 bg-white p-6 md:p-8">
              <p className="font-mono text-xs text-stone-500">0{i + 1}</p>
              <h3 className="type-h3 text-ink">{item.title}</h3>
              <dl className="grid gap-4 text-sm leading-6">
                <div>
                  <dt className="text-eyebrow font-semibold">{copy.automate.doesLabel}</dt>
                  <dd className="mt-1 text-stone-600">{item.does}</dd>
                </div>
                <div>
                  <dt className="text-eyebrow font-semibold">{copy.automate.staysLabel}</dt>
                  <dd className="mt-1 text-stone-600">{item.stays}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </Section>
    );
  }

  if (id === "process") {
    return (
      <Section variant="ink">
        <div className="max-w-3xl space-y-4">
          <Eyebrow tone="ink" index={number}>{copy.process.eyebrow}</Eyebrow>
          <h2 className="type-h2 text-white">{copy.process.title}</h2>
          <p className="text-ink-muted text-lg leading-8">{copy.process.description}</p>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.process.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="font-mono text-xs text-white/60">0{i + 1}</p>
              <h3 className="mt-4 text-xl font-medium text-white">{step.title}</h3>
              <p className="text-ink-muted mt-2 text-sm leading-6">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>
    );
  }

  if (id === "products") {
    return (
      <Section variant="soft" className={divider}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Eyebrow index={number}>{copy.products.eyebrow}</Eyebrow>
            <h2 className="type-h2 text-ink">{copy.products.title}</h2>
            <p className="text-lg leading-8 text-stone-600">{copy.products.description}</p>
          </div>
          <LocaleLink className="text-eyebrow text-sm font-semibold hover:underline" href="/overview">
            {copy.products.overviewLink}
          </LocaleLink>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.href}
              className="group shadow-soft hover:shadow-soft-lg relative flex flex-col rounded-2xl border border-stone-200/80 bg-white p-6 transition duration-200 hover:-translate-y-0.5 active:scale-[0.98] motion-reduce:transition-none"
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
              <h3 className="mt-5 text-xl font-medium text-stone-950">
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
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    );
  }

  if (id === "explore") {
    return (
      <Section variant="soft" spacing="none" containerClassName={`${divider} py-10`}>
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
    );
  }

  return (
    <Section variant="soft" containerClassName={`${divider} pt-18 md:pt-24`} spacing="none" className="pb-18 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <Eyebrow index={number}>{copy.faq.eyebrow}</Eyebrow>
          <h2 className="type-h2 text-ink">{copy.faq.title}</h2>
          <p className="text-lg leading-8 text-stone-600">{copy.faq.description}</p>
        </div>
        <FaqList items={copy.faq.items} collapsible />
      </div>
    </Section>
  );
}
