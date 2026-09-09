import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Code2, ExternalLink, Layers3, MailCheck } from "@/components/ui/icons";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            as="h1"
            eyebrow={copy.eyebrow}
            title={founderConfig.name}
            description={copy.description}
          />
          <div className="mt-10 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">{copy.shortAnswer.title}</h2>
            <p className="mt-2 leading-8 text-slate-700">{shortAnswer}</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {copy.proofPoints.map((point, index) => {
              const Icon = proofIcons[index] ?? BadgeCheck;
              return (
                <Card key={point.title} className="rounded-xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-slate-950">{point.title}</h2>
                    <p className="mt-3 leading-7 text-slate-600">{point.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-slate-950">{copy.products.title}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">{copy.products.description}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <LocaleLink
                  key={product.href}
                  href={product.href}
                  className="rounded-xl border border-slate-200 p-5 transition hover:border-brand hover:bg-slate-50"
                >
                  <Eyebrow>{product.category}</Eyebrow>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">{product.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
                </LocaleLink>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-start gap-3">
              <MailCheck className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
              <div>
                <h2 className="text-xl font-semibold text-slate-950">{copy.contact.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{copy.contact.body}</p>
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
        </div>
      </section>
    </>
  );
}
