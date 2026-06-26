export type Tier = "starter" | "pro" | "enterprise";
export type Currency = "INR" | "USD" | "EUR";
export type Cycle = "monthly" | "annual";

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  INR: "₹",
};

const PRICING_MATRIX: Record<
  Tier,
  {
    baseMonthlyRate: number;
    regionalTariff: Record<Currency, number>;
    name: string;
    description: string;
    features: string[];
    highlighted?: boolean;
  }
> = {
  starter: {
    name: "Starter",
    description: "Perfect for individuals and small teams getting started with AI automation.",
    baseMonthlyRate: 29,
    regionalTariff: { USD: 1, EUR: 0.93, INR: 83 },
    features: [
      "Up to 5 workflows",
      "1,000 AI runs / month",
      "Basic integrations (10+)",
      "Email support",
      "Community access",
    ],
  },
  pro: {
    name: "Pro",
    description: "For growing teams that need advanced automation and priority support.",
    baseMonthlyRate: 79,
    regionalTariff: { USD: 1, EUR: 0.93, INR: 83 },
    highlighted: true,
    features: [
      "Unlimited workflows",
      "25,000 AI runs / month",
      "Advanced integrations (100+)",
      "Priority support (24h SLA)",
      "Team collaboration",
      "Custom AI models",
      "Analytics dashboard",
    ],
  },
  enterprise: {
    name: "Enterprise",
    description: "Custom solutions for large organisations with security and compliance needs.",
    baseMonthlyRate: 199,
    regionalTariff: { USD: 1, EUR: 0.93, INR: 83 },
    features: [
      "Everything in Pro",
      "Unlimited AI runs",
      "SSO & SAML",
      "SOC 2 compliance",
      "Dedicated success manager",
      "SLA 99.99% uptime",
      "Custom integrations",
      "On-premise option",
    ],
  },
};

const ANNUAL_DISCOUNT_MULTIPLIER = 0.8; // 20% off

export function computePrice(tier: Tier, currency: Currency, cycle: Cycle): string {
  const matrix = PRICING_MATRIX[tier];
  const fx = matrix.regionalTariff[currency];
  const base = matrix.baseMonthlyRate * fx;
  const amount = cycle === "annual" ? base * ANNUAL_DISCOUNT_MULTIPLIER * 12 : base;

  const symbol = CURRENCY_SYMBOLS[currency];
  const formatted =
    currency === "INR"
      ? Math.round(amount).toLocaleString("en-IN")
      : amount.toFixed(0);

  return `${symbol}${formatted}`;
}

export function getPerUnit(cycle: Cycle): string {
  return cycle === "annual" ? "/yr" : "/mo";
}

export function getTierMeta(tier: Tier) {
  return {
    name: PRICING_MATRIX[tier].name,
    description: PRICING_MATRIX[tier].description,
    features: PRICING_MATRIX[tier].features,
    highlighted: PRICING_MATRIX[tier].highlighted ?? false,
  };
}

export const ALL_TIERS: Tier[] = ["starter", "pro", "enterprise"];
export const ALL_CURRENCIES: Currency[] = ["USD", "EUR", "INR"];
