"use client";

import { useEffect } from "react";

/**
 * Reveals [data-reveal] elements once, as they enter the viewport (tasteskill
 * "Reveal on scroll"). The hidden state lives in CSS behind html.js and
 * prefers-reduced-motion: no-preference, so without script or with reduced
 * motion everything is simply shown. Renders nothing.
 */
export function HomeReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
