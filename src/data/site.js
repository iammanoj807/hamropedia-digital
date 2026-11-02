// Everything you are likely to change lives in this one file:
// contact details, prices, what each package includes, the AI services and the FAQ.
// If you change the lowest website price, also run: NODE_PATH=../hamropedia/node_modules node scripts/og.mjs

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
  social: {
    github: 'https://github.com/iammanoj807',
    portfolio: 'https://iammanoj807.github.io/profile/',
    linkedin: 'https://www.linkedin.com/in/manoj-kumar-thapa-7595a5168',
  },
};

export const nav = [
  { href: '/services/', label: 'Websites' },
  { href: '/ai/', label: 'AI & automation' },
  { href: '/examples/', label: 'Examples' },
  { href: '/prices/', label: 'Prices' },
  { href: '/questions/', label: 'Questions' },
];

// ---------- Website prices ----------
// gbp = UK price in pounds, npr = Nepal price in rupees. `from: true` shows "from £…".
export const packages = [
  {
    id: 'starter',
    name: 'Starter',
    nameNe: 'स्टार्टर',
    what: 'A one-page website',
    whatNe: 'एक पेजको वेबसाइट',
    gbp: 249,
    npr: 10000,
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
    nameNe: 'बिजनेस',
    what: 'A full website, up to 5 pages',
    whatNe: '५ पेजसम्मको पूरा वेबसाइट',
    gbp: 499,
    npr: 20000,
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
    nameNe: 'बुकिङ र अर्डर',
    what: 'Let customers book or order online',
    whatNe: 'अनलाइन बुकिङ वा अर्डर',
    gbp: 799,
    npr: 35000,
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
  gbp: 19,
  npr: 1200,
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
    nameNe: 'गुगलमा देखिने व्यवस्था',
    gbp: 59,
    npr: 2500,
    text: 'I set up or fix your free Google Business Profile, so you show up on Google Maps with your hours, photos, phone number and reviews. No website needed.',
    textNe: 'तपाईंको निःशुल्क गुगल बिजनेस प्रोफाइल बनाइदिने वा मिलाइदिने, जसले गुगल म्यापमा तपाईंको खुल्ने समय, फोटो, फोन नम्बर र रिभ्यु देखाउँछ। वेबसाइट नभए पनि हुन्छ।',
  },
  {
    id: 'refresh',
    name: 'Fix or refresh an old website',
    nameNe: 'पुरानो वेबसाइट मिलाउने',
    gbp: 149,
    npr: 6000,
    from: true,
    text: 'Your website is slow, looks broken on phones or shows old information. I fix it, or move it to something faster and cheaper to run.',
    textNe: 'पुरानो वेबसाइट ढिलो छ, मोबाइलमा बिग्रिएको देखिन्छ वा पुरानो जानकारी देखाउँछ भने त्यसलाई मिलाइदिने वा छिटो र सस्तो प्रणालीमा सारिदिने।',
  },
  {
    id: 'tools',
    name: 'Custom tools for your business',
    nameNe: 'व्यवसायका लागि विशेष टुल',
    quote: true,
    text: 'Price calculators, quote forms, simple staff tools, or turning a messy spreadsheet into an easy app. Tell me the problem and I will give you a fixed price.',
    textNe: 'मूल्य गणना गर्ने टुल, कोटेसन फारम, कर्मचारीका लागि साना टुल, वा अलमलिने स्प्रेडसिटलाई सजिलो एपमा बदल्ने। समस्या भन्नुहोस्, म निश्चित मूल्य दिन्छु।',
  },
];

