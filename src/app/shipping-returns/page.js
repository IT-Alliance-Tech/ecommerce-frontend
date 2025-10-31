"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaShippingFast, FaUndoAlt, FaClock, FaHandHoldingHeart } from "react-icons/fa";
import bannerImg from "../../../public/contact.png"; // ✅ Add your banner image

const ShippingReturns = () => {
  return (
    <div className="bg-[#fffaf3] text-gray-900 overflow-hidden flex flex-col min-h-screen">
      <Header />

      {/* 🌟 Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center mt-16 md:mt-20">
        <Image
          src={bannerImg}
          alt="Shipping & Returns Banner"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold tracking-wide"
          >
            Shipping & <span className="text-[#d4af37]">Returns</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl mt-4 text-gray-200"
          >
            We make sure your sparkle reaches you safely ✨
          </motion.p>
        </div>
      </section>

      {/* 🚚 Shipping Policy Section */}
      <section className="py-20 bg-gradient-to-b from-[#fffaf3] to-[#f8f4ea] relative">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Shipping <span className="text-[#d4af37]">Policy</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-[#f2e7cd]"
            >
              <FaShippingFast className="text-[#d4af37] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-700">
                Orders are processed within 2–3 business days and shipped via trusted delivery partners.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-[#f2e7cd]"
            >
              <FaClock className="text-[#d4af37] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Estimated Time</h3>
              <p className="text-gray-700">
                Delivery typically takes 5–7 working days, depending on your location and product type.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-[#f2e7cd]"
            >
              <FaHandHoldingHeart className="text-[#d4af37] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safe Packaging</h3>
              <p className="text-gray-700">
                Each jewelry piece is packed securely with love to ensure it arrives in perfect condition.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 text-center text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            <p>
              You’ll receive an email with your tracking number once your order has shipped.  
              Please note that delays may occur during festivals or due to unforeseen logistics issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔁 Return Policy Section */}
      <section className="py-20 bg-[#fffdf9] relative">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Return & <span className="text-[#d4af37]">Exchange Policy</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-10 border border-[#f2e7cd]"
            >
              <FaUndoAlt className="text-[#d4af37] text-5xl mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Hassle-Free Returns</h3>
              <p className="text-gray-700 leading-relaxed">
                If your jewelry piece doesn’t meet your expectations, you can return or exchange it within 7 days of delivery.  
                The item must be unused, unworn, and in its original packaging.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-10 border border-[#f2e7cd]"
            >
              <FaHandHoldingHeart className="text-[#d4af37] text-5xl mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Refund Process</h3>
              <p className="text-gray-700 leading-relaxed">
                Once we receive your returned product, our quality team will inspect it, and the refund will be processed within 5–7 working days to your original payment method.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            <p>
              Customized or engraved jewelry pieces are not eligible for returns.  
              For assistance, please contact our support team at{" "}
              <span className="text-[#d4af37] font-semibold">support@jewelcrafts.com</span>.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingReturns;
