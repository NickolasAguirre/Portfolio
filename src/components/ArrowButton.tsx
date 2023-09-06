import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import { BsArrowDown } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";

const ArrowButton = () => {
  return (
    <ScrollLink
      to="about"
      smooth={true}
      offset={-70} // Ajusta según tu diseño
      duration={500} // Duración de la animación en milisegundos
      className="inline-block "
    >
      <BsArrowDown size={30} className="arrow" />
    </ScrollLink>
  );
};

export default ArrowButton;
