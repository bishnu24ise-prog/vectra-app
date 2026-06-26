export default function SocialProof() {
  const logos = [
    "Acme Corp", "GlobalTech", "Quantum", "Nebula", "Vertex", "Horizon",
    "Apex AI", "NovaSys", "CoreData", "FluxOps",
  ];

  // Duplicate for seamless marquee loop
  const doubledLogos = [...logos, ...logos];

  return (
    <section id="customers" className="py-20" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container text-center mb-10">
        <p className="section-eyebrow" style={{ justifyContent: "center" }}>
          Trusted worldwide
        </p>
        <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", maxWidth: "36rem", margin: "0 auto" }}>
          Innovative teams at leading companies run on Vectra every day.
        </p>
      </div>

      {/* Marquee container */}
      <div
        style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <div className="social-proof-track" style={{ gap: "1rem" }}>
          {doubledLogos.map((logo, i) => (
            <div key={`${logo}-${i}`} className="social-proof-logo" style={{ marginRight: "1rem" }}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
