'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import SmartImage from '@/components/ui/SmartImage';
import { media } from '@/lib/site';

const values = [
  { k: 'Ethical Sourcing', v: 'Responsibly managed origins, fully traceable.' },
  { k: 'Craftsmanship', v: 'Graded and finished by practised hands.' },
  { k: 'Natural Beauty', v: 'Patterns no studio could ever draw.' },
  { k: 'Responsible Trade', v: 'A quiet standard, never compromised.' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <SectionHeading
            index="01"
            eyebrow="The House"
            title={
              <>
                Rare hides, gathered with{' '}
                <span className="italic text-lux">reverence</span> for their origin.
              </>
            }
          />

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-lg font-body text-lg font-light leading-relaxed text-ivory-dim">
              M&rsquo;Butu began with a simple conviction. That the most
              extraordinary materials on earth deserve to be handled with
              patience, not haste. We work across Southern Africa with origins
              we know by name, selecting hides for their character and their
              conscience in equal measure.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg font-body text-base font-light leading-relaxed text-ivory-faint">
              What arrives at your studio carries a heritage. A provenance. And a
              quiet assurance that nothing was taken without care.
            </p>
          </Reveal>

          <div ref={ref} className="mt-14 grid grid-cols-2 gap-x-8 gap-y-9">
            {values.map((item, i) => (
              <Reveal key={item.k} delay={0.05 * i}>
                <div className="border-t border-charcoal-line pt-5">
                  <h3 className="font-display text-lg font-normal text-ivory">
                    {item.k}
                  </h3>
                  <p className="mt-2 font-body text-sm font-light leading-relaxed text-ivory-faint">
                    {item.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
                <SmartImage
                  src={media.about}
                  alt="Full-grain leather surface in warm light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex items-center justify-between border-t border-charcoal-line pt-6">
              <p className="font-display text-2xl font-light text-ivory">
                Est. in respect for the land
              </p>
              <p className="eyebrow">Southern Africa</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
