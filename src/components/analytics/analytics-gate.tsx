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

  // Global outbound click tracking for GA4 micro-conversions
  useEffect(() => {
    if (!hasConsent) return;

    const handleOutboundClick = (event: MouseEvent) => {
      if (typeof window.gtag !== "function") return;

      const target = event.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Track Chrome Web Store clicks
      if (href.includes("chromewebstore.google.com")) {
        window.gtag("event", "click_chrome_store", {
          event_category: "engagement",
          event_label: href,
          value: 1.0,
        });
      }

      // Track Stripe purchase clicks
      if (href.includes("buy.stripe.com")) {
        window.gtag("event", "click_stripe_checkout", {
          event_category: "conversion",
          event_label: href,
          value: 19.0,
          currency: "USD",
        });
      }
    };

    document.addEventListener("click", handleOutboundClick);
    return () => {
      document.removeEventListener("click", handleOutboundClick);
    };
  }, [hasConsent]);

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
