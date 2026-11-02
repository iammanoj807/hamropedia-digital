import { site, packages, care, faqs, stats, marketPrice, extras, aiServices, lowestPrice } from '../data/site.js';
import { demos, projects } from '../data/examples.js';
import { layout, ICONS, esc, gbp, contactButtons, faqList, faqSchema, ctaBand } from '../layout.js';

const price = (p) => `${p.from ? '<small>from</small> ' : ''}${gbp(p.gbp)}`;
export const aiPrice = (s) => `${s.from ? 'from ' : ''}${gbp(s.gbp)}${s.monthly ? ` + ${gbp(s.monthly)}/month` : ''}`;

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

export function projectCard(p, { full = false } = {}) {
  return `<article class="proj">
  <a class="proj-shot" href="${p.demo}" rel="noopener" aria-label="Open the ${esc(p.name)} live demo"><img src="/images/projects/${p.slug}.webp" alt="${esc(p.name)} screenshot" width="800" height="500" loading="lazy"></a>
  <div class="proj-body">
    <p class="ex-type" style="--ex:var(--accent)">${esc(p.kind)}</p>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.plain)}</p>
    ${full ? `<p class="proj-proof">${ICONS.check}<span>${esc(p.proof)}</span></p>` : ''}
    <p class="proj-you"><strong>For your business:</strong> ${esc(p.forYou)}</p>
    <p class="proj-links"><a class="text-link" href="${p.demo}" rel="noopener">Try the live demo ${ICONS.arrow}</a>${full && p.code ? `<a class="text-link muted-link" href="${p.code}" rel="noopener">See the code</a>` : ''}</p>
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

export function aiCards({ withPrice = true } = {}) {
  return `<div class="ai-grid">${aiServices.map((s) => `<article class="ai-card">
    <span class="icon-tile">${ICONS[s.icon]}</span>
    <h3>${esc(s.name)}</h3>
    <p>${esc(s.what)}</p>
    <p class="ai-example"><strong>Example:</strong> ${esc(s.example)}</p>
    ${withPrice ? `<p class="ai-price">${esc(aiPrice(s))}</p>` : ''}
  </article>`).join('')}</div>`;
}

export function statBox(st, extra = '') {
  return `<aside class="stat">
    <p class="stat-big">${esc(st.big)}</p>
    <p class="stat-text">${esc(st.text)}${extra ? ` ${extra}` : ''}<br><a href="${st.url}" rel="noopener">Source: ${esc(st.source)}</a></p>
  </aside>`;
}

const PROBLEMS = [
  ['search', 'Customers search for you and find someone else', 'A simple website and a Google Business Profile put you on Google, right where people are looking.'],
  ['chat', 'You answer the same questions all day', 'An AI assistant answers prices, hours and "can you come Saturday?" for you, day and night.'],
  ['pencil', 'Evenings lost to admin', 'Enquiries, reminders, invoices and receipts can be handled by software, so your evenings are yours again.'],
  ['phone', 'Your website looks broken on a phone', 'Most people visit on their phone. Every site I build is made for phones first.'],
];

const STEPS = [
  ['Free chat', 'A 15-minute call or a few emails. You tell me how your business works; I spot what would bring in customers or save you time.'],
  ['Fixed price', 'I send a clear plan and one fixed price. Nothing starts until you say yes.'],
  ['I build it, you check it', 'You try everything first, and I change anything you are not happy with.'],
  ['You go live', 'Your website or assistant goes live, and I show you how it all works.'],
];

const FINDER = [
  { id: 'need', q: 'What would help your business most?', options: [
    ['found', 'More customers finding me online'],
    ['time', 'Less time on messages and admin'],
    ['book', 'Customers booking or ordering online'],
    ['maps', 'Just showing up properly on Google Maps'],
  ] },
  { id: 'now', q: 'Do you have a website now?', options: [
    ['none', 'No, or only a social media page'],
    ['old', 'Yes, but it is old, slow or broken'],
    ['good', 'Yes, and it works well'],
  ] },
  { id: 'size', q: 'How much do you need to show customers?', options: [
    ['few', 'A few services or products'],
    ['many', 'Lots of services, with details for each'],
  ] },
];

export function renderHome(version) {
  const homeFaqs = faqs.filter((f) => f.home);
  const gfg = extras[0];
  const assistant = aiServices[0];
  const aiDemo = demos[0];
  const body = `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Websites &amp; AI for small businesses · anywhere in the UK</p>
      <h1>More customers, less admin, <em>without the jargon</em>.</h1>
      <p class="lead">I am an AI engineer who builds simple websites and AI assistants for small businesses. Get found on Google, answer customers day and night, and hand the boring admin to software. Fixed prices from ${gbp(lowestPrice)}.</p>
      <div class="btn-row">${contactButtons({ big: true })}</div>
      <ul class="hero-points">
        <li>${ICONS.check}Fixed price, agreed before we start</li>
        <li>${ICONS.check}Pay half now, half when you are happy</li>
        <li>${ICONS.check}No contracts, no tech talk</li>
      </ul>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="phone phone-back"><img src="/images/examples/${demos[1].slug}.webp" alt="" width="390" height="720"></div>
      <div class="phone phone-front"><img src="/images/examples/${aiDemo.slug}.webp" alt="" width="390" height="720"></div>
      <p class="hero-tag">${ICONS.phone}Real example websites you can try</p>
    </div>
  </div>
</section>

<section class="wrap section" aria-labelledby="pain-h">
  <div class="section-head center"><p class="eyebrow">Sound familiar?</p><h2 id="pain-h">Running a small business is hard enough</h2></div>
  <div class="problem-grid">
    ${PROBLEMS.map(([icon, t, fix]) => `<article class="problem"><span class="icon-tile">${ICONS[icon]}</span><h3>${t}</h3><p>${fix}</p></article>`).join('')}
  </div>
  <div class="stat-row">
    ${statBox(stats.offline, 'When customers search on their phone, a business with no website is easy to miss.')}
    ${statBox(stats.ai, 'The smallest businesses are falling behind bigger ones.')}
  </div>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head"><div><p class="eyebrow">AI &amp; automation</p><h2>Let AI do the repetitive work</h2></div><a class="text-link" href="/ai/">How AI could help you ${ICONS.arrow}</a></div>
    <p class="section-lead">Practical AI for small businesses, set up for you and explained in plain words. It answers only from your own information, and passes anything it is not sure about to you.</p>
    ${aiCards()}
    <div class="ai-demo-cta">
      <div><h3>Try an AI assistant now</h3><p>Chat with the assistant of a made-up cleaning company, and watch the admin it does for the owner behind the scenes.</p></div>
      <a class="btn" href="/examples/${aiDemo.slug}/">Try the AI example ${ICONS.arrow}</a>
    </div>
  </div>
</section>

<section class="wrap section" aria-labelledby="ex-h">
  <div class="section-head"><div><p class="eyebrow">Examples</p><h2 id="ex-h">See what yours could look like</h2></div><a class="text-link" href="/examples/">All examples and real projects ${ICONS.arrow}</a></div>
  <p class="section-lead">Working example websites for made-up businesses. Open them on your phone, tap the buttons, book a slot and chat with the assistant.</p>
  <div class="ex-grid">${demos.map((d) => exampleCard(d)).join('')}</div>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head"><div><p class="eyebrow">Real AI I have built</p><h2>Not just talk: AI projects you can try</h2></div><a class="text-link" href="/examples/#real">All real projects ${ICONS.arrow}</a></div>
    <p class="section-lead">Before Hamropedia Digital, I built these AI tools myself. Each one has a live demo you can open in your browser.</p>
    <div class="proj-grid">${projects.slice(0, 2).map((p) => projectCard(p)).join('')}</div>
  </div>
</section>

<section class="wrap section" aria-labelledby="price-h">
  <div class="section-head center"><p class="eyebrow">Prices</p><h2 id="price-h">Small-business prices. No surprises.</h2><p class="section-lead">Launch prices while I take on my first clients. ${esc(marketPrice.text)} (<a href="${marketPrice.url}" rel="noopener">${esc(marketPrice.source)}</a>)</p></div>
  ${priceCards({ compact: true })}
  <div class="price-notes">
    <p>${ICONS.chat}<span><strong>${esc(assistant.name)}:</strong> ${esc(aiPrice(assistant))}. <a href="/ai/">All AI prices</a></span></p>
    <p>${ICONS.heart}<span><strong>Optional care plan, ${gbp(care.gbp)} a month:</strong> I make your changes and keep everything running. No contract.</span></p>
    <p>${ICONS.map}<span><strong>Just need Google Maps?</strong> ${esc(gfg.name)} is ${gbp(gfg.gbp)}, no website needed.</span></p>
  </div>
  <p class="center"><a class="text-link" href="/prices/">Full prices and running costs ${ICONS.arrow}</a></p>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head center"><p class="eyebrow">How it works</p><h2>Four simple steps, and I do the technical parts</h2></div>
    <ol class="steps">${STEPS.map(([t, d], n) => `<li><span class="step-n">${n + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
    <p class="center"><a class="text-link" href="/how-it-works/">What happens at each step ${ICONS.arrow}</a></p>
  </div>
</section>

<section class="wrap section finder-wrap">
  <div class="section-head center"><p class="eyebrow">Not sure what you need?</p><h2>Answer 3 quick questions</h2><p class="section-lead">I will suggest where to start. No email needed.</p></div>
  <form class="finder" id="finder" aria-live="polite">
    ${FINDER.map((q, n) => `<fieldset class="finder-q"><legend><span>${n + 1}</span>${q.q}</legend>${q.options.map(([v, label]) => `<label class="choice"><input type="radio" name="${q.id}" value="${v}" required><span>${label}</span></label>`).join('')}</fieldset>`).join('')}
    <button class="btn btn-lg" type="submit">Show my suggestion ${ICONS.arrow}</button>
    <div class="finder-result" id="finder-result" hidden></div>
  </form>
  <script type="application/json" id="finder-data">${JSON.stringify({
    packages: Object.fromEntries(packages.map((p) => [p.id, { name: p.name, price: `${p.from ? 'from ' : ''}${gbp(p.gbp)}` }])),
    google: { name: gfg.name, price: gbp(gfg.gbp) },
    refresh: { name: extras[1].name, price: `from ${gbp(extras[1].gbp)}` },
    assistant: { name: assistant.name, price: aiPrice(assistant) },
    automation: { name: aiServices[2].name, price: aiPrice(aiServices[2]) },
  }).replace(/</g, '\\u003c')}</script>
</section>

<section class="band">
  <div class="wrap section">
    <div class="promise">
      <div class="promise-me">
        <img src="/images/manojkumarthapa.webp" alt="${esc(site.owner)}" width="220" height="260" loading="lazy">
      </div>
      <div>
        <p class="eyebrow">Who you will work with</p>
        <h2>Hi, I am Manoj. You deal with me, from first chat to launch.</h2>
        <p>I am an AI software engineer in Birmingham, with an MSc in Artificial Intelligence (Distinction) from Aston University. Before that I was a software engineer at Accenture. I also build and run <a href="https://hamropedia.com/">hamropedia.com</a>.</p>
        <ul class="ticks">
          <li>${ICONS.check}I explain everything in plain English, and I answer every "silly" question.</li>
          <li>${ICONS.check}If you do not need a website or AI yet, I will tell you, and suggest something cheaper.</li>
          <li>${ICONS.check}Your web address is in your name. If you leave, you take everything with you.</li>
        </ul>
        <a class="text-link" href="/about/">More about me ${ICONS.arrow}</a>
      </div>
    </div>
  </div>
</section>

<section class="wrap section narrow" aria-labelledby="faq-h">
  <div class="section-head center"><h2 id="faq-h">Questions owners ask me</h2></div>
  ${faqList(homeFaqs)}
  <p class="center"><a class="text-link" href="/questions/">More questions, and tech words explained ${ICONS.arrow}</a></p>
</section>

${ctaBand('Ready to grow your business?', 'Tell me how your business works. I will reply with ideas, one fixed price and a simple plan, free and with no obligation.')}`;

  return layout({
    title: `${site.name}: websites and AI for small businesses in the UK`,
    ogTitle: 'More customers, less admin, without the jargon',
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
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        founder: { '@type': 'Person', name: site.owner, jobTitle: 'AI Software Engineer', sameAs: Object.values(site.social) },
        priceRange: `£${lowestPrice}–£${packages[2].gbp}+`,
        knowsAbout: ['Small business websites', 'Local SEO', 'AI assistants', 'Business automation'],
        parentOrganization: { '@type': 'Organization', name: 'Hamropedia', url: 'https://hamropedia.com/' },
      },
      faqSchema(homeFaqs),
    ],
  });
}
