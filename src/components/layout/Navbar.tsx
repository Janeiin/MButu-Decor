'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-lux ${
          scrolled ? 'glass py-3' : 'bg-transparent py-6'
        }`}
      >
        <nav className="shell flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-xl font-light tracking-widest text-ivory transition-colors hover:text-gold-bright"
          >
            M<span className="text-gold">&rsquo;</span>BUTU
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative font-body text-[13px] uppercase tracking-widest text-ivory-dim transition-colors duration-300 hover:text-ivory"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-lux group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden rounded-full border border-gold-dim/60 px-5 py-2 font-body text-[12px] uppercase tracking-widest text-gold-bright transition-all duration-500 hover:border-gold hover:glow-gold sm:inline-block"
            >
              Trade Enquiry
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="text-ivory lg:hidden"
            >
              <Menu size={22} strokeWidth={1.4} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-ink/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="shell flex items-center justify-between py-6">
              <span className="font-display text-xl font-light tracking-widest text-ivory">
                M<span className="text-gold">&rsquo;</span>BUTU
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-ivory"
              >
                <X size={24} strokeWidth={1.4} />
              </button>
            </div>

            <ul className="mt-16 flex flex-col gap-2 px-8">
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-charcoal-line py-5 font-display text-3xl font-light text-ivory transition-colors hover:text-gold-bright"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mx-8 mt-12 block rounded-full border border-gold-dim py-4 text-center font-body text-sm uppercase tracking-widest text-gold-bright"
            >
              Trade Enquiry
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
