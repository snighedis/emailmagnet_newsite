import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";
import { terms as en, TermsBody as BodyEn } from "@/copy/en/legal/terms";
import { terms as it, TermsBody as BodyIt } from "@/copy/it/legal/terms";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";

const copy = { en: { ...en, Body: BodyEn }, it: { ...it, Body: BodyIt } };

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = copy[lang];
  return createMetadata({ title: meta.title, description: meta.description, path: "/terms", lang });
}

export default async function Page({ params }: PageProps<"/[lang]/terms">) {
  const lang = await resolveLang(params);
  const { title, Body } = copy[lang];
  return (
    <LegalPage lang={lang} path="/terms" title={title}>
      <Body />
    </LegalPage>
  );
}
