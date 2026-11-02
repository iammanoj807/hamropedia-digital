import { demoShell } from './shell.js';

const SERVICES = [
  ['Haircut', 'Scissors or clippers, finished with a wash and style', 30, 15],
  ['Skin fade', 'Sharp fade, blended by hand', 40, 18],
  ['Beard trim', 'Shape, line-up and hot towel', 20, 8],
  ['Cut & beard', 'Haircut or fade plus a full beard trim', 50, 24],
  ['Hot towel shave', 'Traditional straight-razor shave', 30, 15],
  ['Kids cut (under 12)', 'Patient, quick and tidy', 25, 10],
];
// 0 = Sunday. [open, close] or null.
const HOURS = [[10, 16], null, [9, 18], [9, 18], [9, 20], [9, 20], [8, 17]];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const fmt = (h) => (h === 12 ? '12pm' : h > 12 ? `${h - 12}pm` : `${h}am`);

export function renderBarber() {
  const css = `
:root{--bg:#0b1513;--bg2:#10201d;--card:#132724;--line:#1f3a35;--ink:#ecfdf5;--ink2:#a7c4bd;--t:#2dd4bf;--t2:#14b8a6}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:400 1.04rem/1.6 'Outfit',system-ui,sans-serif}
a{color:inherit}.w{width:min(1100px,100% - 32px);margin-inline:auto}
h1,h2,h3{font-family:'Bebas Neue','Outfit',sans-serif;font-weight:400;letter-spacing:.02em;line-height:1;margin:0 0 .35em}
.top{display:flex;justify-content:space-between;align-items:center;padding:1rem 0;gap:1rem}
.brand{font:400 1.7rem/1 'Bebas Neue',sans-serif;letter-spacing:.06em;text-decoration:none}.brand span{color:var(--t)}
.b{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;min-height:48px;padding:.7rem 1.3rem;border-radius:10px;background:var(--t);color:#042f2e;font-weight:700;text-decoration:none;border:0;font-size:1rem;cursor:pointer;font-family:inherit}
.b.alt{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 2px var(--line)}
.b:disabled{opacity:.4;cursor:not-allowed}
.hero{position:relative;padding:3rem 0 3.5rem;overflow:hidden}
.hero h1{font-size:clamp(3.2rem,2rem + 6vw,6rem);max-width:12ch}
.hero h1 span{color:var(--t)}.hero p{font-size:1.15rem;color:var(--ink2);max-width:34rem}
.pole{position:absolute;right:-30px;top:20px;width:160px;height:420px;border-radius:80px;background:repeating-linear-gradient(135deg,#2dd4bf 0 22px,#ecfdf5 22px 44px,#0f766e 44px 66px,#ecfdf5 66px 88px);opacity:.14;transform:rotate(12deg)}
.acts{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.4rem}
.sec{padding:3rem 0;border-top:1px solid var(--line)}
.sec h2{font-size:clamp(2.3rem,1.8rem + 2vw,3.2rem)}
.plist{display:grid;gap:.6rem}@media(min-width:760px){.plist{grid-template-columns:1fr 1fr}}
.p{display:flex;justify-content:space-between;gap:1rem;padding:1rem 1.1rem;background:var(--card);border:1px solid var(--line);border-radius:14px}
.p h3{font:600 1.08rem/1.3 'Outfit',sans-serif;letter-spacing:0;margin:0}.p p{margin:.1rem 0 0;color:var(--ink2);font-size:.93rem}
.p strong{color:var(--t);font-size:1.15rem}
.book{background:var(--bg2);border:1px solid var(--line);border-radius:20px;padding:1.3rem}
.stepl{display:flex;align-items:center;gap:.6rem;font:600 1.05rem/1.3 'Outfit',sans-serif;margin:1.2rem 0 .7rem}
.stepl span{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--t);color:#042f2e;font-size:.9rem}
.chips{display:flex;flex-wrap:wrap;gap:.5rem}
.chip{min-height:44px;padding:.5rem .9rem;border-radius:10px;background:var(--card);border:1px solid var(--line);color:var(--ink);font:500 .95rem/1.2 'Outfit',sans-serif;cursor:pointer}
.chip small{display:block;color:var(--ink2);font-size:.78rem}
.chip[aria-pressed="true"]{background:var(--t);color:#042f2e;border-color:var(--t)}.chip[aria-pressed="true"] small{color:#064e3b}
.chip:disabled{opacity:.35;text-decoration:line-through;cursor:not-allowed}
.days{display:grid;grid-template-columns:repeat(auto-fill,minmax(78px,1fr));gap:.5rem}
.slots{display:grid;grid-template-columns:repeat(auto-fill,minmax(82px,1fr));gap:.5rem}
.hint{color:var(--ink2);font-size:.92rem;margin:.3rem 0 0}
.f{display:grid;gap:.7rem;margin-top:.4rem}@media(min-width:640px){.f{grid-template-columns:1fr 1fr}}
.f label{display:grid;gap:.3rem;font-weight:600;font-size:.95rem}
.f input{min-height:46px;padding:.6rem .8rem;border-radius:10px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit}
.sum{margin:1.2rem 0;padding:1rem;border-radius:12px;background:var(--card);border:1px dashed var(--line);color:var(--ink2)}
.sum strong{color:var(--ink)}
.done{text-align:center;padding:2rem 1rem}.done .tick{display:grid;place-items:center;width:64px;height:64px;margin:0 auto 1rem;border-radius:50%;background:var(--t);color:#042f2e;font-size:2rem;font-weight:700}
.done h3{font-size:2.4rem}.done p{color:var(--ink2)}
.two{display:grid;gap:1.5rem}@media(min-width:860px){.two{grid-template-columns:1fr 1fr}}
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:1.4rem}
table{width:100%;border-collapse:collapse}td{padding:.55rem 0;border-bottom:1px solid var(--line)}td:last-child{text-align:right}
tr.today td{color:var(--t);font-weight:700}
footer{padding:2rem 0;color:var(--ink2);font-size:.92rem;border-top:1px solid var(--line)}
:focus-visible{outline:3px solid var(--t);outline-offset:2px}
`;
  const DIR = 'data-demo="On a real website, this opens Google Maps with directions to the shop."';
  const CALL = 'data-demo="On a real website, this button rings the shop straight away."';

  const body = `
<div class="w"><header class="top"><a class="brand" href="#">Sharp <span>Line</span> Barbers</a><a class="b" href="#book">Book now</a></header></div>
<section class="hero"><div class="pole" aria-hidden="true"></div><div class="w">
  <h1>Fresh cuts. <span>No waiting.</span></h1>
  <p>Book your slot online in under a minute, any time of day. Walk in at your time, and walk out sharp.</p>
  <div class="acts"><a class="b" href="#book">Book a slot</a><a class="b alt" href="#prices">See prices</a></div>
</div></section>

<section class="sec" id="prices"><div class="w">
  <h2>Prices</h2>
  <div class="plist">${SERVICES.map(([n, d, m, p]) => `<div class="p"><div><h3>${n}</h3><p>${d} · ${m} min</p></div><strong>£${p}</strong></div>`).join('')}</div>
</div></section>

<section class="sec" id="book"><div class="w">
  <h2>Book a slot</h2>
  <div class="book" id="booker">
    <div id="b-form">
      <p class="stepl"><span>1</span>Choose a service</p>
      <div class="chips" id="b-svc">${SERVICES.map(([n, , m, p], i) => `<button type="button" class="chip" data-i="${i}" aria-pressed="false">${n}<small>£${p} · ${m} min</small></button>`).join('')}</div>
      <p class="stepl"><span>2</span>Choose a day</p>
      <div class="days" id="b-day"></div>
      <p class="stepl"><span>3</span>Choose a time</p>
      <div class="slots" id="b-time"><p class="hint">Pick a day first.</p></div>
      <p class="stepl"><span>4</span>Your details</p>
      <div class="f">
        <label>Name<input id="b-name" autocomplete="name" placeholder="e.g. Sam"></label>
        <label>Mobile number<input id="b-phone" type="tel" autocomplete="tel" placeholder="For your reminder text"></label>
      </div>
      <p class="sum" id="b-sum">Choose a service, day and time.</p>
      <button class="b" type="button" id="b-go" disabled>Confirm booking</button>
    </div>
    <div class="done" id="b-done" hidden>
      <div class="tick" aria-hidden="true">✓</div>
      <h3>You're booked!</h3>
      <p id="b-done-text"></p>
      <p><strong>This is an example.</strong> On a real website, the booking goes straight into the barber's diary and the customer gets a reminder text.</p>
      <button class="b alt" type="button" id="b-again">Try again</button>
    </div>
  </div>
</div></section>

<section class="sec"><div class="w two">
  <div class="card"><h2>Opening hours</h2>
    <table><tbody>${[1, 2, 3, 4, 5, 6, 0].map((d) => `<tr data-day="${d}"><td>${DAYS[d]}</td><td>${HOURS[d] ? `${fmt(HOURS[d][0])} to ${fmt(HOURS[d][1])}` : 'Closed'}</td></tr>`).join('')}</tbody></table>
  </div>
  <div class="card"><h2>Find us</h2>
    <p>48 Sample Road, Your Town, AB3 4CD<br>Two minutes from the bus station.</p>
    <div class="acts"><a class="b alt" href="#" ${DIR}>Directions</a><a class="b alt" href="#" ${CALL}>Call the shop</a></div>
  </div>
</div></section>
<footer><div class="w">Sharp Line Barbers · 48 Sample Road, Your Town · Example website, not a real business.</div></footer>`;

  const js = `
(function(){
  var S = ${JSON.stringify(SERVICES.map(([n, , m, p]) => [n, m, p]))}, H = ${JSON.stringify(HOURS)};
  var DN = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], DL = ${JSON.stringify(DAYS)};
  var state = { svc: null, day: null, time: null };
  var $ = function(id){ return document.getElementById(id); };
  var today = new Date(); var tr = document.querySelector('tr[data-day="'+today.getDay()+'"]'); if (tr) tr.classList.add('today');
  function pressOnly(box, btn){ box.querySelectorAll('.chip').forEach(function(c){ c.setAttribute('aria-pressed', String(c===btn)); }); }
  function pad(n){ return (n<10?'0':'')+n; }
  // Days: next 8 days the shop is open.
  var days = [], d = new Date(); d.setHours(0,0,0,0);
  while (days.length < 8) { if (H[d.getDay()]) days.push(new Date(d)); d.setDate(d.getDate()+1); }
  $('b-day').innerHTML = days.map(function(x,i){ return '<button type="button" class="chip" data-i="'+i+'" aria-pressed="false">'+(i===0&&x.toDateString()===today.toDateString()?'Today':DN[x.getDay()])+'<small>'+x.getDate()+' '+x.toLocaleString('en-GB',{month:'short'})+'</small></button>'; }).join('');
  function slots(){
    var box = $('b-time'); if (state.day===null){ return; }
    var x = days[state.day], h = H[x.getDay()], out = [], now = new Date();
    for (var m = h[0]*60; m + 30 <= h[1]*60; m += 30) {
      var t = new Date(x); t.setMinutes(m);
      var past = t <= now, taken = ((m/30) * 7 + x.getDate() * 3) % 5 === 0;
      out.push('<button type="button" class="chip" data-t="'+pad(Math.floor(m/60))+':'+pad(m%60)+'" aria-pressed="false"'+(past||taken?' disabled':'')+'>'+pad(Math.floor(m/60))+':'+pad(m%60)+'</button>');
    }
    box.innerHTML = out.join('') + '<p class="hint" style="grid-column:1/-1">Crossed-out times are already booked.</p>';
  }
  function sum(){
    var ok = state.svc!==null && state.day!==null && state.time && $('b-name').value.trim() && $('b-phone').value.trim().length >= 6;
    if (state.svc!==null && state.day!==null && state.time) {
      var s = S[state.svc], x = days[state.day];
      $('b-sum').innerHTML = '<strong>' + s[0] + '</strong> (£' + s[2] + ', ' + s[1] + ' min) on <strong>' + DL[x.getDay()] + ' ' + x.getDate() + ' ' + x.toLocaleString('en-GB',{month:'long'}) + '</strong> at <strong>' + state.time + '</strong>';
    }
    $('b-go').disabled = !ok;
  }
  $('b-svc').addEventListener('click', function(e){ var b = e.target.closest('.chip'); if(!b) return; state.svc = +b.dataset.i; pressOnly(this,b); sum(); });
  $('b-day').addEventListener('click', function(e){ var b = e.target.closest('.chip'); if(!b) return; state.day = +b.dataset.i; state.time = null; pressOnly(this,b); slots(); sum(); });
  $('b-time').addEventListener('click', function(e){ var b = e.target.closest('.chip'); if(!b||b.disabled) return; state.time = b.dataset.t; pressOnly(this,b); sum(); });
  $('b-name').addEventListener('input', sum); $('b-phone').addEventListener('input', sum);
  $('b-go').addEventListener('click', function(){
    var s = S[state.svc], x = days[state.day];
    $('b-done-text').textContent = 'Thanks ' + $('b-name').value.trim() + '. ' + s[0] + ' on ' + DL[x.getDay()] + ' ' + x.getDate() + ' ' + x.toLocaleString('en-GB',{month:'long'}) + ' at ' + state.time + '.';
    $('b-form').hidden = true; $('b-done').hidden = false; $('b-done').scrollIntoView({block:'center', behavior:'smooth'});
  });
  $('b-again').addEventListener('click', function(){ $('b-form').hidden = false; $('b-done').hidden = true; });
})();`;

  return demoShell({
    slug: 'barber',
    title: 'Sharp Line Barbers',
    description: 'An example barber website with a clear price list and online booking: choose a service, a day and a time.',
    fonts: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;500;600;700&display=swap',
    css, body, js, theme: '#0b1513',
  });
}
