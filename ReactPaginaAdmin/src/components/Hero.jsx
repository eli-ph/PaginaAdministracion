import { useEffect, useState } from "react";
import "../styles/Hero.css";

const slides = [
  "/image/fotos/admin_vista.jpg",
  "/image/fotos/foto_admin2.jpg",
  "/image/fotos/admin_switches.jpg",
  "/image/fotos/foto_admin1.jpg",
  "/image/fotos/foto_admin3.jpg",
  "/image/fotos/foto_admin4.jpg",
  "/image/fotos/foto_admin5.jpg",
  "/image/fotos/foto_microsoft1.jpg",
  "/image/fotos/foto_microsoft2.jpg",
  "/image/fotos/foto_microsoft3.jpg",
  "/image/fotos/foto_microsoft4.jpg"
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero__slides">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`hero__slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="hero__contenedor contenedor">
        <h1 className="hero__titulo">
          Conoce el área de Administración
        </h1>

        <p className="hero__parrafo">
          La Administración de Cómputo del Departamento de Computación es responsable de
          brindar soporte técnico en hardware, software e infraestructura de red a los
          laboratorios de cómputo destinados a la docencia, así como a los cubículos y
          equipos del personal académico del Departamento.
        </p>
      </div>
    </section>
  );
}

export default Hero;
