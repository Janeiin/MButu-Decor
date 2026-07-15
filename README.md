# M'Butu

A cinematic, single-page site for **M'Butu**, a trade-only house of ethically
sourced African leather. Built for luxury interior designers, architects and
five-star lodges. Dark, quiet, expensive.

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

The project builds fully static with zero external calls. Fonts are
self-hosted, so nothing depends on Google Fonts at build or runtime.

---

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js. No settings to change. Click **Deploy**.

That is the whole process. There are no environment variables to set for the
site to run.

---

## Making it yours

Almost everything lives in one file: **`src/lib/site.ts`**.

| What you want to change | Where |
| --- | --- |
| Company name, tagline, contact details, socials | `site` object |
| Navigation links | `site.nav` |
| Product cards (Zebra, Cow, Springbok, etc.) | `products` |
| "Why designers choose us" reasons and stats | `reasons` |
| Process timeline steps | `processSteps` |
| Testimonials | `testimonials` |
| All photography | `media` object |

### Photography

Every image is referenced through the `media` map (and each product's
`image`). The defaults are royalty-free Unsplash placeholders. To use your own
art direction, drop files into `public/images` and point to them:

```ts
about: '/images/your-photo.jpg',
```

Any resolution works. `next/image` handles sizing and optimisation, and if a
remote placeholder ever fails to load the frame falls back to a charcoal
gradient so the layout never breaks.

If you add images from a new remote host, allow it in `next.config.mjs` under
`images.remotePatterns`.

### Ambient sound

`public/audio/ambience.mp3` is a soft looping placeholder (wind through grass).
It is muted by default and only plays when a visitor taps the **Ambience**
toggle in the lower-left corner. Replace that one file with your own loop, same
name and path. See `public/audio/README.md`.

### Colour and type

- Palette tokens: `tailwind.config.ts` (`ink`, `charcoal`, `bronze`, `gold`,
  `ivory`) and the CSS variables in `src/app/globals.css`.
- Brand accent gold is `#C6A46A`.
- Fonts are Fraunces (display) and Jost (body), self-hosted in `src/fonts`.

### Contact form and newsletter

Both are wired to a success state but have no backend by default. Connect them
to your provider of choice inside the submit handlers:

- Enquiry form: `src/components/sections/Contact.tsx`
- Newsletter: `src/components/layout/Footer.tsx`

Good options: a Next.js Route Handler, Formspree, or Resend.

---

## Structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, SEO
│   ├── page.tsx            # section assembly
│   ├── globals.css         # palette, grain, base type
│   ├── icon.svg            # favicon
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/             # Navbar, Footer, Preloader, CursorGlow,
│   │                       # ScrollProgress, AmbientSound
│   ├── sections/           # Hero, About, Products, WhyDesigners,
│   │                       # Gallery, Process, Testimonials, Contact
│   └── ui/                 # Reveal, Magnetic, SmartImage, ZebraDivider,
│                           # GrassCanvas, SectionHeading
├── fonts/                  # self-hosted Fraunces + Jost
└── lib/
    └── site.ts             # single source of truth for content
```

---

## The details

- **Hero** renders on a single canvas: swaying grass silhouettes, drifting dust
  motes and a warm sunrise light that breathes across the frame.
- **Zebra-stripe divider** is the house signature, drawn in on scroll.
- Preloader, magnetic buttons, cursor glow, scroll progress, parallax, fade
  reveals and hover states throughout.
- Fully responsive, keyboard-focus visible, and `prefers-reduced-motion` is
  respected everywhere (animations resolve to a single composed frame).

---

© M'Butu. Placeholder imagery from Unsplash is for demonstration only; replace
before production use.
