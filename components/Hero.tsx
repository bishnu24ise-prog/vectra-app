export default function Hero() {
  return (
    <section className="hero-section container pt-24 pb-16 md:pt-32 md:pb-24 text-center">
      <div className="mx-auto max-w-4xl entrance-sequence">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-sm font-medium text-[var(--color-secondary)] mb-8 entrance-item">
          <span className="flex h-2 w-2 rounded-full bg-[var(--color-secondary)] animate-pulse"></span>
          Vectra Engine 2.0 is now live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8 entrance-item">
          Automate at the <span className="text-gradient">speed of thought.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto entrance-item">
          The next-generation AI platform that transforms your raw data into automated workflows instantly. No coding required.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 entrance-item">
          <a href="#pricing" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
            Start Building Free
          </a>
          <a href="#features" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
