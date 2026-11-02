import { site, packages, care, faqs, offlineStat, marketPrice, extras } from '../data/site.js';
import { demos } from '../data/examples.js';
import { layout, ICONS, esc, gbp, contactButtons, faqList, faqSchema, ctaBand } from '../layout.js';

const price = (p) => `${p.from ? '<small>from</small> ' : ''}${gbp(p.gbp)}`;

export function exampleCard(d, { big = false } = {}) {
  return `<article class="ex-card${big ? ' ex-card-big' : ''}" style="--ex:${d.accent}">
  <a class="ex-shot" href="/examples/${d.slug}/" aria-label="Open the ${esc(d.name)} example website">
    <img src="/images/examples/${d.slug}.webp" alt="The ${esc(d.name)} example website on a phone" width="390" height="720" loading="lazy">
  </a>
  <div class="ex-body">
    <p class="ex-type">${esc(d.type)}</p>
    <h3><a href="/examples/${d.slug}/">${esc(d.name)}</a></h3>
    <p>${esc(d.summary)}</p>
    ${big ? `<ul class="ticks">${d.shows.map((s) => `<li>${ICONS.check}${esc(s)}</li>`).join('')}</ul><p class="ex-pack">Package: <strong>${esc(d.package)}</strong></p>` : ''}
    <a class="text-link" href="/examples/${d.slug}/">Try the example ${ICONS.arrow}</a>
  </div>
</article>`;
}

export function priceCards({ compact = false } = {}) {
  return `<div class="price-grid">${packages.map((p) => `<article class="price-card${p.featured ? ' featured' : ''}">
    ${p.featured ? '<p class="badge">Best for most businesses</p>' : ''}
    <h3>${esc(p.name)}</h3>
    <p class="price-what">${esc(p.what)}</p>
    <p class="price">${price(p)}<span>one-off</span></p>
    <p class="price-time">${ICONS.calendar}${esc(p.time)}</p>
    <p class="price-best">${esc(p.best)}</p>
    <ul class="ticks">${(compact ? p.includes.slice(0, 4) : p.includes).map((x) => `<li>${ICONS.check}${esc(x)}</li>`).join('')}</ul>
    <a class="btn${p.featured ? '' : ' btn-ghost'} btn-block" href="/contact/?package=${p.id}">Ask about ${esc(p.name)}</a>
  </article>`).join('')}</div>`;
}

const PROBLEMS = [
  ['search', 'Customers search for you and find someone else', 'A simple website and a Google Business Profile put you on Google, right where people are looking.'],
  ['chat', 'You answer the same questions all day', 'Prices, opening hours and directions on one clear page, so the phone rings for real orders instead.'],
  ['phone', 'Your website looks broken on a phone', 'Most people visit on their phone. Every site I build is made for phones first.'],
  ['heart', 'You only have a Facebook page', 'Social pages are great, but they are hard to find on Google. A website works for you even when you are not posting.'],
];

const GETS = [
  ['map', 'Found on Google', 'Set up so people nearby can find you on Google and Google Maps.'],
  ['call', 'One tap to call or message', 'Big, clear buttons to call, WhatsApp, email or get directions.'],
  ['phone', 'Made for phones', 'Looks right and loads fast on every phone, tablet and computer.'],
  ['pound', 'Fixed, honest prices', 'You know the full price before we start. No surprises, ever.'],
  ['key', 'You own everything', 'Your web address is in your name, and you can take your site anywhere.'],
  ['shield', 'Safe and low-cost to run', 'Simple, secure websites with nothing to update and usually no hosting bill.'],
];

const STEPS = [
  ['Free chat', 'A 15-minute call or message. You tell me about your business; I ask a few simple questions.'],
  ['Fixed price', 'I send a clear plan and one fixed price. Nothing starts until you say yes.'],
  ['I build it, you check it', 'You see your website before anyone else, and I change anything you are not happy with.'],
  ['You go live', 'Your website goes online, and I help you get it onto Google and Google Maps.'],
];

