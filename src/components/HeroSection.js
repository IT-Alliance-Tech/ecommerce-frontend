"use client";
import Image from "next/image";
import heroBanner from "../../public/herosection.png";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-[#000]"
      data-theme="light"
    >
      {/* Brighter Background Image */}
      <Image
        src={heroBanner}
        alt="Luxury Jewelry"
        fill
        className="object-cover brightness-[1.25] contrast-[1.05] saturate-[1.15]"
        priority
      />

      {/* Balanced Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Soft white gradient for luxury lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 select-none">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
          Shine with Elegance
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          Discover our exquisite collection of handcrafted jewelry designed to elevate every occasion.
        </p>
        <a
          href="/products"
          className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition shadow-lg"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
