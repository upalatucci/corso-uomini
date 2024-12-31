import ScrollUp from "@/components/Common/ScrollUp";
import Daimoku from "@/components/Daimoku";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

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
