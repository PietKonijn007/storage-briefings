import { getBriefingBySlug, getAllSlugs, getAllBriefings, CATEGORIES } from '../../../lib/briefings';
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
  const cat = CATEGORIES[briefing.category];
  return {
    title: `Week of ${briefing.date} — ${cat.shortTitle}`,
    description: `${cat.longTitle} covering ${briefing.period || briefing.date}`,
  };
}

function formatDateLong(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function issueNumber(dateStr, allDates) {
  const sorted = [...allDates].sort();
  const idx = sorted.indexOf(dateStr);
  return idx >= 0 ? String(idx + 1).padStart(2, '0') : '—';
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

function ConfidencePills({ confidence }) {
  const items = [];
  if (confidence.crossValidated > 0) items.push({ label: 'cross-validated', count: confidence.crossValidated, dot: 'var(--color-signal-green)' });
  if (confidence.multiPass > 0) items.push({ label: 'multi-pass', count: confidence.multiPass, dot: 'var(--color-signal-blue)' });
  if (confidence.singleSource > 0) items.push({ label: 'single source', count: confidence.singleSource, dot: 'var(--color-signal-amber)' });
  if (items.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((p) => (
        <span key={p.label} className="pill">
          <span className="pill-dot" style={{ background: p.dot }} />
          <span className="font-semibold text-[var(--color-text-primary)]">{p.count}</span>
          <span>{p.label}</span>
        </span>
      ))}
    </div>
  );
}

export default async function BriefingPage({ params }) {
  const { slug } = await params;
  const briefing = getBriefingBySlug(slug);
  if (!briefing) notFound();

  const cat = CATEGORIES[briefing.category];
  const backHref = briefing.category === 'storage' ? '/' : `/?category=${briefing.category}`;
  const trackBriefings = getAllBriefings(briefing.category);
  const allDates = trackBriefings.map((b) => b.date);
  const issue = issueNumber(briefing.date, allDates);

  return (
    <>
      <ReadingProgressBar />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-10 pb-24">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-4">
          <Link
            href={backHref}
            className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-brand-300)] transition-colors mono uppercase tracking-widest"
          >
            ← All {cat.label} briefings
          </Link>
          <span className="cat-tag">{cat.label} · № {issue}</span>
        </nav>

        {/* Article header — editorial cover */}
        <header className="mb-12">
          <div className="eyebrow mb-5">
            {formatDateLong(briefing.date)}
            {briefing.period ? <> · {briefing.period}</> : null}
          </div>

          <h1 className="editorial-display text-[clamp(2.25rem,5vw,3.75rem)] text-balance text-[var(--color-text-primary)] leading-[1.08] mb-6">
            {cat.longTitle}
          </h1>

          {cat.subtitle && (
            <p className="text-lg text-[var(--color-text-secondary)] serif leading-relaxed max-w-2xl">
              {cat.subtitle}
            </p>
          )}

          {/* Signal block */}
          {briefing.signals.length > 0 && (
            <div className="mt-10 glass p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="eyebrow">— Key signals this week</span>
                <span className="eyebrow mono">{String(briefing.signals.length).padStart(2, '0')} total</span>
              </div>
              <ol className="space-y-4">
                {briefing.signals.map((s, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="signal-badge mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[15px] leading-relaxed text-[var(--color-text-primary)] serif">
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
                <ConfidencePills confidence={briefing.confidence} />
              </div>
            </div>
          )}
        </header>

        <div className="hairline mb-12" />

        {/* Article body */}
        <div className="briefing-content" dangerouslySetInnerHTML={{ __html: briefing.content }} />

        {/* Bottom nav */}
        <div className="mt-20 pt-8 border-t border-[var(--color-border)] flex items-center justify-between">
          <Link
            href={backHref}
            className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-brand-300)] transition-colors mono uppercase tracking-widest"
          >
            ← Back to {cat.label.toLowerCase()} briefings
          </Link>
          <span className="cat-tag">{cat.label} · № {issue}</span>
        </div>
      </article>
    </>
  );
}
