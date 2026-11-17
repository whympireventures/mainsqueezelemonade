/** Shops, cafés and taprooms that carry Main Squeeze. Add new stockists here. */

export type Retailer = {
  name: string;
  kind: string;
  logo: string;
  street: string;
  town: string;
  province: "NS" | "NB" | "PE" | "NL";
  postal: string;
  phone: string;
  website: string;
};

export const PROVINCES: Record<Retailer["province"], string> = {
  NS: "Nova Scotia",
  NB: "New Brunswick",
  PE: "Prince Edward Island",
  NL: "Newfoundland and Labrador",
};

export const retailers: Retailer[] = [
  {
    name: "Good Robot Brewing Co.",
    kind: "Brewery & taproom",
    logo: "/images/retailers/good-robot.jpg",
    street: "14 Industrial Way",
    town: "Elmsdale",
    province: "NS",
    postal: "B2S 2L4",
    phone: "(902) 497-0716",
    website: "https://goodrobotbrewing.ca",
  },
];

export const fullAddress = (r: Retailer) => `${r.street}, ${r.town}, ${r.province} ${r.postal}`;

export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, "")}`;

export const directionsHref = (r: Retailer) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${r.name}, ${fullAddress(r)}`)}`;

export const mapEmbedSrc = (r: Retailer) =>
  `https://www.google.com/maps?q=${encodeURIComponent(`${r.name}, ${fullAddress(r)}`)}&output=embed`;

/** "goodrobotbrewing.ca" — the bare domain, for link text. */
export const domain = (url: string) => new URL(url).hostname.replace(/^www\./, "");
