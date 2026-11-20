/**
 * Volume Control PRO's popup and a Chrome tab around it, rebuilt in HTML from
 * the 1.2.1 package (popup.html, popup.js, background.js): its labels, its
 * colours, its 0% to 600% slider and its toolbar badge. Real popup sizes times
 * 0.8, so a page and the popup fit one column side by side. The styles are in
 * films/volume-control-film.css (prefix vcui-), under a `data-ui` root.
 *
 * Keep them true to the version live on the store. The extension keeps one
 * level (chrome.storage.local "volume") and applies it to the tab you are on:
 * nothing here may show a level remembered per site or two tabs at different
 * levels.
 */
import type { CSSProperties, ReactNode } from "react";

type Mode = "default" | "voice" | "bass";

/** The slider runs from 0 to 600 (popup.html, input#volumeSlider max="600"). */
const MAX = 600;

/** The invented lecture the tab plays. Neutral, no real institution. */
export const lecture = {
  tab: "Lecture 4: Entropy and Heat Engines",
  url: "learn.halverton-institute.org/thermodynamics/lecture-4",
  course: "Thermodynamics",
  title: "Entropy and heat engines",
  source: "Halverton Institute",
};

function Bars() {
  return (
    <svg viewBox="200 -880 560 800" aria-hidden>
      <path d="M200-160v-560h80v560h-80Zm160 0v-720h80v720h-80Zm160 0v-480h80v480h-80Zm160 0v-640h80v640h-80Z" />
    </svg>
  );
}

function Mic() {
  return (
    <svg viewBox="200 -880 560 800" aria-hidden>
      <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
    </svg>
  );
}

function Note() {
  return (
    <svg viewBox="200 -880 560 800" aria-hidden>
      <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
    </svg>
  );
}

const modes: { mode: Mode; label: string; icon: ReactNode }[] = [
  { mode: "default", label: "Default", icon: <Bars /> },
  { mode: "voice", label: "Voice", icon: <Mic /> },
  { mode: "bass", label: "Bass", icon: <Note /> },
];

const eqBands = ["32", "64", "125", "250", "500", "1k", "2k", "4k", "8k", "16k"];

/**
 * The popup, free version: the level, the slider, the three modes, the
 * Equalizer behind its Audio Studio PRO lock, and Reset Defaults. The
 * visualizer and the footer under it are left out.
 *
 * `readouts` are the numbers the level shows in turn (a film steps through
 * them; a still prints one). `from` and `to` are slider values: a film moves
 * the thumb and the fill from one to the other, a still shows `from`.
 */
