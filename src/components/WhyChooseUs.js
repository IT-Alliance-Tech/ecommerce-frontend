"use client";
import { Gem, ShieldCheck, HandHeart, Leaf } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Gem size={36} className="text-[#d4af37]" />,
      title: "Premium Quality",
      desc: "Every piece is handcrafted using ethically sourced gold, diamonds, and gemstones to ensure exceptional quality and brilliance.",
    },
    {
      icon: <HandHeart size={36} className="text-[#d4af37]" />,
      title: "Handcrafted with Love",
      desc: "Our artisans pour their passion into every detail, creating jewelry that reflects both elegance and emotion.",
    },
    {
      icon: <ShieldCheck size={36} className="text-[#d4af37]" />,
      title: "Certified Authenticity",
      desc: "We provide certification and guarantee for every creation — ensuring you receive genuine, lasting beauty.",
    },
    {
      icon: <Leaf size={36} className="text-[#d4af37]" />,
      title: "Sustainable Craft",
      desc: "With a deep respect for nature, our designs embrace sustainability through responsible sourcing and craftsmanship.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#fffaf2] via-[#fffdf8] to-white text-center">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          Why <span className="text-[#d4af37]">Choose Us</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Experience the elegance of jewelry that blends heritage, artistry, and modern sophistication — crafted for those who deserve the finest.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-[#d4af37]/20 hover:border-[#d4af37]/60"
            >
              <div className="mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#d4af37] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </section>
  );
}
