import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappLink =
    "https://wa.me/6285219527294?text=Assalamualaikum%20Ustadz%20Rudy%2C%20saya%20ingin%20konsultasi%20jadwal%20umrah";

  return (
    <section id="contact" className="py-14 md:py-48 bg-muted/20 border-t border-border">
      <div className="px-4 md:px-12 text-center">
        <p className="text-[8px] md:text-xs tracking-mega uppercase text-primary mb-4 md:mb-12">Hubungi</p>

        <h2 className="font-display text-xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-4 md:mb-12 max-w-4xl mx-auto">
          Siap memulai perjalanan suci Anda?
        </h2>

        <p className="text-foreground/40 text-xs md:text-base max-w-lg mx-auto mb-6 md:mb-16 leading-relaxed">
          Konsultasikan rencana umrah Anda. Mari wujudkan ibadah 
          yang khusyuk dan tak terlupakan di Tanah Suci.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-widest md:tracking-ultra uppercase border border-primary text-primary px-7 py-3 md:px-10 md:py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <MessageCircle size={14} />
          Konsultasi via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTASection;
