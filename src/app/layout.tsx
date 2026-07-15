import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { site } from '@/lib/site';

// Self-hosted fonts (no external requests at build or runtime).
// Cormorant Garamond is the editorial display serif; Manrope is the
// clean, warm sans for body and interface text.
const display = localFont({
  src: [
    { path: '../fonts/Cormorant-300.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/Cormorant-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Cormorant-400-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../fonts/Cormorant-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Cormorant-500-Italic.woff2', weight: '500', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
});

const body = localFont({
  src: [{ path: '../fonts/Manrope.woff2', style: 'normal' }],
  weight: '200 700',
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
  themeColor: '#f4efe7',
  colorScheme: 'light',
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
