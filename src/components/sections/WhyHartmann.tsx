'use client';

import { Gem, AlignJustify, Mountain, BadgeCheck, Fingerprint } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { whyHartmann, media } from '@/lib/site';

const icons = [Gem, AlignJustify, Mountain, BadgeCheck, Fingerprint];

export default function WhyHartmann() {
  return (
    <section id="why" className="bg-sand py-28 sm:py-40">
      <div className="shell">
        <SectionHeading
          eyebrow="The Difference"
          title={
            <>
              Why the <span className="accent">Hartmann</span> Zebra?
            </>
          }
          align="center"
          className="mx-auto text-center"
        />
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-xl text-center font-body text-base font-light leading-relaxed text-taupe-dark">
            Our single greatest distinction. The rarest zebra hide in the world,
            legally released in the smallest numbers, and unrepeatable by nature.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ParallaxImage
            src={media.whyFeature}
            alt="Close detail of a Hartmann Zebra hide's refined stripe"
            className="mx-auto mt-16 aspect-[16/7] w-full rounded-sm"
            sizes="100vw"
          />
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {whyHartmann.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.k} delay={i * 0.06}>
                <div className="border-t border-line pt-6">
                  <Icon size={26} strokeWidth={1} className="text-clay" />
                  <h3 className="mt-5 font-display text-2xl font-normal text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm font-light leading-relaxed text-taupe-dark">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
