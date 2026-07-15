'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { gallery, type GallerySet } from '@/lib/site';

function Set({ set, index }: { set: GallerySet; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Feature */}
      <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <Reveal>
          <ParallaxImage
            src={set.feature}
            alt={`${set.title} interior`}
            className="aspect-[4/3] w-full rounded-sm"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </Reveal>
      </div>

      {/* Text + support */}
      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <Reveal delay={0.08}>
          <span className="eyebrow">{`0${index + 1}`}</span>
          <h3 className="mt-4 font-display text-4xl font-normal text-charcoal lg:text-5xl">
            {set.title}
          </h3>
          <p className="mt-4 max-w-sm font-body text-base font-light leading-relaxed text-taupe-dark">
            {set.caption}
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {set.support.map((src) => (
            <Reveal key={src} delay={0.12}>
              <ParallaxImage
                src={src}
                alt={`${set.title} detail`}
                amount={8}
                className="aspect-[3/4] w-full rounded-sm"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 sm:py-40">
      <div className="shell">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Where our hides come to <span className="accent">rest.</span>
            </>
          }
        />
        <div className="mt-20 space-y-28 sm:space-y-36">
          {gallery.map((set, i) => (
            <Set key={set.title} set={set} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
