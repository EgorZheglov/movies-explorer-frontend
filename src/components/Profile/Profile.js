import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__logo" />
        <div className="profile__buttons">
          <Link to="/movies" className="profile__nav-button link">Фильмы</Link>
          <Link to="/saved-movies" className="profile__nav-button link">Сохранённые фильмы</Link>
          <button className="profile__nav-button profile__nav-button_is-active link">
            Аккаунт
            <div className="profile__acc-icon"></div>
          </button>
          <Link to="/menu" className="movies__menu-button link" />
        </div>
      </div>
      <h1 className="profile__title">Привет, Егор!</h1>
      <div className="profile__info">
        <div className="profile__info-item">
          <div className="profile__category">Имя</div>
          <div className="profile__name">Егор</div>
        </div>
        <div className="profile__info-item">
          <div className="profile__category">E-mail</div>
          <div className="profile__name">eeeeee@yandex.ru</div>
        </div>
      </div>
      <button className="profile__edit-button link">Редактировать</button>
      <Link to="/login" className="profile__logout-button link">Выйти из аккаунта</Link>
    </div>
  );
}

export default Profile;
