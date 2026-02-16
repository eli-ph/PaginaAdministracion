import { useState } from "react";
import "../styles/Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav nav__contenedor">

      <div className="nav__logo">
        <h2 className="nav__titulo">
          <img
            src="/image/iconos/icono_administracion.svg"
            alt=""
            className="nav__iconos"
          />
          <span>Administración</span>
        </h2>
      </div>

      {/* MENÚ */}
      <ul className={`nav__link ${menuOpen ? "nav__link--show" : ""}`}>
        <li className="nav__viñetas">
          <a href="/" className="nav__links">Inicio</a>
        </li>
        <li className="nav__viñetas">
          <a href="#AcercaDe" className="nav__links">Acerca de</a>
        </li>
        <li className="nav__viñetas">
          <a href="#Contacto" className="nav__links">Contacto</a>
        </li>
      </ul>

      {/* HAMBURGUESA */}
      <div
        className={`nav__hamburguesa ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
    </nav>
    
  );
}

useEffect(() => {
  if(menuAbierto){
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [menuAbierto]);


export default Nav;
