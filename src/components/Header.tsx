import React, { useState } from "react";
const Header = () => {
  const navItems = [
    { item: "Acerca de mi", to: "#about" },
    { item: "Proyectos", to: "#experience" },
    { item: "Habilidades tecnicas", to: "#technologies" },
    { item: "Contacto", to: "#contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isFull = isMenuOpen ? "h-full absolute z-50" : "";

  return (
    <>
      <header className={`bg-[#000b1a] p-7 absolute w-full ${isFull}`}>
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Mi Sitio Web</h1>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none lg:hidden"
          >
            {isMenuOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 ">
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
        )}
      </header>
      <div className="flex-grow h-0.5 bg-cyan-500"></div>;
    </>
  );
};

export default Header;
