'use client';

import { Gem, Sprout, Globe, Armchair, Fingerprint, KeyRound } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { reasons } from '@/lib/site';

const icons = [Gem, Sprout, Globe, Armchair, Fingerprint, KeyRound];

export default function WhyDesigners() {
  return (
    <section id="why" className="relative border-y border-charcoal-line bg-charcoal/30 py-28 sm:py-36">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Why M'Butu"
          title={
            <>
              The reasons the finest studios{' '}
              <span className="italic text-lux">specify us.</span>
            </>
          }
          align="center"
          className="mx-auto text-center"
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-charcoal-line bg-charcoal-line sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={r.label} delay={i * 0.05}>
                <div className="group relative h-full bg-ink px-8 py-12 transition-colors duration-700 hover:bg-charcoal">
                  <div className="flex items-center justify-between">
                    <Icon
                      size={30}
                      strokeWidth={1}
                      className="text-gold-dim transition-colors duration-500 group-hover:text-gold-bright"
                    />
                    <span className="font-display text-4xl font-light text-ivory/90 transition-colors duration-500 group-hover:text-lux">
                      {r.stat}
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-2xl font-light text-ivory">
                    {r.label}
                  </h3>
                  <p className="mt-3 max-w-xs font-body text-sm font-light leading-relaxed text-ivory-dim">
                    {r.body}
                  </p>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 ease-lux group-hover:w-full" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
