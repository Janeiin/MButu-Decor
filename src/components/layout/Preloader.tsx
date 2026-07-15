'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const delay = reduce ? 300 : 1800;
    const timer = setTimeout(() => setDone(true), delay);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.4em' }}
              animate={{ opacity: 1, letterSpacing: '0.08em' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-normal text-charcoal sm:text-5xl"
            >
              M<span className="accent">&rsquo;</span>Butu
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 h-px w-40 origin-left rule"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-5 eyebrow"
            >
              Rare African Luxury Hides
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
