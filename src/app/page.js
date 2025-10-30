"use client";

import FeaturedCollections from "@/components/FeaturedCollections";
import HeroSection from "../components/HeroSection";
import BestSellers from "@/components/BestSellers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function HomePage() {
  return (
    <>
     <Header />
      <HeroSection />
      <FeaturedCollections />
      <BestSellers />
      <BrandStory />
      <WhyChooseUs />
      <Testimonials />

      <Footer />



    </>
  );
}
