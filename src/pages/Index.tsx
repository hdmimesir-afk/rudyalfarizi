import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimoniSection from "@/components/TestimoniSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <WhyChooseSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimoniSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
