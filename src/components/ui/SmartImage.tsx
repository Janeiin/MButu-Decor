'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * next/image wrapper. If a remote placeholder fails to load, the frame
 * gracefully falls back to a charcoal gradient so the layout never breaks.
 */
export default function SmartImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority,
  className,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={`h-full w-full bg-gradient-to-br from-charcoal-light via-charcoal to-ink ${className ?? ''}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
