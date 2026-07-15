/**
 * ─────────────────────────────────────────────────────────────
 *  M'BUTU — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────
 *  Every piece of copy, contact detail and image URL lives here.
 *  To rebrand or restock the site you only ever edit this file.
 *
 *  IMAGES
 *  All photography is referenced through `media` below. The current
 *  values are royalty-free Unsplash URLs used as placeholders. To use
 *  your own art direction, drop files into /public/images and swap the
 *  URL, for example:  hero: '/images/your-photo.jpg'
 *  Sizes are already handled by next/image, so any resolution works.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "M'Butu",
  tagline: 'The Finest African Leather, Curated for Exceptional Interiors',
  description:
    "M'Butu is a trade-only house sourcing ethically raised zebra, springbok and premium African hides for luxury interiors, architects and five-star lodges.",
  url: 'https://mbutu.example.com',
  locale: 'en',

  contact: {
    email: 'atelier@mbutu.co',
    whatsapp: '+974 0000 0000',
    whatsappLink: 'https://wa.me/9740000000',
    location: 'Doha, Qatar',
    hours: 'By appointment',
  },

  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
  ],

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Collection', href: '#products' },
    { label: 'Atelier', href: '#why' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

/**
 * MEDIA MAP — swap any URL for a local file in /public/images.
 */
export const media = {
  about:
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80',
  aboutDetail:
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80',
  ],
} as const;

export type Product = {
  id: string;
  name: string;
  origin: string;
  note: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 'zebra',
    name: 'Zebra Hides',
    origin: "Hartmann's Mountain",
    note: 'Each pattern singular, never repeated. The signature of the house.',
    image:
      'https://images.unsplash.com/photo-1551845041-63e8e76836ea?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'cow',
    name: 'Cow Hides',
    origin: 'Free-range herds',
    note: 'Full-grain character, supple hand, built for a lifetime of use.',
    image:
      'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'springbok',
    name: 'Springbok',
    origin: 'Karoo plains',
    note: 'Fine, short-haired and light. A restrained, tonal elegance.',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'skins',
    name: 'Leather Skins',
    origin: 'Tannery-finished',
    note: 'Vegetable-tanned surfaces in a palette of earth and shadow.',
    image:
      'https://images.unsplash.com/photo-1620726817608-d4c78f4e7a3a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'custom',
    name: 'Custom Sourcing',
    origin: 'On commission',
    note: 'A private brief, matched hide by hide to your specification.',
    image:
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&q=80',
  },
];

export const reasons = [
  {
    stat: '100%',
    label: 'Premium Quality',
    body: 'Every hide graded by hand. Only the top tier reaches our clients.',
  },
  {
    stat: 'Full',
    label: 'Ethically Sourced',
    body: 'Traceable, responsibly managed origins. Nothing else is accepted.',
  },
  {
    stat: '40+',
    label: 'Global Shipping',
    body: 'Discreet worldwide delivery, fully documented and insured.',
  },
  {
    stat: '5★',
    label: 'Luxury Interiors',
    body: 'Trusted by lodges, hoteliers and the studios that shape them.',
  },
  {
    stat: '1:1',
    label: 'Unique Natural Patterns',
    body: 'No two hides alike. Each carries its own quiet signature.',
  },
  {
    stat: 'Trade',
    label: 'Trade Only',
    body: 'Reserved for designers, architects and specifiers. By introduction.',
  },
];

export const processSteps = [
  {
    n: '01',
    title: 'Source',
    body: 'We work only with responsibly managed origins across Southern Africa.',
  },
  {
    n: '02',
    title: 'Select',
    body: 'Hides are chosen by hand for pattern, scale and structural integrity.',
  },
  {
    n: '03',
    title: 'Inspect',
    body: 'Each piece is graded, measured and photographed before it is offered.',
  },
  {
    n: '04',
    title: 'Ship',
    body: 'Climate-considered packing and fully insured, documented transit.',
  },
  {
    n: '05',
    title: 'Deliver',
    body: 'Your selection arrives ready to install, with provenance in hand.',
  },
];

export const testimonials = [
  {
    quote:
      'M\u2019Butu understands restraint. What they sent was not a product, it was the character of the whole room.',
    name: 'Elise Marchand',
    role: 'Principal, Atelier Marchand',
  },
  {
    quote:
      'The consistency across a forty-suite commission was flawless. Provenance documented, every hide singular.',
    name: 'Rashid Al-Fahim',
    role: 'Design Director, Desert Collection Hotels',
  },
  {
    quote:
      'Quietly the best in the trade. They source what no one else can find, and they never overstate it.',
    name: 'Johanna Krige',
    role: 'Interior Architect, Cape Studio',
  },
];
