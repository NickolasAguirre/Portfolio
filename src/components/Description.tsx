import {
  SiMongodb,
  SiSpring,
  SiJavascript,
  SiReact,
  SiMysql,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbPointFilled } from "react-icons/tb";

import Programador from "/public/img/programador.svg";
const iconos = [
  {
    nombre: "MongoDB",
    icon: <SiMongodb size={40} className="text-green-500 " />,
  },
  {
    nombre: "Spring",
    icon: <SiSpring size={40} className="text-[#AFFF33] " />,
  },
  {
    nombre: "JavaScript",
    icon: <SiJavascript size={40} className=" text-blue-600  " />,
  },
  {
    nombre: "React",
    icon: <SiReact size={40} className=" text-sky-400  " />,
  },
  {
    nombre: "MySQL",
    icon: <SiMysql size={40} className=" text-orange-400  " />,
  },
  {
    nombre: ".NET",
    icon: <SiDotnet size={40} className="text-purple-800  " />,
  },
  {
    nombre: "C#",
    icon: <SiCsharp size={40} className=" text-indigo-800   " />,
  },
  {
    nombre: "Java",
    icon: <DiJava size={40} className=" text-red-600" />,
  },
];
const Description = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row bg-[#02152b] px-10 2xl:px-20 py-40"
    >
      <div className="">
        <h1 className="text-4xl sm:text-5xl font-black  text-cyan-500  my-5">
          Acerca de mí
        </h1>
        <div className="space-y-2 m-auto">
          <p className="text-xl text-white">
            Hola, mundo, soy un desarrollador web apasionado y con múltiples
            habilidades. Con proyecto y experiencia en React, NextJS,
            JavaScript, TypeScript, Java, C#, y bases de datos, su guía hacia la
            web del futuro.
          </p>
          <p className="text-xl text-white">
            Mi objetivo es proporcionar soluciones innovadoras y efectivas para
            todos y trabajar de la mejor manera aportando mi valor.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col  gap-0 sm:gap-10">
          <Education />
          <ImageTechnologies />
        </div>
      </div>
      <div className=" flex justify-end items-center xl:mx-10">
        <img
          src={Programador}
          alt="imagen1"
          className="w-[700px]"
          id="trigger-image"
        />
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="mt-10 mb-5">
      <h1 className="text-2xl mb-2">Education</h1>
      <ul className="flex flex-col ">
        <div className="flex items-center">
          <TbPointFilled /> <li>Desarrollo de sistemas de la informacion</li>
        </div>
        <li className="mx-4">IDAT</li>
      </ul>
    </div>
  );
};

export const ImageTechnologies = () => {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-2xl mb-4 ">Technical Skills</h1>
      <ul className="grid grid-cols-4 place-items-center lg:flex gap-5">
        {iconos.map((icono, index) => (
          <li className="w-1/5" key={index}>
            <div className="flex flex-col items-center">
              {icono.icon}
              {icono.nombre}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
