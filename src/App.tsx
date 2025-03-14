const Trozopizza = () => {
  return (
    <div className="relative w-full h-screen text-white font-sans">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
      <img
        src="./assets/react.svg"></img>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-orange-500 mb-6">Trozopizza</h1>
        <p className="text-lg mb-12 max-w-md text-center">
          La mejor pizza en trozos, con ingredientes frescos y recetas auténticas.
        </p>

        {/* Navigation */}
        <div className="space-x-4">
          <a href="#carta" className="px-6 py-3 bg-orange-500 text-black rounded-2xl shadow-lg hover:bg-orange-600 transition">Ver Carta</a>
          <a href="#contacto" className="px-6 py-3 bg-white text-orange-500 rounded-2xl shadow-lg hover:bg-gray-100 transition">Contacto</a>
        </div>
      </div>

      {/* Carta Section */}
      <section id="carta" className="relative z-10 py-16 bg-black">
        <h2 className="text-4xl text-orange-500 text-center mb-8">Nuestra Carta</h2>
        {/* Aquí se puede agregar el menú */}
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="relative z-10 py-16 bg-black">
        <h2 className="text-4xl text-orange-500 text-center mb-8">Contacto</h2>
        {/* Información de contacto o formulario */}
      </section>
    </div>
  );
};

export default Trozopizza;