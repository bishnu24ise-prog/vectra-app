export type Currency = "INR" | "USD" | "EUR";
export type Cycle = "monthly" | "annual";

interface PricingState {
  currency: Currency;
  cycle: Cycle;
}

let state: PricingState = { currency: "USD", cycle: "monthly" };
const listeners = new Set<() => void>();

export const pricingStore = {
  get: (): PricingState => state,
  set: (next: Partial<PricingState>): void => {
    state = { ...state, ...next };
    listeners.forEach((l) => l());
  },
  subscribe: (cb: () => void): (() => void) => {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
};
