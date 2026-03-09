import { useState } from "react";
import aboutImage from "@/assets/about-formal.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const AboutSection = () => {
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <section id="about" className="py-10 md:py-40 bg-background border-t border-border">
      <div className="px-4 md:px-12">
        <p className="text-[8px] md:text-xs tracking-mega uppercase text-primary mb-6 md:mb-16">About</p>

        {/* Title row with photo on mobile */}
        <div className="flex gap-4 md:block items-center justify-center mb-6 md:mb-0">
          <div
            className="w-24 flex-shrink-0 md:hidden self-stretch cursor-pointer"
            onClick={() => setPhotoOpen(true)}
          >
            <img
              src={aboutImage}
              alt="Rudy Alfarizi - Muthowwif"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          
          <h2 className="font-display text-lg text-foreground leading-tight md:hidden">
            Ketika Pembimbing Anda Tepat, Ibadah Pun Sempurna
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          <div
            className="relative lg:order-2 hidden md:block cursor-pointer"
            onClick={() => setPhotoOpen(true)}
          >
            <img
              src={aboutImage}
              alt="Rudy Alfarizi - Muthowwif"
              className="w-full h-auto object-cover aspect-[3/4] transition-all duration-700"
            />
          </div>

          <div className="lg:order-1">
            <h2 className="hidden md:block font-display text-5xl lg:text-6xl text-foreground leading-tight mb-10">
              Ketika Pembimbing Anda Tepat, Ibadah Pun Sempurna
            </h2>

            <div className="space-y-3 text-foreground/50 text-xs md:text-base leading-relaxed">
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

            <div className="grid grid-cols-3 gap-3 md:gap-8 mt-8 md:mt-16 pt-5 md:pt-10 border-t border-border text-center">
              <div>
                <p className="font-display text-xl md:text-4xl text-foreground">500+</p>
                <p className="text-[8px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Jamaah</p>
              </div>
              <div>
                <p className="font-display text-xl md:text-4xl text-foreground">2021</p>
                <p className="text-[8px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Sejak</p>
              </div>
              <div>
                <p className="font-display text-xl md:text-4xl text-foreground">5.0</p>
                <p className="text-[8px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox dialog */}
      <Dialog open={photoOpen} onOpenChange={setPhotoOpen}>
        <DialogContent className="max-w-[90vw] md:max-w-2xl p-2 bg-background/95 backdrop-blur-sm border-border">
          <img
            src={aboutImage}
            alt="Rudy Alfarizi - Muthowwif"
            className="w-full h-auto object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
