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
  layout?: { overlay: string; below: string; disclosure?: string };
  /**
   * A film that tells a story needs to show where it is: a track beside the
   * pause button, with the film's orange dot travelling along it and going back
   * to the start when the film loops. `label` names it for screen readers;
   * `chapters` are the seconds at which each part after the first begins, cut
   * into the track as gaps. It is a real seek control (a native range input).
   * Needs `layout`, since the track sits in the row under the film.
   */
  progress?: { label: string; chapters?: number[] };
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

/** Seconds as m:ss, for the position read to screen readers (never shown). */
const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`; // taste-skill-ignore

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
  progress,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const phoneRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seekRef = useRef<HTMLInputElement>(null);
  // Paused by the visitor: scrolling the film back into view must not restart it.
  const userPaused = useRef(false);
  const disclosureId = useId();
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(true);

  // With a phone cut, only the film on screen plays: the other is display:none.
  const wide = () => window.matchMedia("(min-width: 64rem)").matches;
  const active = () => (phone && !wide() ? phoneRef.current : videoRef.current);

  // The film plays only while the visitor can see it: it starts (the first time,
  // from its first frame) once half of it is on screen, stops when less than a
  // third is, and picks up from there when they scroll back. A film that tells a
  // story should not run its opening behind the fold or under the page.
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const width = window.matchMedia("(min-width: 64rem)");
    let inView = false;
    const sync = () => {
      const current = phone && !width.matches ? phoneRef.current : videoRef.current;
      for (const video of [videoRef.current, phoneRef.current]) {
        if (video && video !== current) video.pause();
      }
      if (!current) return;
      if (reduceMotion.matches || !inView || userPaused.current) {
        current.pause();
      } else {
        current.play().catch(() => {});
      }
    };
    // The cut that is display:none never intersects, so the visible one decides.
    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) ratios.set(entry.target, entry.intersectionRatio);
        const seen = Math.max(0, ...ratios.values());
        if (seen >= 0.5) inView = true;
        else if (seen < 0.3) inView = false;
        sync();
      },
      { threshold: [0, 0.3, 0.5] },
    );
    for (const video of [videoRef.current, phoneRef.current]) {
      if (video) observer.observe(video);
    }
    reduceMotion.addEventListener("change", sync);
    width.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", sync);
      width.removeEventListener("change", sync);
    };
  }, [phone]);

  // The dot follows the film frame by frame while it plays. Written straight to
  // the track (a custom property and the range's value), so React does not
  // re-render sixty times a second.
  useEffect(() => {
    if (!progress) return;
    let frame = 0;
    let lastSecond = -1;
    const paint = () => {
      const video = phone && !wide() ? phoneRef.current : videoRef.current;
      const total = video?.duration;
      if (video && total && Number.isFinite(total)) {
        // The metadata can arrive before React attaches onLoadedMetadata.
        setDuration(total);
        trackRef.current?.style.setProperty("--p", String(video.currentTime / total));
        const seek = seekRef.current;
        if (seek) {
          seek.value = String(video.currentTime);
          const second = Math.floor(video.currentTime);
          if (second !== lastSecond) {
            lastSecond = second;
            seek.setAttribute("aria-valuetext", `${clock(video.currentTime)} / ${clock(total)}`);
          }
        }
      }
      if (playing) frame = requestAnimationFrame(paint);
    };
    paint();
    return () => cancelAnimationFrame(frame);
  }, [playing, progress, phone, duration]);

  const togglePlay = () => {
    const video = active();
    if (!video) return;
    userPaused.current = !video.paused;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const seek = (seconds: number) => {
    const video = active();
    if (!video) return;
    video.currentTime = seconds;
    trackRef.current?.style.setProperty("--p", String(video.duration ? seconds / video.duration : 0));
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

  // The track: what is left in a tone of the ink, what has played in ink, the
  // parts cut in as gaps of the ground, and the film's dot at the head. The
  // range input over it is the control (drag, tap, arrow keys); it is 44px
  // tall for a thumb although the track itself is 4px.
  const track = progress ? (
    <div
      ref={trackRef}
      className="has-[:focus-visible]:ring-brand relative h-11 min-w-0 flex-1 has-[:focus-visible]:ring-2"
    >
      <div aria-hidden="true" className="bg-ink/15 absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden">
        <div className="bg-ink h-full origin-left" style={{ transform: "scaleX(var(--p, 0))" }} />
      </div>
      {duration
        ? progress.chapters?.map((start) => (
            <span
              key={start}
              aria-hidden="true"
              className="bg-background absolute top-1/2 h-1 w-1 -translate-y-1/2"
              style={{ left: `calc(${(start / duration) * 100}% - 2px)` }}
            />
          ))
        : null}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2"
        style={{ transform: "translateX(calc(var(--p, 0) * 100%))" }}
      >
        <span className="bg-brand absolute top-0 left-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </div>
      <input
        ref={seekRef}
        type="range"
        min={0}
        max={duration || 1}
        step={0.1}
        defaultValue={0}
        aria-label={progress.label}
        onChange={(event) => seek(Number(event.target.value))}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  ) : null;

  const onMetadata = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    if (event.currentTarget === active()) setDuration(event.currentTarget.duration);
  };

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
        onLoadedMetadata={onMetadata}
        onDurationChange={onMetadata}
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
          onLoadedMetadata={onMetadata}
          onDurationChange={onMetadata}
        >
          <source src={phone.src} type="video/mp4" />
        </video>
      ) : null}
      {layout ? (
        <>
          {buttons ? <div className={cn("absolute flex gap-2", layout.overlay)}>{buttons}</div> : null}
          <div className={cn("flex items-center justify-between gap-4 pt-3", layout.below)}>
            <div className="flex gap-2">{buttons}</div>
            {track}
            {disclosure(layout.disclosure)}
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
