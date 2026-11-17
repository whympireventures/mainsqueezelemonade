"use client";

import { useEffect } from "react";
import { rememberFbclid, track } from "@/lib/track";

/**
 * Site-wide tracking that isn't tied to one component: the landing page's ad
 * click id, and every email or phone link click. Page views on client-side
 * navigation need nothing here; GA4 and the Pixel both follow history changes.
 */
export default function TrackingListeners() {
  useEffect(() => {
    rememberFbclid();

    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a[href^='mailto:'], a[href^='tel:']");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      track("contact", {
        method: href.startsWith("tel:") ? "phone" : "email",
        link_text: link.textContent?.trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
