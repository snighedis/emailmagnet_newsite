"use client";

import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { useCopy } from "@/i18n/locale-context";
import { LocaleLink } from "@/i18n/locale-link";

/**
 * Shared by app/global-not-found.tsx (URLs matching no route) and
 * app/[lang]/not-found.tsx (notFound() thrown while rendering a route, e.g.
 * an Italian URL for a page that only exists in English). not-found.tsx gets
 * no params, so the locale and the strings come from LocaleProvider, which
 * SiteShell renders around both.
 */
export function NotFoundContent() {
  const { notFound } = useCopy().common;
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <Eyebrow>{notFound.eyebrow}</Eyebrow>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">{notFound.title}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{notFound.body}</p>
      <Button asChild className="mt-8">
        <LocaleLink href="/">{notFound.home}</LocaleLink>
      </Button>
    </section>
  );
}
