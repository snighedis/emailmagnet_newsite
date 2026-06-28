/**
 * Shared client-side helper to subscribe an email to the Loops newsletter form.
 * Used by the footer NewsletterSignup and the exit-intent modal so the POST
 * shape stays in one place.
 */

const LOOPS_NEWSLETTER_ENDPOINT =
  "https://app.loops.so/api/newsletter-form/cmo7cihgh00am0izdbmbm6u1b";

export type LoopsResult = { ok: boolean; message?: string };

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
    return { ok: false, message: data?.message || response.statusText || "Something went wrong" };
  } catch (error) {
    const err = error as Error;
    // Loops returns an opaque network error when its per-client rate limit trips.
    if (err.message === "Failed to fetch") {
      return { ok: false, message: "Too many signups, please try again in a little while" };
    }
    return { ok: false, message: err.message || "Something went wrong" };
  }
}
