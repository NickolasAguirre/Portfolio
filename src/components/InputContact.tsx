const InputContact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-52 px-10 sm:px-20 md:px-32 lg:px-40 xl:px-52 bg-[#02253d]">
        <h1 className="text-4xl sm:text-5xl font-black text-cyan-500 mb-3 ">
          Hablemos
        </h1>
        <div className="text-center w-full lg:w-1/2">
          <p className="text-2xl leading-7  text-center my-10">
            ¿Tienes un proyecto en mente que deseas desarrollar? ¡Estoy
            totalmente dispuesto a hacerlo realidad, contáctame a través de
            correo electrónico o vía mensaje directo!
          </p>
        </div>
        <div className="flex items-center ">
          <a
            href="mailto:nickolasaguirreknox@gmail.com"
            className="border-2 p-2 bg-cyan-500 hover:bg-[#02253d] hover:border-cyan-500 duration-500 hover:scale-125"
          >
            Contactame
          </a>
        </div>
      </div>
    </div>
  );
};

export default InputContact;
