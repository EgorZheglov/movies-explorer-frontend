import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./Promo.css";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__header">
        <div className="promo__logo" />
        <div className="promo__buttons">
          <Link to="/sign-up" className="promo__signup-button link">
            Регистрация
          </Link>
          <Link to="/login" className="promo__login-button link">
            Войти
          </Link>
        </div>
      </div>
      <div className="promo__block">
        <div className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </div>
        <div className="promo__footer">
          <nav className="promo__nav">
            <HashLink to='/#about' className="promo__nav-link">О проекте</HashLink>
            <HashLink to='/#technologies' className="promo__nav-link">Технологии</HashLink>
            <HashLink to='/#student' className="promo__nav-link">Студент</HashLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Promo;
