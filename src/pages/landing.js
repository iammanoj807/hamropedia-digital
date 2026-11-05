// Pages for what small-business owners search for on Google (UK keyword research, Nov 2026):
// "web design for tradesmen", "web design west midlands" / "website design birmingham",
// and "how much does a website cost uk". Every price comes from src/data/site.js.
import { site, packages, care, extras, marketPrice, aiServices } from '../data/site.js';
import { layout, pageHead, ICONS, esc, gbp, faqList, faqSchema, ctaBand, breadcrumbSchema } from '../layout.js';
import { priceCards } from './home.js';

const tick = (x) => `<li>${ICONS.check}<span>${x}</span></li>`;
const starter = packages[0];
const business = packages[1];
const google = extras.find((x) => x.id === 'google');
const lowestAi = Math.min(...aiServices.map((x) => x.gbp));

// The cost guide's market ranges, each with its source.
const DUPORT = { name: 'Duport, small business website cost UK (June 2026)', url: 'https://www.duport.co.uk/blog/small-business-website-cost-uk/' };

function serviceSchema(name, path, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: site.url + path,
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    provider: { '@type': 'Organization', name: site.name, url: site.url },
    offers: packages.map((p) => ({ '@type': 'Offer', name: `${p.name}: ${p.what}`, price: String(p.gbp), priceCurrency: 'GBP' })),
  };
}

// ---------------------------------------------------------------- Tradesmen
export function renderTradesmen(version) {
  const path = '/websites-for-tradesmen/';
  const crumbs = [{ name: 'Websites', path: '/services/' }, { name: 'Websites for tradesmen' }];
  const faqs = [
    { q: 'How much does a website for a tradesman cost?', a: `A one-page website is ${gbp(starter.gbp)} and a website of up to 5 pages is ${gbp(business.gbp)}, both fixed and one-off. After launch you only pay for your web address, usually about £5 to £20 a year.` },
    { q: 'Do I need a website if customers find me on Facebook or a listing site?', a: 'It helps to have one you own. A listing or social page can change its rules or charge you more, but your own website and web address stay yours, and Google can show your website when people search for your trade in your area.' },
    { q: 'Can customers call me straight from the website?', a: 'Yes. Every website has a one-tap call button, plus buttons to message you and get directions, so a customer on their phone can reach you in seconds.' },
    { q: 'Will I show up on Google Maps?', a: `Google Maps uses your free Google Business Profile, not your website. I can set it up or fix it for ${gbp(google.gbp)} (included in the ${business.name} package), and link it to your website so they work together.` },
    { q: 'How quickly can it be ready?', a: `${starter.time} for a one-page website, and ${business.time.charAt(0).toLowerCase()}${business.time.slice(1)} for up to 5 pages, once you have sent your details and photos.` },
  ];
  const body = `${pageHead({
    crumbs,
    eyebrow: 'Web design for tradesmen',
    title: 'Websites for tradesmen: electricians, plumbers, builders and more',
    lead: `A simple, fast website that gets you calls and quote requests, for one fixed price: from ${gbp(starter.gbp)}, ready in about a week. Written in plain English, and you own everything.`,
  })}
<section class="wrap section narrow">
  <h2>What a trade website needs</h2>
  <p>Most customers look for a tradesperson on their phone, often in a hurry. Your website has one job: make it easy to trust you and get in touch. Every website I build for trades includes:</p>
  <ul class="ticks">
    ${tick('<b>A one-tap call button</b> at the top of every page, plus WhatsApp or message buttons')}
    ${tick('<b>The areas you cover</b>, so people know straight away that you work near them')}
    ${tick('<b>Photos of your jobs</b>: before and after pictures sell your work better than any words')}
    ${tick('<b>A quote request form</b> that sends the job details straight to your email')}
    ${tick('<b>Your Google reviews</b>, linked from your Google Business Profile')}
    ${tick('<b>Your qualifications and memberships</b>, such as Gas Safe or NICEIC, if you have them')}
    ${tick('<b>Fast loading on mobile data</b>, and set up so Google can find and show it')}
  </ul>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head"><div><p class="eyebrow">Prices</p><h2>Fixed prices for trade websites</h2></div><a class="text-link" href="/prices/">All prices and running costs ${ICONS.arrow}</a></div>
    ${priceCards()}
  </div>
</section>

<section class="wrap section narrow">
  <h2>Websites for electricians, plumbers and other trades</h2>
  <ul class="ticks">
    ${tick('<b>Electricians:</b> your services (rewires, EV chargers, testing), the areas you cover and a fast way to book an inspection')}
    ${tick('<b>Plumbers and heating engineers:</b> emergency call-outs at the top, boiler and bathroom work, and your Gas Safe details')}
    ${tick('<b>Builders, roofers and decorators:</b> a gallery of finished jobs and a quote form for the job details')}
    ${tick('<b>Cleaners and gardeners:</b> your prices, the days you work in each area and a simple booking or enquiry form')}
  </ul>
  <p>Busy on site all day? The optional <a href="/prices/">${esc(care.name.toLowerCase())}</a> (${gbp(care.gbp)} a month) means you just send a message when something needs changing. An <a href="/ai/">AI assistant</a> can also answer common questions on your website or WhatsApp while you work, from ${gbp(lowestAi)}.</p>
  <h2>How it works</h2>
  <p>A free chat, one fixed price, then you check everything on your phone before it goes live. <a href="/how-it-works/">See every step</a>, or try the <a href="/examples/">example websites</a>.</p>
  <h2>Questions from tradespeople</h2>
  ${faqList(faqs)}
</section>
${ctaBand('Want a website that brings in jobs?', 'Tell me your trade and the areas you cover. I will reply with a fixed price, free and with no obligation.')}`;
  const description = `Web design for tradesmen: fixed-price websites for electricians, plumbers, builders and other trades, from ${gbp(starter.gbp)}. One-tap calls, quote forms, job photos.`;
  return layout({
    title: `Web Design for Tradesmen: Websites from ${gbp(starter.gbp)} | ${site.name}`,
    ogTitle: 'Websites for tradesmen, at a fixed price',
    description,
    path, section: '/services/', body, version,
    schema: [breadcrumbSchema([{ name: 'Websites', path: '/services/' }, { name: 'Websites for tradesmen', path }]), serviceSchema('Web design for tradesmen', path, description), faqSchema(faqs)],
  });
}

