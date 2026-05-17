import { getAllBriefings } from '../lib/briefings';
import Link from 'next/link';

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ConfidencePill({ label, count, color }) {
  if (count === 0) return null;
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
      style={{ background: color + '15', color: color }}
    >
      <span className="font-bold">{count}</span> {label}
    </span>
  );
}

export default function HomePage() {
  const briefings = getAllBriefings();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mb-3">
          Weekly Briefings
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl" style={{ fontFamily: 'var(--font-serif)' }}>
          Strategic intelligence on storage, AI infrastructure, and competitive dynamics.
          Architecture-level analysis for customer conversations, competitive deals, and internal strategy.
        </p>
      </div>

      {/* Latest briefing highlight */}
      {briefings.length > 0 && (
        <div className="mb-10">
          <div className="text-xs font-semibold text-[var(--color-brand-600)] uppercase tracking-wider mb-3">
            Latest Briefing
          </div>
          <Link href={`/briefings/${briefings[0].slug}`} className="block no-underline">
            <div className="briefing-card bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <time className="text-sm font-medium text-[var(--color-brand-600)]">
                    {formatDate(briefings[0].date)}
                  </time>
                  {briefings[0].period && (
                    <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                      {briefings[0].period}
                    </p>
                  )}
                </div>
                <span className="bg-[var(--color-brand-500)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>

              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight">
                Week of {briefings[0].date}
              </h2>

              {/* Signals preview */}
              {briefings[0].signals.length > 0 && (
                <div className="space-y-2 mb-5">
                  {briefings[0].signals.slice(0, 4).map((signal, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="signal-badge flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-sm text-[var(--color-text-secondary)] leading-snug">
                        {signal.length > 140 ? signal.substring(0, 140) + '...' : signal}
                      </span>
                    </div>
                  ))}
                  {briefings[0].signals.length > 4 && (
                    <p className="text-xs text-[var(--color-text-muted)] ml-9">
                      +{briefings[0].signals.length - 4} more signals
                    </p>
                  )}
                </div>
              )}

              {/* Confidence pills */}
              <div className="flex flex-wrap gap-2">
                <ConfidencePill label="cross-validated" count={briefings[0].confidence.crossValidated} color="#059669" />
                <ConfidencePill label="multi-pass" count={briefings[0].confidence.multiPass} color="#2563eb" />
                <ConfidencePill label="single source" count={briefings[0].confidence.singleSource} color="#d97706" />
              </div>

              <div className="mt-5 text-sm font-medium text-[var(--color-brand-600)]">
                Read full briefing &rarr;
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Archive grid */}
      {briefings.length > 1 && (
        <>
          <div className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
            Previous Briefings
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {briefings.slice(1).map((briefing) => (
              <Link
                key={briefing.slug}
                href={`/briefings/${briefing.slug}`}
                className="block no-underline"
              >
                <div className="briefing-card bg-white rounded-xl p-6 shadow-sm h-full">
                  <time className="text-sm font-medium text-[var(--color-brand-600)]">
                    {formatDate(briefing.date)}
                  </time>
                  {briefing.period && (
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      {briefing.period}
                    </p>
                  )}

                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-2 mb-3 tracking-tight">
                    Week of {briefing.date}
                  </h3>

                  {briefing.signals.length > 0 && (
                    <div className="space-y-1.5 mb-3">
                      {briefing.signals.slice(0, 3).map((signal, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-[var(--color-brand-100)] text-[var(--color-brand-700)] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-xs text-[var(--color-text-secondary)] leading-snug">
                            {signal.length > 100 ? signal.substring(0, 100) + '...' : signal}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    <ConfidencePill label="validated" count={briefing.confidence.crossValidated} color="#059669" />
                    <ConfidencePill label="multi-pass" count={briefing.confidence.multiPass} color="#2563eb" />
                  </div>

                  <div className="mt-3 text-xs font-medium text-[var(--color-brand-600)]">
                    Read &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {briefings.length === 0 && (
        <div className="text-center py-20 text-[var(--color-text-muted)]">
          <p className="text-lg">No briefings yet.</p>
          <p className="text-sm mt-2">
            Add markdown files to the <code className="bg-[var(--color-surface-alt)] px-2 py-0.5 rounded">content/</code> directory.
          </p>
        </div>
      )}
    </div>
  );
}
