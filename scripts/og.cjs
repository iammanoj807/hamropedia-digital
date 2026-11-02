// One-off: draws the social share image (public/images/og.jpg). Needs sharp, e.g. from the hamropedia project:
//   NODE_PATH=../hamropedia/node_modules node scripts/og.cjs
const sharp = require('sharp');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2453c4"/><stop offset="1" stop-color="#16348a"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
<path d="M0 630 L0 540 L180 470 L310 520 L500 420 L660 505 L820 440 L980 530 L1120 470 L1200 500 L1200 630 Z" fill="#fff" opacity=".08"/>
<rect x="80" y="80" width="72" height="72" rx="18" fill="#fff"/><path d="M90 136 L110 104 L120 118 L130 100 L148 136 Z" fill="#2453c4"/>
<text x="172" y="130" font-family="Georgia, serif" font-size="40" font-weight="700" fill="#fff">Hamropedia <tspan fill="#a9c1ff">Digital</tspan></text>
<text x="80" y="280" font-family="Georgia, serif" font-size="68" font-weight="700" fill="#fff">Get your business online,</text>
<text x="80" y="362" font-family="Georgia, serif" font-size="68" font-weight="700" fill="#a9c1ff">without the jargon.</text>
<text x="80" y="450" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#dbe5ff">Simple, fast websites for small businesses in the UK.</text>
<text x="80" y="500" font-family="Helvetica, Arial, sans-serif" font-size="32" font-weight="700" fill="#fff">Fixed prices from £299 · You own everything</text>
</svg>`;
sharp(Buffer.from(svg)).jpeg({ quality: 86 }).toFile('public/images/og.jpg').then(() => console.log('saved public/images/og.jpg'));
