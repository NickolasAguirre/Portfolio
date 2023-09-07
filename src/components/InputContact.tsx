const InputContact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col items-center justify-center py-52 px-10 sm:px-20 md:px-32 lg:px-40 xl:px-52 bg-[#02253d]">
        <h1 className="text-6xl font-bold mb-3 text-white">Hablemos</h1>
        <div className="text-center w-full lg:w-1/2">
          <p className="text-2xl leading-7  text-center my-10">
            ¿Tienes un proyecto interesante y necesitas un desarrollador poco
            convencional? ¡Envíame un correo electrónico o contáctame por
            mensaje instantáneo!
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