const FINDER = {
  questions: [
    { id: 'need', q: 'What do you need most?', options: [
      ['found', 'Customers to find me and get in touch'],
      ['book', 'Customers to book or order online'],
      ['maps', 'Just to show up properly on Google Maps'],
    ] },
    { id: 'now', q: 'Do you have a website now?', options: [
      ['none', 'No, or only a social media page'],
      ['old', 'Yes, but it is old, slow or broken'],
    ] },
    { id: 'size', q: 'How much do you need to show?', options: [
      ['few', 'A few services or products: one page is enough'],
      ['many', 'Lots of services, with details for each'],
    ] },
  ],
};

export function renderHome(version) {
  const homeFaqs = faqs.filter((f) => f.home);
  const gfg = extras[0];
  const body = `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Websites for small businesses · anywhere in the UK</p>
      <h1>Get your business online, <em>without the jargon</em>.</h1>
      <p class="lead">I build simple, fast websites that bring you customers, and explain every step in plain English. One fixed price from ${gbp(packages[0].gbp)}. You own everything.</p>
      <div class="btn-row">${contactButtons({ big: true })}</div>
      <ul class="hero-points">
        <li>${ICONS.check}Fixed price, agreed before we start</li>
        <li>${ICONS.check}Pay half now, half when you are happy</li>
        <li>${ICONS.check}No contracts, no tech talk</li>
      </ul>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="phone phone-back"><img src="/images/examples/${demos[1].slug}.webp" alt="" width="390" height="720"></div>
      <div class="phone phone-front"><img src="/images/examples/${demos[0].slug}.webp" alt="" width="390" height="720"></div>
      <p class="hero-tag">${ICONS.phone}Real example websites you can try</p>
    </div>
  </div>
</section>

<section class="wrap section" aria-labelledby="pain-h">
  <div class="section-head center"><p class="eyebrow">Sound familiar?</p><h2 id="pain-h">Your customers are online. Can they find you?</h2></div>
  <div class="problem-grid">
    ${PROBLEMS.map(([icon, t, fix]) => `<article class="problem"><span class="icon-tile">${ICONS[icon]}</span><h3>${t}</h3><p>${fix}</p></article>`).join('')}
  </div>
  <aside class="stat">
    <p class="stat-big">${offlineStat.big}</p>
    <p class="stat-text">${esc(offlineStat.text)} When customers search on their phone, a business with no website is easy to miss.<br><a href="${offlineStat.url}" rel="noopener">Source: ${esc(offlineStat.source)}</a></p>
  </aside>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head center"><p class="eyebrow">What you get</p><h2>A website that works as hard as you do</h2><p class="section-lead">No complicated features you will never use. Just the things that bring in customers.</p></div>
    <div class="get-grid">
      ${GETS.map(([icon, t, d]) => `<div class="get"><span class="icon-tile">${ICONS[icon]}</span><div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}
    </div>
  </div>
</section>