// ---------------------------------------------------------------- Birmingham & West Midlands
export function renderBirmingham(version) {
  const path = '/web-design-birmingham/';
  const crumbs = [{ name: 'Web design in Birmingham' }];
  const faqs = [
    { q: 'Are you based in Birmingham?', a: `Yes. I am ${site.owner}, an AI software engineer living in Birmingham, with an MSc in Artificial Intelligence from Aston University. I build websites for businesses in Birmingham, the wider West Midlands and anywhere in the UK.` },
    { q: 'How much does a website cost in Birmingham?', a: `My prices are the same wherever you are: ${gbp(starter.gbp)} for a one-page website and ${gbp(business.gbp)} for up to 5 pages, fixed and one-off. For comparison, ${marketPrice.text.charAt(0).toLowerCase()}${marketPrice.text.slice(1)}` },
    { q: 'How do we work together?', a: 'By phone, video call, email or message, whatever suits you. You send your details and photos, I build the website, and you check it on your own phone before anything goes live.' },
    { q: 'Can you help my business show up on Google Maps in Birmingham?', a: `Yes. Local customers mostly find businesses through Google Maps, which uses your free Google Business Profile. I can set it up or fix it for ${gbp(google.gbp)} (included in the ${business.name} package) and link it to your website.` },
  ];
  const body = `${pageHead({
    crumbs,
    eyebrow: 'Web design · Birmingham &amp; West Midlands',
    title: 'Web design in Birmingham and the West Midlands',
    lead: `Fixed-price websites and AI assistants for small businesses in Birmingham and across the West Midlands, built by a Birmingham-based AI software engineer. Websites from ${gbp(starter.gbp)}, ready in about a week.`,
  })}
<section class="wrap section narrow">
  <h2>A local web designer, with fixed prices</h2>
  <p>I am ${esc(site.owner)}. I live in Birmingham, studied for my MSc in Artificial Intelligence at Aston University, and worked as a software engineer at Accenture. I started Hamropedia Digital to give small local businesses a professional website without agency prices or jargon.</p>
  <ul class="ticks">
    ${tick(`<b>One fixed price</b>, agreed before anything starts: ${gbp(starter.gbp)} for one page, ${gbp(business.gbp)} for up to 5 pages`)}
    ${tick('<b>You own everything</b>: your website, your web address and your content')}
    ${tick('<b>Built for local customers</b>: one-tap calls, directions, opening hours and the areas you serve')}
    ${tick('<b>Plain English</b>: every running cost and every tech word explained')}
  </ul>
  <h2>For businesses across the West Midlands</h2>
  <p>Websites for shops, takeaways, salons, barbers, cleaners, tradespeople and other small businesses. Whether you are in Birmingham, Solihull, Sutton Coldfield, Wolverhampton, Coventry, Walsall, Dudley, West Bromwich or anywhere else in the UK, everything can be done by phone, video call or email.</p>
  <p>For local customers, being on <b>Google Maps</b> matters as much as having a website. I can set up your free <a href="/services/#google">Google Business Profile</a> for ${gbp(google.gbp)}, or as part of the ${business.name} package, so you show up when people nearby search for what you do.</p>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head"><div><p class="eyebrow">Prices</p><h2>Website prices</h2></div><a class="text-link" href="/how-much-does-a-website-cost/">How much does a website cost? ${ICONS.arrow}</a></div>
    ${priceCards()}
  </div>
</section>

<section class="wrap section narrow">
  <h2>Questions from Birmingham businesses</h2>
  ${faqList(faqs)}
  <p>Trades business? See <a href="/websites-for-tradesmen/">websites for tradesmen</a>. Want customers' questions answered for you? See <a href="/ai/">AI assistants for small businesses</a>.</p>
</section>
${ctaBand('Running a business in the West Midlands?', 'Tell me what you do and where. I will reply with a fixed price, free and with no obligation.')}`;
  const description = `Web design in Birmingham and the West Midlands: fixed-price small business websites from ${gbp(starter.gbp)}, built by a Birmingham-based engineer. You own it all.`;
  return layout({
    title: `Web Design Birmingham & West Midlands: Websites from ${gbp(starter.gbp)} | ${site.name}`,
    ogTitle: 'Web design in Birmingham and the West Midlands',
    description,
    path, body, version,
    schema: [breadcrumbSchema([{ name: 'Web design in Birmingham', path }]), {
      ...serviceSchema('Web design in Birmingham and the West Midlands', path, description),
      areaServed: [{ '@type': 'City', name: 'Birmingham' }, { '@type': 'AdministrativeArea', name: 'West Midlands' }, { '@type': 'Country', name: 'United Kingdom' }],
    }, faqSchema(faqs)],
  });
}

