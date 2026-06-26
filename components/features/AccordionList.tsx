"use client";

import { useEffect, useRef } from "react";
import { FEATURES } from "@/data/features";
import { FeatureIcon } from "./icons";

interface AccordionListProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  isMobile: boolean;
}

export default function AccordionList({ activeIndex, setActiveIndex, isMobile }: AccordionListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync details open state via WAAPI for smooth height animation without React remounts
  useEffect(() => {
    if (!isMobile) return;
    const container = containerRef.current;
    if (!container) return;

    const detailsElements = container.querySelectorAll("details");
    
    detailsElements.forEach((details, i) => {
      const content = details.querySelector(".accordion-content") as HTMLElement;
      if (!content) return;

      const isTargetActive = i === activeIndex;
      
      if (isTargetActive) {
        details.open = true;
        const startHeight = "0px";
        const endHeight = `${content.scrollHeight}px`;
        
        content.animate(
          [
            { height: startHeight, opacity: 0 },
            { height: endHeight, opacity: 1 }
          ],
          {
            duration: 300,
            easing: "ease-in-out",
            fill: "forwards"
          }
        );
      } else {
        if (details.open) {
          const startHeight = `${content.scrollHeight}px`;
          const endHeight = "0px";
          
          const animation = content.animate(
            [
              { height: startHeight, opacity: 1 },
              { height: endHeight, opacity: 0 }
            ],
            {
              duration: 300,
              easing: "ease-in-out",
              fill: "forwards"
            }
          );
          
          animation.onfinish = () => {
            details.open = false;
          };
        }
      }
    });
  }, [activeIndex, isMobile]);

  return (
    <div className="accordion-list md:hidden" ref={containerRef}>
      {FEATURES.map((feature, i) => (
        <details
          key={feature.id}
          className="accordion-item"
          onClick={(e) => {
            e.preventDefault();
            setActiveIndex(i);
          }}
        >
          <summary className="accordion-summary">
            <div className="flex items-center gap-3">
              <FeatureIcon name={feature.icon} />
              <h3>{feature.title}</h3>
            </div>
            <span className="accordion-chevron">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </summary>
          <div className="accordion-content">
            <p className="text-secondary">{feature.description}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
