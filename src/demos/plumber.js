import { demoShell } from './shell.js';

// [job, low £, high £, note]
const JOBS = [
  ['Dripping or leaking tap', 60, 90, 'Most taps are fixed in one visit, with common washers and cartridges on the van.'],
  ['Blocked sink, bath or toilet', 70, 120, 'Includes clearing the blockage and checking water drains away properly.'],
  ['Leaking pipe', 80, 150, 'Depends on where the pipe is. Under-sink leaks are quickest.'],
  ['Toilet not flushing or always running', 70, 130, 'Usually a worn part inside the cistern, replaced on the day.'],
  ['Radiator cold or leaking', 70, 140, 'Bleeding, valve replacement or fixing a leak.'],
  ['New tap fitted', 90, 160, 'Fitting only. You can supply the tap, or we can bring one.'],
];
const WHEN = [
  ['This week', 0, 'We will offer you a time within a few days.'],
  ['Today', 30, 'Same-day visit, if booked before 2pm.'],
  ['Emergency (evening or weekend)', 60, 'For leaks that cannot wait. Turn off your water at the stopcock first.'],
];
const SERVICES = [
  ['Leaks & repairs', 'Taps, pipes, toilets and radiators, fixed properly the first time.'],
  ['Blockages', 'Sinks, baths, showers and toilets cleared quickly and cleanly.'],
  ['Bathrooms', 'New taps, showers, toilets and full bathroom fitting.'],
  ['Emergencies', 'Burst pipes and serious leaks, evenings and weekends.'],
];
const AREAS = ['Your Town', 'Northside', 'Southside', 'Eastbrook', 'Westfield', 'Hillcrest', 'Riverside', 'Oakley'];

