'use client';

import { ethos } from '@/lib/site';

/** A slow editorial marquee of the brand's core values. */
export default function Ethos() {
  const run = [...ethos, ...ethos];
  return (
    <section className="border-y border-line bg-sand py-8 sm:py-10">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
          {run.map((word, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 font-display text-2xl font-normal italic text-charcoal sm:px-12 sm:text-3xl">
                {word}
              </span>
              <span className="text-clay" aria-hidden>
                &#9670;
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
