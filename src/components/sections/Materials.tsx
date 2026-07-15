'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import SmartImage from '@/components/ui/SmartImage';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { materials } from '@/lib/site';

export default function Materials() {
  const [feature, ...rest] = materials;

  return (
    <section id="materials" className="py-28 sm:py-40">
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The Collection"
            title={
              <>
                A curated house of <span className="accent">rare</span> materials.
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="max-w-xs font-body text-sm font-light leading-relaxed text-taupe-dark md:text-right">
              Seven materials, each offered by the hide, graded and documented
              before it is reserved for you.
            </p>
          </Reveal>
        </div>

        {/* Featured material */}
        <Reveal delay={0.1}>
          <a href="#contact" className="group mt-16 grid items-stretch gap-8 overflow-hidden rounded-sm lg:grid-cols-2">
            <ParallaxImage
              src={feature.image}
              alt={feature.name}
              className="aspect-[4/3] w-full lg:aspect-auto lg:h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="flex flex-col justify-center bg-sand p-10 lg:p-16">
              <p className="eyebrow mb-4">{feature.latin}</p>
              <h3 className="font-display text-5xl font-normal text-charcoal lg:text-6xl">
                {feature.name}
              </h3>
              <p className="mt-6 max-w-md font-body text-base font-light leading-relaxed text-charcoal-soft">
                {feature.note}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-body text-[12px] font-medium uppercase tracking-wide2 text-clay">
                Enquire About Availability
                <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
              </span>
            </div>
          </a>
        </Reveal>

        {/* Remaining materials */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.06} className="group">
              <a href="#contact" className="block">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-sand">
                  <motion.div className="absolute inset-0">
                    <SmartImage
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-[1.05]"
                    />
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/45 to-transparent opacity-70" />
                </div>
                <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
                  <div>
                    <h3 className="font-display text-2xl font-normal text-charcoal">{m.name}</h3>
                    <p className="mt-1 font-body text-[11px] uppercase tracking-wide2 text-taupe">{m.latin}</p>
                  </div>
                  <span className="font-body text-clay opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                    &rarr;
                  </span>
                </div>
                <p className="mt-3 font-body text-sm font-light leading-relaxed text-taupe-dark">{m.note}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
