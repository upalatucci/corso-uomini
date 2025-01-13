import { auth } from "@/auth";
import ScrollUp from "@/components/Common/ScrollUp";
import CountDown from "@/components/CountDown/CountDown";
import Daimoku from "@/components/Daimoku";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NotificationToken from "@/components/NotificationToken";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) return redirect("/login");

  return (
    <>
      <NotificationToken />
      <ScrollUp />
      <Hero />
      <CountDown />
      <Daimoku />
      <Features />
      {/* <Brands />
      <Testimonials />
      <Blog />
      <Contact /> */}
    </>
  );
}
