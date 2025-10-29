"use client";

import Image from "next/image";
import storyImg from "../../public/brand.png"; // Replace with your brand image

export default function BrandStory() {
  return (
    <section
      className="relative w-full py-16 md:py-20 bg-gradient-to-b from-white via-[#fffdf5] to-[#fdf8e6] overflow-hidden mt-[-40px]"
      data-theme="light"
    >
      {/* Gold Decorative Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src={storyImg}
            alt="Luxe Jewels Craftsmanship"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/25 via-transparent to-transparent" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 tracking-wide">
            Our <span className="text-[#d4af37]">Story</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-[15px] md:text-base">
            At <span className="font-semibold text-[#d4af37]">Luxe Jewels</span>, we believe every piece of jewelry tells a story — 
            a story of love, strength, and timeless elegance. Our artisans handcraft 
            each piece with meticulous attention to detail, blending modern design with 
            traditional artistry.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-[15px] md:text-base">
            We use ethically sourced materials and premium gemstones to create jewelry 
            that lasts a lifetime — capturing light, emotion, and beauty in every sparkle.
          </p>

          <a
            href="/about"
            className="inline-block px-8 py-3 rounded-full bg-[#d4af37] text-white font-medium hover:bg-[#c49c2d] transition-all shadow-md hover:shadow-lg"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </section>
  );
}
