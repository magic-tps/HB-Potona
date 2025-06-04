// src/components/Player.jsx
import React, { useRef, useState, useEffect } from "react";

// IMPORTA el audio desde src
import musica from "../../public/audio/musica.mp3";

const Player = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Intentar reproducir; muchos navegadores bloquean autoplay si no está muted
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Si falla el autoplay con sonido, dejamos paused
          setPlaying(false);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2 z-50">
      <audio
        ref={audioRef}
        src={musica} // ← Usamos la variable importada
        loop
        // Si quieres forzar autoplay sin interacción, añade muted
        // muted
      />
      <button
        onClick={togglePlay}
        className="px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition"
      >
        {playing ? "Pausar Música" : "Reproducir Música"}
      </button>
    </div>
  );
};

export default Player;
