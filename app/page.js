import { getAllBriefings, getCategoryCounts, CATEGORIES } from '../lib/briefings';
import Link from 'next/link';

function formatDateLong(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

function issueNumber(dateStr, allDates) {
  // Issue number = position within the same track, oldest = 1
  const sorted = [...allDates].sort();
  const idx = sorted.indexOf(dateStr);
  return idx >= 0 ? String(idx + 1).padStart(2, '0') : '—';
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

function Segmented({ active, counts }) {
  const tabs = [
    { id: 'storage', label: 'Storage', count: counts.storage, href: '/' },
    { id: 'ai',      label: 'AI & Compute', count: counts.ai, href: '/?category=ai' },
  ];
  return (
    <div className="segmented">
      {tabs.map((t) => (
        <Link key={t.id} href={t.href} className={t.id === active ? 'active' : ''}>
          {t.label}
          <span className="count">{String(t.count).padStart(2, '0')}</span>
        </Link>
      ))}
    </div>
  );
}

export default async function HomePage({ searchParams }) {
  const sp = (await searchParams) || {};
  const requested = typeof sp.category === 'string' ? sp.category : 'storage';
  const category = CATEGORIES[requested] ? requested : 'storage';

  const briefings = getAllBriefings(category);
  const counts = getCategoryCounts();
  const meta = CATEGORIES[category];
  const allDates = briefings.map((b) => b.date);

  const latest = briefings[0];
  const archive = briefings.slice(1);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-20">
      {/* ============== HERO ============== */}
      <section className="grid grid-cols-12 gap-8 mb-16 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="eyebrow mb-5">
            Vol. MMXXVI · {meta.label} Track
          </div>
          <h1 className="editorial-display text-[clamp(2.5rem,7vw,5.5rem)] text-balance text-[var(--color-text-primary)] mb-6">
            {category === 'storage' ? (
              <>The week, in <span className="text-[var(--color-brand-300)] italic">storage</span> &amp; AI infrastructure.</>
            ) : (
              <>The week, in <span className="text-[var(--color-brand-300)] italic">AI</span> &amp; compute.</>
            )}
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed serif">
            {meta.description}
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          <Segmented active={category} counts={counts} />
        </div>
      </section>

      <div className="hairline mb-14" />

      {/* ============== FEATURE / LATEST ============== */}
      {latest && (
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <span className="eyebrow">— Latest issue</span>
            <span className="eyebrow">{formatDateLong(latest.date)}</span>
          </div>

          <Link href={`/briefings/${latest.slug}`} className="block group">
            <article className="glass-feature p-8 md:p-12 grid grid-cols-12 gap-8">
              {/* Left: issue marker + meta */}
              <div className="col-span-12 md:col-span-3 flex md:flex-col justify-between md:justify-start gap-6">
                <div>
                  <div className="eyebrow mb-2">Issue №</div>
                  <div className="editorial-display text-[64px] md:text-[88px] leading-none text-[var(--color-brand-300)]">
                    {issueNumber(latest.date, allDates)}
                  </div>
                </div>
                <div className="md:mt-10 space-y-3">
                  <div>
                    <div className="eyebrow mb-1">Track</div>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">{meta.label}</div>
                  </div>
                  {latest.period && (
                    <div>
                      <div className="eyebrow mb-1">Period</div>
                      <div className="text-sm text-[var(--color-text-secondary)] leading-snug">{latest.period}</div>
                    </div>
                  )}
                  {latest.sectionCount > 0 && (
                    <div>
                      <div className="eyebrow mb-1">Sections</div>
                      <div className="text-sm text-[var(--color-text-secondary)] mono">{latest.sectionCount}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: signals + cover headline */}
              <div className="col-span-12 md:col-span-9">
                <h2 className="editorial-display text-[clamp(1.75rem,3.8vw,2.75rem)] text-balance text-[var(--color-text-primary)] mb-7 leading-[1.08] group-hover:text-[var(--color-brand-200)] transition-colors">
                  {meta.longTitle} — week of {formatDateShort(latest.date)}.
                </h2>

                {latest.signals.length > 0 && (
                  <ol className="space-y-3.5 mb-8">
                    {latest.signals.slice(0, 5).map((s, i) => (
                      <li key={i} className="flex gap-3.5 items-start">
                        <span className="signal-badge mt-1">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] serif">
                          {s.length > 220 ? s.substring(0, 220) + '…' : s}
                        </span>
                      </li>
                    ))}
                  </ol>
                )}

                <div className="flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-[var(--color-border)]">
                  <ConfidencePills confidence={latest.confidence} />
                  <span className="text-sm font-medium text-[var(--color-brand-300)] group-hover:text-[var(--color-brand-200)] transition-colors">
                    Read the full briefing &rarr;
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* ============== ARCHIVE ============== */}
      {archive.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <span className="eyebrow">— Archive</span>
            <span className="eyebrow mono">{String(archive.length).padStart(2, '0')} prior issues</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {archive.map((b) => (
              <Link key={b.slug} href={`/briefings/${b.slug}`} className="block group">
                <article className="glass p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="eyebrow mb-1">№ {issueNumber(b.date, allDates)} · {meta.label}</div>
                      <time className="text-sm font-medium text-[var(--color-text-primary)]">{formatDateLong(b.date)}</time>
                      {b.period && (
                        <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">{b.period}</p>
                      )}
                    </div>
                  </div>

                  {b.signals.length > 0 && (
                    <ol className="space-y-2.5 mb-5 flex-1">
                      {b.signals.slice(0, 3).map((s, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="signal-badge mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                          <span className="text-[13px] leading-snug text-[var(--color-text-secondary)]">
                            {s.length > 130 ? s.substring(0, 130) + '…' : s}
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}

                  <div className="pt-4 mt-auto border-t border-[var(--color-border)] flex items-center justify-between gap-3">
                    <ConfidencePills confidence={b.confidence} />
                    <span className="text-xs font-medium text-[var(--color-brand-300)] group-hover:text-[var(--color-brand-200)] transition-colors flex-shrink-0">
                      Read &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ============== EMPTY STATE ============== */}
      {briefings.length === 0 && (
        <div className="glass p-16 text-center">
          <div className="eyebrow mb-4">No issues yet</div>
          <p className="editorial-display text-3xl mb-3 text-[var(--color-text-primary)]">
            The {meta.label.toLowerCase()} track is empty.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
            Drop a markdown file named{' '}
            <code className="mono px-2 py-0.5 rounded bg-[var(--color-surface-2)] text-[var(--color-brand-200)] border border-[var(--color-border)]">
              {meta.prefix}YYYY-MM-DD.md
            </code>{' '}
            into the <code className="mono">content/</code> directory.
          </p>
        </div>
      )}
    </div>
  );
}
