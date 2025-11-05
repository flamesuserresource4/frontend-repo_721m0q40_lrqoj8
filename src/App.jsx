import React from 'react';
import HeroSection from './components/HeroSection';
import MascotHighlight from './components/MascotHighlight';
import ProductShowcase from './components/ProductShowcase';
import WhyAndReviews from './components/WhyAndReviews';
import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF6E8] antialiased">
      <header className="sticky top-0 z-20 bg-[#FFF6E8]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#2F6A3A]"></div>
            <span className="text-lg font-extrabold tracking-tight text-[#2F6A3A]">Buggly</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-[#6E4B38] sm:flex">
            <a href="#product" className="hover:text-[#2F6A3A]">Product</a>
            <a href="#why" className="hover:text-[#2F6A3A]">Why Insect Protein</a>
            <a href="#reviews" className="hover:text-[#2F6A3A]">Reviews</a>
          </nav>
          <a href="https://wa.me/918000000000" className="inline-flex items-center gap-2 rounded-full bg-[#C43B2F] px-4 py-2 text-sm font-semibold text-white shadow">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <MascotHighlight />
        <ProductShowcase />
        <WhyAndReviews />
      </main>

      <footer className="bg-[#2F6A3A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-xl font-extrabold">Buggly</div>
              <p className="mt-2 text-sm text-white/80">Insect-based protein treats and feed for chickens & pets.</p>
            </div>
            <div>
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-2 space-y-1 text-sm text-white/90">
                <li><a href="#product" className="hover:underline">Shop Protein Worms</a></li>
                <li><a href="#why" className="hover:underline">Why Insect Protein</a></li>
                <li><a href="#" className="hover:underline">Care Guide</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Connect</div>
              <div className="mt-2 flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Youtube className="h-5 w-5" /></a>
              </div>
              <a href="https://wa.me/918000000000" className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2F6A3A]">WhatsApp Us</a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/70">© {new Date().getFullYear()} Buggly Farms. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
