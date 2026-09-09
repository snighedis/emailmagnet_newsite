import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tab Volume Control for Chrome",
  description:
    "Volume Control PRO is a tab volume control extension for Chrome: give each tab its own audio level, mute the loud one, and boost the quiet one up to 600%.",
  path: "/volume-control-pro/tab-volume-control",
});

export default function TabVolumeControlPage() {
  return (
    <MoneyPage
      eyebrow="Volume Control PRO"
      title="Tab volume control for Chrome, one level per tab"
      answer="Volume Control PRO is a Dentoku Dev Chrome extension that controls volume per tab. Instead of one volume for the whole browser, each tab gets its own level from the extension popup, and quiet tabs can be amplified up to 600%."
      bullets={[
        "Turn down a loud tab without turning down the quiet one.",
        "Amplify a single quiet tab up to 600% and leave the rest alone.",
        "Adjust the tab you are listening to without leaving the page.",
        "Balance a call in one tab against music in another.",
      ]}
      table={[
        {
          intent: "tab volume control extension",
          fit: "Volume Control PRO",
          page: "/volume-control-pro",
        },
        {
          intent: "volume control extension for Chrome",
          fit: "Per-site volume control",
          page: "/volume-control-pro/chrome-volume-control-extension",
        },
        {
          intent: "make a quiet tab louder",
          fit: "Amplification up to 600%",
          page: "/volume-control-pro/chrome-volume-booster-600",
        },
      ]}
      sections={[
        {
          title: "Why per-tab control is the thing people want",
          body: "The usual problem is not that the browser is too loud or too quiet, it is that two tabs disagree. A meeting in one tab and a video in another need different levels, and the system slider cannot tell them apart. Per-tab control is what actually solves it.",
        },
        {
          title: "How it works while you browse",
          body: "Open the extension on the tab you want to change, move the slider, and the change applies immediately to that tab. The level is tied to the site, so it survives a reload and comes back the next time you open it.",
        },
        {
          title: "Where boosting has limits",
          body: "Amplification works well on YouTube and most HTML5 media sites. Some players restrict how much an extension can change playback, and certain Spotify Web playback scenarios are limited this way. When a site limits boosting, the extension falls back gracefully rather than breaking playback.",
        },
        {
          title: "Browser tabs only, by design",
          body: "Volume Control PRO works inside Chrome tabs. It does not touch your system volume, other applications, or your audio device, and it is not an equalizer or a recorder. Its store disclosure states the developer does not collect or use your data.",
        },
      ]}
      ctaHref="/volume-control-pro"
      ctaLabel="Open Volume Control PRO"
      currentHref="/volume-control-pro/tab-volume-control"
    />
  );
}