export function Popup({ readouts, from, to = from, mode }: { readouts: string[]; from: number; to?: number; mode: Mode }) {
  const slider = { "--from": from / MAX, "--to": to / MAX } as CSSProperties;
  return (
    <div className="vcui-popup">
      <div className="vcui-card">
        <div className="vcui-head">
          <span className="vcui-title">Volume Control PRO</span>
          <span className="vcui-head-icons">
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg viewBox="0 -960 960 960" aria-hidden>
              <path d="M480-480q-17 0-28.5-11.5T440-520v-320q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v320q0 17-11.5 28.5T480-480Zm0 360q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-61 20-118.5T198-704q11-14 28-13.5t30 13.5q11 11 10 27t-11 30q-27 36-41 79t-14 88q0 117 81.5 198.5T480-200q117 0 198.5-81.5T760-480q0-46-13.5-89.5T704-649q-10-13-11-28.5t10-26.5q12-12 29-12.5t28 12.5q39 48 59.5 105T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Z" />
            </svg>
          </span>
        </div>

        <div className="vcui-volume">
          <span className="vcui-readout">
            {readouts.map((value, i) => (
              <span key={value} style={{ "--i": i } as CSSProperties}>
                {value}
              </span>
            ))}
          </span>
          <span className="vcui-volume-label">Current volume</span>
          <span className="vcui-slider" style={slider}>
            <span className="vcui-fill" />
            <span className="vcui-rail">
              <span className="vcui-mover">
                <span className="vcui-thumb" />
              </span>
            </span>
          </span>
          <span className="vcui-marks">
            <span>0%</span>
            <span>100%</span>
            <span>300%</span>
            <span>600%</span>
          </span>
        </div>

        <div className="vcui-modes">
          {modes.map((item) => (
            <span
              key={item.mode}
              data-mode={item.mode}
              className={item.mode === mode ? "vcui-mode vcui-mode-on" : "vcui-mode"}
            >
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>

        <div className="vcui-pro">
          <span className="vcui-pro-title">
            Equalizer <span className="vcui-pro-badge">PRO</span>
          </span>
          <span className="vcui-eq">
            {eqBands.map((band) => (
              <span key={band}>{band}</span>
            ))}
          </span>
          <span className="vcui-pro-lock">
            <span className="vcui-pro-message">Audio Studio PRO</span>
            <span className="vcui-pro-button">Unlock PRO Feature (€9.99)</span>{/* taste-skill-ignore: the popup's own label */}
          </span>
        </div>

        <span className="vcui-reset">
          <svg viewBox="0 0 20 20" aria-hidden>
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
          Reset Defaults
        </span>
      </div>
    </div>
  );
}

/**
 * The tab's level meter, one bar per entry. Each bar has three heights, as a
 * share of the meter: quiet, boosted and boosted with Voice (a film moves
 * through them; a still shows the first).
 */
export type MeterBar = { quiet: number; boosted: number; voice: number };

/** A lecture video in the page: the slide, the controls with the meter, the caption. */
export function LecturePlayer({ meter }: { meter: MeterBar[] }) {
  return (
    <div className="vcui-video">
      <div className="vcui-player">
        <div className="vcui-screen">
          <span className="vcui-slide-number">Lecture 4</span>
          <span className="vcui-slide-title">{lecture.title}</span>
          <span className="vcui-slide-line">ΔS = Q / T</span>
        </div>
        <div className="vcui-controls">
          <span className="vcui-progress" />
          <span className="vcui-control-row">
            <svg viewBox="0 0 24 24" className="vcui-control-icon" aria-hidden>
              <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
            </svg>
            <svg viewBox="0 0 24 24" className="vcui-control-icon" aria-hidden>
              <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
              <path d="M15 9.2a4 4 0 0 1 0 5.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className="vcui-meter">
              {meter.map((bar, i) => (
                <span
                  key={i}
                  style={{ "--i": i, "--q": bar.quiet, "--b": bar.boosted, "--v": bar.voice } as CSSProperties}
                />
              ))}
            </span>
            <span className="vcui-time">12:48 / 54:10</span>
          </span>
        </div>
      </div>
      <p className="vcui-caption">
        {lecture.course}, Lecture 4: {lecture.title}
      </p>
      <p className="vcui-meta">{lecture.source}, 54 min</p>
    </div>
  );
}

/**
 * Chrome with one tab playing sound, the address bar, and Volume Control
 * PRO's toolbar icon with its badge. The badge follows background.js: no
 * badge at 100%, the level on orange (#f59e0b) above it.
 */
export function Browser({ badge, page, popup }: { badge?: string; page: ReactNode; popup: ReactNode }) {
  return (
    <div className="vcui-browser">
      <div className="vcui-tabs">
        <span className="vcui-tab">
          <span className="vcui-favicon">H</span>
          <span className="vcui-tab-title">{lecture.tab}</span>
          <svg viewBox="0 0 24 24" className="vcui-tab-audio" aria-hidden>
            <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
            <path d="M15 9.2a4 4 0 0 1 0 5.6M17.6 6.8a7.4 7.4 0 0 1 0 10.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <div className="vcui-bar">
        <span className="vcui-url">{lecture.url}</span>
        <span className="vcui-ext">
          {/* eslint-disable-next-line @next/next/no-img-element -- an 18px toolbar icon inside a drawn picture */}
          <img src="/brand/volume-control-pro-icon.png" alt="" width={18} height={18} />
          {badge ? <span className="vcui-badge">{badge}</span> : null}
        </span>
      </div>
      <div className="vcui-viewport">
        <div className="vcui-page">{page}</div>
        <div className="vcui-anchor">{popup}</div>
      </div>
    </div>
  );
}