export function renderPlumber() {
  const css = `
:root{--n:#0b2545;--b:#1d4ed8;--b2:#1e40af;--y:#facc15;--bg:#f6f8fc;--ink:#0f172a;--ink2:#475569;--line:#dbe3ef}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:400 1.04rem/1.6 'Manrope',system-ui,sans-serif}
a{color:inherit}.w{width:min(1120px,100% - 32px);margin-inline:auto}
h1,h2,h3{font-weight:800;line-height:1.12;letter-spacing:-.02em;margin:0 0 .45em}
.emerg{background:var(--y);color:#422006;font-weight:700;text-align:center;padding:.5rem 1rem;font-size:.95rem}
.emerg a{text-decoration:underline}
.top{background:var(--n);color:#fff}
.top .w{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.9rem 0}
.brand{display:flex;align-items:center;gap:.5rem;font-weight:800;font-size:1.25rem;text-decoration:none}
.drop{width:30px;height:30px}
.b{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;min-height:50px;padding:.75rem 1.3rem;border-radius:12px;background:var(--y);color:#422006;font-weight:800;text-decoration:none;border:0;font-size:1rem;cursor:pointer;font-family:inherit}
.b.blue{background:var(--b);color:#fff}.b.alt{background:#fff;color:var(--n);box-shadow:inset 0 0 0 2px var(--line)}
.b svg{width:20px;height:20px}
.hero{background:linear-gradient(160deg,var(--n),#13386b);color:#fff;padding:2.5rem 0 4rem}
.hero .w{display:grid;gap:2rem;align-items:center}@media(min-width:880px){.hero .w{grid-template-columns:1.15fr .85fr}}
.hero h1{font-size:clamp(2.2rem,1.5rem + 3.4vw,3.6rem)}.hero p{color:#cbd5e1;font-size:1.12rem;max-width:34rem}
.trust{display:flex;flex-wrap:wrap;gap:.5rem 1.2rem;padding:0;margin:1.3rem 0 0;list-style:none;color:#e2e8f0;font-weight:600;font-size:.95rem}
.trust li::before{content:'✓ ';color:var(--y)}
.acts{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.4rem}
.quote-card{background:#fff;color:var(--ink);border-radius:20px;padding:1.4rem;box-shadow:0 30px 60px -30px rgb(0 0 0/60%)}
.quote-card h2{font-size:1.45rem}
label{display:grid;gap:.3rem;font-weight:700;font-size:.95rem;margin-bottom:.8rem}
select,input,textarea{width:100%;min-height:48px;padding:.65rem .8rem;border-radius:10px;border:1.5px solid var(--line);background:#fff;color:var(--ink);font:inherit}
textarea{min-height:96px}
.est{margin:.2rem 0 0;padding:1rem;border-radius:14px;background:#eff6ff;border:1px solid #bfdbfe}
.est .big{display:block;font-size:2rem;font-weight:800;color:var(--b2);letter-spacing:-.02em}
.est p{margin:.3rem 0 0;color:var(--ink2);font-size:.92rem}
.sec{padding:3.2rem 0}.sec h2{font-size:clamp(1.8rem,1.4rem + 1.5vw,2.4rem)}
.grid4{display:grid;gap:1rem}@media(min-width:700px){.grid4{grid-template-columns:1fr 1fr}}@media(min-width:1000px){.grid4{grid-template-columns:repeat(4,1fr)}}
.svc{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.2rem}
.svc i{display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:#dbeafe;color:var(--b);font-style:normal;font-weight:800;margin-bottom:.7rem}
.svc h3{font-size:1.15rem;margin-bottom:.2rem}.svc p{margin:0;color:var(--ink2);font-size:.96rem}
.two{display:grid;gap:1.5rem}@media(min-width:880px){.two{grid-template-columns:1fr 1fr}}
.panel{background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.4rem}
.areas{display:flex;flex-wrap:wrap;gap:.5rem;padding:0;list-style:none;margin:.6rem 0 0}
.areas li{padding:.4rem .85rem;border-radius:999px;background:#eff6ff;color:var(--b2);font-weight:700;font-size:.92rem}
.ok{display:none;text-align:center;padding:1rem}.ok.show{display:block}.ok b{display:grid;place-items:center;width:56px;height:56px;margin:0 auto .8rem;border-radius:50%;background:#dcfce7;color:#15803d;font-size:1.6rem}
.err{color:#b91c1c;font-weight:700;font-size:.92rem;margin:.2rem 0 .8rem}
footer{background:var(--n);color:#cbd5e1;padding:2rem 0 6rem;font-size:.92rem}
.sticky{position:fixed;left:0;right:0;bottom:0;display:flex;gap:.5rem;padding:.6rem 16px calc(.6rem + env(safe-area-inset-bottom));background:#0b2545f2}
.sticky .b{flex:1}@media(min-width:880px){.sticky{display:none}footer{padding-bottom:2rem}}
:focus-visible{outline:3px solid var(--y);outline-offset:2px}
`;
  const phone = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>`;
  const drop = `<svg class="drop" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3s-9 10-9 17a9 9 0 0 0 18 0C25 13 16 3 16 3Z" fill="#facc15"/><path d="M12 21a4 4 0 0 0 4 4" stroke="#0b2545" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`;
  const CALL = 'data-demo="On a real website, this button rings the plumber straight away."';

  const body = `
<p class="emerg">Burst pipe or bad leak? <a href="#" ${CALL}>Call now: 07700 900 456</a></p>
<header class="top"><div class="w"><a class="brand" href="#">${drop}Clearflow Plumbing</a><a class="b" href="#" ${CALL}>${phone}<span>Call</span></a></div></header>
<section class="hero"><div class="w">
  <div>
    <h1>Leaks, blockages and bathrooms, fixed properly.</h1>
    <p>Friendly local plumbers. Check a guide price in seconds below, then get a fixed price before any work starts.</p>
    <div class="acts"><a class="b" href="#" ${CALL}>${phone}Call now</a><a class="b alt" href="#quote">Get a quote</a></div>
    <ul class="trust"><li>Fixed price before we start</li><li>Clean and tidy</li><li>Evenings and weekends</li></ul>
  </div>
  <div class="quote-card" id="guide">
    <h2>Instant price guide</h2>
    <label>What is the problem?<select id="g-job">${JOBS.map(([j], i) => `<option value="${i}">${j}</option>`).join('')}</select></label>
    <label>How soon do you need us?<select id="g-when">${WHEN.map(([w], i) => `<option value="${i}">${w}</option>`).join('')}</select></label>
    <div class="est" aria-live="polite"><span>Guide price</span><span class="big" id="g-price"></span><p id="g-note"></p></div>
  </div>
</div></section>

<section class="sec"><div class="w">
  <h2>What we do</h2>
  <div class="grid4">${SERVICES.map(([t, d], i) => `<div class="svc"><i aria-hidden="true">${i + 1}</i><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>

<section class="sec" id="quote" style="padding-top:0"><div class="w two">
  <div class="panel">
    <h2>Ask for a fixed quote</h2>
    <form id="q-form" novalidate>
      <label>Your name<input id="q-name" autocomplete="name"></label>
      <label>Postcode<input id="q-post" autocomplete="postal-code" placeholder="So we know you are in our area"></label>
      <label>What needs fixing?<textarea id="q-msg" placeholder="e.g. Kitchen tap has dripped for a week, and now it will not turn off fully."></textarea></label>
      <label>Phone number<input id="q-tel" type="tel" autocomplete="tel"></label>
      <p class="err" id="q-err" hidden>Please fill in every box so we can call you back.</p>
      <button class="b blue" type="submit">Send my request</button>
    </form>
    <div class="ok" id="q-ok" role="status"><b aria-hidden="true">✓</b><h3>Request sent</h3><p><strong>This is an example.</strong> On a real website, the request lands in the plumber's email or phone with every detail filled in, so they can call back with a price.</p></div>
  </div>
  <div class="panel">
    <h2>Areas we cover</h2>
    <p>Your Town and about 15 miles around, including:</p>
    <ul class="areas">${AREAS.map((a) => `<li>${a}</li>`).join('')}</ul>
    <h2 style="margin-top:1.6rem">Opening hours</h2>
    <p>Monday to Friday, 8am to 6pm.<br>Saturday, 9am to 1pm.<br>Emergencies: evenings and weekends.</p>
  </div>
</div></section>
<footer><div class="w">Clearflow Plumbing · Your Town · Example website, not a real business.</div></footer>
<div class="sticky"><a class="b" href="#" ${CALL}>${phone}Call now</a><a class="b alt" href="#quote">Quote</a></div>`;

  const js = `
(function(){
  var J = ${JSON.stringify(JOBS)}, W = ${JSON.stringify(WHEN)};
  var job = document.getElementById('g-job'), when = document.getElementById('g-when');
  function upd(){ var j = J[job.value], w = W[when.value];
    document.getElementById('g-price').textContent = '£' + (j[1]+w[1]) + ' to £' + (j[2]+w[1]);
    document.getElementById('g-note').textContent = j[3] + ' ' + w[2] + ' Parts extra if needed. Example prices.'; }
  job.addEventListener('change', upd); when.addEventListener('change', upd); upd();
  document.getElementById('q-form').addEventListener('submit', function(e){
    e.preventDefault();
    var ok = ['q-name','q-post','q-msg','q-tel'].every(function(id){ return document.getElementById(id).value.trim(); });
    document.getElementById('q-err').hidden = ok; if (!ok) return;
    this.hidden = true; document.getElementById('q-ok').classList.add('show');
  });
})();`;

  return demoShell({
    slug: 'plumber',
    title: 'Clearflow Plumbing',
    description: 'An example plumber website with a call-now button, an instant price guide and a quote request form.',
    fonts: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap',
    css, body, js, theme: '#0b2545',
  });
}
