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
      question: "Apakah bisa bimbingan untuk keluarga kecil?",
      answer: "Tentu! Saya menyediakan layanan bimbingan private untuk individu, pasangan, atau keluarga kecil. Jadwal sangat fleksibel dan bimbingan lebih intensif.",
    },
    {
      question: "Apa saja yang termasuk dalam layanan?",
      answer: "Layanan meliputi: bimbingan manasik, pendampingan selama di Tanah Suci, penjelasan sejarah dan fiqih, serta doa-doa khusus.",
    },
    {
      question: "Bagaimana dengan layanan Badal Umrah?",
      answer: "Layanan Badal Umrah diperuntukkan bagi yang ingin mengumrahkan orang tua atau kerabat yang sudah wafat. Anda akan mendapat sertifikat resmi dan dokumentasi lengkap.",
    },
    {
      question: "Apakah bisa bekerjasama dengan travel umrah?",
      answer: "Ya, saya terbuka untuk kerjasama dengan travel umrah sebagai freelance muthowwif. Sudah berpengalaman handle group dari berbagai travel di Indonesia.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-xs tracking-mega uppercase text-primary mb-16">FAQ</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground leading-tight">
              Pertanyaan
              <br />
              yang Sering
              <br />
              Diajukan
            </h2>
          </div>

          {/* Right */}
          <div>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border py-2"
                >
                  <AccordionTrigger className="text-left text-sm text-foreground hover:text-primary py-6 font-sans font-normal tracking-wide [&>svg]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/40 text-sm pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
