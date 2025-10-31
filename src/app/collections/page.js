"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import diamondImg from "../../../public/DiamondRing.png";
import goldImg from "../../../public/goldimg.png";
import bridalImg from "../../../public/bridal.png";
import gemstoneImg from "../../../public/chain.png";

const collections = [
  {
    id: 1,
    name: "Diamond Elegance",
    description: "Timeless brilliance crafted to perfection.",
    image: diamondImg,
    link: "/products#diamond", // ✅ will open diamond section
  },
  {
    id: 2,
    name: "Gold Radiance",
    description: "Embrace warmth and luxury with pure gold designs.",
    image: goldImg,
    link: "/products#gold", // ✅ will open gold section
  },
  {
    id: 3,
    name: "Bridal Collection",
    description: "Celebrate your love with our exquisite bridal jewelry.",
    image: bridalImg,
    link: "/products#bridal", // ✅ will open bridal section
  },
  {
    id: 4,
    name: "Gemstone Grace",
    description: "Vibrant gemstones full of life and color.",
    image: gemstoneImg,
    link: "/products#gemstone", // ✅ will open gemstone section
  },
];

export default function CollectionsPage() {
  return (
    <>
      <Header />

      <section className="relative w-full bg-gradient-to-b from-[#fffdf8] to-[#fff9ef] text-gray-900 py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 tracking-wide">
            Our <span className="text-[#d4af37]">Collections</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            Discover our exclusive jewelry collections — each piece a symbol of elegance, passion, and craftsmanship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {collections.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-[#f3e7c4]/70 hover:border-[#d4af37]/60"
              >
                <div className="relative w-full h-[380px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-all duration-700" />
                </div>

                <div className="absolute bottom-0 w-full p-6 text-white text-left bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h3 className="text-2xl font-bold mb-2 tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-sm mb-4">{item.description}</p>

                  <Link
                    href={item.link}
                    className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e2c77d] text-white font-medium hover:opacity-90 transition-all shadow-md"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      </section>

      <Footer />
    </>
  );
}
