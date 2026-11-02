import { site, packages, care, extras, faqs, marketPrice, aiServices } from '../data/site.js';
import { demos, projects } from '../data/examples.js';
import { layout, pageHead, ICONS, esc, gbp, faqList, faqSchema, ctaBand, breadcrumbSchema, mailLink, waLink } from '../layout.js';
import { priceCards, exampleCard, projectCard, aiPrice } from './home.js';

const tick = (x) => `<li>${ICONS.check}${esc(x)}</li>`;
const priceOf = (x) => (x.quote ? 'Fixed quote after a free chat' : `${x.from ? 'From ' : ''}${gbp(x.gbp)}`);

// ---------------------------------------------------------------- Services
const SERVICES = [
  {
    id: 'website', icon: 'phone', title: 'A website for your business',
    what: 'A clear, fast website that tells customers what you do, what it costs, when you are open and how to reach you.',
    good: 'Any small business: shops, takeaways, salons, trades, cleaners, tutors, clinics, accountants, charities.',
    gets: ['Looks right on every phone and computer', 'Buttons to call, message and get directions', 'Written with you, in words your customers use', 'Set up so Google can find it'],
    price: `${gbp(packages[0].gbp)} (one page) or ${gbp(packages[1].gbp)} (up to 5 pages)`,
  },
  {
    id: 'google', icon: 'map', title: 'Get found on Google and Google Maps',
    what: 'Your free Google Business Profile is the box that shows on Google and Maps when people search for you or for a business like yours nearby.',
    good: 'Every local business, with or without a website.',
    gets: ['Profile set up, checked and filled in', 'Opening hours, photos, services and phone number', 'Advice on getting and replying to reviews', 'Linked to your website, if you have one'],
    price: `${gbp(extras[0].gbp)}, or included in Business and above`,
  },
  {
    id: 'bookings', icon: 'calendar', title: 'Online bookings and orders',
    what: 'Customers book an appointment, request a table or place an order from their phone, at any time, without calling you.',
    good: 'Salons, barbers, beauty, takeaways, cleaners, tutors, driving instructors, trades.',
    gets: ['Booking or ordering that fits how you work', 'Alerts straight to your phone or email', 'Card payments if you want them', 'Every option and monthly fee explained before we start'],
    price: `From ${gbp(packages[2].gbp)}`,
  },
  {
    id: 'shop', icon: 'cart', title: 'A small online shop',
    what: 'Sell your products online, with photos, prices, a basket and safe card payments through a trusted payment company.',
    good: 'Shops, makers, bakers, food producers and anyone with products to post or deliver.',
    gets: ['Product pages that look good on phones', 'Safe checkout, handled by a trusted payment company', 'Order emails for you and your customer', 'Help choosing the right shop system for your budget'],
    price: `From ${gbp(packages[2].gbp)}`,
  },
  {
    id: 'care', icon: 'heart', title: 'Looking after your website',
    what: 'You message me what to change, and I change it. I also check every month that everything is working.',
    good: 'Owners who would rather run their business than learn website software.',
    gets: care.includes,
    price: `${gbp(care.gbp)} a month, no contract`,
  },
  {
    id: 'refresh', icon: 'wrench', title: 'Fix or refresh an old website',
    what: 'Your current website is slow, looks broken on phones, or shows old information.',
    good: 'Businesses that already have a website that is letting them down.',
    gets: ['An honest check of what is wrong, in plain words', 'Fixes, or a move to something faster and cheaper', 'Your web address and Google ranking kept safe', 'Old links that still work'],
    price: `From ${gbp(extras[1].gbp)}`,
  },
];

