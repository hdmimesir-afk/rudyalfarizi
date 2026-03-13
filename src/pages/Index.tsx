import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimoniSection from "@/components/TestimoniSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SlideInSection from "@/components/SlideInSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <SlideInSection><WhyChooseSection /></SlideInSection>
      <SlideInSection><AboutSection /></SlideInSection>
      <SlideInSection><ExperienceSection /></SlideInSection>
      <SlideInSection><ServicesSection /></SlideInSection>
      <SlideInSection><GallerySection /></SlideInSection>
      <SlideInSection><TestimoniSection /></SlideInSection>
      <SlideInSection><FAQSection /></SlideInSection>
      <SlideInSection><CTASection /></SlideInSection>
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
