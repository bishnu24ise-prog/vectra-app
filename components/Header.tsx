import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-[var(--color-primary)]">
        Skip to main content
      </a>
      
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-primary)]">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Vectra
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-text-secondary)]">
          <a href="#features" className="hover:text-[var(--color-text-primary)] transition-colors">Features</a>
          <a href="#pricing" className="hover:text-[var(--color-text-primary)] transition-colors">Pricing</a>
          <a href="#customers" className="hover:text-[var(--color-text-primary)] transition-colors">Customers</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors hidden md:block">
            Log in
          </Link>
          <Link href="#pricing" className="btn btn-primary text-sm px-4 py-2">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
