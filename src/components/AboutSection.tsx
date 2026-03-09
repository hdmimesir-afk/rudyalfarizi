import aboutImage from "@/assets/about-formal.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-40 bg-background border-t border-border">
      <div className="px-4 md:px-12">
        <div className="flex flex-col items-center">
          <img
            src={aboutImage}
            alt="Rudy Alfarizi - Muthowwif"
            className="w-full max-w-md h-auto object-cover mb-10 md:mb-16"
          />

          <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-md">
            <div className="text-center">
              <p className="font-serif text-2xl md:text-4xl text-foreground">500+</p>
              <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Jamaah</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl md:text-4xl text-foreground">2021</p>
              <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Sejak</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl md:text-4xl text-foreground">5.0</p>
              <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground/40 mt-1">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