// ---------- AI & automation ----------
// gbp/npr = one-off set-up price. monthly/monthlyNpr = monthly fee (0 = none).
export const aiServices = [
  {
    id: 'assistant',
    icon: 'chat',
    name: 'AI assistant for your website',
    nameNe: 'वेबसाइटका लागि एआई सहायक',
    what: 'Answers customer questions day and night, from your own prices, opening hours and services, and takes enquiries or booking requests while you work.',
    whatNe: 'तपाईंकै मूल्य, खुल्ने समय र सेवाका आधारमा दिनरात ग्राहकका प्रश्नको जवाफ दिन्छ, र तपाईं काम गरिरहँदा सोधपुछ वा बुकिङ अनुरोध लिन्छ।',
    example: 'A customer asks at 11pm "how much is a 3-bed end-of-tenancy clean?" and gets the price and a booking request form straight away.',
    gbp: 349, npr: 20000, monthly: 20, monthlyNpr: 1500, from: true,
    includes: [
      'Set up with your own information: prices, services, hours, areas and common questions',
      'Passes anything it is not sure about to you, instead of guessing',
      'You can read every conversation',
      'Monthly fee covers the AI running costs for typical small-business use, updates to its answers and a monthly check',
    ],
  },
  {
    id: 'whatsapp',
    icon: 'whatsapp',
    name: 'WhatsApp assistant',
    nameNe: 'ह्वाट्सएप सहायक',
    what: 'The same assistant inside WhatsApp, where many customers already message small businesses. It replies straight away and sends you the conversations that need you.',
    whatNe: 'त्यही सहायक ह्वाट्सएपभित्र, जहाँ धेरै ग्राहक पहिलेदेखि नै साना व्यवसायलाई म्यासेज गर्छन्। तुरुन्त जवाफ दिन्छ, र तपाईं चाहिने कुराकानी तपाईंलाई पठाउँछ।',
    example: 'A customer messages "are you open Sunday?" while you are busy with someone else, and gets the answer in seconds.',
    gbp: 449, npr: 25000, monthly: 25, monthlyNpr: 2000, from: true,
    includes: [
      'Works on your business WhatsApp number',
      'Instant answers to common questions, any time',
      'Hands the chat to you when a person is needed',
      'Monthly fee covers typical small-business use; very busy accounts get a quote first',
    ],
  },
  {
    id: 'automation',
    icon: 'bolt',
    name: 'Admin automation',
    nameNe: 'प्रशासनिक काम स्वचालित',
    what: 'Hands repetitive admin to software: enquiries into one tidy list, instant replies, appointment reminders, invoices and receipts read into a spreadsheet, and draft replies to reviews.',
    whatNe: 'दोहोरिने काम सफ्टवेयरलाई: सबै सोधपुछ एउटै सूचीमा, तुरुन्त जवाफ, अपोइन्टमेन्ट रिमाइन्डर, बिल र रसिद स्प्रेडसिटमा, र रिभ्युको जवाफको ड्राफ्ट।',
    example: 'Every enquiry from your website and email lands in one spreadsheet, and the customer gets a friendly reply within a minute.',
    gbp: 199, npr: 8000, monthly: 0, monthlyNpr: 0, from: true,
    includes: [
      'Priced per automation, so you start with the one that saves you most time',
      'Works with tools you already use, like Gmail, Outlook, Google Sheets or Excel',
      'Some automations need a small monthly running cost; you will know before we start',
      'Shown to you step by step, so you know exactly what it does',
    ],
  },
  {
    id: 'documents',
    icon: 'search',
    name: 'Ask-your-documents assistant',
    nameNe: 'आफ्नै कागजातबाट जवाफ दिने सहायक',
    what: 'You and your staff ask questions in plain words and get answers only from your own documents, such as manuals, policies, price lists or past quotes.',
    whatNe: 'तपाईं र कर्मचारीले सजिलो भाषामा प्रश्न सोध्नुहुन्छ, र जवाफ तपाईंकै कागजात (म्यानुअल, नीति, मूल्यसूची) बाट मात्र आउँछ।',
    example: 'A new member of staff asks "what is our refund policy for deposits?" and gets the answer from your own policy document.',
    gbp: 499, npr: 25000, monthly: 20, monthlyNpr: 1500, from: true,
    includes: [
      'Answers only from your documents, and shows where each answer came from',
      'Reads scanned PDFs as well as normal files',
      'Private to your business',
      'Monthly fee covers typical use, updates when your documents change, and a monthly check',
    ],
  },
];

// Where the "typical price elsewhere" comparison comes from. Keep it sourced.
export const marketPrice = {
  text: 'A 5-page website from a UK freelancer typically costs £1,500 to £3,000, and £3,000 to £5,000 from an agency.',
  source: 'Whito, UK web design prices 2026',
  url: 'https://whito.co.uk/research/website-design-costs-uk/',
};

// ---------- Sourced facts ----------
export const stats = {
  offline: {
    big: '1 in 3',
    text: 'UK sole traders still has no website. Only 65% have one, against 74% of micro businesses.',
    source: 'UK Business Data Survey 2024, Department for Science, Innovation and Technology',
    url: 'https://www.gov.uk/government/statistics/uk-business-data-survey-2024/uk-business-data-survey-2024',
  },
  ai: {
    big: '28%',
    text: 'of the smallest UK businesses (0 to 9 staff) use any AI, against about 35% of businesses with 10 or more staff.',
    source: 'Office for National Statistics, AI in UK businesses, July 2026',
    url: 'https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026',
  },
  barrier: {
    big: '65%',
    text: 'of businesses not using AI say the business case is unclear: they cannot see what it would do for them.',
    source: 'AI Adoption Survey 2026, GOV.UK',
    url: 'https://www.gov.uk/government/publications/ai-adoption-survey-2026/ai-adoption-survey-report-2026-executive-summary',
  },
};

