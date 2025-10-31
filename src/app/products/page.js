"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect } from "react";

// 💎 Diamond Images
import diamond1 from "../../../public/DiamondRing.png";
import diamond2 from "../../../public/dimond1.png";
import diamond3 from "../../../public/dimond2.png";
import diamond4 from "../../../public/dimond3.png";
import diamond5 from "../../../public/dimond4.png";
import diamond6 from "../../../public/dimond5.png";

// 🪙 Gold Images
import gold1 from "../../../public/goldimg.png";
import gold2 from "../../../public/goldnack2.png";
import gold3 from "../../../public/bangle.png";
import gold4 from "../../../public/bracelet1.png";
import gold5 from "../../../public/earring1.png";
import gold6 from "../../../public/earring2.png";

// 👰 Bridal Images
import bridal1 from "../../../public/bridal1.png";
import bridal2 from "../../../public/bridal2.png";
import bridal3 from "../../../public/bridal3.png";
import bridal4 from "../../../public/bridal4.png";

// 💎 Gemstone Images (4 only)
import gem1 from "../../../public/gemstone1.png";
import gem2 from "../../../public/gemstone5.png";
import gem3 from "../../../public/gemstone3.png";
import gem4 from "../../../public/gemstone4.png";

export default function ProductsPage() {
  useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const diamondCollections = [
    { name: "Celestial Spark", desc: "Radiating brilliance inspired by starlit nights.", image: diamond1 },
    { name: "Eternal Grace", desc: "An elegant statement of everlasting love.", image: diamond2 },
    { name: "Royal Aura", desc: "A regal masterpiece crafted for timeless elegance.", image: diamond3 },
    { name: "Pure Radiance", desc: "A perfect harmony of light, luxury, and artistry.", image: diamond4 },
    { name: "Infinity Shine", desc: "A modern symbol of endless beauty and devotion.", image: diamond5 },
    { name: "Luminous Charm", desc: "Graceful design that captures every heart.", image: diamond6 },
  ];

  const goldImages = [
    { src: gold1, name: "Golden Charm", desc: "Pure gold artistry crafted for everyday elegance." },
    { src: gold2, name: "Radiant Necklace", desc: "A stunning necklace that embodies grace and tradition." },
    { src: gold3, name: "Sunshine Bangles", desc: "Classic gold bangles crafted for timeless appeal." },
    { src: gold4, name: "Charm Bracelet", desc: "Subtle sophistication with a golden touch." },
    { src: gold5, name: "Twilight Earrings", desc: "Delicate drop earrings that define elegance." },
    { src: gold6, name: "Royal Hoops", desc: "Minimal and magnificent, perfect for all occasions." },
  ];

  const bridalImages = [bridal1, bridal2, bridal3, bridal4];
  const gemImages = [gem1, gem2, gem3, gem4];

  return (
    <>
      <Header />

      {/* ✨ Navigation Tabs */}
      <nav className="flex flex-wrap justify-center gap-8 mt-24 text-lg font-medium">
        {["diamond", "gold", "bridal", "gemstone"].map((section, i) => {
          const titles = ["Diamond Elegance", "Gold Radiance", "Bridal Collection", "Gemstone Grace"];
          return (
            <a
              key={section}
              href={`#${section}`}
              className="relative text-gray-800 hover:text-[#d4af37] transition-colors group"
            >
              {titles[i]}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-500 group-hover:w-full"></span>
            </a>
          );
        })}
      </nav>

      {/* ---------------- Diamond Elegance ---------------- */}
      <section id="diamond" className="bg-gradient-to-b from-[#fffdf8] via-[#fffaf0] to-[#fff9ef] py-20 text-center scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Diamond <span className="text-[#d4af37]">Elegance</span>
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Discover the brilliance of our diamond collection — where light meets luxury.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">
          {diamondCollections.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-[#f3e7c4]/80 hover:border-[#d4af37]/60 transition-all duration-700 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative w-full h-[340px]">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-[#d4af37] mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Gold Radiance ---------------- */}
      <section id="gold" className="relative bg-[#fff9ef] py-20 text-center scroll-mt-24">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Gold <span className="text-[#d4af37]">Radiance</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-14">
          Experience the warmth and luxury of our gold designs, crafted with perfection.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {goldImages.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-[#f3e7c4]/70 hover:border-[#d4af37]/60"
            >
              <Image
                src={item.src}
                alt={item.name}
                className="object-cover w-full h-[400px] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-[#d4af37]">{item.name}</h3>
                <p className="text-sm text-gray-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Bridal Collection ---------------- */}
      <section id="bridal" className="bg-gradient-to-b from-[#fff9ef] to-[#fffdf8] py-20 text-center scroll-mt-24">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Bridal <span className="text-[#d4af37]">Collection</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          A symphony of beauty and tradition, crafted for your special day.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-14 px-6">
          {bridalImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 group"
            >
              <Image
                src={img}
                alt={`Bridal ${i + 1}`}
                className="object-contain w-full h-[480px] bg-white group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Gemstone Grace ---------------- */}
      <section id="gemstone" className="bg-gradient-to-b from-[#fffdf8] to-[#fff9ef] py-20 text-center scroll-mt-24">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Gemstone <span className="text-[#d4af37]">Grace</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-14">
          Discover vibrant gemstones — expressions of color, life, and timeless charm.
        </p>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {gemImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl border border-[#f3e7c4]/70 hover:border-[#d4af37]/60 group transition-all duration-700 ${
                i % 2 === 0 ? "lg:row-span-2 h-[650px]" : "h-[320px]"
              }`}
            >
              <Image
                src={img}
                alt={`Gemstone ${i + 1}`}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
