"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link"; // ✅ Added import for navigation

// ✅ Import images
import diamond1 from "../../../public/DiamondRing.png";
import diamond2 from "../../../public/dimond1.png";
import diamond3 from "../../../public/dimond2.png";
import diamond4 from "../../../public/dimond3.png";
import diamond5 from "../../../public/dimond4.png";
import diamond6 from "../../../public/dimond5.png";

import gold1 from "../../../public/goldimg.png";
import gold2 from "../../../public/goldnack2.png";
import gold3 from "../../../public/bangle.png";
import gold4 from "../../../public/bracelet1.png";
import gold5 from "../../../public/earring1.png";
import gold6 from "../../../public/earring2.png";

import bridal1 from "../../../public/bridal1.png";
import bridal2 from "../../../public/bridal2.png";
import bridal3 from "../../../public/bridal3.png";
import bridal4 from "../../../public/bridal4.png";

import gem1 from "../../../public/gemstone1.png";
import gem2 from "../../../public/gemstone5.png";
import gem3 from "../../../public/gemstone3.png";
import gem4 from "../../../public/gemstone4.png";

function ProductsContent() {
  const searchParams = useSearchParams();
  const collection = searchParams.get("collection") || "diamond";

  // 🩶 Data
  const diamondCollections = [
    { name: "Celestial Spark", desc: "Radiating brilliance inspired by starlit nights.", image: diamond1 },
    { name: "Eternal Grace", desc: "An elegant statement of everlasting love.", image: diamond2 },
    { name: "Royal Aura", desc: "A regal masterpiece crafted for timeless elegance.", image: diamond3 },
    { name: "Pure Radiance", desc: "A perfect harmony of light, luxury, and artistry.", image: diamond4 },
    { name: "Infinity Shine", desc: "A modern symbol of endless beauty and devotion.", image: diamond5 },
    { name: "Luminous Charm", desc: "Graceful design that captures every heart.", image: diamond6 },
  ];

  const goldCollections = [
    { name: "Golden Charm", desc: "Pure gold artistry crafted for everyday elegance.", image: gold1 },
    { name: "Radiant Necklace", desc: "A stunning necklace that embodies grace and tradition.", image: gold2 },
    { name: "Sunshine Bangles", desc: "Classic gold bangles crafted for timeless appeal.", image: gold3 },
    { name: "Charm Bracelet", desc: "Subtle sophistication with a golden touch.", image: gold4 },
    { name: "Twilight Earrings", desc: "Delicate drop earrings that define elegance.", image: gold5 },
    { name: "Royal Hoops", desc: "Minimal and magnificent, perfect for all occasions.", image: gold6 },
  ];

  const bridalCollections = [
    { image: bridal1 },
    { image: bridal2 },
    { image: bridal3 },
    { image: bridal4 },
  ];

  const gemstoneCollections = [
    { image: gem1 },
    { image: gem2 },
    { image: gem3 },
    { image: gem4 },
  ];

  const renderSection = () => {
    switch (collection) {
      case "diamond":
        return (
          <section className="py-20 mt-28 bg-gradient-to-b from-[#fffdf8] to-[#fff9ef] text-center">
            <h1 className="text-5xl font-bold mb-3 text-gray-900 -mt-10">
              Diamond <span className="text-[#d4af37]">Elegance</span>
            </h1>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Discover the brilliance of our diamond collection — where light meets luxury.
            </p>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
              {diamondCollections.map((item, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: "/productdetails",
                    query: { collection: "diamond", product: item.name },
                  }}
                >
                  <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-[#f3e7c4]/80 hover:border-[#d4af37]/60 transition-all duration-700 overflow-hidden transform hover:-translate-y-2 cursor-pointer">
                    <div className="relative w-full h-[340px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 text-left">
                      <h3 className="text-2xl font-semibold text-[#d4af37] mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );

      case "gold":
        return (
          <section className="bg-[#fff9ef] py-20 mt-28 text-center">
            <h1 className="text-5xl font-bold mb-3 text-gray-900 -mt-10">
              Gold <span className="text-[#d4af37]">Radiance</span>
            </h1>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Experience the warmth and luxury of gold — crafted for timeless beauty.
            </p>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
              {goldCollections.map((item, i) => (
                <Link
                  key={i}
                  href={{
                    pathname: "/productdetails",
                    query: { collection: "gold", product: item.name },
                  }}
                >
                  <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-[#f3e7c4]/70 hover:border-[#d4af37]/60 cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-[400px] group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-semibold text-[#d4af37]">{item.name}</h3>
                      <p className="text-sm text-gray-100">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );

      case "bridal":
        return (
          <section className="bg-gradient-to-b from-[#fff9ef] to-[#fffdf8] py-20 mt-28 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-3 -mt-10">
              Bridal <span className="text-[#d4af37]">Collection</span>
            </h1>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              A symphony of beauty and tradition — designed for your unforgettable day.
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14 px-6">
              {bridalCollections.map((item, i) => (
                <Link
                  key={i}
                  href={{
                    pathname: "/productdetails",
                    query: { collection: "bridal", product: `Bridal ${i + 1}` },
                  }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={`Bridal ${i + 1}`}
                      className="object-contain w-full h-[480px] bg-white group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );

      case "gemstone":
        return (
          <section className="bg-gradient-to-b from-[#fffdf8] to-[#fff9ef] py-20 mt-28 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-3 -mt-10">
              Gemstone <span className="text-[#d4af37]">Grace</span>
            </h1>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Discover the art of color — gemstones that radiate life, charm, and individuality.
            </p>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
              {gemstoneCollections.map((item, i) => (
                <Link
                  key={i}
                  href={{
                    pathname: "/productdetails",
                    query: { collection: "gemstone", product: `Gemstone ${i + 1}` },
                  }}
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl border border-[#f3e7c4]/70 hover:border-[#d4af37]/60 group transition-all duration-700 cursor-pointer ${
                      i % 2 === 0 ? "lg:row-span-2 h-[650px]" : "h-[320px]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={`Gemstone ${i + 1}`}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return renderSection();
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center mt-32 text-gray-500">Loading products...</div>}>
        <ProductsContent />
      </Suspense>
      <Footer />
    </>
  );
}
