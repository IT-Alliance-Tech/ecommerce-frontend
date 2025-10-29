"use client";

import FeaturedCollections from "@/components/FeaturedCollections";
import HeroSection from "../components/HeroSection";
import BestSellers from "@/components/BestSellers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandStory from "@/components/BrandStory";


export default function HomePage() {
  return (
    <>
     <Header />
      <HeroSection />
      <FeaturedCollections />
      <BestSellers />
      <BrandStory />
      <Footer />



    </>
  );
}
