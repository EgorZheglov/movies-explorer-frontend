import { Link } from "react-router-dom";
import "./Promo.css";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__header">
        <div className="promo__logo" />
        <div className="promo__buttons">
          <Link to="/sign-up" className="promo__signup-button link">Регистрация</Link>
          <Link to="/login" className="promo__login-button link">Войти</Link>
        </div>
      </div>
      <img className="promo__image" src={require("../../images/promo.png")} />
      <div className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </div>
      <div className="promo__footer">
        <nav className="promo__nav">
          <button className="promo__nav-link">О проекте</button>
          <button className="promo__nav-link">Технологии</button>
          <button className="promo__nav-link">Студент</button>
        </nav>
      </div>
    </div>
  );
}

export default Promo;
