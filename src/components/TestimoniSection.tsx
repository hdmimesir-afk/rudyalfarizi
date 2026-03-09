import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimoniSection = () => {
  const testimonials = [
    {
      name: "H. Ahmad Fauzi",
      role: "Pengusaha, Jakarta",
      content: "Alhamdulillah, umrah bersama Ustadz Rudy sangat berkesan. Bimbingannya detail, sabar, dan penuh ilmu. Keluarga kami merasakan kekhusyukan yang luar biasa.",
      rating: 5,
    },
    {
      name: "Ibu Siti Rahayu",
      role: "Owner Travel Barokah",
      content: "Sudah 3 kali bekerjasama dengan Ustadz Rudy untuk group umrah kami. Jamaah selalu puas dengan bimbingannya yang profesional dan penuh perhatian.",
      rating: 5,
    },
    {
      name: "Dr. Hendra Wijaya",
      role: "Dokter, Surabaya",
      content: "Private umrah untuk keluarga kami berjalan sempurna. Ustadz Rudy sangat fleksibel dengan jadwal dan memberikan bimbingan manasik yang komprehensif.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Testimoni
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Kesan Jamaah
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Apa kata jamaah dan travel umrah yang pernah menggunakan layanan bimbingan saya.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center mb-4">
                <Quote className="h-5 w-5 text-primary-foreground" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div>
                <p className="font-serif font-bold text-secondary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
