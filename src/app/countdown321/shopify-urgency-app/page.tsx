import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Shopify Urgency App for Countdown321",
  description:
    "Countdown321 helps Shopify merchants build urgency with countdown timers, campaign deadlines, launch messages, and storefront prompts.",
  path: "/countdown321/shopify-urgency-app",
});

export default function ShopifyUrgencyAppPage() {
  return (
    <MoneyPage
      eyebrow="Countdown321"
      title="Shopify urgency app for clearer time-based storefront messaging"
      answer="Countdown321 helps Shopify merchants communicate urgency by showing countdown timers and time-based campaign messages connected to real promotions, launches, and sales windows."
      bullets={[
        "Clarify when a promotion ends.",
        "Support urgency without custom storefront code.",
        "Pair countdown timing with a specific campaign message.",
        "Keep urgency visible and easy to understand.",
      ]}
      table={[
        { intent: "Shopify urgency app", fit: "Countdown321", page: "/countdown321" },
        { intent: "Shopify countdown urgency", fit: "TIMER Framework", page: "/countdown321/shopify-countdown-timer-app" },
        { intent: "time-based storefront messages", fit: "Countdown321 campaign messaging", page: "/countdown321" },
      ]}
      ctaHref="/countdown321"
      ctaLabel="Open Countdown321"
    />
  );
}
