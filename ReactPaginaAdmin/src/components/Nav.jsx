function Nav() {
  return (
    <nav className="nav nav__contenedor">
      <div className="nav__logo">
        <h2 className="nav__titulo">
          <img
            src="/images/iconos/icono_administracion.svg"
            className="nav__iconos"
          />
          <span>Administracion</span>
        </h2>
      </div>

      <ul className="nav__link nav__link--menu">
        <li className="nav__viñetas">
          <a href="#Inicio" className="nav__links">Inicio</a>
        </li>
        <li className="nav__viñetas">
          <a href="#AcercaDe" className="nav__links">Acerca de</a>
        </li>
        <li className="nav__viñetas">
          <a href="#Contacto" className="nav__links">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
