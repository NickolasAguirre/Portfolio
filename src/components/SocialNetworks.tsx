import { ImFacebook } from "react-icons/im";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
export const SocialNetworks = () => {
  return (
    <div
      id="contact"
      style={{ display: "flex" }}
      className="grid place-content-center mr-10 py-10 space-x-10 gap-3 sm:gap-16 "
    >
      <div className="p-2 relative ">
        <span className="linkedin  absolute  border-3 border-white p-2 duration-500">
          <a href="https://www.linkedin.com/in/nickolas-aguirre-biminchumo-a0b300267/">
            <BiLogoLinkedin
              color={"white"}
              className="h-8 w-8 lg:w-12 lg:h-12"
            />
          </a>
        </span>
      </div>
      <div className="p-2 relative ">
        <span className="github  absolute  border-3 border-white p-2 duration-500 ">
          <a href="https://github.com/NickolasAguirre">
            <FaGithubAlt color={"white"} className="h-8 w-8 lg:w-12 lg:h-12" />
          </a>
        </span>
      </div>
      <div className="p-2 relative ">
        <span className="facebook  absolute  border-3 border-white p-2 duration-500">
          <a href="https://www.facebook.com/holasoynickolas/">
            <ImFacebook color={"white"} className="h-8 w-8 lg:w-12 lg:h-12" />
          </a>
        </span>
      </div>
      <div className="p-2 relative ">
        <span className="instagram  absolute  border-3 border-white p-2 duration-500">
          <a href="https://www.instagram.com/Nickolas_aguirre27">
            <PiInstagramLogoBold
              color={"white"}
              className="h-8 w-8 lg:w-12 lg:h-12"
            />
          </a>
        </span>
      </div>
    </div>
  );
};
