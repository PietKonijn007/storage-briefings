import { getBriefingBySlug, getAllSlugs } from '../../../lib/briefings';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const briefing = getBriefingBySlug(slug);
  if (!briefing) return { title: 'Not Found' };

  return {
    title: `Week of ${briefing.date} — Storage & AI Briefing`,
    description: `Weekly Storage & AI Data Platform Briefing covering ${briefing.period || briefing.date}`,
  };
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ReadingProgressBar() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var bar = document.createElement('div');
            bar.className = 'progress-bar';
            document.body.appendChild(bar);
            window.addEventListener('scroll', function() {
              var h = document.documentElement;
              var pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
              bar.style.width = Math.min(pct, 100) + '%';
            });
          })();
        `,
      }}
    />
  );
}

export default async function BriefingPage({ params }) {
  const { slug } = await params;
  const briefing = getBriefingBySlug(slug);

  if (!briefing) {
    notFound();
  }

  return (
    <>
      <ReadingProgressBar />

      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-600)] transition-colors no-underline"
          >
            &larr; All Briefings
          </Link>
        </nav>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm font-medium text-[var(--color-brand-600)]">
              {formatDate(briefing.date)}
            </time>
            {briefing.period && (
              <>
                <span className="text-[var(--color-border)]">|</span>
                <span className="text-sm text-[var(--color-text-muted)]">{briefing.period}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">
            Weekly Storage & AI Briefing
          </h1>

          <p className="text-base text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-serif)' }}>
            Prepared for the CTO and VP Sales Engineering, NetApp EMEA, LATAM & Middle East
          </p>

          {/* Signal chips */}
          {briefing.signals.length > 0 && (
            <div className="mt-6 p-5 bg-white rounded-xl border border-[var(--color-border)]">
              <div className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                Key Signals This Week
              </div>
              <div className="space-y-2">
                {briefing.signals.map((signal, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="signal-badge flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-sm text-[var(--color-text-primary)] leading-snug font-medium">
                      {signal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Confidence summary */}
          <div className="flex flex-wrap gap-2 mt-4">
            {briefing.confidence.crossValidated > 0 && (
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {briefing.confidence.crossValidated} cross-validated
              </span>
            )}
            {briefing.confidence.multiPass > 0 && (
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {briefing.confidence.multiPass} multi-pass
              </span>
            )}
            {briefing.confidence.singleSource > 0 && (
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {briefing.confidence.singleSource} single source
              </span>
            )}
          </div>
        </header>

        {/* Divider */}
        <hr className="border-[var(--color-border)] mb-10" />

        {/* Article body */}
        <div
          className="briefing-content"
          dangerouslySetInnerHTML={{ __html: briefing.content }}
        />

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] no-underline"
          >
            &larr; Back to all briefings
          </Link>
        </div>
      </article>
    </>
  );
}
