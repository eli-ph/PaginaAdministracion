import { useState } from "react";

function Pregunta({ titulo, respuesta }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`padding__preguntasF ${open ? "padding__preguntasF--add" : ""}`}>
      <div className="titulo__pregunta" onClick={() => setOpen(!open)}>
        {titulo}
        <span className={`flecha__pregunta ${open ? "flecha__pregunta--rotate" : ""}`}>
          ⌄
        </span>
      </div>

      <div
        className="respuesta__preguntasF"
        style={{ height: open ? "auto" : 0 }}
      >
        {respuesta}
      </div>
    </div>
  );
}

export default function PreguntasFrecuentes() {
  return (
    <section className="preguntasF">
      <h2 className="subtitulo">Preguntas frecuentes</h2>

      <Pregunta
        titulo="¿Cómo solicito servicio?"
        respuesta="Texto de respuesta"
      />
    </section>
  );
}
