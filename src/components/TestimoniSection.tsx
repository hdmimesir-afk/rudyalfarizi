const TestimoniSection = () => {
  const testimonials = [
    {
      name: "H. Ahmad Fauzi",
      role: "Pengusaha, Jakarta",
      content: "Bimbingannya detail, sabar, dan penuh ilmu. Sangat berkesan.",
    },
    {
      name: "Ibu Siti Rahayu",
      role: "Owner Travel Barokah",
      content: "Sudah 3 kali bekerjasama. Jamaah selalu puas dengan bimbingannya.",
    },
    {
      name: "Dr. Hendra Wijaya",
      role: "Dokter, Surabaya",
      content: "Private umrah berjalan sempurna. Fleksibel dan komprehensif.",
    },
  ];

  return (
    <section id="testimonials" className="py-14 md:py-32 bg-background border-t border-border">
      <div className="px-6 md:px-16 lg:px-24">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-6 md:mb-10">Testimoni</p>

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-px md:bg-border">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="md:bg-background md:p-8 flex flex-col gap-3"
            >
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-foreground tracking-wide">{testimonial.name}</span>
                <span className="text-[10px] text-foreground/50">·</span>
                <span className="text-[10px] text-foreground/50">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
