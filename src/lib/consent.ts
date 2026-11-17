/**
 * Cookie consent for analytics and ad tracking. Google tags run in Consent
 * Mode v2 (cookieless pings until granted); the Meta Pixel holds its events
 * until granted. The choice lives in localStorage, which can be blocked, so
 * every access is guarded.
 */

export type Consent = "granted" | "denied";

export const CONSENT_KEY = "ms-consent";
/** Fired on window to bring the consent banner back. */
export const CONSENT_OPEN = "ms-consent-open";

export function getConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Storage blocked: the choice still applies for this visit.
  }
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
  window.gtag?.("set", "ads_data_redaction", choice === "denied");
  window.fbq?.("consent", choice === "granted" ? "grant" : "revoke");
}
