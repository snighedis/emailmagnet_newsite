import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  product?: string;
  message?: string;
  website?: string;
  company?: string;
  formStartedAt?: number;
  submittedAt?: number;
  turnstileToken?: string;
};

type HitStore = Map<string, number[]>;

const RATE_WINDOW_MS = 10 * 60 * 1000;
const IP_RATE_LIMIT = 5;
const EMAIL_RATE_LIMIT = 2;
const MIN_FORM_FILL_MS = 2500;
const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1000;
const TURNSTILE_VERIFY_ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const allowedOrigins = [
  "https://www.dentokudev.com",
  "https://dentokudev.com",
  "http://localhost:3000",
  "http://localhost:3010",
  "http://localhost:3016",
];

const globalStore = globalThis as typeof globalThis & {
  __contactIpHits?: HitStore;
  __contactEmailHits?: HitStore;
};

const ipHits = globalStore.__contactIpHits ?? new Map<string, number[]>();
const emailHits = globalStore.__contactEmailHits ?? new Map<string, number[]>();
globalStore.__contactIpHits = ipHits;
globalStore.__contactEmailHits = emailHits;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidName(value: string): boolean {
  return /^[A-Za-z][A-Za-z' -]{1,59}$/.test(value);
}

function isValidMessage(value: string): boolean {
  const normalized = value.trim();
  if (normalized.length < 20 || normalized.length > 3000) return false;
  if (!/[A-Za-z]/.test(normalized)) return false;
  if (/(.)\1{6,}/.test(normalized)) return false;
  return true;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  return "unknown";
}

function isAllowedOrigin(request: Request): boolean {
  const configured = process.env.CONTACT_ALLOWED_ORIGINS
    ? process.env.CONTACT_ALLOWED_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
    : allowedOrigins;
  const allowSet = new Set(configured);

  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const matches = (raw: string | null) => {
    if (!raw) return false;
    try {
      const parsed = new URL(raw);
      return allowSet.has(parsed.origin);
    } catch {
      return false;
    }
  };

  return matches(origin) || matches(referer);
}

function hitLimit(store: HitStore, key: string, limit: number, now: number): boolean {
  const hits = store.get(key) ?? [];
  const recentHits = hits.filter((timestamp) => now - timestamp < RATE_WINDOW_MS);
  recentHits.push(now);
  store.set(key, recentHits);
  return recentHits.length > limit;
}

async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

  if (!token || token.trim().length === 0) return false;

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (ip !== "unknown") {
    body.set("remoteip", ip);
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_ENDPOINT, {
      method: "POST",
      body,
      cache: "no-store",
    });
    const data = (await response.json().catch(() => null)) as { success?: boolean } | null;
    return response.ok && data?.success === true;
  } catch {
    return false;
  }
}

function buildTicketId(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const seed = `${now.getTime().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
  return `DD-${year}-${seed}`.toUpperCase();
}

export async function POST(request: Request) {
  const loopsEndpoint = process.env.LOOPS_CONTACT_FORM_ENDPOINT;
  if (!loopsEndpoint) {
    return NextResponse.json(
      { success: false, message: "Contact service is not configured yet." },
      { status: 500 },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ success: false, message: "Unsupported content type." }, { status: 415 });
  }

  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ success: false, message: "Origin not allowed." }, { status: 403 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request payload." }, { status: 400 });
  }

  if ((payload.website && payload.website.trim().length > 0) || (payload.company && payload.company.trim().length > 0)) {
    return NextResponse.json({ success: true });
  }

  const firstName = (payload.firstName ?? "").trim();
  const lastName = (payload.lastName ?? "").trim();
  const email = (payload.email ?? "").trim().toLowerCase();
  const product = (payload.product ?? "General inquiry").trim();
  const message = (payload.message ?? "").trim();
  const nowIso = new Date().toISOString();
  const ticketId = buildTicketId();
  const nowTs = Date.now();
  const formStartedAt = Number(payload.formStartedAt ?? 0);
  const submittedAt = Number(payload.submittedAt ?? nowTs);
  const fillMs = submittedAt - formStartedAt;

  if (!Number.isFinite(formStartedAt) || !Number.isFinite(submittedAt) || fillMs < MIN_FORM_FILL_MS || fillMs > MAX_FORM_AGE_MS) {
    return NextResponse.json({ success: true });
  }

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Fill first name, last name, a valid email, and message before sending." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ success: false, message: "Enter a valid email address." }, { status: 400 });
  }

  if (!isValidName(firstName) || !isValidName(lastName)) {
    return NextResponse.json({ success: false, message: "Enter a valid first and last name." }, { status: 400 });
  }

  if (!isValidMessage(message)) {
    return NextResponse.json({ success: false, message: "Message too short or invalid." }, { status: 400 });
  }

  const ip = getClientIp(request);
  const verifiedHuman = await verifyTurnstile(payload.turnstileToken, ip);
  if (!verifiedHuman) {
    return NextResponse.json(
      { success: false, message: "Security check failed. Please refresh and try again." },
      { status: 400 },
    );
  }

  if (hitLimit(ipHits, ip, IP_RATE_LIMIT, nowTs) || hitLimit(emailHits, email, EMAIL_RATE_LIMIT, nowTs)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const notes = [
    "Contact request from Dentoku Dev website",
    `Product: ${product}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const formBody = new URLSearchParams({
    email,
    firstName,
    lastName,
    source: "Website contact form",
    userGroup: "Contact requests",
    notes,
    ticketStatus: "new",
    ticketPriority: "normal",
    ticketSource: "website-contact-form",
    lastContactReason: product,
    lastInboundMessage: message,
    lastInboundAt: nowIso,
    ticketId,
    ticketOwner: "",
  });

  try {
    const response = await fetch(loopsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
      cache: "no-store",
    });

    if (response.status === 429) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a minute." },
        { status: 429 },
      );
    }

    if (!response.ok) {
      const errorData = (await response.json().catch(() => null)) as { message?: string } | null;
      return NextResponse.json(
        { success: false, message: errorData?.message || "Unable to send your request right now." },
        { status: response.status },
      );
    }

    const data = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;
    if (!data?.success) {
      return NextResponse.json(
        { success: false, message: data?.message || "Unable to send your request right now." },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Connection error. Please try again in a moment." },
      { status: 500 },
    );
  }
}
