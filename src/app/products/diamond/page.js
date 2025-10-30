"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

// Import images
import diamond1 from "../../../../public/DiamondRing.png";
import diamond2 from "../../../../public/dimond1.png";
import diamond3 from "../../../../public/dimond2.png";
import diamond4 from "../../../../public/dimond3.png";
import diamond5 from "../../../../public/dimond4.png";
import diamond6 from "../../../../public/dimond5.png";

const diamondCollections = [
  {
    name: "Celestial Spark",
    desc: "Radiating brilliance inspired by starlit nights.",
    image: diamond1,
  },
  {
    name: "Eternal Grace",
    desc: "An elegant statement of everlasting love.",
    image: diamond2,
  },
  {
    name: "Royal Aura",
    desc: "A regal masterpiece crafted for timeless elegance.",
    image: diamond3,
  },
  {
    name: "Pure Radiance",
    desc: "A perfect harmony of light, luxury, and artistry.",
    image: diamond4,
  },
  {
    name: "Infinity Shine",
    desc: "A modern symbol of endless beauty and devotion.",
    image: diamond5,
  },
  {
    name: "Luminous Charm",
    desc: "Graceful design that captures every heart.",
    image: diamond6,
  },
];

export default function DiamondCollection() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#fffdf8] via-[#fffaf0] to-[#fff9ef] dark:from-[#fffdf8] dark:to-[#fff9ef] py-20 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-gray-900 mb-4 tracking-wide">
            Diamond <span className="text-[#d4af37]">Elegance</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-800 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover the brilliance of our diamond collection — each piece is a masterpiece of light, luxury, and legacy.
          </p>
        </div>
      </section>

      {/* Diamond Collection Grid */}
      <section className="relative w-full bg-gradient-to-b from-[#fff9ef] to-[#fffdf8] dark:from-[#fffdf8] dark:to-[#fff9ef] text-gray-900 py-16 -mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {diamondCollections.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-[#fffdf8] rounded-3xl shadow-xl hover:shadow-2xl border border-[#f3e7c4]/80 hover:border-[#d4af37]/60 transition-all duration-700 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative w-full h-[340px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-[#d4af37] mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Shine animation on hover */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] opacity-0 group-hover:opacity-100 animate-shine" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-16" />
      </section>

      <Footer />

      {/* Shine Animation */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
