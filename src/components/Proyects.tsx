import { Card, CardHeader, Image } from "@nextui-org/react";
import BusseandoTours from "/public/img/BusseandoTours.jpg";
import CineFilos from "/public/img/CineFilos.jpg";
import FixaDigital from "/public/img/FixaDigital1.mp4";

import "swiper/css";

export const Proyects = () => {
  return (
    <div id="experience ">
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
    linkGitHub: "https://github.com/NickolasAguirre/",
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
    <div className="bg-[#000b1a] py-20 lg:py-20">
      <h1 className="text-center text-5xl m-10">Mis proyectos</h1>
      <div className="flex flex-col md:flex-row justify-center  gap-9 ">
        {projects.map((project, index) => (
          <Card key={index} className="w-96 mx-auto md:mx-0 hover:scale-105 ">
            <div className="overflow-visible">
              <div className="w-full h-full">
                <Image
                  alt={project.alt}
                  className="w-full h-full object-cover rounded-none"
                  src={project.imageSrc}
                />
              </div>
            </div>
            <CardHeader className="  flex-col items-start border-t-3 border-cyan-500 rounded-none py-5">
              <h4 className="font-bold text-large uppercase text-cyan-500">
                {project.title}
              </h4>
              <p className="text-sm">{project.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid place-content-center m-10">
        <Card className="md:w-[800px] w-full h-full hover:scale-105">
          <div className="overflow-visible">
            <div className="w-full h-full">
              <video
                className="w-full h-full object-cover rounded-none"
                src={FixaDigital}
                autoPlay={true}
                loop={true}
              />
            </div>
          </div>

          <CardHeader className=" flex-col  border-t-3 border-cyan-500 rounded-none py-5 ">
            <h4 className="font-bold text-large uppercase text-cyan-500">
              Fixa Digital
            </h4>
            <p className="text-sm">
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
