"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { Download, FileText, Mail, Phone } from "lucide-react";
import {
  CASE_PRICE_CENTS,
  ORDER_EMAIL,
  PHONE,
  PHONE_HREF,
  casesLabel,
  dollars,
  flavours,
  mailto,
} from "@/lib/catalog";
import { orderItems, useOrder } from "@/lib/order-context";
import { track } from "@/lib/track";
import { btnPrimary, textLink } from "@/components/ui";
import CaseStepper from "./CaseStepper";

const businessTypes = [
  "Grocery or specialty",
  "Convenience or gas",
  "Café or restaurant",
  "Hotel, resort or attraction",
  "Distributor or broker",
  "Other",
];

const provinces = [
  { code: "NS", name: "Nova Scotia" },
  { code: "NB", name: "New Brunswick" },
  { code: "PE", name: "Prince Edward Island" },
  { code: "NL", name: "Newfoundland and Labrador" },
];

type Fields = {
  business: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  province: string;
  address: string;
  notes: string;
  updates: boolean;
};

type ErrorKey = "cases" | "business" | "name" | "email" | "type" | "province";
type Errors = Partial<Record<ErrorKey, string>>;

const emptyFields: Fields = {
  business: "",
  name: "",
  email: "",
  phone: "",
  type: "",
  province: "",
  address: "",
  notes: "",
  updates: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields, totalCases: number): Errors {
  const e: Errors = {};
  if (totalCases === 0) e.cases = "Add at least one case to your order.";
  if (!f.business.trim()) e.business = "Enter your business name.";
  if (!f.name.trim()) e.name = "Enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Enter an email like name@store.ca.";
  if (!f.type) e.type = "Choose the type of business.";
  if (!f.province) e.province = "Choose your province.";
  return e;
}

const inputClass =
  "w-full h-12 rounded-xl border-[1.5px] border-seaglass bg-white px-4 text-navy text-base placeholder:text-navy-2/70 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy aria-[invalid=true]:border-straw-ink";

