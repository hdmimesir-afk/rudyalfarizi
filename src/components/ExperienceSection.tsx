import { Check } from "lucide-react";

const experiences = [
  {
    title: "3+ Tahun Pengalaman Mutowwif Haramain",
    description: "Aktif membimbing jamaah di Makkah dan Madinah sejak 2022.",
  },
  {
    title: "5000+ Jamaah Pernah Didampingi",
    description: "Dari berbagai rombongan umrah dan perjalanan ibadah.",
  },
  {
    title: "Bekerja Sama dengan Berbagai Travel Umrah",
    description: "Melayani jamaah dari Indonesia, Malaysia, dan Brunei Darussalam.",
  },
  {
    title: "10+ Lokasi Sejarah Islam Dibimbing",
    description: "Termasuk Makkah, Madinah, Thaif, Hudaibiyah, Badr, dan Al Ula.",
  },
  {
    title: "Lulusan Universitas Al-Azhar Kairo",
    description: "Dengan pemahaman fiqh manasik dan sejarah Islam.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-14 md:py-40 bg-background border-t border-border">
      <div className="px-6 md:px-16 lg:px-24">
        <p className="text-[10px] md:text-xs tracking-mega uppercase text-primary mb-8 md:mb-16">
          Pengalaman
        </p>

        <h2 className="font-display text-2xl md:text-5xl text-foreground mb-10 md:mb-20 max-w-3xl">
          Pengalaman Nyata Membimbing Jamaah di Tanah Suci.
        </h2>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="py-5 md:py-8 border-b border-border flex items-start gap-3 md:gap-4"
            >
              <Check className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base md:text-2xl text-foreground mb-1 md:mb-2">
                  {exp.title}
                </h3>
                <p className="text-[11px] md:text-sm text-foreground/70 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
