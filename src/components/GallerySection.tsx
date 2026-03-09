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
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Galeri Kegiatan
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Momen Berharga Bersama Jamaah
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi perjalanan spiritual yang tak terlupakan bersama jamaah 
            di berbagai lokasi suci dan bersejarah.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cream text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Foto-foto dokumentasi akan diganti dengan foto asli setelah disediakan
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
