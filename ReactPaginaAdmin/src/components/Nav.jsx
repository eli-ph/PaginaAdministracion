import "../styles/Nav.css";

function Nav() {
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

      <ul className="nav__link nav__link--menu">
        <li className="nav__viñetas">
          <a href="/" className="nav__links">
            <img src="/image/iconos/icono_inicio.svg" className="nav__iconos" />
            <span>Inicio</span>
          </a>
        </li>

        <li className="nav__viñetas">
          <a href="#AcercaDe" className="nav__links">
            <img src="/image/iconos/icono_acercaDe.svg" className="nav__iconos" />
            <span>Acerca de</span>
          </a>
        </li>

        <li className="nav__viñetas">
          <a href="#Contacto" className="nav__links">
            <img src="/image/iconos/icono_contacto.svg" className="nav__iconos" />
            <span>Contacto</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
