import React, { useState } from "react";
import "../styles/PreguntasFrecuentes.css";

const PreguntasFrecuentes = () => {
  const [preguntaActiva, setPreguntaActiva] = useState(null);

  const togglePregunta = (index) => {
    if (preguntaActiva === index) {
      setPreguntaActiva(null); 
    } else {
      setPreguntaActiva(index);
    }
  };

  const preguntas = [
    {
      pregunta: "¿Dónde se encuentra administración?",
      respuesta:
        'Se encuentra en el Conjunto Sur de la Facultad de Ingeniería, segundo piso del edificio "Q" (Ing. Luis G. Valdés Vallejo), en las oficinas del Departamento de Computación de la FI, UNAM.',
    },
    {
      pregunta: "¿Cuál es el horario de atención?",
      respuesta:
        "El laboratorio de administración se encuentra abierto de lunes a viernes de 7:00 a 21:00 horas y los sábados de 9:00 a 14:00 horas.",
    },
  ];

  return (
    <section className="preguntasF contenedor">
      <h2 className="subtitulo">Preguntas frecuentes</h2>
      <p className="texto__preguntasF">
        Sección destinada a resolver las dudas más comunes relacionadas con el
        área de administración.
      </p>

      <section className="contenedor__preguntasF">
        {preguntas.map((item, index) => (
          <article
            key={index}
            className={`padding__preguntasF ${
              preguntaActiva === index ? "padding__preguntasF--add" : ""
            }`}
          >
            <div className="respuestas__preguntasF">
              <h3
                className="titulo__pregunta"
                onClick={() => togglePregunta(index)}
              >
                {item.pregunta}
                <span
                  className={`flecha__pregunta ${
                    preguntaActiva === index
                      ? "flecha__pregunta--rotate"
                      : ""
                  }`}
                >
                  <img
                    src="/image/iconos/icono_peguntasFrecuentes.svg"
                    alt=""
                    className="imagenes__preguntasF"
                  />
                </span>
              </h3>

              <p
                className="respuesta__preguntasF"
                style={{
                  height:
                    preguntaActiva === index ? "auto" : "0px",
                  overflow: "hidden",
                  transition: "height 0.3s ease",
                }}
              >
                {item.respuesta}
              </p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default PreguntasFrecuentes;
