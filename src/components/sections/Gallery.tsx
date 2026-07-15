'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import SmartImage from '@/components/ui/SmartImage';
import { media } from '@/lib/site';

// Varied aspect ratios keep the masonry from reading as a uniform grid.
const ratios = [
  'aspect-[3/4]',
  'aspect-[4/5]',
  'aspect-square',
  'aspect-[3/4]',
  'aspect-[4/5]',
  'aspect-square',
  'aspect-[3/4]',
  'aspect-[4/5]',
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 sm:py-36">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="In Context"
          title={
            <>
              Where our hides come to{' '}
              <span className="italic text-lux">rest.</span>
            </>
          }
        />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {media.gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.08} className="mb-5 block break-inside-avoid">
              <div className="group relative overflow-hidden rounded-sm bg-charcoal">
                <div className={`relative w-full ${ratios[i % ratios.length]}`}>
                  <SmartImage
                    src={src}
                    alt="Leather and interior detail"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale-[0.3] transition-all duration-[1400ms] ease-lux group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-ink/20 transition-colors duration-700 group-hover:bg-ink/0" />
                <div className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-transparent transition-all duration-700 group-hover:ring-gold/25" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
