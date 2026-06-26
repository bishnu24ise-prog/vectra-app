export default function SocialProof() {
  const logos = ["Acme Corp", "GlobalTech", "Quantum", "Nebula", "Vertex", "Horizon"];
  
  return (
    <section id="customers" className="py-24 border-t border-[var(--color-border)] bg-[var(--color-surface)]/30">
      <div className="container text-center">
        <p className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-8">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo) => (
            <div key={logo} className="text-xl md:text-2xl font-heading font-bold text-[var(--color-text-primary)]">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
