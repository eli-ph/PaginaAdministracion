import { useState, useEffect } from "react";
import "../styles/Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquear scroll cuando el menú esté abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <h2 className="nav__titulo">
            <img
              src="/image/iconos/icono_administracion.svg"
              alt=""
              className="nav__iconos"
            />
            Administración
          </h2>
        </div>

        {/* Links desktop */}
        <ul className="nav__links-desktop">
          <li><a href="/">Inicio</a></li>
          <li><a href="#AcercaDe">Acerca de</a></li>
          <li><a href="#Contacto">Contacto</a></li>
        </ul>

        {/* Hamburguesa móvil */}
        <div
          className="nav__hamburguesa"
          onClick={() => setMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`nav__overlay ${menuOpen ? "nav__overlay--show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Drawer lateral */}
      <aside className={`nav__drawer ${menuOpen ? "nav__drawer--show" : ""}`}>
        <div className="nav__drawer-header">
          <button
            className="nav__close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="nav__drawer-links">
          <li><a href="/" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#AcercaDe" onClick={() => setMenuOpen(false)}>Acerca de</a></li>
          <li><a href="#Contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </aside>
    </>
  );
}

export default Nav;
