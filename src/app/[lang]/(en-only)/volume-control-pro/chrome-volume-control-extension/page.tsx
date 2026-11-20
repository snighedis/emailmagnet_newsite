import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

/*
 * Rewritten 19 Nov 2026 (OpenSEO audit a7f7d2a8: #13 and #17 in the US for
 * "volume control extension for chrome", a SERP of store listings and
 * roundups, so searchers want to compare).
 *
 * Claims come from the published package, Volume Control PRO 1.2.1 (the
 * version live on the Chrome Web Store, updated 20 Mar 2026): one stored
 * volume level (chrome.storage.local "volume"), applied to the active tab when
 * the slider moves and to pages as they load; Default, Voice and Bass modes;
 * a badge with the level; no tabCapture permission; Audio Studio PRO at €9.99
 * lifetime with a 10-band equalizer, Smart Save and Night Mode. There is no
 * per-site memory and no persistent per-tab level: never claim either until a
 * version with them is live. Competitor rows come from their store listings,
 * checked on 19 Nov 2026.
 */
export const metadata = createMetadata({
  title: "Chrome Volume Control Extension: 3 Compared",
  description:
    "Volume Control PRO, Volume Master and Volume Control for Google Chrome side by side: boost limit, per-tab levels, sound modes, price and size, from their listings.",
  path: "/volume-control-pro/chrome-volume-control-extension",
});

export default function ChromeVolumeControlExtensionPage() {
  return (
    <MoneyPage
      eyebrow="Volume Control PRO"
      title="Chrome volume control extensions, compared"
      answer="Three popular Chrome volume control extensions all boost a tab up to 600%. Volume Master and Volume Control for Google Chrome keep a separate level for each tab. Volume Control PRO, made by Dentoku Dev, keeps one level and adds free Voice and Bass modes, an optional 10-band equalizer, and boosts without capturing the tab."
      bullets={[
        "Quiet videos, webinars and calls that need more than 100%.",
        "Dialogue that gets lost in the mix: the free Voice mode lifts speech.",
        "Music that needs body: Bass mode, or the 10-band equalizer in Audio Studio PRO.",
        "Full-screen video without the capture indicator that tab-capture boosters trigger.",
      ]}
      table={[
        {
          intent: "Chrome volume control extension",
          fit: "Volume Control PRO",
          page: "/volume-control-pro",
        },
        {
          intent: "control the volume of one tab",
          fit: "What changes per tab, and what does not",
          page: "/volume-control-pro/tab-volume-control",
        },
        {
          intent: "boost volume above 100%",
          fit: "Amplification up to 600%",
          page: "/volume-control-pro/chrome-volume-booster-600",
        },
      ]}
      comparison={{
        title: "Three volume extensions, side by side",
        intro:
          "All three are free to install and boost up to 600%. They differ in how they keep levels, how they boost, and what else they add. Where the others do something ours does not, the table says so.",
        columns: ["", "Volume Control PRO", "Volume Master", "Volume Control for Google Chrome"],
        rows: [
          ["Maximum boost", "600%", "600%", "600%"],
          [
            "Separate level per tab",
            "No: one level; the slider changes the tab you are on",
            "Yes, for any tab",
            "Yes, each tab its own level",
          ],
          ["Remembers a level per site", "No", "Not stated", "Yes, since version 4"],
          [
            "Sound modes",
            "Default, Voice, Bass; 10-band equalizer in Audio Studio PRO",
            "Voice boost, bass boost",
            "Presets from 50% to 600%, live visualizer",
          ],
          [
            "How it boosts",
            "Inside the page, no tab capture",
            "Tab capture (Chrome shows its capture icon)",
            "Captures the active tab",
          ],
          ["Price", "Free; Audio Studio PRO €9.99 once", "Free, no ads", "Free, no premium tier"],
          ["Size", "44 KiB", "91 KiB", "125 KiB"],
          ["Languages", "7", "54", "40+"],
        ],
        note: "From each extension's Chrome Web Store listing and, for Volume Control PRO, its published version 1.2.1, checked on 19 November 2026. All three listings state the developer will not collect or use your data. Listings change: check them before you install.",
      }}
      sections={[
        {
          title: "Which one to pick",
          body: "If you want a different level in every tab, kept between visits, Volume Control for Google Chrome does both, and Volume Master keeps a level per tab. If you want the lightest of the three, modes for speech and bass, and no capture indicator while you watch full screen, Volume Control PRO is built for that.",
        },
        {
          title: "How Volume Control PRO handles volume",
          body: "The slider changes the tab you are on, from 0% to 600%, the moment you move it. The extension keeps one level: other open tabs stay where they were until they reload, and pages you open next start from the last level you set. The icon shows the level, orange when boosted and blue when lowered.",
        },
        {
          title: "Why it does not capture the tab",
          body: "Most boosters capture the tab's audio, and while they do Chrome shows its capture icon and will not go fully full screen. Volume Control PRO works on the page's own audio instead, so neither happens. The trade-off: some protected players, such as certain Spotify Web playback, limit boosting, and the extension tells you when that happens.",
        },
        {
          title: "Free and Audio Studio PRO",
          body: "Boosting up to 600% and the Default, Voice and Bass modes are free, with no ads and no subscription. Audio Studio PRO, a one-time €9.99 licence, adds a 10-band equalizer with presets, plus Smart Save and Night Mode.",
        },
        {
          title: "Install size, languages and privacy",
          body: "The extension is about 44 KB and speaks English, German, Spanish, French, Italian, Japanese and Korean. It controls audio inside Chrome tabs only, not your system volume or other apps, and its store listing states the developer will not collect or use your data.",
        },
      ]}
      ctaHref="/volume-control-pro"
      ctaLabel="Open Volume Control PRO"
      currentHref="/volume-control-pro/chrome-volume-control-extension"
    />
  );
}
