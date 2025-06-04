import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-400 via-pink-500 to-red-500 text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Texto */}
          <div className="flex items-center">
            <span className="text-2xl mr-2">💕</span>
            <span className="font-semibold text-xl">¡Feliz CumpleAmorsh!</span>
            <span className="text-2xl ml-2">🎂</span>
          </div>

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-rose-200 transition-colors">
              Inicio
            </a>
            <a href="#carta" className="hover:text-rose-200 transition-colors">
              Cartas
            </a>
            <a
              href="#galeria"
              className="hover:text-rose-200 transition-colors"
            >
              Galería
            </a>
          </div>

          {/* Botón hamburguesa móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-pink-600 via-rose-600 to-pink-700">
          <a
            href="#inicio"
            className="block px-4 py-2 border-t border-pink-500 hover:bg-pink-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#carta"
            className="block px-4 py-2 border-t border-pink-500 hover:bg-pink-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Cartas
          </a>
          <a
            href="#galeria"
            className="block px-4 py-2 border-t border-pink-500 hover:bg-pink-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Galería
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
