import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        
        {/* Logo */}
        <div className="footer__logo">
          <span className="facultad">Facultad de</span>
          <span className="ingenieria">Ingeniería</span>
        </div>

        {/* Información */}
        <div className="footer__info">
          <h4>Universidad Nacional Autónoma de México</h4>
          <p>
            Facultad de Ingeniería, Av. Universidad 3000, Ciudad Universitaria,
            Coyoacán, México D.F., CP. 04510
          </p>
          <p><strong>Teléfono:</strong> 56 22 08 66</p>
          <p><strong>Fax:</strong> 56 16 28 90</p>
        </div>

        {/* Sitios de interés */}
        <div className="footer__links">
          <h4>Sitios de Interés</h4>
          <ul>
            <li>
              •{" "}
              <a
                href="https://www.anfei.mx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ANFEI
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://cacei.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CACEI
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="http://www.alianzafiidem.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alianza FIDEM
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://ingenet.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INGENET
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer__bottom">
        <p>
          Todos los derechos reservados Copyright © 2025 /
          Facultad de Ingeniería / UNAM /
        </p>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/FacultadIngenieriaUNAM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/public/image/iconos/icono_footerFacebook.svg"
              alt="Facebook"
              className="footer_social--img"
            />
          </a>

          <a
            href="https://x.com/FIUNAM_MX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/public/image/iconos/icono_footerX.svg"
              alt="X"
              className="footer_social_X"
            />
          </a>

          <a
            href="https://www.instagram.com/fiunam_mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/public/image/iconos/icono_footerInstagram.svg"
              alt="Instagram"
              className="footer_social--img"
            />
          </a>

          <a
            href="https://www.youtube.com/tvingenieria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/public/image/iconos/icono_footerYoutube.svg"
              alt="YouTube"
              className="footer_social--img"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
