/**
 * The last real change to each page's own content (its page file and copy
 * modules, not the shared header, footer or product rows), for the sitemap's
 * `lastmod`. Google uses `lastmod` only when it is consistently accurate, so a
 * build date on every page (what the sitemap did until 19 Nov 2026) is ignored.
 *
 * Dates come from `git log -1 --format=%cs -- <page dir> <copy files>`. When a
 * change alters what a page says, update its date in the same commit. A page
 * with no reliable date (the docs and glossary pages, whose content lives in
 * shared data) is left out and gets no `lastmod` rather than a wrong one.
 * An Italian page shares the date of its English twin: same content.
 */
export const pageUpdated: Record<string, string> = {
  "/": "2026-11-18",
  "/about": "2026-11-18",
  "/founder": "2026-11-19",
  "/contact": "2026-11-18",
  "/faq": "2026-11-12",
  "/quote-software": "2026-11-18",
  "/software-house-milan": "2026-11-18",
  "/ai-consulting": "2026-11-18",
  "/privacy": "2026-11-18",
  "/terms": "2026-10-15",
  "/cookies": "2026-10-29",
  "/emailmagnet": "2026-11-12",
  "/pricing": "2026-11-12",
  "/overview": "2026-10-27",
  "/blog": "2026-10-30",
  "/clickpilot-ai": "2026-10-27",
  "/countdown321": "2026-10-27",
  "/volume-control-pro": "2026-10-27",
  "/emailmagnet/chrome-email-extractor": "2026-10-27",
  "/emailmagnet/free-email-extractor": "2026-11-12",
  "/emailmagnet/email-extractor-vs-scraper": "2026-10-27",
  "/clickpilot-ai/ai-writing-assistant-chrome-extension": "2026-09-09",
  "/volume-control-pro/chrome-volume-booster-600": "2026-09-09",
  "/volume-control-pro/chrome-volume-control-extension": "2026-10-27",
  "/volume-control-pro/tab-volume-control": "2026-09-09",
  "/countdown321/shopify-countdown-timer-app": "2026-09-09",
  "/countdown321/shopify-urgency-app": "2026-09-09",
  "/use-cases/emailmagnet-sales-prospecting": "2026-11-12",
};

/** The `lastModified` for a route ("" or "/" for the home), or undefined. */
export function lastModifiedFor(route: string): Date | undefined {
  const date = pageUpdated[route === "" ? "/" : route];
  return date ? new Date(`${date}T00:00:00Z`) : undefined;
}