export function renderServices(version) {
  const crumbs = [{ name: 'Websites' }];
  const body = `${pageHead({
    crumbs,
    eyebrow: 'Websites',
    title: 'Everything a small business needs to be found online',
    lead: 'Pick one thing or combine a few. Every service has a clear price, and I will always suggest the simplest option that does the job.',
  })}
<section class="wrap section">
  <nav class="jump" aria-label="Services on this page">${SERVICES.map((s) => `<a href="#${s.id}">${ICONS[s.icon]}${esc(s.title)}</a>`).join('')}</nav>
  <div class="service-list">
  ${SERVICES.map((s) => `<article class="service" id="${s.id}">
    <div class="service-top"><span class="icon-tile">${ICONS[s.icon]}</span><h2>${esc(s.title)}</h2></div>
    <div class="service-cols">
      <div>
        <h3>What it is</h3><p>${esc(s.what)}</p>
        <h3>Good for</h3><p>${esc(s.good)}</p>
      </div>
      <div>
        <h3>What you get</h3><ul class="ticks">${s.gets.map(tick).join('')}</ul>
      </div>
    </div>
    <p class="service-price">${ICONS.pound}<span><strong>Price:</strong> ${esc(s.price)}</span><a class="text-link" href="/contact/">Ask about this ${ICONS.arrow}</a></p>
  </article>`).join('')}
  </div>
  <aside class="ai-demo-cta">
    <div><h3>Want customers answered and admin done for you?</h3><p>See AI assistants, WhatsApp assistants and admin automation, set up by an AI engineer.</p></div>
    <a class="btn" href="/ai/">AI &amp; automation ${ICONS.arrow}</a>
  </aside>
</section>
${ctaBand('Not sure which one you need?', 'Tell me what is going on in your business, in your own words. I will tell you what I would do, and what it would cost.')}`;
  return layout({
    title: `Websites, Google Maps, bookings and shops | ${site.name}`,
    ogTitle: 'Everything a small business needs to be found online',
    description: 'Websites, Google Business Profiles, online bookings and orders, small online shops and website care for small businesses, with clear, fixed prices.',
    path: '/services/', section: '/services/', body, version,
    schema: [breadcrumbSchema([{ name: 'Websites', path: '/services/' }])],
  });
}

