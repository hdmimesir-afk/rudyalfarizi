import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ihram.jpg";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/6285219527294?text=Assalamualaikum%20Ustadz%20Rudy%2C%20saya%20ingin%20konsultasi%20jadwal%20umrah";

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Muthowwif Umrah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          {/* Decorative element */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-primary/60" />
            <span className="px-4 text-primary text-sm font-medium tracking-widest uppercase">
              Muthowwif Profesional
            </span>
            <div className="h-px w-12 bg-primary/60" />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            Rudy Alfarizi
          </h1>

          <p className="text-lg md:text-xl text-cream/80 mb-4 font-light">
            Pembimbing Ibadah Umrah & Haji Terpercaya
          </p>
          
          <p className="text-cream/60 max-w-xl mx-auto mb-10 text-sm md:text-base">
            Membimbing jamaah dengan ilmu, khidmat, dan kasih sayang dalam menjalankan ibadah di Tanah Suci
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="gradient-gold text-primary-foreground shadow-gold hover:opacity-90 text-lg px-8 py-6"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Konsultasi Jadwal
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50 text-lg px-8 py-6"
            >
              Kenali Lebih Dekat
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 hover:text-primary transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
};

export default HeroSection;
