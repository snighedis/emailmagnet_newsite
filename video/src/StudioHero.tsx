import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  OffthreadVideo,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

/**
 * Homepage hero loop, 21.5 s, 2:1. Pacing and transition grammar follow a
 * studied reference (live-action open, a prompt bar that blooms into a fluid
 * gradient, staged UI cards, a loop back to live action). Every person,
 * product, line of copy and UI element here is Dentoku Dev's own: the footage
 * is generated (fal.ai), the products and data come from Dentoku's and
 * Kallmy's public pages.
 */
const { fontFamily: INTER } = loadInter("normal", { weights: ["400", "500", "600"], subsets: ["latin"] });
const SANS = `${INTER}, -apple-system, sans-serif`;

export const HERO2_FPS = 30;
export const HERO2_WIDTH = 1728;
export const HERO2_HEIGHT = 864;
export const HERO2_DURATION = 875;

const CREAM = "#e4e6d9";
const INK = "#16130f";
const MUTED = "#6f6b62";
const ACCENT = "#f05423";
const GREEN = "#1f9d6b";
const CARD = "#ffffff";

export type Hero2Lang = "it" | "en";

const COPY = {
  it: {
    prompt: "Rispondere agli ospiti anche mentre sto facendo altro",
    steps: [
      ["ANALISI", "DEL PROBLEMA"],
      ["PROPOSTA", "SCRITTA"],
      ["DESIGN", "DELL'INTERFACCIA"],
      ["COLLEGAMENTO", "WHATSAPP"],
      ["INTEGRAZIONE", "AI"],
      ["TEST", "PRIMA DEL RILASCIO"],
      ["RILASCIO", "IN PRODUZIONE"],
    ],
    reply: "Certo. Ecco cosa abbiamo già messo in produzione.",
    preview: "Anteprima",
    kallmyWhat: "Receptionist AI per hotel e B&B",
    stats: [
      ["Chiamate", "18"],
      ["Lead", "8"],
      ["Confermate", "3"],
    ],
    collected: "DATI RACCOLTI DALL'AI",
    fields: [
      ["Nome", "Marco Rossi"],
      ["Date", "14 – 16 giu"],
      ["Ospiti", "2"],
    ],
    calls: [
      ["+39 347 112 2334", "Oggi, 12:02"],
      ["+39 335 556 6778", "Oggi, 09:15"],
      ["+44 7911 123456", "Ieri, 23:40"],
    ],
    done: "Completata",
    send: "Invia riepilogo su WhatsApp",
    sendCta: "Invia",
    connected: "Collegato",
    run: "Avvia",
    greeting: "Ciao, cosa costruiamo insieme?",
    ask: "Un'app per le prenotazioni del mio agriturismo",
    chips: ["Estensioni Chrome", "App Shopify", "Integrazione AI", "Strumenti interni"],
  },
  en: {
    prompt: "Answer my guests even when I'm busy with something else",
    steps: [
      ["UNDERSTANDING", "THE PROBLEM"],
      ["WRITTEN", "PROPOSAL"],
      ["INTERFACE", "DESIGN"],
      ["CONNECTING", "WHATSAPP"],
      ["AI", "INTEGRATION"],
      ["TESTING", "BEFORE RELEASE"],
      ["SHIPPING", "TO PRODUCTION"],
    ],
    reply: "Sure. Here's what we already run in production.",
    preview: "Sneak peek",
    kallmyWhat: "AI receptionist for hotels and B&Bs",
    stats: [
      ["Calls", "18"],
      ["Leads", "8"],
      ["Confirmed", "3"],
    ],
    collected: "DATA COLLECTED BY THE AI",
    fields: [
      ["Name", "Marco Rossi"],
      ["Dates", "Jun 14 – 16"],
      ["Guests", "2"],
    ],
    calls: [
      ["+39 347 112 2334", "Today, 12:02"],
      ["+39 335 556 6778", "Today, 09:15"],
      ["+44 7911 123456", "Yesterday, 23:40"],
    ],
    done: "Completed",
    send: "Send summary on WhatsApp",
    sendCta: "Send",
    connected: "Connected",
    run: "Run",
    greeting: "Hi, what shall we build together?",
    ask: "A booking app for my farm stay",
    chips: ["Chrome extensions", "Shopify apps", "AI integration", "Internal tools"],
  },
};

