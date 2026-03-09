import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappLink =
    "https://wa.me/6285219527294?text=Assalamualaikum%20Ustadz%20Rudy%2C%20saya%20ingin%20konsultasi%20jadwal%20umrah";

  return (
    <section id="contact" className="py-32 md:py-48 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-xs tracking-mega uppercase text-primary mb-12">Hubungi</p>

        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-12 max-w-4xl mx-auto">
          Siap Memulai Perjalanan Suci Anda?
        </h2>

        <p className="text-foreground/40 text-sm max-w-lg mx-auto mb-16 leading-relaxed">
          Konsultasikan rencana umrah Anda. Mari wujudkan ibadah 
          yang khusyuk dan tak terlupakan di Tanah Suci.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-xs tracking-ultra uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <MessageCircle size={16} />
          Konsultasi via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTASection;
