'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/lib/site';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setI((p) => (p + 1) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [next, paused]);

  const t = testimonials[i];

  return (
    <section
      className="relative overflow-hidden py-28 sm:py-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Trusted By</span>
        </Reveal>

        {/* Oversized quotation mark */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-4 top-20 select-none font-display text-[22rem] leading-none text-charcoal-light sm:left-10"
        >
          &ldquo;
        </span>

        <div className="relative mx-auto mt-10 min-h-[16rem] max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-3xl font-light italic leading-[1.25] text-ivory sm:text-4xl lg:text-[2.75rem]">
                {t.quote}
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <div>
                  <p className="font-body text-sm uppercase tracking-widest text-ivory">
                    {t.name}
                  </p>
                  <p className="mt-1 font-body text-xs text-ivory-faint">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className="h-[3px] rounded-full transition-all duration-500"
              style={{
                width: idx === i ? 40 : 16,
                background: idx === i ? '#c6a46a' : '#33291b',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
