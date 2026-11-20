import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

/*
 * Corrected 19 Nov 2026: the published Volume Control PRO 1.2.1 keeps one
 * stored level (see the comparison guide's note); the slider changes the tab
 * you are on, other open tabs keep their level until they reload, and new
 * pages start from the last level. It does not keep a level per tab or per
 * site, so this page says what it does and names the extensions that do.
 */
export const metadata = createMetadata({
  title: "Tab Volume Control for Chrome",
  description:
    "Change the volume of the Chrome tab you are on, up to 600%, with Volume Control PRO: what changes per tab, what does not, and when another extension fits better.",
  path: "/volume-control-pro/tab-volume-control",
});

export default function TabVolumeControlPage() {
  return (
    <MoneyPage
      eyebrow="Volume Control PRO"
      title="Tab volume control for Chrome, explained"
      answer="Volume Control PRO changes the volume of the Chrome tab you are on, from 0% to 600%, the moment you move its slider. It keeps one level, not one per tab: other open tabs stay where they were until they reload, and new pages start from the last level you set."
      bullets={[
        "Turn up the quiet tab you are watching, past 100%.",
        "Lower a loud tab while you are on it, without touching the system volume.",
        "Lift speech in a call or lecture with the free Voice mode.",
        "See the current level on the icon: orange boosted, blue lowered.",
      ]}
      table={[
        {
          intent: "tab volume control extension",
          fit: "Volume Control PRO",
          page: "/volume-control-pro",
        },
        {
          intent: "compare Chrome volume extensions",
          fit: "Three extensions side by side",
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
          title: "What changes per tab",
          body: "The slider acts on the tab you are on, right away. If you then switch to another open tab, it keeps the level it had, so for the length of a session you can have a call louder than the video next to it. A reload, or a page you open next, starts from the last level you set.",
        },
        {
          title: "When another extension fits better",
          body: "If you want every tab to keep its own level permanently, or a level remembered for each site, Volume Control PRO does not do that today. Volume Master and Volume Control for Google Chrome keep a separate level per tab, and the second also remembers one per site. Our comparison puts the three side by side.",
        },
        {
          title: "Where boosting has limits",
          body: "Amplification works well on YouTube and most HTML5 media sites. Some protected players restrict how much an extension can change playback, and certain Spotify Web playback scenarios are limited this way. When a site limits boosting, the extension falls back gracefully rather than breaking playback.",
        },
        {
          title: "Browser tabs only, by design",
          body: "Volume Control PRO works inside Chrome tabs. It does not touch your system volume, other applications or your audio device. Its store listing states the developer will not collect or use your data.",
        },
      ]}
      ctaHref="/volume-control-pro/chrome-volume-control-extension"
      ctaLabel="Compare Chrome volume extensions"
      currentHref="/volume-control-pro/tab-volume-control"
    />
  );
}
