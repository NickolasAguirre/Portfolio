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

export const ImageTechnologies = () => {
  return (
    <div className="my-10">
      <h1 className=" ">Technical Skills</h1>
      <div className="flex gap-5  ">
        {iconos.map((icono, index) => (
          <div className="uration- 700" key={index}>
            {icono.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
