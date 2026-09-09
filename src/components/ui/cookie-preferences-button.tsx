"use client";

import { useCopy } from "@/i18n/locale-context";
import { openCookiePreferences } from "@/lib/consent";

/**
 * Footer control that reopens the cookie preferences panel, giving visitors an
 * always-available way to change or withdraw consent (GDPR Art. 7(3)).
 */
export function CookiePreferencesButton({ className }: { className?: string }) {
  const { common } = useCopy();
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      {common.footer.cookiePreferences}
    </button>
  );
}
