"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

// 🖼️ Gold images
import gold1 from "../../../../public/goldnack.png";   // Necklace
import gold2 from "../../../../public/goldnack2.png";  // Necklace
import gold3 from "../../../../public/bangle.png";     // Bangles
import gold4 from "../../../../public/bracelet1.png";  // Bracelet
import gold5 from "../../../../public/earring1.png";   // Earrings
import gold6 from "../../../../public/earring2.png";   // Earrings
import gold7 from "../../../../public/goldimg.png";    // Bridal Set

// ✅ Corrected names matching jewelry type
const goldImages = [
  { src: gold1, name: "Royal Heritage Necklace", desc: "A timeless masterpiece that defines regal elegance.", size: "large" },
  { src: gold2, name: "Elegant Layered Necklace", desc: "Graceful layers of gold that shimmer with every move.", size: "medium" },
  { src: gold3, name: "Sunshine Bangles", desc: "Classic bangles that celebrate tradition with a modern touch.", size: "small" },
  { src: gold4, name: "Golden Charm Bracelet", desc: "A statement of sophistication for every occasion.", size: "medium" },
  { src: gold5, name: "Radiant Drop Earrings", desc: "Delicately designed to illuminate your beauty.", size: "large" },
  { src: gold6, name: "Classic Hoop Earrings", desc: "Minimal yet majestic, perfect for everyday glam.", size: "small" },
  { src: gold7, name: "Majestic Bridal Set", desc: "A grand ensemble crafted for life’s most special moments.", size: "medium" },
];

export default function GoldCollection() {
  return (
    <>
      <Header />

      <section className="relative w-full min-h-screen bg-gradient-to-b from-[#fffdf8] to-[#fff9ef] text-gray-900 py-24 overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        {/* Title Section */}
        <div className="text-center mb-20 px-6">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 tracking-wide">
            Gold <span className="text-[#d4af37]">Radiance</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Immerse yourself in timeless craftsmanship — each golden masterpiece tells a story of elegance, artistry, and enduring beauty.
          </p>
        </div>

        {/* Image Placement (Masonry Grid) */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {goldImages.map((item, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 
              ${
                item.size === "large"
                  ? "md:row-span-2"
                  : item.size === "small"
                  ? "md:row-span-1"
                  : "md:row-span-1.5"
              }`}
            >
              <Image
                src={item.src}
                alt={item.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-6 left-6 text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      </section>

      <Footer />
    </>
  );
}
