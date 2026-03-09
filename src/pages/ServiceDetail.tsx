import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { services } from "@/components/ServicesSection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const dummyPhotos: Record<string, { src: string; caption: string }[]> = {
  "umrah-private": [
    { src: gallery1, caption: "Bimbingan privat di Masjid Nabawi" },
    { src: gallery2, caption: "Pendampingan tawaf" },
    { src: gallery3, caption: "Doa bersama jamaah" },
    { src: gallery4, caption: "Manasik umrah" },
    { src: gallery1, caption: "Sesi bimbingan fiqih" },
    { src: gallery2, caption: "Perjalanan ke Mina" },
  ],
  "umrah-group": [
    { src: gallery3, caption: "Group briefing harian" },
    { src: gallery4, caption: "Koordinasi rombongan" },
    { src: gallery1, caption: "Tawaf bersama group" },
    { src: gallery2, caption: "Ziarah bersejarah" },
    { src: gallery3, caption: "Sesi manasik group" },
    { src: gallery4, caption: "Foto bersama jamaah" },
  ],
  "badal-umrah": [
    { src: gallery1, caption: "Pelaksanaan badal umrah" },
    { src: gallery2, caption: "Dokumentasi tawaf" },
    { src: gallery3, caption: "Sertifikat badal" },
    { src: gallery4, caption: "Doa di Multazam" },
  ],
  "city-tour": [
    { src: gallery3, caption: "Jabal Uhud" },
    { src: gallery4, caption: "Masjid Quba" },
    { src: gallery1, caption: "Al-Ula Heritage" },
    { src: gallery2, caption: "Jeddah Old Town" },
    { src: gallery3, caption: "Thaif Rose Garden" },
    { src: gallery4, caption: "Badr Battlefield" },
  ],
  "content-creator": [
    { src: gallery1, caption: "Behind the scenes" },
    { src: gallery2, caption: "Konten di Ka'bah" },
    { src: gallery3, caption: "Storytelling umrah" },
    { src: gallery4, caption: "Kolaborasi brand" },
    { src: gallery1, caption: "Social media shoot" },
    { src: gallery2, caption: "Video production" },
  ],
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const photos = dummyPhotos[slug || ""] || dummyPhotos["umrah-private"];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Layanan tidak ditemukan</h1>
          <Link to="/" className="text-primary text-sm tracking-ultra uppercase hover:underline">
            Kembali
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-4 md:px-12 pt-8 pb-4">
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-ultra uppercase text-foreground/40 hover:text-primary transition-colors mb-10 md:mb-16"
        >
          <ArrowLeft size={14} />
          Kembali
        </Link>

        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-6 md:mb-10">Layanan</p>

        <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-4 md:mb-6">
          {service.title}
        </h1>

        <p className="text-foreground/40 text-xs md:text-sm max-w-xl leading-relaxed mb-10 md:mb-16">
          {service.description}
        </p>
      </div>

      {/* Photo Grid */}
      <div className="px-4 md:px-12 pb-20 md:pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 md:p-6">
                <p className="text-[9px] md:text-xs tracking-widest md:tracking-ultra uppercase text-foreground">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] md:text-xs text-foreground/20 mt-8">
          * Foto dummy — akan diganti dengan dokumentasi asli
        </p>
      </div>

      {/* CTA */}
      <div className="px-4 md:px-12 pb-16 md:pb-24 text-center border-t border-border pt-16">
        <h2 className="font-serif text-2xl md:text-4xl font-light text-foreground mb-6">
          Tertarik dengan layanan ini?
        </h2>
        <a
          href="https://wa.me/6285219527294?text=Assalamualaikum%20Ustadz%20Rudy%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[10px] md:text-xs tracking-widest md:tracking-ultra uppercase border border-primary text-primary px-7 py-3 md:px-10 md:py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Konsultasi via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ServiceDetail;
