import { useState } from "react";
import "../styles/AcercaDe.css";


import iconoSoporte from "/image/iconos/icono_adminSoporte.svg";
import iconoSoftware from "/image/iconos/icono_adminInstalacion.svg";
import iconoRed from "/image/iconos/icono_adminRedes.svg";
import iconoGestion from "/image/iconos/icono_adminGestion.svg";

const infoAcerca = {
  soporte: {
    title: "Soporte técnico",
    items: [
      "Configuracion y mantenimiento de equipo de cómputo, utilizados en laboratorios de docencia y en cubiculos de profesores.",
      "Diagnóstico y reparación de equipos.",
      "Atención a fallas de hardware.",
      "Mantenimiento preventivo."
    ]
  },
  software: {
    title: "Instalación de software",
    items: [
      "Instalación de sistemas operativos.",
      "Instalación de software especializado requerido para cada asignatura que se imparte en el Departamento de Computación."
    ]
  },
  red: {
    title: "Infraestructura de red",
    items: [
      "Cableado estructurado.",
      "Configuración de switches.",
      "Soporte a red interna.",
       "Atención a fallas y diagnostico de la red."
    ]
  },
  gestion: {
    title: "Gestión académico-administrativa",
    items: [
      "Apoyo en la organización de actividades académicas como eventos, transmisiones, cursos, diplomados, visitas, etc.",
      "Administrativas como impresion de publicidad, levantamiento de inventarios, documentación de procedimientos.",
      "Organización de actividades académicas.",
      "Documentación de procedimientos."
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
        El personal de la Administración de Cómputo del Departamento de Computación
        apoya en diversas áreas del cómputo a alumnos y al personal adscrito al Departamento.
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
        <div className="modal" onClick={handleCloseModal}>
          <div
            className="modal__contenido"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal__cerrar"
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
