import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:z-50" style={{ background: "var(--color-primary)", color: "white" }}>
        Skip to main content
      </a>

      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
            <path d="M14 2L3 8.5l11 5.5 11-5.5L14 2z" fill="url(#logo-grad)" />
            <path d="M3 19.5l11 6 11-6M3 14l11 6 11-6" stroke="url(#logo-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.125rem", letterSpacing: "-0.02em" }} className="text-gradient">
            Vectra
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          <a href="#features" className="header-nav-link">Features</a>
          <a href="#pricing" className="header-nav-link">Pricing</a>
          <a href="#customers" className="header-nav-link">Customers</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:block header-nav-link text-sm font-medium"
            style={{ fontSize: "0.875rem" }}
          >
            Log in
          </a>
          <Link href="#pricing" className="btn btn-primary" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