// ---------------------------------------------------------------- Prices
export function renderPrices(version) {
  const crumbs = [{ name: 'Prices' }];
  const priceFaqs = faqs.filter((f) => /pay|total|own|change/i.test(f.q));
  const body = `${pageHead({
    crumbs,
    eyebrow: 'Prices',
    title: 'Clear, fixed prices',
    lead: `You know the full price before anything starts. These are launch prices while I take on my first clients: ${esc(marketPrice.text.charAt(0).toLowerCase() + marketPrice.text.slice(1))}`,
  })}
<section class="wrap section">
  <p class="source-note">Typical prices: <a href="${marketPrice.url}" rel="noopener">${esc(marketPrice.source)}</a>.</p>
  ${priceCards()}
</section>

<section class="band">
  <div class="wrap section">
    <div class="care-box">
      <div>
        <p class="eyebrow">Optional</p>
        <h2>${esc(care.name)}: ${gbp(care.gbp)} a month</h2>
        <p>For owners who would rather run their business than learn website software. Just send a message with what to change.</p>
        <a class="btn" href="/contact/?package=care">Ask about the care plan</a>
      </div>
      <ul class="ticks">${care.includes.map(tick).join('')}</ul>
    </div>
  </div>
</section>

<section class="wrap section" id="ai-prices">
  <div class="section-head"><div><p class="eyebrow">AI &amp; automation</p><h2>AI prices</h2></div><a class="text-link" href="/ai/">What each one does ${ICONS.arrow}</a></div>
  <div class="extra-grid">
    ${aiServices.map((x) => `<article class="extra"><h3>${esc(x.name)}</h3><p class="extra-price">${esc(aiPrice(x))}</p><p>${esc(x.what)}</p></article>`).join('')}
  </div>
  <p class="muted small">Monthly fees cover the AI running costs for typical small-business use, plus updates and a monthly check. Very heavy use is quoted first. No contract: stop any time.</p>
</section>

<section class="wrap section">
  <div class="section-head"><h2>Extras</h2></div>
  <div class="extra-grid">
    ${extras.map((x) => `<article class="extra"><h3>${esc(x.name)}</h3><p class="extra-price">${esc(priceOf(x))}</p><p>${esc(x.text)}</p></article>`).join('')}
  </div>
</section>

<section class="wrap section narrow">
  <h2>What you pay after launch</h2>
  <p>Websites have a few running costs. Here is every one, in plain words, so nothing surprises you later.</p>
  <div class="table-wrap">
  <table class="cost-table">
    <thead><tr><th scope="col">Cost</th><th scope="col">What it is</th><th scope="col">How much</th></tr></thead>
    <tbody>
      <tr><th scope="row">Web address (domain)</th><td>Your address on the internet, like yourbusiness.co.uk. Registered in your name.</td><td>Usually about £5 to £20 a year, paid to the domain company</td></tr>
      <tr><th scope="row">Hosting</th><td>The computer that keeps your website online.</td><td>Usually £0 for a simple site like these. If yours ever needs paid hosting, you will know the price first.</td></tr>
      <tr><th scope="row">Care plan</th><td>I make your changes and check everything is working.</td><td>Optional, ${gbp(care.gbp)} a month, stop any time</td></tr>
      <tr><th scope="row">Booking or payment systems</th><td>Only if you take bookings or card payments online.</td><td>Depends on the system. Some are free, some charge a monthly fee or a small fee per payment. I explain the options before you choose.</td></tr>
    </tbody>
  </table>
  </div>
  <h2>How payment works</h2>
  <ul class="ticks">
    <li>${ICONS.check}Half when we start, half when you are happy and before your website goes live.</li>
    <li>${ICONS.check}Bank transfer, with a proper invoice for your records.</li>
    <li>${ICONS.check}The price is fixed. If you ask for something new halfway through, I tell you the cost first, and you decide.</li>
  </ul>
  <h2>Common questions</h2>
  ${faqList(priceFaqs)}
</section>
${ctaBand('Want an exact price for your business?', 'Tell me a little about what you do. I will reply with a fixed price, free and with no obligation.')}`;
  return layout({
    title: `Prices: websites from ${gbp(packages[0].gbp)}, AI from ${gbp(Math.min(...aiServices.map((x) => x.gbp)))} | ${site.name}`,
    ogTitle: `Website prices: from ${gbp(packages[0].gbp)}, fixed and clear`,
    description: `Fixed prices for small businesses: one-page website ${gbp(packages[0].gbp)}, up to 5 pages ${gbp(packages[1].gbp)}, AI assistant from ${gbp(aiServices[0].gbp)}. Every running cost explained in plain English.`,
    path: '/prices/', section: '/prices/', body, version,
    schema: [
      breadcrumbSchema([{ name: 'Prices', path: '/prices/' }]),
      {
        '@context': 'https://schema.org', '@type': 'OfferCatalog', name: `${site.name} packages`,
        itemListElement: packages.map((p) => ({
          '@type': 'Offer', name: `${p.name}: ${p.what}`, price: String(p.gbp), priceCurrency: 'GBP', description: p.best,
        })),
      },
      faqSchema(priceFaqs),
    ],
  });
}

// ---------------------------------------------------------------- How it works
const PROCESS = [
  ['A free chat', 'Day 1', 'After your first email: a 15-minute call, a video call or just a few emails, whichever you prefer. You tell me about your business and your customers. I ask simple questions like "what do people usually call you about?"', ['No preparation needed', 'No obligation, no pushy selling']],
  ['A plan and one fixed price', 'Within 2 days', 'I send a short, plain-English plan: what pages you get, what they say, how long it takes and the one fixed price.', ['Nothing starts until you say yes', 'You pay half to begin']],
  ['You send what you have', 'Week 1', 'Your logo if you have one, some photos (phone photos are often fine), your prices and opening hours. I tell you exactly what I need.', ['A simple checklist, below', 'I write the words with you']],
  ['I build it, you check it', 'Week 1 to 2', 'I send you a private link to your new website. Look at it on your phone, show your family, tell me what to change.', ['Changes until you are happy', 'Nobody else sees it yet']],
  ['You go live', 'When you are happy', 'You pay the second half, and your website goes live on your own web address. I set up Google so people can find you.', ['Google Business Profile linked', 'A short video showing you around']],
  ['After launch', 'Ongoing', 'Your website keeps working with nothing to update. Need a change? Send a message on the care plan, or ask for a one-off price.', ['No contract', 'You own everything']],
];

