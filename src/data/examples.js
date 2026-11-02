// Example websites for made-up businesses: real, working pages that owners can try on their phone.
export const demos = [
  {
    slug: 'ai-assistant',
    name: 'Bright Nest Cleaning',
    type: 'AI assistant & automation',
    package: 'Starter + AI assistant',
    summary: 'A cleaning company whose AI assistant answers customers and takes booking requests, while the owner is out cleaning.',
    shows: [
      'An assistant that answers prices, areas and booking questions',
      'A "behind the scenes" panel showing the admin it does for the owner',
      'Questions it cannot answer are passed to the owner, not guessed',
      'An instant quote for different sizes of home',
    ],
    accent: '#7c3aed',
  },
  {
    slug: 'momo-kitchen',
    name: 'Himal Momo Kitchen',
    type: 'Takeaway & restaurant',
    package: 'Business',
    summary: 'A takeaway that wants more orders and fewer "are you open?" phone calls.',
    shows: [
      'A menu with prices that is easy to read on a phone',
      'Order by phone or message in one tap',
      'Opening hours that show if it is open right now',
      'Allergy information and directions',
    ],
    accent: '#c2410c',
  },
  {
    slug: 'barber',
    name: 'Sharp Line Barbers',
    type: 'Barber & salon',
    package: 'Bookings & orders',
    summary: 'A barber that wants customers to book a slot without calling during a haircut.',
    shows: [
      'A clear price list',
      'Pick a service, a day and a time, and book',
      'Booking confirmation, shown on screen',
      'Opening hours and a map',
    ],
    accent: '#0f766e',
  },
];

// Real projects. Facts and numbers come from the portfolio (iammanoj807.github.io/profile); keep them exact.
export const projects = [
  {
    slug: 'planck',
    name: 'Planck AI',
    kind: 'AI research assistant',
    plain: 'Ask it anything. It searches the web, reads PDFs and web pages, looks at images and runs code to work out the answer. If one AI provider stops working, it switches to another and carries on.',
    proof: 'In testing it finished 30 of 30 tasks even with its main AI provider switched off on every call.',
    forYou: 'The same approach keeps a business assistant answering customers even when one AI service is down.',
    demo: 'https://huggingface.co/spaces/manojthapaa/planck-ai',
    code: 'https://github.com/iammanoj807/planck-ai',
  },
  {
    slug: 'cognigraph',
    name: 'CogniGraph',
    kind: 'Talk to your documents',
    plain: 'Upload documents, including scanned PDFs, and ask questions about them. It answers only from passages it finds in your documents, and shows how the ideas connect on a 3D map.',
    proof: 'In testing it found the right passage in its top 3 results 95% of the time, against 80% for simple keyword search.',
    forYou: 'Could be adapted so you and your staff get answers from your own manuals, policies or price lists.',
    demo: 'https://huggingface.co/spaces/manojthapaa/CogniGraph',
    code: 'https://github.com/iammanoj807/CogniGraph',
  },
  {
    slug: 'neuroarc',
    name: 'NeuroArc',
    kind: 'AI job application assistant',
    plain: 'Reads a CV (PDF or Word), finds live UK jobs and checks how well the CV fits each one. It only counts skills when it can quote the evidence word for word from the CV.',
    proof: 'Built so the AI returns its evidence as exact phrases, and the code throws out anything not found in the document.',
    forYou: 'The same evidence check can help when reading forms, CVs or documents for a business: answers have to point to what is actually written.',
    demo: 'https://huggingface.co/spaces/manojthapaa/NeuroArc',
    code: 'https://github.com/iammanoj807/NeuroArc',
  },
  {
    slug: 'fruitguard',
    name: 'FruitGuard AI',
    kind: 'Camera AI (MSc dissertation)',
    plain: 'Recognises fruit through a camera in real time, at 73 frames a second. It was trained from only 207 labelled photos.',
    proof: '96.3% accuracy in testing (52 of 54 images).',
    forYou: 'Could be adapted to camera checks for a business, such as spotting products on a shelf.',
    demo: 'https://huggingface.co/spaces/manojthapaa/fruit-guard-ai',
  },
];
