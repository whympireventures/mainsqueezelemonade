# Main Squeeze Lemonade Co. — Home Page Redesign (v2, trade-first)

Design + UX spec for the Next.js site (mainsqueezelemonadeco.com, preview at newlemonadestand.vercel.app).
Goal: a bright, professional home page that sells to **retailers, cafés/restaurants and distributors**.

![Desktop hero preview](./ms-hero-desktop.jpg)

![Mobile hero preview](./ms-hero-mobile.jpg)

*Previews use the cans from the sell sheet. Build with the site's transparent can renders.*

---

## 1. Snapshot

- **Audience:** independent & specialty grocers, convenience/gas, cafés & restaurants, hotels/resorts/attractions, distributors & brokers. Halifax first, then Atlantic Canada.
- **Job of the page:** get an opening order. Second: a sell-sheet download or a call.
- **Primary action:** Order wholesale → **orders@mainsqueezelemonadeco.com** · 902-314-6776
- **Message match:** the hero repeats the sell sheet ("Meet your new Main Squeeze!"), so a buyer who scans its QR lands on the same promise.

### What changed

| Removed / replaced | Note |
|---|---|
| Our Story section | Removed. Story stays on /about; one line of it becomes a selling point (§6.5). |
| Word of Mouth testimonials | Removed. Only add reviews back from real buyers, with permission. |
| Events section | Removed. |
| Footer "Partner With Us" + "Book an Event" | Removed. The Events link is also gone from the header and footer so events don't show anywhere (/events can stay live, unlinked). |
| Marquee ticker | Removed (claims issues, §7). Replaced by the sell sheet's 4-icon spec strip. |
| "What Makes Us Different" | Replaced by "Built to earn its shelf space" + margin calculator. |
| Consumer newsletter band | Replaced by the sell-sheet download (captures trade leads). |
| Hero buttons "Shop Flavours" / "Our Story" | Now "Order wholesale" / "Get the sell sheet" (no online checkout yet). |
| hello@ email | orders@mainsqueezelemonadeco.com everywhere. |

---

## 2. Design direction

**Bright island daylight, run like a professional sell sheet.** The reference photo is a product stage: sea-washed dock planks in front of a turquoise bay. The hero stands the three cans **on those planks**. That's the one bold moment. Everything after it stays calm: white and water-tinted sections, navy type, yellow only where we want a click.

- One bold moment (the hero). No fade-in on every section, no decorative gradients.
- Brand first, numbers second. The price never headlines, but it's always one glance away.
- Sentence case. No small labels above headings. No arrows on buttons.
- Every number is real and the math is shown.

---

## 3. Colour

Sampled from the beach photo. Navy and yellow come from the sell sheet so print and web match.

### Core palette

| Token | Name | Hex | Sampled from | Job |
|---|---|---|---|---|
| `--navy` | Atlantic Navy | `#05233D` | Sell-sheet headline | Text, price block, footer, button outlines |
| `--yellow` | Squeeze Yellow | `#FDE201` | Logo | Primary buttons, the $45 figure, headline brush stroke. Nothing else. |
| `--sky` | Island Sky | `#0AA8FA` | Photo sky | Hero sky; links and icons on navy |
| `--lagoon` | Lagoon | `#07CEEC` | Photo water | Selected states (chips), sticky-bar accent |
| `--palm` | Palm | `#589C07` | Photo foliage | Profit icons and bars (text uses Palm Ink) |
| `--frangipani` | Frangipani | `#ECB00E` | Photo flower centre | "Intro price" badge only |

### Neutrals and text colours

