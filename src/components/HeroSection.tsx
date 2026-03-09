import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink =
    "https://wa.me/6285219527294?text=Assalamualaikum%20Ustadz%20Rudy%2C%20saya%20ingin%20konsultasi%20jadwal%20umrah";

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="relative z-10 w-full px-4 md:px-12 text-center">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-foreground/50 mb-5 md:mb-8 animate-fade-up">
          Muthowwif Profesional
        </p>

        <h1 className="font-serif text-[3rem] sm:text-6xl md:text-7xl lg:text-9xl xl:text-[12rem] font-light text-foreground leading-[0.85] tracking-[0.06em] md:tracking-[0.1em] lg:tracking-ultra mb-8 md:mb-12 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          RUDY
          <br />
          ALFARIZI
        </h1>

        <div className="flex items-center justify-between max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto mb-8 md:mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-[9px] md:text-xs tracking-widest md:tracking-ultra uppercase text-foreground/40 text-left">
            Pembimbing Ibadah
            <br />
            Umrah & Haji
          </p>
          <p className="text-[9px] md:text-xs tracking-widest md:tracking-ultra uppercase text-foreground/40 text-right">
            Makkah · Madinah
            <br />
            Saudi Arabia
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[10px] md:text-xs tracking-widest md:tracking-ultra uppercase border border-primary text-primary px-7 py-3 md:px-10 md:py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          Konsultasi Jadwal
        </a>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-foreground/30 hover:text-primary transition-colors"
      >
        <ChevronDown size={22} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
