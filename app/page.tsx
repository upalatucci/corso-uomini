"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Daimoku from "@/components/Daimoku";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import useFcmToken from "@/hooks/useFcmToken";

export default function Home() {
  useFcmToken();

  return (
    <>
      <ScrollUp />
      <Hero />
      <Daimoku />
      <Features />
      {/* <Brands />
      <Testimonials />
      <Blog />
      <Contact /> */}
    </>
  );
}
