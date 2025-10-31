"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaGem, FaHandsHelping, FaCrown, FaLeaf, FaHeart } from "react-icons/fa";
import { GiSparkles, GiCutDiamond } from "react-icons/gi";

// Import images
import aboutHero from "../../../public/aboutbanner.png";
import aboutStory from "../../../public/gemstone4.png";
import craftsmanship1 from "../../../public/about2.png";
import craftsmanship2 from "../../../public/about3.png";
import craftsmanship3 from "../../../public/earrings.png";

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* 🌟 Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image src={aboutHero} alt="About Us Hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-6xl font-bold mb-4 tracking-wide">
            About <span className="text-[#d4af37]">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Where artistry meets legacy — celebrating beauty, precision, and timeless craftsmanship.
          </p>
        </motion.div>
      </section>

      {/* 💎 Who We Are */}
      <section className="py-20 bg-gradient-to-b from-[#fffdf8] to-[#fff9ef] text-gray-900 -mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Who <span className="text-[#d4af37]">We Are</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We’re not just jewelers — we’re storytellers of elegance and tradition.
              Our pieces blend timeless artistry with modern design to create something truly extraordinary.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {/* Finest Quality Card */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-8 rounded-3xl shadow-xl bg-[#fffaf2] hover:shadow-2xl text-center"
              >
                <FaGem className="text-[#d4af37] text-5xl mb-3 mx-auto" />
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="font-semibold text-lg mb-1"
                >
                  Finest Quality
                </motion.h3>
                <p className="text-gray-600 text-sm">
                  Ethically sourced materials shaped with perfection.
                </p>
              </motion.div>

              {/* Modern Artistry Card */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-8 rounded-3xl shadow-xl bg-[#fffaf2] hover:shadow-2xl text-center"
              >
                <GiSparkles className="text-[#d4af37] text-5xl mb-3 mx-auto" />
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-semibold text-lg mb-1"
                >
                  Modern Artistry
                </motion.h3>
                <p className="text-gray-600 text-sm">
                  Blending innovation with classic craftsmanship.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[460px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src={aboutStory} alt="Our Story" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 💍 Our Craftsmanship */}
      <section className="py-20 bg-[#fff9ef] text-center -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#d4af37]">Craftsmanship</span>
          </h2>
          <p className="text-gray-700 text-lg mb-12">
            Each creation is a masterpiece born from passion, precision, and purity — a reflection of our pursuit of perfection.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          {[craftsmanship1, craftsmanship2, craftsmanship3].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 group"
            >
              <Image
                src={img}
                alt={`Craft ${i}`}
                className="object-cover w-full h-[380px] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-6">
                <p className="text-white text-lg font-medium">
                  {i === 0
                    ? "Handcrafted with passion"
                    : i === 1
                    ? "Unmatched quality assurance"
                    : "Trusted by generations"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌸 Why Choose Us Section (moved up) */}
      <section className="py-16 bg-white text-gray-900 text-center relative overflow-hidden -mt-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf3] via-white to-[#fff9ef]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold mb-8">
            Why <span className="text-[#d4af37]">Choose Us</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-16">
            Experience the elegance of jewelry designed to capture hearts and crafted to last forever.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
            {[
              {
                icon: <FaHeart className="text-5xl text-[#d4af37]" />,
                title: "Timeless Elegance",
                desc: "Designs that stay graceful and iconic through every generation.",
              },
              {
                icon: <FaLeaf className="text-5xl text-[#d4af37]" />,
                title: "Ethical Sourcing",
                desc: "Every stone and metal is sourced responsibly and crafted with care.",
              },
              {
                icon: <FaCrown className="text-5xl text-[#d4af37]" />,
                title: "Royal Craftsmanship",
                desc: "Each piece reflects luxury, dedication, and unmatched mastery.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative p-10 rounded-3xl bg-[#fffaf3] shadow-xl border border-[#f2e5c4]/70 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#d4af37]">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 👑 Legacy Section (moved up slightly) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 text-center bg-gradient-to-b from-[#fff9ef] to-[#fffaf3] -mt-8"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          A Legacy of <span className="text-[#d4af37]">Excellence</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          Our story continues with the same spirit — crafting treasures that
          celebrate love, legacy, and luxury.
        </p>
      </motion.section>

      <Footer />
    </>
  );
}
