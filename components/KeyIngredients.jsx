"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Droplets, ShieldCheck, Sun, Sparkles, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, easeCinema } from "@/lib/motionVariants";

const benefits = [
  {
    icon: Droplets,
    title: "Deep Hydration",
    detail: "Locks in moisture for all-day softness.",
  },
  {
    icon: ShieldCheck,
    title: "Barrier Support",
    detail: "Repairs and strengthens your skin barrier.",
  },
  {
    icon: Sun,
    title: "UV Protection",
    detail: "Shields against harmful UV rays.",
  },
  {
    icon: Sparkles,
    title: "For All Skin Types",
    detail: "Gentle and effective, even for sensitive skin.",
  },
];

export default function KeyIngredients() {
  return (
    <section className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-[42%_58%] lg:gap-16 lg:px-14">
        {/* Product Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: easeCinema,
          }}
          className="relative aspect-square overflow-hidden bg-[#E8E4D9]"
        >
          {/* IMAGE PLACEHOLDER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#B9B3A5] text-[#777164]">
              <Sparkles className="h-5 w-5" strokeWidth={1.3} />
            </div>
            <Image
              src="/images/close-up1.jpg"
              alt="woman applying skin care image"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: easeCinema,
            }}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#8A8371]">
              The Product
            </p>

            <h2 className="mt-3 font-display text-4xl leading-tight text-[#23261F] sm:text-5xl">
              Barrier Veil
            </h2>

            <div className="mt-3 flex items-center gap-3 font-sans text-sm text-[#6B6558]">
              <span>Daily Moisturizer</span>

              <span className="h-1 w-1 rounded-full bg-[#9C9688]" />

              <span>SPF 30</span>
            </div>

            <p className="mt-6 max-w-lg font-sans text-[15px] leading-[1.8] text-[#5B5648]">
              A lightweight, fast-absorbing moisturizer that hydrates deeply,
              strengthens your skin barrier, and protects against environmental
              stressors.
            </p>

            {/* Add to Bag */}
            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1C1F1A] px-7 py-3.5 font-sans text-sm text-white transition-all duration-300 hover:bg-[#2E322A]">
              <span>Add to Bag</span>
              <span className="text-[#BEB9A9]">$42</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  transition={{
                    duration: 0.6,
                    ease: easeCinema,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8D3C7] text-[#5F6558]">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.3} />
                  </div>

                  <div>
                    <p className="font-sans text-sm text-[#23261F]">
                      {benefit.title}
                    </p>

                    <p className="mt-1 max-w-[190px] font-sans text-[12px] leading-relaxed text-[#7A7467]">
                      {benefit.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