| Token | Hex | Job |
|---|---|---|
| `--cloud` | `#FFFFFF` | Base, cards, form fields |
| `--shallows` | `#E8F8FB` | Flavours section background |
| `--sand` | `#FCF7EC` | Order section background (the sell sheet's lower half) |
| `--driftwood` | `#E3BB94` | Plank-shelf details |
| `--seaglass` | `#5A92A5` | Input borders, dividers |
| `--navy-2` | `#3D5975` | Secondary text |
| `--lagoon-ink` | `#0A6C8A` | Links on light backgrounds |
| `--palm-ink` | `#2F6A0B` | Margin and profit figures |

### Flavour colours (from the cans)

| Flavour | Can colour | Text colour |
|---|---|---|
| Strawberry | `#F49A9D` | `#C0283F` |
| Classic | `#7CCC9D` | `#12733E` |
| Rhubarb Ginger | `#F2A27B` | `#AE3E1E` |

### How the colours sell

- **Yellow = order.** Only primary buttons, the intro price and the logo use solid yellow, so the eye learns that yellow means "order here." The button gets a navy outline and a hard 4px navy shadow, echoing the logo's sticker outline.
- **Navy = trust.** Prices, terms and headlines in navy. It's the sell sheet's price box rebuilt in code.
- **Green = profit.** Margin and profit numbers only.
- **Gold = limited time.** The intro-price badge gets urgency that feels warm, not like a discount bin.
- **Blues = the island.** Backgrounds and selected states. They set the mood and never compete with buttons.
- **Flavour colours = recognition.** Each flavour keeps its can colour on its card, stepper and order line, so buyers spot SKUs at a glance.
- **Balance:** about 60% white/shallows/sand, 30% sky/lagoon/navy, 10% yellow + flavour colours.

### Approved text/background pairs (WCAG 2.2)

| Pair | Contrast |
|---|---|
| Navy on white / shallows / sand | 16.0 / 14.7 / 15.0 : 1 |
| Navy on yellow (buttons) · Yellow on navy ($45 block) | 12.2 : 1 |
| Navy on the hero sky | 6.1 : 1 |
| Navy on the can colours | 7.6–8.4 : 1 |
| Flavour text colours on white | 5.8–6.0 : 1 |
| Navy-2 / Lagoon Ink / Palm Ink on white | 7.3 / 6.0 / 6.6 : 1 |
| Sea Glass borders on white | 3.4 : 1 |
| **Never:** white on sky (2.6), white on lagoon (1.9), yellow or gold text on white (1.3 / 2.0) | fail |

---

## 4. Type

- **Display:** Source Serif 4, italic, 800–900. The closest Google font to the sell-sheet headline. Headlines only.
- **Text & UI:** Figtree 400/500/600/800. Use `font-variant-numeric: tabular-nums` on prices and the calculator.

| Style | Font | Mobile → desktop | Line height |
|---|---|---|---|
| H1 (hero) | Source Serif 4, 900 italic | 44 → 76px | 1.0 |
| H2 | Source Serif 4, 800 italic | 32 → 48px | 1.05 |
| Card title | Figtree 800 | 20 → 22px | 1.2 |
| Lead | Figtree 600 | 17 → 23px | 1.35 |
| Body | Figtree 400 | 16 → 17px | 1.55 |
| Small / legal | Figtree 500 | 13 → 14px | 1.45 |
| Price figure | Figtree 800 | 56 → 72px | 1.0 |

Body text max ~65 characters per line.

```ts
// app/fonts.ts
import { Source_Serif_4, Figtree } from 'next/font/google'

export const display = Source_Serif_4({
  subsets: ['latin'], style: ['italic'], weight: ['800', '900'], variable: '--font-source-serif',
})
export const text = Figtree({ subsets: ['latin'], variable: '--font-figtree' })
```

---

## 5. Components

- **Primary button:** pill, 52px tall (50 on mobile), Figtree 800 17px, yellow fill, navy text, 2px navy border, `box-shadow: 0 4px 0 var(--navy)`. Pressed: `translateY(3px)` and `0 1px 0` shadow.
- **Secondary button:** white fill, navy text, 2px navy border.
- **Text link:** Lagoon Ink, underline offset 3px.
- **Badge:** Frangipani pill, navy 12px/800 ("Intro price").
- **Chips:** white with Sea Glass border. Selected = Lagoon fill, navy border and text.
- **Case stepper:** [−] count [+], 44px targets, navy outline, tabular figures. Totals use `aria-live="polite"`.
- **Inputs:** white, 1.5px Sea Glass border, 12px radius, 48px tall. Focus = 3px navy outline, 2px offset. Errors in Strawberry text colour and say how to fix ("Enter an email like name@store.ca").
- **Radius:** 999px buttons/chips/pills, 20px cards, 12px inputs. Shadows only on the sticky bar and can renders.
- **Icons:** export the sell sheet's four icons as SVG (navy line inside a 2px navy circle). Fallback: Lucide `Sparkles`, `Cylinder`, `Package`, `Warehouse`.
- **Focus rings:** navy on light surfaces, yellow on navy. Respect `prefers-reduced-motion`.

---

## 6. Home page, top to bottom

Announcement bar → header → hero → spec strip → flavours → shelf space & margin → opening order → footer.

### 6.0 Announcement bar (navy, 40px)

> Introductory price: $45 per 24-can case, for a limited time. **Start an order**

Link in yellow, underlined → `#order`. Mobile: "Intro price: $45 per 24-can case. **Start an order**"

### 6.1 Header (white, sticky, 78px; 64px mobile)

Logo · Flavours · Wholesale · About · Contact · `902-314-6776` (tap-to-call, desktop) · **Order wholesale** (primary).
Mobile: logo, **Order** button, menu. On other pages the button goes to `/#order`.

### 6.2 Hero (760px desktop, ~720px mobile)

```
┌──────────────────────────────────────────────────────────────┐
│ palms               Meet your new                      palms │
│                     Main Squeeze!                            │
│                     ~~~~~~~~~~~~~  yellow brush stroke       │
│      A Bahamian family recipe, now sparkling in Atlantic Canada.
│      [Intro price] $45 per 24-can case, a 46–58% margin …    │
│           [ Order wholesale ]   [ Get the sell sheet ]       │
│                                                              │
│                    ▮▮     ▮▮▮     ▮▮     cans on the planks  │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ sea-washed dock planks ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└──────────────────────────────────────────────────────────────┘
```

- **Background:** the beach reference, `object-fit: cover; object-position: 50% 100%` so the planks always show. A soft white radial glow (55% → 0) behind the copy keeps text crisp.
- **H1:** Meet your new Main Squeeze! Break before "Main". Yellow brush stroke under line 2, behind the text.
- **Lead:** A Bahamian family recipe, now sparkling in Atlantic Canada.
- **Price pill** (white 82%, light blur): [Intro price] **$45** per 24-can case, a **46–58% margin** at suggested retail
- **Buttons:** **Order wholesale** (→ `#order`) and **Get the sell sheet** (opens the dialog, §6.6).
- **Cans:** Strawberry, Classic (in front, 6% larger), Rhubarb Ginger, standing on the planks about 46px above the hero's bottom edge. 300px tall desktop, 200px mobile, small gaps so every label reads, soft contact shadow under each.
- **The one animation:** on load the cans rise 24px and fade in, 90ms apart. Static with reduced motion.
- **Mobile:** same order, full-width buttons, copy stays in the sky area.

### 6.3 Spec strip (white)

Same four items as the sell sheet: **Sparkling · 355 mL sleek cans · 24 cans per case · Shelf-stable.** Four columns on desktop, 2×2 on mobile.

### 6.4 Flavours (Shallows background) — `#flavours`

- **H2:** Three flavours. One easy order.
- **Lead:** Order any combination, by the case.

```
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│   [can]       │ │   [can]       │ │   [can]       │  can-colour panel
│▓▓▓ planks ▓▓▓▓│ │▓▓▓ planks ▓▓▓▓│ │▓▓▓ planks ▓▓▓▓│  plank strip from the hero photo
│ Strawberry    │ │ Classic       │ │ Rhubarb Ginger│  flavour text colour
│ Sweet straw…  │ │ Our original… │ │ Tart rhubarb… │
│ Case 24×355mL │ │ Case 24×355mL │ │ Case 24×355mL │
│ UPC …         │ │ UPC …         │ │ UPC …         │
│ [−]  0  [+]   │ │ [−]  0  [+]   │ │ [−]  0  [+]   │
└───────────────┘ └───────────────┘ └───────────────┘
              [ Add one case of each ($135) ]
```

| Flavour | Line (from the sell sheet) | French name | UPC |
|---|---|---|---|
| Strawberry Lemonade | Sweet strawberry, zesty lemon | Limonade à la fraise | 6 27146 33344 3 |
| Classic Lemonade | Our original Bahamian recipe | Limonade classique | 6 27146 33337 5 |
| Rhubarb Ginger Lemonade | Tart rhubarb with a ginger kick | Limonade rhubarbe et gingembre | 6 27146 33335 1 |

- Keep the sell sheet's order (Classic in the middle).
- Under the grid: secondary button **Add one case of each ($135)**, the easy first order.
- The first case added slides up the sticky order bar (§6.7).

### 6.5 Built to earn its shelf space (white)

Two columns: reasons on the left, shelf math on the right (stacked on mobile).

- **H2:** Built to earn its shelf space.
- **Reasons** (icon list, not cards):
  1. **A story shoppers repeat.** Switcha is the lime-and-sugar lemonade every Bahamian grows up on. Ours comes from the family recipe that won Best Non-Alcoholic Beverage at Nassau's International Culture Food Festival.
  2. **Island-owned, Atlantic Canada-made.** A PEI family business, made in the region. The local pick shoppers here look for.
  3. **Real sugar, never corn syrup.** Quality lemon and lime concentrate, real sugar and natural flavours.
  4. **Easy to carry.** Shelf-stable cans, 24 to a case, bilingual labels and scannable UPCs. Store it in the back, chill it to sell.

**Shelf math card**

```
┌──────────────────────────┬──────────────────────────┐
│ [Intro price]            │ Suggested retail          │
│ $45  per 24-can case     │ $3.49–$4.50 a can         │
│ That's $1.875 a can      │  (yellow block)           │
│  (navy block)            │                           │
├──────────────────────────┴──────────────────────────┤
│ Your shelf price:  ( $3.49 )  ( $3.99 )  ( $4.50 )   │
│ You keep $1.62 a can   46% margin   $38.76 per case  │
│ On your order: $116.28 profit   (shows when cases>0) │
└─────────────────────────────────────────────────────┘
```

| Shelf price | You keep per can | Margin | Profit per case |
|---|---|---|---|
| $3.49 | $1.62 | 46% | $38.76 |
| $3.99 | $2.12 | 53% | $50.76 |
| $4.50 | $2.63 | 58% | $63.00 |

- Do the math in cents from $45 ÷ 24 = $1.875. Round money half-up and round margins **down** so they're never overstated. Work out per-case profit from exact cents, not the rounded per-can figure.
- Profit figures in Palm Ink. "$45" in yellow on the navy block.
- Footnote: *Prices in CAD, plus applicable taxes and container deposit. Margin = (shelf price − $1.875) ÷ shelf price.*

### 6.6 Opening order (Sand background) — `#order`

- **H2:** Start your opening order.
- **Steps** (a real sequence, so numbered):
  1. Pick flavours and cases.
  2. We confirm stock, delivery date and your invoice by email.
  3. Your cases arrive ready for the shelf.

```
┌──────────────────────────────────┬────────────────────────┐
│ Your order                        │ Prefer to talk?         │
│  Strawberry      [−] 1 [+]   $45  │ 902-314-6776            │
│  Classic         [−] 1 [+]   $45  │ orders@mainsqueeze…     │
│  Rhubarb Ginger  [−] 1 [+]   $45  │                         │
│  3 cases (72 cans)          $135  │ Distributor or broker?  │
│                                   │ Ask about distribution  │
│ Business name*    Your name*      │ terms                   │
│ Email*            Phone           │                         │
│ Business type* (chips)            │ Trade resources         │
│ Province* (NS NB PE NL)           │ Sell sheet (PDF)        │
│ Delivery address   Notes          │ Product images & logo   │
│ [ ] Send me restock and new-      │                         │
│     flavour updates               │                         │
│ [ Send order request ]            │                         │
│ No payment now. We reply within 1–2 business days.          │
└──────────────────────────────────┴────────────────────────┘
```

- **Business type chips:** Grocery or specialty · Convenience or gas · Café or restaurant · Hotel, resort or attraction · Distributor or broker · Other
- **Success:** "Order request sent. We'll confirm stock, delivery and your invoice by email within 1–2 business days. A copy is on its way to {email}."
- **Failure:** "Your request didn't send. Email orders@mainsqueezelemonadeco.com or call 902-314-6776. Your order is copied below." Include a prefilled `mailto:` link.
- **Distributor link:** `mailto:orders@mainsqueezelemonadeco.com?subject=Distribution%20inquiry`
- **Sell-sheet dialog** (hero + resources): one field, "Where should we send it?" (email), business name optional. Download starts right away, a copy is emailed, and the lead lands in orders@.
- **CASL:** sending what they asked for is fine. Marketing emails need the opt-in box, unchecked by default.
- Keep the order in `localStorage` (inside try/catch) so a buyer can come back to it.

### 6.7 Sticky order bar

Shows after the first case is added. Hides while the order section is on screen.

> **3 cases (72 cans) for $135**  [ Review order ]

White, 3px Lagoon top border, soft shadow. Full width at the bottom on mobile, a pill bottom-right on desktop.

### 6.8 Footer (navy)

- **Closing line:** *From Island sunshine to Atlantic shores.* (Source Serif 4 italic, yellow), the sell sheet's sign-off.
- **Columns:**
  - Order: Order wholesale · Flavours · Sell sheet (PDF)
  - Company: About · Contact
  - Order desk: orders@mainsqueezelemonadeco.com · 902-314-6776 · Prince Edward Island, Canada
- **One line for shoppers:** "Want Main Squeeze at your local shop? Tell us where you shop." (`mailto:` subject "Stock request"). Those requests are proof you can show buyers.
- **Bottom row:** Island-owned, Atlantic Canada-made. · © {current year} Main Squeeze Lemonade Co. · Privacy · social icons only when the URLs are real.
- No Partner With Us, Book an Event or Events links.

---

## 7. Copy rules and claims

Website copy counts as advertising. Same rules as the can.

| Use | Don't use | Why |
|---|---|---|
| Sparkling | Naturally sparkling | Carbonation is added |
| Real sugar, never high-fructose corn syrup | Real cane sugar (unless the supplier spec says cane) | The ingredient list says "granulated sugar" |
| Natural lemon, lime and fruit flavours | All natural, natural ingredients, zero artificial anything, no preservatives | Contains sodium benzoate and potassium sorbate |
| Quality lemon and lime concentrate | Real citrus, real lemons, fresh-squeezed, not from concentrate, real fruit | Concentrate-based formula |
| Island-owned, Atlantic Canada-made | Made in PEI, Product of Canada | Made in Nova Scotia from imported concentrate |
| From the family recipe that won Best Non-Alcoholic Beverage (Nassau) | "Award-winning" on its own | The award went to the original Nassau lemonade |
| Shelf-stable | A shelf-life number | Wait for TBF's shelf-life data |
| Introductory price, with a real end date | A struck-through "regular" price | Never charged yet (Competition Act ordinary-price rules) |
| Real reviews, with permission | Placeholder testimonials | Misleading |
| — | Small batch; health or diet claims | Co-packed runs; no health claims |

**Phrasing that sells**

- Specific beats hype: "46–58% margin" instead of "Great profit margins!"
- Talk to the buyer: "You keep $1.62 a can."
- One easy first step: "Add one case of each ($135)."
- Keep the action's name through the whole flow: Order wholesale → Review order → Send order request → Order request sent.
- Take away the risk: "No payment now."
- Only use urgency when it's true.

---

## 8. Fix elsewhere on the site

- Wholesale page says **300 mL**. Change to **355 mL**. Change hello@ to orders@, and rewrite "Natural Ingredients", "Award-Winning Flavour" and "Premium, Clean Label" per §7.
- If events are fully off, also drop "Event & festival organizers" and "event supply" from /wholesale.
- © 2025 → current year (`new Date().getFullYear()`).
- Facebook and Instagram links point to "#". Add the real URLs or hide them.
- The sell sheet's QR goes to a ME-QR short link (`q.me-qr.com/3cit28gg`). On the next print, use a static QR to a URL you own, for example `https://mainsqueezelemonadeco.com/?utm_source=sell-sheet&utm_medium=print#order`. That removes the third-party dependency, and scans show up in your analytics.

---

## 9. Build notes (Next.js App Router)

```css
/* app/globals.css — Tailwind v4 (v3: same values under theme.extend) */
@import "tailwindcss";

@theme {
  --color-navy: #05233D;      --color-navy-2: #3D5975;
  --color-yellow: #FDE201;    --color-frangipani: #ECB00E;
  --color-sky: #0AA8FA;       --color-lagoon: #07CEEC;   --color-lagoon-ink: #0A6C8A;
  --color-palm: #589C07;      --color-palm-ink: #2F6A0B;
  --color-cloud: #FFFFFF;     --color-shallows: #E8F8FB; --color-sand: #FCF7EC;
  --color-driftwood: #E3BB94; --color-seaglass: #5A92A5;
  --color-straw: #F49A9D;     --color-straw-ink: #C0283F;
  --color-classic: #7CCC9D;   --color-classic-ink: #12733E;
  --color-rhubarb: #F2A27B;   --color-rhubarb-ink: #AE3E1E;
  --font-display: var(--font-source-serif), Georgia, serif;
  --font-sans: var(--font-figtree), system-ui, sans-serif;
}
```

```
app/
  page.tsx                      composes the sections
  api/order/route.ts            zod validation + honeypot, sends the email
  api/lead/route.ts             sell-sheet requests
components/home/
  AnnouncementBar  SiteHeader  Hero  SpecStrip
  FlavourGrid  FlavourCard  CaseStepper
  ShelfMath  OrderSection  StickyOrderBar  SellSheetDialog  SiteFooter
lib/
  catalog.ts                    flavours, UPCs, colours, pricing
  order-context.tsx             useReducer + localStorage (try/catch)
public/
  images/hero/beach-dock.avif (+ .webp)   images/hero/plank-strip.webp
  images/flavours/*.png                   downloads/main-squeeze-sell-sheet.pdf
```

```ts
// lib/catalog.ts
export const CASE_PRICE_CENTS = 4500
export const CANS_PER_CASE = 24
export const SHELF_PRICES_CENTS = [349, 399, 450]
export const ORDER_EMAIL = 'orders@mainsqueezelemonadeco.com'
export const PHONE = '902-314-6776'

export const flavours = [
  { id: 'strawberry', name: 'Strawberry Lemonade', fr: 'Limonade à la fraise',
    line: 'Sweet strawberry, zesty lemon', upc: '627146333443',
    can: '#F49A9D', ink: '#C0283F', image: '/images/flavours/strawberry-lemonade.png' },
  { id: 'classic', name: 'Classic Lemonade', fr: 'Limonade classique',
    line: 'Our original Bahamian recipe', upc: '627146333375',
    can: '#7CCC9D', ink: '#12733E', image: '/images/flavours/classic-lemonade.png' },
  { id: 'rhubarb-ginger', name: 'Rhubarb Ginger Lemonade', fr: 'Limonade rhubarbe et gingembre',
    line: 'Tart rhubarb with a ginger kick', upc: '627146333351',
    can: '#F2A27B', ink: '#AE3E1E', image: '/images/flavours/rhubarb-ginger-lemonade.png' },
] as const

// cents in, cents out; margin is floored so it's never overstated
export const profitPerCan = (shelf: number) => shelf - CASE_PRICE_CENTS / CANS_PER_CASE
export const marginPct = (shelf: number) => Math.floor((profitPerCan(shelf) / shelf) * 100)
export const profitPerCase = (shelf: number) => shelf * CANS_PER_CASE - CASE_PRICE_CENTS
export const money = (cents: number) => `$${(Math.round(cents) / 100).toFixed(2)}`
```

- **Email:** Resend or Postmark. Send from orders@ to orders@ with reply-to set to the buyer, plus a confirmation copy to the buyer. Add the sender's DNS records next to Google Workspace's and merge them into the **one** SPF record (a domain can only have one).
- **Analytics** (Vercel Analytics `track`): `add_case`, `add_starter`, `order_submit`, `sellsheet_download`, `phone_click`, `email_click`, `distributor_click`.
- **SEO:** title "Main Squeeze Lemonade Co. | Wholesale sparkling lemonade for Atlantic Canada". Description: "Stock Main Squeeze sparkling lemonade, a Bahamian family recipe in 355 mL cans, 24 per case. Introductory price $45 a case. Order at orders@mainsqueezelemonadeco.com or 902-314-6776." JSON-LD: Organization + one Product per flavour (`gtin12`, brand).
- **Performance:** hero image ≤250 KB AVIF with `priority` and `sizes="100vw"`. Give the cans a fixed width and height so nothing shifts. Target LCP under 2.5 s on 4G.
- **Accessibility:** only the pairs in §3, 44px tap targets, steppers labelled ("Add a case of Classic"), form errors announced, reduced motion respected.

---

## 10. Confirm before launch

1. End date for the intro price (the badge needs a real one) and the price after it.
2. Minimum order, delivery area and lead time (Halifax first?). Add them to the order section.
3. Only offer provinces in the form where deposit registration is done before you deliver there.
4. Shelf life from TBF before you quote a number.
5. orders@ mailbox live and tested; sending domain verified.
6. Exact festival name and year for the award line.
7. Distributor terms stay off the site. $45 is your direct-to-store price, so distributors need a buy price below it.
8. Can renders match the printed sleeves. Perennia reviews the hero claims along with the label.
