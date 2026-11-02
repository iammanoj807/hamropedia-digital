// Hamropedia Digital: small, dependency-free page behaviour.
const root = document.documentElement;
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch { /* private mode */ } },
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---- light / dark mode ----
const themeBtn = document.getElementById('theme-btn');
const syncTheme = () => {
  const dark = root.dataset.theme === 'dark';
  themeBtn?.setAttribute('aria-pressed', String(dark));
  themeBtn?.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
};
themeBtn?.addEventListener('click', () => {
  if (root.dataset.theme === 'dark') { delete root.dataset.theme; store.set('hd-theme', null); }
  else { root.dataset.theme = 'dark'; store.set('hd-theme', 'dark'); }
  syncTheme();
});
syncTheme();

// ---- mobile menu ----
const menuBtn = document.getElementById('menu-btn');
const setMenu = (open) => {
  document.body.classList.toggle('menu-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
  menuBtn?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};
menuBtn?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
document.querySelectorAll('#main-nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// ---- package finder (home page) ----
const finder = document.getElementById('finder');
const finderData = document.getElementById('finder-data');
if (finder && finderData) {
  const data = JSON.parse(finderData.textContent);
  const out = document.getElementById('finder-result');
  finder.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(finder);
    const need = f.get('need'), now = f.get('now'), size = f.get('size');
    let pick, why, id, extra = '';
    if (need === 'maps') {
      pick = data.google; id = 'google';
      why = 'You do not need a website to start. Getting your free Google Business Profile right is the quickest way to show up on Google Maps.';
    } else if (need === 'time') {
      pick = data.assistant; id = 'assistant';
      why = 'An AI assistant answers the same customer questions for you, day and night, and passes anything tricky to you. If paperwork is the bigger problem, admin automation can take that over instead.';
      extra = now === 'none'
        ? `<p class="finder-extra">Customers also need somewhere to find you: the assistant works best with a <strong>${esc(data.packages.starter.name)}</strong> website (${esc(data.packages.starter.price)}).</p>`
        : `<p class="finder-extra">Paperwork eating your evenings? Ask about <strong>${esc(data.automation.name)}</strong> (${esc(data.automation.price)}).</p>`;
    } else if (need === 'book') {
      pick = data.packages.bookings; id = 'bookings';
      why = 'Customers can book or order from their phone at any time, and you get an alert for each one.';
    } else if (now === 'good') {
      pick = data.google; id = 'google';
      why = 'Your website already works, so the quickest win is usually your Google Business Profile: it is what local customers see first on Google Maps.';
    } else if (size === 'many') {
      pick = data.packages.business; id = 'business';
      why = 'With lots to show, a page for each service helps customers find what they want, and helps Google show you for more searches.';
    } else {
      pick = data.packages.starter; id = 'starter';
      why = 'One clear page with your services, prices, hours and contact buttons is all most small businesses need to start.';
    }
    if (now === 'old' && need !== 'time') {
      extra = `<p class="finder-extra">You already have a website: sometimes fixing it is enough. Ask about <strong>${esc(data.refresh.name)}</strong> (${esc(data.refresh.price)}), and I will tell you honestly which is better value.</p>`;
    }
    out.innerHTML = `<p class="eyebrow">My suggestion</p>
      <h3>${esc(pick.name)} <span>${esc(pick.price)}</span></h3>
      <p>${esc(why)}</p>${extra}
      <div class="btn-row"><a class="btn" href="/contact/?package=${id}">Ask about this</a><a class="btn btn-ghost" href="${id === 'assistant' ? '/ai/' : '/prices/'}">${id === 'assistant' ? 'See all AI services' : 'Compare all prices'}</a></div>`;
    out.hidden = false;
    out.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
}

// ---- quote form: opens the visitor's email app with the message ready ----
const form = document.getElementById('contact-form');
if (form) {
  const params = new URLSearchParams(location.search);
  const want = params.get('package');
  const example = params.get('example');
  const select = form.querySelector('#cf-need');
  if (want) {
    const opt = [...select.options].find((o) => o.dataset.id === want || o.value.toLowerCase().startsWith(want));
    if (opt) select.value = opt.value;
  }
  const msg = form.querySelector('#cf-msg');
  if (example && !msg.value) {
    const names = { 'momo-kitchen': 'the takeaway example', barber: 'the barber booking example', 'ai-assistant': 'the AI assistant example (Bright Nest Cleaning)' };
    if (names[example]) msg.value = `I'd like something like ${names[example]}. `;
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = (name) => form.elements[name].value.trim();
    const ok = ['name', 'business', 'message', 'reply'].every((n) => v(n));
    document.getElementById('cf-error').hidden = ok;
    if (!ok) { form.querySelector(':invalid, input:placeholder-shown')?.focus(); return; }
    const subject = `Website enquiry: ${v('business')}`;
    const body = `Name: ${v('name')}\nBusiness: ${v('business')}\nI need: ${v('need')}\nReply to: ${v('reply')}\n\n${v('message')}`;
    const mailto = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Some visitors (e.g. Gmail in a browser) have no email app, so also show the message to copy.
    const fallback = document.getElementById('cf-fallback');
    document.getElementById('cf-copy-text').value = `To: ${form.dataset.email}\nSubject: ${subject}\n\n${body}`;
    document.getElementById('cf-reopen').href = mailto;
    fallback.hidden = false;
    location.href = mailto;
    setTimeout(() => fallback.scrollIntoView({ block: 'nearest', behavior: 'smooth' }), 300);
  });
  document.getElementById('cf-copy')?.addEventListener('click', async () => {
    const text = document.getElementById('cf-copy-text');
    const done = document.getElementById('cf-copied');
    try { await navigator.clipboard.writeText(text.value); done.textContent = 'Copied. Now paste it into an email or message.'; }
    catch { text.select(); done.textContent = 'Select the text above and copy it.'; }
  });
}

// ---- time-saving calculator (AI page) ----
const calc = document.getElementById('calc');
if (calc) {
  const num = (id) => Math.max(0, parseFloat(document.getElementById(id).value) || 0);
  const fmtH = (h) => (Math.round(h * 2) / 2).toLocaleString('en-GB');
  const fmtP = (p) => `£${Math.round(p).toLocaleString('en-GB')}`;
  const update = () => {
    const hours = ((num('calc-msg') + num('calc-admin')) * 52) / 12;
    const value = hours * num('calc-rate');
    document.getElementById('calc-hours').textContent = fmtH(hours);
    document.getElementById('calc-value').textContent = fmtP(value);
    document.getElementById('calc-half-h').textContent = fmtH(hours / 2);
    document.getElementById('calc-half-v').textContent = fmtP(value / 2);
  };
  calc.addEventListener('input', update);
  calc.addEventListener('submit', (e) => e.preventDefault());
  update();
}
