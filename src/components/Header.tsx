import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";

const Header = () => {
  const navItems = [
    { item: "Acerca de mi", to: "about" },
    { item: "Proyectos", to: "experience" },
    { item: "Habilidades tecnicas", to: "technologies" },
    { item: "Contacto", to: "contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#000b1a]">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarMenu>
          {navItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === navItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href={item.to}
                size="lg"
              >
                {item.item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="flex-grow h-0.5 bg-cyan-500"></div>
    </>
  );
};

export default Header;
