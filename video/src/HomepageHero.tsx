import React from "react";
import {
  AbsoluteFill,
  Img,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  interpolate,
  spring,
  Easing,
} from "remotion";

export const FPS = 30;
export const WIDTH = 1280;
export const HEIGHT = 800;
export const DURATION_IN_FRAMES = 330; // 11s loop (the closing lockup holds ~3s so it stays readable)

// Brand palette (mirrors the site's tokens; Remotion has no Tailwind context).
const INK = "#0f172a";
const CREAM = "#faf6f0";
const ORANGE = "#f05423";
const SLATE = "#475569";

// Scene windows (frames). Adjacent scenes overlap by the crossfade length.
const FADE = 12;
const S1 = { from: 0, to: 100 } as const;
const S2 = { from: 88, to: 178 } as const;
const S3 = { from: 166, to: 246 } as const;
// S4 runs 234-330: after the ~0.4s entrance springs it HOLDS still for ~2.5s,
// then fades out into the looping background.
const S4 = { from: 234, to: DURATION_IN_FRAMES } as const;

function sceneOpacity(frame: number, from: number, to: number): number {
  return interpolate(
    frame,
    [from, from + FADE, to - FADE, to],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
}

/** Minimal browser chrome mirroring the site's BrowserFrame look. */
function Chrome({
  url,
  children,
  style,
}: {
  url: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: 1060,
        height: 640,
        borderRadius: 24,
        background: "#ffffff",
        border: "1px solid rgba(15, 23, 42, 0.08)",
        boxShadow: "0 40px 90px -30px rgba(15, 23, 42, 0.35)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "14px 18px",
          borderBottom: "1px solid #f1f5f9",
          background: "rgba(248, 250, 252, 0.9)",
        }}
      >
        <div style={{ display: "flex", gap: 7 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 11, height: 11, borderRadius: 6, background: "#cbd5e1" }} />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            maxWidth: 620,
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: 8,
            padding: "6px 14px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 15,
            color: "#94a3b8",
          }}
        >
          {url}
        </div>
      </div>
      <div style={{ position: "relative", flex: 1, background: "#fff" }}>{children}</div>
    </div>
  );
}

