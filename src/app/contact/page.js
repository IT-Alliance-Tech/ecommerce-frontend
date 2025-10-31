"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";
import contactBanner from "../../../public/contact1.png"; // ✅ Local banner image

const Contact = () => {
  return (
    <div className="bg-[#fffaf3] text-gray-900 overflow-hidden flex flex-col min-h-screen">
      <Header />

      {/* 🌟 Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-16 md:mt-20">
        <Image
          src={contactBanner}
          alt="Contact Us Banner"
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
            Contact <span className="text-[#d4af37]">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl mt-4 text-gray-200"
          >
            We’re here to bring your sparkle to life ✨ Reach out anytime.
          </motion.p>
        </div>
      </section>

      {/* 💌 Get in Touch Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#fffaf3] to-[#f8f4ea] overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl"></div>

        {/* Section Heading */}
        <div className="max-w-6xl mx-auto relative z-10 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Get in <span className="text-[#d4af37]">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            Have a question, custom jewelry idea, or collaboration in mind?  
            Let’s start the conversation and make your dream shine bright.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 px-6 md:px-10 relative z-10">
          {/* 🟢 Redesigned Left Info Section (not box-style anymore) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center p-4"
          >
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Let’s <span className="text-[#d4af37]">Connect</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 max-w-md">
                We love hearing from you — whether it’s feedback, questions, or
                a sparkling idea you’d like to share. Reach us using the details
                below ✨
              </p>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-[#d4af37]/15 rounded-full shadow-md">
                    <FaPhoneAlt className="text-[#d4af37] text-xl" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg">
                    +91 98765 43210
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-[#d4af37]/15 rounded-full shadow-md">
                    <FaEnvelope className="text-[#d4af37] text-xl" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg">
                    info@jewelcrafts.com
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-[#d4af37]/15 rounded-full shadow-md">
                    <FaMapMarkerAlt className="text-[#d4af37] text-xl" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg max-w-sm">
                    123 Sparkle Street, Gold Plaza, New Delhi
                  </p>
                </motion.div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#d4af37]/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          {/* ✨ Right Contact Form (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur-md border border-[#f2e7cd] rounded-[2rem] p-10 shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] transition-all duration-500"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 outline-none transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 mb-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 outline-none transition"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#b38a28] text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ✨ Why Reach Out Section */}
      <section className="py-24 bg-[#fffdf9] text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          Why Reach Out to <span className="text-[#d4af37]">Us?</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 md:px-10">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-[#f2e7cd] transition"
          >
            <FaHandshake className="text-[#d4af37] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Personalized Guidance</h3>
            <p className="text-gray-700">
              Get expert suggestions tailored to your taste and style.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-[#f2e7cd] transition"
          >
            <FaHeart className="text-[#d4af37] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Friendly Support</h3>
            <p className="text-gray-700">
              Our team ensures a smooth and enjoyable jewelry experience.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-[#f2e7cd] transition"
          >
            <FaEnvelope className="text-[#d4af37] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
            <p className="text-gray-700">
              We value your time — expect prompt and helpful responses.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
