"use client";

import { useSyncExternalStore } from "react";
import { pricingStore } from "@/lib/pricingStore";
import { computePrice, getPerUnit, type Tier } from "@/lib/pricing";

interface PriceTextProps {
  tier: Tier;
}

/** ONLY this component subscribes to pricingStore. Zero parent re-renders. */
export default function PriceText({ tier }: PriceTextProps) {
  const { currency, cycle } = useSyncExternalStore(
    pricingStore.subscribe,
    pricingStore.get,
    pricingStore.get // server snapshot
  );

  const price = computePrice(tier, currency, cycle);
  const unit = getPerUnit(cycle);

  return (
    <div className="price-display" aria-live="polite" aria-atomic="true">
      <span className="price-amount">{price}</span>
      <span className="price-unit">{unit}</span>
    </div>
  );
}
