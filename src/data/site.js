// Everything you are likely to change lives in this one file:
// contact details, prices, what each package includes, and the FAQ.

export const site = {
  name: 'Hamropedia Digital',
  url: 'https://digital.hamropedia.com',
  owner: 'Manoj Kumar Thapa',
  email: 'thapam807@gmail.com',
  // Your WhatsApp number in international format with no + or spaces, e.g. '447700900123'.
  // Leave it empty and the WhatsApp buttons are hidden.
  whatsapp: '',
  // The date on the privacy policy. Change it whenever you change the policy.
  privacyUpdated: '2 November 2026',
  description:
    'Simple, fast websites for small businesses across the UK, explained in plain English. Fixed prices from £299, and you own everything.',
  social: {
    github: 'https://github.com/iammanoj807',
    portfolio: 'https://iammanoj807.github.io/profile/',
    linkedin: 'https://www.linkedin.com/in/manoj-kumar-thapa-7595a5168',
  },
};

export const nav = [
  { href: '/services/', label: 'What I do' },
  { href: '/examples/', label: 'Examples' },
  { href: '/prices/', label: 'Prices' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/questions/', label: 'Questions' },
];

// ---------- Prices ----------
// gbp = UK price in pounds, npr = Nepal price in rupees. `from: true` shows "from £…".
export const packages = [
  {
    id: 'starter',
    name: 'Starter',
    what: 'A one-page website',
    gbp: 299,
    npr: 12000,
    time: 'Ready in about 1 week',
    timeNe: 'करिब १ हप्तामा तयार',
    best: 'For businesses that simply need to be found and contacted.',
    bestNe: 'अनलाइन भेटिन र ग्राहकले सम्पर्क गर्न मात्र चाहिने व्यवसायका लागि।',
    includes: [
      'One page with everything a customer needs: what you do, prices, opening hours and where you are',
      'Buttons to call you, message you and get directions in one tap',
      'Looks right on every phone, tablet and computer',
      'A contact form that sends messages to your email',
      'Set up so Google can find and show it',
      'Your own web address (like yourbusiness.co.uk) set up in your name',
    ],
    includesNe: [
      'एउटै पेजमा ग्राहकलाई चाहिने सबै: तपाईं के गर्नुहुन्छ, मूल्य, खुल्ने समय र ठेगाना',
      'एक थिचाइमै फोन गर्ने, म्यासेज पठाउने र नक्सामा बाटो हेर्ने बटन',
      'मोबाइल, ट्याबलेट र कम्प्युटर सबैमा राम्रो देखिने',
      'तपाईंको इमेलमा सन्देश आउने सम्पर्क फारम',
      'गुगलले भेट्टाउने र देखाउने गरी तयार',
      'तपाईंकै नाममा आफ्नै वेब ठेगाना (जस्तै yourbusiness.com.np)',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    what: 'A full website, up to 5 pages',
    gbp: 649,
    npr: 25000,
    featured: true,
    time: 'Ready in about 2 weeks',
    timeNe: 'करिब २ हप्तामा तयार',
    best: 'For businesses that want to look professional and win more customers from Google.',
    bestNe: 'व्यावसायिक देखिन र गुगलबाट धेरै ग्राहक पाउन चाहने व्यवसायका लागि।',
    includes: [
      'Everything in Starter',
      'Up to 5 pages, for example Home, Services, Prices, About and Contact',
      'Your photos, logo and colours, so it feels like your business',
      'Each page written and set up to show up in Google searches',
      'Your Google Business Profile set up or tidied, so you appear on Google Maps',
      'A short video or call showing you how everything works',
    ],
    includesNe: [
      'स्टार्टरमा भएका सबै',
      '५ पेजसम्म, जस्तै होम, सेवा, मूल्य, हाम्रोबारे र सम्पर्क',
      'तपाईंकै फोटो, लोगो र रङ, जसले तपाईंको व्यवसायजस्तै देखाउँछ',
      'गुगल खोजमा देखिने गरी लेखिएका र तयार पारिएका पेज',
      'गुगल म्यापमा देखिन गुगल बिजनेस प्रोफाइल बनाइदिने वा मिलाइदिने',
      'सबै कुरा कसरी चल्छ भनेर देखाउने छोटो भिडियो वा कल',
    ],
  },
  {
    id: 'bookings',
    name: 'Bookings & orders',
    what: 'Let customers book or order online',
    gbp: 999,
    npr: 45000,
    from: true,
    time: 'Ready in about 3 to 4 weeks',
    timeNe: 'करिब ३ देखि ४ हप्तामा तयार',
    best: 'For salons, takeaways, trades and shops that want bookings or orders without phone calls.',
    bestNe: 'फोन बिना नै बुकिङ वा अर्डर लिन चाहने सैलुन, रेस्टुरेन्ट, पसल र सेवा व्यवसायका लागि।',
    includes: [
      'Everything in Business',
      'Online booking, an order form or a small online shop, whichever fits your business',
      'Card payments through a trusted payment company, if you want them',
      'Booking or order alerts sent straight to your phone or email',
      'I explain the options and any monthly fees from booking or payment companies before we start',
    ],
    includesNe: [
      'बिजनेस प्याकेजमा भएका सबै',
      'अनलाइन बुकिङ, अर्डर फारम वा सानो अनलाइन पसल, जुन तपाईंको व्यवसायलाई मिल्छ',
      'चाहनुभयो भने इसेवा, खल्ती वा बैंक क्युआर (QR) बाट भुक्तानी',
      'बुकिङ वा अर्डर आउनासाथ तपाईंको फोन वा इमेलमा सूचना',
      'सुरु गर्नुअघि नै सबै विकल्प र मासिक शुल्क (यदि छ भने) बुझाइदिने',
    ],
  },
];

export const care = {
  name: 'Care plan',
  gbp: 25,
  npr: 1500,
  includes: [
    'Small changes whenever you need them: new prices, photos, opening hours or offers (up to 1 hour of changes a month)',
    'I check every month that your website is working, fast and safe',
    'Help with your Google Business Profile and replying to reviews',
    'No contract: stop any time with one message',
  ],
  includesNe: [
    'चाहिएको बेला साना परिवर्तन: नयाँ मूल्य, फोटो, खुल्ने समय वा अफर (महिनामा १ घण्टासम्म)',
    'वेबसाइट चलिरहेको, छिटो र सुरक्षित छ भनी हरेक महिना जाँच',
    'गुगल बिजनेस प्रोफाइल र रिभ्युको जवाफ दिन सहयोग',
    'कुनै सम्झौता छैन: एउटा म्यासेज पठाएर जुनसुकै बेला रोक्न सकिन्छ',
  ],
};

export const extras = [
  {
    id: 'google',
    name: 'Get found on Google',
    gbp: 79,
    npr: 3000,
    text: 'I set up or fix your free Google Business Profile, so you show up on Google Maps with your hours, photos, phone number and reviews. No website needed.',
    textNe: 'तपाईंको निःशुल्क गुगल बिजनेस प्रोफाइल बनाइदिने वा मिलाइदिने, जसले गुगल म्यापमा तपाईंको खुल्ने समय, फोटो, फोन नम्बर र रिभ्यु देखाउँछ। वेबसाइट नभए पनि हुन्छ।',
  },
  {
    id: 'refresh',
    name: 'Fix or refresh an old website',
    gbp: 199,
    npr: 8000,
    from: true,
    text: 'Your website is slow, looks broken on phones or shows old information. I fix it, or move it to something faster and cheaper to run.',
    textNe: 'पुरानो वेबसाइट ढिलो छ, मोबाइलमा बिग्रिएको देखिन्छ वा पुरानो जानकारी देखाउँछ भने त्यसलाई मिलाइदिने वा छिटो र सस्तो प्रणालीमा सारिदिने।',
  },
  {
    id: 'tools',
    name: 'Custom tools for your business',
    quote: true,
    text: 'Price calculators, quote forms, simple staff tools, or turning a messy spreadsheet into an easy app. Tell me the problem and I will give you a fixed price.',
    textNe: 'मूल्य गणना गर्ने टुल, कोटेसन फारम, कर्मचारीका लागि साना टुल, वा अलमलिने स्प्रेडसिटलाई सजिलो एपमा बदल्ने। समस्या भन्नुहोस्, म निश्चित मूल्य दिन्छु।',
  },
];

// Where the "typical price elsewhere" comparison comes from. Keep it sourced.
export const marketPrice = {
  text: 'A 5-page website from a UK freelancer typically costs £1,500 to £3,000, and £3,000 to £5,000 from an agency.',
  source: 'Whito, UK web design prices 2026',
  url: 'https://whito.co.uk/research/website-design-costs-uk/',
};

// UK businesses without a website. Source: DSIT, UK Business Data Survey 2024 (published 27 June 2024).
export const offlineStat = {
  big: '1 in 3',
  text: 'UK sole traders still has no website. Only 65% have one, against 74% of micro businesses.',
  source: 'UK Business Data Survey 2024, Department for Science, Innovation and Technology',
  url: 'https://www.gov.uk/government/statistics/uk-business-data-survey-2024/uk-business-data-survey-2024',
};

// ---------- Plain-English questions ----------
export const faqs = [
  {
    q: 'I am not good with computers. Is that a problem?',
    a: 'Not at all. This service is made for busy owners who are not technical. You tell me about your business in your own words, and I do the technical parts. I will never send you jargon without explaining it.',
    home: true,
  },
  {
    q: 'How much will I pay in total?',
    a: 'The package price is fixed, so it does not grow halfway through. After launch, the only must-pay cost is your web address (the domain), usually about £5 to £20 a year, paid in your name. Hosting for a small site like this is usually free. The care plan is optional.',
    home: true,
  },
  {
    q: 'Who owns the website?',
    a: 'You do. Your web address is registered in your name, and if you ever want to move on, I hand over everything: the website, the files and all the logins, at no extra cost.',
    home: true,
  },
  {
    q: 'How do I pay?',
    a: 'Half when we start, and the other half when you are happy with the website and before it goes live. You see and check everything first.',
    home: true,
  },
  {
    q: 'Can I change the website myself?',
    a: 'With the care plan, you just send me a message ("new price for haircuts is £18") and I change it for you, usually within two working days. If you would rather edit everything yourself, tell me at the start and I will build it on an easy editor you can use instead.',
    home: true,
  },
  {
    q: 'What is a domain?',
    a: 'Your address on the internet, like yourbusiness.co.uk. People type it to find you, and it can also give you a matching email address, like hello@yourbusiness.co.uk. You rent it by the year, usually for about £5 to £20.',
  },
  {
    q: 'What is hosting?',
    a: 'The computer that keeps your website online, day and night. Think of the domain as your address and the hosting as the building. For small, simple websites like mine, good hosting is usually free.',
  },
  {
    q: 'What is a Google Business Profile?',
    a: 'The box that appears on Google and Google Maps when someone searches for your business, with your hours, phone number, photos and reviews. It is free, and it is one of the best ways for local customers to find you.',
  },
  {
    q: 'What does "SEO" mean?',
    a: 'Search engine optimisation: setting your website up so Google understands what you do and where you are, and shows you to people searching for it. Every package includes the basics.',
  },
  {
    q: 'Do you only work in Birmingham?',
    a: 'No. I work with businesses anywhere in the UK, by phone, video call, WhatsApp or email. I also build websites for businesses in Nepal, with prices in rupees.',
  },
  {
    q: 'I only have a Facebook or Instagram page. Is that enough?',
    a: 'It helps, but many customers search on Google first, and a social page can be hard to find there. A website and a Google Business Profile work for you even when you are not posting.',
  },
  {
    q: 'What if I need something bigger later?',
    a: 'Websites can grow with you. You can start with Starter and add pages, bookings or a shop later, and you only pay the difference in work.',
  },
  {
    q: 'Do you write the words and take the photos?',
    a: 'I write the words with you, from a short chat about your business. Good photos make a big difference: your own phone photos are often fine, and I can tell you exactly what to take.',
  },
];
