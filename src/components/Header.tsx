import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll"; // Importa Link desde react-scroll

const Header = () => {
  const navItems = [
    { item: "Acerca de mí", to: "about" },
    { item: "Proyectos", to: "experience" },
    { item: "Contacto", to: "contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuStyle: React.CSSProperties = {
    height: isMenuOpen ? "80vh" : "0",
    opacity: isMenuOpen ? 1 : 0,
    overflowY: "scroll",
    transition: "height 0.5s ease, opacity 0.5s ease",
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#000b1a",
    zIndex: 50,
  };

  return (
    <>
      <header className="bg-[#000b1a] p-7 absolute w-full">
        <div className="flex-none md:flex p-3">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold ml-20">
              Mi Sitio Web
            </h1>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none lg:hidden"
            >
              {isMenuOpen ? <IoClose size={30} /> : <FaBars size={25} />}
            </button>
          </div>
          {/* Mostrar barra de navegación y navItems en dispositivos móviles */}
          <nav className="mt-4 lg:hidden" style={menuStyle}>
            <ul className="space-y-2">
              {navItems.map(({ item, to }, index) => (
                <li key={index}>
                  <Link
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    onClick={toggleMenu}
                    className="text-white hover:underline cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mostrar navItems alineados a la derecha y a la misma altura que el título */}
          <ul className="space-x-6 hidden md:flex ml-auto mr-20 gap-20 text-xl cursor-pointer">
            {navItems.map(({ item, to }, index) => (
              <li key={index} className="duration-500 hover:relative">
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="underline-expand"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow h-0.5 bg-cyan-500"></div>
      </header>
    </>
  );
};

export default Header;
