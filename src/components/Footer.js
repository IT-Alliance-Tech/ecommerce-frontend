"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-gray-800">
      {/* Gold Glow Top Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#d4af37]/90 via-[#fceabb]/90 to-[#d4af37]/90 animate-pulse" />

      {/* Background Gradient */}
      <div className="bg-gradient-to-b from-white via-[#fffdf5] to-[#fdf8e6] border-t border-[#d4af37]/30 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-3">
              Luxe<span className="text-[#d4af37]">Jewels</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Elevate your style with timeless designs, crafted to perfection for every elegant occasion.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 border border-[#d4af37]/40 rounded-full hover:bg-[#d4af37] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#d4af37] after:mt-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[15px]">
              {["Home", "Collections", "About Us", "Contact"].map((name) => (
                <li key={name}>
                  <Link
                    href="/"
                    className="hover:text-[#d4af37] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#d4af37] after:mt-2">
              Customer Care
            </h3>
            <ul className="space-y-3 text-[15px]">
              {["Shipping & Returns", "FAQs", "Privacy Policy", "Terms of Service"].map((name) => (
                <li key={name}>
                  <Link
                    href="#"
                    className="hover:text-[#d4af37] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Newsletter removed) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#d4af37] after:mt-2">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-gray-700 text-[15px]">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#d4af37]" /> support@luxejewels.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#d4af37]" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-[#d4af37]" /> Bengaluru, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#d4af37]/20 mt-12 pt-5 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-900">
              Luxe<span className="text-[#d4af37]">Jewels</span>
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Sparkles (for luxury shimmer) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-[#d4af37]/70 rounded-full blur-[1px] animate-ping"></div>
        <div className="absolute bottom-16 right-1/3 w-2 h-2 bg-[#d4af37]/70 rounded-full blur-[1px] animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-[#d4af37]/80 rounded-full blur-[2px] animate-pulse"></div>
      </div>
    </footer>
  );
}
