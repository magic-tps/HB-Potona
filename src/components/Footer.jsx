// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-pink-400 via-pink-500 to-red-500 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          © {currentYear} MagiCoder. Todos los derechos reservados.
        </p>
        <p className="text-sm mt-2 md:mt-0">
          💕 Con amorsh,{" "}
          <span className="font-semibold">Tu amargadito 03/06/2025 💕</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
