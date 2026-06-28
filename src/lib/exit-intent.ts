/**
 * Frequency-capping for the exit-intent modal, in the style of consent.ts.
 * Stored in localStorage so a returning visitor isn't nagged: after the modal
 * is shown we wait COOLDOWN_DAYS before showing it again, and once the visitor
 * submits their email we never show it again.
 */

export const EXIT_INTENT_VERSION = 1;
const STORAGE_KEY = "exit-intent";
const COOLDOWN_DAYS = 14;

type ExitIntentRecord = {
  version: number;
  timestamp: number;
  submitted: boolean;
};

function read(): ExitIntentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ExitIntentRecord>;
    if (parsed.version !== EXIT_INTENT_VERSION) return null;
    if (typeof parsed.timestamp !== "number") return null;
    return {
      version: EXIT_INTENT_VERSION,
      timestamp: parsed.timestamp,
      submitted: parsed.submitted === true,
    };
  } catch {
    return null;
  }
}

function write(submitted: boolean): void {
  if (typeof window === "undefined") return;
  const record: ExitIntentRecord = {
    version: EXIT_INTENT_VERSION,
    timestamp: Date.now(),
    submitted,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
}

/** True when the modal may be shown: never shown, or shown long enough ago and not yet converted. */
export function canShowExitIntent(): boolean {
  const record = read();
  if (!record) return true;
  if (record.submitted) return false;
  const ageMs = Date.now() - record.timestamp;
  return ageMs < 0 || ageMs > COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
}

export function markExitIntentShown(): void {
  write(false);
}

export function markExitIntentSubmitted(): void {
  write(true);
}
