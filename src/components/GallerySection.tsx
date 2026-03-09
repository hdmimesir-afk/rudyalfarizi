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
    <section id="gallery" className="py-14 md:py-40 bg-background border-t border-border">
      <div className="px-4 md:px-12">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Galeri</p>

        <h2 className="font-display text-2xl md:text-5xl text-foreground mb-8 md:mb-16 max-w-2xl">
          Momen berharga bersama jamaah
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2">
          {images.map((image, index) => (
            <div
              key={index}
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
  );
};

export default GallerySection;
