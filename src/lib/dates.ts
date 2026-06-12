/**
 * Format an ISO date (YYYY-MM-DD) as a readable English date, e.g. "May 26, 2026".
 * Falls back to the raw value when unparsable. UTC keeps date-only strings stable.
 */
export function formatDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
