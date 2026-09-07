'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, easeCinema } from '@/lib/motionVariants';

const INGREDIENTS = [
  {
    name: 'Hyaluronic Acid',
    image: '/images/ing-hyaluronic-acid.jpg',
    detail: 'Provides deep, lasting hydration.',
    blob: '62% 38% 30% 70% / 60% 30% 70% 40%',
    tint: '#DCE6EF',
  },
  {
    name: 'Niacinamide',
    image: '/images/ing-niacinamide.jpg',
    detail: 'Calms, brightens and evens skin tone.',
    blob: '38% 62% 65% 35% / 45% 60% 40% 55%',
    tint: '#EFE3CE',
  },
  {
    name: 'Ceramides',
    image: '/images/ing-ceramides.jpg',
    detail: 'Restores and strengthens the skin barrier.',
    blob: '55% 45% 40% 60% / 55% 40% 60% 45%',
    tint: '#EFEAE1',
  },
];

export default function KeyIngredients() {
  return (
    <section className="bg-[#ECE8DD] py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[36%_64%] lg:gap-10 lg:px-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easeCinema }}
        >
          <p className="font-sans text-xs uppercase tracking-wide text-[#8A8371]">
            Key Ingredients
          </p>
          <h2 className="mt-3 font-display text-3xl text-[#23261F] sm:text-4xl">
            Pure. Potent. Purposeful.
          </h2>
          <p className="mt-5 max-w-sm font-sans text-[15px] leading-relaxed text-[#5B5648]">
            Thoughtfully formulated with skin-loving ingredients that work in
            harmony with your skin.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#1C1F1A] px-6 py-3 font-sans text-sm text-white transition-colors hover:bg-[#2E322A]">
            Learn More
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-3 gap-10 sm:grid-cols-3"
        >
          {INGREDIENTS.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easeCinema }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div
                style={{ borderRadius: item.blob, backgroundColor: item.tint }}
                className="relative h-28 w-28 overflow-hidden"
              >
                {/* Replace with your ingredient photo — expected at /public/images/ing-{name}.jpg */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="112px"
                  className="object-cover object-center mix-blend-multiply"
                />
              </div>
              <div>
                <p className="font-sans text-sm text-[#23261F]">
                  {item.name}
                </p>
                <p className="mt-1 max-w-[10rem] font-sans text-[13px] leading-relaxed text-[#6B6558]">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
