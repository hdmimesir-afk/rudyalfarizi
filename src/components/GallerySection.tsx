import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryLocations } from "@/data/galleryData";

const PREVIEW_COUNT = 6;

const useRevealOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const GalleryImage = ({ image, onClick, delay }: { image: { src: string; caption: string }; onClick: () => void; delay: number }) => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${delay * 0.1}s, transform 0.6s ease-out ${delay * 0.1}s`,
      }}
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.caption}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end">
        <p className="text-[10px] md:text-xs text-foreground/0 group-hover:text-foreground/90 tracking-wide px-3 pb-3 transition-colors duration-500">
          {image.caption}
        </p>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<{ locationIdx: number; imageIdx: number } | null>(null);

  const currentLocation = lightbox !== null ? galleryLocations[lightbox.locationIdx] : null;
  const currentImage = currentLocation && lightbox ? currentLocation.images[lightbox.imageIdx] : null;

  const goNext = () => {
    if (!lightbox || !currentLocation) return;
    setLightbox({ ...lightbox, imageIdx: (lightbox.imageIdx + 1) % currentLocation.images.length });
  };
  const goPrev = () => {
    if (!lightbox || !currentLocation) return;
    setLightbox({ ...lightbox, imageIdx: (lightbox.imageIdx - 1 + currentLocation.images.length) % currentLocation.images.length });
  };

  return (
    <>
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

          <div className="space-y-20 md:space-y-32">
            {galleryLocations.map((location, locIdx) => {
              const previewImages = location.images.slice(0, PREVIEW_COUNT);

              return (
                <div key={location.slug}>
                  <div className="flex items-end justify-between mb-6 md:mb-10 border-b border-border pb-4">
                    <h3 className="font-display text-xl md:text-3xl text-foreground">
                      {location.name}
                    </h3>
                    <span className="text-[10px] md:text-xs text-foreground/30 tracking-widest uppercase">
                      {location.images.length} Foto
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                    {previewImages.map((image, index) => (
                      <GalleryImage
                        key={index}
                        image={image}
                        delay={index}
                        onClick={() => setLightbox({ locationIdx: locIdx, imageIdx: index })}
                      />
                    ))}
                  </div>

                  <div className="mt-6 md:mt-8 flex justify-center">
                    <button
                      onClick={() => navigate(`/gallery/${location.slug}`)}
                      className="group flex items-center gap-3 text-[10px] md:text-xs tracking-widest uppercase border border-border px-6 py-3 md:px-8 md:py-4 text-foreground/60 hover:text-foreground hover:border-primary transition-all duration-300"
                    >
                      More Photos
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {currentImage && lightbox && currentLocation && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-foreground/40 hover:text-foreground transition-colors z-10">
            <X size={20} />
          </button>
          <div className="absolute top-6 left-6 text-[10px] md:text-xs tracking-widest text-foreground/30">
            {lightbox.imageIdx + 1} / {currentLocation.images.length}
          </div>
          <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground transition-colors">
            <ChevronLeft size={28} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground transition-colors">
            <ChevronRight size={28} />
          </button>
          <div className="max-w-5xl w-full px-16" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage.src} alt={currentImage.caption} className="w-full h-auto max-h-[75vh] object-contain" />
            <div className="mt-4 text-center">
              <p className="text-[8px] md:text-[10px] tracking-widest uppercase text-primary mb-1">{currentLocation.name}</p>
              <p className="text-[10px] md:text-sm tracking-wide text-foreground/60 font-light">{currentImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;