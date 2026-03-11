const WhyChooseSection = () => {
  const reasons = [
    { title: "Ilmu Mendalam", description: "Latar belakang pendidikan di Universitas Al-Azhar Kairo dengan pemahaman fiqih manasik dan sejarah Islam yang mendalam." },
    { title: "Bimbingan yang Mudah Dipahami", description: "Pendekatan komunikatif dan jelas, sehingga jamaah dapat menjalankan ibadah dengan lebih tenang dan penuh pemahaman." },
    { title: "Terpercaya", description: "Pengalaman membimbing ribuan jamaah dengan track record yang terjaga sejak 2022" },
    { title: "Pelayanan dengan Ketulusan", description: "Mengutamakan pelayanan yang sabar, ramah, dan penuh perhatian terhadap setiap jamaah." },
    { title: "Enerjik dan Mudah Beradaptasi", description: "Pendampingan yang hangat dan fleksibel untuk jamaah dari berbagai usia dan latar belakang." },
    { title: "Dokumentasi Perjalanan Jamaah", description: "Mengabadikan momen perjalanan ibadah melalui foto dan video sebagai kenangan berharga dari Tanah Suci." },
  ];

  return (
    <section className="py-14 md:py-40 bg-muted/20 border-t border-border">
      <div className="px-6 md:px-16 lg:px-24">
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
              <p className="text-[11px] md:text-sm text-foreground leading-relaxed text-left">
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
