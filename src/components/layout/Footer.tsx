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
    <footer className="relative border-t border-charcoal-line bg-ink pt-24">
      <div className="shell">
        <ZebraDivider className="mb-20" />

        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="font-display text-3xl font-light tracking-widest text-ivory"
            >
              M<span className="text-gold">&rsquo;</span>BUTU
            </a>
            <p className="mt-6 max-w-xs font-body text-sm font-light leading-relaxed text-ivory-dim">
              {site.tagline}
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-6">Navigate</p>
            <ul className="space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-sm font-light text-ivory-dim transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">The Dispatch</p>
            <p className="mb-5 max-w-xs font-body text-sm font-light leading-relaxed text-ivory-dim">
              Occasional word on new arrivals and rare pieces. Nothing more.
            </p>
            {subscribed ? (
              <p className="font-body text-sm text-gold-bright">
                You are on the list. Thank you.
              </p>
            ) : (
              <form onSubmit={subscribe} className="flex items-center gap-3 border-b border-charcoal-line pb-3 focus-within:border-gold">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full bg-transparent font-body text-sm font-light text-ivory placeholder:text-ivory-faint/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 font-body text-[12px] uppercase tracking-widest text-gold-bright"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-charcoal-line py-8 sm:flex-row">
          <p className="font-body text-xs text-ivory-faint">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[11px] uppercase tracking-widest text-ivory-faint transition-colors hover:text-gold-bright"
              >
                {s.label}
              </a>
            ))}
          </div>
          <a
            href="#top"
            className="font-body text-[11px] uppercase tracking-widest text-ivory-faint transition-colors hover:text-ivory"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