const NEED = ['Your business name, address and phone number', 'What you sell or do, and your prices (a photo of a price list is fine)', 'Your opening hours', 'Your logo, if you have one', '5 to 15 photos of your work, shop, food or team', 'Any website or Facebook page you have now', 'Two or three websites you like the look of (optional)'];

export function renderHow(version) {
  const crumbs = [{ name: 'How it works' }];
  const body = `${pageHead({
    crumbs,
    eyebrow: 'How it works',
    title: 'From a free chat to a live website, in about two weeks',
    lead: 'You do not need to know anything about websites. Here is exactly what happens, and what I need from you.',
  })}
<section class="wrap section">
  <ol class="timeline">
    ${PROCESS.map(([t, when, d, pts], n) => `<li>
      <span class="tl-n">${n + 1}</span>
      <div class="tl-body">
        <p class="tl-when">${esc(when)}</p>
        <h2>${esc(t)}</h2>
        <p>${esc(d)}</p>
        <ul class="pills">${pts.map((x) => `<li>${ICONS.check}${esc(x)}</li>`).join('')}</ul>
      </div>
    </li>`).join('')}
  </ol>
</section>
<section class="band">
  <div class="wrap section narrow">
    <h2>What I will need from you</h2>
    <p>Do not worry if you do not have all of it. Send what you have, and I will help with the rest.</p>
    <ul class="checklist">${NEED.map((x) => `<li><span class="box" aria-hidden="true"></span>${esc(x)}</li>`).join('')}</ul>
    <p class="muted">Tip: take photos in daylight, holding your phone sideways. Clean, bright photos of your real work beat stock photos every time.</p>
  </div>
</section>
${ctaBand('Start with a free chat', 'No preparation and no obligation. Tell me about your business, and I will take it from there.')}`;
  return layout({
    title: `How it works: from free chat to live website | ${site.name}`,
    ogTitle: 'How it works: from a free chat to a live website',
    description: 'Exactly what happens: a free chat, one fixed price, you check everything, then your website goes live. Plus a simple checklist of what to send.',
    path: '/how-it-works/', section: '/how-it-works/', body, version,
    schema: [
      breadcrumbSchema([{ name: 'How it works', path: '/how-it-works/' }]),
      {
        '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to get a website for your small business',
        step: PROCESS.map(([t, , d], n) => ({ '@type': 'HowToStep', position: n + 1, name: t, text: d })),
      },
    ],
  });
}

// ---------------------------------------------------------------- Questions
export function renderQuestions(version) {
  const crumbs = [{ name: 'Questions' }];
  const words = faqs.filter((f) => /^What (is|does)/.test(f.q));
  const rest = faqs.filter((f) => !words.includes(f));
  const body = `${pageHead({
    crumbs,
    eyebrow: 'Questions',
    title: 'Questions, answered in plain English',
    lead: 'No question is too simple. If yours is not here, just ask me.',
  })}
<section class="wrap section narrow">
  <h2>Working with me</h2>
  ${faqList(rest)}
  <h2 id="words">Tech words, explained</h2>
  ${faqList(words)}
</section>
${ctaBand('Still have a question?', 'Ask me anything. I will reply in plain English, with no sales pressure.')}`;
  return layout({
    title: `Questions and tech words explained | ${site.name}`,
    ogTitle: 'Website questions, answered in plain English',
    description: 'Plain-English answers about getting a website: what it costs in total, who owns it, how payment works, and what domain, hosting and SEO mean.',
    path: '/questions/', section: '/questions/', body, version,
    schema: [breadcrumbSchema([{ name: 'Questions', path: '/questions/' }]), faqSchema(faqs)],
  });
}

