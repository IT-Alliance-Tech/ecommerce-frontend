"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  // ✅ Load items from localStorage on page load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ✅ Remove item from cart
  const handleRemove = (name) => {
    const updatedCart = cart.filter((item) => item.name !== name);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Calculate total
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header />

      <section className="min-h-screen bg-gradient-to-b from-[#fffaf3] to-[#fff5eb] pt-36 pb-24 px-6">
        <div className="max-w-6xl mx-auto bg-white/90 rounded-3xl shadow-2xl border border-[#f3e7c4] p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Your Cart 🛍️
          </h1>

          {cart.length === 0 ? (
            <p className="text-center text-gray-500 text-lg py-20">
              Your cart is empty.
            </p>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white shadow-md rounded-2xl p-6 border border-[#f3e7c4]"
                  >
                    <div className="relative w-32 h-32 mr-6">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        {item.name}
                      </h2>
                      <p className="text-[#d4af37] text-xl font-medium mb-3">
                        ₹{item.price.toLocaleString()}
                      </p>
                      <button
                        onClick={() => handleRemove(item.name)}
                        className="px-6 py-2 bg-[#e57373] text-white rounded-full hover:bg-[#ef5350] transition-all duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-right">
                <p className="text-2xl font-semibold text-gray-800">
                  Total:{" "}
                  <span className="text-[#d4af37]">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </p>
                <button className="mt-6 px-10 py-3 bg-[#d4af37] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#c39b2b] transition-all duration-300">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
