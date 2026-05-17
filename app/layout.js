import './globals.css';

export const metadata = {
  title: 'Storage & AI Briefing',
  description: 'Weekly Storage & AI Data Platform Briefing for NetApp EMEA, LATAM & Middle East',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-surface)] min-h-screen">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[var(--color-brand-600)] via-[var(--color-brand-400)] to-[var(--color-brand-600)]" />

        {/* Header */}
        <header className="border-b border-[var(--color-border)] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 no-underline">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-brand-600)] to-[var(--color-brand-800)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-[var(--color-text-primary)] leading-tight tracking-tight">
                  Storage & AI Briefing
                </h1>
                <p className="text-xs text-[var(--color-text-muted)] font-medium">
                  NetApp EMEA, LATAM & Middle East
                </p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
              <a href="/" className="hover:text-[var(--color-brand-600)] transition-colors font-medium">
                Archive
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-[var(--color-border)] mt-20">
          <div className="max-w-5xl mx-auto px-6 py-8 text-center">
            <p className="text-sm text-[var(--color-text-muted)]">
              Weekly Storage & AI Data Platform Briefing
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Prepared for the CTO and VP Sales Engineering, NetApp EMEA, LATAM & Middle East
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
