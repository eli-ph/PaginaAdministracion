
import "../styles/SeccionDesarrolladores.css";


const SeccionDesarrolladores = () => {
  return (
    <section className="areaDesarrollo" id="AreaDesarrollo">

      <h2 className="areaDesarrollo__titulo">
        Área de Desarrollo
      </h2>

      <p className="areaDesarrollo__descripcion">
        El área de desarrollo se encarga de diseñar, implementar y mantener 
        soluciones tecnológicas que optimizan los procesos administrativos 
        y académicos del Departamento de Computación.
      </p>

      <div className="areaDesarrollo__grid">

        <div className="areaDesarrollo__card">
          <div className="areaDesarrollo__icono"> <img src="/image/iconos/icono_areadeDevsCompu.svg" alt="" className="areaDesarrollo__icono" /></div>
          <h3>Desarrollo Web</h3>
          <p>
            Creación de plataformas institucionales, sistemas internos 
            y herramientas digitales para la comunidad universitaria.
          </p>
        </div>

        <div className="areaDesarrollo__card">
          <div className="areaDesarrollo__icono"><img src="/image/iconos/icono_areadeDevsCompu.svg" alt="" className="areaDesarrollo__icono" /></div>
          <h3>Bases de Datos</h3>
          <p>
            Diseño y administración de bases de datos seguras 
            y eficientes para almacenamiento de información.
          </p>
        </div>

        <div className="areaDesarrollo__card">
          <div className="areaDesarrollo__icono"><img src="/image/iconos/icono_areadeDevsCompu.svg" alt="" className="areaDesarrollo__icono" /></div>
          <h3>Backend & Servidores</h3>
          <p>
            Implementación de servicios, APIs y configuración 
            de servidores para garantizar disponibilidad.
          </p>
        </div>

        <div className="areaDesarrollo__card">
          <div className="areaDesarrollo__icono"><img src="/image/iconos/icono_areadeDevsCompu.svg" alt="" className="areaDesarrollo__icono" /></div>
          <h3>Innovación Tecnológica</h3>
          <p>
            Desarrollo de nuevas soluciones tecnológicas 
            alineadas con las necesidades académicas.
          </p>
        </div>

      </div>

    </section>
  );
};

export default SeccionDesarrolladores;