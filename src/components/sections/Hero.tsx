'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GrassCanvas from '@/components/ui/GrassCanvas';
import Magnetic from '@/components/ui/Magnetic';

const line1 = ['Crafted', 'by', 'Nature.'];
const line2 = ['Refined', 'for', 'Design.'];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 1.9 } },
};
const word = {
  hidden: { opacity: 0, y: '110%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <GrassCanvas />
      </motion.div>

      {/* Legibility gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,9,8,0.65)_100%)]" />

      <motion.div style={{ y, opacity }} className="shell relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.7 }}
          className="eyebrow mb-8"
        >
          Ethically Sourced African Leather
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl font-display text-[13vw] font-light leading-[0.94] tracking-tight text-ivory sm:text-7xl lg:text-8xl"
        >
          <span className="block overflow-hidden">
            {line1.map((wd, i) => (
              <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">
                {wd}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {line2.map((wd, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`mr-[0.25em] inline-block italic ${
                  wd === 'Design.' ? 'text-lux' : 'text-ivory/90'
                }`}
              >
                {wd}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-9 max-w-md font-body text-base font-light leading-relaxed text-ivory-dim"
        >
          A trade-only house of rare hides, curated for the world&rsquo;s most
          considered interiors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="mt-11 flex flex-wrap items-center gap-6"
        >
          <Magnetic>
            <a
              href="#products"
              className="group inline-flex items-center gap-3 rounded-full bg-ivory px-8 py-4 font-body text-[13px] uppercase tracking-widest text-ink transition-colors duration-500 hover:bg-gold-bright"
            >
              View the Collection
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </Magnetic>
          <a
            href="#about"
            className="font-body text-[13px] uppercase tracking-widest text-ivory-dim transition-colors hover:text-ivory"
          >
            Our Story
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-body text-[10px] uppercase tracking-label text-ivory-faint">
            Scroll
          </span>
          <motion.span
            animate={{ height: [10, 26, 10], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
