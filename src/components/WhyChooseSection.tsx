const WhyChooseSection = () => {
  const reasons = [
    { title: "Ilmu Mendalam", description: "Lulusan Al-Azhar dengan penguasaan fiqih manasik dan sejarah Islam." },
    { title: "Khidmat & Sabar", description: "Melayani dengan sepenuh hati dan kasih sayang kepada setiap jamaah." },
    { title: "Terpercaya", description: "Pengalaman membimbing ratusan jamaah dengan track record yang terjaga." },
    { title: "Fleksibel", description: "Jadwal dapat disesuaikan dengan kebutuhan jamaah atau travel umrah." },
    { title: "Profesional", description: "Standar pelayanan tinggi dengan dokumentasi dan koordinasi terorganisir." },
    { title: "Privasi Terjaga", description: "Ideal untuk VVIP, tokoh publik, atau keluarga yang butuh privasi." },
  ];

  return (
    <section className="py-14 md:py-40 bg-muted/20 border-t border-border">
      <div className="px-4 md:px-12">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Keunggulan</p>

        <h2 className="font-display text-2xl md:text-5xl text-foreground mb-10 md:mb-20 max-w-2xl">
          Kenapa memilih saya?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-4 md:p-10 border border-border hover:bg-muted/30 transition-colors duration-300 group"
            >
              <h3 className="font-display text-base md:text-2xl text-foreground group-hover:text-primary transition-colors mb-2 md:mb-4">
                {reason.title}
              </h3>
              <p className="text-[11px] md:text-sm text-foreground/40 leading-relaxed">
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
