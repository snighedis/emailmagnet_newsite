import { notFound } from "next/navigation";

/**
 * Route group for pages that exist in English only. Their copy is untouched;
 * the Italian variant of every route below this layout is a 404, so hreflang
 * and the sitemap (both gated on the slug map) never point at an English page
 * served under /it. Localising a page means moving its directory one level
 * up, out of this group, in the same commit that adds its slug-map row.
 */
export default async function EnglishOnlyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "en") {
    notFound();
  }
  return children;
}
