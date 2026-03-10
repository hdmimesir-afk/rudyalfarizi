import { useState, useEffect } from "react";
import { X } from "lucide-react";
import aboutImage from "@/assets/about-formal.jpg";

const AboutSection = () => {
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    if (!showLightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowLightbox(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showLightbox]);

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
              Perjalanan ke Tanah Suci yang Lebih Bermakna.
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
                Perjalanan ke Tanah Suci yang Lebih Bermakna.
              </h2>

              <div className="space-y-4 text-foreground text-xs md:text-sm leading-relaxed text-left">
                <p>
                  Berbekal pendidikan dari Universitas Al-Azhar Kairo, saya aktif mendampingi jamaah sebagai Mutowwif Haramain sejak tahun 2022. Dalam setiap perjalanan, saya berusaha menghadirkan bimbingan yang komunikatif, edukatif, dan mudah dipahami agar jamaah dapat menjalankan ibadah dengan tenang dan penuh pemahaman.
                </p>
                <p>
                  Saya meyakini bahwa perjalanan ke Tanah Suci bukan hanya tentang menjalankan rangkaian ibadah, tetapi juga tentang memahami sejarah, merasakan kedekatan spiritual, dan membawa pulang pengalaman yang bermakna. Karena itu, saya selalu berusaha menjelaskan sejarah Islam dan hikmah dari setiap tempat yang dikunjungi, agar perjalanan jamaah tidak hanya menjadi ibadah, tetapi juga pengalaman spiritual yang berkesan.
                </p>
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
