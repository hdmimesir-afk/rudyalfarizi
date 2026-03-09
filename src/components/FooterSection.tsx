import { Instagram, Mail, MessageCircle } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-cream mb-4">
              Rudy Alfarizi
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Muthowwif profesional dengan pengalaman membimbing 
              jamaah umrah di Tanah Suci. Alumni Al-Azhar, Kairo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Menu</h4>
            <ul className="space-y-2">
              {[
                { label: "Beranda", id: "hero" },
                { label: "Tentang", id: "about" },
                { label: "Layanan", id: "services" },
                { label: "Galeri", id: "gallery" },
                { label: "FAQ", id: "faq" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-cream/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6285219527294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/60 hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  +62 852-1952-7294
                </a>
              </li>
              <li>
                <a
                  href="mailto:rudyalfarizi26@gmail.com"
                  className="flex items-center gap-2 text-cream/60 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  rudyalfarizi26@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/rudyalfarizi26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/60 hover:text-primary transition-colors text-sm"
                >
                  <Instagram className="h-4 w-4" />
                  @rudyalfarizi26
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 text-sm">
              © {currentYear} Rudy Alfarizi. All rights reserved.
            </p>
            <p className="text-cream/40 text-sm">
              Designed by{" "}
              <span className="text-primary font-medium">SYMP Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
