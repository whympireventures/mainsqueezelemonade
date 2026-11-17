/**
 * Products, pricing and contact details for the trade-first site. All money
 * is in integer cents so the shelf math never drifts from float rounding.
 */

export const CASE_PRICE_CENTS = 5400;
export const CANS_PER_CASE = 24;
export const SHELF_PRICES_CENTS = [349, 399, 450] as const;
export const ORDER_EMAIL = "orders@mainsqueezelemonadeco.com";
export const PHONE = "902-314-6776";
export const PHONE_HREF = "tel:+19023146776";

export const flavours = [
  {
    id: "strawberry",
    name: "Strawberry Lemonade",
    short: "Strawberry",
    fr: "Limonade à la fraise",
    line: "Sweet strawberry, zesty lemon",
    description:
      "Our traditional lemonade with ripe strawberry flavour folded in. Sweet, zesty and bubbly: a sunny-day favourite.",
    notes: ["Ripe strawberry", "Zesty lemon", "Sparkling finish"],
    greatFor: "Patios, brunch menus and grab-and-go coolers",
    upc: "627146333443",
    can: "#F49A9D",
    ink: "#C0283F",
    image: "/images/flavours/strawberry-355.png",
  },
  {
    id: "classic",
    name: "Classic Lemonade",
    short: "Classic",
    fr: "Limonade classique",
    line: "Our original Bahamian recipe",
    description:
      "The Bahamian traditional recipe that started it all: tangy lemon and lime, real sugar and a crisp sparkle.",
    notes: ["Bright citrus", "Tangy lemon & lime", "Crisp finish"],
    greatFor: "Everyday sipping, café menus and food pairings",
    upc: "627146333375",
    can: "#7CCC9D",
    ink: "#12733E",
    image: "/images/flavours/classic-355.png",
  },
  {
    id: "rhubarb-ginger",
    name: "Rhubarb Ginger Lemonade",
    short: "Rhubarb Ginger",
    fr: "Limonade rhubarbe et gingembre",
    line: "Tart rhubarb with a ginger kick",
    description:
      "Tart rhubarb meets a warm ginger kick on our traditional lemonade base. Bold, a little spicy and unforgettable.",
    notes: ["Tart rhubarb", "Warming ginger", "Spiced sparkle"],
    greatFor: "Specialty grocery, restaurant menus and mocktails",
    upc: "627146333351",
    can: "#F2A27B",
    ink: "#AE3E1E",
    image: "/images/flavours/rhubarb-ginger-355.png",
  },
] as const;

export type Flavour = (typeof flavours)[number];
export type FlavourId = Flavour["id"];

/** Cost of one can at the case price: $54 ÷ 24 = 225¢. */
export const CAN_COST_CENTS = CASE_PRICE_CENTS / CANS_PER_CASE;

export const profitPerCan = (shelf: number) => shelf - CAN_COST_CENTS;
/** Floored so a margin is never overstated. */
export const marginPct = (shelf: number) => Math.floor((profitPerCan(shelf) / shelf) * 100);
/** From exact cents, not the rounded per-can figure. */
export const profitPerCase = (shelf: number) => shelf * CANS_PER_CASE - CASE_PRICE_CENTS;

/** Cents to dollars, rounding half-up (162¢ for 161.5¢). */
export const money = (cents: number) => `$${(Math.round(cents) / 100).toFixed(2)}`;
/** Whole-dollar amounts drop the cents: $54, $162. */
export const dollars = (cents: number) =>
  cents % 100 === 0 ? `$${cents / 100}` : money(cents);

/** "6 27146 33344 3" — the grouping printed under the barcode. */
export const formatUpc = (upc: string) =>
  `${upc[0]} ${upc.slice(1, 6)} ${upc.slice(6, 11)} ${upc[11]}`;

export const casesLabel = (cases: number) =>
  `${cases} ${cases === 1 ? "case" : "cases"} (${cases * CANS_PER_CASE} cans)`;

export const mailto = (subject: string, body?: string) =>
  `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;
