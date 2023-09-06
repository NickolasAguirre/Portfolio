import React from "react";
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

const iconos = [
  {
    icon: (
      <SiMongodb
        size={40}
        className="text-white hover:text-green-500 duration-700"
      />
    ),
  },
  {
    icon: (
      <SiSpring
        size={40}
        className="text-white hover:text-[#AFFF33] duration-700"
      />
    ),
  },
  {
    icon: (
      <SiJavascript
        size={40}
        className="hover:text-blue-600 duration-700 text-white"
      />
    ),
  },
  {
    icon: (
      <SiReact
        size={40}
        className="hover:text-sky-400 duration-700 text-white"
      />
    ),
  },
  {
    icon: (
      <SiMysql
        size={40}
        className="hover:text-orange-400 duration-700 text-white"
      />
    ),
  },
  {
    icon: (
      <SiDotnet
        size={40}
        className="hover:text-purple-800 duration-700 text-white "
      />
    ),
  },
  {
    icon: (
      <SiCsharp
        size={40}
        className="hover:text-indigo-800  duration-700 text-white"
      />
    ),
  },
  {
    icon: (
      <DiJava
        size={40}
        className="hover:text-red-600 duration-700 text-white"
      />
    ),
  },
];

const Description = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#02152b] px-4 lg:px-20 py-40 m-auto">
      <div className="">
        <h1 className="text-5xl font-bold text-cyan-500 whitespace-pre">
          Acerca de mí
        </h1>
        <div className="space-y-10 m-auto">
          <p className="text-xl  text-white">
            Hola, mundo, soy un desarrollador web apasionado y con múltiples
            habilidades. Con proyecto y experiencia en React, NextJS,
            JavaScript, TypeScript, Java, C# y bases de datos, su guía hacia la
            web del futuro.
          </p>
          <p className="text-xl  text-white">
            Mi objetivo es proporcionar soluciones innovadoras y efectivas para
            todos y trabajar de la mejor manera aportando mi valor.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col space-x-6">
          <Education />
          <ImageTechnologies />
        </div>
      </div>
      <div className="m-auto flex justify-end items-center mx-10">
        <img
          src="/public/programador.svg"
          alt="imagen1"
          className="h-96 m-auto"
          id="trigger-image"
        />
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="my-10">
      <h1>Education</h1>
      <ul className="">
        <li className="fila">Desarrollo de sistemas de la informacion</li>
        <li>Idat</li>
      </ul>
    </div>
  );
};
export const ImageTechnologies = () => {
  return (
    <div className="my-10">
      <h1 className="">Technical Skills</h1>
      <ul className="grid grid-cols-4 lg:flex gap-5 ">
        {iconos.map((icono, index) => (
          <li className="duration-700 w-1/5" key={index}>
            {icono.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
