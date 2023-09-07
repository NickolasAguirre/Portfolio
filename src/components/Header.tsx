import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const navItems = [
    { item: "Acerca de mi", to: "#about" },
    { item: "Proyectos", to: "#experience" },
    { item: "Habilidades técnicas", to: "#technologies" },
    { item: "Contacto", to: "#contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuStyle: React.CSSProperties = {
    height: isMenuOpen ? "80vh" : "0",
    opacity: isMenuOpen ? 1 : 0,
    overflow: "hidden",
    transition: "height 0.5s ease, opacity 0.5s ease",
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#000b1a", // Color de fondo
    zIndex: 50, // Z-index alto para cubrir toda la pantalla
  };
  return (
    <>
      <header className="bg-[#000b1a] p-7 absolute w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Mi Sitio Web</h1>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none lg:hidden"
          >
            {isMenuOpen ? <IoClose size={30} /> : <FaBars size={25} />}
          </button>
        </div>
        <nav className="mt-4 " style={menuStyle}>
          <ul className="space-y-2">
            {navItems.map(({ item, to }, index) => (
              <li key={index}>
                <a
                  href={to}
                  className="text-white hover:underline"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-grow h-0.5 bg-cyan-500"></div>
      </header>
    </>
  );
};

export default Header;
