'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { media, scarcity } from '@/lib/site';

export default function Story() {
  return (
    <section id="story" className="py-28 sm:py-40">
      <div className="shell grid items-center gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="The House"
            title={
              <>
                Rare materials, gathered with{' '}
                <span className="accent">reverence</span> for their origin.
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-prose2 font-body text-lg font-light leading-relaxed text-charcoal-soft">
              M&rsquo;Butu Collection sources the rarest hides in Africa for the
              world&rsquo;s most considered interiors. We work across Namibia and
              Southern Africa with origins we know by name, choosing each hide for
              its character and its conscience in equal measure.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-prose2 font-body text-base font-light leading-relaxed text-taupe-dark">
              {scarcity[0]} What arrives at your studio carries a heritage, a
              provenance, and the quiet assurance that nothing was taken without
              care.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <a href="#contact" className="btn-outline mt-10 group">
              Book a Design Consultation
              <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <ParallaxImage
              src={media.story}
              alt="Rare hide detail in warm natural light"
              className="aspect-[4/5] w-full rounded-sm"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