// ---------------------------------------------------------------- Cost guide
export function renderCostGuide(version) {
  const path = '/how-much-does-a-website-cost/';
  const crumbs = [{ name: 'Prices', path: '/prices/' }, { name: 'How much does a website cost?' }];
  const faqs = [
    { q: 'How much does a small business website cost in the UK?', a: `It depends on who builds it. ${marketPrice.text} My fixed prices are ${gbp(starter.gbp)} for one page and ${gbp(business.gbp)} for up to 5 pages.` },
    { q: 'What are the running costs of a website?', a: `For a simple website: a web address (domain), usually about £5 to £20 a year. Hosting is usually £0 for a simple site like mine. Website builders like Wix charge a monthly plan instead. An optional care plan for changes is ${gbp(care.gbp)} a month.` },
    { q: 'Is a website builder cheaper than paying someone?', a: 'At the start, often yes. But builders charge every month for as long as you keep the website, and you spend your own time building it. Add up the cost over two or three years before you decide.' },
    { q: 'What should I check before paying for a website?', a: 'That the web address is registered in your name, who hosts the website and what it costs each year, what is included in the price, how changes are charged, and whether you can move the website elsewhere later.' },
  ];
  const body = `${pageHead({
    crumbs,
    eyebrow: 'Guide · Prices',
    title: 'How much does a website cost in the UK?',
    lead: 'The honest answer, in plain English: what you pay with a website builder, a freelancer or an agency, the running costs after launch, and what to check before you pay anyone.',
  })}
<section class="wrap section narrow">
  <h2>The short answer</h2>
  <p>${esc(marketPrice.text)} (<a href="${marketPrice.url}" rel="noopener">${esc(marketPrice.source)}</a>.) Doing it yourself with a website builder costs less at the start, but you pay every month.</p>
  <div class="table-wrap">
  <table class="cost-table">
    <thead><tr><th scope="col">Who builds it</th><th scope="col">Typical price</th><th scope="col">Good to know</th></tr></thead>
    <tbody>
      <tr><th scope="row">You, with a website builder</th><td>About £240 to £360 a year (<a href="${DUPORT.url}" rel="noopener">Duport</a>)</td><td>Monthly plan for as long as you keep the site, plus your own time</td></tr>
      <tr><th scope="row">A freelance web designer</th><td>£1,500 to £3,000 for 5 pages (<a href="${marketPrice.url}" rel="noopener">Whito</a>)</td><td>Prices vary a lot; ask what is included</td></tr>
      <tr><th scope="row">A web design agency</th><td>£3,000 to £5,000 for 5 pages (<a href="${marketPrice.url}" rel="noopener">Whito</a>)</td><td>More people involved; often more than a small business needs</td></tr>
      <tr><th scope="row">Hamropedia Digital</th><td>${gbp(starter.gbp)} one page, ${gbp(business.gbp)} up to 5 pages</td><td>Fixed and one-off${site.vatRegistered ? '' : ', with no VAT to add'}. These are launch prices while I take on my first clients</td></tr>
    </tbody>
  </table>
  </div>

  <h2>What makes a website cost more</h2>
  <ul class="ticks">
    ${tick('<b>Number of pages</b>: one page is enough for many small businesses; 5 pages covers services, prices, about and contact')}
    ${tick('<b>Bookings, orders or a shop</b>: anything that takes appointments or payments needs more work, and the booking or payment system may have its own fee')}
    ${tick('<b>Writing and photos</b>: if someone else writes your text or takes your photos, that is extra')}
    ${tick('<b>Custom design and features</b>: logins, members areas or custom tools take longer to build')}
  </ul>

  <h2>Running costs after launch</h2>
  <p>A simple website has very few running costs: a <b>web address</b> (usually about £5 to £20 a year) and <b>hosting</b> (usually £0 for a simple site like the ones I build). My optional ${esc(care.name.toLowerCase())} is ${gbp(care.gbp)} a month if you want someone to make your changes. Every cost is listed on the <a href="/prices/">prices page</a>.</p>

  <h2>Questions to ask before you pay anyone</h2>
  <ul class="ticks">
    ${tick('Will the web address be registered <b>in my name</b>?')}
    ${tick('Who hosts the website, and <b>what will it cost each year</b>?')}
    ${tick('What exactly is included, and <b>how are changes charged</b> after launch?')}
    ${tick('Can I <b>move my website</b> to someone else later?')}
  </ul>

  <h2>Common questions</h2>
  ${faqList(faqs)}
  <p class="source-note">Sources: <a href="${marketPrice.url}" rel="noopener">${esc(marketPrice.source)}</a> · <a href="${DUPORT.url}" rel="noopener">${esc(DUPORT.name)}</a>.</p>
</section>
${ctaBand('Want an exact price for your website?', 'Tell me a little about your business. I will reply with one fixed price, free and with no obligation.')}`;
  return layout({
    title: `How Much Does a Website Cost in the UK? (${new Date().getUTCFullYear()} Prices) | ${site.name}`,
    ogTitle: 'How much does a website cost in the UK?',
    description: `How much a small business website costs in the UK: website builders, freelancers and agencies compared, running costs, and what to check before you pay.`,
    path, section: '/prices/', body, version,
    schema: [breadcrumbSchema([{ name: 'Prices', path: '/prices/' }, { name: 'How much does a website cost?', path }]), faqSchema(faqs)],
  });
}
