'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * A restrained house motif: an abstract zebra-stripe band in warm taupe
 * that draws itself in on scroll. Used sparingly between sections.
 */
export default function ZebraDivider({
  className = '',
  tone = 'clay',
}: {
  className?: string;
  tone?: 'clay' | 'ivory';
}) {
  const reduce = useReducedMotion();
  const stripes = [
    { x: 40, w: 6, h: 40 },
    { x: 74, w: 3, h: 26 },
    { x: 102, w: 8, h: 50 },
    { x: 144, w: 4, h: 32 },
    { x: 180, w: 10, h: 58 },
    { x: 228, w: 3, h: 22 },
    { x: 262, w: 7, h: 44 },
    { x: 302, w: 5, h: 36 },
    { x: 338, w: 9, h: 54 },
    { x: 382, w: 4, h: 28 },
    { x: 418, w: 6, h: 42 },
    { x: 456, w: 4, h: 32 },
  ];
  const top = tone === 'clay' ? '#9b7b4f' : '#c6a46a';

  return (
    <div className={`flex justify-center ${className}`} aria-hidden>
      <svg viewBox="0 0 500 76" width="320" height="48" className="max-w-full opacity-80" fill="none">
        <defs>
          <linearGradient id={`zeb-${tone}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={top} stopOpacity="0.05" />
            <stop offset="50%" stopColor={top} stopOpacity="0.75" />
            <stop offset="100%" stopColor={top} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {stripes.map((s, i) => (
          <motion.rect
            key={i}
            x={s.x}
            y={38 - s.h / 2}
            width={s.w}
            height={s.h}
            rx={s.w / 2}
            fill={`url(#zeb-${tone})`}
            initial={reduce ? { opacity: 0.7 } : { scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${s.x + s.w / 2}px 38px` }}
          />
        ))}
      </svg>
    </div>
  );
}
