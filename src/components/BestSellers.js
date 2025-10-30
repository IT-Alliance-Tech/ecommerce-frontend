"use client";
import Image from "next/image";

import ringImg from "../../public/DiamondRing.png";
import pendantImg from "../../public/GoldPendant.png";
import braceletImg from "../../public/ElegantBracelet.png";
import earringsImg from "../../public/PearlEarrings.png";

const bestSellers = [
  {
    id: 1,
    name: "Diamond Ring",
    price: "₹25,000",
    image: ringImg,
  },
  {
    id: 2,
    name: "Gold Pendant",
    price: "₹18,500",
    image: pendantImg,
  },
  {
    id: 3,
    name: "Elegant Bracelet",
    price: "₹22,000",
    image: braceletImg,
  },
  {
    id: 4,
    name: "Pearl Earrings",
    price: "₹15,500",
    image: earringsImg,
  },
];

export default function BestSellers() {
  return (
    <section
      className="relative w-full pt-10 pb-20 bg-gradient-to-b from-[#fffdf8] to-[#ffffff] text-gray-900 dark:bg-[#ffffff] dark:text-gray-900"
      data-theme="light"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide text-gray-800">
          Our Best Sellers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Discover the pieces our customers adore the most — timeless jewelry crafted with precision and passion.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#ffffff] rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d4af37]/70"
            >
              {/* Image */}
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover brightness-[1.25] contrast-[1.1] saturate-[1.15] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Details */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.name}
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-4">
                  {item.price}
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-[#d4af37] to-[#e2c77d] text-white rounded-full font-semibold hover:opacity-90 transition">
                  Add to Cart
                </button>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#d4af37]/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <a
            href="/products"
            className="inline-block px-8 py-3 rounded-full bg-[#d4af37] text-white font-medium hover:bg-[#c49c2d] transition-all shadow-md hover:shadow-lg"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
