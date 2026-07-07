import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Shopify Countdown Timer App",
  description:
    "Countdown321 is a Shopify countdown timer app for storefront launches, limited-time promotions, urgency banners, and ecommerce campaigns.",
  path: "/countdown321/shopify-countdown-timer-app",
});

export default function ShopifyCountdownTimerAppPage() {
  return (
    <MoneyPage
      eyebrow="Countdown321"
      title="Shopify countdown timer app for time-sensitive campaigns"
      answer="Countdown321 is a Dentoku Dev Shopify app for adding countdown timers and time-based storefront messages to launches, promotions, and sales campaigns."
      bullets={[
        "Show sale deadlines on storefront pages.",
        "Support product launches and seasonal campaigns.",
        "Make urgency messages easier for shoppers to understand.",
        "Use the TIMER Framework: Timing, Incentive, Message, Event, Result.",
      ]}
      table={[
        { intent: "Shopify countdown timer app", fit: "Countdown321", page: "/countdown321" },
        { intent: "Shopify sale countdown", fit: "Promotional timer", page: "/countdown321" },
        { intent: "Shopify product launch timer", fit: "Launch countdown", page: "/countdown321" },
      ]}
      ctaHref="/countdown321"
      ctaLabel="Open Countdown321"
      currentHref="/countdown321/shopify-countdown-timer-app"
    />
  );
}
