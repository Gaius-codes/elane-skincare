"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Leaf, Sparkles, ArrowRight, Plus } from "lucide-react";
import Header from "./Header";

const BADGES = [
  { icon: Award, label: "Dermatologist\nTested" },
  { icon: Leaf, label: "Vegan &\nCruelty Free" },
  { icon: Sparkles, label: "Clean\nIngredients" },
];

const TOTAL_SLIDES = 5;

export default function Hero() {
  const [slide, setSlide] = useState(1);

  const nextSlide = () => setSlide((s) => (s % TOTAL_SLIDES) + 1);

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-[#F4EFE6] lg:min-h-[680px]">
      {/* Replace with your hero photo — expected at /public/images/hero-product.jpg */}
      <Image
        src="/images/hero.png"
        alt="Barrier Veil daily moisturizer styled with stone and leaves"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* fade so the copy panel reads clearly regardless of the photo underneath */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F4EFE6] via-[#F4EFE6]/70 to-transparent lg:via-[#F4EFE6]/55" />

      <Header cartCount={0} />

      <div className="relative flex min-h-[600px] items-center lg:min-h-[680px]">
        <div className="mx-auto w-full max-w-7xl px-6 pt-24 sm:px-10 lg:px-14 lg:pt-16">
          <div className="max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-sans text-xs uppercase tracking-wide text-[#8A8371]"
            >
              Skincare For A Brighter You
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.28,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4 font-display text-4xl leading-[1.15] text-[#23261F] sm:text-5xl lg:text-[3.25rem]"
            >
              Your skin, at its most luminous.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-5 max-w-sm font-sans text-[15px] leading-relaxed text-[#5B5648]"
            >
              A lightweight daily moisturizer formulated to hydrate, restore and
              protect — for healthy, radiant skin, every day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56 }}
            >
              <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#1c1f1a] px-6 py-3 font-sans text-sm text-white transition-colors hover:bg-[#2E322A]">
                Shop Now
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
            >
              {BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon
                    className="h-4 w-4 shrink-0 text-[#6E7A5E]"
                    strokeWidth={1.5}
                  />
                  <p className="whitespace-pre-line font-sans text-[11px] leading-tight text-[#5B5648]">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image pager */}
      {/* <div className="absolute bottom-8 right-6 flex items-center gap-3 sm:right-10 lg:right-14">
        <span className="flex h-9 min-w-9 items-center justify-center rounded-full bg-white/80 px-3 font-sans text-xs text-[#23261F] backdrop-blur-sm">
          {slide}/{TOTAL_SLIDES}
        </span>
        <button
          aria-label="View larger"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#23261F] backdrop-blur-sm transition-colors hover:bg-white"
        >
          <Plus className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <button
          aria-label="Next photo"
          onClick={nextSlide}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C1F1A] text-white transition-colors hover:bg-[#2E322A]"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div> */}
    </section>
  );
}
