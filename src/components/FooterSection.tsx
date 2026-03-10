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
    <footer className="bg-background border-t border-border py-10 md:py-16">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3
              className="text-xl md:text-3xl text-foreground mb-3 tracking-[0.04em] uppercase"
              style={{ fontFamily: "'Montecatini Pro', serif" }}
            >
              Rudy Alfarizi
            </h3>
            <p className="text-foreground text-xs leading-relaxed">
              Muthowwif profesional. Alumni Al-Azhar, Kairo.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground mb-4 md:mb-6">Menu</p>
            <ul className="space-y-2">
              {["about", "services", "gallery", "faq"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-xs text-foreground hover:text-primary transition-colors capitalize"
                  >
                    {id === "faq" ? "FAQ" : id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] md:text-xs tracking-ultra uppercase text-foreground mb-4 md:mb-6">Kontak</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/6285219527294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle size={12} />
                  +62 852-1952-7294
                </a>
              </li>
              <li>
                <a
                  href="mailto:rudyalfarizi26@gmail.com"
                  className="flex items-center gap-2 text-xs text-foreground hover:text-primary transition-colors"
                >
                  <Mail size={12} />
                  rudyalfarizi26@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/rudyalfarizi26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={12} />
                  @rudyalfarizi26
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex justify-center">
          <p className="text-[10px] text-foreground">
            © {currentYear} Rudy Alfarizi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
