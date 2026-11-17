import { createHash } from "node:crypto";
import type { NextRequest } from "next/server";
import { PIXEL_ID } from "@/lib/track";

/**
 * Meta Conversions API relay. The browser posts each tracked event here with
 * the same event id the Pixel used, so Meta keeps one copy; this copy still
 * arrives when an ad blocker or iOS stops the Pixel.
 *
 * Env vars:
 *   NEXT_PUBLIC_META_PIXEL_ID  optional, overrides the built-in pixel id
 *   META_CAPI_TOKEN            required, Events Manager → Settings → Conversions API
 *   META_TEST_EVENT_CODE       optional, routes events to Events Manager → Test events
 */

const GRAPH_VERSION = "v23.0";
const ALLOWED_EVENTS = new Set(["AddToCart", "InitiateCheckout", "Lead", "CompleteRegistration", "Contact"]);
const SITE_HOSTS = new Set(["www.mainsqueezelemonadeco.com", "mainsqueezelemonadeco.com", "localhost"]);

const sha256 = (v: string) => createHash("sha256").update(v).digest("hex");
const str = (v: unknown, max = 500) => (typeof v === "string" && v.length <= max ? v : undefined);

function sameSite(url: string | undefined) {
  if (!url) return false;
  try {
    return SITE_HOSTS.has(new URL(url).hostname);
  } catch {
    return false;
  }
}

/** Only plain numbers, strings and the contents list go through. */
function cleanCustomData(data: unknown) {
  if (!data || typeof data !== "object") return {};
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (typeof v === "number" && Number.isFinite(v)) out[k] = v;
    else if (typeof v === "string" && v.length <= 200) out[k] = v;
    else if (Array.isArray(v) && v.length <= 20) out[k] = v;
  }
  return out;
}

export async function POST(request: NextRequest) {
  const pixelId = PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return new Response(null, { status: 204 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const eventName = str(body.event_name, 50);
  const eventId = str(body.event_id, 64);
  const sourceUrl = str(body.event_source_url, 2000);
  if (!eventName || !ALLOWED_EVENTS.has(eventName) || !eventId || !sameSite(sourceUrl)) {
    return new Response(null, { status: 400 });
  }

  const user = (body.user_data ?? {}) as Record<string, unknown>;
  const email = str(user.email, 254)?.trim().toLowerCase();
  const phone = str(user.phone, 20)?.replace(/\D/g, "");
  const fbc = request.cookies.get("_fbc")?.value ?? str(user.fbc, 500);
  const fbp = request.cookies.get("_fbp")?.value;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: sourceUrl,
        action_source: "website",
        user_data: {
          ...(email ? { em: [sha256(email)] } : {}),
          ...(phone ? { ph: [sha256(phone)] } : {}),
          ...(fbc ? { fbc } : {}),
          ...(fbp ? { fbp } : {}),
          ...(ip ? { client_ip_address: ip } : {}),
          client_user_agent: request.headers.get("user-agent") ?? undefined,
        },
        custom_data: cleanCustomData(body.custom_data),
      },
    ],
    ...(process.env.META_TEST_EVENT_CODE ? { test_event_code: process.env.META_TEST_EVENT_CODE } : {}),
  };

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) },
  );
  if (!res.ok) console.error("Meta CAPI: event rejected", res.status, await res.text());

  return new Response(null, { status: 204 });
}
