import type { Metadata } from "next";
import { ContactMailtoForm } from "@/components/marketing/contact-mailto-form";
import { JsonLd } from "@/components/marketing/json-ld";
import { getPageCopy } from "@/copy";
import { siteConfig } from "@/data/site";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildContactPointSchema } from "@/lib/schema";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).contact;
  return createMetadata({ title: meta.title, description: meta.description, path: "/contact", lang });
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).contact;

  return (
    <section className="bg-surface-peach px-4 py-10 md:py-14">
      <JsonLd data={buildContactPointSchema(lang, copy.contactPointName)} />
      <JsonLd
        data={buildBreadcrumbSchema(
          [
            { name: "Dentoku Dev", href: "/" },
            { name: copy.breadcrumb, href: "/contact" },
          ],
          lang,
        )}
      />

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 rounded-lg bg-surface-peach px-6 py-12 md:px-10 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
        <div className="max-w-xl">
          <span className="inline-flex rounded-sm border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            {copy.badge}
          </span>
          <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-normal text-slate-950 md:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-lg text-xl leading-8 text-slate-700">{copy.intro}</p>
          <ul className="mt-7 space-y-2.5 text-base leading-7 text-slate-600">
            {copy.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <ContactMailtoForm supportEmail={siteConfig.supportEmail} />
      </div>
    </section>
  );
}
