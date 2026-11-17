"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { CONSENT_OPEN, getConsent, setConsent, type Consent } from "@/lib/consent";

const noop = () => () => {};

/**
 * Asks once for analytics and ad cookies (Quebec's Law 25 needs opt-in).
 * Hidden until mount so the server render never flashes it at returning
 * visitors; "Cookie settings" in the footer brings it back.
 */
export default function ConsentBanner() {
  const undecided = useSyncExternalStore(noop, () => getConsent() === null, () => false);
  // null: follow the saved choice; true/false: the visitor reopened or answered.
  const [override, setOverride] = useState<boolean | null>(null);

  useEffect(() => {
    const reopen = () => setOverride(true);
    window.addEventListener(CONSENT_OPEN, reopen);
    return () => window.removeEventListener(CONSENT_OPEN, reopen);
  }, []);

  if (!(override ?? undecided)) return null;

  const choose = (choice: Consent) => {
    setConsent(choice);
    setOverride(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie choice"
      className="fixed z-50 inset-x-0 bottom-0 p-3 md:p-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto bg-navy text-white rounded-[1.25rem] shadow-[0_10px_30px_-8px_rgba(5,35,61,0.5)] p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-[0.9375rem] leading-relaxed text-white/90 flex-1">
          We use cookies to see how the site is used and to measure our ads. Okay with that?
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="h-11 px-5 rounded-full border-2 border-white/60 text-white font-extrabold hover:border-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-yellow"
          >
            No thanks
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="h-11 px-6 rounded-full bg-yellow border-2 border-yellow text-navy font-extrabold hover:bg-white hover:border-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-yellow"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
