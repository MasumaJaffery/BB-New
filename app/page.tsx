import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import OurProcess from "@/components/OurProcess";
import TestimonialBanner from "@/components/TestimonialBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTAFooter from "@/components/CTA-Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <OurProcess />
      <TestimonialBanner />
      <WhyChooseUs />
      <CTAFooter />
      <Chatbot />
    </main>
  );
}
