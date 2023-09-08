import { Card, CardHeader, Image } from "@nextui-org/react";
import BusseandoTours from "/public/img/BusseandoTours.jpg";
import CineFilos from "/public/img/CineFilos.jpg";
import FixaDigital from "/public/img/FixaDigital1.mp4";

import "swiper/css";

export const Proyects = () => {
  return (
    <div>
      <CardProyects />
    </div>
  );
};

const projects = [
  {
    title: "CineFilos",
    description:
      "El ultimo proyecto que realize como estudiante fue el de cines, el cual nos permite hacer las reservas de las butacas y gestionar sus elementos",
    imageSrc: CineFilos,
    alt: "CineFilos",
    linkGitHub: "https://github.com/NickolasAguirre/CineFilos",
  },
  {
    title: "Busseando Tours",
    description:
      "En mi epoca de estudiante hice un proyecto de gestion de paquetes turisticos",
    imageSrc: BusseandoTours,
    alt: "BusseandoTours",
    linkGitHub: "https://github.com/NickolasAguirre/BusseandoTours",
  },
];

const CardProyects = () => {
  return (
    <div id="experience" className="bg-[#000b1a] py-20 lg:py-20">
      <h1 className="text-center text-4xl sm:text-5xl  m-10 font-black text-cyan-500">
        Mis proyectos
      </h1>
      <div className="flex flex-col md:flex-row justify-center  gap-9 ">
        {projects.map((project, index) => (
          <Card key={index} className="w-96 mx-auto md:mx-0  bg-[#02253d]">
            <div className="overflow-visible">
              <div className="w-full h-full">
                <Image
                  alt={project.alt}
                  className="w-full h-full object-cover rounded-none"
                  src={project.imageSrc}
                />
              </div>
            </div>
            <CardHeader className="  flex-col items-start border-t-3 border-cyan-500 rounded-none py-5 ">
              <h4 className="font-bold text-large uppercase text-cyan-500">
                {project.title}
              </h4>
              <p className="text-sm text-white">{project.description}</p>
              <a
                href={project.linkGitHub}
                className="border-2 m-2 bg-cyan-500  px-2 py-1 rounded text-black hover:text-white hover:scale-105  hover:border-cyan-500 hover:bg-[#02253d] duration-500"
              >
                Codigo
              </a>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid place-content-center m-10">
        <Card className="md:w-[800px] w-full h-full bg-[#02253d]">
          <div className="overflow-visible">
            <div className="w-full h-full">
              <video
                className="w-full h-full object-cover rounded-none"
                src={FixaDigital}
                controls
                autoPlay
                loop
              />
            </div>
          </div>

          <CardHeader className=" flex-col  border-t-3 border-cyan-500 rounded-none py-5 ">
            <h4 className="font-bold text-large uppercase text-cyan-500">
              Fixa Digital
            </h4>
            <p className="text-sm text-white">
              Actualizar la Landing Page de la pagina de la empresa que me
              contrato para practicas
            </p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};
export default CardProyects;
