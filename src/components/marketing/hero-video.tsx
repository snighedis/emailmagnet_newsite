"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type HeroVideoProps = {
  className?: string;
  /** Defaults to the homepage Remotion render. */
  src?: string;
  /** Shown before playback and as the reduced-motion / no-JS experience. */
  poster?: string;
  label?: string;
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
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <div
      className={cn(
        "shadow-soft-lg overflow-hidden rounded-2xl border border-black/[0.06] bg-white",
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
      >
        {/* h264 only: universally decodable, and at this bitrate it came out
            SMALLER than the vp9 webm, which also hit decode errors in testing. */}
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
