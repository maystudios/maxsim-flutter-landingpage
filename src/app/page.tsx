import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TechStack } from "@/components/sections/TechStack";
import { Docs } from "@/components/sections/Docs";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Docs />
      <Footer />
    </main>
  );
}
