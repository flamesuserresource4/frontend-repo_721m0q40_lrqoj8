import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, Info } from 'lucide-react';
import React from 'react';

const WormSVG = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="wormGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C43B2F" />
        <stop offset="100%" stopColor="#E3B546" />
      </linearGradient>
    </defs>
    <path d="M10 40 C 30 10, 60 10, 80 40 S 130 70, 160 40" stroke="url(#wormGrad)" strokeWidth="16" strokeLinecap="round" fill="none" />
    <circle cx="170" cy="40" r="8" fill="#C43B2F" />
    <circle cx="172.5" cy="37.5" r="2" fill="#FFF6E8" />
  </svg>
);

export default function HeroSection() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 600], [0, 200]);
  const rotate = useTransform(scrollY, [0, 600], [0, 12]);
  const y = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <section className="relative overflow-hidden bg-[#FFF6E8]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#E3B546]/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2F6A3A]/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <span className="inline-block rounded-full bg-[#2F6A3A]/10 px-4 py-1 text-sm font-medium text-[#2F6A3A]">Buggly Farms</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#6E4B38] sm:text-5xl md:text-6xl">
              Natural Protein Power for Your Game Birds.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#6E4B38]/80 md:text-lg">
              High-protein Black Soldier Fly Larvae — a clean, sustainable boost for growth, energy, and immunity.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C43B2F] px-6 py-3 text-white shadow-lg shadow-[#C43B2F]/30 transition hover:translate-y-[-1px] hover:shadow-xl"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Shop Now</span>
              </a>
              <a
                href="#why"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2F6A3A] bg-white px-6 py-3 text-[#2F6A3A] shadow-sm transition hover:bg-[#2F6A3A] hover:text-white"
              >
                <Info className="h-5 w-5" />
                <span>Know More</span>
              </a>
            </div>
          </div>

          <div className="relative h-[320px] md:h-[420px]">
            <motion.div style={{ x, rotate, y }} className="absolute inset-0">
              <WormSVG className="h-full w-full" />
            </motion.div>
            <div className="absolute bottom-4 right-4 w-40 rounded-2xl bg-white/80 p-3 shadow-lg backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#6E4B38]/70">Protein Worms</div>
              <div className="mt-1 text-xl font-extrabold text-[#2F6A3A]">BSF Larvae</div>
              <div className="mt-1 text-xs text-[#6E4B38]/70">Scroll to see them move →</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
