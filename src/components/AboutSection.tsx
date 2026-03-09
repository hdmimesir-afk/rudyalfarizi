import { GraduationCap, Users, MapPin, Award } from "lucide-react";
import aboutImage from "@/assets/about-formal.jpg";

const AboutSection = () => {
  const stats = [
    { icon: GraduationCap, label: "Alumni Al-Azhar", value: "Mesir" },
    { icon: Users, label: "Jamaah Dibimbing", value: "500+" },
    { icon: MapPin, label: "Pengalaman", value: "7+ Tahun" },
    { icon: Award, label: "Rating", value: "⭐ 5.0" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={aboutImage}
                alt="Rudy Alfarizi - Muthowwif"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl -z-0" />
            <div className="absolute -top-4 -left-4 w-24 h-24 gradient-gold rounded-full opacity-20 blur-2xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">
                  Tentang Saya
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Rudy Alfarizi
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Assalamualaikum, saya Rudy Alfarizi, seorang pembimbing ibadah Umrah 
                yang telah mengabdikan diri untuk membantu jamaah menjalankan ibadah 
                dengan sempurna di Tanah Suci.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dengan latar belakang pendidikan dari Universitas Al-Azhar, Kairo, 
                saya memiliki pemahaman mendalam tentang fiqih manasik, sejarah Islam, 
                dan seluk-beluk perjalanan spiritual ke Makkah dan Madinah.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Visi saya adalah memastikan setiap jamaah merasakan kekhusyukan ibadah 
                dengan bimbingan yang penuh ilmu dan kasih sayang, menjadikan 
                perjalanan umrah sebagai pengalaman spiritual yang tak terlupakan.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="h-6 w-6 text-primary mb-2" />
                  <div className="text-xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
