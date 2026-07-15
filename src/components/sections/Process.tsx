'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { processSteps } from '@/lib/site';

export default function Process() {
  return (
    <section id="process" className="relative border-t border-charcoal-line py-28 sm:py-36">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="The Process"
          title={
            <>
              Five deliberate steps, from{' '}
              <span className="italic text-lux">plain to place.</span>
            </>
          }
        />

        <div className="relative mt-20">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-3 hidden h-px w-full origin-left bg-gradient-to-r from-gold-dim/60 via-gold/40 to-transparent lg:block"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="mb-8 flex items-center gap-4 lg:block">
                    <span className="relative z-10 block h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-ink" />
                  </div>
                  <span className="font-body text-[11px] tracking-widest text-gold-dim">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-light text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[15rem] font-body text-sm font-light leading-relaxed text-ivory-dim">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
