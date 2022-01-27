import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__items">
          <div className="footer__copyright">&copy; 2022</div>
          <div className="footer__links">
              <a
                className="footer__link link"
                target="_blank"
                href="https://github.com"
              >
                Github
              </a>
              <a
                className="footer__link link"
                target="_blank"
                href="https://practicum.yandex.ru/"
              >
                Яндекс.Практикум
              </a>
              <a
                className="footer__link link"
                target="_blank"
                href="https://www.facebook.com/"
              >
                Facebook
              </a>
          </div>
      </div>
    </div>
  );
}

export default Footer;
