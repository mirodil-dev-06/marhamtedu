import { GraduationCap, Clock } from "lucide-react";

const SectionTitle = ({ eyebrow, title }) => (
  <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
    {eyebrow && (
      <p className="uppercase tracking-widest text-xs md:text-sm text-[#3f9cfb] font-semibold">
        {eyebrow}
      </p>
    )}
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2 md:mt-3 text-[#ffffff]">
      {title}
    </h2>
  </div>
);
const TeacherCard = ({ name, role, exp }) => (
  <div className="group rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-sm">
    <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
      {/* Placeholder avatar */}
      <GraduationCap className="w-16 h-16 opacity-60" />
    </div>
    <div className="p-5">
      <h4 className="font-semibold text-lg text-[#ffffff]">{name}</h4>
      <p className="text-muted-foreground text-sm mt-1 text-[#ffffff]">{role}</p>
      <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
        <Clock className="w-4 h-4 text-[#3f9cfb]" />
        {exp}
      </div>
    </div>
  </div>
);


const Teachers = () => {
  return (
    <section id="teachers" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle
            eyebrow="Ustozlar"
            title="Tajribali mentorlar jamoasi"
            subtitle="Har bir yo‘nalish bo‘yicha real tajribaga ega va o‘quvchi bilan ishlashni biladigan ustozlar."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <TeacherCard name="Zilola Karimova" role="Ingliz tili, IELTS 8.0" exp="7+ yil tajriba" />
            <TeacherCard name="Javlon Beknazarov" role="Matematika, DTM" exp="6+ yil tajriba" />
            <TeacherCard name="Madina Xudoyberdiyeva" role="Frontend (React)" exp="5+ yil tajriba" />
            <TeacherCard name="Sardor Akbarov" role="Backend (Node.js)" exp="6+ yil tajriba" />
          </div>
        </div>
      </section>
  )
}

export default Teachers