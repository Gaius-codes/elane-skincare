'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
];

export default function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        {/* soft fade so the nav stays legible over any photo behind it */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F4EFE6]/70 via-[#F4EFE6]/15 to-transparent" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
          {/* Brand */}
          <a
            href="/"
            className="font-display text-xl tracking-[0.18em] text-[#23261F] sm:text-2xl"
          >
            ÉLANÉ
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex lg:items-center lg:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[13px] tracking-wide text-[#23261F]/80 transition-colors duration-200 hover:text-[#23261F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right-side icons */}
          <div className="flex items-center gap-5">
            <button
              aria-label="Search"
              className="hidden text-[#23261F]/80 transition-colors hover:text-[#23261F] sm:block"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Account"
              className="hidden text-[#23261F]/80 transition-colors hover:text-[#23261F] sm:block"
            >
              <User className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Shopping bag"
              className="relative text-[#23261F]/80 transition-colors hover:text-[#23261F]"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#1C1F1A] font-sans text-[9px] text-white">
                {cartCount}
              </span>
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="text-[#23261F]/80 transition-colors hover:text-[#23261F] lg:hidden"
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full black overlay, white links */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex flex-col bg-black"
          >
            <div className="flex items-center justify-between px-6 py-6 sm:px-10">
              <span className="font-display text-xl tracking-[0.18em] text-white">
                ÉLANÉ
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="text-white/80 transition-colors hover:text-white"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8 sm:px-12">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: 'easeOut' }}
                  className="font-display text-4xl leading-tight text-white/90 transition-colors hover:text-white sm:text-5xl"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-8 border-t border-white/10 px-8 py-8 sm:px-12"
            >
              <button className="flex items-center gap-2 font-sans text-sm tracking-wide text-white/70 transition-colors hover:text-white">
                <Search className="h-4 w-4" strokeWidth={1.5} />
                Search
              </button>
              <button className="flex items-center gap-2 font-sans text-sm tracking-wide text-white/70 transition-colors hover:text-white">
                <User className="h-4 w-4" strokeWidth={1.5} />
                Account
              </button>
              <button className="flex items-center gap-2 font-sans text-sm tracking-wide text-white/70 transition-colors hover:text-white">
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                Bag
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
