import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { galleryLocations } from "@/data/galleryData";

const useRevealOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const LocationCard = ({ location, delay }: { location: typeof galleryLocations[0]; delay: number }) => {
  const navigate = useNavigate();
  const { ref, visible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className="group cursor-pointer overflow-hidden border border-border bg-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${delay * 0.08}s, transform 0.6s ease-out ${delay * 0.08}s`,
      }}
      onClick={() => navigate(`/gallery/${location.slug}`)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={location.cover}
          alt={location.name}
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="font-display text-base md:text-lg text-foreground mb-1">
          {location.name}
        </h3>
        <p className="text-[10px] md:text-xs text-foreground/50 tracking-wide mb-4">
          {location.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[9px] md:text-[10px] text-foreground/30 tracking-widest uppercase">
            {location.images.length} Foto
          </span>
          <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5 text-[10px] md:text-xs tracking-widest uppercase text-primary">
            Detail
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <section id="gallery" className="py-14 md:py-40 border-t border-border" style={{ backgroundColor: "hsl(var(--gallery-bg))" }}>
      <div className="px-6 md:px-16 lg:px-24">
        <div className="mb-16 md:mb-24">
          <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">
            Galeri
          </p>
          <h2 className="font-display text-2xl md:text-5xl text-foreground max-w-2xl">
            Momen berharga bersama jamaah
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryLocations.map((location, index) => (
            <LocationCard key={location.slug} location={location} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
