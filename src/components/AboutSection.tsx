import aboutImage from "@/assets/about-formal.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section label */}
        <p className="text-xs tracking-mega uppercase text-primary mb-16">About</p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-10">
              Ketika Pembimbing
              <br />
              Anda Tepat, Ibadah
              <br />
              Pun Sempurna.
            </h2>

            <div className="space-y-6 text-foreground/50 text-sm leading-relaxed max-w-lg">
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

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-foreground">500+</p>
                <p className="text-xs tracking-ultra uppercase text-foreground/40 mt-2">Jamaah</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-foreground">7+</p>
                <p className="text-xs tracking-ultra uppercase text-foreground/40 mt-2">Tahun</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-foreground">5.0</p>
                <p className="text-xs tracking-ultra uppercase text-foreground/40 mt-2">Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Rudy Alfarizi - Muthowwif"
              className="w-full h-auto object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
