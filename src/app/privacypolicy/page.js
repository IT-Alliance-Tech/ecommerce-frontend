"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

   
      <section className="bg-gradient-to-b from-[#fff5f7] to-[#ffeaf0] min-h-screen py-20 mt-20">
        <div className="max-w-5xl mx-auto px-6">
          
              <h1 className="text-5xl font-bold text-center text-gray-900 mb-10">
              Privacy <span className="text-[#d4af37]">Policy</span>
              </h1>

        
              <p className="text-center text-gray-600 text-lg mb-14 max-w-3xl mx-auto">
              We value your trust and are committed to protecting your personal information.
              Please read this Privacy Policy carefully to understand how we handle your data.
              </p>

         
          <div className="space-y-10">
           
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#f3e7c4]/70 hover:border-[#d4af37]/60 transition-all duration-700">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                We collect personal details such as your name, email address, phone number, and billing
                information when you make a purchase or contact us. We may also collect non-personal data
                like browser type and location for analytics purposes.
              </p>
            </div>

        
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#f3e7c4]/70 hover:border-[#d4af37]/60 transition-all duration-700">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information helps us provide better services — from processing your orders and
                delivering jewelry safely to keeping you informed about new collections and offers.
                We also use data to enhance our website’s performance and user experience.
              </p>
            </div>

           
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#f3e7c4]/70 hover:border-[#d4af37]/60 transition-all duration-700">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                We use secure servers and encryption technology to protect your data. Only authorized
                team members can access customer information, and we never share or sell your personal data
                to third parties.
              </p>
            </div>

           
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#f3e7c4]/70 hover:border-[#d4af37]/60 transition-all duration-700">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies to improve your browsing experience, remember preferences, and analyze
                traffic. You can disable cookies through your browser settings, though some features may
                not function properly as a result.
              </p>
            </div>

          
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#f3e7c4]/70 hover:border-[#d4af37]/60 transition-all duration-700">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, update, or delete your personal information. If you wish to
                exercise these rights or have concerns about your data, please contact us at
                <span className="text-[#d4af37] font-medium"> support@yourjewelrysite.com</span>.
              </p>
            </div>


            <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#f3e7c4]/70 hover:border-[#d4af37]/60 transition-all duration-700">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                with the updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
           </section>

      <Footer />
    </>
  );
}
