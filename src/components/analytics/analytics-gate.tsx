"use client";

import { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

type AnalyticsGateProps = {
  gaId: string;
};

const consentKey = "cookie-consent";
const consentEvent = "cookie-consent-change";

function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;

  return window.localStorage.getItem(consentKey) === "accepted";
}

function subscribeToConsentChanges(onStoreChange: () => void) {
  window.addEventListener(consentEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(consentEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function AnalyticsGate({ gaId }: AnalyticsGateProps) {
  const hasConsent = useSyncExternalStore(
    subscribeToConsentChanges,
    hasAnalyticsConsent,
    () => false,
  );

  if (!hasConsent) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId={gaId} />
    </>
  );
}
