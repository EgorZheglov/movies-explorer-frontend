import "./Profile.css";
import { Link } from "react-router-dom";
import React from "react";
import { UserContext } from "../contexts/UserContext";

function Profile(props) {
  const [isEditing, setIsEditing] = React.useState(false);
  const currentUser = React.useContext(UserContext);
  const [email, setEmail] = React.useState(currentUser.email);
  const [name, setName] = React.useState(currentUser.name);
  const [nameValidity, setNameValidity] = React.useState(true);
  const [emailValidity, setEmailValidity] = React.useState(true);

  const handleChangeName = (name) => {
    setName(name);
    if (name.length > 1 && name.length < 20) {
      setNameValidity(true);
    } else {
      setNameValidity(false);
    }
  };

  const handleChangeEmail = (email) => {
    setEmail(email);
    if (
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailValidity(true);
    } else {
      setEmailValidity(false);
    }
  };

  const handleUpdate = (name, email) => {
    if (emailValidity && nameValidity) {
      props.handleUpdate(name, email);
      setIsEditing(false);
    } else {
      return;
    }
  };

  const checkButton = () => {
    if (name === currentUser.name && email === currentUser.email) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="profile">
      <div className="profile__header">
        <Link to="/" className="profile__logo" />
        <div className="profile__buttons">
          <Link to="/movies" className="profile__nav-button link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="profile__nav-button link">
            Сохранённые фильмы
          </Link>
          <button className="profile__nav-button profile__nav-button_is-active link">
            Аккаунт
            <div className="profile__acc-icon"></div>
          </button>
          <Link to="/menu" className="movies__menu-button link" />
        </div>
      </div>
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <div className="profile__info">
        <div className="profile__info-item">
          <div className="profile__category">Имя</div>
          {!isEditing ? (
            <div className="profile__name">{currentUser.name}</div>
          ) : (
            <div className="profile__input">
              <input
                className={`profile__text-input ${
                  nameValidity ? "" : "profile__text-input_error"
                }`}
                value={name}
                placeholder="Введите имя"
                onChange={(e) => handleChangeName(e.target.value)}
                type="text"
              ></input>
              <div
                className={`profile__span ${
                  nameValidity ? "profile__span_disabled" : ""
                }`}
              >
                Длинна имени от 2-ух до 30-ти символов
              </div>
            </div>
          )}
        </div>
        <div className="profile__info-item">
          <div className="profile__category">E-mail</div>
          {!isEditing ? (
            <div className="profile__name">{currentUser.email}</div>
          ) : (
            <div className="profile__input">
              <input
                className={`profile__text-input ${
                  emailValidity ? "" : "profile__text-input_error"
                }`}
                value={email}
                placeholder="Введите E-mail"
                onChange={(e) => handleChangeEmail(e.target.value)}
                type="text"
              ></input>
              <div className={`profile__span ${
                  emailValidity ? "profile__span_disabled" : ""
                }`}>Введите корректный email</div>
            </div>
          )}
        </div>
      </div>
      <div className="profile__message">
      </div>
      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          className="profile__edit-button link"
        >
          Редактировать
        </button>
      ) : emailValidity && nameValidity && checkButton() ? (
        <button
          onClick={() => handleUpdate(name, email)}
          className="profile__edit-button link"
        >
          Сохранить
        </button>
      ) : (
        <button className="profile__edit-button disabled">Сохранить</button>
      )}
      {!isEditing ? (
        <button
          onClick={() => props.handleLogOut()}
          className="profile__logout-button link"
        >
          Выйти из аккаунта
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(false)}
          className="profile__cancel-button link"
        >
          Отмена
        </button>
      )}
    </div>
  );
}

export default Profile;
