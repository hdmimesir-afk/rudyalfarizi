const TestimoniSection = () => {
  const testimonials = [
    {
      name: "Sri Ismayati",
      role: "Bogor",
      content: "Saya sangat terkesan dengan kepemimpinan dan cara kerja Ustadz Rudy yang cekatan. Jazakallah khairan atas bimbingannya Ustadz. Semoga menjadi amal jariyah yang terus mengalir. Senang bisa bertemu anak muda soleh, pintar dan baik hati.",
    },
    {
      name: "Dinda",
      role: "Palembang",
      content: "Ada yang unik dari cara Ustadz Rudy menjelaskan berbagai cerita, baik tentang ilmu maupun sejarah Islam. Cara beliau mendeskripsikan suatu peristiwa mampu menarik perhatian, membuat pikiran terus merespons, dan telinga ingin mendengarkan sampai selesai. Menurut saya, itu sangat keren.",
    },
    {
      name: "Anis Sartika",
      role: "Samarinda",
      content: "Terima kasih, Ustadz Rudy Alfarizi, mutowif terbaik. Dengan sabar membimbing dan mengarahkan segala bentuk sifat dan keunikan manusia-manusia di batch ini. Semoga next umroh mutowifnya Ustadz Rudy lagi.",
    },
    {
      name: "Lestari Syatiri",
      role: "Bekasi",
      content: "Selain jadi mutowif, beliau juga bisa loh jadi konten kreator. Pokoknya dokumentasi aman. Kalau ada Ustadz Rudy, kenapa cari yang lain?",
    },
    {
      name: "An An Aminah",
      role: "Garut",
      content: "Dear our lovely mutowif, Rudy Alfarizi. Terima kasih untuk bimbingannya, tanggung jawabnya, dan ilmunya. It was a golden moment. Semoga ketemu lagi Bang Rudy. Lancar terus hajatnya.",
    },
  ];

  return (
    <section id="testimonials" className="section-light py-14 md:py-32 border-t border-border">
      <div className="px-6 md:px-16 lg:px-24">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Testimoni</p>

        <h2 className="font-display text-2xl md:text-5xl text-foreground mb-10 md:mb-20 max-w-2xl">
          Apa kata mereka yang pernah bersama saya
        </h2>

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 md:p-8 border border-border flex flex-col gap-4"
            >
              <p className="text-xs md:text-sm text-foreground leading-relaxed text-left">
                "{testimonial.content}"
              </p>
              <div className="mt-auto pt-2">
                <span className="text-xs text-foreground tracking-wide font-medium">{testimonial.name}</span>
                <span className="text-[10px] text-foreground/50 ml-2">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
