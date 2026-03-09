import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const images = [
    { src: gallery1, caption: "Bimbingan Umrah Private" },
    { src: gallery2, caption: "Bimbingan Umrah Group" },
    { src: gallery3, caption: "Badal Umrah" },
    { src: gallery4, caption: "Private City Tour" },
    { src: gallery1, caption: "Content Creator" },
    { src: gallery2, caption: "Talent Umrah" },
  ];

  return (
    <>
      <section id="gallery" className="py-14 md:py-40 bg-background border-t border-border">
        <div className="px-6 md:px-16 lg:px-24">
          <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Galeri</p>

          <h2 className="font-display text-2xl md:text-5xl text-foreground mb-8 md:mb-16 max-w-2xl">
            Momen berharga bersama jamaah
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden aspect-square md:aspect-[3/4] cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 md:p-6">
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
