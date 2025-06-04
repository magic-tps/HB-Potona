// Inicio.jsx
import React from "react";

const Inicio = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-red-100 text-center px-6"
    >
      <h1 className="font-serif text-5xl text-red-600 mb-4">¡MI AMORSH! ❤️</h1>
      <p className="font-serif text-xl text-red-500 mb-8 max-w-xl text-center">
        Gracias por todo el amor que me entregas cada día. Eres lo mejor que me
        ha pasado y mi mayor alegría. Espero seguir compartiendo muchos momentos
        a tu lado, creciendo juntos y celebrando cada instante de nuestra vida.{" "}
        <br />
        <strong>TE AMO MI BBITA PRESHOSHA 💕</strong>
      </p>
      <div className="flex space-x-4">
        <a
          href="#carta"
          className="font-serif px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition"
        >
          Ver Cartas
        </a>
        <a
          href="#galeria"
          className="font-serif px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
        >
          Ver Galería
        </a>
      </div>
    </section>
  );
};

export default Inicio;
