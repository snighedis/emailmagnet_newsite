/**
 * Shared client-side helper to subscribe an email to the Loops newsletter form.
 * Used by the footer NewsletterSignup, the blog LeadMagnetSignup and the
 * exit-intent modal so the POST shape stays in one place.
 */

const LOOPS_NEWSLETTER_ENDPOINT =
  "https://app.loops.so/api/newsletter-form/cmo7cihgh00am0izdbmbm6u1b";

export type LoopsErrorCode = "rate-limited" | "rejected" | "network";

export type LoopsResult = { ok: true } | { ok: false; code: LoopsErrorCode; message?: string };

export async function subscribeToLoops(
  email: string,
  options?: { userGroup?: string },
): Promise<LoopsResult> {
  const body = new URLSearchParams({
    userGroup: options?.userGroup ?? "",
    mailingLists: "",
    email,
  });

  try {
    const response = await fetch(LOOPS_NEWSLETTER_ENDPOINT, {
      method: "POST",
      body: body.toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (response.ok) return { ok: true };

    const data = (await response.json().catch(() => null)) as { message?: string } | null;
    return { ok: false, code: "rejected", message: data?.message || response.statusText || undefined };
  } catch (error) {
    const err = error as Error;
    // Loops returns an opaque network error when its per-client rate limit trips.
    if (err.message === "Failed to fetch") {
      return { ok: false, code: "rate-limited" };
    }
    return { ok: false, code: "network", message: err.message || undefined };
  }
}

/**
 * Text to show for a failed subscription. Loops' own message is in English,
 * so it is only surfaced on English pages; every other locale gets its own
 * generic string.
 */
export function loopsErrorText(
  result: Extract<LoopsResult, { ok: false }>,
  copy: { generic: string; tooMany: string },
  lang: string,
): string {
  if (result.code === "rate-limited") return copy.tooMany;
  if (lang === "en" && result.message) return result.message;
  return copy.generic;
}
