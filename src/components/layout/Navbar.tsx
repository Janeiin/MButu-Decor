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

  const onLight = scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-lux ${
          scrolled ? 'glass py-4' : 'bg-transparent py-7'
        }`}
      >
        <nav className="shell flex items-center justify-between">
          <a
            href="#top"
            className={`font-display text-2xl font-normal tracking-wide transition-colors duration-500 ${
              onLight ? 'text-charcoal' : 'text-ivory'
            }`}
          >
            M<span className="accent not-italic">&rsquo;</span>Butu
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`group relative font-body text-[12px] font-medium uppercase tracking-wide2 transition-colors duration-300 ${
                    onLight ? 'text-taupe-dark hover:text-charcoal' : 'text-ivory/80 hover:text-ivory'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-clay transition-all duration-500 ease-lux group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden rounded-full border px-5 py-2.5 font-body text-[11px] font-medium uppercase tracking-wide2 transition-all duration-500 sm:inline-block ${
                onLight
                  ? 'border-charcoal/25 text-charcoal hover:border-clay hover:text-clay'
                  : 'border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal'
              }`}
            >
              Request Catalogue
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden ${onLight ? 'text-charcoal' : 'text-ivory'}`}
            >
              <Menu size={22} strokeWidth={1.4} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-ivory/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="shell flex items-center justify-between py-7">
              <span className="font-display text-2xl text-charcoal">
                M<span className="accent not-italic">&rsquo;</span>Butu
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-charcoal">
                <X size={24} strokeWidth={1.4} />
              </button>
            </div>

            <ul className="mt-14 flex flex-col px-8">
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-5 font-display text-4xl font-normal text-charcoal transition-colors hover:text-clay"
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
              className="btn-primary mx-8 mt-12 justify-center"
            >
              Request Catalogue
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
