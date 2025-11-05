import React from 'react';
import { TrendingUp, Shield, Leaf, Star } from 'lucide-react';

const TestimonialCard = ({ name, role, img, text, rating = 5 }) => (
  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <div className="flex items-center gap-3">
      <img src={img} alt={name} className="h-12 w-12 rounded-full object-cover" />
      <div>
        <div className="font-semibold text-[#6E4B38]">{name}</div>
        <div className="text-xs text-[#6E4B38]/70">{role}</div>
      </div>
    </div>
    <p className="mt-3 text-sm text-[#6E4B38]/90">{text}</p>
    <div className="mt-3 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-[#E3B546]' : 'text-[#6E4B38]/30'}`} fill={i < rating ? 'currentColor' : 'none'} />
      ))}
    </div>
  </div>
);

export default function WhyAndReviews() {
  return (
    <section id="why" className="relative bg-[#F5EAD5]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-[#6E4B38] sm:text-4xl">Why Insect Protein?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-[#6E4B38]/80">Three natural pillars that build stronger, healthier, happier birds.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex rounded-xl bg-[#2F6A3A]/10 p-3"><TrendingUp className="h-6 w-6 text-[#2F6A3A]" /></div>
            <div className="font-semibold text-[#6E4B38]">Better Growth</div>
            <p className="text-sm text-[#6E4B38]/80">Rich amino acids support muscle and feather development.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex rounded-xl bg-[#E3B546]/20 p-3"><Shield className="h-6 w-6 text-[#C43B2F]" /></div>
            <div className="font-semibold text-[#6E4B38]">Immunity Boost</div>
            <p className="text-sm text-[#6E4B38]/80">Natural lauric acid helps defend against pathogens.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex rounded-xl bg-[#C43B2F]/10 p-3"><Leaf className="h-6 w-6 text-[#2F6A3A]" /></div>
            <div className="font-semibold text-[#6E4B38]">Natural Nutrition</div>
            <p className="text-sm text-[#6E4B38]/80">Sustainably raised larvae — clean, traceable, and planet-friendly.</p>
          </div>
        </div>

        <div className="mt-16">
          <h4 className="text-center text-2xl font-bold text-[#6E4B38]">Farmer Reviews</h4>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <TestimonialCard
              name="Ravi Kumar"
              role="Aseel Breeder – Telangana"
              img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
              text="After two weeks on Buggly, my game birds show better stamina and cleaner droppings. They love the worms!"
              rating={5}
            />
            <TestimonialCard
              name="Meera Devi"
              role="Backyard Poultry – Rajasthan"
              img="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop"
              text="Molting was smoother this season. Feathers look glossy and birds are more active."
              rating={5}
            />
            <TestimonialCard
              name="Arjun Patel"
              role="Pet Owner – Gujarat"
              img="https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=200&auto=format&fit=crop"
              text="Even my dog enjoys a sprinkle as a treat topper. Great value for money!"
              rating={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
