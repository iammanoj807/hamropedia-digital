import { site, packages, care, extras } from '../data/site.js';
import { demos } from '../data/examples.js';
import { layout, ICONS, esc, npr, mailLink, waLink, breadcrumbSchema } from '../layout.js';

const tick = (x) => `<li>${ICONS.check}${esc(x)}</li>`;
const NAME_NE = { starter: 'स्टार्टर', business: 'बिजनेस', bookings: 'बुकिङ र अर्डर' };
const WHAT_NE = { starter: 'एक पेजको वेबसाइट', business: '५ पेजसम्मको पूरा वेबसाइट', bookings: 'अनलाइन बुकिङ वा अर्डर' };
const EXTRA_NE = ['गुगलमा देखिने व्यवस्था', 'पुरानो वेबसाइट मिलाउने', 'व्यवसायका लागि विशेष टुल'];

export function renderNepal(version) {
  const wa = waLink('नमस्ते मनोज जी, मलाई मेरो व्यवसायका लागि वेबसाइट चाहियो।');
  const body = `<section class="page-head">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span aria-hidden="true">/</span> <span aria-current="page">नेपाल</span></nav>
    <p class="eyebrow">नेपालका व्यवसायका लागि</p>
    <h1>तपाईंको व्यवसायलाई अनलाइन ल्याउनुहोस्, सजिलो भाषामा</h1>
    <p class="lead">पसल, रेस्टुरेन्ट, होटल, क्लिनिक, कन्सल्टेन्सी वा जुनसुकै सानो व्यवसायका लागि छिटो र सफा वेबसाइट। सुरुमै एउटै निश्चित मूल्य, र वेबसाइट तपाईंकै नाममा।</p>
    <p class="lang-note" lang="en">This page is for businesses in Nepal, with prices in Nepali rupees. For the UK, see <a href="/prices/">prices in pounds</a>.</p>
  </div>
</section>

<section class="wrap section">
  <div class="section-head center"><h2>किन वेबसाइट?</h2></div>
  <div class="get-grid">
    <div class="get"><span class="icon-tile">${ICONS.search}</span><div><h3>गुगलमा भेटिनुहोस्</h3><p>मानिसहरू पहिले मोबाइलमा खोज्छन्। वेबसाइट र गुगल बिजनेस प्रोफाइल भए तपाईं त्यहीँ देखिनुहुन्छ।</p></div></div>
    <div class="get"><span class="icon-tile">${ICONS.chat}</span><div><h3>एउटै प्रश्नको जवाफ बारम्बार नदिनुहोस्</h3><p>मूल्य, खुल्ने समय र ठेगाना एकै ठाउँमा, ताकि फोन वास्तविक अर्डरका लागि मात्र आओस्।</p></div></div>
    <div class="get"><span class="icon-tile">${ICONS.star}</span><div><h3>भरोसा बढाउनुहोस्</h3><p>फेसबुक पेज मात्र भन्दा आफ्नै वेबसाइटले व्यवसायलाई व्यावसायिक र भरपर्दो देखाउँछ।</p></div></div>
  </div>
</section>

<section class="band">
  <div class="wrap section">
    <div class="section-head center"><h2>मूल्य (नेपाली रुपैयाँमा)</h2><p class="section-lead">एक पटक तिर्ने निश्चित मूल्य। काम सुरु गर्दा आधा, र वेबसाइट मन परेपछि मात्र बाँकी आधा।</p></div>
    <div class="price-grid">${packages.map((p) => `<article class="price-card${p.featured ? ' featured' : ''}">
      ${p.featured ? '<p class="badge">धेरैजसो व्यवसायका लागि उत्तम</p>' : ''}
      <h3>${NAME_NE[p.id]}</h3>
      <p class="price-what">${WHAT_NE[p.id]}</p>
      <p class="price">${p.from ? '<small>देखि</small> ' : ''}${npr(p.npr)}<span>एक पटक</span></p>
      <p class="price-time">${ICONS.calendar}${esc(p.timeNe)}</p>
      <p class="price-best">${esc(p.bestNe)}</p>
      <ul class="ticks">${p.includesNe.map(tick).join('')}</ul>
    </article>`).join('')}</div>
    <div class="care-box">
      <div><h2>केयर प्लान: ${npr(care.npr)} प्रति महिना</h2><p>ऐच्छिक। तपाईं के बदल्ने भनेर म्यासेज पठाउनुहोस्, म बदलिदिन्छु।</p></div>
      <ul class="ticks">${care.includesNe.map(tick).join('')}</ul>
    </div>
    <div class="extra-grid">
      ${extras.map((x, n) => `<article class="extra"><h3>${EXTRA_NE[n]}</h3><p class="extra-price">${x.quote ? 'निःशुल्क कुराकानीपछि निश्चित मूल्य' : `${npr(x.npr)}${x.from ? ' देखि' : ''}`}</p><p>${esc(x.textNe)}</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="wrap section narrow">
  <h2>पछि लाग्ने खर्च</h2>
  <ul class="ticks">
    <li>${ICONS.check}<span><strong>वेब ठेगाना (डोमेन):</strong> तपाईंकै नाममा दर्ता हुन्छ। दर्ता भएका व्यवसायका लागि आधिकारिक रजिस्ट्री (<a href="https://register.com.np/" rel="noopener">register.com.np</a>) बाट .com.np ठेगाना निःशुल्क पाइन्छ। .com ठेगानाका लागि सानो वार्षिक शुल्क लाग्छ।</span></li>
    <li>${ICONS.check}<span><strong>होस्टिङ:</strong> यस्तो साधारण वेबसाइटका लागि प्रायः निःशुल्क। शुल्क लाग्ने भए पहिले नै भनिन्छ।</span></li>
    <li>${ICONS.check}<span><strong>केयर प्लान:</strong> ऐच्छिक, जुनसुकै बेला रोक्न सकिन्छ।</span></li>
  </ul>
  <h2>कसरी काम हुन्छ</h2>
  <ol class="mini-steps">
    <li>भाइबर, ह्वाट्सएप, फोन वा इमेलमा निःशुल्क कुराकानी।</li>
    <li>म सजिलो भाषामा योजना र एउटै निश्चित मूल्य पठाउँछु।</li>
    <li>म वेबसाइट बनाउँछु, तपाईं हेरेर जे बदल्नुपर्छ भन्नुहुन्छ।</li>
    <li>मन परेपछि वेबसाइट सुरु हुन्छ, र म गुगलमा देखिने व्यवस्था मिलाउँछु।</li>
  </ol>
  <h2>नमुना वेबसाइटहरू</h2>
  <p>काल्पनिक व्यवसायका लागि बनाइएका, चल्ने नमुना वेबसाइट। आफ्नो मोबाइलमा खोलेर हेर्नुहोस्:</p>
  <ul class="ex-links">${demos.map((d) => `<li><a href="/examples/${d.slug}/" lang="en">${esc(d.name)}</a> <span class="muted" lang="en">(${esc(d.type)})</span></li>`).join('')}</ul>
</section>

<section class="cta-band">
  <div class="wrap cta-inner">
    <div><h2>तपाईंको व्यवसायका बारेमा बताउनुहोस्</h2><p>निःशुल्क, कुनै बाध्यता छैन। म निश्चित मूल्यसहित जवाफ दिन्छु।</p></div>
    <div class="btn-row">
      <a class="btn btn-lg" href="${mailLink('वेबसाइटका लागि सोधपुछ (नेपाल)')}">${ICONS.mail} इमेल पठाउनुहोस्</a>
      ${wa ? `<a class="btn btn-ghost btn-lg" href="${wa}" rel="noopener">${ICONS.whatsapp} ह्वाट्सएप</a>` : ''}
    </div>
  </div>
</section>`;
  return layout({
    title: `नेपालका व्यवसायका लागि वेबसाइट, ${npr(packages[0].npr)} देखि | ${site.name}`,
    ogTitle: 'नेपालका व्यवसायका लागि सजिलो र छिटो वेबसाइट',
    description: `नेपालका साना व्यवसायका लागि निश्चित मूल्यमा वेबसाइट: एक पेज ${npr(packages[0].npr)}, ५ पेजसम्म ${npr(packages[1].npr)}, अनलाइन बुकिङ ${npr(packages[2].npr)} देखि। सजिलो भाषामा, तपाईंकै नाममा।`,
    path: '/nepal/', body, version, lang: 'ne',
    schema: [breadcrumbSchema([{ name: 'नेपाल', path: '/nepal/' }])],
  });
}