<section class="wrap section" aria-labelledby="ex-h">
  <div class="section-head"><div><p class="eyebrow">Examples</p><h2 id="ex-h">See what your website could look like</h2></div><a class="text-link" href="/examples/">All examples ${ICONS.arrow}</a></div>
  <p class="section-lead">These are working example websites for made-up businesses. Open them on your phone, tap the buttons and try the booking and price tools.</p>
  <div class="ex-grid">${demos.map((d) => exampleCard(d)).join('')}</div>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head center"><p class="eyebrow">How it works</p><h2>Four simple steps, and I do the technical parts</h2></div>
    <ol class="steps">${STEPS.map(([t, d], n) => `<li><span class="step-n">${n + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
    <p class="center"><a class="text-link" href="/how-it-works/">What happens at each step ${ICONS.arrow}</a></p>
  </div>
</section>

<section class="wrap section" aria-labelledby="price-h">
  <div class="section-head center"><p class="eyebrow">Prices</p><h2 id="price-h">One fixed price. No surprises.</h2><p class="section-lead">Launch prices while I take on my first clients. ${esc(marketPrice.text)} (<a href="${marketPrice.url}" rel="noopener">${esc(marketPrice.source)}</a>)</p></div>
  ${priceCards({ compact: true })}
  <div class="price-notes">
    <p>${ICONS.heart}<span><strong>Optional care plan, ${gbp(care.gbp)} a month:</strong> I make your changes and keep everything running. No contract.</span></p>
    <p>${ICONS.map}<span><strong>Just need Google Maps?</strong> ${esc(gfg.name)} is ${gbp(gfg.gbp)}, no website needed.</span></p>
  </div>
  <p class="center"><a class="text-link" href="/prices/">Full prices and running costs ${ICONS.arrow}</a></p>
</section>

<section class="band">
  <div class="wrap section finder-wrap">
    <div class="section-head center"><p class="eyebrow">Not sure what you need?</p><h2>Answer 3 quick questions</h2><p class="section-lead">I will suggest the right package. No email needed.</p></div>
    <form class="finder" id="finder" aria-live="polite">
      ${FINDER.questions.map((q, n) => `<fieldset class="finder-q"><legend><span>${n + 1}</span>${q.q}</legend>${q.options.map(([v, label]) => `<label class="choice"><input type="radio" name="${q.id}" value="${v}" required><span>${label}</span></label>`).join('')}</fieldset>`).join('')}
      <button class="btn btn-lg" type="submit">Show my suggestion ${ICONS.arrow}</button>
      <div class="finder-result" id="finder-result" hidden></div>
    </form>
    <script type="application/json" id="finder-data">${JSON.stringify({
      packages: Object.fromEntries(packages.map((p) => [p.id, { name: p.name, what: p.what, price: `${p.from ? 'from ' : ''}${gbp(p.gbp)}`, best: p.best }])),
      google: { name: gfg.name, price: gbp(gfg.gbp), text: gfg.text },
      refresh: { name: extras[1].name, price: `from ${gbp(extras[1].gbp)}` },
    }).replace(/</g, '\\u003c')}</script>
  </div>
</section>

<section class="wrap section" aria-labelledby="promise-h">
  <div class="promise">
    <div class="promise-me">
      <img src="/images/manojkumarthapa.webp" alt="${esc(site.owner)}" width="220" height="260" loading="lazy">
    </div>
    <div>
      <p class="eyebrow">Who you will work with</p>
      <h2 id="promise-h">Hi, I am Manoj. You deal with me, from first chat to launch.</h2>
      <p>I am a software engineer based in Birmingham, and I build and run <a href="https://hamropedia.com/">hamropedia.com</a>. I started Hamropedia Digital to help small businesses get online properly, at a fair price, without being confused or tied into contracts.</p>
      <ul class="ticks">
        <li>${ICONS.check}I explain everything in plain English, and I answer every "silly" question.</li>
        <li>${ICONS.check}If you do not need a website yet, I will tell you, and suggest something cheaper.</li>
        <li>${ICONS.check}Your web address is in your name. If you leave, you take everything with you.</li>
      </ul>
      <a class="text-link" href="/about/">More about me ${ICONS.arrow}</a>
    </div>
  </div>
</section>

<section class="wrap section narrow" aria-labelledby="faq-h">
  <div class="section-head center"><h2 id="faq-h">Questions owners ask me</h2></div>
  ${faqList(homeFaqs)}
  <p class="center"><a class="text-link" href="/questions/">More questions, and tech words explained ${ICONS.arrow}</a></p>
</section>

${ctaBand()}`;

  return layout({
    title: `${site.name}: simple websites for small businesses in the UK`,
    ogTitle: 'Get your business online, without the jargon',
    description: site.description,
    path: '/',
    body,
    version,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: site.name,
        url: site.url + '/',
        image: site.url + '/images/og.jpg',
        description: site.description,
        email: site.email,
        areaServed: [{ '@type': 'Country', name: 'United Kingdom' }, { '@type': 'Country', name: 'Nepal' }],
        founder: { '@type': 'Person', name: site.owner, sameAs: Object.values(site.social) },
        priceRange: `£${packages[0].gbp}–£${packages[2].gbp}+`,
        parentOrganization: { '@type': 'Organization', name: 'Hamropedia', url: 'https://hamropedia.com/' },
      },
      faqSchema(homeFaqs),
    ],
  });
}

export const FINDER_DATA = FINDER;
