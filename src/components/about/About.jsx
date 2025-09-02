import { BookOpen, Users2, Award, Clock } from "lucide-react";

const SectionTitle = ({ eyebrow, title }) => (
  <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-widest text-[#3f9cfb] md:text-sm">
        {eyebrow}
      </p>
    )}
    <h2 className="mt-2 text-2xl font-bold text-white md:mt-3 md:text-4xl lg:text-5xl">
      {title}
    </h2>
  </div>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-amber-100 p-2 dark:bg-[#3f9cfb]">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-white/80">{desc}</p>
  </div>
);

const features = [
  {
    icon: Users2,
    title: "Kichik guruhlar",
    desc: "8–12 kishilik guruhlarda individual yondashuv va ko‘proq amaliyot.",
  },
  {
    icon: BookOpen,
    title: "Yangilangan dastur",
    desc: "CEFR va Cambridge standartlari asosida ishlab chiqilgan dasturlar.",
  },
  {
    icon: Clock,
    title: "Mos jadval",
    desc: "Ertalab/kechki va dam olish kunlari guruhlari mavjud.",
  },
  {
    icon: Award,
    title: "Sertifikat",
    desc: "Kurs yakunida ichki imtihon va rasmiy sertifikat.",
  },
];

const About = () => (
  <section id="why" className="py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <SectionTitle
        eyebrow="Nega biz?"
        title="O‘quvchilar tanlovi — Marhamat Ta'lim"
      />
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {features.map((feature, idx) => (
          <Feature key={idx} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default About;
