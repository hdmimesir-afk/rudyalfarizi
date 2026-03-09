const TestimoniSection = () => {
  const testimonials = [
    {
      name: "H. Ahmad Fauzi",
      role: "Pengusaha, Jakarta",
      content: "Alhamdulillah, umrah bersama Ustadz Rudy sangat berkesan. Bimbingannya detail, sabar, dan penuh ilmu.",
    },
    {
      name: "Ibu Siti Rahayu",
      role: "Owner Travel Barokah",
      content: "Sudah 3 kali bekerjasama dengan Ustadz Rudy. Jamaah selalu puas dengan bimbingannya yang profesional.",
    },
    {
      name: "Dr. Hendra Wijaya",
      role: "Dokter, Surabaya",
      content: "Private umrah untuk keluarga kami berjalan sempurna. Sangat fleksibel dan komprehensif.",
    },
  ];

  return (
    <section id="testimonials" className="py-14 md:py-40 border-t border-border" style={{ backgroundColor: 'hsl(40 20% 95%)' }}>
      <div className="px-4 md:px-12">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">Testimoni</p>

        <h2 className="font-serif text-2xl md:text-5xl font-light text-foreground mb-10 md:mb-20 max-w-2xl">
          Kesan Jamaah
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-5 md:p-12 flex flex-col justify-between min-h-[200px] md:min-h-[320px]"
            >
              <p className="font-serif text-base md:text-xl text-foreground/80 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-border">
                <p className="text-xs md:text-sm text-foreground tracking-wide">{testimonial.name}</p>
                <p className="text-[10px] md:text-xs text-foreground/40 mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
