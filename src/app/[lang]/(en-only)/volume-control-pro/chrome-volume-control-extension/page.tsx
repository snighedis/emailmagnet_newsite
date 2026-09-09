import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Chrome Volume Control Extension",
  description:
    "Volume Control PRO is a Chrome volume control extension for setting audio levels per site, raising quiet tabs up to 600%, and keeping system volume untouched.",
  path: "/volume-control-pro/chrome-volume-control-extension",
});

export default function ChromeVolumeControlExtensionPage() {
  return (
    <MoneyPage
      eyebrow="Volume Control PRO"
      title="Chrome volume control extension with per-site audio memory"
      answer="Volume Control PRO is a Dentoku Dev volume control extension for Chrome. It gives every tab its own audio level from a single slider, remembers the level you picked for each site, and can raise quiet audio up to 600% without touching your system volume."
      bullets={[
        "Set one site loud and another quiet, then leave them that way.",
        "Raise quiet tutorials, webinars, and calls up to 600%.",
        "Keep system and other-app volume exactly as it was.",
        "Reopen a site later and find the level you already chose.",
      ]}
      table={[
        {
          intent: "Chrome volume control extension",
          fit: "Volume Control PRO",
          page: "/volume-control-pro",
        },
        {
          intent: "control volume of one tab",
          fit: "Per-tab volume control",
          page: "/volume-control-pro/tab-volume-control",
        },
        {
          intent: "boost volume above 100%",
          fit: "Amplification up to 600%",
          page: "/volume-control-pro/chrome-volume-booster-600",
        },
      ]}
      sections={[
        {
          title: "Volume control, not just a boost slider",
          body: "Chrome gives you one volume for everything, so a quiet lecture and a loud autoplay video share the same setting. Volume Control PRO adds the missing layer: a level per site, applied the moment you set it, remembered for the next visit.",
        },
        {
          title: "Why per-site memory matters",
          body: "Most listening is repeat listening. The sites you return to daily each have their own baseline loudness, so setting a level once per site removes the adjustment entirely. The extension stores that choice locally and reapplies it when you come back.",
        },
        {
          title: "What it does not change",
          body: "This is a browser extension, so it controls audio inside Chrome tabs only. It is not a system-wide equalizer and not an audio recorder. Your operating system volume, your other applications, and your audio device settings are left alone.",
        },
        {
          title: "Install size, languages, and privacy",
          body: "The extension is around 44 KB and is localized in English, German, Spanish, French, Italian, Japanese, and Korean. Its Chrome Web Store disclosure states the developer does not collect or use your data. It is free to install with no ads and no subscription, and an optional Audio Studio PRO upgrade unlocks the advanced audio tools for a one-time payment.",
        },
      ]}
      ctaHref="/volume-control-pro"
      ctaLabel="Open Volume Control PRO"
      currentHref="/volume-control-pro/chrome-volume-control-extension"
    />
  );
}
