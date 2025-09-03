import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    // Overlay (qoraygan fon)
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      {/* Sidebar o‘zi */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0f172a] text-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // ichida bosilganda yopilmasin
      >
        {/* Close button */}
        <button onClick={onClose} className="mb-6 cursor-pointer">
          <X size={28} />
        </button>

        {/* Links */}
        <ul className="flex flex-col gap-6 text-lg">
          <li><a href="#hero" className="hover:text-[#3f9cfb]">Bosh sahifa</a></li>
          <li><a href="#courses" className="hover:text-[#3f9cfb]">Kurslar</a></li>
          <li><a href="#teachers" className="hover:text-[#3f9cfb]">Bizning jamoa</a></li>
          <li><a href="#faq" className="hover:text-[#3f9cfb]">FAQ</a></li>
          <li><a href="#contact" className="hover:text-[#3f9cfb]">Kontakt</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
