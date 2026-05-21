import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  product?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const loopsEndpoint = process.env.LOOPS_CONTACT_FORM_ENDPOINT;
  if (!loopsEndpoint) {
    return NextResponse.json(
      { success: false, message: "Contact service is not configured yet." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request payload." }, { status: 400 });
  }

  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const firstName = (payload.firstName ?? "").trim();
  const lastName = (payload.lastName ?? "").trim();
  const email = (payload.email ?? "").trim();
  const product = (payload.product ?? "General inquiry").trim();
  const message = (payload.message ?? "").trim();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Fill first name, last name, a valid email, and message before sending." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ success: false, message: "Enter a valid email address." }, { status: 400 });
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
