'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SmartImage from '@/components/ui/SmartImage';
import Magnetic from '@/components/ui/Magnetic';
import { media } from '@/lib/site';

export default function Closing() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-12%', '12%']);

  return (
    <section ref={ref} className="relative flex h-[85svh] min-h-[560px] items-center justify-center overflow-hidden bg-espresso">
      <motion.div style={{ y }} className="absolute inset-[-12%]">
        <SmartImage
          src={media.closing}
          alt="A rare hide styled in an exceptional interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-espresso/65" />

      <div className="shell relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl font-display text-4xl font-normal leading-tight text-ivory sm:text-6xl lg:text-7xl"
        >
          Naturally Bold. <span className="italic text-clay-gold">Ethically Sourced.</span>
          <br className="hidden sm:block" /> Exceptionally Rare.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Magnetic>
            <a href="#contact" className="btn-light group">
              Begin Your Project
              <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
