import { Phone, Facebook, Instagram, Send } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
  { label: "Bosh sahifa", to: "hero" },
  { label: "Kurslar", to: "courses" },
  { label: "Bizning jamoa", to: "teachers" },
  { label: "FAQ", to: "faq" },
  { label: "Kontakt", to: "contact" },
];

const socialLinks = [
  { href: "https://www.facebook.com/marhamatedu", icon: <Facebook size={24} /> },
  { href: "https://www.instagram.com/marhamattalim/", icon: <Instagram size={24} /> },
  { href: "https://t.me/marhamat_education", icon: <Send size={24} /> },
];

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-[#3f9cfb] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-4">
        
        {/* Contact info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <Phone size={18} />
            <a href="tel:+998959000530" className="font-medium text-[20px]">+998 90 123 45 67</a>
          </div>
          <p>
            Toshkent shahar, Olmazor tumani <br /> Farobiy ko'chasi 28 uy
          </p>
        </div>

        {/* Navigation */}
        <ul className="flex gap-5 flex-wrap justify-center md:justify-start">
          {navLinks.map(({ label, to }, index) => (
            <li key={index}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                className="cursor-pointer font-[Inter] hover:underline"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social links */}
        <div className="flex gap-5">
          {socialLinks.map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-100">
        © "Marhamat Ta'lim", {new Date().getFullYear()} - Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
