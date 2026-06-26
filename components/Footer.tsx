import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4" style={{ textDecoration: "none" }}>
              <svg aria-hidden="true" width="26" height="26" viewBox="0 0 28 28" fill="none">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
                <path d="M14 2L3 8.5l11 5.5 11-5.5L14 2z" fill="url(#footer-logo-grad)" />
                <path d="M3 19.5l11 6 11-6M3 14l11 6 11-6" stroke="url(#footer-logo-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-gradient" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.125rem" }}>
                Vectra
              </span>
            </Link>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: "1.6", maxWidth: "20rem" }}>
              Automate at the speed of thought. The next-generation AI platform for enterprise workflows.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "0.875rem", color: "var(--color-text-primary)" }}>Product</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
              {["Features", "Pricing", "Integrations", "Changelog"].map((item) => (
                <li key={item}>
                  <a href={item === "Features" ? "#features" : item === "Pricing" ? "#pricing" : "#"} className="footer-link" style={{ color: "var(--color-text-secondary)", transition: "color 150ms ease-out", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "0.875rem", color: "var(--color-text-primary)" }}>Company</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: "var(--color-text-secondary)", transition: "color 150ms ease-out", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "0.875rem", color: "var(--color-text-primary)" }}>Legal</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
              {["Privacy Policy", "Terms of Service", "Security", "Compliance"].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: "var(--color-text-secondary)", transition: "color 150ms ease-out", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingTop: "2rem", borderTop: "1px solid var(--color-border)", fontSize: "0.8125rem", color: "var(--color-text-muted)", gap: "1rem" }} className="md:flex-row">
          <p>© {new Date().getFullYear()} Vectra Inc. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {/* Twitter/X */}
            <a href="#" aria-label="Follow Vectra on X (Twitter)" style={{ color: "var(--color-text-muted)", transition: "color 150ms ease-out" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" aria-label="Vectra on GitHub" style={{ color: "var(--color-text-muted)", transition: "color 150ms ease-out" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
