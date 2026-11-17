"use server";

import { Resend } from "resend";

export type SignupState = { status: "idle" | "success" | "error"; message: string };

const NOTIFY_DEFAULT = "info@mainsqueezelemonadeco.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Lemonite list sign-up: saves the email as a Resend contact (in a segment, if
 * RESEND_SEGMENT_ID is set) and emails the team about each new signup.
 *
 * Env vars:
 *   RESEND_API_KEY      required
 *   RESEND_SEGMENT_ID   optional, the segment new Lemonites join
 *   RESEND_FROM_EMAIL   optional, sender for the notification (needs a verified domain)
 *   SIGNUP_NOTIFY_EMAIL optional, who gets the notification (defaults to info@)
 */
export async function joinLemonites(_prev: SignupState, formData: FormData): Promise<SignupState> {
  // Hidden field real people never fill in; bots usually do.
  if (formData.get("company")) return { status: "success", message: "You're on the list. Welcome, Lemonite!" };

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Lemonite signup: RESEND_API_KEY is not set");
    return { status: "error", message: "Sign-ups are down for a moment. Please try again later." };
  }

  const resend = new Resend(apiKey);
  const segmentId = process.env.RESEND_SEGMENT_ID;

  const { error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
  });

  if (error) {
    // Signing up twice isn't a problem for the visitor.
    if (/already exists/i.test(error.message)) {
      return { status: "success", message: "You're already a Lemonite. We'll be in touch!" };
    }
    console.error("Lemonite signup: could not create contact", error);
    return { status: "error", message: "Something went wrong. Please try again in a minute." };
  }

  // The contact is saved; a failed notification shouldn't fail the signup.
  const { error: notifyError } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "Main Squeeze <onboarding@resend.dev>",
    to: process.env.SIGNUP_NOTIFY_EMAIL || NOTIFY_DEFAULT,
    subject: "New Lemonite signup",
    text: `${email} just joined the Lemonite list on the website.`,
  });
  if (notifyError) console.error("Lemonite signup: notification email failed", notifyError);

  return { status: "success", message: "You're on the list. Welcome, Lemonite!" };
}
