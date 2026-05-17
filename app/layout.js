import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Briefings — Storage · AI · Compute',
  description:
    'Weekly Storage & AI Data Platform Briefings and Weekly AI & Compute Innovation Briefings.',
};

function Wordmark() {
  return (
    <Link href="/" className="flex items-baseline gap-3">
      <span className="editorial-display text-[22px] tracking-tight text-[var(--color-text-primary)]">
        Briefings<span className="text-[var(--color-brand-400)]">.</span>
      </span>
      <span className="hidden md:inline eyebrow">
        Storage · AI · Compute
      </span>
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        <div className="grain" aria-hidden="true" />

        <div className="relative z-10">
          {/* Header */}
          <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]/85 backdrop-blur-md sticky top-0 z-40">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
              <Wordmark />
              <nav className="flex items-center gap-1 text-sm">
                <Link
                  href="/"
                  className="px-3 py-1.5 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-medium"
                >
                  Storage
                </Link>
                <Link
                  href="/?category=ai"
                  className="px-3 py-1.5 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-medium"
                >
                  AI &amp; Compute
                </Link>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="mt-32 border-t border-[var(--color-border)]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="editorial-display text-[20px] text-[var(--color-text-primary)]">
                  Briefings<span className="text-[var(--color-brand-400)]">.</span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-2 max-w-md leading-relaxed">
                  Strategic intelligence on storage, AI infrastructure, and the broader compute frontier.
                  Prepared for the CTO and VP Sales Engineering, NetApp EMEA, LATAM &amp; Middle East.
                </p>
              </div>
              <div className="flex items-center gap-6 eyebrow">
                <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Storage</Link>
                <Link href="/?category=ai" className="hover:text-[var(--color-text-primary)] transition-colors">AI &amp; Compute</Link>
              </div>
            </div>
            <div className="border-t border-[var(--color-border)]">
              <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 text-[10px] mono text-[var(--color-text-faint)] tracking-widest uppercase flex items-center justify-between">
                <span>© {new Date().getFullYear()} · Internal distribution</span>
                <span>Confidential</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
