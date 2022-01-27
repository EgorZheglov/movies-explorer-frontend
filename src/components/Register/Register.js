import "./Register.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import React from "react";

function Register() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="register">
      <Link to="/" className="register__logo" />
      <div className="register__title">
        {path === "/login" ? "Рады видеть" : "Добро пожаловать!"}
      </div>
      {path === "/login" ? (
        <></>
      ) : (
        <>
          <div className="register__description">Имя</div>
          <input className="register__text-input" type="text"></input>
        </>
      )}
      <div className="register__description">E-mail</div>
      <input className="register__text-input" type="text"></input>
      <div className="register__description">Пароль</div>
      <input className="register__text-input" type="text"></input>
      {path === "/login" ? (
        <>
          <button className="register__button link">Войти</button>
          <div className="register__already-registred">
            Еще не зарегистрированы?
            <Link to="/sign-up" className="register__link link"> Регистрация</Link>
          </div>
        </>
      ) : (
        <>
          <button className="register__button link">Зарегестрироваться</button>
          <div className="register__already-registred">
            Уже зарегистрированы?
            <Link to="/login" className="register__link link link"> Войти</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Register;
