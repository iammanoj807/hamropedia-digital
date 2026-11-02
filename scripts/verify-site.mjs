// Checks the built site in dist/: every internal link and image exists, and every page
// has one h1, a title, a sensible description and (unless noindex) a canonical URL.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const problems = [];
const htmlFiles = [];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const p = path.join(d, e.name);
  if (e.isDirectory()) walk(p); else if (p.endsWith('.html')) htmlFiles.push(p);
});
walk(DIST);

const exists = (url) => {
  const clean = decodeURIComponent(url.split(/[?#]/)[0]);
  const f = path.join(DIST, clean);
  return fs.existsSync(f) && (fs.statSync(f).isFile() || fs.existsSync(path.join(f, 'index.html')));
};

for (const file of htmlFiles) {
  const rel = '/' + path.relative(DIST, file).replace(/index\.html$/, '');
  const html = fs.readFileSync(file, 'utf8');
  const noindex = html.includes('name="robots" content="noindex"');
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] || '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] || '';
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (!title) problems.push(`${rel}: no <title>`);
  if (title.length > 75) problems.push(`${rel}: title is ${title.length} characters (keep it under 75)`);
  if (desc.length < 70 || desc.length > 200) problems.push(`${rel}: description is ${desc.length} characters (aim for 70 to 200)`);
  if (h1s !== 1) problems.push(`${rel}: ${h1s} <h1> tags (want exactly 1)`);
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, '');
  if (/\bundefined\b|\bNaN\b/.test(visible)) problems.push(`${rel}: page text contains "undefined" or "NaN"`);
  if (!noindex && !html.includes('<link rel="canonical"')) problems.push(`${rel}: no canonical link`);
  for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    if (m[1].startsWith('//')) continue;
    if (!exists(m[1])) problems.push(`${rel}: broken link ${m[1]}`);
  }
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${m[1]}"`)) problems.push(`${rel}: link to missing #${m[1]}`);
  }
}

const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
for (const m of sitemap.matchAll(/<loc>https:\/\/[^/]+(\/[^<]*)<\/loc>/g)) if (!exists(m[1])) problems.push(`sitemap: ${m[1]} missing`);
if (!fs.existsSync(path.join(DIST, 'CNAME'))) problems.push('CNAME file missing');

if (problems.length) {
  console.error(`Found ${problems.length} problem(s):\n- ` + problems.join('\n- '));
  process.exit(1);
}
console.log(`All good: ${htmlFiles.length} HTML files checked.`);
