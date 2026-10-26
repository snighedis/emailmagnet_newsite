"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type HeroVideoProps = {
  className?: string;
  /** Defaults to the homepage Remotion render. */
  src?: string;
  /** Shown before playback and as the reduced-motion / no-JS experience. */
  poster?: string;
  label?: string;
  /**
   * Accessible labels for the overlay buttons. When given, the video gets a
   * play/pause control (WCAG 2.2.2 for a looping video) and, for renders with a
   * soundtrack (soundOn/soundOff given), a sound toggle: browsers only
   * autoplay muted, so sound is always opt-in. Silent renders omit them.
   */
  controls?: { play: string; pause: string; soundOn?: string; soundOff?: string };
  /**
   * Visible label for footage that is an AI Act deep fake (Art. 50(4)): a
   * realistic person or scene made with AI. It stays on screen for the whole
   * loop and over the poster, because an autoplaying loop is seen from any
   * point, not from its start (Art. 50 guidelines, point 143).
   */
  aiDisclosure?: string;
  /**
   * Unframed: square corners, no border or shadow, for editorial pages. The
   * film keeps its own shape either way. The default is a framed player.
   */
  band?: boolean;
  width?: number;
  height?: number;
};

/**
 * Looping product video with a poster fallback.
 *
 * Autoplay is started from JS after mount and ONLY when the visitor does not
 * prefer reduced motion, so the static poster is the reduced-motion and no-JS
 * experience. On the homepage the poster is also the LCP image (preloaded in
 * page.tsx). `preload="metadata"` keeps the video itself off the critical path.
 *
 * Use this instead of a hand-rolled <video autoPlay>: an unconditional autoplay
 * loop with no pause affordance fails WCAG 2.2 SC 2.2.2, and without a poster
 * the area stays blank until the file arrives.
 */
export function HeroVideo({
  className,
  src = "/brand/homepage-hero.mp4",
  poster = "/brand/homepage-hero-poster.jpg",
  label = "Short looping showcase of the four Dentoku Dev products",
  width = 1280,
  height = 800,
  controls,
  aiDisclosure,
  band = false,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const disclosureId = useId();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduceMotion.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    sync();
    reduceMotion.addEventListener("change", sync);
    return () => reduceMotion.removeEventListener("change", sync);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) video.play().catch(() => {});
  };

  const buttonClass =
    "bg-ink/85 hover:bg-ink focus-visible:ring-brand flex h-11 w-11 items-center justify-center rounded-full text-white outline-none transition duration-[160ms] ease-out focus-visible:ring-2 active:scale-[0.95] motion-reduce:active:scale-100";

  return (
    <div
      className={cn(
        band
          ? "bg-ink relative overflow-hidden"
          : "shadow-soft-lg relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white",
        className,
      )}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        width={width}
        height={height}
        style={{ aspectRatio: `${width} / ${height}` }}
        className="h-auto w-full"
        aria-label={label}
        aria-describedby={aiDisclosure ? disclosureId : undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {/* h264 only: universally decodable, and at this bitrate it came out
            SMALLER than the vp9 webm, which also hit decode errors in testing. */}
        <source src={src} type="video/mp4" />
      </video>
      {aiDisclosure ? (
        <p
          id={disclosureId}
          className={cn(
            "bg-ink/85 pointer-events-none absolute rounded-full px-3 py-1.5 text-[14px] font-medium text-white",
            // Bottom-right: the film's own logo and prompt sit at the top.
            band ? "right-4 bottom-4" : "top-3 left-3",
          )}
        >
          {aiDisclosure}
        </p>
      ) : null}
      {controls ? (
        <div className={cn("absolute flex gap-2", band ? "bottom-4 left-4" : "right-3 bottom-3")}>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? controls.pause : controls.play}
            className={buttonClass}
          >
            <svg key={playing ? "pause" : "play"} viewBox="0 0 24 24" className="icon-swap h-5 w-5" fill="currentColor" aria-hidden>
              {playing ? (
                <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
              ) : (
                <path d="M8 5.5v13a.5.5 0 0 0 .77.42l10-6.5a.5.5 0 0 0 0-.84l-10-6.5A.5.5 0 0 0 8 5.5z" />
              )}
            </svg>
          </button>
          {controls.soundOn ? (
          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? controls.soundOn : controls.soundOff}
            aria-pressed={!muted}
            className={buttonClass}
          >
            <svg key={muted ? "muted" : "sound"} viewBox="0 0 24 24" className="icon-swap h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z" fill="currentColor" />
              {muted ? (
                <path d="M16 9.5l5 5M21 9.5l-5 5" />
              ) : (
                <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
              )}
            </svg>
          </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