export const lowestPrice = Math.min(...packages.map((p) => p.gbp));
site.description = `Websites and AI assistants for small businesses across the UK, explained in plain English. Get found on Google, answer customers 24/7 and cut admin. From £${lowestPrice}.`;

// ---------- Plain-English questions ----------
// home: shown on the home page. ai: shown on the AI page.
export const faqs = [
  {
    q: 'I am not good with computers. Is that a problem?',
    a: 'Not at all. This service is made for busy owners who are not technical. You tell me about your business in your own words, and I do the technical parts. I will never send you jargon without explaining it.',
    home: true,
  },
  {
    q: 'How much will I pay in total?',
    a: 'The set-up price is fixed, so it does not grow halfway through. For a website, the only must-pay cost after launch is your web address (the domain), usually about £5 to £20 a year, paid in your name. Hosting for a small site like this is usually free, and the care plan is optional. AI assistants have a monthly fee, shown next to their price.',
    home: true,
  },
  {
    q: 'Who owns the website?',
    a: 'You do. Your web address is registered in your name, and if you ever want to move on, I hand over everything: the website, the files and all the logins, at no extra cost.',
    home: true,
  },
  {
    q: 'How do I pay?',
    a: 'Half when we start, and the other half when you are happy with the work and before it goes live. You see and check everything first.',
    home: true,
  },
  {
    q: 'Can I change the website myself?',
    a: 'With the care plan, you just send me a message ("new price for haircuts is £18") and I change it for you, usually within two working days. If you would rather edit everything yourself, tell me at the start and I will build it on an easy editor you can use instead.',
  },
  {
    q: 'What can AI actually do for a small business like mine?',
    a: 'The most useful jobs are the repetitive ones: answering the same customer questions, taking booking requests, turning messages into one tidy list, reading invoices and receipts, and drafting replies to reviews. In a free chat, I look at how you work and suggest the one or two things that would save you the most time. If AI would not help you, I will say so.',
    home: true,
    ai: true,
  },
  {
    q: 'What if the AI gets something wrong?',
    a: 'AI can make mistakes, so I set it up to answer only from your own information, and to pass anything it is not sure about to you instead of guessing. You can read every conversation, change its answers, or switch it off at any time.',
    ai: true,
  },
  {
    q: 'Will AI replace my staff?',
    a: 'That is not the aim. It takes over repetitive questions and paperwork, so you and your staff spend more time with customers and on the work you are paid for.',
    ai: true,
  },
  {
    q: 'What happens to my customers’ data?',
    a: 'I use well-known AI providers, keep only the information the assistant needs, and set things up to follow UK data protection law (UK GDPR). Before you decide, I explain in plain words where the data goes and who can see it.',
    ai: true,
  },
  {
    q: 'How much does AI cost to run each month?',
    a: 'The monthly fee shown with each AI service covers the AI running costs for typical small-business use, plus updates and a monthly check. If you expect very heavy use, I will quote that before we start, so the price never surprises you.',
    ai: true,
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
    a: 'Search engine optimisation: setting your website up so Google understands what you do and where you are, and shows you to people searching for it. Every website package includes the basics.',
  },
  {
    q: 'What is an "AI assistant"?',
    a: 'A chat box on your website or WhatsApp that reads a customer’s question and writes a helpful answer, like a member of staff who knows your price list by heart. It only uses the information you give it.',
  },
  {
    q: 'Do you only work in Birmingham?',
    a: 'No. I work with businesses anywhere in the UK, by video call, phone or email. I also build websites and AI tools for businesses in Nepal, with prices in rupees.',
  },
  {
    q: 'I only have a Facebook or Instagram page. Is that enough?',
    a: 'It helps, but many customers search on Google first, and a social page can be hard to find there. A website and a Google Business Profile work for you even when you are not posting.',
  },
  {
    q: 'What if I need something bigger later?',
    a: 'Everything can grow with you. You can start with Starter and add pages, bookings, a shop or an AI assistant later, and you only pay for the new work.',
  },
  {
    q: 'Do you write the words and take the photos?',
    a: 'I write the words with you, from a short chat about your business. Good photos make a big difference: your own phone photos are often fine, and I can tell you exactly what to take.',
  },
];
