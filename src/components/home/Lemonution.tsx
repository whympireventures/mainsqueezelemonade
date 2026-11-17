"use client";

import { useActionState, useEffect, useRef } from "react";
import { joinLemonites, type SignupState } from "@/app/actions/lemonite";
import { track } from "@/lib/track";

const initial: SignupState = { status: "idle", message: "" };

/** Lemonite list sign-up, saved to Resend by the joinLemonites server action. */
export default function Lemonution() {
  const [state, formAction, pending] = useActionState(joinLemonites, initial);
  const done = state.status === "success";
  const email = useRef("");

  useEffect(() => {
    if (done) track("sign_up", { method: "lemonite_list" }, { email: email.current });
  }, [done]);

  return (
    <section aria-labelledby="lemonution-title" className="bg-navy text-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 id="lemonution-title" className="text-yellow text-[2.25rem] md:text-5xl leading-[1.05]">
          Join the Lemonution.
        </h2>
        <p className="mt-5 text-white/85 text-lg leading-relaxed">
          In Nassau, our regulars called themselves Lemonites. They showed up to every festival with their cups in
          hand. Get on the list for new flavours, pop-ups and where to find us next.
        </p>

        {done ? (
          <p role="status" className="mt-8 inline-block rounded-full bg-yellow text-navy font-extrabold px-6 py-3">
            {state.message}
          </p>
        ) : (
          <form
            action={formAction}
            onSubmit={(e) => {
              email.current = String(new FormData(e.currentTarget).get("email") ?? "");
            }}
            className="mt-8 max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="lemonite-email" className="sr-only">
                Your email
              </label>
              <input
                id="lemonite-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="you@example.com"
                aria-invalid={state.status === "error"}
                aria-describedby="lemonite-msg"
                className="flex-1 h-[3.25rem] rounded-full px-5 text-navy bg-white border-2 border-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-yellow"
              />
              {/* Honeypot: hidden from people, tempting to bots */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              <button
                type="submit"
                disabled={pending}
                className="h-[3.25rem] px-7 rounded-full bg-yellow text-navy font-extrabold border-2 border-yellow hover:bg-white hover:border-white transition-colors disabled:opacity-60 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-yellow"
              >
                {pending ? "Joining…" : "Become a Lemonite"}
              </button>
            </div>
            <p id="lemonite-msg" aria-live="polite" className="mt-3 min-h-6 text-yellow font-semibold">
              {state.status === "error" ? state.message : ""}
            </p>
          </form>
        )}
        <p className="mt-2 text-sm text-white/70">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
