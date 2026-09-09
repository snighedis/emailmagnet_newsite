import { describe, expect, it } from "vitest";
import { isValidMessage, isValidName } from "./contact-validation";

describe("isValidName", () => {
  it("accepts accented and non-Latin names", () => {
    for (const name of ["Niccolò", "Zoë", "José María", "D'Angelo", "Anne-Marie", "Søren", "Ελένη"]) {
      expect(isValidName(name), name).toBe(true);
    }
  });

  it("still rejects digits, symbols and single characters", () => {
    for (const name of ["A", "R2D2", "john@doe", "<script>", ""]) {
      expect(isValidName(name), name).toBe(false);
    }
  });
});

describe("isValidMessage", () => {
  it("accepts an Italian message with accented letters only", () => {
    expect(isValidMessage("Vorrei un preventivo per un'estensione Chrome, è possibile?")).toBe(true);
  });

  it("rejects messages that are too short or without letters", () => {
    expect(isValidMessage("ciao")).toBe(false);
    expect(isValidMessage("1234567890 1234567890 1234567890")).toBe(false);
  });
});
