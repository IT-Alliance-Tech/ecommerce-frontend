"use client";

import FeaturedCollections from "@/components/FeaturedCollections";
import HeroSection from "../components/HeroSection";
import BestSellers from "@/components/BestSellers";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <BestSellers />
      

    </>
  );
}
