// src/components/Galeria.jsx
import React from "react";

// Importa tus imágenes de la carpeta src/assets/
import img1 from "../assets/7.jpeg";
import img2 from "../assets/9.jpeg";
import img3 from "../assets/11.jpeg";
import img4 from "../assets/14.jpeg";

const Galeria = () => {
  return (
    <section id="galeria" className="py-16 px-6 bg-white">
      <h2 className="font-serif text-4xl text-center text-red-600 mb-8">
        Galería
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Imagen 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            src={img1}
            alt="Imagen 1"
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-serif text-xl drop-shadow-lg">
              ERES
            </span>
          </div>
        </div>

        {/* Imagen 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            src={img2}
            alt="Imagen 2"
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-serif text-xl drop-shadow-lg">
              EL AMORSH
            </span>
          </div>
        </div>

        {/* Imagen 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            src={img3}
            alt="Imagen 3"
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-serif text-xl drop-shadow-lg">
              DE MI
            </span>
          </div>
        </div>

        {/* Imagen 4 */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            src={img4}
            alt="Imagen 4"
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-serif text-xl drop-shadow-lg">
              VIDA 💕
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
