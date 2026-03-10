import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { galleryLocations } from "@/data/galleryData";

const PREVIEW_COUNT = 6;

const GallerySection = () => {
  const navigate = useNavigate();

  return (
    <section id="gallery" className="py-14 md:py-40 bg-background border-t border-border">
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
          {galleryLocations.map((location) => {
            const previewImages = location.images.slice(0, PREVIEW_COUNT);

            return (
              <div key={location.slug}>
                {/* Location title */}
                <div className="flex items-end justify-between mb-6 md:mb-10 border-b border-border pb-4">
                  <h3 className="font-display text-xl md:text-3xl text-foreground">
                    {location.name}
                  </h3>
                  <span className="text-[10px] md:text-xs text-foreground/30 tracking-widest uppercase">
                    {location.images.length} Foto
                  </span>
                </div>

                {/* 3x2 Preview Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                  {previewImages.map((image, index) => (
                    <div
                      key={index}
                      className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/gallery/${location.slug}`)}
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
                  ))}
                </div>

                {/* More Photos button */}
                <div className="mt-6 md:mt-8 flex justify-center">
                  <button
                    onClick={() => navigate(`/gallery/${location.slug}`)}
                    className="group flex items-center gap-3 text-[10px] md:text-xs tracking-widest uppercase border border-border px-6 py-3 md:px-8 md:py-4 text-foreground/60 hover:text-foreground hover:border-primary transition-all duration-300"
                  >
                    More Photos
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
