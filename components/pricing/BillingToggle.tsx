"use client";

import { pricingStore } from "@/lib/pricingStore";

export default function BillingToggle() {
  function handleToggle(e: React.ChangeEvent<HTMLInputElement>) {
    pricingStore.set({ cycle: e.target.checked ? "annual" : "monthly" });
  }

  return (
    <div className="billing-toggle-wrapper">
      <span className="billing-label" id="monthly-label">Monthly</span>
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          className="toggle-input sr-only" 
          onChange={handleToggle}
          aria-labelledby="monthly-label annual-label"
        />
        <span className="toggle-slider" aria-hidden="true"></span>
      </label>
      <span className="billing-label" id="annual-label">
        Annually <span className="discount-badge">Save 20%</span>
      </span>
    </div>
  );
}
