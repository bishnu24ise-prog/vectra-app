"use client";

import { useState, useEffect } from "react";
import BentoGrid from "./BentoGrid";
import AccordionList from "./AccordionList";

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // ResizeObserver tracks breakpoint exactly so JS matches CSS
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Tailwind md breakpoint is 768px
        setIsMobile(entry.contentRect.width < 768);
      }
    });

    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="features-section container">
      <div className="features-header text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Everything you need to automate at scale
        </h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          One platform to orchestrate your data, AI models, and business logic without the engineering overhead.
        </p>
      </div>

      <div className="features-container">
        <BentoGrid activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <AccordionList activeIndex={activeIndex} setActiveIndex={setActiveIndex} isMobile={isMobile} />
      </div>
    </section>
  );
}
