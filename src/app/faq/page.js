"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// 📸 Import banner image
import faqBanner from "../../../public/bangle.png"; 

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What materials are used in your jewelry?",
      answer:
        "All our jewelry pieces are crafted using premium quality gold, silver, and ethically sourced gemstones to ensure both durability and beauty.",
    },
    {
      question: "Do you offer custom designs?",
      answer:
        "Yes! We specialize in personalized jewelry. You can collaborate with our designers to create a piece that perfectly suits your taste.",
    },
    {
      question: "How do I take care of my jewelry?",
      answer:
        "We recommend storing jewelry in a dry place, away from direct sunlight, and cleaning it with a soft cloth to maintain its shine.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 7-day return or exchange policy on non-custom items, provided they are returned in their original condition and packaging.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide! Shipping costs and delivery times may vary depending on your location.",
    },
  ];

  return (
    <>
      <Header />

      {/* 🌟 Hero Banner Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden mt-20">
        <Image
          src={faqBanner}
          alt="FAQ Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-6xl font-bold mb-4 tracking-wide">
            Frequently <span className="text-[#d4af37]">Asked Questions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Find answers to the most common questions about our products and
            services.
          </p>
        </motion.div>
      </section>

      {/* 💬 FAQ Section */}
      <section className="py-20 bg-[#fff9ef] text-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Have <span className="text-[#d4af37]">Questions?</span> We Have
            Answers
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#f2e5c4]/70"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left text-lg font-semibold text-[#2d2d2d]" // <-- changed color here
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`transition-transform duration-300 text-[#d4af37] ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    activeIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden px-6"
                >
                  <p className="text-gray-700 pb-6">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
