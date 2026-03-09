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
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl text-foreground mb-4 tracking-ultra">
              Rudy Alfarizi
            </h3>
            <p className="text-foreground/30 text-sm leading-relaxed">
              Muthowwif profesional. Alumni Al-Azhar, Kairo.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-ultra uppercase text-foreground/40 mb-6">Menu</p>
            <ul className="space-y-3">
              {["about", "services", "gallery", "faq"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-foreground/40 hover:text-primary transition-colors capitalize"
                  >
                    {id === "faq" ? "FAQ" : id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-ultra uppercase text-foreground/40 mb-6">Kontak</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6285219527294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/40 hover:text-primary transition-colors"
                >
                  <MessageCircle size={14} />
                  +62 852-1952-7294
                </a>
              </li>
              <li>
                <a
                  href="mailto:rudyalfarizi26@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground/40 hover:text-primary transition-colors"
                >
                  <Mail size={14} />
                  rudyalfarizi26@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/rudyalfarizi26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/40 hover:text-primary transition-colors"
                >
                  <Instagram size={14} />
                  @rudyalfarizi26
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/20">
            © {currentYear} Rudy Alfarizi
          </p>
          <p className="text-xs text-foreground/20">
            Designed by <span className="text-primary">SYMP Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
