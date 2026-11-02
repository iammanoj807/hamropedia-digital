// Wraps an example website in a full page with a small "this is an example" bar,
// so nobody mistakes a made-up business for a real one.
import { site } from '../data/site.js';

const BAR_CSS = `
.demo-bar{position:sticky;top:0;z-index:100;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.35rem .9rem;padding:.5rem 1rem;background:#0f172a;color:#e2e8f0;font:500 .82rem/1.35 system-ui,-apple-system,'Segoe UI',sans-serif;text-align:center}
.demo-bar a{color:#fff;font-weight:700;text-decoration:underline;text-underline-offset:2px}
.demo-bar strong{color:#93c5fd}
.demo-toast{position:fixed;left:50%;bottom:1.25rem;z-index:200;width:min(92vw,420px);transform:translate(-50%,150%);opacity:0;transition:transform .25s,opacity .25s;background:#0f172a;color:#fff;padding:.85rem 1rem;border-radius:12px;box-shadow:0 12px 30px rgb(0 0 0/30%);font:500 .9rem/1.4 system-ui,-apple-system,'Segoe UI',sans-serif;text-align:center}
.demo-toast.show{transform:translate(-50%,0);opacity:1}
html.shot .demo-bar{display:none}
`;

// Buttons with data-demo="message" show the message instead of calling a made-up number.
const BAR_JS = `
(function(){
  if (location.search.indexOf('shot') > -1) document.documentElement.classList.add('shot');
  var toast = document.createElement('div'); toast.className = 'demo-toast'; toast.setAttribute('role','status'); document.body.appendChild(toast);
  var t; window.demoToast = function(msg){ toast.textContent = msg; toast.classList.add('show'); clearTimeout(t); t = setTimeout(function(){ toast.classList.remove('show'); }, 3600); };
  document.addEventListener('click', function(e){
    var a = e.target.closest('[data-demo]'); if (!a) return;
    e.preventDefault(); window.demoToast(a.getAttribute('data-demo'));
  });
})();
`;

export function demoShell({ slug, title, description, fonts = '', css, body, js = '', theme = '#ffffff' }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} (example website) | ${site.name}</title>
<meta name="description" content="${description}">
<meta name="robots" content="noindex">
<meta name="theme-color" content="${theme}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
${fonts ? `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="${fonts}">` : ''}
<style>${BAR_CSS}${css}</style>
</head>
<body>
<div class="demo-bar" role="note"><span><strong>Example website</strong> for a made-up business, built by ${site.name}.</span><span><a href="/examples/">All examples</a> · <a href="/contact/?example=${slug}">Get one like this</a></span></div>
${body}
<script>${BAR_JS}${js}</script>
</body>
</html>
`;
}
