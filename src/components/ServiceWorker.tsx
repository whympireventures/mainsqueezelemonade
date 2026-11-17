"use client";

import { useEffect } from "react";

/**
 * Registers the service worker that makes the site installable as a PWA.
 * Renders nothing; registration is deferred to `load` so it never competes
 * with the first paint.
 */
export default function ServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    function register() {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Registration failures are non-fatal — the site works without it.
      });
    }

    if (document.readyState === "complete") {
      register();
      return;
    }

    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
