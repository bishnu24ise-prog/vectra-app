import { ALL_TIERS, getTierMeta } from "@/lib/pricing";
import PriceText from "./PriceText";
import CurrencySelector from "./CurrencySelector";
import BillingToggle from "./BillingToggle";

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing-section container">
      <div className="pricing-header">
        <h2>Simple, transparent pricing</h2>
        <p className="text-secondary">Scale your automation without surprise bills.</p>
        
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
                <div className="price-container">
                  <PriceText tier={tier} />
                </div>
              </div>
              
              <div className="card-body">
                <ul className="feature-list">
                  {meta.features.map((feat, i) => (
                    <li key={i}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${meta.highlighted ? "btn-primary" : "btn-secondary"} w-full`}>
                  Get Started
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
