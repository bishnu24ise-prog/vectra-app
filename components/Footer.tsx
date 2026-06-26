import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight mb-4">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-primary)]">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Vectra
            </Link>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
              Automate at the speed of thought. The next-generation AI platform for enterprise workflows.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[var(--color-text-primary)]">Product</h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li><a href="#features" className="hover:text-[var(--color-primary)] transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-[var(--color-primary)] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[var(--color-text-primary)]">Company</h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[var(--color-text-primary)]">Legal</h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--color-border)] text-sm text-[var(--color-text-secondary)]">
          <p>© {new Date().getFullYear()} Vectra Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" aria-label="Twitter" className="hover:text-[var(--color-text-primary)] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-[var(--color-text-primary)] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
