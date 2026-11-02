import { demoShell } from './shell.js';

// A made-up cleaning company with a scripted "AI assistant". It runs entirely in the
// browser with pre-written answers (no AI service is called), and says so in the chat.
const PRICES = { regularHour: 18, regularMin: 2, deepFrom: 120, eot: { 1: 150, 2: 190, 3: 240, 4: 290 } };
const AREAS = ['Your Town', 'Northside', 'Southside', 'Eastbrook', 'Westfield', 'Hillcrest'];
const OWNER = 'Sam';

export function renderAiDemo() {
  const css = `
:root{--p:#7c3aed;--p2:#6d28d9;--soft:#f3efff;--bg:#fbfaff;--ink:#1e1b2e;--ink2:#5b5670;--line:#e6e1f5;--ok:#15803d}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:400 1.03rem/1.6 'Plus Jakarta Sans',system-ui,sans-serif}
a{color:inherit}.w{width:min(1160px,100% - 32px);margin-inline:auto}
h1,h2,h3{font-weight:800;line-height:1.15;letter-spacing:-.02em;margin:0 0 .45em}
.top .w{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:1rem 0}
.brand{display:flex;align-items:center;gap:.5rem;font-weight:800;font-size:1.2rem;text-decoration:none}
.brand i{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--p);color:#fff;font-style:normal}
.pill{display:inline-flex;align-items:center;gap:.4rem;padding:.35rem .8rem;border-radius:999px;background:var(--soft);color:var(--p2);font-weight:700;font-size:.85rem}
.hero{padding:1.5rem 0 1rem}.hero h1{font-size:clamp(1.9rem,1.4rem + 2.4vw,2.9rem);max-width:22ch}.hero p{color:var(--ink2);max-width:40rem;font-size:1.08rem}
.prices{display:flex;flex-wrap:wrap;gap:.5rem;margin:1rem 0 0;padding:0;list-style:none}
.prices li{padding:.45rem .8rem;border-radius:12px;background:#fff;border:1px solid var(--line);font-size:.92rem}.prices b{color:var(--p2)}
.stage{display:grid;gap:1.2rem;padding:1.5rem 0 3rem;align-items:start}
@media(min-width:900px){.stage{grid-template-columns:1.1fr .9fr}}
.chat{display:flex;flex-direction:column;height:min(640px,72vh);background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:0 30px 60px -35px rgb(76 29 149/45%);overflow:hidden}
.chat-head{display:flex;align-items:center;gap:.7rem;padding:.9rem 1.1rem;border-bottom:1px solid var(--line);background:linear-gradient(135deg,var(--p),#9f67ff);color:#fff}
.chat-head i{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:#ffffff2e;font-style:normal;font-weight:800}
.chat-head small{display:block;opacity:.85;font-size:.8rem}
.log{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.6rem;background:#fcfbff}
.msg{max-width:85%;padding:.65rem .9rem;border-radius:16px;white-space:pre-line;font-size:.97rem}
.bot{align-self:flex-start;background:var(--soft);border-bottom-left-radius:4px}
.me{align-self:flex-end;background:var(--p);color:#fff;border-bottom-right-radius:4px}
.note{align-self:stretch;max-width:none;background:#fff;border:1px dashed #c4b5fd;color:var(--ink2);font-size:.86rem}
.typing{align-self:flex-start;color:var(--ink2);font-size:.85rem;padding:.2rem .5rem}
.chips{display:flex;gap:.45rem;overflow-x:auto;padding:.6rem 1rem;border-top:1px solid var(--line);scrollbar-width:thin}
.chip{flex:none;padding:.45rem .8rem;border-radius:999px;border:1px solid #d8ccfb;background:#fff;color:var(--p2);font:600 .86rem/1.2 inherit;cursor:pointer}
.chip:hover{background:var(--soft)}
.send{display:flex;gap:.5rem;padding:.7rem 1rem 1rem}
.send input{flex:1;min-height:48px;padding:.6rem .9rem;border-radius:14px;border:1.5px solid var(--line);font:inherit;color:var(--ink);background:#fff}
.send input:focus{outline:none;border-color:var(--p);box-shadow:0 0 0 4px #7c3aed22}
.send button{min-height:48px;padding:0 1.1rem;border-radius:14px;border:0;background:var(--p);color:#fff;font:700 1rem inherit;cursor:pointer}
.panel{background:#14112a;color:#e9e5ff;border-radius:22px;padding:1.2rem;min-height:300px}
.panel h2{font-size:1.15rem;color:#fff;display:flex;align-items:center;gap:.5rem}
.panel h2 span{font-size:.75rem;font-weight:700;padding:.15rem .5rem;border-radius:999px;background:#7c3aed;color:#fff}
.panel>p{color:#b9b2d9;font-size:.92rem}
.events{list-style:none;padding:0;margin:0;display:grid;gap:.5rem}
.events li{display:flex;gap:.6rem;align-items:flex-start;padding:.6rem .75rem;border-radius:12px;background:#1f1a3d;font-size:.9rem;animation:in .35s ease}
.events li b{flex:none;display:grid;place-items:center;width:24px;height:24px;border-radius:7px;background:#2e2760;font-size:.8rem}
.events li.ok b{background:#14532d;color:#86efac}.events li.hand b{background:#713f12;color:#fde68a}
.events time{display:block;color:#8f88b5;font-size:.75rem}
.empty{color:#8f88b5;font-size:.9rem}
.counts{display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin:1rem 0}
.counts div{padding:.7rem;border-radius:12px;background:#1f1a3d;text-align:center}.counts strong{display:block;font-size:1.6rem;color:#fff}.counts span{font-size:.78rem;color:#b9b2d9}
.real{margin-top:1rem;padding:.8rem;border-radius:12px;border:1px solid #2e2760;font-size:.88rem;color:#b9b2d9}.real a{color:#c4b5fd;font-weight:700}
@keyframes in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
footer{padding:2rem 0;color:var(--ink2);font-size:.9rem;border-top:1px solid var(--line)}
:focus-visible{outline:3px solid #a78bfa;outline-offset:2px}
`;

  const body = `
<header class="top"><div class="w"><a class="brand" href="#"><i aria-hidden="true">✦</i>Bright Nest Cleaning</a><span class="pill">● Assistant online 24/7</span></div></header>
<section class="hero"><div class="w">
  <h1>Home and end-of-tenancy cleaning, booked in a message.</h1>
  <p>Ask our assistant anything: prices, areas we cover, or when we can come. Sam and the team are out cleaning, so the assistant answers straight away and passes anything tricky to Sam.</p>
  <ul class="prices">
    <li>Regular clean <b>£${PRICES.regularHour}/hour</b> (min ${PRICES.regularMin} hours)</li>
    <li>Deep clean <b>from £${PRICES.deepFrom}</b></li>
    <li>End of tenancy <b>from £${PRICES.eot[1]}</b></li>
  </ul>
</div></section>
<section class="w stage">
  <div class="chat" aria-label="Chat with the Bright Nest assistant">
    <div class="chat-head"><i aria-hidden="true">✦</i><div><strong>Bright Nest assistant</strong><small>Usually replies instantly</small></div></div>
    <div class="log" id="log" aria-live="polite"></div>
    <div class="chips" id="chips">
      <button class="chip" type="button">How much is a 3-bed end of tenancy clean?</button>
      <button class="chip" type="button">Do you cover Northside?</button>
      <button class="chip" type="button">Can you come this Saturday?</button>
      <button class="chip" type="button">Do you bring your own products?</button>
      <button class="chip" type="button">What's in a regular clean?</button>
      <button class="chip" type="button">Can you clean my car?</button>
    </div>
    <form class="send" id="send"><label for="q" style="position:absolute;left:-9999px">Your message</label><input id="q" autocomplete="off" placeholder="Type a question…" maxlength="300"><button type="submit">Send</button></form>
  </div>
  <aside class="panel" aria-label="What the assistant did behind the scenes">
    <h2>Behind the scenes <span>Owner's view</span></h2>
    <p>This is the admin the assistant does for Sam, without Sam lifting a finger.</p>
    <div class="counts"><div><strong id="c-answered">0</strong><span>questions answered for Sam</span></div><div><strong id="c-handed">0</strong><span>passed to Sam</span></div></div>
    <ul class="events" id="events"><li class="empty" id="empty">Waiting for a customer message…</li></ul>
    <p class="real">This example uses pre-written answers. A real AI assistant understands any wording, and still answers only from your business's own information. <a href="https://huggingface.co/spaces/manojthapaa/planck-ai" rel="noopener">See real AI I built working</a>.</p>
  </aside>
</section>
<footer><div class="w">Bright Nest Cleaning · Your Town · Example website, not a real business.</div></footer>`;

  const js = `
(function(){
  var P = ${JSON.stringify(PRICES)}, AREAS = ${JSON.stringify(AREAS)}, OWNER = ${JSON.stringify(OWNER)};
  var log = document.getElementById('log'), events = document.getElementById('events');
  var counts = { answered: 0, handed: 0 }, flow = null, lead = {};
  function el(tag, cls, text){ var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function now(){ var d = new Date(); return (d.getHours()<10?'0':'') + d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes(); }
  function say(cls, text){ var m = el('div', 'msg ' + cls, text); log.appendChild(m); log.scrollTop = log.scrollHeight; }
  function event(kind, icon, text){
    var e = document.getElementById('empty'); if (e) e.remove();
    var li = el('li', kind); li.appendChild(el('b', null, icon)); var d = el('div'); d.appendChild(el('span', null, text)); d.appendChild(el('time', null, now())); li.appendChild(d);
    events.insertBefore(li, events.firstChild);
    // On phones the panel is below the chat, so also show what happened as a short pop-up.
    if (window.innerWidth < 900 && window.demoToast) window.demoToast('Behind the scenes: ' + text);
  }
  function count(k){ counts[k]++; document.getElementById(k === 'answered' ? 'c-answered' : 'c-handed').textContent = counts[k]; }
  function bot(text, after){
    var t = el('div', 'typing', 'Assistant is typing…'); log.appendChild(t); log.scrollTop = log.scrollHeight;
    setTimeout(function(){ t.remove(); say('bot', text); if (after) after(); }, 650);
  }
  var DAYS = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday','today','tomorrow','weekend'];
  function findDay(s){ for (var i = 0; i < DAYS.length; i++) if (s.indexOf(DAYS[i]) > -1) return DAYS[i].charAt(0).toUpperCase() + DAYS[i].slice(1); return null; }
  function beds(s){ var m = s.match(/(\\d)\\s*-?\\s*(bed|bedroom|br)/); if (m) return +m[1]; var w = {one:1,two:2,three:3,four:4}; for (var k in w) if (s.indexOf(k + ' bed') > -1 || s.indexOf(k + '-bed') > -1) return w[k]; return null; }

  // A real question (or a tapped suggestion) during the booking steps cancels the booking.
  function looksLikeQuestion(s){
    return s.indexOf('?') > -1 || /(price|cost|how much|quote|cover|area|postcode|product|supplies|include|what's in|whats in|end of tenancy|deep clean|regular clean)/.test(s);
  }
  function answer(raw, fromChip){
    var s = raw.toLowerCase();
    if (flow && (fromChip || ((flow === 'name' || flow === 'phone') && looksLikeQuestion(s)))) {
      flow = null; lead = {};
      say('bot', 'No problem, we can book later.');
    }
    // Booking flow: name -> phone -> day.
    if (flow === 'name') { lead.name = raw.trim().slice(0, 40); flow = 'phone'; bot('Thanks, ' + lead.name + '! What is the best phone number for Sam to confirm the booking?'); return; }
    if (flow === 'phone') {
      if (!/\\d{6,}/.test(s.replace(/[\\s-]/g, ''))) { bot('Sorry, that does not look like a phone number. Could you type it again?'); return; }
      lead.phone = raw.trim(); flow = lead.day ? null : 'day';
      if (flow === 'day') { bot('Got it. Which day suits you best?'); return; }
      return finish();
    }
    if (flow === 'day') { lead.day = findDay(s) || raw.trim().slice(0, 30); flow = null; return finish(); }

    if (/^(hi|hello|hey|hiya|good (morning|afternoon|evening))\\b/.test(s)) { count('answered'); bot('Hello! How can I help? You can ask about prices, the areas we cover, or booking a clean.'); event('ok', '✓', 'Greeted a new visitor'); return; }
    if (/(book|available|availability|come|appointment|slot|free on|can you do)/.test(s) && !/\\bcar\\b|oven only/.test(s)) {
      lead = { day: findDay(s) }; flow = 'name'; count('answered');
      bot((lead.day ? lead.day + ' should be possible. ' : '') + 'I can send a booking request to Sam now. What is your name?');
      event('ok', '✓', 'Started a booking request' + (lead.day ? ' for ' + lead.day : '')); return;
    }
    if (/(include|what do you do|what's in|whats in|checklist)/.test(s)) { count('answered'); bot('A regular clean covers dusting, vacuuming and mopping, kitchen surfaces, bathrooms and making beds. Extras like ovens and inside windows can be added.'); event('ok', '✓', 'Explained what a regular clean includes'); return; }
    if (/(price|cost|how much|quote|£|charge|rates?)/.test(s) || /(end of tenancy|move out|moving out|deep clean|regular)/.test(s)) {
      count('answered'); var b = beds(s);
      if (/(tenancy|move out|moving out)/.test(s)) {
        if (b && P.eot[b]) { bot('An end-of-tenancy clean for a ' + b + '-bed home is £' + P.eot[b] + ', including the oven, inside cupboards and windows inside. Would you like to book it?'); event('ok', '£', 'Sent a quote: ' + b + '-bed end of tenancy, £' + P.eot[b]); }
        else { bot('End-of-tenancy cleans are £' + P.eot[1] + ' (1 bed), £' + P.eot[2] + ' (2 bed), £' + P.eot[3] + ' (3 bed) and £' + P.eot[4] + ' (4 bed). How many bedrooms is yours?'); event('ok', '£', 'Sent the end-of-tenancy price list'); }
      } else if (/deep/.test(s)) { bot('Deep cleans start from £' + P.deepFrom + ' and depend on the size of your home. Tell me how many bedrooms, and I will give you a price.'); event('ok', '£', 'Sent deep-clean prices'); }
      else { bot('Regular cleans are £' + P.regularHour + ' an hour, with a ' + P.regularMin + '-hour minimum. End-of-tenancy cleans start at £' + P.eot[1] + ', and deep cleans at £' + P.deepFrom + '. What kind of clean do you need?'); event('ok', '£', 'Sent the price list'); }
      return;
    }
    var area = AREAS.filter(function(a){ return s.indexOf(a.toLowerCase()) > -1; })[0];
    if (area || /(cover|area|postcode|near|do you go|travel)/.test(s)) {
      count('answered');
      if (area) { bot('Yes, we cover ' + area + '! We clean across ' + AREAS.join(', ') + '.'); event('ok', '✓', 'Answered an area question: ' + area); }
      else { bot('We cover ' + AREAS.join(', ') + '. Which area are you in?'); event('ok', '✓', 'Sent the list of areas covered'); }
      return;
    }
    if (/(product|supplies|equipment|bring|hoover|vacuum|eco)/.test(s)) { count('answered'); bot('Yes, we bring everything, including eco-friendly products and our own vacuum. If you prefer your own products, just tell us.'); event('ok', '✓', 'Answered a question about products'); return; }
    if (/(thank|cheers|great|perfect)/.test(s)) { count('answered'); bot('You are welcome! Anything else I can help with?'); return; }
    // Not sure: hand over instead of guessing.
    count('handed');
    bot('I am not sure about that, so I have passed your question to ' + OWNER + ', the owner, who will reply soon. Anything else I can help with meanwhile?');
    event('hand', '→', 'Passed to ' + OWNER + ' (not in the business info): "' + raw.trim().slice(0, 60) + '"');
  }
  function finish(){
    count('answered');
    bot('Done! I have sent your request for ' + (lead.day || 'your chosen day') + ' to ' + OWNER + ', who will text ' + lead.phone + ' to confirm the time.');
    event('ok', '📅', 'Booking request added to the calendar: ' + lead.name + ', ' + (lead.day || 'day to confirm') + ' (waiting for ' + OWNER + "'s OK)");
    setTimeout(function(){ event('ok', '✉', 'New customer saved to the customer list: ' + lead.name); }, 500);
    setTimeout(function(){ event('ok', '🔔', 'Alert sent to ' + OWNER + "'s phone: new booking request"); }, 900);
    setTimeout(function(){ event('ok', '⏰', 'Reminder set: text ' + lead.name + ' the day before'); }, 1300);
  }
  function ask(text, fromChip){ text = (text || '').trim(); if (!text) return; say('me', text); answer(text, fromChip); }
  document.getElementById('send').addEventListener('submit', function(e){ e.preventDefault(); var q = document.getElementById('q'); ask(q.value); q.value = ''; q.focus(); });
  document.getElementById('chips').addEventListener('click', function(e){ var c = e.target.closest('.chip'); if (c) ask(c.textContent, true); });
  say('bot', 'Hi! I am the Bright Nest assistant. Ask me about prices, the areas we cover, or booking a clean.');
  say('note', 'Example only: this assistant uses pre-written answers. A real AI assistant understands any wording, and still answers only from the business\\'s own information. Try a question it cannot answer, too.');
})();`;

  return demoShell({
    slug: 'ai-assistant',
    title: 'Bright Nest Cleaning',
    description: 'An example AI assistant for a cleaning company: it answers prices and areas, takes booking requests and passes anything it is not sure about to the owner.',
    fonts: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap',
    css, body, js, theme: '#7c3aed',
  });
}
