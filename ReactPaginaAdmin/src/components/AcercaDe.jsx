import iconoSoporte from "/public/image/iconos/icono_adminSoporte.svg";
import iconoSoftware from "/public/image//iconos/icono_adminInstalacion.svg";
import iconoRed from "/public/image/iconos/icono_adminRedes.svg";
import iconoGestion from "/public/image/iconos/icono_adminGestion.svg";

const AcercaDe = () => {
  return (
    <section className="acercaDe contenedor" id="AcercaDe">
      <h2 className="subtitulo">¿Qué se hace en administración?</h2>

      <p className="acercaDe__parrafo">
        El personal de la Administración de Cómputo del Departamento de Computación
        apoya en diversas áreas del cómputo a alumnos y al personal adscrito al Departamento.
      </p>

      <div className="acercaDe__list">
        <div className="acercade__elemento" data-info="soporte">
          <img src={iconoSoporte} className="acercaDe__icono" alt="Soporte técnico" />
          <h3 className="acercaDe__titulo">Soporte técnico</h3>
        </div>

        <div className="acercade__elemento" data-info="software">
          <img src={iconoSoftware} className="acercaDe__icono" alt="Instalación de software" />
          <h3 className="acercaDe__titulo">Instalación de software</h3>
        </div>

        <div className="acercade__elemento" data-info="red">
          <img src={iconoRed} className="acercaDe__icono" alt="Infraestructura de red" />
          <h3 className="acercaDe__titulo">Infraestructura de red</h3>
        </div>

        <div className="acercade__elemento" data-info="gestion">
          <img src={iconoGestion} className="acercaDe__icono" alt="Gestión académica" />
          <h3 className="acercaDe__titulo">Gestión académico-administrativa</h3>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
