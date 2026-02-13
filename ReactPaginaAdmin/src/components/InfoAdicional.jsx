import "../styles/InfoAdicional.css";

const InfoAdicional = () => {
  return (
    <section className="infoAdcional">
      <div className="infoAdcional__contenedor">

        <div className="infoAdcional__texto">
          <h2 className="subtitulo">Información relevante</h2>
          <p>
            La Administración de Cómputo del Departamento de Computación contribuye
            directamente al desarrollo de las actividades de docencia al asegurar el
            correcto funcionamiento de los laboratorios de cómputo del Departamento.
            Asimismo, funge como un espacio de aprendizaje práctico para el personal del
            laboratorio y el personal de servicio social, fomentando así la investigación
            y el desarrollo de habilidades técnicas y profesionales en un entorno productivo.
          </p>
        </div>

        <div className="infoAdcional__imagen">
          <img
            src="/image/fotos/admin_vista.jpg"
            alt="Departamento de cómputo"
          />
        </div>

      </div>
    </section>
  );
};

export default InfoAdicional;
