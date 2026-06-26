"use client";

import { pricingStore } from "@/lib/pricingStore";
import { ALL_CURRENCIES, type Currency } from "@/lib/pricing";

const LABELS: Record<Currency, string> = {
  USD: "USD ($)",
  EUR: "EUR (€)",
  INR: "INR (₹)",
};

export default function CurrencySelector() {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    pricingStore.set({ currency: e.target.value as Currency });
  }

  return (
    <div className="currency-selector-wrapper">
      <label htmlFor="currency-select" className="sr-only">
        Select currency
      </label>
      <select
        id="currency-select"
        className="currency-select"
        defaultValue="USD"
        onChange={handleChange}
        aria-label="Select billing currency"
      >
        {ALL_CURRENCIES.map((c) => (
          <option key={c} value={c}>
            {LABELS[c]}
          </option>
        ))}
      </select>
      <span className="select-chevron" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
}
