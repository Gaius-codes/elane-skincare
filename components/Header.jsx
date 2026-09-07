'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Shop', href: '#shop' },
  { label: 'Rituals', href: '#rituals' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to trigger smooth navbar elevate effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock page scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'bg-[#1f110f]/85 py-4 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]'
            : 'bg-transparent py-6'
        }`}
      >
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1f110f]/60 via-[#1f110f]/10 to-transparent" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
          {/* Brand Logo */}
          <a
            href="/"
            className="group flex flex-col font-display text-xl tracking-[0.22em] text-[#f5f0eb] uppercase transition-opacity hover:opacity-90 sm:text-2xl"
          >
            ÉLANÉ
            <span className="text-[9px] tracking-[0.35em] text-[#d4af37]/70 uppercase font-sans -mt-1">
              HAUTE BOTANICALS
            </span>
          </a>

          {/* Desktop Nav Links Container with #1f110f Pill Styling */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8 bg-[#1f110f] border border-[#d4af37]/20 hover:border-[#d4af37]/40 px-8 py-2.5 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.35)] transition-all duration-500">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-sans text-[12px] font-medium tracking-[0.2em] uppercase text-[#b8aba0] transition-colors duration-300 hover:text-[#f5f0eb] py-1 group"
              >
                {link.label}
                {/* Gold underline hover animation */}
                {/* <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out" /> */}
              </a>
            ))}
          </nav>

          {/* Right-side Action Icons */}
          <div className="flex items-center gap-5">
            <button
              aria-label="Search"
              className="hidden text-[#b8aba0] transition-colors hover:text-[#f5f0eb] sm:block p-1"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.25} />
            </button>
            <button
              aria-label="Shopping bag"
              className="relative text-[#b8aba0] transition-colors hover:text-[#f5f0eb] p-1"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
              <span className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="text-[#b8aba0] transition-colors hover:text-[#f5f0eb] lg:hidden p-1"
            >
              <Menu className="h-6 w-6" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#1f110f]"
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#d4af37]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative flex items-center justify-between px-6 py-6 sm:px-10 border-b border-[#d4af37]/15">
              <span className="font-display text-xl tracking-[0.22em] text-[#f5f0eb]">
                ÉLANÉ
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="text-[#b8aba0] transition-colors hover:text-[#f5f0eb] p-2"
              >
                <X className="h-6 w-6" strokeWidth={1.25} />
              </button>
            </div>

            <nav className="relative flex flex-1 flex-col items-start justify-center gap-6 px-8 sm:px-12">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-3xl sm:text-4xl tracking-[0.15em] uppercase text-[#b8aba0] transition-colors hover:text-[#f5f0eb]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="relative flex items-center gap-8 border-t border-[#d4af37]/15 px-8 py-8 sm:px-12 bg-[#170c0a]"
            >
              <button className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#b8aba0] transition-colors hover:text-[#f5f0eb]">
                <Search className="h-4 w-4 text-[#d4af37]" strokeWidth={1.25} />
                Search
              </button>
              <button className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#b8aba0] transition-colors hover:text-[#f5f0eb]">
                <ShoppingBag className="h-4 w-4 text-[#d4af37]" strokeWidth={1.25} />
                Bag
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}