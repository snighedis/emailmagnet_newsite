"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { localizedHref } from "./href";
import { useLocale } from "./locale-context";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  /** An English href. It is localised for the current locale at render time. */
  href: string;
};

/**
 * `next/link` that takes an English href and renders the locale-correct URL.
 * Use it in shared chrome (header, footer, banners) that renders in every
 * locale. Server pages call `localizedHref(lang, ...)` directly instead.
 */
export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const lang = useLocale();
  return <Link href={localizedHref(lang, href)} {...props} />;
}
