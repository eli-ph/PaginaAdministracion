import { useState } from "react";

const infoAcerca = {
  soporte: {
    titulo: "Soporte técnico",
    items: [
      "Configuración y mantenimiento de equipo de cómputo",
      "Diagnóstico y reparación de equipos",
      "Atención a fallas de hardware",
      "Mantenimiento preventivo"
    ]
  },
  software: {
    titulo: "Instalación de software",
    items: [
      "Instalación de sistemas operativos",
      "Instalación de software especializado"
    ]
  }
};

function AcercaDe() {
  const [modalData, setModalData] = useState(null);

  return (
    <section className="acercaDe" id="AcercaDe">
      <h2 className="subtitulo">Acerca de</h2>

      <div className="acercaDe__list">
        {Object.entries(infoAcerca).map(([key, data]) => (
          <div
            key={key}
            className="acercade__elemento"
            onClick={() => setModalData(data)}
          >
            <h3 className="acercaDe__titulo">{data.titulo}</h3>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="servicioSocial__infoDespegable" onClick={() => setModalData(null)}>
          <div
            className="servicioSocial__infoDespegableCaja"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="servicioSocial__infoDespegableClose"
              onClick={() => setModalData(null)}
            >
              ×
            </button>

            <h3>{modalData.titulo}</h3>
            <ul>
              {modalData.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default AcercaDe;
