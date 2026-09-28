import { NextResponse } from "next/server";

const RECIPIENT = "info@prismatechinc.com";
const REQUESTS = new Set(["POS quote", "Statement review", "15-minute call"]);

function text(value: unknown, max: number, keepLines = false) {
  const raw = String(value ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, " ");
  const cleaned = keepLines ? raw.replace(/[ \t]+\n/g, "\n").trim() : raw.replace(/\s+/g, " ").trim();
  return cleaned.slice(0, max);
}

async function readLead(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    return parsed as Record<string, unknown>;
  }
  const form = await request.formData();
  return {
    name: form.get("name"),
    business: form.get("business"),
    businessType: form.get("businessType") || form.get("industry"),
    request: form.get("request") || "POS quote",
    interestedIn: form.get("interestedIn") || form.get("device") || form.get("timing"),
    message: form.get("message") || form.get("context"),
    email: form.get("email"),
  };
}

export async function POST(request: Request) {
  const wantsJson = (request.headers.get("content-type") || "").includes("application/json");
  let body: Record<string, unknown> | null;
  try {
    body = await readLead(request);
  } catch {
    body = null;
  }
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = text(body.name, 100);
  const business = text(body.business, 150);
  const businessType = text(body.businessType, 80);
  const requestType = text(body.request, 40);
  const interestedIn = text(body.interestedIn, 150);
  const message = text(body.message, 1500, true);
  const email = text(body.email, 200);

  if (!name || !business || !REQUESTS.has(requestType)) {
    return NextResponse.json(
      { ok: false, error: "Please add your name and business, then try again." },
      { status: 400 },
    );
  }

  const fields: Record<string, string> = {
    _subject: `PrismaTech ${requestType} — ${name} / ${business}`,
    _template: "table",
    _captcha: "false",
    Name: name,
    Business: business,
    Request: requestType,
  };
  if (businessType) fields["Business Type"] = businessType;
  if (interestedIn) fields["Interested In"] = interestedIn;
  if (email) fields.Email = email;
  if (message) fields.Message = message;

  const origin = request.headers.get("origin") || new URL(request.url).origin;
  const referer = request.headers.get("referer") || `${origin}/lp/halloween`;

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: referer,
      },
      body: JSON.stringify(fields),
      signal: AbortSignal.timeout(15000),
    });
    const result = (await response.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
    const success = result?.success === true || result?.success === "true";
    const note = String(result?.message || "");
    if (!response.ok || !success) {
      const activating = /activat/i.test(note);
      return NextResponse.json(
        {
          ok: false,
          error: activating
            ? "Check info@prismatechinc.com for a one-time confirmation email, open it, then submit again."
            : "We couldn’t send that just now. Please try again, or email info@prismatechinc.com.",
        },
        { status: activating ? 409 : 502 },
      );
    }
    if (!wantsJson) {
      return NextResponse.redirect(new URL("/lp/halloween/thank-you", request.url), 303);
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "We couldn’t send that just now. Please try again, or email info@prismatechinc.com." },
      { status: 502 },
    );
  }
}
