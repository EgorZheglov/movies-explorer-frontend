import { Link } from "react-router-dom";
import "./Promo.css";

function Promo(props) {
  return (
    <div className="promo">
      {!props.loggedIn ? (
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
      ) : (
        <div className="promo__header">
          <Link to="/" className="promo__logo" />
          <div className="promo__buttons">
            <Link to="/movies" className="promo__nav-button link">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="promo__nav-button link">
              Сохранённые фильмы
            </Link>
            <Link
              to="/profile"
              className="promo__nav-button promo__nav-button_profile link"
            >
              Аккаунт
              <div className="promo__acc-icon"></div>
            </Link>
            <Link to="/menu" className="promo__menu-button link" />
          </div>
        </div>
      )}
      <div className="promo__block">
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
    </div>
  );
}

export default Promo;
