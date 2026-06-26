import { ALL_TIERS, getTierMeta } from "@/lib/pricing";
import PriceText from "./PriceText";
import CurrencySelector from "./CurrencySelector";
import BillingToggle from "./BillingToggle";

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing-section container">
      <div className="pricing-header">
        <p className="section-eyebrow" style={{ justifyContent: "center" }}>
          Pricing Plans
        </p>
        <h2>
          Simple,{" "}
          <span className="text-gradient">transparent</span>{" "}
          pricing
        </h2>
        <p>Scale your automation without surprise bills. Change plans anytime.</p>

        <div className="pricing-controls">
          <BillingToggle />
          <CurrencySelector />
        </div>
      </div>

      <div className="pricing-grid">
        {ALL_TIERS.map((tier) => {
          const meta = getTierMeta(tier);
          return (
            <div key={tier} className={`pricing-card ${meta.highlighted ? "highlighted" : ""}`}>
              {meta.highlighted && <div className="card-badge">Most Popular</div>}

              <div className="card-header">
                <h3>{meta.name}</h3>
                <p className="tier-desc">{meta.description}</p>
                {/* PriceText is isolated via useSyncExternalStore — parent never re-renders */}
                <PriceText tier={tier} />
              </div>

              <div className="card-body">
                <ul className="feature-list">
                  {meta.features.map((feat, i) => (
                    <li key={i}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                        <circle cx="8" cy="8" r="7" fill={meta.highlighted ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.06)"} />
                        <path d="M11.3334 6L7.00008 10.3333L4.66675 8" stroke={meta.highlighted ? "var(--color-primary)" : "var(--color-text-secondary)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${meta.highlighted ? "btn-primary" : "btn-secondary"} w-full`} style={{ width: "100%", padding: "0.75rem 1.5rem" }}>
                  {meta.highlighted ? "Get Started — It's Free" : "Get Started"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
