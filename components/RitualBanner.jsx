'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, easeCinema } from '@/lib/motionVariants';

const STEPS = [
  { number: '01', title: 'Morning', detail: 'Cleanse and prep your skin.' },
  {
    number: '02',
    title: 'Apply',
    detail: 'Use your favourite ÉLANÉ products.',
  },
  {
    number: '03',
    title: 'Glow',
    detail: 'Healthy, radiant skin — every day.',
  },
];

export default function RitualBanner() {
  return (
    <section className="relative overflow-hidden bg-[#1C1F1A] py-24 sm:py-28">
      <Image
        src="/images/ritual-leaves.jpg"
        alt="Botanical ritual scene"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1C1F1A] via-[#1C1F1A]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easeCinema }}
          className="max-w-md"
        >
          <p className="font-sans text-xs tracking-wide text-white/60">
            The Ritual
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
            Simple steps. Lasting results.
          </h2>
          <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-sans text-sm text-[#1C1F1A] transition-colors duration-200 hover:bg-white/90">
            View Full Routine
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
        >
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex items-center gap-6 sm:contents">
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: easeCinema }}
                className="max-w-[12rem]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 font-sans text-xs text-white/80">
                  {step.number}
                </span>
                <p className="mt-4 font-sans text-sm text-white">
                  {step.title}
                </p>
                <p className="mt-1 font-sans text-[13px] leading-relaxed text-white/55">
                  {step.detail}
                </p>
              </motion.div>

              {i < STEPS.length - 1 && (
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-white/30 sm:mt-3 sm:block"
                  strokeWidth={1.5}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
