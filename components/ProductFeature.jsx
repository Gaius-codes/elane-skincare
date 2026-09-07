'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Droplet, ShieldCheck, Sun, Users } from 'lucide-react';
import { fadeUp, staggerContainer, easeCinema } from '@/lib/motionVariants';

const BENEFITS = [
  {
    icon: Droplet,
    title: 'Deep Hydration',
    detail: 'Locks in moisture for all-day softness.',
  },
  {
    icon: ShieldCheck,
    title: 'Barrier Support',
    detail: 'Repairs and strengthens your skin barrier.',
  },
  {
    icon: Sun,
    title: 'UV Protection',
    detail: 'Shields against harmful UV rays.',
  },
  {
    icon: Users,
    title: 'For All Skin Types',
    detail: 'Gentle and effective, even for sensitive skin.',
  },
];

export default function ProductFeature() {
  return (
    <section className="bg-[#F4EFE6] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[36%_32%_28%] lg:gap-10">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: easeCinema }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#E4DFD3]"
          >
            {/* Replace with your photo — expected at /public/images/product-face.jpg */}
            <Image
              src="/images/close-up1.jpg"
              alt="Model with Barrier Veil moisturizer applied"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: easeCinema, delay: 0.1 }}
          >
            <p className="font-sans text-xs uppercase tracking-wide text-[#8A8371]">
              The Product
            </p>
            <h2 className="mt-3 font-display text-3xl text-[#23261F] sm:text-4xl">
              Barrier Veil
            </h2>
            <p className="mt-2 font-sans text-sm text-[#6B6558]">
              Daily Moisturizer &nbsp;|&nbsp; SPF 30
            </p>
            <p className="mt-6 font-sans text-[15px] leading-relaxed text-[#5B5648]">
              A lightweight, fast-absorbing moisturizer that hydrates deeply,
              strengthens your skin barrier and protects against
              environmental stressors.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#1C1F1A] px-6 py-3 font-sans text-sm text-white transition-colors hover:bg-[#2E322A]">
              Add to Bag
              <span className="opacity-70">$42</span>
            </button>
          </motion.div>

          {/* Benefit list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-7"
          >
            {BENEFITS.map(({ icon: Icon, title, detail }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: easeCinema }}
                className="flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#23261F]/10 text-[#6E7A5E]">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-sans text-sm text-[#23261F]">{title}</p>
                  <p className="mt-1 font-sans text-[13px] leading-relaxed text-[#6B6558]">
                    {detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
