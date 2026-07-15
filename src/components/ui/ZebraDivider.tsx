'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Signature element: an abstract zebra-stripe band that draws itself in
 * on scroll. Used to separate major sections with a house motif rather
 * than a plain rule.
 */
export default function ZebraDivider({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion();

  // Hand-tuned stripe geometry: varying widths and gentle sway, never uniform.
  const stripes = [
    { x: 40, w: 7, h: 46 },
    { x: 78, w: 4, h: 30 },
    { x: 108, w: 9, h: 56 },
    { x: 152, w: 5, h: 38 },
    { x: 190, w: 11, h: 64 },
    { x: 240, w: 4, h: 26 },
    { x: 276, w: 8, h: 50 },
    { x: 318, w: 6, h: 42 },
    { x: 356, w: 10, h: 60 },
    { x: 402, w: 4, h: 32 },
    { x: 438, w: 7, h: 48 },
    { x: 478, w: 5, h: 36 },
  ];

  return (
    <div className={`flex justify-center ${className}`} aria-hidden>
      <svg
        viewBox="0 0 520 80"
        width="360"
        height="56"
        className="max-w-full opacity-70"
        fill="none"
      >
        <defs>
          <linearGradient id="zebraGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d8bc86" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#c6a46a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6e5a3e" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {stripes.map((s, i) => (
          <motion.rect
            key={i}
            x={s.x}
            y={40 - s.h / 2}
            width={s.w}
            height={s.h}
            rx={s.w / 2}
            fill="url(#zebraGold)"
            initial={reduce ? { opacity: 0.6 } : { scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: `${s.x + s.w / 2}px 40px` }}
          />
        ))}
      </svg>
    </div>
  );
}
