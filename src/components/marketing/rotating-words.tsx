"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type RotatingWordsProps = {
  words: string[];
  /** Time each word stays visible, in ms. */
  interval?: number;
  className?: string;
};

/**
 * HubSpot-style rotating headline word: cycles through `words`, each new word
 * sliding up + fading in. Only one word is mounted at a time (keyed by index),
 * and the longest word is rendered invisibly to reserve the line box so nothing
 * around it shifts. Respects prefers-reduced-motion (static single word).
 */
export function RotatingWords({ words, interval = 2200, className }: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [reduceMotion, words.length, interval]);

  if (reduceMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className={cn("relative inline-block align-bottom", className)}>
      {/* Invisible sizer reserves width + line height to prevent layout shift */}
      <span className="invisible" aria-hidden>
        {longest}
      </span>
      <motion.span
        key={index}
        className="absolute top-0 left-0"
        initial={{ y: "0.55em", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {words[index]}
      </motion.span>
    </span>
  );
}
