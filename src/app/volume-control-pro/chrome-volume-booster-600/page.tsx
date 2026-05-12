import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Chrome Volume Booster up to 600%",
  description: "Volume Control PRO is a Chrome volume booster for increasing quiet tab audio up to 600%.",
  path: "/volume-control-pro/chrome-volume-booster-600",
});

export default function ChromeVolumeBoosterPage() {
  return (
    <MoneyPage
      eyebrow="Volume Control PRO"
      title="Chrome volume booster up to 600% for quiet browser audio"
      answer="Volume Control PRO is a Dentoku Dev Chrome extension for boosting quiet tab audio, controlling browser volume quickly, and remembering per-site volume preferences."
      bullets={[
        "Boost quiet videos, webinars, meetings, and streams.",
        "Control audio from the Chrome extension popup.",
        "Use per-site memory for repeated listening sessions.",
        "Avoid changing system-wide volume for one quiet tab.",
      ]}
      table={[
        { intent: "Chrome volume booster 600%", fit: "Volume Control PRO", page: "/volume-control-pro" },
        { intent: "increase tab volume Chrome", fit: "Tab-level volume control", page: "/volume-control-pro" },
        { intent: "quiet YouTube video booster", fit: "Browser audio amplification", page: "/volume-control-pro" },
      ]}
      ctaHref="/volume-control-pro"
      ctaLabel="Open Volume Control PRO"
    />
  );
}
