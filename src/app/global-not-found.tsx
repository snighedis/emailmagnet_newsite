import type { Metadata } from "next";
import { NotFoundContent } from "@/components/layout/not-found-content";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/data/site";
import "./globals.css";

/**
 * Routing-level 404: any URL that matches no route (a typo, a dead link, an
 * asset that does not exist). With the root layout under [lang], Next would
 * otherwise compose this page from the app root, where there is no layout,
 * and serve a bare unstyled shell. This file renders the full document
 * itself. Next injects <meta name="robots" content="noindex"> on its own.
 *
 * The locale is unknown here (no params, no pathname on the server), so the
 * shell is English. notFound() thrown inside a route, such as an Italian URL
 * for an English-only page, goes through app/[lang]/not-found.tsx instead.
 */
export const metadata: Metadata = {
  title: `Page not found | ${siteConfig.name}`,
  description: "The page you requested does not exist.",
};

export default function GlobalNotFound() {
  return (
    <SiteShell lang="en">
      <NotFoundContent />
    </SiteShell>
  );
}
