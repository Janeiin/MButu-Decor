import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { site } from '@/lib/site';

// Self-hosted variable fonts (no external requests at build or runtime).
// Fraunces carries the couture display voice; Jost is the quiet body face.
const display = localFont({
  src: [
    { path: '../fonts/Fraunces.woff2', style: 'normal' },
    { path: '../fonts/Fraunces-Italic.woff2', style: 'italic' },
  ],
  weight: '300 500',
  variable: '--font-display',
  display: 'swap',
});

const body = localFont({
  src: [{ path: '../fonts/Jost.woff2', style: 'normal' }],
  weight: '300 500',
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Luxury African Leather`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'zebra hides',
    'African leather',
    'luxury hides',
    'interior design leather',
    'ethically sourced hides',
    'trade only leather',
    'springbok skins',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0a0908',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
