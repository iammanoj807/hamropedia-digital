import { site, nav } from './data/site.js';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const abs = (p) => (p.startsWith('http') ? p : site.url + p);
export const gbp = (n) => `£${n.toLocaleString('en-GB')}`;
export const waLink = (text = '') =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : '';
export const mailLink = (subject = 'Website enquiry') => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

const i = (body, cls = '') => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;
const st = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
export const ICONS = {
  logo: `<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="10" fill="var(--accent)"/><path d="M5 30 L15 14 L20 21 L25 12 L35 30 Z" fill="#fff"/></svg>`,
  sun: i(`<circle cx="12" cy="12" r="4.5" ${st}/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" ${st}/>`),
  moon: i(`<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" ${st}/>`),
  menu: i(`<path d="M4 7h16M4 12h16M4 17h16" ${st}/>`),
  close: i(`<path d="M6 6l12 12M18 6 6 18" ${st}/>`),
  arrow: i(`<path d="M5 12h14M13 6l6 6-6 6" ${st}/>`),
  check: i(`<path d="m5 12.5 4.2 4.2L19 7" ${st} stroke-width="2.4"/>`),
  cross: i(`<path d="M7 7l10 10M17 7 7 17" ${st} stroke-width="2.4"/>`),
  search: i(`<circle cx="11" cy="11" r="7" ${st}/><path d="m20 20-3.5-3.5" ${st}/>`),
  phone: i(`<rect x="7" y="2.5" width="10" height="19" rx="2.5" ${st}/><path d="M11 18.5h2" ${st}/>`),
  call: i(`<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" ${st}/>`),
  map: i(`<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" ${st}/><circle cx="12" cy="9.5" r="2.5" ${st}/>`),
  key: i(`<circle cx="8" cy="15" r="4" ${st}/><path d="m11 12 9-9M17 6l3 3M14 9l2 2" ${st}/>`),
  bolt: i(`<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" ${st}/>`),
  calendar: i(`<rect x="3.5" y="5" width="17" height="15.5" rx="2.5" ${st}/><path d="M3.5 10h17M8 3v4M16 3v4" ${st}/>`),
  cart: i(`<path d="M3 4h2.5l2.2 11h10.6L20.5 8H7" ${st}/><circle cx="9" cy="19.5" r="1.4" ${st}/><circle cx="17" cy="19.5" r="1.4" ${st}/>`),
  wrench: i(`<path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8M14.5 6.5 13 5a4 4 0 0 0-5.5 5.5L3 15l3 3 4.5-4.5" ${st}/>`),
  heart: i(`<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Z" ${st}/>`),
  chat: i(`<path d="M4 5h16v11H9l-5 4V5Z" ${st}/><path d="M8 9.5h8M8 12.5h5" ${st}/>`),
  pound: i(`<path d="M16.5 6.5A4 4 0 0 0 9 8.5V19M6 13h7M6 19h12" ${st}/>`),
  shield: i(`<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6L12 3Z" ${st}/><path d="m8.8 12 2.3 2.3 4.2-4.3" ${st}/>`),
  pencil: i(`<path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Z" ${st}/><path d="m14.5 7.5 3 3" ${st}/>`),
  tool: i(`<rect x="3.5" y="4" width="17" height="13" rx="2" ${st}/><path d="M8 21h8M12 17v4M7.5 9l2 2-2 2M12 13h4" ${st}/>`),
  star: i(`<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" ${st}/>`),
  mail: i(`<rect x="3" y="5" width="18" height="14" rx="2.5" ${st}/><path d="m4 7 8 6 8-6" ${st}/>`),
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.3 14.7L2.3 21.8l5-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2c0 1.2.9 2.4 1 2.5.1.2 1.7 2.7 4.2 3.8 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.6-.4Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.9 8.6H3.8V20h3.1V8.6ZM5.3 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.2 13.4c0-3.1-1.7-4.9-4.1-4.9-1.6 0-2.6.9-3 1.6V8.6H10V20h3.1v-5.9c0-1.6.6-2.8 2.1-2.8s2 1.2 2 2.9V20h3.1v-6.6Z"/></svg>`,
  globe: i(`<circle cx="12" cy="12" r="9" ${st}/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" ${st}/>`),
};

// Runs before first paint, so a dark-mode choice never flashes white.
const THEME_BOOT = `(function(){try{if(localStorage.getItem('hd-theme')==='dark')document.documentElement.dataset.theme='dark';}catch(e){}})();`;

/** Buttons to get in touch: email always, WhatsApp only when a number is set. */
export function contactButtons({ subject = 'Website enquiry', big = false } = {}) {
  const size = big ? ' btn-lg' : '';
  const wa = waLink(`Hi Manoj, I'm interested in a website or AI for my business.`);
  return `<a class="btn${size}" href="/contact/">Get a free quote ${ICONS.arrow}</a>${
    wa ? `<a class="btn btn-ghost${size}" href="${wa}" rel="noopener">${ICONS.whatsapp} WhatsApp me</a>` : `<a class="btn btn-ghost${size}" href="${mailLink(subject)}">${ICONS.mail} Email me</a>`
  }`;
}

