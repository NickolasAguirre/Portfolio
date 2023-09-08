import ArrowButton from "./ArrowButton";

export const Presentation = () => {
  return (
    <div className="h-full pb-40 pt-20 sm:pt-10 bg-[#000b1a]">
      <div className="w-full max-w-6xl  m-auto">
        <div className="my-20 flex flex-col justify-center items-center">
          <span className="write text-4xl xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-center  mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Nickolas Aguirre
          </span>
          <h4 className="role mx-4 sm:mx-10 md:mx-16 lg:mx-32 text-3xl lg:text-5xl font-mono">
            Software developer
          </h4>
        </div>
        <div className="p-4 sm:p-8 text-base sm:text-xl md:text-2xl lg:text-3xl">
          <p className="text-left mb-5">
            ¿Estás listo para conocer a un desarrollador que combina la magia y
            la tecnología? Sumérgete en el mundo donde se apasiona diseñar y
            crear proyectos.
          </p>
          <div className="flex items-center justify-center space-x-5 sm:space-x-10"></div>
          <div className="grid place-content-center pt-12 sm:pt-24 ">
            <ArrowButton />
          </div>
        </div>
      </div>
    </div>
  );
};
