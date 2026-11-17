/**
 * One call per business event, fanned out to every ad platform:
 *   - GA4 (recommended event names, so they slot into GA's reports)
 *   - Google Ads conversions with enhanced conversions, when a label is set
 *   - Meta Pixel in the browser, and the Meta Conversions API from our server
 *     with the same event id, so Meta counts each event once
 *
 * IDs come from NEXT_PUBLIC_* env vars (see .env.example); a missing ID just
 * switches that platform off.
 */

import { getConsent } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const GA_ID = "G-NEWKPECJ0T";
export const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "771944325107338";

export type TrackEvent = "add_to_cart" | "begin_checkout" | "generate_lead" | "sign_up" | "contact";

const META_EVENT: Record<TrackEvent, string> = {
  add_to_cart: "AddToCart",
  begin_checkout: "InitiateCheckout",
  generate_lead: "Lead",
  sign_up: "CompleteRegistration",
  contact: "Contact",
};

const ADS_LABEL: Partial<Record<TrackEvent, string | undefined>> = {
  generate_lead: process.env.NEXT_PUBLIC_GOOGLE_ADS_ORDER_LABEL,
  sign_up: process.env.NEXT_PUBLIC_GOOGLE_ADS_SIGNUP_LABEL,
};

export type TrackItem = { item_id: string; item_name: string; quantity: number; price: number };

export type TrackParams = {
  /** Dollars, not cents. */
  value?: number;
  currency?: "CAD";
  items?: TrackItem[];
  method?: string;
  form?: string;
  [key: string]: unknown;
};

export type TrackUser = { email?: string; phone?: string };

/** North American numbers to E.164 (+19025551234); anything else is dropped. */
function e164(phone?: string) {
  const digits = phone?.replace(/\D/g, "") ?? "";
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return undefined;
}

const FBCLID_KEY = "ms-fbclid";

/** Keep the ad click id from the landing URL so later conversions can cite it. */
export function rememberFbclid() {
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  if (!fbclid) return;
  try {
    window.sessionStorage.setItem(FBCLID_KEY, `fb.1.${Date.now()}.${fbclid}`);
  } catch {
    // Storage blocked: the Pixel's own _fbc cookie still covers this.
  }
}

function storedFbc() {
  try {
    return window.sessionStorage.getItem(FBCLID_KEY) ?? undefined;
  } catch {
    return undefined;
  }
}

function metaCustomData(p: TrackParams) {
  return {
    ...(p.value !== undefined ? { value: p.value, currency: p.currency ?? "CAD" } : {}),
    ...(p.items?.length
      ? {
          content_type: "product",
          content_ids: p.items.map((i) => i.item_id),
          contents: p.items.map((i) => ({ id: i.item_id, quantity: i.quantity, item_price: i.price })),
          num_items: p.items.reduce((n, i) => n + i.quantity, 0),
        }
      : {}),
    ...(p.method ? { method: p.method } : {}),
    ...(p.form ? { content_name: p.form } : {}),
  };
}

export function track(event: TrackEvent, params: TrackParams = {}, user: TrackUser = {}) {
  if (typeof window === "undefined") return;
  const eventId = crypto.randomUUID();
  const phone = e164(user.phone);

  // gtag hashes these itself before sending.
  if (user.email || phone) {
    window.gtag?.("set", "user_data", {
      ...(user.email ? { email: user.email.trim().toLowerCase() } : {}),
      ...(phone ? { phone_number: phone } : {}),
    });
  }
  window.gtag?.("event", event, params);

  const label = ADS_LABEL[event];
  if (ADS_ID && label) {
    window.gtag?.("event", "conversion", {
      send_to: `${ADS_ID}/${label}`,
      ...(params.value !== undefined ? { value: params.value, currency: params.currency ?? "CAD" } : {}),
      transaction_id: eventId,
    });
  }

  if (!PIXEL_ID) return;
  const custom = metaCustomData(params);
  window.fbq?.("track", META_EVENT[event], custom, { eventID: eventId });

  // The server copy only goes out with consent, like the Pixel's.
  if (getConsent() !== "granted") return;
  fetch("/api/meta", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify({
      event_name: META_EVENT[event],
      event_id: eventId,
      event_source_url: window.location.href,
      custom_data: custom,
      user_data: { email: user.email, phone, fbc: storedFbc() },
    }),
  }).catch(() => {
    // The Pixel already reported it; the server copy is a backup.
  });
}