/**
 * @param {object} p
 * @param {string} p.title  full <title>
 * @param {string} p.description
 * @param {string} p.path   canonical path, e.g. "/prices/"
 * @param {string} p.body
 * @param {string} [p.section]  nav href to mark as current
 * @param {object[]} [p.schema] JSON-LD
 * @param {string} [p.lang]
 * @param {boolean} [p.noindex]
 */
export function layout(p) {
  const url = abs(p.path);
  const image = abs('/images/og.jpg');
  const lang = p.lang || 'en';
  // Google shows the site name above each result and cuts long titles, so very long titles drop the brand.
  const brand = ` | ${site.name}`;
  const pageTitle = p.title.length > 70 && p.title.endsWith(brand) ? p.title.slice(0, -brand.length) : p.title;
  const schema = (p.schema || [])
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, '\\u003c')}</script>`)
    .join('\n');
  const links = nav
    .map((n) => `<a href="${n.href}"${p.section === n.href ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`)
    .join('');

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(p.description)}">
${p.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(p.ogTitle || p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(site.name)}: websites and AI for small businesses">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${image}">
<meta name="theme-color" content="#2453c4">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<script>${THEME_BOOT}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Mukta:wght@400;500;700&display=swap">
<link rel="stylesheet" href="/assets/css/site.css?v=${p.version}">
${schema}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header" lang="en">
  <div class="wrap header-row">
    <a class="logo" href="/" aria-label="${esc(site.name)}, home">${ICONS.logo}<span class="logo-text">Hamropedia <b>Digital</b></span></a>
    <nav class="main-nav" id="main-nav" aria-label="Main">${links}<a class="nav-cta" href="/contact/"${p.section === '/contact/' ? ' aria-current="page"' : ''}>Free quote</a></nav>
    <div class="header-tools">
      <button class="icon-btn" id="theme-btn" type="button" aria-label="Switch to dark mode" aria-pressed="false"><span class="i-moon">${ICONS.moon}</span><span class="i-sun">${ICONS.sun}</span></button>
      <button class="icon-btn menu-btn" id="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav"><span class="i-menu">${ICONS.menu}</span><span class="i-close">${ICONS.close}</span></button>
    </div>
  </div>
</header>
<main id="main">
${p.body}
</main>
<footer class="site-footer" lang="en">
  <div class="wrap footer-grid">
    <div class="footer-about">
      <a class="logo" href="/">${ICONS.logo}<span class="logo-text">Hamropedia <b>Digital</b></span></a>
      <p>Websites and AI for small businesses across the UK, explained in plain English. Run by ${esc(site.owner)}, an AI software engineer in Birmingham.</p>
      <p><a href="${mailLink()}">${esc(site.email)}</a></p>
    </div>
    <div>
      <h2 class="footer-h">Services</h2>
      <ul>
        <li><a href="/services/">Websites</a></li>
        <li><a href="/ai/">AI &amp; automation</a></li>
        <li><a href="/prices/">Prices</a></li>
        <li><a href="/examples/">Examples &amp; real projects</a></li>
      </ul>
    </div>
    <div>
      <h2 class="footer-h">Help</h2>
      <ul>
        <li><a href="/how-it-works/">How it works</a></li>
        <li><a href="/questions/">Questions &amp; plain-English words</a></li>
        <li><a href="/contact/">Get a free quote</a></li>
        <li><a href="/about/">About me</a></li>
      </ul>
    </div>
    <div>
      <h2 class="footer-h">Elsewhere</h2>
      <ul>
        <li><a href="https://hamropedia.com/">Hamropedia.com</a></li>
        <li><a href="${site.social.github}" rel="me noopener">GitHub</a></li>
        <li><a href="${site.social.portfolio}" rel="me noopener">Portfolio</a></li>
        <li><a href="${site.social.linkedin}" rel="me noopener">LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-base">
    <p>© ${new Date().getFullYear()} ${esc(site.name)}, part of <a href="https://hamropedia.com/">Hamropedia</a>.</p>
    <p><a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></p>
  </div>
</footer>
<script type="module" src="/assets/js/site.js?v=${p.version}"></script>
</body>
</html>
`;
}

/** Page heading block used at the top of inner pages. */
export function pageHead({ eyebrow, title, lead, crumbs = [] }) {
  const trail = crumbs.length
    ? `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a>${crumbs.map((c) => ` <span aria-hidden="true">/</span> ${c.path ? `<a href="${c.path}">${esc(c.name)}</a>` : `<span aria-current="page">${esc(c.name)}</span>`}`).join('')}</nav>`
    : '';
  return `<section class="page-head">
  <div class="wrap">
    ${trail}
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <h1>${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
  </div>
</section>`;
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((c, n) => ({
      '@type': 'ListItem', position: n + 1, name: c.name, item: abs(c.path || '/'),
    })),
  };
}

export function faqSchema(list) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function faqList(list) {
  return `<div class="faq">${list.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}</div>`;
}

/** Final call-to-action band used at the bottom of most pages. */
export function ctaBand(title = 'Ready to grow your business?', text = 'Tell me about your business. I will reply with ideas, one fixed price and a simple plan, free and with no obligation.') {
  return `<section class="cta-band">
  <div class="wrap cta-inner">
    <div><h2>${title}</h2><p>${text}</p></div>
    <div class="btn-row">${contactButtons({ big: true })}</div>
  </div>
</section>`;
}
