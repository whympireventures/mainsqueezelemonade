/**
 * Shared class strings for the spec's button styles (§5). The primary button
 * echoes the logo's sticker outline: yellow fill, navy border, hard navy shadow.
 */

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy font-extrabold text-navy whitespace-nowrap transition-[transform,box-shadow,background-color] duration-150 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:opacity-50 disabled:pointer-events-none";

const large = "px-7 h-[3.125rem] md:h-[3.25rem] text-[1.0625rem]";
const small = "px-5 h-11 text-[0.9375rem] md:px-6 md:h-12 md:text-base";

const primary =
  "bg-yellow shadow-[0_4px_0_var(--color-navy)] hover:-translate-y-px hover:shadow-[0_5px_0_var(--color-navy)] active:translate-y-[0.1875rem] active:shadow-[0_1px_0_var(--color-navy)]";

const secondary = "bg-white hover:bg-shallows";

export const btnPrimary = `${base} ${large} ${primary}`;
export const btnPrimarySmall = `${base} ${small} ${primary}`;
export const btnSecondary = `${base} ${large} ${secondary}`;
export const btnSecondarySmall = `${base} ${small} ${secondary}`;

export const textLink =
  "text-lagoon-ink font-semibold underline underline-offset-3 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy rounded-sm";
