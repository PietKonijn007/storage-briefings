import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.join(process.cwd(), 'content');

// Filename patterns for the two briefing categories.
// Storage briefings:  Weekly_Storage_AI_Briefing_YYYY-MM-DD.md   (legacy + ongoing)
// AI briefings:       Weekly_AI_Briefing_YYYY-MM-DD.md
const STORAGE_PREFIX = 'Weekly_Storage_AI_Briefing_';
const AI_PREFIX = 'Weekly_AI_Briefing_';

export const CATEGORIES = {
  storage: {
    id: 'storage',
    label: 'Storage',
    shortTitle: 'Storage & AI Briefing',
    longTitle: 'Weekly Storage & AI Data Platform Briefing',
    subtitle: '',
    prefix: STORAGE_PREFIX,
    description:
      'Storage, AI infrastructure, and competitive dynamics — architecture-level analysis for customer conversations and competitive deals.',
  },
  ai: {
    id: 'ai',
    label: 'AI',
    shortTitle: 'AI & Compute Briefing',
    longTitle: 'Weekly AI & Compute Innovation Briefing',
    subtitle: 'Models, agents, hardware, networking, safety, and policy across the AI stack.',
    prefix: AI_PREFIX,
    description:
      'Frontier models, open-source releases, GPU/accelerator hardware, HBM and CXL memory, networking, kernels and safety/policy.',
  },
};

function detectCategory(filename) {
  // Match the AI prefix first because the storage prefix also contains "AI".
  if (filename.startsWith(AI_PREFIX)) return 'ai';
  if (filename.startsWith(STORAGE_PREFIX)) return 'storage';
  return null;
}

function isBriefingFile(filename) {
  if (!filename.endsWith('.md')) return false;
  if (!/\d{4}-\d{2}-\d{2}/.test(filename)) return false;
  return detectCategory(filename) !== null;
}

function extractMetaFromMarkdown(content, filename) {
  const category = detectCategory(filename) || 'storage';

  // Date from filename (YYYY-MM-DD).
  const dateMatch = filename.match(/(\d{4}-\d{2}-\d{2})/);
  const date = dateMatch ? dateMatch[1] : '2026-01-01';

  // Period covered — accept either "Period Covered: ..." or "Date Range: ..." styles.
  let period = '';
  const periodMatch = content.match(/Period Covered:\s*(.+?)(?:\*|\n)/);
  if (periodMatch) {
    period = periodMatch[1].trim();
  } else {
    const dateRangeMatch = content.match(/Date Range:\s*(.+?)\n/);
    if (dateRangeMatch) {
      period = dateRangeMatch[1].replace(/[*_]/g, '').trim();
    }
  }

  // Signals — first try the "**Signal N — ...**" pattern used by storage briefings.
  const signals = [];
  const signalRegex = /\*\*Signal\s+(\d+)\s*—\s*(.+?)\.\*\*/g;
  let match;
  while ((match = signalRegex.exec(content)) !== null) {
    signals.push(match[2].trim());
  }

  // Fallback: pull bullet points from the Executive Summary section.
  if (signals.length === 0) {
    const execMatch = content.match(/###?\s*Executive Summary([\s\S]*?)(\n#{1,3}\s|\n---)/);
    if (execMatch) {
      const bulletRegex = /^[-*]\s+(.+)$/gm;
      let bm;
      while ((bm = bulletRegex.exec(execMatch[1])) !== null) {
        const text = bm[1]
          .replace(/^\*\*(.+?)\*\*\s*[—–-]\s*/, '$1 — ')
          .replace(/\*\*/g, '')
          .trim();
        if (text.length > 0) signals.push(text);
      }
    }
  }

  // Section count.
  const sectionCount = (content.match(/^## \d+\./gm) || []).length;

  // Confidence markers — storage style first, then AI-style "single-source".
  const crossValidated = (content.match(/\[CROSS-VALIDATED\]/g) || []).length;
  const multiPass = (content.match(/\[MULTI-PASS\]/g) || []).length;
  let singleSource = (content.match(/\[SINGLE SOURCE\]/g) || []).length;
  if (singleSource === 0) {
    singleSource = (content.match(/single[\s-]source/gi) || []).length;
  }

  return {
    date,
    period,
    signals,
    sectionCount,
    category,
    confidence: { crossValidated, multiPass, singleSource },
  };
}

function readBriefingFiles() {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir).filter(isBriefingFile);
}

export function getAllBriefings(category) {
  const files = readBriefingFiles();

  const briefings = files.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const slug = filename.replace('.md', '');
    const meta = extractMetaFromMarkdown(fileContents, filename);
    return { slug, filename, ...meta };
  });

  const filtered = category ? briefings.filter((b) => b.category === category) : briefings;
  return filtered.sort((a, b) => b.date.localeCompare(a.date));
}

export function getBriefingBySlug(slug) {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const meta = extractMetaFromMarkdown(fileContents, `${slug}.md`);

  marked.setOptions({ gfm: true, breaks: false });
  const htmlContent = marked(fileContents);

  return { slug, ...meta, content: htmlContent };
}

export function getAllSlugs() {
  return readBriefingFiles().map((f) => f.replace('.md', ''));
}

export function getCategoryCounts() {
  const briefings = getAllBriefings();
  return briefings.reduce(
    (acc, b) => {
      acc[b.category] = (acc[b.category] || 0) + 1;
      return acc;
    },
    { storage: 0, ai: 0 }
  );
}
