import { useState } from "react";

const ServicioSocial = () => {

  const [modalData, setModalData] = useState(null);

  const dataCarreras = {
    electrica_comunicaciones: {
      title: "Ingeniería eléctrica electrónica y e ingeniería en telecomunicaciones",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Revisión e implementación de infraestructura de red", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Brindar soporte técnico"]
    },
    compu: {
      title: "Ingeniería en computación (FI)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Revisión e implementación de infraestructura de red", "Desarrollo de software", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo"]
    },
    industrial: {
      title: "Ingeniería industrial (FI)",
      items: ["Soporte mantenimiento preventivo y correctivo de equipo de cómputo", "Asesorías académicas y técnicas en áreas de cómputo", "Descripción de procesos", "Participación en el desarrollo de proyectos", "Documentación de software"]
    },
    mecatronica: {
      title: "Ingeniería mecatrónica (FI)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Revisión e implementación de infraestructura de red", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Brindar soporte técnico"]
    },
    datos: {
      title: "Ciencia de datos (IIMAS)",
      items: ["Desarrollo de software", "Realizar análisis de datos", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Generación de estadísticas y tendencias"]
    },
    info: {
      title: "Informática (FCA)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Desarrollo de software", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Brindar soporte técnico"]
    },
    tec_compu: {
      title: "Tec. Esp. en Computación (ENP)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Revisión e implementación de infraestructura de red", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Brindar soporte técnico"]
    },
    tec_desarrollo: {
      title: "Tec. Esp. en Sist. Comput. Desarrollo software (CCH)",
      items: ["Desarrollo de software", "Documentación de sistemas", "Desarrollo de pruebas automatizadas", "Realización de diagramas de bd", "Participación en el desarrollo de proyectos"]
    },

    tec_web: {
      title: "Tec. Esp. Sist. Comput. Diseño Aplicación Web BD (CCH)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo","Revisión e implementación de infraestructura de red","Desarrollo de software", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo"]
    }
  };

  const handleOpenModal = (key) => {
    setModalData(dataCarreras[key]);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <section className="servicioSocial contenedor">

      <h2 className="subtitulo">Servicio social</h2>
      <h2 className="subsubtitulo">Administración de Cómputo</h2>

      <p className="servicioSocial__objetivo">
        Objetivo: Brindar apoyo al personal académico, administrativo y estudiantil en el 
        mantenimiento preventivo y correctivo a equipo de cómputo. Apoyar en la revisión e
        implementación de redes de datos del área. Apoyar en el desarrollo de software y proyectos
        del área. Brindar asesoría académica y técnica en áreas de cómputo a la comunidad
        universitaria.
      </p>

      {/* Información general */}
      <div className="servicioSocial__lista">
        <div>
          <img src="/public/image/iconos/icono_persona.svg" className="servicioSocial__iconos" alt="icono modalidad" />
          <strong>Modalidad:</strong> Presencial
        </div>

        <div>
          <img src="/public/image/iconos/icono_reloj.svg" className="servicioSocial__iconos" alt="icono turno" />
          <strong>Turno:</strong> Flexible / Mixto
        </div>

        <div>
          <img src="public/image/iconos/icono_calendario.svg" className="servicioSocial__iconos" alt="icono horario" />
          <strong>Horario:</strong> Lunes a viernes de 7 a 21 horas. Sábado de 9 a 14 horas
        </div>

        <div>
          <img src="/public/image/iconos/icono_ubicacion.svg" className="servicioSocial__iconos" alt="icono ubicación" />
          <strong>Ubicación:</strong> Facultad de ingeniería, segundo piso del edificio Q.
        </div>
      </div>

      {/* Botones carreras */}
      <h3 className="subsubtitulo">Carreras solicitadas</h3>

      <div className="servicioSocial__carreras">
        {Object.keys(dataCarreras).map((key) => (
          <button
            key={key}
            className="boton__carreras"
            onClick={() => handleOpenModal(key)}
          >
            {dataCarreras[key].title}
          </button>
        ))}
      </div>

      {/* MODAL */}
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

      <div className="servicioSocial__Habilidades">
        
        <div className="habilidades__bloque interactivo">
          <h3>Habilidades requeridas</h3>
          <ul>
            <li>Interés en soporte técnico y TI</li>
            <li>Actitud de servicio y responsabilidad</li>
            <li>Capacidad de trabajo en equipo</li>
          </ul>
        </div>

        <div className="habilidades__bloque interactivo">
          <h3>Habilidades a desarrollar</h3>
          <ul>
            <li>Diagnóstico y solución de problemas técnicos</li>
            <li>Atención y comunicación con usuarios</li>
            <li>Organización y documentación de procesos</li>
            <li>Experiencia práctica en entornos reales de TI</li>
            <li>Comunicación y trabajo en equipo</li>
            <li>Conocimiento en infraestructura de red</li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default ServicioSocial;
