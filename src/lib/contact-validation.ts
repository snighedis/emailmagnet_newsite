/**
 * Input checks for the contact API. Kept out of the route file so they can be
 * unit-tested without the Turnstile and Loops plumbing.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Any letter in any script, then letters, apostrophes, spaces and hyphens.
 * The previous [A-Za-z] class rejected every accented name (Niccolò, Zoë,
 * José), which on an Italian contact form is most of them.
 */
export function isValidName(value: string): boolean {
  return /^\p{L}[\p{L}' -]{1,59}$/u.test(value);
}

export function isValidMessage(value: string): boolean {
  const normalized = value.trim();
  if (normalized.length < 20 || normalized.length > 3000) return false;
  if (!/\p{L}/u.test(normalized)) return false;
  if (/(.)\1{6,}/.test(normalized)) return false;
  return true;
}
