import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";
import { cookies as en, CookiesBody as BodyEn } from "@/copy/en/legal/cookies";
import { cookies as it, CookiesBody as BodyIt } from "@/copy/it/legal/cookies";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";

const copy = { en: { ...en, Body: BodyEn }, it: { ...it, Body: BodyIt } };

export async function generateMetadata({ params }: PageProps<"/[lang]/cookies">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = copy[lang];
  return createMetadata({ title: meta.title, description: meta.description, path: "/cookies", lang });
}

export default async function Page({ params }: PageProps<"/[lang]/cookies">) {
  const lang = await resolveLang(params);
  const { title, Body } = copy[lang];
  return (
    <LegalPage lang={lang} path="/cookies" title={title}>
      <Body />
    </LegalPage>
  );
}
