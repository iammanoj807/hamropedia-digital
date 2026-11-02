import { demoShell } from './shell.js';

const MENU = [
  ['Momo', 'Handmade every morning. Steamed, fried or in a spicy soup (jhol).', [
    ['Chicken momo', 'Steamed, with tomato and sesame chutney', '7.50', ['Popular']],
    ['Vegetable momo', 'Cabbage, carrot, paneer and fresh herbs', '6.95', ['V']],
    ['Jhol momo', 'Chicken momo in a warm, tangy sesame soup', '8.50', ['Spicy']],
    ['Chilli momo', 'Fried, tossed with peppers, onion and chilli', '8.95', ['Spicy']],
  ]],
  ['Bowls & plates', 'Comfort food from the Himalayas.', [
    ['Thukpa', 'Noodle soup with vegetables and your choice of chicken or tofu', '8.95', []],
    ['Chow mein', 'Stir-fried noodles with vegetables and chicken', '8.50', []],
    ['Dal bhat set', 'Lentil soup, rice, curry of the day, greens and pickle', '10.95', ['V option']],
  ]],
  ['Sides & drinks', '', [
    ['Aloo sadeko', 'Spiced potato salad with lemon and sesame', '4.50', ['V']],
    ['Sel roti', 'Sweet rice-flour ring bread', '3.00', ['V']],
    ['Masala tea', 'Milky tea with cardamom and ginger', '2.50', ['V']],
  ]],
];

// 0 = Sunday. [open, close] in 24h hours, or null when closed.
const HOURS = [[12, 21], null, [17, 22], [17, 22], [17, 22], [12, 23], [12, 23]];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const fmt = (h) => (h === 12 ? '12pm' : h > 12 ? `${h - 12}pm` : `${h}am`);

const PLATE = `<svg viewBox="0 0 320 260" role="img" aria-label="A plate of steamed momos">
  <defs><radialGradient id="pl" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f1e6d6"/></radialGradient></defs>
  <g fill="none" stroke="#fdba74" stroke-width="5" stroke-linecap="round" opacity=".8"><path d="M118 52c-10-14 10-22 0-38"/><path d="M160 46c-10-14 10-22 0-38"/><path d="M202 52c-10-14 10-22 0-38"/></g>
  <ellipse cx="160" cy="176" rx="150" ry="70" fill="#7c2d12" opacity=".18"/>
  <ellipse cx="160" cy="166" rx="146" ry="66" fill="url(#pl)"/>
  <ellipse cx="160" cy="166" rx="118" ry="48" fill="none" stroke="#e7d3b8" stroke-width="3"/>
  ${[[100, 150], [160, 136], [220, 150], [128, 186], [192, 186]].map(([x, y]) => `<g transform="translate(${x} ${y})">
    <path d="M-34 14c0-26 15-44 34-44s34 18 34 44c0 8-15 12-34 12s-34-4-34-12Z" fill="#fff7ed" stroke="#e8cfae" stroke-width="2"/>
    <path d="M-14-24c4 8 4 16 0 24M0-30v28M14-24c-4 8-4 16 0 24" stroke="#e8cfae" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>`).join('')}
  <circle cx="262" cy="200" r="22" fill="#dc2626"/><circle cx="262" cy="200" r="16" fill="#ef4444"/>
</svg>`;

