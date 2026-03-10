import { useState } from "react";
import { X } from "lucide-react";
import aboutImage from "@/assets/about-formal.jpg";

const AboutSection = () => {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <>
      <section id="about" className="py-14 md:py-40 bg-background border-t border-border">
        <div className="px-6 md:px-16 lg:px-24">
          <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">About</p>

          {/* Title row with photo on mobile */}
          <div className="flex gap-4 md:block items-stretch mb-6 md:mb-0">
            <div className="w-24 flex-shrink-0 md:hidden self-stretch cursor-pointer" onClick={() => setShowLightbox(true)}>
              <img
                src={aboutImage}
                alt="Rudy Alfarizi - Muthowwif"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            <h2 className="font-['Hubhead_2'] text-2xl text-foreground leading-tight md:hidden flex items-center">
              Ketika Pembimbing Anda Tepat, Ibadah Pun Sempurna
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
            <div className="relative lg:order-2 hidden md:block cursor-pointer" onClick={() => setShowLightbox(true)}>
              <img
                src={aboutImage}
                alt="Rudy Alfarizi - Muthowwif"
                className="w-full h-auto object-cover aspect-[3/4] transition-all duration-700 hover:opacity-90"
              />
            </div>

            <div className="lg:order-1">
              <h2 className="hidden md:block font-['Hubhead_2'] text-5xl lg:text-6xl text-foreground leading-tight mb-10">
                Ketika Pembimbing Anda Tepat, Ibadah Pun Sempurna
              </h2>

              <div className="space-y-4 text-foreground text-xs md:text-sm leading-relaxed text-left">
                <p>
                  Dengan latar belakang pendidikan dari Universitas Al-Azhar, Kairo, 
                  saya memiliki pemahaman mendalam tentang fiqih manasik, sejarah Islam, 
                  dan seluk-beluk perjalanan spiritual ke Makkah dan Madinah.
                </p>
                <p>
                  Visi saya adalah memastikan setiap jamaah merasakan kekhusyukan ibadah 
                  dengan bimbingan yang penuh ilmu dan kasih sayang.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-16 pt-6 md:pt-10 border-t border-border">
                <div>
                  <p className="font-serif text-2xl md:text-4xl text-foreground">500+</p>
                  <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground mt-1">Jamaah</p>
                </div>
                <div>
                  <p className="font-serif text-2xl md:text-4xl text-foreground">2021</p>
                  <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground mt-1">Sejak</p>
                </div>
                <div>
                  <p className="font-serif text-2xl md:text-4xl text-foreground">5.0</p>
                  <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {showLightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowLightbox(false)}
        >
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
          <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={aboutImage}
              alt="Rudy Alfarizi - Muthowwif"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;
