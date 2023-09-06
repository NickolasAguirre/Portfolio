import { Card, CardHeader, Image } from "@nextui-org/react";

export const Proyects = () => {
  return (
    <div id="experience ">
      <CardProyects />
    </div>
  );
};

const projects = [
  {
    title: "Proyecto sobre gestión de cine",
    description:
      "El ultimo proyecto que realize como estudiante fue el de cines, el cual nos permite hacer las reservas de las butacas y gestionar sus elementos",
    imageSrc: "/public/img/CineFilos.jpg",
    alt: "CineFilos",
    linkGitHub: "https://github.com/NickolasAguirre/",
  },
  {
    title: "Busseando Tours",
    description:
      "En mi epoca de estudiante hice un proyecto de gestion de paquetes turisticos",
    imageSrc: "/public/img/BusseandoTours.jpg",
    alt: "BusseandoTours",
    linkGitHub: "https://github.com/NickolasAguirre/BusseandoTours",
  },
];
const CardProyects = () => {
  return (
    <div className="bg-[#000b1a] space-y-4 p-10">
      <h1 className="text-center text-5xl">Mis proyectos</h1>
      <div className="flex justify-center gap-9 ">
        {projects.map((project, index) => (
          <Card key={index} className="w-96">
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
              <p className="text-tiny  font-bold overflow-hidden">
                {project.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default CardProyects;
