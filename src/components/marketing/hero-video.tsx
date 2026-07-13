"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type HeroVideoProps = {
  className?: string;
};

/**
 * Homepage hero video (rendered offline with Remotion from real product UI,
 * see video/README.md). Muted 9s loop, Apollo-style.
 *
 * Autoplay is started from JS after mount and ONLY when the visitor does not
 * prefer reduced motion, so the static poster is the reduced-motion and no-JS
 * experience. The poster is also the page's LCP image (preloaded in page.tsx).
 */
export function HeroVideo({ className }: HeroVideoProps) {
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
        poster="/brand/homepage-hero-poster.jpg"
        width={1280}
        height={800}
        className="aspect-[1280/800] h-auto w-full"
        aria-label="Short looping showcase of the four Dentoku Dev products"
      >
        {/* h264 only: universally decodable, and at this bitrate it came out
            SMALLER than the vp9 webm, which also hit decode errors in testing. */}
        <source src="/brand/homepage-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
