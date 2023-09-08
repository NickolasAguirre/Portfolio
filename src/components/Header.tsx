import React, { useState } from "react";

import { Link } from "react-scroll";

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
      <header className="bg-[#000b1a] p-7 absolute w-full sm:sticky top-0 z-50">
        <div className="flex-none md:flex p-3">
          <div className="flex justify-between items-center">
            <div className="flex items-baseline">
              <h1 className=" text-3xl font-bold ml-0 lg:ml-20 bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-cyan-500">
                {"<Nick"}
              </h1>
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-gray-50 text-xl font-semibold ">
                {"Dev/>"}
              </h1>
            </div>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none md:hidden"
            >
              {isMenuOpen ? (
                <button className="button">
                  <div className="rotate-[45deg]"></div>
                  <div className="opacity-0"></div>
                  <div className="rotate-[-45deg]"></div>
                </button>
              ) : (
                <button className="button ">
                  <div></div>
                  <div></div>
                  <div></div>
                </button>
              )}
            </button>
          </div>
          {/* Mostrar barra de navegación y navItems en dispositivos móviles */}
          <nav className="mt-2 md:hidden" style={menuStyle}>
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

          <ul className="space-x-6 hidden md:flex ml-auto  gap-20 text-xl cursor-pointer">
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
