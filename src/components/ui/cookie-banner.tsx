"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { X } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/i18n/locale-context";
import { LocaleLink } from "@/i18n/locale-link";
import { cn } from "@/lib/utils";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  OPEN_PREFERENCES_EVENT,
  readConsent,
  subscribeConsent,
  writeConsent,
  type ConsentCategories,
} from "@/lib/consent";

const categoryKeys = [
  { key: "necessary" as const, locked: true },
  { key: "analytics" as const, locked: false },
  { key: "marketing" as const, locked: false },
];

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition",
        checked ? "bg-brand" : "bg-stone-300",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      )}
    >
      <span
        className={cn(
          "inline-block h-5 w-5 transform rounded-full bg-white shadow transition",
          checked ? "transtone-x-[22px]" : "transtone-x-0.5",
        )}
      />
    </button>
  );
}

/** Exit transition length; matches duration-200 on the dialog. */
const EXIT_MS = 200;

export function CookieBanner() {
  const { cookieBanner: copy } = useCopy().common;
  // SSR-safe source of truth: "" means no (valid, unexpired) stored choice yet.
  const snapshot = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const hasConsent = snapshot !== "";

  // When set, the granular panel is open regardless of stored consent — this is
  // how "Manage preferences" and the footer withdrawal link reopen it.
  const [panelOpen, setPanelOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  // Set only by a choice made in the banner: it stays mounted for the exit
  // transition, showing what it showed when the choice was made. Not driven by
  // `visible`, so a visitor who already chose never sees it fade out on load.
  const [leaving, setLeaving] = useState<null | { preferences: boolean }>(null);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => setLeaving(null), EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  useEffect(() => {
    const openPreferences = () => {
      const consent = readConsent();
      setAnalytics(consent?.analytics ?? false);
      setMarketing(consent?.marketing ?? false);
      setPanelOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
  }, []);

  const apply = (next: ConsentCategories) => {
    const previous = readConsent();
    setLeaving({ preferences: panelOpen });
    writeConsent(next);
    setPanelOpen(false);

    // If a previously granted category was switched off, reload so already-loaded
    // scripts actually stop — withdrawal must take real effect.
    const downgraded =
      (previous?.analytics && !next.analytics) ||
      (previous?.marketing && !next.marketing);
    if (downgraded) {
      window.location.reload();
    }
  };

  const acceptAll = () => apply({ analytics: true, marketing: true });
  const rejectAll = () => apply({ analytics: false, marketing: false });
  const savePreferences = () => apply({ analytics, marketing });

  const openPanel = () => {
    const consent = readConsent();
    setAnalytics(consent?.analytics ?? false);
    setMarketing(consent?.marketing ?? false);
    setPanelOpen(true);
  };

  // Show the panel when reopened; otherwise the first-layer banner only when no
  // valid choice is stored. Nothing shows once a choice exists.
  const visible = panelOpen || !hasConsent;
  const exiting = !visible && leaving !== null;
  const isPreferences = exiting ? leaving.preferences : panelOpen;
  if (!visible && !exiting) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={copy.dialogAria}
      aria-hidden={exiting || undefined}
      inert={exiting || undefined}
      className={cn(
        "fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)]",
        // Enters from the bottom edge it is anchored to, and leaves the same way.
        "transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] starting:transtone-y-4 starting:opacity-0",
        "motion-reduce:transtone-y-0 motion-reduce:starting:transtone-y-0",
        exiting && "transtone-y-4 opacity-0 duration-200 ease-in motion-reduce:transtone-y-0",
        isPreferences ? "sm:max-w-lg" : "sm:max-w-md",
      )}
    >
      {/* Re-keyed when switching to the preferences, so the new content fades in. */}
      <div
        key={isPreferences ? "preferences" : "intro"}
        className="shadow-soft-lg animate-in fade-in-0 rounded-xl border border-stone-200 bg-white p-5 duration-150"
      >
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-base font-semibold text-stone-950">
            {isPreferences ? copy.preferencesTitle : copy.title}
          </h2>
          <button
            type="button"
            onClick={rejectAll}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-stone-500 hover:bg-stone-100 hover:text-stone-700"
            aria-label={copy.closeAria}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {!isPreferences ? (
          <p className="mt-2 text-sm leading-6 text-stone-600">
            {copy.intro.before}{" "}
            <LocaleLink href="/cookies" className="text-eyebrow font-medium hover:underline">
              {copy.intro.link}
            </LocaleLink>
            {copy.intro.after}
          </p>
        ) : (
          <div className="mt-3 space-y-3">
            {categoryKeys.map((category) => {
              const text = copy.categories[category.key];
              const checked =
                category.key === "necessary"
                  ? true
                  : category.key === "analytics"
                    ? analytics
                    : marketing;
              return (
                <div
                  key={category.key}
                  className="flex items-start justify-between gap-4 rounded-lg border border-stone-200 bg-stone-50 p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{text.title}</p>
                    <p className="mt-0.5 text-xs leading-5 text-stone-600">
                      {text.description}
                    </p>
                  </div>
                  <Toggle
                    label={text.title}
                    checked={checked}
                    disabled={category.locked}
                    onChange={(next) =>
                      category.key === "analytics" ? setAnalytics(next) : setMarketing(next)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Equal-prominence Accept / Reject (no dark patterns). */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            onClick={rejectAll}
            size="lg"
            variant="secondary"
            className="flex-1"
          >
            {copy.rejectAll}
          </Button>
          {isPreferences ? (
            <Button onClick={savePreferences} size="lg" variant="outline" className="flex-1">
              {copy.saveChoices}
            </Button>
          ) : null}
          <Button
            onClick={acceptAll}
            size="lg"
            className="flex-1"
          >
            {copy.acceptAll}
          </Button>
        </div>

        {!isPreferences ? (
          <button
            type="button"
            onClick={openPanel}
            className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-stone-600 underline underline-offset-4 hover:text-stone-900"
          >
            {copy.managePreferences}
          </button>
        ) : null}
      </div>
    </div>
  );
}
