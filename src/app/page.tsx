import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Gallery from "@/components/Gallery";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Gallery />
      <ReviewsCarousel />
      <WhyChooseUs />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
