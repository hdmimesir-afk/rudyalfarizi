import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const categories = [
  "Semua",
  "Al Ula",
  "Badr",
  "Hudaibiyah",
  "Jabal Khandamah",
  "Jabal Nur",
  "Jabal Tsur",
  "Jamaah Private",
  "Jeddah",
  "Madinah",
  "Makkah",
  "Thoif",
];

const images = [
  { src: gallery1, caption: "Masjid Nabawi", category: "Madinah" },
  { src: gallery2, caption: "Masjidil Haram", category: "Makkah" },
  { src: gallery3, caption: "Jabal Uhud", category: "Madinah" },
  { src: gallery4, caption: "Corniche Jeddah", category: "Jeddah" },
  { src: gallery1, caption: "Gua Hira", category: "Jabal Nur" },
  { src: gallery3, caption: "Gua Tsur", category: "Jabal Tsur" },
  { src: gallery2, caption: "Bimbingan Private", category: "Jamaah Private" },
  { src: gallery4, caption: "Kota Thoif", category: "Thoif" },
  { src: gallery1, caption: "Medan Perang Badr", category: "Badr" },
  { src: gallery3, caption: "Sumur Hudaibiyah", category: "Hudaibiyah" },
  { src: gallery2, caption: "Hegra Al Ula", category: "Al Ula" },
  { src: gallery4, caption: "Jabal Khandamah", category: "Jabal Khandamah" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredImages = activeCategory === "Semua"
    ? images
    : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <section id="gallery" className="py-14 md:py-40 bg-background border-t border-border">
        <div className="px-6 md:px-16 lg:px-24">
          <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Galeri</p>

          <h2 className="font-display text-2xl md:text-5xl text-foreground mb-8 md:mb-12 max-w-2xl">
            Momen berharga bersama jamaah
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[9px] md:text-[11px] tracking-widest uppercase px-3 py-1.5 md:px-4 md:py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground/40 hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.category}-${index}`}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden aspect-square md:aspect-[3/4] cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 md:p-6">
                  <p className="text-[8px] md:text-[10px] tracking-widest uppercase text-primary mb-1">
                    {image.category}
                  </p>
                  <p className="text-[9px] md:text-xs tracking-widest md:tracking-ultra uppercase text-foreground">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p className="text-[10px] md:text-xs tracking-widest md:tracking-ultra uppercase text-foreground/50 mt-4 text-center">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
