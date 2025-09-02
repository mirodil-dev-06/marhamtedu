import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BOT_TOKEN = "YOUR_BOT_TOKEN"; // xavfsizlik uchun .env ga joylashtiring
const CHAT_ID = "YOUR_CHAT_ID";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Ingliz tili (General)",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `
📝 Yangi ariza keldi:

👤 Ism: ${formData.name}
📞 Telefon: ${formData.phone}
📚 Kurs: ${formData.course}
💬 Izoh: ${formData.message || "Izoh yo‘q"}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown"
        })
      });

      toast.success("✅ Arizangiz yuborildi! Tez orada operator bog‘lanadi.");

      setFormData({
        name: "",
        phone: "",
        course: "Ingliz tili (General)",
        message: ""
      });
    } catch (error) {
      toast.error("❌ Xatolik yuz berdi. Qaytadan urinib ko‘ring!");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Chap tomonda kontakt ma’lumotlari */}
          <div>
            <SectionTitle
              eyebrow="Bog‘lanish"
              title="Ro‘yxatdan o‘ting yoki savol bering"
            />
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3f9cfb]" />
                <a href="tel:+998959000530" className="text-[#ffffff]">+998 95 900 05 30</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#3f9cfb]" />
                <a href="mailto:mirodil.mavlonov.2023@gmail.com" className="text-[#ffffff]">example@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#3f9cfb]" />
                <span className="text-[#ffffff]">
                  Toshkent, Chilonzor, 12-kvartal, 34-uy
                </span>
              </div>

              {/* Google Map */}
              <div className="mt-4 rounded-2xl overflow-hidden border border-black/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019.3854663804793!2d69.17436748008726!3d41.2781745991029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89e6e423b927%3A0xd0e317fe340061b8!2sMirodil%20Media!5e0!3m2!1sru!2s!4v1756794094967!5m2!1sru!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* O‘ng tomonda forma */}
          <div className="bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-[#ffffff]">
                  Ism familiya
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ismingiz"
                  required
                  className="mt-1 w-full px-4 py-3 rounded-xl border bg-white/90 dark:bg-zinc-900/50 outline-none focus:ring-2 focus:ring-[#3f9cfb] placeholder:text-gray-500 placeholder:italic text-[#ffffff]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#ffffff]">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 __ ___ __ __"
                  required
                  className="mt-1 w-full px-4 py-3 rounded-xl border bg-white/90 dark:bg-zinc-900/50 outline-none focus:ring-2 focus:ring-[#3f9cfb] placeholder:text-gray-500 placeholder:italic text-[#ffffff]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#ffffff]">
                  Kursni tanlang
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-3 rounded-xl border bg-white/90 dark:bg-zinc-900/50 outline-none focus:ring-2 focus:ring-[#3f9cfb] text-gray-500"
                >
                  <option>Ingliz tili (General)</option>
                  <option>Ingliz tili (IELTS)</option>
                  <option>Matematika (maktab)</option>
                  <option>Matematika (DTM)</option>
                  <option>Dasturlash (Frontend)</option>
                  <option>Dasturlash (Backend)</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#ffffff]">
                  Izoh (ixtiyoriy)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Savolingiz yoki qulay vaqt"
                  className="mt-1 w-full px-4 py-3 rounded-xl border bg-white/90 dark:bg-zinc-900/50 outline-none focus:ring-2 focus:ring-[#3f9cfb] placeholder:text-gray-500 placeholder:italic text-[#ffffff]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-[#3f9cfb] cursor-pointer text-white font-semibold shadow hover:shadow-md"
              >
                Ariza yuborish
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toastify container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
