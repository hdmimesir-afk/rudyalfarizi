import { Link } from "react-router-dom";
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
    slug: "content-creator",
    title: "Talent Umrah",
    description: "Kebutuhan talent untuk konten dan kampanye brand terkait umrah dan haji.",
  },
];

export { services };

const ServicesSection = () => {
  return (
    <section id="services" className="py-14 md:py-40 border-t border-border" style={{ backgroundColor: 'hsl(40 20% 95%)' }}>
      <div className="px-4 md:px-12">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Layanan</p>

        <h2 className="font-serif text-2xl md:text-5xl font-light text-secondary-foreground mb-10 md:mb-20 max-w-2xl">
          Berbagai Layanan untuk Perjalanan Ibadah Anda
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/layanan/${service.slug}`}
              className="p-4 md:p-10 border border-secondary-foreground/10 hover:bg-secondary-foreground/5 transition-colors duration-300 group relative"
            >
              <ArrowUpRight className="absolute top-3 right-3 md:top-6 md:right-6 h-4 w-4 text-secondary-foreground/20 group-hover:text-primary transition-colors" />
              <h3 className="font-serif text-base md:text-2xl font-light text-secondary-foreground group-hover:text-primary transition-colors mb-2 md:mb-4">
                {service.title}
              </h3>
              <p className="text-[11px] md:text-sm text-secondary-foreground/50 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
