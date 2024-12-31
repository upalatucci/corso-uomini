import ScrollUp from "@/components/Common/ScrollUp";
import Daimoku from "@/components/Daimoku";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corso Uomini 2025",
  description:
    "Vinciamo in questo “Anno in cui volare ancora più in alto per una Soka Gakkai giovane in tutto il mondo”",
  // other metadata
};

export default function Home() {
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
