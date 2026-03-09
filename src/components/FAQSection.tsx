import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Bagaimana cara booking jadwal bimbingan?",
      answer: "Anda bisa langsung menghubungi saya via WhatsApp untuk konsultasi jadwal. Setelah itu kita akan diskusi mengenai kebutuhan jamaah, tanggal keberangkatan, dan paket layanan yang sesuai.",
    },
    {
      question: "Apakah bisa bimbingan untuk keluarga kecil (private)?",
      answer: "Tentu! Saya menyediakan layanan bimbingan private untuk individu, pasangan, atau keluarga kecil. Jadwal sangat fleksibel dan bimbingan lebih intensif.",
    },
    {
      question: "Apa saja yang termasuk dalam layanan bimbingan?",
      answer: "Layanan meliputi: bimbingan manasik sebelum keberangkatan, pendampingan selama di Tanah Suci (tawaf, sa'i, wukuf), penjelasan sejarah dan fiqih di setiap lokasi, serta doa-doa khusus.",
    },
    {
      question: "Bagaimana dengan layanan Badal Umrah?",
      answer: "Layanan Badal Umrah diperuntukkan bagi yang ingin mengumrahkan orang tua atau kerabat yang sudah wafat. Anda akan mendapat sertifikat resmi, dokumentasi lengkap, dan laporan pelaksanaan ibadah.",
    },
    {
      question: "Apakah bisa bekerjasama dengan travel umrah?",
      answer: "Ya, saya terbuka untuk kerjasama dengan travel umrah sebagai freelance muthowwif. Sudah berpengalaman handle group dari berbagai travel di Indonesia.",
    },
    {
      question: "Berapa biaya layanan bimbingan?",
      answer: "Biaya bervariasi tergantung jenis layanan dan durasi. Silakan hubungi saya via WhatsApp untuk konsultasi dan penawaran yang sesuai dengan kebutuhan Anda.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              FAQ
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berikut jawaban untuk pertanyaan yang sering diajukan oleh calon jamaah.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-secondary hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
