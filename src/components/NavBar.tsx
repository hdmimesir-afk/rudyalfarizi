import { useState, useEffect } from "react";
import rudyIcon from "@/assets/rudy-icon.png";
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-14 md:h-20">
            {/* Left nav - desktop */}
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
              className="text-lg md:text-2xl tracking-[0.04em] text-foreground hover:text-primary transition-colors uppercase"
              style={{ fontFamily: "'Montecatini Pro', serif" }}
            >
              RA
            </button>

            {/* Right CTA - desktop */}
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
              className="md:hidden p-1.5 text-foreground z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-background flex flex-col justify-center px-10 animate-fade-in md:hidden">
          <div className="flex flex-col items-start gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl tracking-ultra uppercase text-foreground/60 hover:text-primary transition-colors font-display"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm tracking-ultra uppercase border border-primary text-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all mt-4"
            >
              Konsultasi
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;