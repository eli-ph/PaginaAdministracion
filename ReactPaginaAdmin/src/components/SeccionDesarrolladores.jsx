import { useEffect, useRef, useState } from "react";
import "../styles/SeccionDesarrolladores.css";

const SeccionDesarrolladores = () => {
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  /* ==========================
     SCROLL ANIMACIÓN TARJETAS
  ========================== */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  /* ==========================
     DATOS TARJETAS
  ========================== */

  const cards = [
    {
      title: "Desarrollo Web",
      text: "Creación de plataformas institucionales y sistemas internos.",
      side: "izq",
    },
    {
      title: "Bases de Datos",
      text: "Administración de bases de datos seguras y eficientes.",
      side: "der",
    },
    {
      title: "Backend & Servidores",
      text: "Configuración de servicios y APIs institucionales.",
      side: "izq",
    },
    {
      title: "Contenedores",
      text: "",
      side: "der",
    },
  ];

  /* ==========================
     CARRUSEL
  ========================== */

  const imagenes = [
    "/image/fotos/foto_devs.jpeg",
    "/image/fotos/foto_aulaDevs1.jpg",
    "/image/fotos/foto_aulaDevs2.jpg"
  ];

  const [indexCarrusel, setIndexCarrusel] = useState(0);

  const next = () => {
    setIndexCarrusel((prev) => (prev + 1) % imagenes.length);
  };

  const prev = () => {
    setIndexCarrusel((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const intervalo = setInterval(next, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="areaDesarrollo" id="AreaDesarrollo">

      <h2 className="areaDesarrollo__titulo">
        Área de Desarrollo
      </h2>

      <p className="areaDesarrollo__descripcion">
        El área de desarrollo se encarga de diseñar, implementar y mantener 
        soluciones tecnológicas que optimizan procesos administrativos y académicos.
      </p>

      {/* ==========================
          TIMELINE
      ========================== */}

      <div className="areaDesarrollo__grid">
        {cards.map((card, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`areaDesarrollo__card ${card.side} ${
              visibleCards.includes(index) ? "visible" : ""
            }`}
          >
            <img
              src="/image/iconos/icono_areadeDevsCompu.svg"
              alt=""
              className="areaDesarrollo__icono"
            />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      {/* ==========================
          CARRUSEL (AQUÍ VA)
      ========================== */}

      <div className="areaCarrusel">

        <div className="carrusel">

          <div
            className="carrusel__track"
            style={{ transform: `translateX(-${indexCarrusel * 100}%)` }}
          >
            {imagenes.map((img, i) => (
              <div className="carrusel__slide" key={i}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>

          <button className="carrusel__btn prev" onClick={prev}>
            ‹
          </button>

          <button className="carrusel__btn next" onClick={next}>
            ›
          </button>

          <div className="carrusel__dots">
            {imagenes.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === indexCarrusel ? "active" : ""}`}
                onClick={() => setIndexCarrusel(i)}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default SeccionDesarrolladores;