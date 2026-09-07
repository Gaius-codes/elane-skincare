'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, easeCinema } from '@/lib/motionVariants';

const PRODUCTS = [
  {
    name: 'LUMIÈRE',
    subtitle: 'Radiance Serum',
    price: '$48',
    image: '/images/product-lumiere.svg',
  },
  {
    name: 'VELORA',
    subtitle: 'Barrier Repair Cream',
    price: '$42',
    image: '/images/product-lumiere.svg',
  },
  {
    name: 'AUREL',
    subtitle: 'Hydrating Essence',
    price: '$36',
    image: '/images/product-lumiere.svg',
  },
];

export default function ShopCollection() {
  return (
    <section className="bg-[#F4EFE6] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easeCinema }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-sans text-xs uppercase tracking-wide text-[#8A8371]">
              Shop The Collection
            </p>
            <h2 className="mt-3 font-display text-3xl text-[#23261F] sm:text-4xl">
              Skincare, Simplified.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-sans text-sm text-[#23261F] transition-colors hover:text-[#6E7A5E]"
          >
            View All
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easeCinema }}
              className="group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#EDE8DC]">
                {/* Replace with your product photo */}
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.subtitle}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-5 flex items-start justify-between">
                <div>
                  <p className="font-sans text-sm tracking-wide text-[#23261F]">
                    {product.name}
                  </p>
                  <p className="mt-1 font-sans text-[13px] text-[#6B6558]">
                    {product.subtitle}
                  </p>
                </div>
                <p className="font-sans text-sm text-[#23261F]">
                  {product.price}
                </p>
              </div>

              <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#1C1F1A] px-5 py-2.5 font-sans text-[13px] text-white transition-colors hover:bg-[#2E322A]">
                Add to Bag
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
