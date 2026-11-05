// Builds the whole site into dist/. No dependencies: just `node build.mjs`.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { site } from './src/data/site.js';
import { renderHome } from './src/pages/home.js';
import {
  renderServices, renderPrices, renderHow, renderQuestions, renderExamples,
  renderAbout, renderContact, renderPrivacy, renderTerms, render404,
} from './src/pages/pages.js';
import { renderMomo } from './src/demos/momo.js';
import { renderBarber } from './src/demos/barber.js';
import { renderAiDemo } from './src/demos/ai.js';
import { renderAi } from './src/pages/ai.js';
import { renderTradesmen, renderBirmingham, renderCostGuide } from './src/pages/landing.js';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');

const copyDir = (from, to) => {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, e.name), b = path.join(to, e.name);
    e.isDirectory() ? copyDir(a, b) : fs.copyFileSync(a, b);
  }
};

// A short hash of the CSS and JS, so browsers fetch new versions after each change.
const hash = crypto.createHash('sha1');
for (const f of ['src/assets/css/site.css', 'src/assets/js/site.js']) hash.update(fs.readFileSync(path.join(ROOT, f)));
const version = hash.digest('hex').slice(0, 8);

fs.rmSync(DIST, { recursive: true, force: true });
copyDir(path.join(ROOT, 'public'), DIST);
copyDir(path.join(ROOT, 'src/assets'), path.join(DIST, 'assets'));

const pages = [];
const add = (route, html, { index = true } = {}) => {
  const file = route.endsWith('.html') ? path.join(DIST, route) : path.join(DIST, route, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  if (index) pages.push(route);
};

add('/', renderHome(version));
add('/services/', renderServices(version));
add('/ai/', renderAi(version));
add('/prices/', renderPrices(version));
add('/how-much-does-a-website-cost/', renderCostGuide(version));
add('/websites-for-tradesmen/', renderTradesmen(version));
add('/web-design-birmingham/', renderBirmingham(version));
add('/examples/', renderExamples(version));
add('/how-it-works/', renderHow(version));
add('/questions/', renderQuestions(version));
add('/about/', renderAbout(version));
add('/contact/', renderContact(version));
add('/privacy/', renderPrivacy(version));
add('/terms/', renderTerms(version));
add('/404.html', render404(version), { index: false });
// Example websites for made-up businesses: kept out of Google (noindex) and the sitemap.
add('/examples/momo-kitchen/', renderMomo(), { index: false });
add('/examples/barber/', renderBarber(), { index: false });
add('/examples/ai-assistant/', renderAiDemo(), { index: false });

let today = new Date().toISOString().slice(0, 10);
try { today = execSync('git log -1 --format=%cs', { cwd: ROOT }).toString().trim() || today; } catch { /* not a git checkout */ }
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
fs.writeFileSync(path.join(DIST, '.nojekyll'), '');

console.log(`Built ${pages.length} pages + 3 examples into dist/ (assets v${version}).`);
