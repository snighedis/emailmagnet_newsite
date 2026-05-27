import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "./route";

const originalEnv = { ...process.env };

function buildRequest(body: Record<string, unknown>) {
  return new Request("https://www.dentokudev.com/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://www.dentokudev.com",
    },
    body: JSON.stringify(body),
  });
}

function validPayload(overrides: Record<string, unknown> = {}) {
  const formStartedAt = Date.now() - 5000;

  return {
    firstName: "Ada",
    lastName: "Lovelace",
    email: `ada-${Math.random().toString(36).slice(2)}@example.com`,
    product: "EmailMagnet",
    message: "I need help with a billing issue for EmailMagnet.",
    website: "",
    company: "",
    formStartedAt,
    submittedAt: formStartedAt + 5000,
    ...overrides,
  };
}

describe("contact route spam protection", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    process.env = {
      ...originalEnv,
      LOOPS_CONTACT_FORM_ENDPOINT: "https://example.com/loops",
      TURNSTILE_SECRET_KEY: "test-secret",
    };
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  it("rejects production contact submissions without a Turnstile token when Turnstile is configured", async () => {
    const response = await POST(buildRequest(validPayload()));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      success: false,
      message: "Security check failed. Please refresh and try again.",
    });
  });

  it("submits to Loops after Turnstile verifies the request", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(Response.json({ success: true }))
      .mockResolvedValueOnce(Response.json({ success: true }));

    const response = await POST(buildRequest(validPayload({ turnstileToken: "valid-token" })));

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[0]?.[0]).toBe("https://challenges.cloudflare.com/turnstile/v0/siteverify");
    expect(fetchMock.mock.calls[1]?.[0]).toBe("https://example.com/loops");
  });
});
