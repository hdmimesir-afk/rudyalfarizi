import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const GallerySection = () => {
  const images = [
    { src: gallery1, caption: "Bimbingan di Masjid Nabawi" },
    { src: gallery2, caption: "Tawaf di Masjidil Haram" },
    { src: gallery3, caption: "Ziarah Jabal Uhud" },
    { src: gallery4, caption: "City Tour Jeddah" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section label */}
        <p className="text-xs tracking-mega uppercase text-primary mb-16">Galeri</p>

        <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-16 max-w-2xl">
          Momen Berharga Bersama Jamaah
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-xs tracking-ultra uppercase text-foreground">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
