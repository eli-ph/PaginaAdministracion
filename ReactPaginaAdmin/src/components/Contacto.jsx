import { useState } from "react";
import "../styles/Contacto.css";

const ContactoCarrusel = () => {

  const personas = [
    {
      id: 1,
      nombre: "Jorge Alberto Solano Gálvez",
      cargo: "Responsable",
      telefono: "5556223044",
      correo: "jrg_sln@fi-b.unam.mx",
      imagen: "/image/personas/solano.png"
    },
    {
      id: 2,
      nombre: "Rocío Alejandra Aldeco Pérez",
      cargo: "Coordinadora",
      telefono: "5556223077",
      correo: "raldeco@unam.mx",
      imagen: "/image/personas/rocio.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const siguiente = () => {
    setCurrentIndex((prev) =>
      prev === personas.length - 1 ? 0 : prev + 1
    );
  };

  const anterior = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? personas.length - 1 : prev - 1
    );
  };

  return (
    <section className="descripcion" id="Contacto">
      <div className="contenedor__descripcion contenedor">

        <img
          src="/image/iconos/icono_flechaIzquierda.svg"
          className="descripcion__flecha"
          alt="Flecha izquierda"
          onClick={anterior}
          style={{ cursor: "pointer" }}
        />

        {personas.map((persona, index) => (
          <section
            key={persona.id}
            className={`descripcion__cuerpo ${
              index === currentIndex ? "descripcion__cuerpo--shadow" : ""
            }`}
          >
            <div className="descripcion__texto">
              <h2 className="nombre__persona">
                {persona.nombre},
                <br />
                <span className="descripcion__cargo">
                  {persona.cargo}
                </span>
              </h2>

              <p className="descropcion">
                Teléfono: {persona.telefono}
                <br />
                Correo: {persona.correo}
              </p>
            </div>

            <figure className="descipcionimagen">
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className="descripcion__img"
              />
            </figure>
          </section>
        ))}

        <img
          src="/image/iconos/icono_flechaDerecha.svg"
          className="descripcion__flecha"
          alt="Flecha derecha"
          onClick={siguiente}
          style={{ cursor: "pointer" }}
        />

      </div>
    </section>
  );
};

export default ContactoCarrusel;

