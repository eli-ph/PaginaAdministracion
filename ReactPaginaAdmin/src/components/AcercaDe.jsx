import { useState } from "react";

import iconoSoporte from "/public/image/iconos/icono_adminSoporte.svg";
import iconoSoftware from "/public/image/iconos/icono_adminInstalacion.svg";
import iconoRed from "/public/image/iconos/icono_adminRedes.svg";
import iconoGestion from "/public/image/iconos/icono_adminGestion.svg";

const infoAcerca = {
  soporte: {
    title: "Soporte técnico",
    items: [
      "Configuración y mantenimiento de equipo de cómputo",
      "Diagnóstico y reparación de equipos",
      "Atención a fallas de hardware",
      "Mantenimiento preventivo"
    ]
  },
  software: {
    title: "Instalación de software",
    items: [
      "Instalación de sistemas operativos",
      "Instalación de software especializado"
    ]
  },
  red: {
    title: "Infraestructura de red",
    items: [
      "Cableado estructurado",
      "Configuración de switches",
      "Soporte a red interna"
    ]
  },
  gestion: {
    title: "Gestión académico-administrativa",
    items: [
      "Organización de actividades académicas",
      "Documentación de procedimientos"
    ]
  }
};

const AcercaDe = () => {

  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (key) => {
    setModalData(infoAcerca[key]);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <section className="acercaDe contenedor" id="AcercaDe">

      <h2 className="subtitulo">¿Qué se hace en administración?</h2>

      <p className="acercaDe__parrafo">
        El personal de la Administración de Cómputo apoya en diversas áreas.
      </p>

      <div className="acercaDe__list">

        <div className="acercade__elemento" onClick={() => handleOpenModal("soporte")}>
          <img src={iconoSoporte} className="acercaDe__icono" alt="Soporte técnico" />
          <h3 className="acercaDe__titulo">Soporte técnico</h3>
        </div>

        <div className="acercade__elemento" onClick={() => handleOpenModal("software")}>
          <img src={iconoSoftware} className="acercaDe__icono" alt="Instalación" />
          <h3 className="acercaDe__titulo">Instalación de software</h3>
        </div>

        <div className="acercade__elemento" onClick={() => handleOpenModal("red")}>
          <img src={iconoRed} className="acercaDe__icono" alt="Red" />
          <h3 className="acercaDe__titulo">Infraestructura de red</h3>
        </div>

        <div className="acercade__elemento" onClick={() => handleOpenModal("gestion")}>
          <img src={iconoGestion} className="acercaDe__icono" alt="Gestión" />
          <h3 className="acercaDe__titulo">Gestión académico-administrativa</h3>
        </div>

      </div>

      {modalData && (
        <div
          className="servicioSocial__infoDespegable"
          onClick={handleCloseModal}
          style={{ display: "flex" }}
        >
          <div
            className="servicioSocial__infoDespegableCaja"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="servicioSocial__infoDespegableClose"
              onClick={handleCloseModal}
            >
              ×
            </button>

            <h4>{modalData.title}</h4>

            <ul>
              {modalData.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>
        </div>
      )}

    </section>
  );
};

export default AcercaDe;
