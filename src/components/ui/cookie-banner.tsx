"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { MenuClose } from "@/components/ui/icons";
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
  clearTrackingCookies,
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
          "inline-block h-5 w-5 transform rounded-full bg-white transition",
          checked ? "translate-x-[22px]" : "translate-x-0.5",
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
      clearTrackingCookies();
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
        // Phone: a compact bar on the bottom edge; wider screens: a card in the corner.
        "fixed inset-x-0 bottom-0 z-50 w-full sm:inset-x-auto sm:bottom-4 sm:left-4 sm:w-[calc(100%-2rem)]",
        // Enters from the bottom edge it is anchored to, and leaves the same way.
        "transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] starting:translate-y-4 starting:opacity-0",
        "motion-reduce:translate-y-0 motion-reduce:starting:translate-y-0",
        exiting && "translate-y-4 opacity-0 duration-200 ease-in motion-reduce:translate-y-0",
        isPreferences ? "sm:max-w-lg" : "sm:max-w-md",
      )}
    >
      {/* Re-keyed when switching to the preferences, so the new content fades in. */}
      <div
        key={isPreferences ? "preferences" : "intro"}
        className="shadow-soft-lg animate-in fade-in-0 bg-white px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] duration-150 sm:p-5"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-stone-950">
            {isPreferences ? copy.preferencesTitle : copy.title}
          </h2>
          <button
            type="button"
            onClick={rejectAll}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-stone-500 hover:text-stone-950"
            aria-label={copy.closeAria}
          >
            <MenuClose className="size-5" />
          </button>
        </div>

        {!isPreferences ? (
          <p className="text-[14px] leading-[1.45] text-stone-700">
            {copy.intro.before}{" "}
            <LocaleLink href="/cookies" className="text-link text-ink font-medium">
              {copy.intro.link}
            </LocaleLink>
            {copy.intro.after}{" "}
            {/* Garante guidelines 2021, 7.1: say what closing with the X does */}
            {copy.closeNote}{" "}
            <button
              type="button"
              onClick={openPanel}
              className="text-link text-ink inline font-medium"
            >
              {copy.managePreferences}
            </button>
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
                  className="bg-surface-muted flex items-start justify-between gap-4 p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{text.title}</p>
                    <p className="mt-0.5 text-[13px] leading-5 text-stone-600">
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
        <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
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

      </div>
    </div>
  );
}
