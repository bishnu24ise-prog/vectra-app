import { FEATURES } from "@/data/features";
import { FeatureIcon } from "./icons";

interface BentoGridProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function BentoGrid({ activeIndex, setActiveIndex }: BentoGridProps) {
  return (
    <div className="bento-grid hidden md:grid">
      {FEATURES.map((feature, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={feature.id}
            className={`bento-card bento-${feature.size} ${isActive ? "active" : ""}`}
            style={{ gridArea: feature.gridArea }}
            onMouseEnter={() => setActiveIndex(i)}
            onFocus={() => setActiveIndex(i)}
            tabIndex={0}
          >
            <div className="bento-icon">
              <FeatureIcon name={feature.icon} />
            </div>
            <div className="bento-content">
              <h3>{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
