import { Check, Shield, Heart, BookOpen, Clock, Award } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: BookOpen,
      title: "Ilmu Mendalam",
      description: "Lulusan Al-Azhar dengan penguasaan fiqih manasik dan sejarah Islam yang komprehensif.",
    },
    {
      icon: Heart,
      title: "Khidmat & Sabar",
      description: "Melayani dengan sepenuh hati, penuh kesabaran, dan kasih sayang kepada setiap jamaah.",
    },
    {
      icon: Shield,
      title: "Terpercaya",
      description: "Pengalaman membimbing ratusan jamaah dengan track record yang terjaga.",
    },
    {
      icon: Clock,
      title: "Fleksibel",
      description: "Jadwal yang dapat disesuaikan dengan kebutuhan jamaah atau travel umrah.",
    },
    {
      icon: Award,
      title: "Profesional",
      description: "Standar pelayanan tinggi dengan dokumentasi dan koordinasi yang terorganisir.",
    },
    {
      icon: Check,
      title: "Privasi Terjaga",
      description: "Ideal untuk VVIP, tokoh publik, atau keluarga yang membutuhkan privasi ekstra.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Keunggulan
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Kenapa Memilih Saya?
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Berikut alasan mengapa jamaah dan travel umrah mempercayakan 
            bimbingan ibadah mereka kepada saya.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-cream/10 hover:border-primary/50 bg-cream/5 hover:bg-cream/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-cream mb-2">
                {reason.title}
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