/** Small feature pill used in the EmailMagnet scene (real feature labels only). */
function Pill({
  label,
  frame,
  appearAt,
  x,
  y,
}: {
  label: string;
  frame: number;
  appearAt: number;
  x: number;
  y: number;
}) {
  const progress = spring({ frame: frame - appearAt, fps: FPS, config: { damping: 14, mass: 0.6 } });
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translateY(${(1 - progress) * 26}px) scale(${0.85 + progress * 0.15})`,
        opacity: progress,
        background: "#ffffff",
        border: "1px solid rgba(15, 23, 42, 0.08)",
        boxShadow: "0 14px 34px -14px rgba(15, 23, 42, 0.35)",
        // Matches the site radius system: chips are slightly-rounded rects.
        borderRadius: 12,
        padding: "10px 18px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        fontSize: 16,
        fontWeight: 600,
        color: INK,
      }}
    >
      <span style={{ color: "#0d9488", fontSize: 15 }}>✓</span>
      {label}
    </div>
  );
}

function EmailMagnetScene({ frame }: { frame: number }) {
  const local = frame - S1.from;
  const zoom = interpolate(local, [0, S1.to - S1.from], [1, 1.045], {
    extrapolateRight: "clamp",
  });
  const popupIn = spring({ frame: local - 8, fps: FPS, config: { damping: 16 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ transform: `scale(${zoom})` }}>
        <Chrome url="team directory · EmailMagnet is collecting visible emails">
          <Img
            src={staticFile("backdrop.jpg")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* The REAL extension popup, composited crisp over the soft backdrop */}
          <Img
            src={staticFile("emailmagnet-popup.png")}
            style={{
              position: "absolute",
              right: 36,
              top: 24,
              height: 530,
              borderRadius: 18,
              boxShadow: "0 34px 80px -20px rgba(15, 23, 42, 0.5)",
              transform: `translateY(${(1 - popupIn) * 40}px)`,
              opacity: popupIn,
            }}
          />
          <Pill label="Review before export" frame={local} appearAt={28} x={64} y={130} />
          <Pill label="Export CSV" frame={local} appearAt={44} x={104} y={296} />
          <Pill label="Source page saved" frame={local} appearAt={60} x={64} y={452} />
        </Chrome>
      </div>
    </AbsoluteFill>
  );
}

function CountdownScene({ frame }: { frame: number }) {
  const local = frame - S2.from;
  const slide = spring({ frame: local, fps: FPS, config: { damping: 18 } });
  const zoom = interpolate(local, [0, S2.to - S2.from], [1, 1.03], { extrapolateRight: "clamp" });
  // Real product behavior: a countdown ticking once per second.
  const secondsLeft = 8054 - Math.floor(Math.max(0, local) / FPS);
  const hh = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ transform: `translateX(${(1 - slide) * 260}px) scale(${zoom})` }}>
        <Chrome url="yourstore.myshopify.com · Countdown321 campaign live">
          <Img
            src={staticFile("countdown321-hero.webp")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              left: 48,
              bottom: 44,
              background: INK,
              color: "#ffffff",
              borderRadius: 16,
              padding: "18px 26px",
              boxShadow: "0 30px 60px -18px rgba(15, 23, 42, 0.55)",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, color: "#99f6e4", textTransform: "uppercase" }}>
              Launch ends in
            </div>
            <div style={{ fontSize: 40, fontWeight: 700, fontVariantNumeric: "tabular-nums", marginTop: 4 }}>
              {hh}:{mm}:{ss}
            </div>
          </div>
        </Chrome>
      </div>
    </AbsoluteFill>
  );
}

function ClickPilotScene({ frame }: { frame: number }) {
  const local = frame - S3.from;
  const scaleIn = interpolate(local, [0, 18], [0.965, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ transform: `scale(${scaleIn})` }}>
        <Chrome url="ClickPilot AI · fix, rewrite, summarize inside any text field">
          {/* Real screen recording of the product */}
          <OffthreadVideo
            muted
            src={staticFile("clickpilot-demo.mp4")}
            startFrom={60}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Chrome>
      </div>
    </AbsoluteFill>
  );
}

function LockupScene({ frame }: { frame: number }) {
  const local = frame - S4.from;
  const icons = [
    "emailmagnet-icon-padded.png",
    "clickpilot-ai-icon.png",
    "volume-control-pro-icon.png",
    "countdown321-icon.png",
  ];
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", gap: 34 }}>
      <div style={{ display: "flex", gap: 22 }}>
        {icons.map((icon, i) => {
          const pop = spring({ frame: local - i * 4, fps: FPS, config: { damping: 13, mass: 0.6 } });
          return (
            <div
              key={icon}
              style={{
                width: 92,
                height: 92,
                borderRadius: 24,
                background: "#ffffff",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                boxShadow: "0 24px 50px -18px rgba(15, 23, 42, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `scale(${pop})`,
              }}
            >
              <Img src={staticFile(icon)} style={{ width: 58, height: 58, objectFit: "contain" }} />
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", fontFamily: "Georgia, 'Times New Roman', serif" }}>
        <div style={{ fontSize: 58, fontWeight: 600, color: INK, letterSpacing: -1 }}>
          Software that ships.
        </div>
        <div style={{ fontSize: 30, marginTop: 6, color: SLATE }}>
          Ours, and <span style={{ color: ORANGE }}>yours.</span>
        </div>
      </div>
    </AbsoluteFill>
  );
}

export const HomepageHero: React.FC = () => {
  const frame = useCurrentFrame();

  // Seamless-loop background drift: sinusoidal with period = full duration,
  // so frame 0 and the last frame land on the same position.
  const angle = (2 * Math.PI * frame) / DURATION_IN_FRAMES;
  const driftX = 22 * Math.sin(angle);
  const driftY = 14 * Math.cos(angle) - 14;

  return (
    <AbsoluteFill style={{ background: CREAM }}>
      <Img
        src={staticFile("geometry.jpg")}
        style={{
          position: "absolute",
          inset: -60,
          width: WIDTH + 120,
          height: HEIGHT + 120,
          objectFit: "cover",
          opacity: 0.5,
          transform: `translate(${driftX}px, ${driftY}px) scale(1.12)`,
        }}
      />
      {/* Warm wash so the geometry never competes with the content */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(120% 100% at 20% 0%, rgba(250, 246, 240, 0.9) 0%, rgba(250, 246, 240, 0.55) 55%, rgba(250, 246, 240, 0.75) 100%)",
        }}
      />

      {frame < S1.to && (
        <AbsoluteFill style={{ opacity: sceneOpacity(frame, S1.from, S1.to) }}>
          <EmailMagnetScene frame={frame} />
        </AbsoluteFill>
      )}
      {frame >= S2.from && frame < S2.to && (
        <AbsoluteFill style={{ opacity: sceneOpacity(frame, S2.from, S2.to) }}>
          <CountdownScene frame={frame} />
        </AbsoluteFill>
      )}
      {frame >= S3.from && frame < S3.to && (
        <AbsoluteFill style={{ opacity: sceneOpacity(frame, S3.from, S3.to) }}>
          <ClickPilotScene frame={frame} />
        </AbsoluteFill>
      )}
      {frame >= S4.from && (
        <AbsoluteFill style={{ opacity: sceneOpacity(frame, S4.from, S4.to) }}>
          <LockupScene frame={frame} />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
