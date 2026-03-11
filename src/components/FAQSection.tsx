import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apa pendekatan Anda dalam membimbing jamaah?",
      answer: "Saya menggunakan pendekatan yang komunikatif, edukatif, dan mudah dipahami. Selain manasik, saya juga menjelaskan sejarah dan hikmah tempat-tempat di Tanah Suci.",
    },
    {
      question: "Apa nilai lebih yang Anda tawarkan sebagai mutowwif?",
      answer: "Selain bimbingan manasik, saya juga memberikan penjelasan sejarah Islam secara lebih mendalam serta membantu dokumentasi foto dan video perjalanan jamaah.",
    },
    {
      question: "Bagaimana Anda memastikan jamaah merasa nyaman selama perjalanan?",
      answer: "Saya mengutamakan pelayanan yang ramah, responsif, dan penuh perhatian agar jamaah dapat beribadah dengan tenang dan nyaman.",
    },
    {
      question: "Apakah Anda memiliki kemampuan tambahan yang mendukung pekerjaan sebagai mutowwif?",
      answer: "Saya juga memiliki kemampuan dalam fotografi dan dokumentasi video untuk mengabadikan momen perjalanan ibadah jamaah.",
    },
    {
      question: "Apa komitmen Anda dalam membimbing jamaah?",
      answer: "Saya berkomitmen memberikan pelayanan yang amanah, profesional, dan bertanggung jawab agar jamaah mendapatkan pengalaman ibadah yang berkesan.",
    },
    {
      question: "Apakah Anda memiliki kontrak dengan travel tertentu?",
      answer: "Saya bekerja secara freelance dan terbuka untuk bekerja sama dengan berbagai travel dengan standar profesionalisme dan etika kerja yang baik.",
    },
    {
      question: "Bagaimana cara booking jadwal bimbingan?",
      answer: "Silakan hubungi saya melalui WhatsApp untuk konsultasi jadwal dan kebutuhan jamaah sebelum keberangkatan.",
    },
    {
      question: "Apakah tersedia layanan badal umroh?",
      answer: "Ya, tersedia layanan Badal Umrah untuk orang tua atau kerabat yang telah wafat atau tidak mampu berumrah, lengkap dengan dokumentasi pelaksanaannya.",
    },
  ];

  return (
    <section id="faq" className="py-14 md:py-40 bg-background border-t border-border">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24">
          <div>
            <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-6 md:mb-16">FAQ</p>
             <h2 className="font-display text-2xl md:text-5xl text-foreground leading-tight mb-6 lg:mb-0">
               Pertanyaan yang sering diajukan
             </h2>
          </div>

          <div>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border py-0"
                >
                  <AccordionTrigger className="text-left text-xs md:text-sm text-foreground hover:text-primary py-4 md:py-6 font-sans font-normal tracking-wide [&>svg]:text-primary [&>svg]:h-3.5 [&>svg]:w-3.5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground text-xs md:text-sm pb-4 md:pb-6 leading-relaxed">
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