// ---------------------------------------------------------------- Examples hub
export function renderExamples(version) {
  const crumbs = [{ name: 'Examples' }];
  const body = `${pageHead({
    crumbs,
    eyebrow: 'Examples',
    title: 'Examples you can try, and real projects',
    lead: 'Working example websites for made-up businesses, to show what yours could do, followed by real AI projects I have built. Open them on your phone and tap around.',
  })}
<section class="wrap section">
  <div class="section-head"><div><p class="eyebrow">Examples for made-up businesses</p><h2>Try what your customers would see</h2></div></div>
  <div class="ex-list">${demos.map((d) => exampleCard(d, { big: true })).join('')}</div>
</section>
<section class="band" id="real">
  <div class="wrap section">
    <div class="section-head"><div><p class="eyebrow">Real projects</p><h2>AI I have built, with live demos</h2></div></div>
    <p class="section-lead">Each project runs online, so you can try it in your browser. The live demos sleep when nobody is using them, so the first visit can take a minute to wake up.</p>
    <div class="proj-grid">${projects.map((p) => projectCard(p, { full: true })).join('')}</div>
  </div>
</section>
<section class="wrap section">
    <article class="case">
      <div>
        <p class="eyebrow">Real project</p>
        <h2>Hamropedia.com</h2>
        <p>My own website, with guides, news in English and Nepali, and free tools used in the browser. I built it to be fast, easy to read on any phone, and easy for Google to understand.</p>
        <ul class="ticks">
          <li>${ICONS.check}Fast pages that work well on every phone</li>
          <li>${ICONS.check}Set up for Google, with clear titles, descriptions and structured data</li>
          <li>${ICONS.check}Pages in two languages, linked so Google shows the right one</li>
          <li>${ICONS.check}Interactive tools: a Nepali keyboard, a date converter and an age calculator</li>
          <li>${ICONS.check}No hosting bill: it runs on free, fast hosting</li>
        </ul>
        <a class="btn" href="https://hamropedia.com/" rel="noopener">Visit hamropedia.com ${ICONS.arrow}</a>
      </div>
      <div class="case-shot"><img src="/images/examples/hamropedia.webp" alt="The hamropedia.com home page" width="1280" height="800" loading="lazy"></div>
    </article>
</section>
${ctaBand('Want one like these for your business?', 'Tell me which example is closest to what you need. I will reply with a fixed price.')}`;
  return layout({
    title: `Example websites and real AI projects | ${site.name}`,
    ogTitle: 'Example websites and real AI projects you can try',
    description: 'Try an AI assistant for a cleaning company, a takeaway website and barber booking, plus real AI projects with live demos you can open in your browser.',
    path: '/examples/', section: '/examples/', body, version,
    schema: [breadcrumbSchema([{ name: 'Examples', path: '/examples/' }])],
  });
}

