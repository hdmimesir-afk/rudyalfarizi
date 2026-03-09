import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const categories = [
  "Semua", "Al Ula", "Badr", "Hudaibiyah", "Jabal Khandamah",
  "Jabal Nur", "Jabal Tsur", "Jamaah Private", "Jeddah", "Madinah", "Makkah", "Thoif",
];

const images = [
  { src: gallery1, caption: "Masjid Nabawi", category: "Madinah", span: "col-span-2 row-span-2" },
  { src: gallery2, caption: "Masjidil Haram", category: "Makkah", span: "col-span-1 row-span-1" },
  { src: gallery3, caption: "Jabal Uhud", category: "Madinah", span: "col-span-1 row-span-2" },
  { src: gallery4, caption: "Corniche Jeddah", category: "Jeddah", span: "col-span-1 row-span-1" },
  { src: gallery1, caption: "Gua Hira", category: "Jabal Nur", span: "col-span-1 row-span-1" },
  { src: gallery3, caption: "Gua Tsur", category: "Jabal Tsur", span: "col-span-1 row-span-1" },
  { src: gallery2, caption: "Bimbingan Private", category: "Jamaah Private", span: "col-span-2 row-span-1" },
  { src: gallery4, caption: "Kota Thoif", category: "Thoif", span: "col-span-1 row-span-1" },
  { src: gallery1, caption: "Medan Perang Badr", category: "Badr", span: "col-span-1 row-span-2" },
  { src: gallery3, caption: "Sumur Hudaibiyah", category: "Hudaibiyah", span: "col-span-1 row-span-1" },
  { src: gallery2, caption: "Hegra Al Ula", category: "Al Ula", span: "col-span-2 row-span-1" },
  { src: gallery4, caption: "Jabal Khandamah", category: "Jabal Khandamah", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredImages = activeCategory === "Semua"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const goNext = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % filteredImages.length);
  };
  const goPrev = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const scrollCategories = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -160 : 160, behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="gallery" className="py-14 md:py-40 bg-background border-t border-border">
        <div className="px-6 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-6">
            <div>
              <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Galeri</p>
              <h2 className="font-display text-2xl md:text-5xl text-foreground max-w-2xl">
                Momen berharga bersama jamaah
              </h2>
            </div>
            <p className="text-[10px] md:text-xs text-foreground/30 tracking-widest uppercase">
              {filteredImages.length} Foto
            </p>
          </div>

          {/* Category Filter with arrows */}
          <div className="relative flex items-center gap-2 mb-10 md:mb-14">
            <button
              onClick={() => scrollCategories("left")}
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-foreground/30 hover:text-foreground transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[9px] md:text-[11px] tracking-widest uppercase px-3 py-1.5 md:px-4 md:py-2 border whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground/40 hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollCategories("right")}
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-foreground/30 hover:text-foreground transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Masonry-style Grid */}
          {activeCategory === "Semua" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[200px] lg:auto-rows-[240px] gap-1.5 md:gap-2.5">
              {filteredImages.map((image, index) => (
                <div
                  key={`${image.category}-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  className={`group relative overflow-hidden cursor-pointer ${image.span}`}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-2.5">
              {filteredImages.map((image, index) => (
                <div
                  key={`${image.category}-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-foreground/40 hover:text-foreground transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="absolute top-6 left-6 text-[10px] md:text-xs tracking-widest text-foreground/30">
            {(selectedIndex ?? 0) + 1} / {filteredImages.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground transition-colors"
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
                {selectedImage.category}
              </p>
              <p className="text-[10px] md:text-sm tracking-wide text-foreground/60 font-light">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
