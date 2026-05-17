import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.join(process.cwd(), 'content');

function extractMetaFromMarkdown(content, filename) {
  // Extract date from filename: Weekly_Storage_AI_Briefing_YYYY-MM-DD.md
  const dateMatch = filename.match(/(\d{4}-\d{2}-\d{2})/);
  const date = dateMatch ? dateMatch[1] : '2026-01-01';

  // Extract period covered
  const periodMatch = content.match(/Period Covered:\s*(.+?)(?:\*|\n)/);
  const period = periodMatch ? periodMatch[1].trim() : '';

  // Extract executive summary signals for cards
  const signals = [];
  const signalRegex = /\*\*Signal\s+(\d+)\s*—\s*(.+?)\.\*\*/g;
  let match;
  while ((match = signalRegex.exec(content)) !== null) {
    signals.push(match[2].trim());
  }

  // Count sections
  const sectionCount = (content.match(/^## \d+\./gm) || []).length;

  // Extract confidence markers
  const crossValidated = (content.match(/\[CROSS-VALIDATED\]/g) || []).length;
  const multiPass = (content.match(/\[MULTI-PASS\]/g) || []).length;
  const singleSource = (content.match(/\[SINGLE SOURCE\]/g) || []).length;

  return {
    date,
    period,
    signals,
    sectionCount,
    confidence: { crossValidated, multiPass, singleSource },
  };
}

export function getAllBriefings() {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.startsWith('Weekly_Storage_AI_Briefing_') && f.endsWith('.md') && /\d{4}-\d{2}-\d{2}/.test(f));

  const briefings = files.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const slug = filename.replace('.md', '');
    const meta = extractMetaFromMarkdown(fileContents, filename);

    return {
      slug,
      filename,
      ...meta,
    };
  });

  // Sort by date descending
  return briefings.sort((a, b) => b.date.localeCompare(a.date));
}

export function getBriefingBySlug(slug) {
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const meta = extractMetaFromMarkdown(fileContents, `${slug}.md`);

  // Configure marked for nice rendering
  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  const htmlContent = marked(fileContents);

  return {
    slug,
    ...meta,
    content: htmlContent,
  };
}

export function getAllSlugs() {
  if (!fs.existsSync(contentDir)) return [];

  return fs
    .readdirSync(contentDir)
    .filter((f) => f.startsWith('Weekly_Storage_AI_Briefing_') && f.endsWith('.md') && /\d{4}-\d{2}-\d{2}/.test(f))
    .map((f) => f.replace('.md', ''));
}
