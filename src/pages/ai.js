import { site, aiServices, faqs, stats } from '../data/site.js';
import { demos, projects } from '../data/examples.js';
import { layout, pageHead, ICONS, esc, gbp, faqList, faqSchema, ctaBand, breadcrumbSchema } from '../layout.js';
import { aiPrice, statBox, projectCard } from './home.js';

const SAFE = [
  ['shield', 'Answers only from your information', 'It uses your prices, services and documents, not guesses from the internet.'],
  ['chat', 'Hands over when unsure', 'Anything it cannot answer goes straight to you, instead of a made-up reply.'],
  ['search', 'You see everything', 'Read every conversation, change its answers, or switch it off at any time.'],
  ['key', 'Your data, handled with care', 'Set up to follow UK data protection law, with only the information it needs.'],
];

const STARTS = [
  ['You tell me where the time goes', 'In a free chat, you tell me which questions, messages and paperwork eat your day.'],
  ['I show you what AI could do', 'I suggest the one or two jobs that would save the most time, with a fixed price. If AI would not help, I say so.'],
  ['You try it before customers do', 'You test the assistant or automation yourself, and I adjust it until you are happy.'],
  ['It goes to work', 'It starts answering and sorting, and you get a short monthly check to keep it accurate.'],
];

export function renderAi(version) {
  const crumbs = [{ name: 'AI & automation' }];
  const aiFaqs = faqs.filter((f) => f.ai);
  const demo = demos.find((d) => d.slug === 'ai-assistant');
  const body = `${pageHead({
    crumbs,
    eyebrow: 'AI &amp; automation',
    title: 'Let AI answer customers and handle the admin',
    lead: 'Practical AI for small businesses, set up for you by an AI engineer and explained in plain English. Start with one job, see the time it saves, then decide what next.',
  })}
<section class="wrap section">
  <div class="stat-row">
    ${statBox(stats.ai)}
    ${statBox(stats.barrier, 'That is exactly what the free chat is for: I show you, in your business, what it would do.')}
  </div>
</section>

<section class="wrap section" style="padding-top:0">
  <div class="section-head"><h2>What I can set up for you</h2></div>
  <div class="ai-list">
    ${aiServices.map((s) => `<article class="ai-row" id="${s.id}">
      <div class="ai-row-head"><span class="icon-tile">${ICONS[s.icon]}</span><div><h3>${esc(s.name)}</h3><p class="ai-price">${esc(aiPrice(s))}</p></div></div>
      <div class="ai-row-body">
        <p>${esc(s.what)}</p>
        <p class="ai-example"><strong>Example:</strong> ${esc(s.example)}</p>
        <ul class="ticks">${s.includes.map((x) => `<li>${ICONS.check}${esc(x)}</li>`).join('')}</ul>
        <a class="text-link" href="/contact/?package=${s.id}">Ask about this ${ICONS.arrow}</a>
      </div>
    </article>`).join('')}
  </div>
</section>

<section class="band">
  <div class="wrap section">
    <div class="ai-demo-cta big">
      <div><p class="eyebrow">Try it yourself</p><h2>Chat with an example AI assistant</h2><p>${esc(demo.summary)} Ask it a price, book a clean, or ask something it cannot answer, and watch the behind-the-scenes panel.</p></div>
      <a class="btn btn-lg" href="/examples/${demo.slug}/">Try the AI example ${ICONS.arrow}</a>
    </div>
  </div>
</section>

<section class="wrap section">
  <div class="section-head center"><p class="eyebrow">Quick sum</p><h2>How much time could you get back?</h2><p class="section-lead">Put in your own numbers. This is a simple estimate, not a promise.</p></div>
  <form class="calc" id="calc">
    <div class="field"><label for="calc-msg">Hours a week answering calls, messages and the same questions</label><input id="calc-msg" type="number" min="0" max="80" step="0.5" value="5" inputmode="decimal"></div>
    <div class="field"><label for="calc-admin">Hours a week on admin: emails, booking, invoices, receipts</label><input id="calc-admin" type="number" min="0" max="80" step="0.5" value="4" inputmode="decimal"></div>
    <div class="field"><label for="calc-rate">What an hour of your time is worth (£)</label><input id="calc-rate" type="number" min="0" max="500" step="1" value="20" inputmode="decimal"></div>
    <div class="calc-out" aria-live="polite">
      <p>That is about <strong id="calc-hours">39</strong> hours a month, worth <strong id="calc-value">£780</strong>.</p>
      <p>If AI and automation took over even <strong>half</strong> of it, you would get back about <strong id="calc-half-h">19.5</strong> hours and <strong id="calc-half-v">£390</strong> every month.</p>
    </div>
  </form>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head center"><p class="eyebrow">Safe and in your control</p><h2>AI that knows its limits</h2></div>
    <div class="get-grid four">${SAFE.map(([i, t, d]) => `<div class="get"><span class="icon-tile">${ICONS[i]}</span><div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div>
  </div>
</section>

<section class="wrap section">
  <div class="section-head center"><p class="eyebrow">How we start</p><h2>Start small, with one job</h2></div>
  <ol class="steps">${STARTS.map(([t, d], n) => `<li><span class="step-n">${n + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head"><div><p class="eyebrow">Real AI I have built</p><h2>Projects you can try today</h2></div><a class="text-link" href="/examples/#real">More about these ${ICONS.arrow}</a></div>
    <div class="proj-grid">${projects.slice(0, 2).map((p) => projectCard(p)).join('')}</div>
  </div>
</section>

<section class="wrap section narrow">
  <h2>Questions about AI</h2>
  ${faqList(aiFaqs)}
</section>
${ctaBand('Find out what AI could do for you', 'Free chat, no obligation. Tell me where your time goes, and I will tell you honestly what AI could and could not do for your business.')}`;

  return layout({
    title: `AI assistants and automation for small businesses | ${site.name}`,
    ogTitle: 'Let AI answer customers and handle the admin',
    description: `AI assistants for your website and WhatsApp, admin automation and ask-your-documents tools for small UK businesses. Set up by an AI engineer, from ${gbp(Math.min(...aiServices.map((s) => s.gbp)))}.`,
    path: '/ai/', section: '/ai/', body, version,
    schema: [
      breadcrumbSchema([{ name: 'AI & automation', path: '/ai/' }]),
      {
        '@context': 'https://schema.org', '@type': 'OfferCatalog', name: `${site.name} AI services`,
        itemListElement: aiServices.map((s) => ({ '@type': 'Offer', name: s.name, price: String(s.gbp), priceCurrency: 'GBP', description: s.what })),
      },
      faqSchema(aiFaqs),
    ],
  });
}
