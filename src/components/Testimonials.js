"use client";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aaradhya Sharma",
    review:
      "Absolutely loved the craftsmanship! The diamond ring I ordered was more stunning than I imagined. Truly luxurious and elegant.",
    rating: 5,
  },
  {
    id: 2,
    name: "Meera Patel",
    review:
      "The gold pendant is beautiful and feels premium. The packaging and detailing show how much care they put into every piece.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ishaan Verma",
    review:
      "Exceptional quality and design. My bracelet still shines like new after months of wear. Highly recommended for gifting!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 bg-gradient-to-b from-[#fffaf1] via-[#fff5e1] to-[#ffefcc] overflow-hidden"
    >
      {/* Background Glow Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-[10%] w-24 h-24 bg-[#d4af37]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-16 right-[15%] w-32 h-32 bg-[#d4af37]/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_80%)]" />
      </div>

      {/* Title Section (Moved Up) */}
      <div className="relative text-center mb-10 fade-up">
        <h2 className="text-5xl font-bold text-gray-900 mb-3 tracking-wide">
          Cherished <span className="text-[#d4af37]">Experiences</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Real stories from those who wear{" "}
          <span className="text-[#d4af37] font-semibold">Luxe Jewels</span> with
          pride and passion.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative max-w-4xl mx-auto px-6 fade-up delay-200">
        <div className="relative bg-white/80 backdrop-blur-lg border border-[#f0df9b] shadow-[0_15px_40px_rgba(212,175,55,0.25)] rounded-[2rem] p-12 text-center transform transition-all duration-700 hover:scale-[1.02]">
          {/* Decorative Quote Mark */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#d4af37] text-7xl font-serif opacity-40">
            “
          </div>

          {/* Rating Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} size={22} className="text-[#d4af37] fill-[#d4af37]" />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-800 text-lg italic leading-relaxed mb-6 relative z-10">
            {active.review}
          </p>

          {/* Reviewer Name */}
          <h4 className="text-xl font-semibold text-gray-900 relative z-10">
            — {active.name}
          </h4>

          {/* Gold Glow Border Animation */}
          <div className="absolute inset-0 rounded-[2rem] border border-transparent animate-pulse-glow"></div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[#d4af37] scale-110 shadow-[0_0_10px_#d4af37]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Decorative Gold Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </section>
  );
}
