import React from "react";
import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  interpolate,
  random,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/GeistMono";
import { loadFont as loadFira } from "@remotion/google-fonts/FiraSansCondensed";

/**
 * Dentoku Dev launch film, 25 s, 16:9. Grammar: docs/style_guide.md.
 * Shots and copy: docs/shotlist.md. Score: assets/music/launch_track.py.
 *
 * The score is 90 BPM, so one beat is exactly 20 frames: every cut, type-on
 * and click below is placed with b(beats).
 */
const { fontFamily: INTER } = loadInter("normal", { weights: ["500", "600"], subsets: ["latin"] });
const { fontFamily: MONO } = loadMono("normal", { weights: ["500"], subsets: ["latin"] });
const { fontFamily: FIRA } = loadFira("normal", { weights: ["600"], subsets: ["latin"] });
const SANS = `${INTER}, -apple-system, sans-serif`;
const MONO_STACK = `${MONO}, ui-monospace, monospace`;

export const FILM_FPS = 30;
export const FILM_WIDTH = 1920;
export const FILM_HEIGHT = 1080;
export const FILM_DURATION = 750;

const BEAT = 20;
const b = (n: number) => Math.round(n * BEAT);

// Warm neutrals measured from the reference; Dentoku orange is the one accent.
const NEAR_BLACK = "#1f1313";
const TAUPE = "#514644";
const OFF_WHITE = "#ecebe6";
const GREIGE = "#c1bfb0";
const TEXT_LIGHT = "#fefdfb";
const TEXT_SECOND = "#a29f9b";
const TEXT_DARK = "#190f0e";
const ACCENT = "#f05423";
const DOT = "#b9b6a6";

export type FilmLang = "en" | "it";

type Token = { text: string } | { slot: "icon" } | { slot: "pill"; label: string };

const COPY = {
  en: {
    intro: [{ text: "Extensions, apps " }, { slot: "icon" }, { text: " and " }, { slot: "pill", label: "AI" }, { text: " products." }] as Token[],
    studio: "Built by one studio.",
    studioSweep: "one studio",
    studioPill: "SOFTWARE STUDIO · MILAN",
    live: "Live on public stores.",
    peekPill: "SNEAK PEEK",
    peekLine: "What we're building next.",
    kallmy: ["Every call answered.", "Even in August."],
    kallmyPill: "SNEAK PEEK · KALLMY",
    kallmyLabel: "AI receptionist for hotels and B&Bs",
    svf: ["A SaaS with AI.", "Shipped in days."],
    svfPill: "SNEAK PEEK · SHIPVERYFAST",
    svfLabel: "SaaS boilerplate with AI built in",
    more: "And more on the way.",
    upcoming: ["Chrome extension", "Shopify app", "Web app"],
    soon: "COMING SOON",
    stance: ["No slide decks.", "Software in production."],
    cta: ["Tell us what to build.", "We'll answer in Italian or English."],
    endPill: "START AT DENTOKUDEV.COM",
    home: "reel/dentoku-home-en.jpg",
  },
  it: {
    intro: [{ text: "Estensioni, app " }, { slot: "icon" }, { text: " e prodotti " }, { slot: "pill", label: "AI" }, { text: "." }] as Token[],
    studio: "Costruiti da un solo studio.",
    studioSweep: "un solo studio",
    studioPill: "STUDIO SOFTWARE · MILANO",
    live: "Online su store pubblici.",
    peekPill: "ANTEPRIMA",
    peekLine: "Cosa stiamo costruendo.",
    kallmy: ["Ogni chiamata ha risposta.", "Anche a Ferragosto."],
    kallmyPill: "ANTEPRIMA · KALLMY",
    kallmyLabel: "Receptionist AI per hotel e B&B",
    svf: ["Un SaaS con l'AI.", "Online in pochi giorni."],
    svfPill: "ANTEPRIMA · SHIPVERYFAST",
    svfLabel: "Boilerplate SaaS con AI integrata",
    more: "E altro in arrivo.",
    upcoming: ["Estensione Chrome", "App Shopify", "App web"],
    soon: "IN ARRIVO",
    stance: ["Niente slide.", "Software in produzione."],
    cta: ["Raccontaci cosa costruire.", "Ti rispondiamo in italiano."],
    endPill: "INIZIA SU DENTOKUDEV.COM",
    home: "reel/dentoku-home-it.jpg",
  },
};

