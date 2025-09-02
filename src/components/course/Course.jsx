import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { CheckCircle2 } from "lucide-react";

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
    {eyebrow && (
      <p className="uppercase tracking-widest text-xs md:text-sm text-[#3f9cfb] font-semibold">
        {eyebrow}
      </p>
    )}
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2 md:mt-3 text-[#ffffff]">
      {title}
    </h2>
    {subtitle && (
      <p className="text-sm md:text-base text-muted-foreground/80 mt-3 leading-relaxed text-[#ffffff]">
        {subtitle}
      </p>
    )}
  </div>
);


const Course = () => {
  return (
     <section id="courses" className="py-16 md:py-24 bg-white/60 dark:bg-white/5 border-y border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle
            eyebrow="Kurslar"
            title="Siz uchun mos dasturlar"
            subtitle="Boshlang‘ichdan professionalgacha — har bir daraja uchun maxsus yo‘l xaritasi va materiallar."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[{
              title: "Ingliz tili (General/IELTS)",
              items: ["Haftasiga 3 marotaba", "Materiallar bepul", "Mock testlar"],
              price: "499 000 so‘m / oy"
            },{
              title: "Matematika (maktab + DTM)",
              items: ["DTM formatida", "Kichik guruhlar", "Uy vazifasi nazorati"],
              price: "549 000 so‘m / oy"
            },{
              title: "Dasturlash (Frontend/Backend)",
              items: ["Portfolio loyihalar", "Mentorlik", "Ishga yo‘naltirish"],
              price: "799 000 so‘m / oy"
            }].map((c, idx) => (
              <div key={idx} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 shadow-sm flex flex-col">
                <h3 className="text-xl font-semibold text-[#ffffff]">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#3f9cfb]" />
                      <span className="text-[#ffffff]">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 font-semibold text-[#3f9cfb]">{c.price}</div>
                <ScrollLink to="contact" smooth duration={600} className="mt-4 inline-flex justify-center items-center px-4 py-2 rounded-xl bg-[#3f9cfb] text-white hover:shadow cursor-pointer">
                  Ro‘yxatdan o‘tish
                </ScrollLink>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Course