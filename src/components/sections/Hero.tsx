'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SmartImage from '@/components/ui/SmartImage';
import Magnetic from '@/components/ui/Magnetic';
import { media } from '@/lib/site';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-espresso"
    >
      {/* Full-screen image with a long, slow zoom out */}
      <motion.div
        style={{ y }}
        initial={reduce ? undefined : { scale: 1.12 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 16, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <SmartImage
          src={media.hero}
          alt="A rare Hartmann Zebra hide styled in a refined interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Editorial darkening for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-espresso/40" />

      <motion.div style={{ y: textY, opacity }} className="shell relative z-10 pb-24 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="eyebrow-light mb-7"
        >
          Ethically Sourced · CITES Compliant
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-[15vw] font-normal leading-[0.98] text-ivory sm:text-7xl lg:text-8xl"
        >
          Rare African
          <br />
          <span className="italic text-clay-gold">Luxury Hides</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.05 }}
          className="mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-ivory/80"
        >
          Ethically sourced Hartmann Zebra hides for exceptional interiors,
          bespoke furniture and luxury hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="mt-11 flex flex-wrap items-center gap-5"
        >
          <Magnetic>
            <a href="#materials" className="btn-light group">
              Explore the Collection
              <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
            </a>
          </Magnetic>
          <a
            href="#contact"
            className="font-body text-[12px] font-medium uppercase tracking-wide2 text-ivory/70 transition-colors hover:text-ivory"
          >
            Request Catalogue
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 right-8 hidden items-center gap-3 sm:flex"
      >
        <span className="font-body text-[10px] uppercase tracking-label text-ivory/50">Scroll</span>
        <motion.span
          animate={{ height: [10, 26, 10], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px bg-clay-gold"
        />
      </motion.div>
    </section>
  );
}
