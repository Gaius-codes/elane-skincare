'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from './Header';

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden bg-[#1f110f]">
      {/* Background Image with slow luxury zoom effect */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-image.jpg"
          alt="ÉLANÉ botanical oil skincare treatment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.9] contrast-[1.02]"
        />
      </motion.div>

      {/* Layered Luxury Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1f110f]/80 via-[#1f110f]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f110f] via-transparent to-transparent opacity-90" />

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-14">
        <div className="max-w-xl">
          {/* Subtitle / Category Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-[1px] w-8 bg-[#d4af37]" />
            <span className="font-sans text-[11px] font-medium tracking-[0.3em] uppercase text-[#d4af37]">
              Collection 01 • Active Botanicals
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-4xl leading-[1.1] text-[#f5f0eb] sm:text-5xl lg:text-[3.75rem] font-light tracking-wide"
          >
            Your skin, at its <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#e6c594]">most luminous.</span>
          </motion.h1>

          {/* Description Snippet */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-md font-sans text-sm leading-relaxed tracking-wide text-[#b8aba0] font-light"
          >
            Formulated with cold-pressed botanical seed oils and restorative antioxidants designed to awaken natural dermal radiance.
          </motion.p>

          {/* Call to Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center gap-8"
          >
            <a
              href="#shop"
              className="group relative inline-flex items-center gap-4 rounded-full border border-[#d4af37]/40 bg-[#1f110f]/80 px-8 py-4 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37] hover:bg-[#1f110f] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]"
            >
              <span className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-[#f5f0eb] transition-colors group-hover:text-[#d4af37]">
                Discover The Ritual
              </span>
              <span className="text-[#d4af37] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Editorial Floating Detail Badge (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 rounded-full border border-white/10 bg-[#1f110f]/60 px-6 py-3 backdrop-blur-md"
      >
        <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
        <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#b8aba0]">
          100% Organic • Dermatologist Tested
        </span>
      </motion.div>
    </section>
  );
}