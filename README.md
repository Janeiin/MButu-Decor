# M'Butu Collection

A warm, editorial single-page site for **M'Butu Collection**, a trade-only house
of rare, ethically sourced African hides. Designed in the register of luxury
interior and furniture houses (Aman, Minotti, Poliform): calm, spacious, and
photography led.

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

The site builds fully static with zero external calls. Fonts are self-hosted,
so nothing depends on Google Fonts at build or runtime.

---

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js. No settings to change. Click **Deploy**.

There are no environment variables required for the site to run.

---

## Design system

- **Palette** (in `tailwind.config.ts` and `src/app/globals.css`): warm `ivory`
  page ground, `sand` alternate panels, `charcoal` text, `taupe` for muted copy
  and labels, `espresso` for dark editorial sections, and a restrained `clay`
  bronze accent (`#9B7B4F`, with `#C6A46A` on dark).
- **Type**: Cormorant Garamond (editorial display serif) paired with Manrope
  (clean sans for body and interface). Both self-hosted in `src/fonts`.
- **Motion**: fade-up reveals, gentle image parallax, slow hero zoom, soft hover
  states. `prefers-reduced-motion` is respected everywhere.

Sections flow through alternating ivory, sand and espresso grounds for editorial
rhythm: Hero, Ethos marquee, The House, Why Hartmann, Materials, Applications,
Gallery, Trust, For the Trade, Testimonials, Contact, and a full-bleed Closing.

---

## Making it yours

Almost everything lives in **`src/lib/site.ts`**.

| What you want to change | Where |
| --- | --- |
| Name, tagline, contact, socials | `site` |
| Navigation | `site.nav` |
| Marquee values (Rare, Authentic, ...) | `ethos` |
| Scarcity lines used throughout | `scarcity` |
| Why Hartmann Zebra points | `whyHartmann` |
| Materials (Hartmann, Burchell, Springbok, ...) | `materials` |
| Applications / spaces | `applications` |
| Gallery sections (Living Spaces, ...) | `gallery` |
| Trust chips | `trust` |
| Trade cards | `commercial` |
| Testimonials | `testimonials` |
| Feature imagery (hero, story, closing) | `media` |

### Photography

Every image resolves through the `media` map and each item's `image`. The
current values are royalty-free Unsplash placeholders. To use your own art
direction, drop files into `public/images` and point to them:

```ts
hero: '/images/your-hero.jpg',
```

`next/image` handles sizing and optimisation. If a placeholder ever fails to
load, the frame falls back to a warm sand gradient so the layout never breaks.
To add a new remote host, list it in `next.config.mjs` under
`images.remotePatterns`.

### Calls to action and forms

The enquiry form and newsletter show success states but have no backend by
default. Wire them to your provider (a Route Handler, Formspree, or Resend) in:

- `src/components/sections/Contact.tsx`
- `src/components/layout/Footer.tsx`

---

## Structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, SEO
│   ├── page.tsx            # section order
│   ├── globals.css         # palette, base type, buttons, grain
│   ├── icon.svg · robots.ts · sitemap.ts
├── components/
│   ├── layout/             # Navbar, Footer, Preloader, ScrollProgress
│   ├── sections/           # Hero, Ethos, Story, WhyHartmann, Materials,
│   │                       # Applications, Gallery, Trust, Commercial,
│   │                       # Testimonials, Contact, Closing
│   └── ui/                 # Reveal, Magnetic, ParallaxImage, SmartImage,
│                           # SectionHeading, ZebraDivider
├── fonts/                  # self-hosted Cormorant Garamond + Manrope
└── lib/site.ts             # single source of truth for content
```

---

© M'Butu Collection. Placeholder imagery from Unsplash is for demonstration
only; replace before production use.
