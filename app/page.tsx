import { auth } from "@/auth";
import Daimoku from "@/components/Daimoku";
import Hero from "@/components/Hero";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) return redirect("/login");

  return (
    <>
      <Hero />
      <Daimoku />
    </>
  );
}
