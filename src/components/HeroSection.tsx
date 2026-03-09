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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Top subtitle */}
        <p className="text-xs tracking-mega uppercase text-foreground/50 mb-8 animate-fade-up">
          Muthowwif Profesional
        </p>

        {/* Giant name */}
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-light text-foreground leading-[0.85] tracking-ultra mb-12 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          RUDY
          <br />
          ALFARIZI
        </h1>

        {/* Side labels */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xs tracking-ultra uppercase text-foreground/40 text-left">
            Pembimbing Ibadah
            <br />
            Umrah & Haji
          </p>
          <p className="text-xs tracking-ultra uppercase text-foreground/40 text-right">
            Makkah · Madinah
            <br />
            Saudi Arabia
          </p>
        </div>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs tracking-ultra uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          Konsultasi Jadwal
        </a>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/30 hover:text-primary transition-colors"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