type Copy = (typeof COPY)[Hero2Lang];

const ease = Easing.bezier(0.22, 1, 0.36, 1);
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ramp = (frame: number, a: number, b: number) => interpolate(frame, [a, b], [0, 1], { ...clamp, easing: ease });
const typed = (frame: number, start: number, text: string, cps = 36) =>
  text.slice(0, Math.max(0, Math.floor(((frame - start) * cps) / HERO2_FPS)));

// ------------------------------------------------------------ primitives
/** Flowing mesh gradient in Dentoku tones (the reference's uses its own palette). */
function Gradient({ frame }: { frame: number }) {
  const blobs = [
    { c: "#ff7a3d", x: 30, y: 30, r: 62, sx: 0.011, sy: 0.008 },
    { c: "#ffc59e", x: 70, y: 25, r: 58, sx: -0.009, sy: 0.012 },
    { c: "#9ff3e1", x: 20, y: 80, r: 55, sx: 0.013, sy: -0.007 },
    { c: "#d6c8ff", x: 80, y: 75, r: 60, sx: -0.012, sy: -0.01 },
    { c: "#ffb6d5", x: 50, y: 55, r: 45, sx: 0.008, sy: 0.014 },
    { c: "#ffe2b8", x: 55, y: 10, r: 40, sx: -0.014, sy: 0.009 },
  ];
  return (
    <AbsoluteFill style={{ background: "#ffd9bf", overflow: "hidden" }}>
      <AbsoluteFill style={{ filter: "blur(70px)", transform: "scale(1.2)" }}>
        {blobs.map((b, i) => {
          const x = b.x + Math.sin(frame * b.sx + i) * 14;
          const y = b.y + Math.cos(frame * b.sy + i * 2) * 12;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${x - b.r / 2}%`,
                top: `${y - b.r / 2}%`,
                width: `${b.r}%`,
                height: `${b.r * 2}%`,
                borderRadius: "50%",
                background: b.c,
                opacity: 0.95,
              }}
            />
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: CARD,
        borderRadius: 18,
        boxShadow: "0 20px 50px -24px rgba(22,19,15,0.35), 0 1px 0 rgba(22,19,15,0.04)",
        border: "1px solid rgba(22,19,15,0.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SendButton({ size = 34, pressed = 0 }: { size?: number; pressed?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        background: ACCENT,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${1 - pressed * 0.15})`,
      }}
    >
      <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 16 16">
        <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Sparkle({ size = 30 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 9, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 16 16">
        <path d="M8 1.5l1.6 4.2 4.4 1.3-4.4 1.3L8 14.5l-1.6-6.2L2 7l4.4-1.3z" fill="#fff" />
      </svg>
    </div>
  );
}

function Badge({ letter, color }: { letter: string; color: string }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: 11, background: color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SANS, fontWeight: 600, fontSize: 20 }}>
      {letter}
    </div>
  );
}

function Footage({ from, startAt }: { from: number; startAt: number }) {
  return (
    <Sequence from={from} layout="none">
      <OffthreadVideo
        muted
        src={staticFile("hero2/agriturismo.mp4")}
        startFrom={startAt}
        style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%" }}
      />
    </Sequence>
  );
}

// ------------------------------------------------------------------ scenes
const BAR = { w: 860, h: 72, top: 130 };

function PromptScene({ frame, c }: { frame: number; c: Copy }) {
  // 0.5 s: a frosted tile appears; 0.75-1.0 s it widens into a bar; 1.25 s typing.
  const appear = ramp(frame, 15, 22);
  const widen = ramp(frame, 22, 32);
  const w = 72 + (BAR.w - 72) * widen;
  const text = typed(frame, 38, c.prompt, 30);
  const pressed = interpolate(frame, [108, 111, 115], [0, 1, 0], clamp);
  const bright = ramp(frame, 112, 118);
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: (HERO2_WIDTH - w) / 2,
          top: BAR.top,
          width: w,
          height: BAR.h,
          borderRadius: 18,
          background: `rgba(255,255,255,${0.32 + bright * 0.5})`,
          border: "1px solid rgba(255,255,255,0.55)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 18px 40px -20px rgba(0,0,0,0.45)",
          opacity: appear,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: widen > 0.9 ? "0 18px 0 26px" : 0,
          overflow: "hidden",
        }}
      >
        {widen > 0.9 ? (
          <>
            <div style={{ fontFamily: SANS, fontSize: 24, fontWeight: 500, color: text ? INK : "rgba(22,19,15,0.45)", whiteSpace: "nowrap" }}>
              {text}
              {frame >= 38 && text.length < c.prompt.length ? <span style={{ color: ACCENT }}>|</span> : null}
            </div>
            <div style={{ opacity: ramp(frame, 36, 42) }}>
              <SendButton pressed={pressed} />
            </div>
          </>
        ) : null}
      </div>
    </AbsoluteFill>
  );
}

