'use client';

import { ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FOOTER_LINKS = ['Shop', 'About', 'Journal', 'FAQ', 'Contact'];
const SOCIALS = [faInstagram, faFacebook, faTwitter, faYoutube];

export default function Footer() {
  return (
    <footer className="bg-[#1C1F1A] pt-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 sm:flex-row sm:items-center">
          <span className="font-display text-xl tracking-[0.18em]">
            ÉLANÉ
          </span>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-sm text-white/70 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
          <p className="font-display text-2xl text-white sm:text-3xl">
            Skin care, without the noise.
          </p>
          <button className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-3 font-sans text-sm text-[#1C1F1A] transition-colors duration-200 hover:bg-white/90">
            Shop Now
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="font-sans text-xs text-white/40">
            © 2026 ÉLANÉ. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="text-white/60 transition-colors hover:text-white"
              >
                <FontAwesomeIcon icon={Icon} className="h-6 w-6 text-white/60 duration-200 hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
