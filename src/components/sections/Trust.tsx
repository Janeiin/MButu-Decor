'use client';

import Reveal from '@/components/ui/Reveal';
import { trust, scarcity } from '@/lib/site';

export default function Trust() {
  return (
    <section className="bg-espresso py-20 text-ivorytext sm:py-24">
      <div className="shell text-center">
        <Reveal>
          <p className="mx-auto max-w-3xl font-display text-3xl font-normal italic leading-snug text-ivorytext sm:text-4xl">
            {scarcity[3]}
          </p>
        </Reveal>
        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {trust.map((item, i) => (
            <Reveal key={item} delay={i * 0.05} as="span">
              <span className="font-body text-[11px] font-medium uppercase tracking-wide2 text-ivorytext/70">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
