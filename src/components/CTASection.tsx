import { MessageCircle, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappLink =
    "https://wa.me/6285219527294?text=Assalamualaikum%20Ustadz%20Rudy%2C%20saya%20ingin%20konsultasi%20jadwal%20umrah";

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Hubungi Saya
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
            Siap Memulai Perjalanan Suci Anda?
          </h2>

          <p className="text-cream/70 mb-10 text-lg">
            Konsultasikan rencana umrah Anda dengan saya. Mari wujudkan ibadah 
            yang khusyuk dan tak terlupakan di Tanah Suci.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              asChild
              className="gradient-gold text-primary-foreground shadow-gold hover:opacity-90 text-lg px-8 py-6"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Konsultasi via WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-cream/70">
            <a
              href="mailto:rudyalfarizi26@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              rudyalfarizi26@gmail.com
            </a>
            <a
              href="https://instagram.com/rudyalfarizi26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @rudyalfarizi26
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
