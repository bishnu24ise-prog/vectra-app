export default function Hero() {
  return (
    <section className="hero-section container">
      {/* Animated ambient orbs — pure CSS, hardware-accelerated */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      <div className="mx-auto max-w-4xl entrance-sequence" style={{ position: "relative", zIndex: 1 }}>
        {/* Announcement pill with shimmer */}
        <div className="announcement-pill entrance-item">
          <span className="pulse-dot" aria-hidden="true" />
          Vectra Engine 2.0 is now live
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 entrance-item" style={{ fontFamily: "var(--font-heading)", lineHeight: "1.06" }}>
          Automate at the{" "}
          <span className="text-gradient">speed of thought.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto entrance-item" style={{ color: "var(--color-text-secondary)", lineHeight: "1.5" }}>
          The next-generation AI platform that transforms your raw data into automated workflows instantly.{" "}
          <span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>No coding required.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 entrance-item">
          <a href="#pricing" className="btn btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
            Start Building Free
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: "0.5rem" }}>
              <path d="M3.75 9h10.5M9 4.5 13.5 9 9 13.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#features" className="btn btn-secondary text-base px-8 py-3.5 w-full sm:w-auto">
            Explore Features
          </a>
        </div>

        {/* Stats bar */}
        <div className="hero-stats entrance-item">
          <div className="hero-stat">
            <div className="hero-stat-number">10M+</div>
            <div className="hero-stat-label">Workflows run</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">99.99%</div>
            <div className="hero-stat-label">Uptime SLA</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">&lt;100ms</div>
            <div className="hero-stat-label">Trigger latency</div>
          </div>
        </div>
      </div>
    </section>
  );
}
