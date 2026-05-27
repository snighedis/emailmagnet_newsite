"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ChatbaseWidget } from "@/components/analytics/chatbase-widget";

type AnalyticsGateProps = {
  gaId: string;
  adsId?: string;
};

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

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

export function AnalyticsGate({ gaId, adsId }: AnalyticsGateProps) {
  const hasConsent = useSyncExternalStore(
    subscribeToConsentChanges,
    hasAnalyticsConsent,
    () => false,
  );
  const hasConfiguredAdsRef = useRef(false);

  useEffect(() => {
    if (!hasConsent || !adsId || hasConfiguredAdsRef.current) return;
    if (typeof window.gtag !== "function") return;

    window.gtag("config", adsId);
    hasConfiguredAdsRef.current = true;
  }, [hasConsent, adsId]);

  if (!hasConsent) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId={gaId} />
      <ChatbaseWidget />
    </>
  );
}
