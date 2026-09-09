import { describe, expect, it } from "vitest";
import { switchTarget } from "./switcher";

describe("switchTarget", () => {
  it("from an English page with a twin, goes to the Italian twin", () => {
    expect(switchTarget("en", "/about")).toBe("/it/chi-siamo");
    expect(switchTarget("en", "/")).toBe("/it");
  });

  it("from an English page without a twin, goes to the Italian home", () => {
    expect(switchTarget("en", "/blog/some-post")).toBe("/it");
  });

  it("from an Italian page, goes back to the English twin", () => {
    expect(switchTarget("it", "/it/chi-siamo")).toBe("/about");
    expect(switchTarget("it", "/it")).toBe("/");
  });

  it("from an Italian URL with no twin, goes to the English home", () => {
    expect(switchTarget("it", "/it/qualcosa")).toBe("/");
  });
});
