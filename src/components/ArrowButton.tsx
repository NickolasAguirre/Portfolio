import { BsArrowDown } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";

const ArrowButton = () => {
  return (
    <ScrollLink
      to="about"
      smooth={true}
      offset={-70}
      duration={500}
      className="inline-block "
    >
      <BsArrowDown size={30} className="arrow" />
    </ScrollLink>
  );
};

export default ArrowButton;
