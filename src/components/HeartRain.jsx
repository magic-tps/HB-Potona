// src/components/HeartRain.jsx
import React, { useEffect, useState } from "react";

const HeartRain = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Cada 300 ms generamos un nuevo corazón
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9);
      const left = Math.random() * 100; // porcentaje horizontal

      setHearts((prev) => [...prev, { id, left }]);

      // Después de 4 s eliminamos el corazón para no acumular demasiados
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 4000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-red-500 text-2xl animate-fall"
          style={{ left: `${h.left}%` }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default HeartRain;
