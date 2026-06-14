"use client";

import { openCookiePreferences } from "@/lib/consent";

/**
 * Footer control that reopens the cookie preferences panel, giving visitors an
 * always-available way to change or withdraw consent (GDPR Art. 7(3)).
 */
export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Cookie preferences
    </button>
  );
}
