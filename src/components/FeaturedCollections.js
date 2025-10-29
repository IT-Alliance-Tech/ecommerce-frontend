"use client";
import Image from "next/image";

import necklaceImg from "../../public/Necklaces.png";
import earringsImg from "../../public/earrings.png";
import braceletImg from "../../public/Bracelets.png";

const collections = [
  {
    id: 1,
    title: "Necklaces",
    image: necklaceImg,
  },
  {
    id: 2,
    title: "Earrings",
    image: earringsImg,
  },
  {
    id: 3,
    title: "Bracelets",
    image: braceletImg,
  },
];

export default function FeaturedCollections() {
  return (
    <section
      className="relative w-full pt-12 pb-20 bg-[#ffffff] text-gray-900 dark:bg-[#ffffff] dark:text-gray-900"
      data-theme="light"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-10 tracking-wide text-gray-800">
          Featured Collections
        </h2>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-[#f9f9f9] transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="object-cover w-full h-80 brightness-[1.25] contrast-[1.15] saturate-[1.2]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

              {/* Title */}
              <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
