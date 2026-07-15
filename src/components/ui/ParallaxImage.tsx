'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SmartImage from './SmartImage';

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** How far the image drifts within its frame, in percent. */
  amount?: number;
  sizes?: string;
  priority?: boolean;
  grayscale?: boolean;
};

/**
 * An image that drifts gently as it passes through the viewport. The frame
 * clips the overflow, so the motion reads as depth rather than displacement.
 */
export default function ParallaxImage({
  src,
  alt,
  className = '',
  amount = 12,
  sizes = '100vw',
  priority,
  grayscale,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ['0%', '0%'] : [`-${amount}%`, `${amount}%`],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-14%]">
        <SmartImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${grayscale ? 'grayscale-[0.15]' : ''}`}
        />
      </motion.div>
    </div>
  );
}