export function renderMomo() {
  const css = `
:root{--o:#c2410c;--o2:#ea580c;--cream:#fff8f0;--ink:#1c1917;--ink2:#57534e;--line:#f0e2d0}
*{box-sizing:border-box}body{margin:0;background:var(--cream);color:var(--ink);font:400 1.05rem/1.6 'Work Sans',system-ui,sans-serif}
a{color:inherit}img,svg{max-width:100%;height:auto}
.w{width:min(1120px,100% - 32px);margin-inline:auto}
h1,h2,h3{font-family:'DM Serif Display',Georgia,serif;font-weight:400;line-height:1.1;margin:0 0 .4em}
.top{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 0}
.brand{font:400 1.45rem/1 'DM Serif Display',serif;text-decoration:none}.brand span{color:var(--o)}
.b{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;min-height:48px;padding:.7rem 1.25rem;border-radius:999px;background:var(--o);color:#fff;font-weight:600;text-decoration:none;border:2px solid var(--o)}
.b.alt{background:transparent;color:var(--o)}.b svg{width:20px;height:20px}
.hero{display:grid;gap:2rem;align-items:center;padding:1.5rem 0 3rem}
@media(min-width:860px){.hero{grid-template-columns:1.1fr .9fr}}
.hero h1{font-size:clamp(2.4rem,1.6rem + 4vw,4.2rem)}
.hero p{font-size:1.15rem;color:var(--ink2);max-width:34rem}
.open{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem .8rem;border-radius:999px;background:#fff;border:1px solid var(--line);font-weight:600;font-size:.92rem;margin-bottom:1rem}
.dot{width:10px;height:10px;border-radius:50%;background:#a8a29e}.open.is-open .dot{background:#16a34a;box-shadow:0 0 0 4px #16a34a33}
.acts{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.4rem}
.sec{padding:3rem 0;border-top:1px solid var(--line)}
.sec h2{font-size:clamp(1.9rem,1.5rem + 1.6vw,2.6rem)}
.note{background:#fff;border:1px solid var(--line);border-left:4px solid var(--o);border-radius:12px;padding:.8rem 1rem;color:var(--ink2);margin:0 0 1.5rem}
.tabs{display:flex;gap:.5rem;overflow-x:auto;padding-bottom:.4rem;margin-bottom:1rem;scrollbar-width:none}
.tabs a{flex:none;padding:.45rem 1rem;border-radius:999px;background:#fff;border:1px solid var(--line);text-decoration:none;font-weight:600;font-size:.95rem}
.cat{margin-bottom:2rem}.cat h3{font-size:1.6rem;margin-bottom:.15em}.cat>p{color:var(--ink2);margin:0 0 .8rem}
.items{display:grid;gap:.75rem}@media(min-width:760px){.items{grid-template-columns:1fr 1fr}}
.item{display:flex;justify-content:space-between;gap:1rem;background:#fff;border:1px solid var(--line);border-radius:14px;padding:1rem 1.1rem}
.item h4{margin:0;font-size:1.08rem}.item p{margin:.15rem 0 0;color:var(--ink2);font-size:.95rem}
.price{font-weight:700;color:var(--o);white-space:nowrap}
.tag{display:inline-block;font-size:.72rem;font-weight:700;letter-spacing:.02em;padding:.1rem .45rem;border-radius:6px;background:#ffedd5;color:#9a3412;margin:.35rem .3rem 0 0}
.two{display:grid;gap:1.5rem}@media(min-width:860px){.two{grid-template-columns:1fr 1fr}}
.card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.4rem}
table{width:100%;border-collapse:collapse}td{padding:.55rem 0;border-bottom:1px solid var(--line)}td:last-child{text-align:right;font-weight:600}
tr.today td{color:var(--o);font-weight:700}
.map{position:relative;aspect-ratio:16/10;border-radius:14px;overflow:hidden;background:#e7e5e4;margin:.8rem 0 1rem}
.map svg{width:100%;height:100%}
.rev{display:flex;gap:.8rem;align-items:center;background:#fff;border:1px dashed #d6b98f;border-radius:14px;padding:1rem;color:var(--ink2)}
.rev b{color:#f59e0b;font-size:1.3rem;letter-spacing:2px}
footer{padding:2rem 0 6rem;color:var(--ink2);font-size:.92rem;border-top:1px solid var(--line)}
.sticky{position:fixed;left:0;right:0;bottom:0;display:flex;gap:.5rem;padding:.6rem 16px calc(.6rem + env(safe-area-inset-bottom));background:#fffffff0;border-top:1px solid var(--line);backdrop-filter:blur(8px)}
.sticky .b{flex:1}@media(min-width:860px){.sticky{display:none}footer{padding-bottom:2rem}}
`;
  const phone = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;
  const chat = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4V5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;
  const pin = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
  const CALL = 'data-demo="On a real website, this button rings the restaurant straight away."';
  const MSG = 'data-demo="On a real website, this opens WhatsApp with an order message ready to send."';
  const DIR = 'data-demo="On a real website, this opens Google Maps with directions to the door."';

  const body = `
<div class="w">
  <header class="top"><a class="brand" href="#">Himal <span>Momo</span> Kitchen</a><a class="b" href="#" ${CALL} style="white-space:nowrap">${phone}<span>Call us</span></a></header>
  <section class="hero">
    <div>
      <p class="open" id="open"><span class="dot"></span><span id="open-text">Opening hours below</span></p>
      <h1>Handmade momos, steamed fresh every day.</h1>
      <p>Nepali dumplings, noodle soups and dal bhat, made from scratch. Collection and local delivery.</p>
      <div class="acts">
        <a class="b" href="#" ${CALL}>${phone}Call to order</a>
        <a class="b alt" href="#" ${MSG}>${chat}Order by message</a>
        <a class="b alt" href="#" ${DIR}>${pin}Directions</a>
      </div>
    </div>
    <div>${PLATE}</div>
  </section>
</div>

<section class="sec" id="menu"><div class="w">
  <h2>Menu</h2>
  <p class="note"><strong>Allergies?</strong> Please tell us when you order. Our kitchen uses sesame, gluten and nuts. V = vegetarian.</p>
  <nav class="tabs" aria-label="Menu sections">${MENU.map(([c], n) => `<a href="#cat-${n}">${c}</a>`).join('')}</nav>
  ${MENU.map(([c, d, items], n) => `<div class="cat" id="cat-${n}"><h3>${c}</h3>${d ? `<p>${d}</p>` : ''}<div class="items">${items.map(([name, desc, price, tags]) => `<div class="item"><div><h4>${name}</h4><p>${desc}</p>${tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div><span class="price">£${price}</span></div>`).join('')}</div></div>`).join('')}
</div></section>

<section class="sec" id="visit"><div class="w two">
  <div class="card">
    <h2>Opening hours</h2>
    <table><tbody>${[1, 2, 3, 4, 5, 6, 0].map((d) => `<tr data-day="${d}"><td>${DAYS[d]}</td><td>${HOURS[d] ? `${fmt(HOURS[d][0])} to ${fmt(HOURS[d][1])}` : 'Closed'}</td></tr>`).join('')}</tbody></table>
  </div>
  <div class="card">
    <h2>Find us</h2>
    <p>12 Example Street, Your Town, AB1 2CD<br>Free parking behind the shop.</p>
    <div class="map" aria-hidden="true"><svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice"><rect width="400" height="250" fill="#ece8e1"/><path d="M0 80h400M0 180h400M120 0v250M280 0v250" stroke="#fff" stroke-width="16"/><path d="M0 130h400" stroke="#fde68a" stroke-width="10"/><rect x="150" y="20" width="100" height="45" rx="6" fill="#d9f99d"/><circle cx="200" cy="130" r="14" fill="#c2410c"/><circle cx="200" cy="130" r="5" fill="#fff"/></svg></div>
    <a class="b alt" href="#" ${DIR}>${pin}Get directions</a>
  </div>
</div></section>

<section class="sec"><div class="w">
  <h2>What customers say</h2>
  <div class="rev"><b>★★★★★</b><span>Your real Google reviews can appear here, so new customers see them right next to your menu.</span></div>
</div></section>

<footer><div class="w">Himal Momo Kitchen · 12 Example Street, Your Town · Example website, not a real business.</div></footer>
<div class="sticky"><a class="b" href="#" ${CALL}>${phone}Call</a><a class="b alt" href="#" ${MSG}>${chat}Message</a></div>`;

  const js = `
(function(){
  var H = ${JSON.stringify(HOURS)};
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes()/60;
  var row = document.querySelector('tr[data-day="'+d+'"]'); if (row) row.classList.add('today');
  var el = document.getElementById('open'), tx = document.getElementById('open-text');
  var f = function(x){ return x===12?'12pm':x>12?(x-12)+'pm':x+'am'; };
  var t = H[d];
  if (t && h >= t[0] && h < t[1]) { el.classList.add('is-open'); tx.textContent = 'Open now, until ' + f(t[1]); }
  else {
    for (var i = 0; i < 8; i++) { var k = (d + i) % 7, s = H[k]; if (s && (i > 0 || h < s[0])) { tx.textContent = 'Closed now. Opens ' + (i===0?'today':i===1?'tomorrow':['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][k]) + ' at ' + f(s[0]); break; } }
  }
})();`;

  return demoShell({
    slug: 'momo-kitchen',
    title: 'Himal Momo Kitchen',
    description: 'An example takeaway website: a phone-friendly menu, one-tap ordering, live opening hours and directions.',
    fonts: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Work+Sans:wght@400;600;700&display=swap',
    css, body, js, theme: '#c2410c',
  });
}
