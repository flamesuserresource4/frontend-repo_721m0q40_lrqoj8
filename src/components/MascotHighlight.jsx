import { motion } from 'framer-motion';
import React from 'react';

const ChickenMascot = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="jacket" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2F6A3A" />
        <stop offset="100%" stopColor="#1f4a28" />
      </linearGradient>
    </defs>
    {/* Body */}
    <ellipse cx="100" cy="120" rx="55" ry="45" fill="#FFF6E8" stroke="#6E4B38" strokeWidth="3" />
    {/* Head */}
    <circle cx="130" cy="80" r="28" fill="#FFF6E8" stroke="#6E4B38" strokeWidth="3" />
    {/* Beak */}
    <polygon points="150,80 168,88 150,96" fill="#E3B546" stroke="#6E4B38" strokeWidth="2" />
    {/* Comb */}
    <path d="M118 58 C120 45, 135 45, 138 58 C140 45, 155 45, 158 60" stroke="#C43B2F" strokeWidth="6" fill="none" strokeLinecap="round"/>
    {/* Eye */}
    <circle cx="138" cy="80" r="4" fill="#6E4B38" />

    {/* Jacket */}
    <path d="M60 120 C60 95, 140 95, 140 120 L140 150 L60 150 Z" fill="url(#jacket)" stroke="#1f4a28" strokeWidth="2" />
    <text x="66" y="140" fontFamily="monospace" fontSize="14" fill="#E3B546" fontWeight="700">GAME FOWL</text>
  </svg>
);

export default function MascotHighlight() {
  return (
    <section className="relative bg-[#F5EAD5]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-[#6E4B38] sm:text-4xl">Meet the Buggly Mascot</h2>
            <p className="mt-3 text-[#6E4B38]/80">
              A tough Aseel champion in a Game Fowl jacket — the spirit of strength, endurance, and peak performance your birds deserve.
            </p>
            <ul className="mt-6 space-y-2 text-[#6E4B38]">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#C43B2F]"></span> Built for growth and stamina</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#2F6A3A]"></span> Clean, natural nutrition</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#E3B546]"></span> Loved by poultry and pets</li>
            </ul>
          </div>
          <div className="relative">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mx-auto w-64 overflow-visible rounded-3xl bg-white p-6 shadow-xl md:w-72"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChickenMascot />
              </motion.div>
              <div className="mt-4 text-center text-sm font-semibold text-[#2F6A3A]">Performance Mascot</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
