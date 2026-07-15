'use client';

import { useState } from 'react';
import { site } from '@/lib/site';
import ZebraDivider from '@/components/ui/ZebraDivider';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Wire this to your email platform of choice.
    setSubscribed(true);
    setEmail('');
  }

  return (
    <footer className="relative bg-espresso pt-24 text-ivorytext">
      <div className="shell">
        <ZebraDivider tone="ivory" className="mb-20" />

        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="font-display text-4xl font-normal">
              M<span className="text-clay-gold">&rsquo;</span>Butu
            </a>
            <p className="mt-6 max-w-xs font-body text-sm font-light leading-relaxed text-ivorytext/60">
              {site.tagline}. Ethically sourced in {site.contact.sourced}, curated in{' '}
              {site.contact.location}.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow-light mb-6">Navigate</p>
            <ul className="space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-sm font-light text-ivorytext/60 transition-colors hover:text-ivorytext"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow-light mb-6">The Dispatch</p>
            <p className="mb-5 max-w-xs font-body text-sm font-light leading-relaxed text-ivorytext/60">
              Occasional word on rare arrivals. Nothing more.
            </p>
            {subscribed ? (
              <p className="font-body text-sm text-clay-gold">You are on the list. Thank you.</p>
            ) : (
              <form className="flex items-center gap-3 border-b border-espresso-line pb-3 focus-within:border-clay-gold" onSubmit={subscribe}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full bg-transparent font-body text-sm font-light text-ivorytext placeholder:text-ivorytext/35 focus:outline-none"
                />
                <button type="submit" className="shrink-0 font-body text-[11px] font-medium uppercase tracking-wide2 text-clay-gold">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-espresso-line py-8 sm:flex-row">
          <p className="font-body text-xs text-ivorytext/45">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[11px] font-medium uppercase tracking-wide2 text-ivorytext/45 transition-colors hover:text-clay-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
          <a
            href="#top"
            className="font-body text-[11px] font-medium uppercase tracking-wide2 text-ivorytext/45 transition-colors hover:text-ivorytext"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
