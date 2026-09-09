"use client";

import dynamic from "next/dynamic";
import { useCopy } from "@/i18n/locale-context";

const NewsletterSignupDynamic = dynamic(
  () => import("@/components/marketing/newsletter-signup").then((module) => module.NewsletterSignup),
  { ssr: false, loading: () => <NewsletterPlaceholder /> },
);

function NewsletterPlaceholder() {
  const { newsletter } = useCopy().common;
  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-2xl font-semibold text-slate-950 sm:text-3xl">{newsletter.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{newsletter.loading}</p>
    </div>
  );
}

export function NewsletterSignupLazy() {
  return <NewsletterSignupDynamic />;
}
