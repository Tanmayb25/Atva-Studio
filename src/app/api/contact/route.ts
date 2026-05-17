import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

const isString = (v: unknown): v is string => typeof v === "string";

export async function POST(req: Request) {
  const webhookUrl = process.env.GSHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Missing GSHEET_WEBHOOK_URL" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const payload = body as Partial<ContactPayload>;

  if (
    !isString(payload.name) ||
    !isString(payload.email) ||
    !isString(payload.company) ||
    !isString(payload.budget) ||
    !isString(payload.message)
  ) {
    return NextResponse.json(
      { error: "Invalid payload" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        company: payload.company,
        budget: payload.budget,
        message: payload.message,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        {
          error: "Failed to forward to Google Sheets webhook",
          status: res.status,
          details: text,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Error calling Google Sheets webhook",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 502 }
    );
  }
}
