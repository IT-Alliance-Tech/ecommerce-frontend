"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function TermsOfService() {
  return (
    <>
      <Header />

      {/* Adjusted margin-top and updated heading colors */}
      <section className="bg-pink-50 min-h-screen py-20 mt-15 px-6 flex justify-center items-start">
        <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-3xl font-bold text-center text-[#d4af37] mb-6">
            Terms of Service
          </h1>

          <p className="text-gray-700 text-center mb-10 leading-relaxed">
            Welcome to our jewelry store website. By accessing or using our
            website, you agree to comply with the following Terms of Service.
            Please read them carefully before proceeding.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-2">
                1. General Conditions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to refuse service to anyone for any reason
                at any time. You agree not to reproduce, duplicate, copy, sell,
                resell, or exploit any portion of our products or services
                without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-2">
                2. Product Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We strive to display accurate information for all jewelry
                collections including gemstones, gold, and diamond pieces.
                However, variations may occur in color or texture due to lighting
                and photography.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-2">
                3. Pricing & Payments
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All prices displayed are in INR and are subject to change without
                prior notice. We use secure payment gateways to ensure your
                transaction details remain confidential.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-2">
                4. Shipping & Delivery
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Orders will be processed within 2–5 business days. Delivery times
                may vary depending on location. You will receive an email update
                once your product has been shipped.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-2">
                5. Return & Refund Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Products can be returned within 7 days of delivery if found
                defective or damaged. Custom jewelry items are non-returnable
                unless proven defective.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-2">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are not liable for any damages or losses arising from the use
                or inability to use our website or products. Use of our services
                is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-2">
                7. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms of Service from time to time. It is
                your responsibility to review them periodically for updates.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-12">
            If you have any questions regarding these Terms, please contact us
            through our support page or email.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
