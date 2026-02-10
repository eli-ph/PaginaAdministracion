import { useEffect, useState } from "react";

function Hero() {
  const slides = [
    "/images/fotos/admin_vista.jpg",
    "/images/fotos/imagen_presentacion.jpeg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero__slides">
        {slides.map((img, i) => (
          <div
            key={i}
            className={`hero__slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
