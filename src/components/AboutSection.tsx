import aboutImage from "@/assets/about-formal.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-40 bg-background border-t border-border">
      <div className="px-4 md:px-12">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">About</p>

        {/* Mobile: photo right after label */}
        <div className="relative flex justify-center mb-8 lg:hidden">
          <img
            src={aboutImage}
            alt="Rudy Alfarizi - Muthowwif"
            className="w-3/4 h-auto object-cover aspect-[3/4] transition-all duration-700"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          <div>
            <h2 className="font-display text-2xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 md:mb-10">
              Ketika Pembimbing Anda Tepat, Ibadah Pun Sempurna.
            </h2>

            <div className="space-y-4 text-foreground/50 text-xs md:text-sm leading-relaxed max-w-lg">
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
                <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Jamaah</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-4xl text-foreground">2021</p>
                <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Sejak</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-4xl text-foreground">5.0</p>
                <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Rating</p>
              </div>
            </div>
          </div>

          {/* Desktop: photo on right */}
          <div className="relative hidden lg:flex justify-end">
            <img
              src={aboutImage}
              alt="Rudy Alfarizi - Muthowwif"
              className="w-2/3 h-auto object-cover aspect-[3/4] transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
