import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../../assets/logo-white.png";
import HeroImg from "../../assets/header.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="container p-8 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-5 sm:h-12" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-16 cursor-pointer">
              <a className="uppercase font-[650] text-gray-400 hover:text-black hover:scale-110 duration-300">
                Services
              </a>
              <a className="uppercase font-[650] text-gray-400 hover:text-black hover:scale-110 duration-300">
                Stores
              </a>
              <a className="uppercase font-[650] text-gray-400 hover:text-black hover:scale-110 duration-300">
                Contact
              </a>
            </ul>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden z-20" onClick={toggleMenu}>
            {menuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white/80 shadow-md transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6">
            <a
              onClick={toggleMenu}
              className="uppercase font-[650] text-gray-700 hover:text-black hover:scale-105 transition duration-300"
            >
              Services
            </a>
            <a
              onClick={toggleMenu}
              className="uppercase font-[650] text-gray-700 hover:text-black hover:scale-105 transition duration-300"
            >
              Stores
            </a>
            <a
              onClick={toggleMenu}
              className="uppercase font-[650] text-gray-700 hover:text-black hover:scale-105 transition duration-300"
            >
              Contact
            </a>
          </ul>
        </div>
      </nav>

      {/* Hero Image */}
      <header className="container">
        <img src={HeroImg} alt="Hero" className="w-full object-cover" />
      </header>
    </>
  );
};

export default Navbar;
