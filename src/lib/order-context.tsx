"use client";

import { createContext, useContext, useEffect, useReducer, useRef, type ReactNode } from "react";
import {
  CASE_PRICE_CENTS,
  SHELF_PRICES_CENTS,
  flavours,
  type FlavourId,
} from "@/lib/catalog";
import { track, type TrackItem } from "@/lib/track";

type Cases = Record<FlavourId, number>;

type State = {
  cases: Cases;
  /** The shelf price picked in the margin calculator, in cents. */
  shelf: number;
};

type Action =
  | { type: "set"; id: FlavourId; count: number }
  | { type: "addStarter" }
  | { type: "shelf"; cents: number }
  | { type: "restore"; state: State };

const MAX_CASES = 99;
const STORAGE_KEY = "ms-order-v1";

const emptyCases = Object.fromEntries(flavours.map((f) => [f.id, 0])) as Cases;
const initial: State = { cases: emptyCases, shelf: SHELF_PRICES_CENTS[0] };

const clamp = (n: number) => Math.max(0, Math.min(MAX_CASES, Math.round(n) || 0));

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "set":
      return { ...state, cases: { ...state.cases, [action.id]: clamp(action.count) } };
    case "addStarter":
      return {
        ...state,
        cases: Object.fromEntries(
          flavours.map((f) => [f.id, clamp(state.cases[f.id] + 1)]),
        ) as Cases,
      };
    case "shelf":
      return { ...state, shelf: action.cents };
    case "restore":
      return action.state;
  }
}

/** Accept only a well-formed saved order; anything else falls back to empty. */
function parseSaved(raw: string | null): State | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw);
    const cases = { ...emptyCases };
    for (const f of flavours) cases[f.id] = clamp(Number(data?.cases?.[f.id]));
    const shelf = (SHELF_PRICES_CENTS as readonly number[]).includes(data?.shelf)
      ? data.shelf
      : initial.shelf;
    return { cases, shelf };
  } catch {
    return null;
  }
}

/** The order as analytics items: one line per flavour with cases in it. */
export function orderItems(cases: Cases): TrackItem[] {
  return flavours
    .filter((f) => cases[f.id] > 0)
    .map((f) => ({ item_id: f.upc, item_name: f.name, quantity: cases[f.id], price: CASE_PRICE_CENTS / 100 }));
}

type OrderContextValue = State & {
  totalCases: number;
  totalCents: number;
  setCases: (id: FlavourId, count: number) => void;
  addStarter: () => void;
  setShelf: (cents: number) => void;
};

const OrderContext = createContext<OrderContextValue | null>(null);

/**
 * Holds the buyer's opening order (cases per flavour) and the shelf price
 * picked in the margin calculator. Saved to localStorage so a buyer can come
 * back to it; storage can be blocked, so every access is guarded.
 */
export function OrderProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const restored = useRef(false);
  const tracked = useRef(false);

  // Once per visit: the first case a buyer adds marks them as a live prospect.
  function trackFirstAdd(added: Cases) {
    if (tracked.current) return;
    const items = orderItems(added);
    if (!items.length) return;
    tracked.current = true;
    const cases = items.reduce((n, i) => n + i.quantity, 0);
    track("add_to_cart", { value: (cases * CASE_PRICE_CENTS) / 100, currency: "CAD", items });
  }

  // Declared before the restore effect so the mount pass skips saving and
  // can't overwrite the stored order with the empty initial one.
  useEffect(() => {
    if (!restored.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage unavailable or full — the order still works for this visit.
    }
  }, [state]);

  // Restore after mount so the server render and first client render match.
  useEffect(() => {
    try {
      const saved = parseSaved(window.localStorage.getItem(STORAGE_KEY));
      if (saved) dispatch({ type: "restore", state: saved });
    } catch {
      // Storage unavailable — start with an empty order.
    }
    restored.current = true;
  }, []);

  const totalCases = flavours.reduce((sum, f) => sum + state.cases[f.id], 0);

  const value: OrderContextValue = {
    ...state,
    totalCases,
    totalCents: totalCases * CASE_PRICE_CENTS,
    setCases: (id, count) => {
      const added = clamp(count) - state.cases[id];
      if (added > 0) trackFirstAdd({ ...emptyCases, [id]: added });
      dispatch({ type: "set", id, count });
    },
    addStarter: () => {
      trackFirstAdd(Object.fromEntries(flavours.map((f) => [f.id, 1])) as Cases);
      dispatch({ type: "addStarter" });
    },
    setShelf: (cents) => dispatch({ type: "shelf", cents }),
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used inside <OrderProvider>");
  return ctx;
}