// ---------------------------------------------------------------- About
export function renderAbout(version) {
  const crumbs = [{ name: 'About me' }];
  const body = `${pageHead({ crumbs, eyebrow: 'About', title: 'Hi, I am Manoj' })}
<section class="wrap section narrow about">
  <figure class="about-photo"><img src="/images/manojkumarthapa.webp" alt="${esc(site.owner)}" width="440" height="519"><figcaption>${esc(site.owner)}<span>AI Software Engineer, Birmingham, United Kingdom</span></figcaption></figure>
  <p class="lead">I am ${esc(site.owner)}, an AI software engineer living in Birmingham, originally from Nepal. I started Hamropedia Digital to help small businesses get online and use AI properly: at a fair price, explained in plain English, and without being tied into contracts.</p>
  <p>I have an MSc in Artificial Intelligence (Distinction) from Aston University, and before that I was a software engineer at Accenture. I build AI assistants and tools, like <a href="/examples/#real">Planck AI and CogniGraph</a>, and I build and run <a href="https://hamropedia.com/">hamropedia.com</a>, a website with guides, news in English and Nepali, and free tools.</p>
  <h2>Why small businesses?</h2>
  <p>Big companies have teams for websites and AI. Small businesses usually have nobody, and they are the ones being left behind online. I want to give them the same tools, at prices that make sense for a small business.</p>
  <h2>Why plain English?</h2>
  <p>Too many owners pay for websites they do not understand, built on systems they cannot change, with costs they did not expect. I would rather explain things properly, keep them simple, and make sure you own what you pay for.</p>
  <h2>How I work</h2>
  <ul class="ticks">
    <li>${ICONS.check}You deal with me directly, from the first chat to launch and after.</li>
    <li>${ICONS.check}I work with businesses anywhere in the UK. Start with an email; after that we can talk by phone, video call or email, whichever suits you.</li>
    <li>${ICONS.check}I speak English and Nepali.</li>
    <li>${ICONS.check}One fixed price, agreed before any work starts.</li>
  </ul>
  <p class="about-links"><a class="btn btn-ghost" href="${site.social.portfolio}" rel="me noopener">${ICONS.globe} Portfolio</a><a class="btn btn-ghost" href="${site.social.github}" rel="me noopener">${ICONS.github} GitHub</a><a class="btn btn-ghost" href="${site.social.linkedin}" rel="me noopener">${ICONS.linkedin} LinkedIn</a></p>
</section>
${ctaBand()}`;
  return layout({
    title: `About ${site.owner} | ${site.name}`,
    ogTitle: `About ${site.owner}, Hamropedia Digital`,
    description: `${site.owner} is an AI software engineer in Birmingham who builds fixed-price websites and AI assistants for small businesses across the UK.`,
    path: '/about/', section: '/about/', body, version,
    schema: [
      breadcrumbSchema([{ name: 'About me', path: '/about/' }]),
      { '@context': 'https://schema.org', '@type': 'Person', name: site.owner, jobTitle: 'AI Software Engineer', alumniOf: { '@type': 'CollegeOrUniversity', name: 'Aston University' }, url: site.url + '/about/', image: site.url + '/images/manojkumarthapa.webp', sameAs: Object.values(site.social), worksFor: { '@type': 'Organization', name: site.name, url: site.url + '/' } },
    ],
  });
}

