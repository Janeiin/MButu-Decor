'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { applications, applicationImages } from '@/lib/site';

export default function Applications() {
  return (
    <section id="applications" className="bg-sand py-28 sm:py-40">
      <div className="shell">
        <SectionHeading
          eyebrow="In Situ"
          title={
            <>
              Materials that elevate the{' '}
              <span className="accent">spaces</span> they enter.
            </>
          }
          align="center"
          className="mx-auto text-center"
        />
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-xl text-center font-body text-base font-light leading-relaxed text-taupe-dark">
            People choose the atmosphere, not only the material. A single hide can
            define the character of an entire room.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {applications.map((space, i) => (
              <li key={space} className="flex items-center gap-6">
                <span className="font-display text-2xl font-normal italic text-charcoal sm:text-3xl">
                  {space}
                </span>
                {i < applications.length - 1 && (
                  <span className="text-clay" aria-hidden>
                    &middot;
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {applicationImages.map((src, i) => (
            <Reveal key={src} delay={i * 0.1}>
              <ParallaxImage
                src={src}
                alt="Interior styled with a rare African hide"
                className={`w-full rounded-sm ${i === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
