"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { X } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
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

const categoryCopy = [
  {
    key: "necessary" as const,
    title: "Strictly necessary",
    description:
      "Required for the site to work and to remember your cookie choice. Always on.",
    locked: true,
  },
  {
    key: "analytics" as const,
    title: "Analytics",
    description:
      "Google Analytics and privacy-friendly usage metrics that help us improve the site.",
    locked: false,
  },
  {
    key: "marketing" as const,
    title: "Marketing",
    description:
      "Google Ads tags used to measure campaign conversions. Off unless you allow them.",
    locked: false,
  },
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
        checked ? "bg-brand" : "bg-slate-300",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      )}
    >
      <span
        className={cn(
          "inline-block h-5 w-5 transform rounded-full bg-white shadow transition",
          checked ? "translate-x-[22px]" : "translate-x-0.5",
        )}
      />
    </button>
  );
}

export function CookieBanner() {
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
  const isPreferences = panelOpen;
  const visible = panelOpen || !hasConsent;
  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className={cn(
        "fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)]",
        isPreferences ? "sm:max-w-lg" : "sm:max-w-md",
      )}
    >
      <div className="shadow-soft-lg rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-base font-semibold text-slate-950">
            {isPreferences ? "Cookie preferences" : "We value your privacy"}
          </h2>
          <button
            type="button"
            onClick={rejectAll}
            className="flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:text-slate-600"
            aria-label="Reject non-essential cookies and close"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {!isPreferences ? (
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We use strictly necessary cookies to run this site, and, only with your consent,
            analytics and marketing cookies. You can accept, reject, or choose per category. Read
            our{" "}
            <Link href="/cookies" className="text-eyebrow font-medium hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        ) : (
          <div className="mt-3 space-y-3">
            {categoryCopy.map((category) => {
              const checked =
                category.key === "necessary"
                  ? true
                  : category.key === "analytics"
                    ? analytics
                    : marketing;
              return (
                <div
                  key={category.key}
                  className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{category.title}</p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-600">
                      {category.description}
                    </p>
                  </div>
                  <Toggle
                    label={category.title}
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
            size="sm"
            className="flex-1 bg-slate-900 text-white hover:bg-slate-800"
          >
            Reject all
          </Button>
          {isPreferences ? (
            <Button onClick={savePreferences} size="sm" variant="outline" className="flex-1">
              Save choices
            </Button>
          ) : null}
          <Button
            onClick={acceptAll}
            size="sm"
            className="bg-brand hover:bg-brand-strong flex-1 text-white"
          >
            Accept all
          </Button>
        </div>

        {!isPreferences ? (
          <button
            type="button"
            onClick={openPanel}
            className="mt-3 text-xs font-medium text-slate-500 underline underline-offset-4 hover:text-slate-700"
          >
            Manage preferences
          </button>
        ) : null}
      </div>
    </div>
  );
}
