import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Code2, ExternalLink, Layers3, MailCheck } from "@/components/ui/icons";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { getCopy, getPageCopy } from "@/copy";
import { founderConfig, siteConfig } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFounderSchema, buildPersonSchema } from "@/lib/schema";

const proofIcons = [Layers3, Code2, BadgeCheck];

export async function generateMetadata({ params }: PageProps<"/[lang]/founder">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).founder;
  return createMetadata({ title: meta.title, description: meta.description, path: founderConfig.href, lang });
}

export default async function FounderPage({ params }: PageProps<"/[lang]/founder">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).founder;
  const { products } = getCopy(lang).site;
  const shortAnswer = copy.shortAnswer.body
    .replace("{location}", copy.location)
    .replace("{name}", founderConfig.name)
    .replace("{role}", copy.role);

  return (
    <>
      <JsonLd data={buildFounderSchema(lang, copy.description)} />
      <JsonLd data={buildPersonSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema(
          [
            { name: siteConfig.name, href: "/" },
            { name: copy.breadcrumb, href: founderConfig.href },
          ],
          lang,
        )}
      />
      <Section variant="soft" containerClassName="max-w-5xl">
          <div className="max-w-3xl space-y-5">
            <Eyebrow index="01">{copy.eyebrow}</Eyebrow>
            <h1 className="type-display text-ink">{founderConfig.name}</h1>
            <p className="type-label text-stone-600">{copy.role}</p>
            <p className="type-lead">{copy.description}</p>
          </div>
          <div className="border-brand mt-10 border-l-2 bg-brand-soft/60 py-5 pr-5 pl-6">
            <h2 className="type-label text-ink">{copy.shortAnswer.title}</h2>
            <p className="mt-2 leading-8 text-stone-700">{shortAnswer}</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {copy.proofPoints.map((point, index) => {
              const Icon = proofIcons[index] ?? BadgeCheck;
              return (
                <Card key={point.title} className="rounded-2xl border-stone-200 shadow-none">
                  <CardContent className="p-6">
                    <div className="text-brand flex h-11 w-11 items-center justify-center rounded-md bg-brand-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="type-h3 text-ink mt-5">{point.title}</h2>
                    <p className="mt-3 leading-7 text-stone-600">{point.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <section className="mt-20 border-t border-stone-200 pt-16">
            <h2 className="type-h2 text-ink">{copy.products.title}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-stone-600">{copy.products.description}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <LocaleLink
                  key={product.href}
                  href={product.href}
                  className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-stone-300 active:scale-[0.99] motion-reduce:transition-none"
                >
                  <p className="type-label text-stone-500">{product.category}</p>
                  <h3 className="type-h3 text-ink mt-2">{product.name}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{product.description}</p>
                </LocaleLink>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
            <div className="flex items-start gap-3">
              <MailCheck className="text-brand mt-1 h-5 w-5 shrink-0" />
              <div>
                <h2 className="type-h3 text-ink">{copy.contact.title}</h2>
                <p className="mt-3 leading-7 text-stone-600">{copy.contact.body}</p>
                <Link
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-eyebrow hover:underline"
                >
                  {siteConfig.supportEmail}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
      </Section>
    </>
  );
}
