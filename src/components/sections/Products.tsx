'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import SmartImage from '@/components/ui/SmartImage';
import ZebraDivider from '@/components/ui/ZebraDivider';
import { products, type Product } from '@/lib/site';

const spans = [
  'lg:col-span-4',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
];

function Card({ product, span, i }: { product: Product; span: string; i: number }) {
  return (
    <Reveal delay={i * 0.06} className={`group ${span}`}>
      <a href="#contact" className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-charcoal">
          <motion.div className="absolute inset-0">
            <SmartImage
              src={product.image}
              alt={`${product.name} from ${product.origin}`}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover grayscale-[0.25] transition-all duration-[1200ms] ease-lux group-hover:scale-[1.06] group-hover:grayscale-0"
            />
          </motion.div>

          {/* Base darkening + gold wash on hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gold/0 mix-blend-overlay transition-colors duration-700 group-hover:bg-gold/10" />
          <div className="pointer-events-none absolute inset-0 rounded-sm ring-0 ring-inset ring-gold/0 transition-all duration-700 group-hover:ring-1 group-hover:ring-gold/30" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="eyebrow mb-2 text-gold-dim">{product.origin}</p>
            <h3 className="font-display text-2xl font-light text-ivory sm:text-3xl">
              {product.name}
            </h3>
            <div className="grid grid-rows-[0fr] transition-all duration-700 ease-lux group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="max-w-xs pt-3 font-body text-sm font-light leading-relaxed text-ivory-dim">
                  {product.note}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-widest text-gold-bright">
                  Enquire <span aria-hidden>&rarr;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative py-28 sm:py-36">
      <ZebraDivider className="mb-24" />

      <div className="shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            eyebrow="The Collection"
            title={
              <>
                Five expressions of the same{' '}
                <span className="italic text-lux">discipline.</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="max-w-xs font-body text-sm font-light leading-relaxed text-ivory-dim md:text-right">
              Every category is offered by the hide, graded and photographed
              before it is reserved for you.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {products.map((p, i) => (
            <Card key={p.id} product={p} span={spans[i]} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
