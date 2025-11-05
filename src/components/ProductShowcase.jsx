import React from 'react';
import { BadgeCheck, Truck, Zap, Leaf, ShoppingCart } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section id="product" className="relative bg-[#FFF6E8]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-extrabold text-[#6E4B38] sm:text-4xl">Protein Worms 100g</h2>
            <p className="mt-3 text-[#6E4B38]/80">Black Soldier Fly Larvae — a nutrient-dense snack and feed topper to supercharge your flock and pets.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-4 py-1 text-[#2F6A3A] shadow">₹25</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E3B546]/20 px-3 py-1 text-sm font-medium text-[#6E4B38]">
                <Truck className="h-4 w-4 text-[#C43B2F]" /> Free Delivery
              </span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm">
                <Zap className="h-5 w-5 text-[#C43B2F]" />
                <span className="text-[#6E4B38]">Boosts Energy</span>
              </li>
              <li className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm">
                <BadgeCheck className="h-5 w-5 text-[#2F6A3A]" />
                <span className="text-[#6E4B38]">High Protein</span>
              </li>
              <li className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm">
                <Leaf className="h-5 w-5 text-[#2F6A3A]" />
                <span className="text-[#6E4B38]">100% Natural</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[#C43B2F] px-6 py-3 text-white shadow-md shadow-[#C43B2F]/30 hover:translate-y-[-1px]">
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </a>
              <a href="#why" className="rounded-full border border-[#2F6A3A] px-6 py-3 text-[#2F6A3A] hover:bg-[#2F6A3A] hover:text-white">Why it works</a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-sm rounded-3xl bg-gradient-to-br from-[#FFF6E8] to-[#F5EAD5] p-6 shadow-xl">
              <div className="rounded-2xl border-2 border-dashed border-[#E3B546] bg-white p-6 text-center">
                <div className="mx-auto mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-[#E3B546]/40 to-[#C43B2F]/30 shadow-inner" />
                <div className="text-lg font-bold text-[#6E4B38]">Buggly Protein Worms</div>
                <div className="text-sm text-[#6E4B38]/70">100g Pack</div>
                <span className="mt-3 inline-block rounded-full bg-[#2F6A3A]/10 px-3 py-1 text-xs font-semibold text-[#2F6A3A]">Handpicked • Sun-dried</span>
                <div className="pointer-events-none absolute -top-3 -right-3 rounded-full bg-[#2F6A3A] px-3 py-1 text-xs font-bold text-white shadow-lg">Best Seller</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