// ---------------------------------------------------------------- Contact
export function renderContact(version) {
  const crumbs = [{ name: 'Free quote' }];
  const wa = waLink(`Hi Manoj, I'm interested in a website for my business.`);
  const body = `${pageHead({
    crumbs,
    eyebrow: 'Free quote',
    title: 'Tell me about your business',
    lead: 'Free, with no obligation. I reply with a fixed price and a simple plan.',
  })}
<section class="wrap section contact-grid">
  <form class="contact-form" id="contact-form" data-email="${esc(site.email)}" novalidate>
    <div class="field"><label for="cf-name">Your name</label><input id="cf-name" name="name" autocomplete="name" required></div>
    <div class="field"><label for="cf-business">Business name and town</label><input id="cf-business" name="business" placeholder="e.g. Rosie's Bakery, Leeds" required></div>
    <div class="field"><label for="cf-need">What do you need?</label>
      <select id="cf-need" name="need">
        <option value="Not sure yet">Not sure yet, help me choose</option>
        ${packages.map((p) => `<option value="${esc(p.name)}" data-id="${p.id}">${esc(p.name)}: ${esc(p.what.toLowerCase())}</option>`).join('')}
        <option value="Care plan" data-id="care">Care plan for my website</option>
        ${aiServices.map((x) => `<option value="${esc(x.name)}" data-id="${x.id}">${esc(x.name)}</option>`).join('')}
        ${extras.map((x) => `<option value="${esc(x.name)}" data-id="${x.id}">${esc(x.name)}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label for="cf-msg">Tell me a little about your business</label><textarea id="cf-msg" name="message" rows="5" placeholder="What you do, who your customers are, and anything you want the website to do." required></textarea></div>
    <div class="field"><label for="cf-reply">How should I reply?</label><input id="cf-reply" name="reply" placeholder="Your phone number or email" required></div>
    <p class="form-error" id="cf-error" role="alert" hidden>Please fill in every box, so I can reply properly.</p>
    <button class="btn btn-lg" type="submit">${ICONS.mail} Send by email</button>
    <p class="muted small">This opens your email app with your message ready to send to ${esc(site.email)}. Nothing is stored on this website. See the <a href="/privacy/">privacy policy</a>.</p>
    <div class="cf-fallback" id="cf-fallback" hidden>
      <h2>Email app did not open?</h2>
      <p>No problem. Copy your message below and send it to <a href="${mailLink()}">${esc(site.email)}</a> from any email, or paste it into a WhatsApp or text message.</p>
      <label class="sr-only" for="cf-copy-text">Your message</label>
      <textarea id="cf-copy-text" rows="7" readonly></textarea>
      <div class="btn-row"><button class="btn" type="button" id="cf-copy">Copy my message</button><a class="btn btn-ghost" id="cf-reopen" href="${mailLink()}">Try the email app again</a></div>
      <p class="cf-copied" id="cf-copied" role="status"></p>
    </div>
  </form>
  <aside class="contact-side">
    <div class="side-card">
      <h2>Prefer to contact me directly?</h2>
      <p><a class="side-link" href="${mailLink()}">${ICONS.mail}${esc(site.email)}</a></p>
      ${wa ? `<p><a class="side-link" href="${wa}" rel="noopener">${ICONS.whatsapp}WhatsApp</a></p>` : ''}
      <p class="muted small">I usually reply within one working day.</p>
    </div>
    <div class="side-card">
      <h2>What happens next</h2>
      <ol class="mini-steps">
        <li>I read your message and reply, usually within one working day.</li>
        <li>We have a free 15-minute chat, if you would like one.</li>
        <li>I send a plain-English plan and one fixed price.</li>
        <li>Nothing starts, and you pay nothing, until you say yes.</li>
      </ol>
    </div>
  </aside>
</section>`;
  return layout({
    title: `Get a free quote | ${site.name}`,
    ogTitle: 'Get a free website quote',
    description: 'Tell me about your business and get a fixed-price quote for a website or AI assistant, free and with no obligation. I usually reply within one working day.',
    path: '/contact/', section: '/contact/', body, version,
    schema: [breadcrumbSchema([{ name: 'Free quote', path: '/contact/' }])],
  });
}

// ---------------------------------------------------------------- Legal
export function renderPrivacy(version) {
  const body = `${pageHead({ crumbs: [{ name: 'Privacy' }], title: 'Privacy policy', lead: `Last updated ${esc(site.privacyUpdated)}.` })}
<section class="wrap section narrow prose">
  <p>This policy explains what happens to your information when you use this website or contact ${esc(site.name)}. ${esc(site.name)} is run by ${esc(site.owner)} in the United Kingdom, who is responsible for your information. Contact: <a href="${mailLink('Privacy question')}">${esc(site.email)}</a>.</p>
  <h2>What this website collects</h2>
  <p>Nothing about you. This website has no analytics, no advertising and no tracking cookies. The quote form does not send anything to this website: it opens your own email app with your message ready, and you choose whether to send it.</p>
  <p>The example websites store nothing either: their booking and quote forms are demonstrations that stay on your device.</p>
  <p>Your browser may remember your choice of light or dark mode on your own device. This is not shared with anyone.</p>
  <h2>Fonts</h2>
  <p>This website loads its fonts from Google Fonts, so your browser connects to Google's servers, which receive your IP address. See <a href="https://policies.google.com/privacy" rel="noopener">Google's privacy policy</a>.</p>
  <h2>When you contact me</h2>
  <p>If you email or message me, I receive your name, contact details and whatever you write. I use them only to reply, to prepare a quote and, if we work together, to deliver the work, send invoices and keep the records the law requires. The legal basis is taking steps at your request before entering into a contract, and performing that contract.</p>
  <p>I keep enquiries that do not lead to work for up to 12 months, then delete them. I keep records of paid work for as long as tax law requires (in the UK, usually 6 years). I never sell your information or use it for marketing lists.</p>
  <h2>Your rights</h2>
  <p>You can ask for a copy of the information I hold about you, ask me to correct or delete it, or object to how I use it. Email me and I will respond within one month. If you are unhappy with how I handle your information, you can complain to the <a href="https://ico.org.uk/make-a-complaint/" rel="noopener">Information Commissioner's Office (ICO)</a>.</p>
  <h2>Changes</h2>
  <p>If this policy changes, the date at the top changes too.</p>
</section>`;
  return layout({
    title: `Privacy policy | ${site.name}`,
    description: 'How Hamropedia Digital handles your information: no tracking or analytics, and enquiries used only to reply and prepare a quote. Your UK GDPR rights explained.',
    path: '/privacy/', body, version,
  });
}

export function renderTerms(version) {
  const body = `${pageHead({ crumbs: [{ name: 'Terms' }], title: 'Terms, in plain English', lead: 'The short version of how we work together. Your written quote has the details for your project.' })}
<section class="wrap section narrow prose">
  <h2>Quotes and prices</h2>
  <p>Every project starts with a written quote showing what is included and one fixed price. Prices on this website are starting points; your quote is what you pay. If you ask for extra work, I tell you the cost first, and nothing changes unless you agree.</p>
  <h2>Payment</h2>
  <p>Half of the price is paid when you accept the quote, and the other half when you are happy with the website and before it goes live. The care plan is paid monthly and can be stopped at any time, with no notice period.</p>
  <h2>Your content</h2>
  <p>You confirm that you have the right to use the words, photos and logos you send me. I can help you find photos you are allowed to use.</p>
  <h2>Ownership</h2>
  <p>Once the website is paid for, it is yours. Your domain is registered in your name. If you want to move on, I hand over the website files and all logins at no extra cost. I may show your finished website as an example of my work, unless you ask me not to.</p>
  <h2>AI assistants and automation</h2>
  <p>AI services have a one-off set-up price and, where shown, a monthly fee. The monthly fee is paid each month, covers the AI running costs for typical small-business use, and can be stopped at any time. If your use is likely to be much heavier, I quote that before we start.</p>
  <p>Before an assistant goes live, you check its answers. You are responsible for the business information it is given, such as prices, opening hours and policies, so please tell me when anything changes. AI can make mistakes: assistants are set up to answer only from your information and to pass anything they are not sure about to you. They rely on outside AI providers, whose own terms also apply. If an assistant handles your customers' personal information, we agree in writing how that information is handled, as UK data protection law requires.</p>
  <h2>Third-party services</h2>
  <p>Some features use other companies, such as domain companies, booking systems and payment companies. They have their own terms and fees, which I explain before you choose them.</p>
  <h2>Example websites</h2>
  <p>The examples on this website are for made-up businesses. Any resemblance to a real business with a similar name is unintended.</p>
  <p>Questions? Email <a href="${mailLink('Question about terms')}">${esc(site.email)}</a>.</p>
</section>`;
  return layout({
    title: `Terms, in plain English | ${site.name}`,
    description: 'How working with Hamropedia Digital works: written fixed-price quotes, half now and half at launch, you own your website and domain, and no contracts.',
    path: '/terms/', body, version,
  });
}

export function render404(version) {
  const body = `<section class="wrap section narrow center notfound">
  <p class="eyebrow">Page not found</p>
  <h1>Sorry, that page is not here</h1>
  <p class="lead">The link may be old or mistyped. These might help:</p>
  <p class="btn-row center-row"><a class="btn" href="/">Home</a><a class="btn btn-ghost" href="/examples/">Example websites</a><a class="btn btn-ghost" href="/prices/">Prices</a></p>
</section>`;
  return layout({ title: `Page not found | ${site.name}`, description: 'This page could not be found. Visit the Hamropedia Digital home page, the example websites, AI services or prices instead.', path: '/404.html', body, version, noindex: true });
}
