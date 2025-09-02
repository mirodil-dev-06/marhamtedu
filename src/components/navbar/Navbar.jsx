import '../navbar/Navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-scroll'
import Sidebar from '../sideBar/SideBar';
import { useState } from 'react';
import { Menu } from "lucide-react";


const Navbar = () => {
  const navLinksLeft = [
    { label: 'Bosh sahifa', to: 'hero' },
    { label: 'Kurslar', to: 'courses' },
    { label: 'Bizning jamoa', to: 'teachers' },
    { label: 'FAQ', to: 'faq' },
    { label: 'Kontakt', to: 'contact' }
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="header w-full h-24 max-w-7xl mx-auto p-10 flex justify-between items-center text-amber-50">
      <div className="header__logo">
        <Link
          to='#'
          smooth={true}
          duration={500}
          className='cursor-pointer'>
          <img src={logo} alt="logo" className="w-[150px]" />
        </Link>
      </div>
      <nav className='hidden md:flex'>
        <ul className="flex gap-5">
          {navLinksLeft.map((link, i) => (
            <li key={i}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer font-[Inter] relative 
                     hover:text-[#3f9cfb] transition-colors duration-300
                     after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#3f9cfb] after:left-0 after:-bottom-1
                     hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>


      <div className="md:hidden">
        <button onClick={() => setIsSidebarOpen(true)} className='cursor-pointer'>
          <Menu size={28} />
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Navbar;
