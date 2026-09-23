import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";
import { privacy as en, PrivacyBody as BodyEn } from "@/copy/en/legal/privacy";
import { privacy as it, PrivacyBody as BodyIt } from "@/copy/it/legal/privacy";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";

const copy = { en: { ...en, Body: BodyEn }, it: { ...it, Body: BodyIt } };

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = copy[lang];
  return createMetadata({ title: meta.title, description: meta.description, path: "/privacy", lang });
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const lang = await resolveLang(params);
  const { title, Body } = copy[lang];
  return (
    <LegalPage lang={lang} path="/privacy" title={title}>
      <Body />
    </LegalPage>
  );
}
