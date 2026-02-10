function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          Facultad
          <span className="facultad">de</span>
          <span className="ingenieria">Ingeniería</span>
        </div>

        <div className="footer__info">
          <h4>Información</h4>
          <p>Texto de prueba</p>
        </div>

        <div className="footer__links">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer__bottom">
        <p>© 2026</p>

        <div className="footer__social">
          <a href="#">X</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
