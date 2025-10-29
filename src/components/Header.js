"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag, Sparkles } from "lucide-react";
import logo from "../../public/logo.png"; // Update with your logo path

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md border-b border-[#d4af37]/40"
          : "bg-white border-b border-[#d4af37]/30"
      }`}
    >
      {/* Soft Gold Gradient Line (Luxury Touch) */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#d4af37]/80 via-[#f5e6a1]/90 to-[#d4af37]/80" />

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Sparkle */}
        <Link href="/" className="flex items-center gap-2 relative">
          <Image src={logo} alt="Logo" width={45} height={45} />
          <span className="text-xl font-bold tracking-wide uppercase">
            Luxe<span className="text-[#d4af37]">Jewels</span>
          </span>

          {/* Soft sparkle animation near logo */}
          <span className="absolute -top-1 right-[-12px] animate-pulse text-[#d4af37] opacity-80">
            <Sparkles size={18} />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[15px] font-medium tracking-wider uppercase text-gray-800 transition group"
            >
              <span className="group-hover:text-[#d4af37] transition duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#d4af37] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="hover:text-[#d4af37] transition-transform duration-300 hover:scale-110">
            <Search size={21} />
          </button>
          <button className="relative hover:text-[#d4af37] transition-transform duration-300 hover:scale-110">
            <ShoppingBag size={21} />
            <span className="absolute -top-2 -right-3 bg-[#d4af37] text-white text-[11px] px-1.5 py-0.5 rounded-full font-semibold shadow-sm">
              2
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden hover:text-[#d4af37] transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#d4af37]/30 shadow-xl">
          <nav className="flex flex-col items-center py-5 space-y-4 text-gray-900">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] font-medium uppercase tracking-wider hover:text-[#d4af37] transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 mt-2">
              <Search className="hover:text-[#d4af37]" size={22} />
              <ShoppingBag className="hover:text-[#d4af37]" size={22} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
