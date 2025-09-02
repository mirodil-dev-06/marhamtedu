import { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import logo from "../../assets/images/logo.png";
import "../navbar/Navbar.css";

const NAV_LINKS = [
  { label: "Bosh sahifa", to: "hero" },
  { label: "Kurslar", to: "courses" },
  { label: "Bizning jamoa", to: "teachers" },
  { label: "FAQ", to: "faq" },
  { label: "Kontakt", to: "contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="w-full h-24 max-w-7xl mx-auto p-6 flex justify-between items-center text-white">
      {/* Logo */}
      <Link to="hero" smooth duration={500} className="cursor-pointer">
        <img src={logo} alt="logo" className="w-[150px]" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={500}
                className="cursor-pointer font-[Inter] relative 
                  hover:text-[#3f9cfb] transition-colors duration-300
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#3f9cfb] after:left-0 after:-bottom-1
                  hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden cursor-pointer"
      >
        <Menu size={28} />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Navbar;
