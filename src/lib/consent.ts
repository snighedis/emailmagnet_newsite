/**
 * GDPR / ePrivacy cookie-consent state, shared by the banner and the analytics
 * gate. Consent is granular (analytics vs marketing), versioned, time-bounded,
 * and stored only after an explicit choice — nothing non-essential runs before.
 */

export const CONSENT_VERSION = 2;

const STORAGE_KEY = "cookie-consent";

/** Fired when the stored choice changes, so the analytics gate re-evaluates. */
export const CONSENT_CHANGE_EVENT = "cookie-consent-change";

/** Fired by the footer "Cookie preferences" control to reopen the panel. */
export const OPEN_PREFERENCES_EVENT = "cookie-preferences-open";

/**
 * Re-ask for consent after this long (Garante guidance: don't nag for at least
 * 6 months, and refresh periodically). 180 days strikes that balance.
 */
const MAX_AGE_DAYS = 180;

export type ConsentCategories = {
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = ConsentCategories & {
  version: number;
  timestamp: number;
};

/**
 * Returns the stored consent, or null when none exists, the schema version has
 * changed, or it has expired — in every "null" case the banner must reappear.
 */
export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (typeof parsed.timestamp !== "number") return null;

    const ageMs = Date.now() - parsed.timestamp;
    if (ageMs < 0 || ageMs > MAX_AGE_DAYS * 24 * 60 * 60 * 1000) return null;

    return {
      version: CONSENT_VERSION,
      timestamp: parsed.timestamp,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
    };
  } catch {
    return null;
  }
}

export function writeConsent(categories: ConsentCategories): void {
  if (typeof window === "undefined") return;

  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    analytics: categories.analytics === true,
    marketing: categories.marketing === true,
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

/**
 * Stable string snapshot for useSyncExternalStore: "" when undecided, otherwise
 * two flags like "10" (analytics on, marketing off). Same input → same string,
 * so React doesn't loop.
 */
export function getConsentSnapshot(): string {
  const consent = readConsent();
  if (!consent) return "";
  return `${consent.analytics ? "1" : "0"}${consent.marketing ? "1" : "0"}`;
}

export function getServerConsentSnapshot(): string {
  return "";
}

export function subscribeConsent(onChange: () => void): () => void {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Reopen the preferences panel — the always-available withdrawal entry point. */
export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
