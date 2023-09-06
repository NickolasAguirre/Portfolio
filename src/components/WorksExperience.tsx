import { useState } from "react";

export const WorksExperience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="border rounded-lg overflow-hidden">
        <div
          className="p-4 bg-gray-100 cursor-pointer transition-all duration-1000 ease-in-out"
          onClick={toggleAccordion}
        >
          <h3 className="text-lg font-semibold">
            Web Developer @FixaDigital 2023 - Present
          </h3>
        </div>
        <div
          className={`${
            isOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden transition-all duration-1000 ease-in-out`}
        >
          <div className="p-4">
            <p>
              Participo como desarrollador web con optimizando los estilos y la
              logica interna de la Pagina Web con React/NextJS , usando GraphQL
              como API de desarrollo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