/** The bar blooms into the full-bleed gradient (3.0 s). */
function Bloom({ frame, from, rect }: { frame: number; from: number; rect: { x: number; y: number; w: number; h: number } }) {
  const p = ramp(frame, from, from + 10);
  const x = rect.x * (1 - p);
  const y = rect.y * (1 - p);
  const w = rect.w + (HERO2_WIDTH - rect.w) * p;
  const h = rect.h + (HERO2_HEIGHT - rect.h) * p;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: w, height: h, borderRadius: 18 * (1 - p), overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -x, top: -y, width: HERO2_WIDTH, height: HERO2_HEIGHT }}>
        <Gradient frame={frame} />
      </div>
    </div>
  );
}

function ProcessScene({ frame, c }: { frame: number; c: Copy }) {
  const local = frame - 120;
  const spots = [
    { x: 1270, y: 300 },
    { x: 1020, y: 140 },
    { x: 1390, y: 150 },
    { x: 330, y: 170 },
    { x: 760, y: 420 },
    { x: 340, y: 560 },
    { x: 1180, y: 600 },
  ];
  // A small ink dot travels between steps; each label lights up as it arrives.
  const per = 22;
  const seg = Math.min(spots.length - 1, Math.max(0, Math.floor((local - 8) / per)));
  const t = ramp(local, 8 + seg * per, 8 + seg * per + 10);
  const from = seg === 0 ? { x: 864, y: 432 } : spots[seg - 1];
  const dot = { x: from.x + (spots[seg].x - from.x) * t, y: from.y + (spots[seg].y - from.y) * t };
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: dot.x - 7, top: dot.y - 7, width: 14, height: 14, borderRadius: 7, background: INK, opacity: local < 172 ? 1 : 0 }} />
      {c.steps.map(([a, b], i) => {
        const at = 8 + i * per + 10;
        const on = ramp(local, at, at + 8);
        const fade = 1 - ramp(local, at + 70, at + 90) * 0.55;
        const drift = (local - at) * 0.25;
        return (
          <div key={a} style={{ position: "absolute", left: spots[i].x - 13, top: spots[i].y - 13 - drift, display: "flex", gap: 12, alignItems: "flex-start", opacity: on * fade }}>
            <div style={{ width: 26, height: 26, borderRadius: 13, border: "1.5px solid rgba(22,19,15,0.45)", display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${0.6 + on * 0.4})` }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: INK }} />
            </div>
            <div style={{ fontFamily: SANS, fontSize: 18, lineHeight: 1.3, letterSpacing: "0.06em", paddingTop: 1 }}>
              <div style={{ fontWeight: 600, color: INK }}>{a}</div>
              <div style={{ fontWeight: 500, color: "rgba(22,19,15,0.6)" }}>{b}</div>
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
}

function ReplyPill({ frame, c, from }: { frame: number; c: Copy; from: number }) {
  const local = frame - from;
  const grow = ramp(local, 0, 10);
  const text = typed(local, 12, c.reply, 40);
  return (
    <Card style={{ display: "inline-flex", alignItems: "center", gap: 16, padding: "16px 24px 16px 16px", transform: `scale(${0.85 + grow * 0.15})`, opacity: grow }}>
      <Sparkle />
      <div style={{ fontFamily: SANS, fontSize: 22, fontWeight: 500, color: INK, whiteSpace: "nowrap" }}>
        {text}
        <span style={{ color: "rgba(22,19,15,0.25)" }}>{c.reply.slice(text.length).slice(0, 4)}</span>
      </div>
    </Card>
  );
}

// Every app Dentoku Dev has built. `fill` icons are full-bleed squares and are
// shown edge to edge with rounded corners; the rest sit on the white tile.
const TILES = [
  { src: "emailmagnet-icon-padded.png", fill: false },
  { src: "hero2/apps/app-n.png", fill: true },
  { src: "clickpilot-ai-icon.png", fill: false },
  { src: "hero2/apps/app-weather.png", fill: true },
  { src: "volume-control-pro-icon.png", fill: false },
  { src: "hero2/apps/app-camera.png", fill: false },
  { src: "countdown321-icon.png", fill: false },
  { src: "hero2/apps/app-moon.png", fill: true },
  { src: "reel/logos/shipveryfast-s.png", fill: false },
  { src: "reel/logos/dentoku-mark.png", fill: false },
];
const KALLMY_TILE = { col: 3, row: 1 };

function GridScene({ frame, from }: { frame: number; from: number }) {
  const local = frame - from;
  const cols = 9;
  const rows = 3;
  const size = 112;
  const gap = 26;
  const gw = cols * size + (cols - 1) * gap;
  const x0 = (HERO2_WIDTH - gw) / 2;
  const y0 = 300;
  const highlight = ramp(local, 30, 38);
  return (
    <AbsoluteFill>
      {Array.from({ length: rows * cols }).map((_, k) => {
        const col = k % cols;
        const row = Math.floor(k / cols);
        const isKallmy = col === KALLMY_TILE.col && row === KALLMY_TILE.row;
        const at = row * 4 + col * 1.5;
        const inn = ramp(local, at, at + 8);
        // Offset each row so no icon repeats next to itself, horizontally or vertically.
        const icon = TILES[(col + row * 4) % TILES.length];
        return (
          <div
            key={k}
            style={{
              position: "absolute",
              left: x0 + col * (size + gap),
              top: y0 + row * (size + gap) + (1 - inn) * 24,
              width: size,
              height: size,
              borderRadius: 24,
              background: CARD,
              opacity: inn * (isKallmy ? 1 : 1 - highlight * 0.35),
              boxShadow: "0 14px 30px -18px rgba(22,19,15,0.4)",
              outline: isKallmy ? `${3 * highlight}px solid ${ACCENT}` : "none",
              outlineOffset: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img
              src={staticFile(isKallmy ? "reel/logos/kallmy-mark-green.png" : icon.src)}
              style={
                isKallmy || icon.fill
                  ? { width: 84, height: 84, objectFit: "cover", borderRadius: 18 }
                  : { width: 64, height: 64, objectFit: "contain" }
              }
            />
          </div>
        );
      })}
    </AbsoluteFill>
  );
}

function KallmyCards({ frame, from, c }: { frame: number; from: number; c: Copy }) {
  const local = frame - from;
  const second = spring({ frame: local - 36, fps: HERO2_FPS, config: { damping: 200 } });
  // From 52 frames in, the stack scrolls up into the detail card.
  const scroll = ramp(local, 76, 96);
  const detail = spring({ frame: local - 80, fps: HERO2_FPS, config: { damping: 200 } });
  return (
    <AbsoluteFill style={{ alignItems: "center" }}>
      <div style={{ position: "absolute", top: 250 - scroll * 330, width: 640, display: "flex", flexDirection: "column", gap: 16 }}>
        <Card style={{ display: "flex", alignItems: "center", gap: 18, padding: "18px 20px" }}>
          <Img src={staticFile("reel/logos/kallmy-mark-green.png")} style={{ width: 58, height: 58, borderRadius: 14 }} />
          <div style={{ flex: 1, fontFamily: SANS }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: INK }}>Kallmy</div>
            <div style={{ fontSize: 17, color: MUTED }}>{c.kallmyWhat}</div>
          </div>
          <div style={{ background: ACCENT, color: "#fff", fontFamily: SANS, fontWeight: 600, fontSize: 15, padding: "7px 14px", borderRadius: 10 }}>{c.preview}</div>
        </Card>
        <Card style={{ display: "flex", gap: 12, padding: 16, opacity: second, transform: `translateY(${(1 - second) * 40}px)` }}>
          {c.stats.map(([label, value]) => (
            <div key={label} style={{ flex: 1, background: "#f6f6f1", borderRadius: 12, padding: "12px 14px", fontFamily: SANS }}>
              <div style={{ fontSize: 13, letterSpacing: "0.06em", color: MUTED, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 30, fontWeight: 600, color: INK }}>{value}</div>
            </div>
          ))}
        </Card>
        <Card style={{ padding: "18px 20px", opacity: detail, transform: `translateY(${(1 - detail) * 50}px)`, fontFamily: SANS }}>
          {c.calls.map(([num, when]) => (
            <div key={num} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #efeee8", fontSize: 18 }}>
              <span style={{ color: INK, fontWeight: 500 }}>{num}</span>
              <span style={{ color: MUTED, fontSize: 15 }}>{when}</span>
              <span style={{ background: "#e3f5ec", color: GREEN, fontWeight: 600, fontSize: 14, padding: "4px 10px", borderRadius: 8 }}>{c.done}</span>
            </div>
          ))}
          <div style={{ marginTop: 16, fontSize: 13, letterSpacing: "0.08em", color: MUTED }}>{c.collected}</div>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            {c.fields.map(([k, v]) => (
              <div key={k} style={{ flex: 1, border: "1px solid #ecebe4", borderRadius: 10, padding: "8px 12px" }}>
                <div style={{ fontSize: 12, color: MUTED }}>{k}</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: INK }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
            <span style={{ fontSize: 17, color: INK }}>{c.send}</span>
            <span style={{ background: INK, color: "#fff", fontWeight: 600, fontSize: 15, padding: "8px 16px", borderRadius: 10 }}>{c.sendCta}</span>
          </div>
        </Card>
      </div>
    </AbsoluteFill>
  );
}

const STACK = [
  { name: "WhatsApp", letter: "W", color: "#25a35a" },
  { name: "OpenAI", letter: "O", color: "#1f1f1f" },
  { name: "Claude", letter: "C", color: "#c76a43" },
  { name: "Stripe", letter: "S", color: "#5b5bd6" },
  { name: "Shopify", letter: "S", color: "#5e8e3e" },
  { name: "Chrome", letter: "C", color: "#3b82f6" },
];

function StackScene({ frame, from, c }: { frame: number; from: number; c: Copy }) {
  const local = frame - from;
  const step = 18;
  const items = [...STACK, { name: "Dentoku Dev", letter: "D", color: ACCENT, final: true }];
  const pos = Math.min(items.length - 1, local / step);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", width: 680, height: 300, marginTop: -60 }}>
        {items.map((it, i) => {
          const d = i - pos; // 0 = front, positive = waiting behind, negative = gone
          if (d < -1 || d > 2.2) return null;
          const y = d >= 0 ? -d * 22 : d * -80;
          const scale = d >= 0 ? 1 - d * 0.06 : 1 + d * -0.04;
          const opacity = d >= 0 ? 1 - d * 0.3 : 1 + d;
          const isFinal = "final" in it;
          return (
            <Card
              key={it.name}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 100,
                height: 96,
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "0 18px",
                transform: `translateY(${y}px) scale(${scale})`,
                opacity: Math.max(0, opacity),
                zIndex: 100 - Math.round(d * 10),
              }}
            >
              {isFinal ? (
                <Img src={staticFile("reel/logos/dentoku-mark.png")} style={{ width: 40, height: 40 }} />
              ) : (
                <Badge letter={it.letter} color={it.color} />
              )}
              <div style={{ flex: 1, fontFamily: SANS, fontSize: 27, fontWeight: 600, color: INK }}>{it.name}</div>
              {isFinal ? (
                <span style={{ background: ACCENT, color: "#fff", fontFamily: SANS, fontWeight: 600, fontSize: 16, padding: "8px 20px", borderRadius: 10 }}>{c.run}</span>
              ) : (
                <span style={{ background: "#e3f5ec", color: GREEN, fontFamily: SANS, fontWeight: 600, fontSize: 18, padding: "8px 14px", borderRadius: 10 }}>{c.connected}</span>
              )}
            </Card>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function GreetingScene({ frame, from, c }: { frame: number; from: number; c: Copy }) {
  const local = frame - from;
  const inn = ramp(local, 0, 10);
  const ask = typed(local, 14, c.ask, 32);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: inn }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22, transform: `translateY(${(1 - inn) * 16}px)` }}>
        <Img src={staticFile("reel/logos/dentoku-mark.png")} style={{ width: 52, height: 52 }} />
        <div style={{ fontFamily: SANS, fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em", color: INK }}>{c.greeting}</div>
        <Card style={{ width: 760, padding: "20px 22px", display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontFamily: SANS, fontSize: 21, color: ask ? INK : MUTED, minHeight: 28 }}>
            {ask}
            {ask.length < c.ask.length ? <span style={{ color: ACCENT }}>|</span> : null}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <SendButton size={36} />
          </div>
        </Card>
        <div style={{ display: "flex", gap: 10 }}>
          {c.chips.map((chip, i) => (
            <div key={chip} style={{ fontFamily: SANS, fontSize: 16, color: INK, background: "rgba(255,255,255,0.7)", border: "1px solid rgba(22,19,15,0.08)", borderRadius: 999, padding: "8px 16px", opacity: ramp(local, 8 + i * 3, 16 + i * 3) }}>
              {chip}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
}

// -------------------------------------------------------------------- film
export const StudioHero: React.FC<{ lang: Hero2Lang }> = ({ lang }) => {
  const frame = useCurrentFrame();
  const c = COPY[lang];
  const barRect = { x: (HERO2_WIDTH - BAR.w) / 2, y: BAR.top, w: BAR.w, h: BAR.h };

  // Timeline (frames at 30 fps). Same scene order and transitions as the
  // reference, with longer holds so every line can be read:
  // 0-130 footage + prompt | 118-320 gradient + process | 320-462 reply + grid |
  // 462-620 Kallmy cards | 620-760 stack | 760-875 greeting | 860-875 back to
  // footage, which ends on the clip's first 0.5 s: the opening starts at 0.5 s,
  // so the loop is seamless.
  return (
    <AbsoluteFill style={{ background: CREAM }}>
      {frame < 130 ? (
        <AbsoluteFill>
          <Footage from={0} startAt={15} />
          <PromptScene frame={frame} c={c} />
        </AbsoluteFill>
      ) : null}
      {frame >= 118 && frame < 320 ? (
        <>
          <Bloom frame={frame} from={118} rect={barRect} />
          {frame >= 128 ? <ProcessScene frame={frame} c={c} /> : null}
        </>
      ) : null}
      {frame >= 320 && frame < 462 ? (
        <AbsoluteFill style={{ background: CREAM }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: frame < 400 ? 400 : 400 - ramp(frame, 400, 413) * 250,
              display: "flex",
              justifyContent: "center",
              transform: `scale(${frame < 400 ? 1 : 1 - ramp(frame, 400, 413) * 0.15})`,
            }}
          >
            <ReplyPill frame={frame} c={c} from={322} />
          </div>
          {frame >= 403 ? <GridScene frame={frame} from={403} /> : null}
          {frame >= 450 ? (
            <Bloom
              frame={frame}
              from={450}
              rect={{ x: (HERO2_WIDTH - (9 * 112 + 8 * 26)) / 2 + KALLMY_TILE.col * 138, y: 300 + KALLMY_TILE.row * 138, w: 112, h: 112 }}
            />
          ) : null}
        </AbsoluteFill>
      ) : null}
      {frame >= 462 && frame < 620 ? (
        <AbsoluteFill>
          <Gradient frame={frame} />
          <KallmyCards frame={frame} from={462} c={c} />
        </AbsoluteFill>
      ) : null}
      {frame >= 620 && frame < 760 ? (
        <AbsoluteFill style={{ background: CREAM }}>
          <StackScene frame={frame} from={622} c={c} />
        </AbsoluteFill>
      ) : null}
      {frame >= 760 && frame < 875 ? (
        <AbsoluteFill style={{ background: CREAM }}>
          <GreetingScene frame={frame} from={760} c={c} />
        </AbsoluteFill>
      ) : null}
      {frame >= 860 ? (
        <AbsoluteFill style={{ opacity: ramp(frame, 860, 875) }}>
          <Footage from={860} startAt={0} />
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
