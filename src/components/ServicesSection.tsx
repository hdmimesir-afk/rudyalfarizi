const ServicesSection = () => {
  const services = [
    {
      num: "01",
      title: "Bimbingan Umrah Private",
      description: "Layanan bimbingan khusus untuk individu atau keluarga dengan jadwal fleksibel dan perhatian penuh.",
    },
    {
      num: "02",
      title: "Bimbingan Umrah Group",
      description: "Bimbingan profesional untuk travel umrah dan rombongan haji, dengan koordinasi yang terorganisir.",
    },
    {
      num: "03",
      title: "Badal Umrah",
      description: "Layanan ibadah umrah untuk orang tua atau keluarga yang telah wafat, dengan sertifikat dan dokumentasi.",
    },
    {
      num: "04",
      title: "Private City Tour",
      description: "Tour eksklusif ke Madinah, Makkah, Thaif, Jeddah, Al-Ula, dan Badr.",
    },
    {
      num: "05",
      title: "Content Creator",
      description: "Kolaborasi konten umrah untuk brand, travel, atau kebutuhan media sosial.",
    },
  ];

  return (
    <section id="services" className="py-14 md:py-40 bg-background border-t border-border">
      <div className="px-4 md:px-12">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Layanan</p>

        <h2 className="font-serif text-2xl md:text-5xl font-light text-foreground mb-10 md:mb-20 max-w-2xl">
          Berbagai Layanan untuk Perjalanan Ibadah Anda
        </h2>

        <div className="border-t border-border">
          {services.map((service) => (
            <div
              key={service.num}
              className="group flex flex-col md:grid md:grid-cols-12 gap-1 md:gap-4 py-5 md:py-8 border-b border-border hover:bg-muted/30 transition-colors duration-300 cursor-default px-2 md:px-4"
            >
              <div className="md:col-span-1">
                <span className="text-[10px] text-foreground/30 font-sans">{service.num}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-lg md:text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-7 md:col-start-6 mt-1 md:mt-0">
                <p className="text-xs md:text-sm text-foreground/40 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
