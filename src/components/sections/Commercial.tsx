'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { commercial } from '@/lib/site';

export default function Commercial() {
  return (
    <section id="trade" className="py-28 sm:py-40">
      <div className="shell">
        <SectionHeading
          eyebrow="For the Trade"
          title={
            <>
              Partnerships built on <span className="accent">discretion.</span>
            </>
          }
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {commercial.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col justify-between rounded-sm border border-line bg-ivory-deep p-10 transition-colors duration-500 hover:border-clay/50">
                <div>
                  <span className="font-body text-[11px] tracking-wide2 text-clay">{`0${i + 1}`}</span>
                  <h3 className="mt-6 font-display text-3xl font-normal text-charcoal">{c.title}</h3>
                  <p className="mt-4 font-body text-base font-light leading-relaxed text-taupe-dark">
                    {c.body}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-2 font-body text-[12px] font-medium uppercase tracking-wide2 text-charcoal transition-colors group-hover:text-clay"
                >
                  {c.cta}
                  <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
