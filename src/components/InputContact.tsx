const InputContact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col items-center justify-center  h-screen bg-[#02253d]">
        <h1 className="text-6xl font-bold mb-3 text-white">Hablemos</h1>
        <div className="text-center w-1/3 ">
          <p className="text-2xl leading-7  text-center my-10">
            ¿Tienes un proyecto interesante y necesitas un desarrollador poco
            convencional? ¡Envíame un correo electrónico o contáctame por
            mensaje instantáneo!
          </p>
        </div>
        <div className="flex items-center ">
          <button color="success" className="text-lg">
            <a href="mailto:nickolasaguirreknox@gmail.com">Contactame</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputContact;
