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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-4 md:p-8 border border-border"
            >
              <div className="flex items-start gap-3 mb-3">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                <h3 className="font-display text-base md:text-xl text-foreground">
                  {exp.title}
                </h3>
              </div>
              <p className="text-[11px] md:text-sm text-foreground/70 leading-relaxed pl-7 md:pl-8">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
