import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "./config";

/**
 * Narrow the `[lang]` route param for localised pages. Unreachable values are
 * already a routing-level 404 (dynamicParams = false on the [lang] layout);
 * this keeps the type honest without a cast.
 */
export async function resolveLang(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return lang;
}
