import { describe, expect, it } from "vitest";
import { home as en } from "@/copy/en/home";
import { home as it_ } from "@/copy/it/home";
import { briefMailto, briefText, formatFormula, formatHours, monthlyHours } from "./brief";

describe("monthlyHours", () => {
  it("is null until both numbers are known", () => {
    expect(monthlyHours({})).toBeNull();
    expect(monthlyHours({ timesPerWeek: 10 })).toBeNull();
  });

  it("turns weekly minutes into monthly hours over 52/12 weeks", () => {
    // 10 × 15 min = 150 min a week; × 52/12 = 650 min a month ≈ 10.83 h
    expect(monthlyHours({ timesPerWeek: 10, minutesEach: 15 })).toBeCloseTo(10.83, 2);
  });
});

describe("formatHours", () => {
  it("rounds to whole hours and handles one and under one", () => {
    expect(formatHours(10.83, it_.brief.text, "it")).toBe("circa 11 ore");
    expect(formatHours(1.2, it_.brief.text, "it")).toBe("circa 1 ora");
    expect(formatHours(0.4, it_.brief.text, "it")).toBe("meno di un’ora");
    expect(formatHours(10.83, en.brief.text, "en")).toBe("about 11 hours");
  });
});

describe("formatFormula", () => {
  it("shows the calculation in the visitor's number format", () => {
    expect(formatFormula({ timesPerWeek: 10, minutesEach: 15 }, it_.brief.text, "it")).toBe(
      "10 × 15 min × 4,33 settimane",
    );
  });
});

describe("briefMailto", () => {
  it("carries the answers and the baseline, encoded", () => {
    const url = briefMailto(
      "support@dentokudev.com",
      { business: "office", task: "quotes", timesPerWeek: 5, minutesEach: 30 },
      { business: "Studio professionale", task: "Preparare preventivi" },
      it_.brief.text,
      "it",
    );
    expect(url.startsWith("mailto:support@dentokudev.com?subject=")).toBe(true);
    const body = decodeURIComponent(url.split("&body=")[1]);
    expect(body).toContain("Preparare preventivi");
    expect(body).toContain("circa 11 ore");
  });
});

describe("brief copy never promises a saving (CONTEXT.md, Measured saving)", () => {
  for (const [lang, copy] of [["en", en], ["it", it_]] as const) {
    it(`${lang}: no saving figure, percentage or "save" claim`, () => {
      const text = JSON.stringify(copy.brief) + briefText(
        { business: "shop", task: "email", timesPerWeek: 20, minutesEach: 5 },
        { business: "x", task: "y" },
        copy.brief.text,
        lang,
      );
      expect(text).not.toMatch(/%|risparm|\bsav(e|es|ing)\b/i);
    });
  }
});
