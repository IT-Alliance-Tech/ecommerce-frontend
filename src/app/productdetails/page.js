"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ✅ Import all product images
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

export default function ProductDetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const collection = searchParams.get("collection");
  const productName = searchParams.get("product");

  // ✅ All product data with name, price, description, features
  const collectionsData = {
    diamond: [
      {
        name: "Celestial Spark",
        desc: "Radiating brilliance inspired by starlit nights.",
        image: diamond1,
        price: 85000,
        features: [
          "Brilliant-cut diamond centerpiece",
          "18K white gold finish",
          "Certified by IGI for authenticity",
          "Perfect for engagements or anniversaries",
        ],
      },
      {
        name: "Eternal Grace",
        desc: "An elegant statement of everlasting love.",
        image: diamond2,
        price: 99000,
        features: [
          "Elegant solitaire design",
          "Crafted with precision brilliance",
          "Made with ethically sourced diamonds",
          "Timeless beauty for every occasion",
        ],
      },
      {
        name: "Royal Aura",
        desc: "A regal masterpiece crafted for timeless elegance.",
        image: diamond3,
        price: 105000,
        features: [
          "Multi-stone brilliance setting",
          "18K rose gold polish",
          "Elegant handcrafted artistry",
          "Luxurious gift packaging included",
        ],
      },
      {
        name: "Pure Radiance",
        desc: "A perfect harmony of light, luxury, and artistry.",
        image: diamond4,
        price: 78000,
        features: [
          "Brilliant shine",
          "Gold finish",
          "Durable design",
          "Elegant for every occasion",
        ],
      },
      {
        name: "Infinity Shine",
        desc: "A modern symbol of endless beauty and devotion.",
        image: diamond5,
        price: 92000,
        features: [
          "Modern infinity style",
          "Perfect polish",
          "Certified diamond quality",
          "Lightweight comfort",
        ],
      },
      {
        name: "Luminous Charm",
        desc: "Graceful design that captures every heart.",
        image: diamond6,
        price: 88000,
        features: [
          "High polish diamond",
          "Fine craftsmanship",
          "Ideal for gifting",
          "Long-lasting durability",
        ],
      },
    ],
    gold: [
      {
        name: "Golden Charm",
        desc: "Pure gold artistry crafted for everyday elegance.",
        image: gold1,
        price: 45000,
        features: [
          "22K pure gold",
          "Daily wear friendly",
          "Skin-safe polish",
          "Handcrafted design",
        ],
      },
      {
        name: "Radiant Necklace",
        desc: "A stunning necklace that embodies grace and tradition.",
        image: gold2,
        price: 73000,
        features: [
          "Heavy gold detailing",
          "Traditional touch",
          "Durable chain lock",
          "Perfect festive choice",
        ],
      },
      {
        name: "Sunshine Bangles",
        desc: "Classic gold bangles crafted for timeless appeal.",
        image: gold3,
        price: 52000,
        features: [
          "Set of two",
          "Solid gold",
          "Elegant design",
          "Comfort fit",
        ],
      },
      {
        name: "Charm Bracelet",
        desc: "Subtle sophistication with a golden touch.",
        image: gold4,
        price: 34000,
        features: [
          "Flexible fit",
          "Premium polish",
          "Smooth finishing",
          "Minimal look",
        ],
      },
      {
        name: "Twilight Earrings",
        desc: "Delicate drop earrings that define elegance.",
        image: gold5,
        price: 27000,
        features: [
          "Comfort hooks",
          "Pure gold plating",
          "Handcrafted",
          "Perfect for casual and party wear",
        ],
      },
      {
        name: "Royal Hoops",
        desc: "Minimal and magnificent, perfect for all occasions.",
        image: gold6,
        price: 32000,
        features: [
          "Perfectly round design",
          "Glossy finish",
          "Hypoallergenic",
          "Durable clasp",
        ],
      },
    ],
    bridal: [
      {
        name: "Majestic Bride",
        image: bridal1,
        desc: "Grand bridal set designed for the perfect wedding look.",
        price: 210000,
        features: [
          "Complete set: necklace + earrings + headpiece",
          "Gold plated with ruby stones",
          "Traditional craftsmanship",
          "Exclusive bridal design",
        ],
      },
      {
        name: "Royal Blossom",
        image: bridal2,
        desc: "Elegant bridal necklace with intricate patterns.",
        price: 190000,
        features: [
          "Kundan style design",
          "Handcrafted details",
          "Gold plated",
          "Exclusive design",
        ],
      },
      {
        name: "Eternal Queen",
        image: bridal3,
        desc: "Luxury bridal jewelry with a royal touch.",
        price: 230000,
        features: [
          "Multi-layered set",
          "Genuine stones",
          "Elegant finish",
          "Wedding exclusive piece",
        ],
      },
      {
        name: "Golden Symphony",
        image: bridal4,
        desc: "Classic gold-toned bridal necklace set.",
        price: 185000,
        features: [
          "Rich detailing",
          "Durable make",
          "Traditional yet trendy",
          "Perfect for grand occasions",
        ],
      },
    ],
    gemstone: [
      {
        name: "Ruby Radiance",
        image: gem1,
        desc: "Beautiful ruby gemstone ring crafted for charm.",
        price: 58000,
        features: [
          "Real ruby stone",
          "Gold-plated finish",
          "Elegant for gifting",
          "Modern style",
        ],
      },
      {
        name: "Emerald Essence",
        image: gem2,
        desc: "Emerald necklace that defines elegance.",
        price: 64000,
        features: [
          "Emerald centerpiece",
          "Gold detailing",
          "Comfort chain",
          "Elegant look",
        ],
      },
      {
        name: "Sapphire Dream",
        image: gem3,
        desc: "Blue sapphire ring crafted with precision.",
        price: 72000,
        features: [
          "Sapphire gem",
          "Durable polish",
          "Smooth edges",
          "Everyday wear",
        ],
      },
      {
        name: "Amethyst Aura",
        image: gem4,
        desc: "Amethyst pendant that glows with light.",
        price: 69000,
        features: [
          "Purple hue design",
          "Unique cut",
          "Lightweight",
          "Perfect for evening wear",
        ],
      },
    ],
  };

  const product =
    collectionsData[collection]?.find((p) => p.name === productName) || null;

  if (!product) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center h-screen text-gray-600 text-xl">
          Product not found 😕
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-gradient-to-b from-[#fffaf3] to-[#fff5eb] pt-36 pb-24 px-6">
        <div className="max-w-6xl mx-auto bg-white/90 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-12 p-10 border border-[#f3e7c4]">
          <div className="flex justify-center items-center">
            <div className="relative w-[420px] h-[420px] rounded-3xl bg-white border border-[#f3e7c4] shadow-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {product.desc}
            </p>

            <p className="text-3xl font-semibold text-[#d4af37] mb-8">
              ₹{product.price.toLocaleString()}
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Features:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-10">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleAddToCart}
                className="px-10 py-3 bg-[#d4af37] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#c39b2b] transition-all duration-300"
              >
                Add to Cart
              </button>

              <button
                onClick={() => router.push(`/products?collection=${collection}`)}
                className="px-10 py-3 border-2 border-[#d4af37] text-[#d4af37] text-lg font-semibold rounded-full hover:bg-[#d4af37] hover:text-white transition-all duration-300"
              >
                Back to Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
