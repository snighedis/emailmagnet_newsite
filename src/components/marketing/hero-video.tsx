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
   * For a film that carries its own AI label and leaves no room at its foot:
   * `overlay` places the controls over the film, on the line of the film's own
   * label; `below` shows the controls and the HTML label in a row under the
   * film instead, where the film's label is too small to read. Each takes the
   * classes that say where (and at which widths) it applies.
   */
  layout?: { overlay: string; below: string };
  /**
   * A cut of the film for phones and tablets, shown below 1024px instead of the
   * main one: the main film's type is too small to read there.
   */
  phone?: { src: string; poster: string; width: number; height: number };
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
  layout,
  phone,
  band = false,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const phoneRef = useRef<HTMLVideoElement>(null);
  const disclosureId = useId();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // With a phone cut, only the film on screen plays: the other is display:none.
  const wide = () => window.matchMedia("(min-width: 64rem)").matches;
  const active = () => (phone && !wide() ? phoneRef.current : videoRef.current);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const width = window.matchMedia("(min-width: 64rem)");
    const sync = () => {
      const current = phone && !width.matches ? phoneRef.current : videoRef.current;
      for (const video of [videoRef.current, phoneRef.current]) {
        if (video && video !== current) video.pause();
      }
      if (!current) return;
      if (reduceMotion.matches) {
        current.pause();
      } else {
        current.play().catch(() => {});
      }
    };
    sync();
    reduceMotion.addEventListener("change", sync);
    width.addEventListener("change", sync);
    return () => {
      reduceMotion.removeEventListener("change", sync);
      width.removeEventListener("change", sync);
    };
  }, [phone]);

  const togglePlay = () => {
    const video = active();
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleSound = () => {
    const video = active();
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) video.play().catch(() => {});
  };

  const buttonClass =
    "bg-ink/85 hover:bg-ink focus-visible:ring-brand flex h-11 w-11 items-center justify-center rounded-full text-white outline-none transition duration-[160ms] ease-out focus-visible:ring-2 active:scale-[0.95] motion-reduce:active:scale-100";

  const buttons = controls ? (
    <>
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
    </>
  ) : null;

  const disclosure = (position?: string) =>
    aiDisclosure ? (
      <p
        id={disclosureId}
        className={cn("bg-ink rounded-full px-3 py-1.5 text-[14px] font-medium text-white", position)}
      >
        {aiDisclosure}
      </p>
    ) : null;

  return (
    <div
      className={cn(
        band
          ? "bg-background relative overflow-hidden"
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
        className={cn("block h-auto w-full", phone && "hidden lg:block")}
        aria-label={label}
        aria-describedby={aiDisclosure ? disclosureId : undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {/* h264 only: universally decodable, and at this bitrate it came out
            SMALLER than the vp9 webm, which also hit decode errors in testing. */}
        <source src={src} type="video/mp4" />
      </video>
      {phone ? (
        <video
          ref={phoneRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={phone.poster}
          width={phone.width}
          height={phone.height}
          style={{ aspectRatio: `${phone.width} / ${phone.height}` }}
          className="block h-auto w-full lg:hidden"
          aria-label={label}
          aria-describedby={aiDisclosure ? disclosureId : undefined}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={phone.src} type="video/mp4" />
        </video>
      ) : null}
      {layout ? (
        <>
          {buttons ? <div className={cn("absolute flex gap-2", layout.overlay)}>{buttons}</div> : null}
          <div className={cn("flex items-center justify-between gap-3 pt-3", layout.below)}>
            <div className="flex gap-2">{buttons}</div>
            {disclosure()}
          </div>
        </>
      ) : (
        <>
          {disclosure(cn("pointer-events-none absolute", band ? "right-4 bottom-4" : "top-3 left-3"))}
          {buttons ? (
            <div className={cn("absolute flex gap-2", band ? "bottom-4 left-4" : "right-3 bottom-3")}>{buttons}</div>
          ) : null}
        </>
      )}
    </div>
  );
}
