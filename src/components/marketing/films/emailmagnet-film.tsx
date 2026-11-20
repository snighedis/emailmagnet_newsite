"use client";

import type { CSSProperties } from "react";
import {
  Browser,
  Popup,
  Sheet,
  brightside,
  brightsideTab,
  reviewedRows,
} from "@/components/marketing/emailmagnet-ui";
import { FilmFrame } from "@/components/marketing/films/film-frame";

/**
 * EmailMagnet's story as a short loop, built from the same HTML pieces as the
 * page's static pictures (emailmagnet-ui.tsx, true to the live package): a
 * practice's contact page, its addresses lit one by one, a click on the
 * extension, the popup with seven addresses, five of them kept, CSV, the file.
 * The steps are in globals.css (.emfilm); the frame is shared (film-frame.tsx).
 */

/** How long each step holds, in ms. Step 0 is the page at rest. */
const STEPS = [1500, 1500, 700, 1500, 1900, 650, 3200] as const;

const kept = reviewedRows.filter((row) => row.selected);

export function EmailMagnetFilm() {
  const hit = (text: string, i: number, asLink = false) => (
    <span className={asLink ? "emui-link emfilm-hit" : "emfilm-hit"} style={{ "--i": i } as CSSProperties}>
      {text}
    </span>
  );

  return (
    <FilmFrame
      steps={STEPS}
      className="emui emfilm"
      label="EmailMagnet at work: on a dental practice's contact page the extension finds 7 emails, five are kept, and they are exported to a CSV file with the columns Email Address, Confidence Level, Confidence Score and Sources."
    >
      <Browser
        tabs={[brightsideTab, { title: "Dentists near Leeds | Directory", letter: "D", colour: "#475569" }]}
        active={0}
        url={`${brightside}/contact`}
        page={
          <>
            <p className="emui-page-title">Contact us</p>
            <p>Write to the right desk and we answer within one working day.</p>
            <dl className="emui-desks">
              <dt>Front desk</dt>
              <dd>{hit(`info@${brightside}`, 0, true)}</dd>
              <dt>Appointments</dt>
              <dd>{hit(`appointments@${brightside}`, 1, true)}</dd>
              <dt>Billing</dt>
              <dd>{hit(`billing@${brightside}`, 2, true)}</dd>
              <dt>Careers</dt>
              <dd>{hit(`careers@${brightside}`, 3, true)}</dd>
            </dl>
            <p>
              Dr. Emma Hartwell, lead dentist: {hit(`dr.hartwell@${brightside}`, 4)}. Practice manager:{" "}
              {hit(`manager@${brightside}`, 5)}. Press and partnerships: {hit(`press@${brightside}`, 6)}.
            </p>
          </>
        }
        popup={
          <div className="emfilm-popup">
            <Popup count={7} rows={reviewedRows} domain={brightside} listHeight={284} animated />
            <Sheet rows={kept} className="emfilm-sheet" />
          </div>
        }
      />
    </FilmFrame>
  );
}
