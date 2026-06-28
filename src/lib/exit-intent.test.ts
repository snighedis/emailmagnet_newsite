// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";

import {
  canShowExitIntent,
  markExitIntentShown,
  markExitIntentSubmitted,
} from "@/lib/exit-intent";

afterEach(() => {
  window.localStorage.clear();
});

describe("exit-intent frequency cap", () => {
  it("allows showing when nothing is stored", () => {
    expect(canShowExitIntent()).toBe(true);
  });

  it("suppresses the modal during the cooldown after it was shown", () => {
    markExitIntentShown();
    expect(canShowExitIntent()).toBe(false);
  });

  it("allows showing again once the cooldown has elapsed", () => {
    markExitIntentShown();
    const raw = JSON.parse(window.localStorage.getItem("exit-intent") as string);
    raw.timestamp = Date.now() - 15 * 24 * 60 * 60 * 1000; // 15 days ago (> 14d cooldown)
    window.localStorage.setItem("exit-intent", JSON.stringify(raw));
    expect(canShowExitIntent()).toBe(true);
  });

  it("never shows again after a successful submit", () => {
    markExitIntentSubmitted();
    const raw = JSON.parse(window.localStorage.getItem("exit-intent") as string);
    raw.timestamp = Date.now() - 400 * 24 * 60 * 60 * 1000; // long ago
    window.localStorage.setItem("exit-intent", JSON.stringify(raw));
    expect(canShowExitIntent()).toBe(false);
  });

  it("re-shows when the stored schema version is stale", () => {
    window.localStorage.setItem(
      "exit-intent",
      JSON.stringify({ version: 0, timestamp: Date.now(), submitted: true }),
    );
    expect(canShowExitIntent()).toBe(true);
  });
});
