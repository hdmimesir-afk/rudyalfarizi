import { useState, useEffect } from "react";
import rudyIcon from "@/assets/rudy-icon.png";
import { Menu, X, Phone } from "lucide-react";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", action: scrollToTop },
    { label: "About", action: () => scrollToSection("about") },
    { label: "Layanan", action: () => scrollToSection("services") },
    { label: "Galeri", action: () => scrollToSection("gallery") },
    { label: "Testimoni", action: () => scrollToSection("testimonials") },
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
            {/* Left - Rudy icon (mobile) */}
            <button
              onClick={scrollToTop}
              className="md:hidden hover:opacity-80 transition-opacity"
            >
              <img src={rudyIcon} alt="Rudy Alfarizi" className="h-5 w-auto" />
            </button>

            {/* Left nav - desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={link.action}
                  className={`text-xs tracking-ultra uppercase transition-colors duration-300 ${
                    link.label === "Home"
                      ? "text-white hover:text-primary"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Center logo - desktop only */}
            <button
              onClick={scrollToTop}
              className="hidden md:block hover:opacity-80 transition-opacity"
            >
              <img src={rudyIcon} alt="Rudy Alfarizi" className="h-7 w-auto" />
            </button>

            {/* Right CTA - desktop */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 text-xs tracking-ultra uppercase border border-primary text-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Phone size={12} />
                Konsultasi
              </button>
            </div>

            {/* Mobile right - close/menu button */}
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
          {/* Close button top right */}
          <button
            className="absolute top-4 right-6 p-1.5 text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
          {/* Rudy icon top left */}
          <div className="absolute top-4 left-6">
            <img src={rudyIcon} alt="Rudy Alfarizi" className="h-5 w-auto" />
          </div>

          <div className="flex flex-col items-start gap-8">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={link.action}
                className={`text-2xl tracking-ultra uppercase hover:text-primary transition-colors font-display ${
                  link.label === "Home" ? "text-white" : "text-foreground/60"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 text-sm tracking-ultra uppercase border border-primary text-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all mt-4"
            >
              <Phone size={14} />
              Konsultasi
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
