"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ChatbaseWidget } from "@/components/analytics/chatbase-widget";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  subscribeConsent,
} from "@/lib/consent";

type AnalyticsGateProps = {
  gaId: string;
  adsId?: string;
};

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export function AnalyticsGate({ gaId, adsId }: AnalyticsGateProps) {
  // useSyncExternalStore is SSR-safe: it serves the server snapshot ("") during
  // hydration and swaps to the real localStorage value on the client, so no
  // tracking renders until an explicit consent choice exists.
  const snapshot = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const analyticsConsent = snapshot[0] === "1";
  const marketingConsent = snapshot[1] === "1";
  const tracking = analyticsConsent || marketingConsent;

  // Outbound conversion tracking — only once gtag exists (i.e. some consent).
  useEffect(() => {
    if (!tracking) return;

    const handleOutboundClick = (event: MouseEvent) => {
      if (typeof window.gtag !== "function") return;

      const target = event.target as HTMLElement;
      const anchor = target.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      if (href.includes("chromewebstore.google.com")) {
        window.gtag("event", "click_chrome_store", {
          event_category: "engagement",
          event_label: href,
          value: 1.0,
        });
      }

      if (href.includes("buy.stripe.com")) {
        window.gtag("event", "click_stripe_checkout", {
          event_category: "conversion",
          event_label: href,
          value: 19.0,
          currency: "USD",
        });
      }

      // ClickPilot AI PRO checks out on Gumroad ($19 one-time).
      if (href.includes("gumroad.com")) {
        window.gtag("event", "click_gumroad_checkout", {
          event_category: "conversion",
          event_label: href,
          value: 19.0,
          currency: "USD",
        });
      }

      // Countdown321 converts off-site on the Shopify App Store listing.
      if (href.includes("apps.shopify.com")) {
        window.gtag("event", "click_shopify_listing", {
          event_category: "engagement",
          event_label: href,
        });
      }
    };

    document.addEventListener("click", handleOutboundClick);
    return () => document.removeEventListener("click", handleOutboundClick);
  }, [tracking]);

  if (!tracking) return null;

  // One gtag.js load covers both products; each is configured only with its own
  // consent. GA runs with anonymised IP; Google Ads only with marketing consent.
  const containerId = analyticsConsent ? gaId : adsId;
  const initScript = [
    "window.dataLayer = window.dataLayer || [];",
    "function gtag(){dataLayer.push(arguments);}",
    "window.gtag = window.gtag || gtag;",
    "gtag('js', new Date());",
    analyticsConsent ? `gtag('config', '${gaId}', { anonymize_ip: true });` : "",
    marketingConsent && adsId ? `gtag('config', '${adsId}');` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      {containerId ? (
        <>
          <Script
            id="gtag-js"
            src={`https://www.googletagmanager.com/gtag/js?id=${containerId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {initScript}
          </Script>
        </>
      ) : null}
      {analyticsConsent ? (
        <>
          <Analytics />
          <SpeedInsights />
          {/* EU AI Act Art. 50(1) disclosure for the support chat lives in the
              Chatbase bot's opening message, set in the Chatbase dashboard. It is
              shown as the launcher teaser and as the first message in the chat, so
              it is present at the moment of interaction on every visit. A second
              site-rendered notice used to sit here; it was removed because it
              duplicated that text and collided with the teaser on screen. */}
          <ChatbaseWidget />
        </>
      ) : null}
    </>
  );
}
