// src/components/Cartas.jsx
import React, { useState, useEffect } from "react";

// Asegúrate de que esos archivos existan en src/assets/
import previewCarta1 from "../assets/1.jpeg";
import previewCarta2 from "../assets/3.jpeg";
import previewCarta3 from "../assets/16.jpeg";
import previewCarta4 from "../assets/17.jpeg";

const Cartas = () => {
  // 0–3 para indicar cuál carta está visible
  const [currentIndex, setCurrentIndex] = useState(0);
  // Array de 4 booleanos para "leer más / leer menos"
  const [openStates, setOpenStates] = useState([false, false, false, false]);

  // Datos de cada carta
  const cartasData = [
    {
      title: "Carta de Recuerdos",
      preview: previewCarta1,
      previewAlt: "Carta de Recuerdos - vista previa",
      fullContent: (
        <>
          Bbita preshosha 💕 recuerdo que la manera en que nos conocimos fue
          demasiado random hahahahahah. Y me odiabas desde el inicio porque no
          querias hacer grupo de nuevo te pasas amorsh -.- Yo si queria volver
          hacer grupo contigo porque se sentia genial Uhum 💕
          <br />
          Tambien la manera en que conocimos a nuestros padres fue MAS RANDOM
          TODAVIA hahahahahahah conociste a mi mama porque me rompi la pata
          amorsh que horrorsh ... Y yo conoci mejorsh a tu familia porque les
          dijiste que era tu amigo AJA y que no tenia donde quedarme -.- TE
          PASAS Buuuuuuuuu
          <br />
          Si me preguntas amorsh es muy divertido viajar a Ica y quedarnos a
          mimirsh en las ratoneras de asha 💕 Darte duro amorsh Ufff que rico
          Uhum 💕 Dps ya ir a vivirsh con tu papa tambien fue ufff amorsh porque
          te violaba a libertad Uhum 💕 Solamente en la casa de tu madre no se
          puede Buuuuuuuuuu tu mama es bien paranioca amorsh Buuuuuuuu. Me
          encantas amorsh y en realidad toda tu familia me cae bien hahahahaha
          hasta tu madrina porque todos ellos harian cualquier cosita por ti.
          Aunque yo les gano eh :P
          <br />
          Yo se que hay muchas cosas que recordarsh pero no hay palabras para
          poder decirte y explicarte todo lo que siento por ti y lo mucho que te
          amuuuuuuuu 💕💕💕
          <strong>GRACIAS POR TODO MI AMORSH 💕💕💕</strong>
        </>
      ),
    },
    {
      title: "Carta de Gratitud",
      preview: previewCarta2,
      previewAlt: "Carta de Gratitud - vista previa",
      fullContent: (
        <>
          Mi cielo 💕, quiero darte las gracias por cada pequeño detalle que
          hace nuestra relación única y especial Uhum 💕. Gracias por tu pequeña
          paciencia Uhum 💕 Eso es porque eres enana y no te cabe mas paciencia
          Buuuuuuuuuu
          <br />
          Gracias por acompañarme siempre en cada momento 💕 Fue muy lindo,
          genial y obviamente super tóxica que me acompañes a la entrevista
          amorsh hahahahahaha 💕💕💕
          <br />
          Gracias por cuidarme y ser tan linda 💕 Oshe me gustaría algún día
          poder tener una familia con muchos piojos (TU QUIERES 4 hahahahah
          Owwww que rico amorsh te la voy a metersh mucho Uhum 💕💕💕) Siempre
          me imagino que tenemos una rata y esa rata ingresa a la MIT y nos
          regala cositas hahahahaha Estoy muy seguro que seremos excelentes
          padres Uhum 💕
          <br />
          Tú sabes que yo haría cualquier cosita que me pidas porque eres la
          personita más preshosha y hermosha del mundo 💕💕💕
          <strong>TE AMUUUU NALGUITAS ARDIENTES 💕💕💕</strong>
        </>
      ),
    },
    {
      title: "Carta de Sueños",
      preview: previewCarta3,
      previewAlt: "Carta de Sueños - vista previa",
      fullContent: (
        <>
          💕 Mi amorsh 💕 me gustó la prueba gratis que tuvimos en la casa de tu
          tía. Fue demasiado genial poder compartir pequeños momentos juntos 💕
          <br />
          Sueño con despertarme a tu lado cada mañana, aunque seas muy
          amargadita y renegona. Ya me gustaría poder vivirsh juntos 💕. Lo
          bueno es que yo sí estoy seguro que nos llevaríamos bien conviviendo
          hahahahahaha 💕
          <br />
          Hubiera sido genial que pudiéramos ser más libres ahí hahahahahaha tu
          tio y sus hermanas se pusieron muy intensos buuuuuuuu. A mí me hubiera
          gustado poder conversar tranquilos, salirsh a pasear un rato,
          acompañarte a recoger los deliverys, tenersh mascotas ... 💕💕💕
          <br />
          Vivirsh juntos siento que cada vez está más cerca y eso me emociona y
          en un futuro no muy lejano (STAR WARS hahahahahaha) lograr hacerlo
          Uhum 💕
        </>
      ),
    },
    {
      title: "Carta de Promesas",
      preview: previewCarta4,
      previewAlt: "Carta de Promesas - vista previa",
      fullContent: (
        <>
          💕 Mi amorsh 💕, hoy quiero prometerte que siempre estaré a tu lado
          💕, cuidándote, respetándote y haciéndote sentirsh única en cada
          momento 💕.
          <br />
          Prometo apoyarte en la búsqueda de tus sueños, celebrando cada pequeño
          logro y animándote a levantarte si alguna vez tropiezas (Y riéndome
          obviamente si te caes chistosa mi amorsh Uhum💕). Prometo cuidar de ti
          cuando estés enfermita, cuando estés feliz, cuando estés triste,
          cuando no quieras saber nada de nadie e incluso cuando quieras estar
          rodeada de todo el mundo. Prometo estar siempre ahí contigo, verte
          brillar.
          <br />
          Prometo construir contigo un espacio de confianza donde podamos ser
          auténticos, donde no haya miedo a equivocarnos 💕. Prometo ser fiel a
          mis palabras y sobre todo a ti 💕 porque te amo bbita preshosha. Eres
          mi inspiración y mis ganas de salir adelante. Prometo hacerte sentir
          única, porque lo eres mi amorsh. <strong>TE AMO NALGONA 💕</strong>
        </>
      ),
    },
  ];

  // Depuración: imprime en consola el estado de la carta 0 y su src
  useEffect(() => {
    console.log("Carta 0 está abierta? →", openStates[0]);
    console.log("previewCarta1 →", previewCarta1);
  }, [openStates, currentIndex]);

  const toggleOpen = () => {
    const updated = [...openStates];
    updated[currentIndex] = !updated[currentIndex];
    setOpenStates(updated);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cartasData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cartasData.length - 1 ? 0 : prev + 1));
  };

  const { title, preview, previewAlt, fullContent } = cartasData[currentIndex];
  const isOpen = openStates[currentIndex];

  return (
    <section
      id="carta"
      className="min-h-screen bg-gradient-to-b from-red-50 to-pink-50 py-16 px-6 flex flex-col items-center"
    >
      <h2 className="font-serif text-4xl text-red-600 text-center mb-8">
        Cartas para Ti 💌
      </h2>

      <div className="relative w-full max-w-2xl">
        {/* Flecha izquierda */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
        >
          &lt;
        </button>

        {/* Carta visible */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-6 mx-10 flex flex-col">
          <h3 className="font-serif text-2xl text-red-500 mb-4">{title}</h3>
          <div className="font-serif text-base text-gray-700 mb-4 text-justify">
            {isOpen ? (
              fullContent
            ) : (
              <img
                src={preview}
                alt={previewAlt}
                className="w-full h-auto rounded-lg shadow-sm object-cover"
              />
            )}
          </div>
          <button
            onClick={toggleOpen}
            className="self-start font-serif px-4 py-2 bg-pink-500 text-white rounded-full shadow-sm hover:bg-pink-600 transition"
          >
            {isOpen ? "Leer menos" : "Leer más"}
          </button>
        </div>

        {/* Flecha derecha */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Cartas;
