import { bcp47, type Locale } from "@/i18n/config";

/**
 * Format an ISO date (YYYY-MM-DD) as a readable date for the given locale,
 * e.g. "May 26, 2026" or "26 maggio 2026". Falls back to the raw value when
 * unparsable. UTC keeps date-only strings stable across time zones.
 */
export function formatDate(value: string, lang: Locale = "en"): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString(bcp47[lang], {
    year: "numeric",
    // Italian reads better with the full month name; English keeps its short form.
    month: lang === "it" ? "long" : "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
