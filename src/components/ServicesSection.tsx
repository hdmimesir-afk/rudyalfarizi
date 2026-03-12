import { ArrowUpRight } from "lucide-react";

const services = [
  {
    slug: "umrah-private",
    title: "Bimbingan Umrah Private",
    description: "Layanan bimbingan khusus untuk individu atau keluarga dengan jadwal fleksibel dan perhatian penuh.",
  },
  {
    slug: "umrah-group",
    title: "Bimbingan Umrah Group",
    description: "Bimbingan profesional untuk travel umrah dan rombongan haji, dengan koordinasi yang terorganisir.",
  },
  {
    slug: "badal-umrah",
    title: "Badal Umrah",
    description: "Layanan ibadah umrah untuk orang tua atau keluarga yang telah wafat, dengan sertifikat dan dokumentasi.",
  },
  {
    slug: "city-tour",
    title: "Private City Tour",
    description: "Tour eksklusif ke Madinah, Makkah, Thaif, Jeddah, Al-Ula, dan Badr.",
  },
  {
    slug: "content-creator",
    title: "Content Creator",
    description: "Kolaborasi konten umrah untuk brand, travel, atau kebutuhan media sosial.",
  },
  {
    slug: "talent-umrah",
    title: "Talent Umrah",
    description: "Kebutuhan talent untuk konten dan kampanye brand terkait umrah dan haji.",
  },
  {
    slug: "guide-mesir",
    title: "Guide Mesir",
    description: "Berpengalaman mendampingi tamu sejak tahun 2021 ke berbagai destinasi bersejarah di Mesir, mulai dari Kairo, Alexandria, Giza, Sinai, Matruh, Siwa, Hurghada, hingga Luxor.",
  },
];


export { services };

const ServicesSection = () => {
  const getWhatsappLink = (title: string) =>
    `https://wa.me/6285219527294?text=${encodeURIComponent(`Assalamualaikum Ustadz Rudy, saya ingin bertanya lebih lanjut tentang layanan ${title}`)}`;

  return (
    <section id="services" className="py-14 md:py-40 bg-background border-t border-border">
      <div className="px-6 md:px-16 lg:px-24">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Layanan</p>

        <h2 className="font-display text-2xl md:text-5xl text-foreground mb-10 md:mb-20 max-w-2xl">
          Berbagai layanan untuk perjalanan ibadah Anda
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <a
              key={index}
              href={getWhatsappLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-10 border border-border hover:bg-muted/30 transition-colors duration-300 group relative"
            >
              <ArrowUpRight className="absolute top-3 right-3 md:top-6 md:right-6 h-4 w-4 text-foreground/20 group-hover:text-primary transition-colors" />
              <h3 className="font-display text-base md:text-2xl text-foreground group-hover:text-primary transition-colors mb-2 md:mb-4">
                {service.title}
              </h3>
              <p className="text-[11px] md:text-sm text-foreground leading-relaxed text-left">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
