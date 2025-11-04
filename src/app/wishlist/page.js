"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  // ✅ Load wishlist items from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // ✅ Remove item from wishlist
  const handleRemove = (productName) => {
    const updatedWishlist = wishlist.filter((item) => item.name !== productName);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#fffaf3] pt-40 pb-16 px-6 md:px-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Your Wishlist 💖
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Your wishlist is empty.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {wishlist.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[#f3e7c4]"
              >
                <div className="relative w-full h-72 bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-[#d4af37] font-semibold text-lg mb-4">
                    ₹{item.price.toLocaleString()}
                  </p>

                  <button
                    onClick={() => handleRemove(item.name)}
                    className="w-full py-3 text-lg font-semibold text-white bg-[#d4af37] rounded-full shadow-lg hover:bg-[#c39b2b] transition-all duration-300"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
