import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { galleryLocations } from "@/data/galleryData";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const GalleryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const location = galleryLocations.find((loc) => loc.slug === slug);
  const images = location?.images ?? [];
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => prev !== null ? (prev + 1) % images.length : null);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => prev !== null ? (prev - 1 + images.length) % images.length : null);
  }, [images.length]);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, goNext, goPrev, closeLightbox]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  if (!location) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Lokasi tidak ditemukan</h1>
          <button
            onClick={() => navigate("/#gallery")}
            className="text-xs tracking-widest uppercase text-primary hover:text-foreground transition-colors"
          >
            Kembali ke Galeri
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <section className="pt-28 md:pt-40 pb-14 md:pb-40">
        <div className="px-6 md:px-16 lg:px-24">
          <button
            onClick={() => navigate("/#gallery")}
            className="group flex items-center gap-2 text-[10px] md:text-xs tracking-widest uppercase text-foreground/40 hover:text-foreground transition-colors mb-8 md:mb-16"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Kembali ke Galeri
          </button>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 border-b border-border pb-6">
            <div>
              <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-6">
                Galeri Lokasi
              </p>
              <h1 className="font-display text-3xl md:text-6xl text-foreground">
                {location.name}
              </h1>
            </div>
            <span className="text-[10px] md:text-xs text-foreground/30 tracking-widest uppercase mt-4 md:mt-0">
              {images.length} Foto
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end">
                  <p className="text-[10px] md:text-xs text-foreground/0 group-hover:text-foreground/90 tracking-wide px-3 pb-3 transition-colors duration-500">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-foreground/40 hover:text-foreground transition-colors z-10"
            aria-label="Tutup"
          >
            <X size={20} />
          </button>

          <div className="absolute top-6 left-6 text-[10px] md:text-xs tracking-widest text-foreground/30">
            {(selectedIndex ?? 0) + 1} / {images.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground transition-colors"
            aria-label="Sebelumnya"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground transition-colors"
            aria-label="Berikutnya"
          >
            <ChevronRight size={28} />
          </button>

          <div className="max-w-5xl w-full px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-[8px] md:text-[10px] tracking-widest uppercase text-primary mb-1">
                {location.name}
              </p>
              <p className="text-[10px] md:text-sm tracking-wide text-foreground/60 font-light">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryDetail;