const chipClass =
  "inline-flex items-center min-h-11 px-4 py-2 rounded-full border-[1.5px] border-seaglass bg-white text-navy font-semibold text-[0.9375rem] cursor-pointer peer-checked:bg-lagoon peer-checked:border-navy peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm font-semibold text-straw-ink">
      {message}
    </p>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block font-semibold text-navy mb-1.5">
        {label}
        {required ? (
          <span className="text-straw-ink" aria-hidden>
            {" "}*
          </span>
        ) : (
          <span className="text-navy-2 font-medium"> (optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function OrderSection() {
  const { cases, totalCases, totalCents } = useOrder();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<{ email: string; href: string; text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const checkoutTracked = useRef(false);

  function onFormFocus() {
    if (checkoutTracked.current) return;
    checkoutTracked.current = true;
    track("begin_checkout", { value: totalCents / 100, currency: "CAD", items: orderItems(cases) });
  }

  const set =<K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }));
    // Clear a field's error as soon as it's fixed.
    if (key in errors) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function orderText(f: Fields) {
    const lines = flavours
      .filter((fl) => cases[fl.id] > 0)
      .map((fl) => `- ${fl.name}: ${cases[fl.id]} × ${dollars(CASE_PRICE_CENTS)} = ${dollars(cases[fl.id] * CASE_PRICE_CENTS)}`);
    const optional = (label: string, value: string) => (value.trim() ? [`${label}: ${value.trim()}`] : []);
    return [
      "Order request",
      "",
      ...lines,
      `Total: ${casesLabel(totalCases)}, ${dollars(totalCents)} (plus taxes and container deposit)`,
      "",
      `Business: ${f.business.trim()}`,
      `Name: ${f.name.trim()}`,
      `Email: ${f.email.trim()}`,
      ...optional("Phone", f.phone),
      `Business type: ${f.type}`,
      `Province: ${f.province}`,
      ...optional("Delivery address", f.address),
      ...optional("Notes", f.notes),
      `Restock and new-flavour updates: ${f.updates ? "Yes, please" : "No"}`,
    ].join("\n");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(fields, totalCases);
    setErrors(found);
    const first = Object.keys(found)[0] as ErrorKey | undefined;
    if (first) {
      const target =
        first === "cases"
          ? document.getElementById("order-lines")
          : formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
      target?.focus();
      return;
    }
    const text = orderText(fields);
    const href = mailto(`Order request: ${fields.business.trim()}`, text);
    setSent({ email: fields.email.trim(), href, text });
    track(
      "generate_lead",
      {
        form: "wholesale_order",
        value: totalCents / 100,
        currency: "CAD",
        items: orderItems(cases),
        business_type: fields.type,
        province: fields.province,
      },
      { email: fields.email, phone: fields.phone },
    );
    // Until the order endpoint is live, hand the order to the buyer's email app.
    window.location.href = href;
  }

  return (
    <section id="order" aria-labelledby="order-title" className="bg-sand py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 id="order-title" className="text-navy text-[2rem] md:text-5xl leading-[1.05]">
          Start your opening order.
        </h2>
        <ol className="mt-6 grid gap-3 md:grid-cols-3 md:gap-6 text-navy">
          {[
            "Pick flavours and cases.",
            "We confirm stock, delivery date and your invoice by email.",
            "Your cases arrive ready for the shelf, each with a “Sold Here” sign and shelf talker.",
          ].map((step, i) => (
            <li key={step} className="flex gap-3 items-start">
              <span className="w-8 h-8 shrink-0 rounded-full bg-navy text-white font-extrabold flex items-center justify-center tabular-nums">
                {i + 1}
              </span>
              <span className="pt-1 text-base md:text-[1.0625rem]">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] items-start">
          <div className="bg-white rounded-[1.25rem] p-5 md:p-8">
            {sent ? (
              <div role="status">
                <h3 className="font-sans not-italic font-extrabold text-navy text-xl md:text-[1.375rem]">
                  Almost there: press send in your email app.
                </h3>
                <p className="mt-3 text-navy text-base md:text-[1.0625rem] max-w-[60ch]">
                  Your order request should be open in a new email to {ORDER_EMAIL}. Once it&apos;s sent,
                  we&apos;ll confirm stock, delivery and your invoice by email within 1–2 business days.
                </p>
                <p className="mt-3 text-navy-2">
                  Nothing opened?{" "}
                  <a href={sent.href} className={textLink}>Try again</a>, email{" "}
                  <a href={`mailto:${ORDER_EMAIL}`} className={textLink}>{ORDER_EMAIL}</a> or call{" "}
                  <a href={PHONE_HREF} className={textLink}>{PHONE}</a>. Your order is copied below.
                </p>
                <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-sand p-4 text-sm text-navy font-sans">
                  {sent.text}
                </pre>
                <button type="button" onClick={() => setSent(null)} className={`${textLink} mt-4`}>
                  Edit your order
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} onFocus={onFormFocus} noValidate>
                <h3 className="font-sans not-italic font-extrabold text-navy text-xl md:text-[1.375rem]">Your order</h3>

                <div
                  id="order-lines"
                  tabIndex={-1}
                  aria-describedby={errors.cases ? "err-cases" : undefined}
                  className="mt-4 rounded-xl focus-visible:outline-3 focus-visible:outline-navy"
                >
                  <ul className="divide-y divide-navy/10">
                    {flavours.map((f) => (
                      <li key={f.id} className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3">
                        <span className="flex items-center gap-2.5 min-w-40 flex-1 font-semibold text-navy">
                          <span aria-hidden className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: f.can }} />
                          {f.short}
                        </span>
                        <CaseStepper flavour={f} />
                        <span className="w-16 text-right font-extrabold text-navy tabular-nums">
                          {dollars(cases[f.id] * CASE_PRICE_CENTS)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p aria-live="polite" className="flex justify-between gap-4 border-t-2 border-navy pt-3 font-extrabold text-navy tabular-nums">
                    <span>{casesLabel(totalCases)}</span>
                    <span>{dollars(totalCents)}</span>
                  </p>
                  <FieldError id="err-cases" message={errors.cases} />
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Business name" htmlFor="business" required>
                    <input
                      id="business" name="business" autoComplete="organization" className={inputClass}
                      value={fields.business} onChange={(e) => set("business", e.target.value)}
                      aria-invalid={!!errors.business} aria-describedby={errors.business ? "err-business" : undefined}
                    />
                    <FieldError id="err-business" message={errors.business} />
                  </Field>
                  <Field label="Your name" htmlFor="name" required>
                    <input
                      id="name" name="name" autoComplete="name" className={inputClass}
                      value={fields.name} onChange={(e) => set("name", e.target.value)}
                      aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined}
                    />
                    <FieldError id="err-name" message={errors.name} />
                  </Field>
                  <Field label="Email" htmlFor="email" required>
                    <input
                      id="email" name="email" type="email" autoComplete="email" inputMode="email" className={inputClass}
                      value={fields.email} onChange={(e) => set("email", e.target.value)}
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined}
                    />
                    <FieldError id="err-email" message={errors.email} />
                  </Field>
                  <Field label="Phone" htmlFor="phone">
                    <input
                      id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass}
                      value={fields.phone} onChange={(e) => set("phone", e.target.value)}
                    />
                  </Field>
                </div>

                <fieldset className="mt-6" aria-describedby={errors.type ? "err-type" : undefined}>
                  <legend className="font-semibold text-navy mb-2">
                    Business type<span className="text-straw-ink" aria-hidden> *</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {businessTypes.map((t) => (
                      <label key={t}>
                        <input
                          type="radio" name="type" value={t} className="peer sr-only"
                          checked={fields.type === t} onChange={() => set("type", t)} required
                        />
                        <span className={chipClass}>{t}</span>
                      </label>
                    ))}
                  </div>
                  <FieldError id="err-type" message={errors.type} />
                </fieldset>

                <fieldset className="mt-6" aria-describedby={errors.province ? "err-province" : undefined}>
                  <legend className="font-semibold text-navy mb-2">
                    Province<span className="text-straw-ink" aria-hidden> *</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {provinces.map((p) => (
                      <label key={p.code}>
                        <input
                          type="radio" name="province" value={p.code} className="peer sr-only"
                          checked={fields.province === p.code} onChange={() => set("province", p.code)} required
                        />
                        <span className={chipClass}>
                          <abbr title={p.name} className="no-underline">{p.code}</abbr>
                          <span className="sr-only"> {p.name}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                  <FieldError id="err-province" message={errors.province} />
                </fieldset>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Field label="Delivery address" htmlFor="address">
                    <textarea
                      id="address" name="address" rows={3} autoComplete="street-address"
                      className={`${inputClass} h-auto py-3 resize-y`}
                      value={fields.address} onChange={(e) => set("address", e.target.value)}
                    />
                  </Field>
                  <Field label="Notes" htmlFor="notes">
                    <textarea
                      id="notes" name="notes" rows={3}
                      className={`${inputClass} h-auto py-3 resize-y`}
                      value={fields.notes} onChange={(e) => set("notes", e.target.value)}
                    />
                  </Field>
                </div>

                <label className="mt-6 flex items-start gap-3 text-navy cursor-pointer">
                  <input
                    type="checkbox" name="updates" checked={fields.updates}
                    onChange={(e) => set("updates", e.target.checked)}
                    className="mt-0.5 w-5 h-5 shrink-0 accent-navy"
                  />
                  <span>Send me restock and new-flavour updates</span>
                </label>

                <button type="submit" className={`${btnPrimary} mt-8 w-full sm:w-auto`}>
                  Send order request
                </button>
                <p className="mt-3 text-sm text-navy-2">No payment now. We reply within 1–2 business days.</p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-[1.25rem] p-6">
              <h3 className="font-sans not-italic font-extrabold text-navy text-lg">Prefer to talk?</h3>
              <ul className="mt-3 space-y-3">
                <li>
                  <a href={PHONE_HREF} className={`${textLink} inline-flex items-center gap-2 tabular-nums`}>
                    <Phone className="w-4 h-4" aria-hidden /> {PHONE}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${ORDER_EMAIL}`} className={`${textLink} inline-flex items-center gap-2 break-all`}>
                    <Mail className="w-4 h-4 shrink-0" aria-hidden /> {ORDER_EMAIL}
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[1.25rem] p-6">
              <h3 className="font-sans not-italic font-extrabold text-navy text-lg">Distributor or broker?</h3>
              <p className="mt-2">
                <a href={mailto("Distribution inquiry")} className={textLink}>
                  Ask about distribution terms
                </a>
              </p>
            </div>

            <div className="bg-white rounded-[1.25rem] p-6">
              <h3 className="font-sans not-italic font-extrabold text-navy text-lg">Trade resources</h3>
              <ul className="mt-3 space-y-3">
                <li>
                  <a href={mailto("Sell sheet request", "Please send me the Main Squeeze sell sheet.\n\nBusiness name: ")} className={`${textLink} inline-flex items-center gap-2`}>
                    <FileText className="w-4 h-4" aria-hidden /> Request the sell sheet
                  </a>
                </li>
                <li>
                  <a href="/images/brand/logo-full.png" download="main-squeeze-logo.png" className={`${textLink} inline-flex items-center gap-2`}>
                    <Download className="w-4 h-4" aria-hidden /> Logo (PNG)
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
