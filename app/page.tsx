import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      {/* rest of the homepage sections go here */}
    </main>
  );
}
