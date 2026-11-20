"use client";

import "./volume-control-film.css";
import { Browser, LecturePlayer, Popup, type MeterBar } from "@/components/marketing/volume-control-ui";
import { FilmFrame } from "@/components/marketing/films/film-frame";

/**
 * Volume Control PRO's story as a short loop, built from the HTML pieces in
 * volume-control-ui.tsx (true to the 1.2.1 package): a lecture playing quietly
 * in a Chrome tab, a click on the toolbar icon, the popup, the slider from 100%
 * to 300%, the orange 300 badge, Voice mode, the tab's level rising.
 * The steps are in volume-control-film.css (.vcfilm); the frame is shared.
 */

/** How long each step holds, in ms. Step 0 is the quiet tab. */
const STEPS = [1600, 1300, 1800, 1100, 3800] as const;

/** The readout while the thumb travels: popup.js prints the value on every input. */
const readouts = ["100%", "150%", "200%", "250%", "300%"];

const meter: MeterBar[] = [
  { quiet: 0.3, boosted: 0.62, voice: 0.66 },
  { quiet: 0.44, boosted: 0.84, voice: 0.9 },
  { quiet: 0.36, boosted: 0.72, voice: 0.84 },
  { quiet: 0.5, boosted: 0.94, voice: 1 },
  { quiet: 0.34, boosted: 0.7, voice: 0.8 },
  { quiet: 0.26, boosted: 0.5, voice: 0.56 },
];

export function VolumeControlFilm() {
  return (
    <FilmFrame
      steps={STEPS}
      className="vcui vcfilm"
      label="Volume Control PRO at work: a lecture plays quietly in a Chrome tab, a click on the toolbar icon opens the popup, and the slider goes from 100% to 300%. The icon's badge shows 300 in orange, Voice mode is switched on, and the tab's sound level rises."
    >
      <Browser
        badge="300"
        page={<LecturePlayer meter={meter} />}
        popup={
          <div className="vcfilm-popup">
            <Popup readouts={readouts} from={100} to={300} mode="default" />
          </div>
        }
      />
    </FilmFrame>
  );
}
