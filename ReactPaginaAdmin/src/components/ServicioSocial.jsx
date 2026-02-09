const carreras = {
  compu: {
    title: "Ingeniería en Computación",
    items: ["Desarrollo de software", "Soporte técnico"]
  },
  datos: {
    title: "Ciencia de Datos",
    items: ["Análisis de datos", "Estadística"]
  }
};
import { useState } from "react";

function ServicioSocial() {
  const [modal, setModal] = useState(null);

  return (
    <section className="servicioSocial">
      <h2 className="subtitulo">Servicio Social</h2>

      <div className="servicioSocial__carreras">
        {Object.entries(carreras).map(([key, data]) => (
          <button
            key={key}
            className="boton__carreras"
            onClick={() => setModal(data)}
          >
            {data.title}
          </button>
        ))}
      </div>

      {modal && (
        <div className="servicioSocial__infoDespegable" onClick={() => setModal(null)}>
          <div
            className="servicioSocial__infoDespegableCaja"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="servicioSocial__infoDespegableClose"
              onClick={() => setModal(null)}
            >
              ×
            </button>

            <h3>{modal.title}</h3>
            <ul>
              {modal.items.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicioSocial;
