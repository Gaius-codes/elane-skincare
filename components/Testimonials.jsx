"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { fadeUp, staggerContainer, easeCinema } from "@/lib/motionVariants";

const TESTIMONIALS = [
  {
    name: "Amara S.",
    title: "Verified Buyer",
    location: "London, UK",
    skinType: "Combination / Sensitive",
    quote:
      "I was skeptical about facial oils after damaging my skin barrier with harsh retinoids. Three drops of the Barrier Veil at night saved my skin—zero redness by morning.",
    avatar: "/images/Amara.jpg",
    rating: 5,
  },
  {
    name: "Daniel K.",
    title: "Verified Buyer",
    location: "New York, NY",
    skinType: "Oily / Acne-Prone",
    quote:
      "Finding an oil that doesn’t induce breakouts felt impossible. The Jojoba Extract absorbs instantly and actually balances my mid-day shine. Permanent staple.",
    avatar: "/images/Daniel.jpg",
    rating: 5,
  },
  {
    name: "Elena M.",
    title: "Verified Buyer",
    location: "Milan, Italy",
    skinType: "Dry / Mature",
    quote:
      "The subtle, grounding botanical aroma makes my evening ritual feel like an editorial spa. My foundation doesn’t cling to dry patches anymore.",
    avatar: "/images/Selena.jpg",
    rating: 5,
  },
  {
    name: "Elijah J.",
    title: "Verified Buyer",
    location: "Toronto, CA",
    skinType: "Normal / Dehydrated",
    quote:
      "Noticeable shift in skin texture within 10 days. The dullness from long hours in front of screens is completely gone. My face looks naturally rested.",
    avatar: "/images/Elijah.jpg",
    rating: 5,
  },
  {
    name: "Sora T.",
    title: "Verified Buyer",
    location: "Tokyo, JP",
    skinType: "Sensitive",
    quote:
      "Extremely clean formulation. No synthetic perfumes, no greasy film—just genuine, deep hydration that lasts under makeup all day long.",
    avatar: "/images/Sora.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollerRef = useRef(null);

  const scroll = (direction) => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.9 * direction;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F4EFE6] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeCinema }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-sans text-xs uppercase tracking-wide text-[#8A8371]">
              Real People, Real Results
            </p>
            <h2 className="mt-3 font-display text-3xl text-[#23261F] sm:text-4xl">
              Loved by thousands.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Previous testimonials"
              onClick={() => scroll(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#23261F]/15 text-[#23261F] transition-colors hover:bg-[#23261F] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={() => scroll(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#23261F]/15 text-[#23261F] transition-colors hover:bg-[#23261F] hover:text-white"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={scrollerRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easeCinema }}
              className="group relative flex w-[88%] shrink-0 flex-col justify-between snap-start rounded-2xl border border-[#d4af37]/20 bg-[#1C1F1A] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_15px_35px_rgba(212,175,55,0.08)] sm:w-[48%] lg:w-[32%]"
            >
              {/* Top Header: Star Rating & Verified Badge */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#d4af37]">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>

                  {t.title && (
                    <span className="inline-flex items-center gap-1 rounded-md border border-[#d4af37]/20 bg-[#d4af37]/10 px-2.5 py-0.5 font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-[#e6c594]">
                      {/* <span className="h-1 w-1 rounded-full bg-[#d4af37]" /> */}
                      {t.title}
                    </span>
                  )}
                </div>

                {/* Quote Content */}
                <p className="mt-5 font-sans text-sm leading-relaxed font-light tracking-wide text-[#b8aba0] group-hover:text-[#f5f0eb] transition-colors duration-300">
                  “{t.quote}”
                </p>
              </div>

              {/* Bottom Metadata & Author Section */}
              <div className="mt-8 pt-5 border-t border-[#d4af37]/15">
                <div className="flex items-center justify-between gap-3">
                  {/* Avatar & User Details */}
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#d4af37]/30 bg-[#170c0a]">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="40px"
                        className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <p className="font-display text-sm tracking-wide text-[#f5f0eb]">
                        {t.name}
                      </p>
                      {t.location && (
                        <p className="font-sans text-[11px] tracking-wider text-[#b8aba0]/70 font-light">
                          {t.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Skin Type Badge */}
                  {t.skinType && (
                    <div className="text-right">
                      <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#d4af37]/70 font-medium">
                        Skin Profile
                      </span>
                      <span className="font-sans text-[11px] font-light text-[#b8aba0]">
                        {t.skinType}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
