import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Layanan", id: "services" },
    { label: "Galeri", id: "gallery" },
    { label: "Testimoni", id: "testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="px-4 md:px-12">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Left nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs tracking-ultra uppercase text-foreground/60 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Center logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-serif text-lg md:text-2xl tracking-ultra text-foreground hover:text-primary transition-colors"
          >
            RA
          </button>

          {/* Right CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs tracking-ultra uppercase border border-primary text-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Konsultasi
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-5 animate-fade-in">
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[10px] tracking-ultra uppercase text-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[10px] tracking-ultra uppercase border border-primary text-primary px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all mt-1"
              >
                Konsultasi
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
