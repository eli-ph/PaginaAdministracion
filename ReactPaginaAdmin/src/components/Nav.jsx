import { useState, useEffect } from "react";
import "../styles/Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              className="nav__iconoAdmin"
            />
            Administración
          </h2>
        </div>

        {/* Links desktop */}
        <ul className="nav__links-desktop">
          <li><a href="/"> <img src="/image/iconos/icono_inicio.svg" alt="" className="nav__iconos"/>Inicio</a></li>
          <li><a href="#AcercaDe"> <img src="/image/iconos/icono_acercaDe.svg" alt="" className="nav__iconos"/>Acerca de</a></li>
          <li><a href="#Contacto"> <img src="/image/iconos/icono_contacto.svg" alt="" className="nav__iconos"/>Contacto</a></li>
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
          <li><a href="/" class="nav__textoTelefono" onClick={() => setMenuOpen(false)}> Inicio</a></li>
          <li><a href="#AcercaDe"class="nav__textoTelefono" onClick={() => setMenuOpen(false)}>Acerca de</a></li>
          <li><a href="#Contacto"class="nav__textoTelefono" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </aside>
    </>
  );
}

export default Nav;
