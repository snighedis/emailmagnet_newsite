"use client";

import { useEffect, useRef } from "react";

type DelayedAutoplayVideoProps = {
  src: string;
  delayMs?: number;
  className?: string;
  ariaLabel: string;
};

export function DelayedAutoplayVideo({
  src,
  delayMs = 1000,
  className,
  ariaLabel,
}: DelayedAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      video.muted = true;
      void video.play().catch(() => {
        // Browser autoplay policy can still block playback in unusual settings.
      });
    }, delayMs);

    return () => window.clearTimeout(timeoutId);
  }, [delayMs]);

  return (
    <video
      ref={videoRef}
      aria-label={ariaLabel}
      className={className}
      muted
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
