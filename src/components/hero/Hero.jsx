import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { CheckCircle2 } from "lucide-react";

const Stat = ({ value, label }) => (
  <div className="bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm text-center">
    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#ffffff]">{value}</div>
    <div className="text-sm md:text-base text-[#ffffff]/90 mt-1">{label}</div>
  </div>
);

const Hero = () => {
  return (
    <section id="hero" className="md:pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Chap qism - Matn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#ffffff]">
              Bilim bilan kelajakni{" "}
              <span className="text-[#3f9cfb]">quring</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#ffffff]/90 max-w-xl">
              "Marhamat Ta'lim" — ingliz tili, matematika, fizika va dasturlash bo‘yicha
              zamonaviy darslar. Onlayn/offlayn, kichik guruhlar, natijaga
              yo‘naltirilgan dastur.
            </p>

            {/* Tugmalar */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-[#3f9cfb] text-white font-semibold shadow hover:shadow-md transition-shadow cursor-pointer"
              >
                Ro‘yxatdan o‘tish
              </ScrollLink>
              <ScrollLink
                to="courses"
                smooth={true}
                duration={600}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-[#3f9cfb] text-[#ffffff] hover:bg-white/10 transition-colors cursor-pointer"
              >
                Kurslarni ko‘rish
              </ScrollLink>
            </div>

            {/* Statistikalar */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <Stat value="5000+" label="Muvaffaqiyatli bitiruvchi" />
              <Stat value="120+" label="Tajriba soati / o‘qituvchi" />
              <Stat value="98%" label="Qoniqish darajasi" />
            </div>
          </motion.div>

          {/* O‘ng qism - Rasm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="aspect-square sm:aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-200 via-orange-100 to-amber-50 dark:from-amber-900/20 dark:via-amber-800/10 dark:to-zinc-800 border border-black/5 dark:border-white/10 shadow-lg" />
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-black/5 dark:border-white/10 rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3f9cfb]" />
                <span className="text-xs sm:text-sm text-[#ffffff]">
                  Sertifikat beriladi
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