type Copy = (typeof COPY)[FilmLang];

const STORE_ICONS = [
  { icon: "emailmagnet-icon-padded.png", store: "CHROME WEB STORE" },
  { icon: "clickpilot-ai-icon.png", store: "CHROME WEB STORE" },
  { icon: "volume-control-pro-icon.png", store: "CHROME WEB STORE" },
  { icon: "countdown321-icon.png", store: "SHOPIFY APP STORE" },
];

// ------------------------------------------------------------------ timing
// Characters per second while typing and deleting (statements are short).
const TYPE_CPS = 44;
const DELETE_CPS = 120;

function typedCount(frame: number, start: number, length: number, deleteAt?: number, cps = TYPE_CPS) {
  let count = Math.max(0, Math.min(length, Math.floor(((frame - start) * cps) / FILM_FPS)));
  if (deleteAt !== undefined && frame >= deleteAt) {
    count = Math.max(0, length - Math.floor(((frame - deleteAt) * DELETE_CPS) / FILM_FPS));
  }
  return count;
}

const ease = Easing.bezier(0.22, 1, 0.36, 1);

function enter(frame: number, at: number, duration = 12) {
  return interpolate(frame, [at, at + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
}

// ------------------------------------------------------------- primitives
function Caret({ frame, active, color = ACCENT, height = 0.92 }: { frame: number; active: boolean; color?: string; height?: number }) {
  // Solid while typing, blinking (half a beat on, half off) while idle.
  const visible = active || Math.floor(frame / (BEAT / 2)) % 2 === 0;
  return (
    <span
      style={{
        display: "inline-block",
        width: "0.06em",
        height: `${height}em`,
        marginLeft: "0.04em",
        transform: "translateY(0.12em)",
        background: color,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}

/** A centred statement, one or two lines, typed in with the orange caret. */
function Statement({
  lines,
  frame,
  start,
  deleteAt,
  size = 92,
  primary = TEXT_LIGHT,
  secondary = TEXT_SECOND,
  sweep,
  align = "center",
  cps,
}: {
  lines: readonly string[];
  frame: number;
  start: number;
  deleteAt?: number;
  size?: number;
  primary?: string;
  secondary?: string;
  sweep?: { word: string; from: number; to: number };
  align?: "center" | "left";
  /** Characters per second, for lines that must land fast in a short shot. */
  cps?: number;
}) {
  const first = lines[0];
  const second = lines[1] ?? "";
  const total = first.length + second.length;
  const count = typedCount(frame, start, total, deleteAt, cps);
  const c1 = Math.min(first.length, count);
  const c2 = Math.max(0, count - first.length);
  const typing = count > 0 && count < total && (deleteAt === undefined || frame < deleteAt);
  const onSecond = c2 > 0 || (count >= first.length && second.length > 0);

  const sweepColor = (text: string, upto: number) => {
    if (!sweep) return text.slice(0, upto);
    const i = text.indexOf(sweep.word);
    if (i < 0) return text.slice(0, upto);
    const heat = interpolate(frame, [sweep.from, sweep.from + 3, sweep.to - 3, sweep.to], [0, 1, 1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const color = heat > 0.5 ? ACCENT : primary;
    const shown = text.slice(0, upto);
    return (
      <>
        {shown.slice(0, i)}
        <span style={{ color }}>{shown.slice(i, i + sweep.word.length)}</span>
        {shown.slice(i + sweep.word.length)}
      </>
    );
  };

  return (
    <div
      style={{
        fontFamily: SANS,
        fontWeight: 500,
        fontSize: size,
        letterSpacing: "-0.03em",
        lineHeight: 1.08,
        textAlign: align,
        whiteSpace: "pre",
      }}
    >
      <div style={{ color: primary, minHeight: "1.08em" }}>
        {sweepColor(first, c1)}
        {!onSecond && count > 0 ? <Caret frame={frame} active={typing} /> : null}
        {count === 0 && frame >= start - 6 ? <Caret frame={frame} active={false} /> : null}
      </div>
      {second ? (
        <div style={{ color: secondary, minHeight: "1.08em" }}>
          {second.slice(0, c2)}
          {onSecond && count > 0 ? <Caret frame={frame} active={typing} /> : null}
        </div>
      ) : null}
    </div>
  );
}

function Pill({ label, frame, at, dark = false }: { label: string; frame: number; at: number; dark?: boolean }) {
  const p = enter(frame, at, 10);
  return (
    <div
      style={{
        display: "inline-block",
        opacity: p,
        transform: `translateY(${(1 - p) * 10}px)`,
        background: dark ? "rgba(254,253,251,0.08)" : ACCENT,
        border: dark ? "1px solid rgba(254,253,251,0.18)" : "none",
        color: dark ? TEXT_LIGHT : "#ffffff",
        fontFamily: MONO_STACK,
        fontWeight: 500,
        fontSize: 22,
        letterSpacing: "0.12em",
        padding: "10px 18px",
        borderRadius: 8,
      }}
    >
      {label}
    </div>
  );
}

/** Sparse drifting squares on dark grounds, the reference's only texture. */
function PixelDust({ frame, seed }: { frame: number; seed: string }) {
  return (
    <AbsoluteFill>
      {Array.from({ length: 80 }).map((_, i) => {
        const x = random(`${seed}-x-${i}`) * FILM_WIDTH;
        const y = random(`${seed}-y-${i}`) * FILM_HEIGHT;
        const s = 3 + Math.floor(random(`${seed}-s-${i}`) * 5);
        const o = 0.05 + random(`${seed}-o-${i}`) * 0.12;
        const drift = frame * (0.15 + random(`${seed}-d-${i}`) * 0.25);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: (x + drift) % FILM_WIDTH,
              top: (y - drift * 0.4 + FILM_HEIGHT) % FILM_HEIGHT,
              width: s,
              height: s,
              background: TEXT_LIGHT,
              opacity: o,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
}

function Ground({ color, children }: { color: string; children: React.ReactNode }) {
  return <AbsoluteFill style={{ background: color }}>{children}</AbsoluteFill>;
}

function Center({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", ...style }}>
      {children}
    </AbsoluteFill>
  );
}

/** A floating UI window. `bare` images already contain their own window chrome. */
function Window({
  src,
  width,
  height,
  bare = false,
  style,
}: {
  src: string;
  width: number;
  height: number;
  bare?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width,
        height,
        borderRadius: 16,
        overflow: "hidden",
        background: "#ffffff",
        border: "1px solid rgba(25, 15, 14, 0.12)",
        boxShadow: "0 50px 100px -40px rgba(31, 19, 19, 0.45)",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {bare ? null : (
        <div style={{ height: 38, display: "flex", alignItems: "center", gap: 8, padding: "0 16px", background: "#f6f5f2", borderBottom: "1px solid #e6e4de" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 11, height: 11, borderRadius: 6, background: "#d6d3cb" }} />
          ))}
        </div>
      )}
      <Img src={staticFile(src)} style={{ width: "100%", flex: 1, objectFit: "cover", objectPosition: "top center" }} />
    </div>
  );
}

/** Pointer that eases between keyframes and dips on the click frame. */
function Cursor({ frame, path, clickAt }: { frame: number; path: { f: number; x: number; y: number }[]; clickAt: number }) {
  const fs = path.map((p) => p.f);
  const x = interpolate(frame, fs, path.map((p) => p.x), { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
  const y = interpolate(frame, fs, path.map((p) => p.y), { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
  const press = interpolate(frame, [clickAt - 2, clickAt, clickAt + 4], [1, 0.82, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ring = interpolate(frame, [clickAt, clickAt + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <>
      {frame >= clickAt ? (
        <div
          style={{
            position: "absolute",
            left: x - 28,
            top: y - 28,
            width: 56,
            height: 56,
            borderRadius: 28,
            border: `3px solid ${ACCENT}`,
            opacity: 1 - ring,
            transform: `scale(${0.4 + ring * 0.9})`,
          }}
        />
      ) : null}
      <svg
        width={34}
        height={40}
        viewBox="0 0 17 20"
        style={{ position: "absolute", left: x - 3, top: y - 2, transform: `scale(${press})`, transformOrigin: "3px 2px", filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.3))" }}
      >
        <path d="M1.5 1.5 L1.5 16 L5.4 12.4 L8 18.3 L10.6 17.2 L8.1 11.5 L13.4 11.5 Z" fill="#ffffff" stroke={TEXT_DARK} strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    </>
  );
}

/** Mark grows from a dot, then the wordmark slides out from behind it. */
function LogoBuild({ frame, start, pill }: { frame: number; start: number; pill: string }) {
  const dot = interpolate(frame, [start, start + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
  const mark = spring({ frame: frame - start - 4, fps: FILM_FPS, config: { damping: 200, stiffness: 120 } });
  const word = enter(frame, start + BEAT, 14);
  return (
    <Center style={{ gap: 40 }}>
      <div style={{ display: "flex", alignItems: "center", height: 170 }}>
        <div style={{ width: 170, height: 170, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 85 - 9,
              top: 85 - 9,
              width: 18,
              height: 18,
              borderRadius: 9,
              background: TEXT_DARK,
              transform: `scale(${dot})`,
              opacity: 1 - mark,
            }}
          />
          <Img
            src={staticFile("reel/logos/dentoku-mark.png")}
            style={{ width: 170, height: 170, transform: `scale(${mark})`, opacity: mark }}
          />
        </div>
        <div style={{ overflow: "hidden", width: 940 * word }}>
          <div
            style={{
              fontFamily: `${FIRA}, 'Arial Narrow', sans-serif`,
              fontWeight: 600,
              fontSize: 132,
              letterSpacing: 2,
              color: TEXT_DARK,
              whiteSpace: "nowrap",
              paddingLeft: 26,
              transform: `translateX(${(1 - word) * -120}px)`,
            }}
          >
            DENTOKU DEV
          </div>
        </div>
      </div>
      <Pill label={pill} frame={frame} at={start + BEAT + 10} />
    </Center>
  );
}

/** Text drawn in round dots on a grid (masked SVG pattern, no font licence). */
function DotText({ text, size, y, radius, color = DOT }: { text: string; size: number; y: number; radius: number; color?: string }) {
  return (
    <svg width={FILM_WIDTH} height={FILM_HEIGHT} style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id="dotgrid" width={13} height={13} patternUnits="userSpaceOnUse">
          <circle cx={6.5} cy={6.5} r={radius} fill={color} />
        </pattern>
        <mask id="dotmask">
          <text x={FILM_WIDTH / 2} y={y} textAnchor="middle" fontFamily={INTER} fontWeight={600} fontSize={size} letterSpacing={-4} fill="#ffffff">
            {text}
          </text>
        </mask>
      </defs>
      <rect width={FILM_WIDTH} height={FILM_HEIGHT} fill="url(#dotgrid)" mask="url(#dotmask)" />
    </svg>
  );
}

function ProductPill({ pill, label, frame, at, dark = false }: { pill: string; label: string; frame: number; at: number; dark?: boolean }) {
  return (
    <div style={{ position: "absolute", left: 64, top: 56, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", zIndex: 5 }}>
      <Pill label={pill} frame={frame} at={at} />
      <div
        style={{
          fontFamily: SANS,
          fontWeight: 500,
          fontSize: 30,
          letterSpacing: "-0.02em",
          color: dark ? TEXT_LIGHT : TEXT_DARK,
          background: dark ? "rgba(31,19,19,0.7)" : "rgba(236,235,230,0.92)",
          borderRadius: 10,
          padding: "8px 14px",
          opacity: enter(frame, at + 6, 10),
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------- film
export const LaunchFilm: React.FC<{ lang: FilmLang }> = ({ lang }) => {
  const frame = useCurrentFrame();
  const c: Copy = COPY[lang];
  const at = (from: number, to: number) => frame >= b(from) && frame < b(to);
  let shot: React.ReactNode = null;

  if (at(0, 3)) {
    // 1. What we make, with live objects inside the sentence.
    const start = 6;
    const lengths = c.intro.map((t) => ("text" in t ? t.text.length : 1));
    const total = lengths.reduce((a, n) => a + n, 0);
    const count = typedCount(frame, start, total);
    let used = 0;
    const iconIndex = Math.floor(Math.max(0, frame - start) / (BEAT / 2)) % STORE_ICONS.length;
    shot = (
      <Ground color={NEAR_BLACK}>
        <PixelDust frame={frame} seed="s1" />
        <Center>
          <div style={{ fontFamily: SANS, fontWeight: 500, fontSize: 84, letterSpacing: "-0.03em", color: TEXT_LIGHT, display: "flex", alignItems: "center", whiteSpace: "pre" }}>
            {c.intro.map((tok, i) => {
              const before = used;
              used += lengths[i];
              const shown = Math.max(0, Math.min(lengths[i], count - before));
              if ("text" in tok) return <span key={i}>{tok.text.slice(0, shown)}</span>;
              if (shown === 0) return null;
              const pop = enter(frame, start + Math.ceil((before * FILM_FPS) / TYPE_CPS), 8);
              if (tok.slot === "icon") {
                return (
                  <span key={i} style={{ display: "inline-flex", width: 92, height: 92, margin: "0 6px", borderRadius: 22, background: TEXT_LIGHT, alignItems: "center", justifyContent: "center", transform: `scale(${pop})` }}>
                    <Img src={staticFile(STORE_ICONS[iconIndex].icon)} style={{ width: 62, height: 62, objectFit: "contain" }} />
                  </span>
                );
              }
              return (
                <span key={i} style={{ display: "inline-block", margin: "0 8px", padding: "4px 22px", borderRadius: 999, background: ACCENT, color: "#ffffff", fontSize: 58, transform: `scale(${pop})` }}>
                  {tok.label}
                </span>
              );
            })}
            <Caret frame={frame} active={count < total} />
          </div>
        </Center>
      </Ground>
    );
  } else if (at(3, 5)) {
    // 2. One studio: once typed, the phrase sweeps to orange; hard cut out.
    const sweepFrom = Math.min(b(5) - 8, b(3) + 2 + Math.ceil((c.studio.length * FILM_FPS) / TYPE_CPS) + 2);
    shot = (
      <Ground color={NEAR_BLACK}>
        <PixelDust frame={frame} seed="s2" />
        <Center>
          <Statement lines={[c.studio]} frame={frame} start={b(3) + 2} sweep={{ word: c.studioSweep, from: sweepFrom, to: b(5) }} size={104} />
        </Center>
      </Ground>
    );
  } else if (at(5, 7)) {
    // 3. Logo build on the downbeat where the drums enter.
    shot = (
      <Ground color={OFF_WHITE}>
        <LogoBuild frame={frame} start={b(5)} pill={c.studioPill} />
      </Ground>
    );
  } else if (at(7, 9)) {
    // 4. What is live today: the four store products drift in around the line.
    const spots = [
      { x: 330, y: 250 },
      { x: 1590, y: 230 },
      { x: 420, y: 810 },
      { x: 1500, y: 830 },
    ];
    shot = (
      <Ground color={OFF_WHITE}>
        {STORE_ICONS.map((p, i) => {
          const inn = enter(frame, b(7) + i * 4, 14);
          const float = Math.sin((frame + i * 17) / 14) * (6 + i * 2);
          return (
            <div key={p.icon} style={{ position: "absolute", left: spots[i].x - 80, top: spots[i].y - 80 + float + (1 - inn) * 60, opacity: inn, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
              <div style={{ width: 160, height: 160, borderRadius: 38, background: "#ffffff", boxShadow: "0 30px 60px -30px rgba(31,19,19,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Img src={staticFile(p.icon)} style={{ width: 104, height: 104, objectFit: "contain" }} />
              </div>
              <div style={{ fontFamily: MONO_STACK, fontSize: 17, letterSpacing: "0.12em", color: TEXT_SECOND }}>{p.store}</div>
            </div>
          );
        })}
        <Center>
          <Statement lines={[c.live]} frame={frame} start={b(7) + 4} primary={TEXT_DARK} size={96} />
        </Center>
      </Ground>
    );
  } else if (at(9, 11)) {
    // 5. Sneak peek: what is not on dentokudev.com yet.
    const sharp = interpolate(frame, [b(10), b(10) + 10], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const dim = interpolate(frame, [b(10), b(10) + 10], [0.35, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    shot = (
      <Ground color={NEAR_BLACK}>
        <PixelDust frame={frame} seed="s5" />
        <Center style={{ gap: 40 }}>
          <Pill label={c.peekPill} frame={frame} at={b(9)} />
          <Statement lines={[c.peekLine]} frame={frame} start={b(9) + 6} size={88} />
          <div style={{ display: "flex", gap: 34, filter: `blur(${sharp}px)`, opacity: dim * enter(frame, b(9) + 4, 10) }}>
            <Img src={staticFile("reel/logos/kallmy-mark-green.png")} style={{ width: 132, height: 132, borderRadius: 30 }} />
            <div style={{ width: 132, height: 132, borderRadius: 30, background: TEXT_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Img src={staticFile("reel/logos/shipveryfast-s.png")} style={{ width: 96, height: 96 }} />
            </div>
          </div>
        </Center>
      </Ground>
    );
  } else if (at(11, 14)) {
    // 6. Kallmy statement under its mark.
    shot = (
      <Ground color={TAUPE}>
        <Center style={{ gap: 46 }}>
          <Img src={staticFile("reel/logos/kallmy-mark-green.png")} style={{ width: 120, height: 120, borderRadius: 28, opacity: enter(frame, b(11), 10) }} />
          <Statement lines={c.kallmy} frame={frame} start={b(11) + 4} deleteAt={b(13.55)} size={96} />
        </Center>
      </Ground>
    );
  } else if (at(14, 18)) {
    // 7. Kallmy UI: site, then a match cut to the dashboard, a click and a reframe.
    const push = interpolate(frame, [b(14), b(18)], [1, 1.05]);
    const dashIn = spring({ frame: frame - b(16), fps: FILM_FPS, config: { damping: 200, stiffness: 140 } });
    const reframe = spring({ frame: frame - b(17), fps: FILM_FPS, config: { damping: 200, stiffness: 90 } });
    const dw = 1300;
    const dh = Math.round((dw * 651) / 1200);
    const dx = (FILM_WIDTH - dw) / 2;
    const dy = 600 - dh / 2;
    shot = (
      <Ground color={GREIGE}>
        <Window
          src="reel/kallmy-hero.jpg"
          width={1360}
          height={1360 * (961 / 1600) * 0.86}
          style={{ left: (FILM_WIDTH - 1360) / 2, top: 220, transform: `scale(${push})`, opacity: 1 - dashIn * 0.7 }}
        />
        {frame >= b(16) ? (
          <div style={{ position: "absolute", inset: 0, transform: `scale(${1 + reframe * 0.32})`, transformOrigin: `${(dx + dw * 0.8) / FILM_WIDTH * 100}% ${(dy + dh * 0.5) / FILM_HEIGHT * 100}%` }}>
            <Window src="reel/kallmy-dashboard.jpg" width={dw} height={dh} bare style={{ left: dx, top: dy, transform: `scale(${0.82 + dashIn * 0.18})`, opacity: dashIn }} />
            <Cursor
              frame={frame}
              clickAt={b(16.75)}
              path={[
                { f: b(16), x: 1500, y: 980 },
                { f: b(16.7), x: dx + dw * 0.3, y: dy + dh * 0.33 },
                { f: b(18), x: dx + dw * 0.3, y: dy + dh * 0.33 },
              ]}
            />
          </div>
        ) : null}
        <ProductPill pill={c.kallmyPill} label={c.kallmyLabel} frame={frame} at={b(14)} />
      </Ground>
    );
  } else if (at(18, 21)) {
    // 8. ShipVeryFast statement on a split screen.
    const slide = enter(frame, b(18), 14);
    shot = (
      <Ground color={OFF_WHITE}>
        <Window src="reel/svf-hero.jpg" width={1080} height={1080 * (683 / 1600) + 38} style={{ left: 760, top: 300, transform: `scale(${interpolate(frame, [b(18), b(21)], [1, 1.04])})` }} />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 700,
            background: TAUPE,
            transform: `translateX(${(slide - 1) * 700}px)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            gap: 40,
          }}
        >
          <div style={{ width: 104, height: 104, borderRadius: 26, background: TEXT_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Img src={staticFile("reel/logos/shipveryfast-s.png")} style={{ width: 76, height: 76 }} />
          </div>
          <Statement lines={c.svf} frame={frame} start={b(18) + 8} size={76} align="left" />
        </div>
      </Ground>
    );
  } else if (at(21, 25)) {
    // 9. ShipVeryFast dashboard: push-in, a click on the revenue chart, reframe.
    const push = interpolate(frame, [b(21), b(25)], [1, 1.04]);
    const reframe = spring({ frame: frame - b(23), fps: FILM_FPS, config: { damping: 200, stiffness: 90 } });
    const w = 1400;
    const h = Math.round((w * 650) / 1100);
    const x = (FILM_WIDTH - w) / 2;
    const y = 590 - h / 2;
    shot = (
      <Ground color={OFF_WHITE}>
        <div style={{ position: "absolute", inset: 0, transform: `scale(${push * (1 + reframe * 0.3)})`, transformOrigin: `${(x + w * 0.38) / FILM_WIDTH * 100}% ${(y + h * 0.72) / FILM_HEIGHT * 100}%` }}>
          <Window src="reel/svf-dashboard.jpg" width={w} height={h} bare style={{ left: x, top: y }} />
          <Cursor
            frame={frame}
            clickAt={b(22.75)}
            path={[
              { f: b(21.5), x: 1560, y: 1000 },
              { f: b(22.6), x: x + w * 0.42, y: y + h * 0.72 },
              { f: b(25), x: x + w * 0.42, y: y + h * 0.72 },
            ]}
          />
        </div>
        <ProductPill pill={c.svfPill} label={c.svfLabel} frame={frame} at={b(21)} />
      </Ground>
    );
  } else if (at(25, 27)) {
    // 10. Dot-matrix line; the dots fall away to reveal what is coming.
    const radius = interpolate(frame, [b(26) - 6, b(26) + 2], [4.6, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const grow = interpolate(frame, [b(25), b(25) + 8], [0, 4.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    shot = (
      <Ground color={OFF_WHITE}>
        <DotText text={c.more} size={170} y={600} radius={frame < b(26) - 6 ? grow : radius} />
        <Center style={{ flexDirection: "row", gap: 40 }}>
          {c.upcoming.map((label, i) => {
            const inn = enter(frame, b(26) + i * 5, 10);
            return (
              <div key={label} style={{ width: 420, height: 300, borderRadius: 22, border: `3px dashed ${TEXT_SECOND}`, background: "rgba(254,253,251,0.6)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22, opacity: inn, transform: `translateY(${(1 - inn) * 30}px)` }}>
                <div style={{ fontFamily: SANS, fontWeight: 500, fontSize: 44, letterSpacing: "-0.03em", color: TEXT_DARK }}>{label}</div>
                <Pill label={c.soon} frame={frame} at={b(26) + i * 5 + 4} />
              </div>
            );
          })}
        </Center>
      </Ground>
    );
  } else if (at(27, 30)) {
    // 11. Orbit: the studio's own site at the centre, the live products around it.
    const pull = spring({ frame: frame - b(29), fps: FILM_FPS, config: { damping: 200, stiffness: 80 } });
    const rings = [
      { r: 520, speed: 0.012, icons: [0, 2] },
      { r: 700, speed: -0.008, icons: [1, 3] },
    ];
    shot = (
      <Ground color={NEAR_BLACK}>
        <PixelDust frame={frame} seed="s11" />
        <div style={{ position: "absolute", inset: 0, transform: `scale(${1 - pull * 0.14})` }}>
          {rings.map((ring, ri) => (
            <div key={ri}>
              <div style={{ position: "absolute", left: 960 - ring.r, top: 640 - ring.r * 0.42, width: ring.r * 2, height: ring.r * 0.84, borderRadius: "50%", border: "1px dashed rgba(254,253,251,0.18)" }} />
              {ring.icons.map((idx, k) => {
                const a = frame * ring.speed + k * Math.PI + ri;
                return (
                  <div key={idx} style={{ position: "absolute", left: 960 + Math.cos(a) * ring.r - 46, top: 640 + Math.sin(a) * ring.r * 0.42 - 46, width: 92, height: 92, borderRadius: 22, background: TEXT_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", opacity: enter(frame, b(27) + k * 4, 10) }}>
                    <Img src={staticFile(STORE_ICONS[idx].icon)} style={{ width: 60, height: 60, objectFit: "contain" }} />
                  </div>
                );
              })}
            </div>
          ))}
          <Window src={c.home} width={720} height={720 * 0.625 + 38} style={{ left: 600, top: 440 }} />
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, top: 120, display: "flex", justifyContent: "center" }}>
          <Statement lines={c.stance} frame={frame} start={b(27) + 4} size={84} />
        </div>
      </Ground>
    );
  } else if (at(30, 33)) {
    // 12. The call to action, typed and held.
    shot = (
      <Ground color={TAUPE}>
        <Center>
          <Statement lines={c.cta} frame={frame} start={b(30) + 4} size={92} cps={62} />
        </Center>
      </Ground>
    );
  } else {
    // 13. End card, then an ease back to the off-white so the loop is clean.
    const out = interpolate(frame, [FILM_DURATION - 12, FILM_DURATION], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    shot = (
      <Ground color={OFF_WHITE}>
        <div style={{ position: "absolute", inset: 0, opacity: out }}>
          <LogoBuild frame={frame} start={b(33)} pill={c.endPill} />
          <svg width={FILM_WIDTH} height={140} style={{ position: "absolute", left: 0, bottom: 0 }}>
            <defs>
              <pattern id="strip" width={13} height={13} patternUnits="userSpaceOnUse">
                <circle cx={6.5} cy={6.5} r={3} fill={DOT} />
              </pattern>
              <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              <mask id="stripmask">
                <rect width={FILM_WIDTH} height={140} fill="url(#fade)" />
              </mask>
            </defs>
            <rect width={FILM_WIDTH} height={140} fill="url(#strip)" mask="url(#stripmask)" opacity={enter(frame, b(34), 16)} />
          </svg>
        </div>
      </Ground>
    );
  }

  return (
    <AbsoluteFill style={{ background: NEAR_BLACK }}>
      {shot}
      <Audio src={staticFile("reel/launch-music.wav")} />
    </AbsoluteFill>
  );
};
