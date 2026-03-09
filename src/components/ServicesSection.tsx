import { 
  Users, 
  UserCheck, 
  FileText, 
  MapPin, 
  Camera 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: UserCheck,
      title: "Bimbingan Umrah Private",
      description: "Layanan bimbingan khusus untuk individu atau keluarga dengan jadwal fleksibel dan perhatian penuh.",
      features: ["Jadwal fleksibel", "Materi lengkap", "Pendampingan intensif"],
    },
    {
      icon: Users,
      title: "Bimbingan Umrah Group",
      description: "Bimbingan profesional untuk travel umrah dan rombongan haji, dengan koordinasi yang terorganisir.",
      features: ["Koordinasi group", "Briefing harian", "Manasik lengkap"],
    },
    {
      icon: FileText,
      title: "Badal Umrah",
      description: "Layanan ibadah umrah untuk orang tua atau keluarga yang telah wafat, dengan sertifikat dan dokumentasi.",
      features: ["Sertifikat resmi", "Dokumentasi lengkap", "Doa khusus"],
    },
    {
      icon: MapPin,
      title: "Private City Tour",
      description: "Tour eksklusif ke tempat-tempat bersejarah Islam di Madinah, Makkah, Thaif, Jeddah, Al-Ula, dan Badr.",
      features: ["Guide berlisensi", "Rute custom", "Sejarah mendalam"],
    },
    {
      icon: Camera,
      title: "Content Creator / Talent",
      description: "Kolaborasi konten umrah untuk brand, travel, atau kebutuhan media sosial dengan kualitas profesional.",
      features: ["Konten berkualitas", "Storytelling", "Multi-platform"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Layanan Unggulan
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Apa yang Saya Tawarkan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berbagai layanan profesional untuk memastikan perjalanan ibadah Anda 
            berjalan dengan sempurna dan penuh berkah.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-6 bg-card border-border hover:border-primary/30 hover:shadow-gold transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
