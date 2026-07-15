/**
 * ─────────────────────────────────────────────────────────────
 *  M'BUTU COLLECTION — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────
 *  All copy, contact details and image URLs live here. To restock
 *  or rebrand the site you only ever edit this file.
 *
 *  IMAGES are referenced through `media` and each item's `image`.
 *  Current values are royalty-free Unsplash placeholders. To use your
 *  own art direction, drop files into /public/images and swap the URL,
 *  for example:  hero: '/images/your-photo.jpg'
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "M'Butu Collection",
  wordmark: "M'Butu",
  tagline: 'Rare African Luxury Hides',
  description:
    "M'Butu Collection sources ethically raised, CITES compliant Hartmann Zebra and rare African hides for exceptional interiors, bespoke furniture and luxury hospitality.",
  url: 'https://mbutu.example.com',
  locale: 'en',

  contact: {
    email: 'atelier@mbutu.co',
    whatsapp: '+974 0000 0000',
    whatsappLink: 'https://wa.me/9740000000',
    location: 'Doha, Qatar',
    sourced: 'Namibia',
    serving: 'Europe, Australia and the GCC',
    hours: 'By appointment',
  },

  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
  ],

  nav: [
    { label: 'The House', href: '#story' },
    { label: 'Why Hartmann', href: '#why' },
    { label: 'Materials', href: '#materials' },
    { label: 'Applications', href: '#applications' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export const media = {
  hero:
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
  story:
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80',
  storyDetail:
    'https://images.unsplash.com/photo-1551845041-63e8e76836ea?auto=format&fit=crop&w=1000&q=80',
  whyFeature:
    'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1400&q=80',
  closing:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
} as const;

/** Scannable brand values shown as an editorial marquee. */
export const ethos = [
  'Rare',
  'Authentic',
  'Ethically Sourced',
  'One of One',
  'Timeless Craftsmanship',
];

/** Scarcity lines, surfaced in several places across the page. */
export const scarcity = [
  'Every Hartmann hide is completely unique.',
  'Only a limited number are legally released each year.',
  'No two hides are ever alike.',
  'Rare African luxury, ethically sourced.',
];

export const whyHartmann = [
  {
    k: 'rarity',
    title: 'Among the rarest',
    body: 'One of the rarest zebra hides available anywhere in the world.',
  },
  {
    k: 'pattern',
    title: 'A refined stripe',
    body: 'Distinguished by a narrower, more delicate stripe than any other zebra.',
  },
  {
    k: 'origin',
    title: 'Native to Namibia',
    body: 'Endemic to the mountains of Namibia, and found nowhere else on earth.',
  },
  {
    k: 'cites',
    title: 'CITES documented',
    body: 'Every hide travels with official CITES documentation and full provenance.',
  },
  {
    k: 'unique',
    title: 'One of one',
    body: 'No two patterns repeat. Each hide is a singular, unrepeatable piece.',
  },
];

export type Material = {
  id: string;
  name: string;
  latin: string;
  note: string;
  image: string;
};

export const materials: Material[] = [
  {
    id: 'hartmann',
    name: 'Hartmann Zebra',
    latin: 'The signature',
    note: 'The rarest of the zebras. A narrow, refined stripe and unmatched depth of tone.',
    image:
      'https://images.unsplash.com/photo-1551845041-63e8e76836ea?auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: 'burchell',
    name: 'Burchell Zebra',
    latin: 'The classic',
    note: 'Bold, broad striping with warm shadow bands. An assured, graphic presence.',
    image:
      'https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: 'springbok',
    name: 'Springbok',
    latin: 'The delicate',
    note: 'Fine, short-haired and light, in tonal bands of cinnamon, cream and umber.',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: 'blesbok',
    name: 'Blesbok',
    latin: 'The understated',
    note: 'Rich mahogany with a pale blaze. Quietly distinctive and endlessly versatile.',
    image:
      'https://images.unsplash.com/photo-1590067596025-4b3a0f6a30cb?auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: 'impala',
    name: 'Impala',
    latin: 'The elegant',
    note: 'Sleek and tonal, a warm russet fading to ivory along the flank.',
    image:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: 'waterbuck',
    name: 'Waterbuck',
    latin: 'The robust',
    note: 'Coarse, characterful and dark, with a presence suited to grand rooms.',
    image:
      'https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=1100&q=80',
  },
  {
    id: 'ostrich',
    name: 'Ostrich Leather',
    latin: 'The exotic',
    note: 'The distinctive quill pattern, supple and rare, finished for interiors.',
    image:
      'https://images.unsplash.com/photo-1620726817608-d4c78f4e7a3a?auto=format&fit=crop&w=1100&q=80',
  },
];

/** Spaces the hides elevate. Copy only, arranged as an editorial list. */
export const applications = [
  'Luxury Homes',
  'Boutique Hotels',
  'Executive Offices',
  'Restaurants',
  'Villas',
  'Penthouses',
  'Yachts',
  'Lodges',
];

export const applicationImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
];

export type GallerySet = {
  title: string;
  caption: string;
  feature: string;
  support: [string, string];
};

export const gallery: GallerySet[] = [
  {
    title: 'Living Spaces',
    caption: 'A single hide anchors the room, warm underfoot and unmistakably rare.',
    feature:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
    support: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Boutique Hotels',
    caption: 'Statement pieces that give a lobby or suite its sense of place.',
    feature:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    support: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Luxury Lodges',
    caption: 'Materials drawn from the land, returned to it with intent.',
    feature:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80',
    support: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Designer Projects',
    caption: 'Commissioned, matched and documented for the studios that specify us.',
    feature:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    support: [
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Furniture & Styling',
    caption: 'Upholstery, throws and detailing, cut from a single provenance.',
    feature:
      'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?auto=format&fit=crop&w=1400&q=80',
    support: [
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

export const trust = [
  'Ethically Sourced',
  'CITES Compliant',
  'International Shipping',
  'Based in Qatar',
  'Sourced in Namibia',
  'Europe · Australia · GCC',
];

export const commercial = [
  {
    title: 'Interior Designers',
    body: 'Source statement pieces for residential and commercial projects.',
    cta: 'Source a Rare Hide',
  },
  {
    title: 'Hospitality',
    body: 'For luxury hotels, lodges and boutique resorts.',
    cta: 'Discuss Your Project',
  },
  {
    title: 'Retail Partners',
    body: 'Consignment partnerships and showroom opportunities.',
    cta: 'Enquire About Availability',
  },
];

export const testimonials = [
  {
    quote:
      'What arrived was not a product. It was the character of the whole room.',
    name: 'Elise Marchand',
    role: 'Principal, Atelier Marchand',
  },
  {
    quote:
      'Consistency across a forty-suite commission was flawless. Provenance documented, every hide singular.',
    name: 'Rashid Al-Fahim',
    role: 'Design Director, Desert Collection Hotels',
  },
  {
    quote:
      'They source what no one else can find, and they never overstate it. Quietly the best in the trade.',
    name: 'Johanna Krige',
    role: 'Interior Architect, Cape Studio',
  },
];
