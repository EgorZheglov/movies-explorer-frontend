import "./Register.css";
import { useLocation, useHistory } from "react-router";
import { Link } from "react-router-dom";
import React from "react";

function Register(props) {
  const [isActive, setIsActive] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailValidity, setEmailValidity] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [passwordValidity, setPasswordValidity] = React.useState(true);
  const [name, setName] = React.useState("");
  const [nameValidity, setNameValidity] = React.useState(true);
  const [renderButton, setRenderButton] = React.useState(false);

  const location = useLocation();
  const path = location.pathname;
  const history = useHistory();

  if (props.loggedIn) {
    history.push("/");
  }

  const checkButton = () => {
    if (path === "/login") {
      if (password !== "" && email !== "") {
        setRenderButton(true);
      }
    } else {
      if (password !== "" && email !== "" && name !== "") {
        setRenderButton(true);
      }
    }
  };

  function handleChangePassword(e) {
    checkButton();
    setPassword(e.target.value);
    if (e.target.value.length > 3 && e.target.value.length < 20) {
      setPasswordValidity(true);
    } else {
      setPasswordValidity(false);
    }
  }

  function handleChangeName(e) {
    checkButton();
    setName(e.target.value);
    if (e.target.value.length > 3 && e.target.value.length < 20) {
      setNameValidity(true);
    } else {
      setNameValidity(false);
    }
  }

  function handleChangeEmail(e) {
    checkButton();
    setEmail(e.target.value);
    if (
      e.target.value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailValidity(true);
    } else {
      setEmailValidity(false);
    }
  }

  React.useState(() => {
    if (path === "/login") {
      if (!emailValidity || !passwordValidity) {
        setIsActive(false);
      } else if (emailValidity && passwordValidity) {
        setIsActive(true);
      }
    } else {
      if (emailValidity && passwordValidity && nameValidity) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [nameValidity, emailValidity, passwordValidity, isActive]);

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
          <input
            className={`register__text-input ${
              nameValidity ? "" : "register__text-input_disabled"
            }`}
            value={name}
            onChange={handleChangeName}
            type="text"
          ></input>
          <div
            className={`register__span ${
              nameValidity ? "register__span_disabled" : ""
            }`}
          >
            Длинна имени от 2-ух до 30-ти символов
          </div>
        </>
      )}
      <div className="register__description">E-mail</div>
      <input
        className={`register__text-input ${
          emailValidity ? "" : "register__text-input_disabled"
        }`}
        value={email}
        onChange={handleChangeEmail}
        type="text"
      ></input>
      <div
        className={`register__span ${
          emailValidity ? "register__span_disabled" : ""
        }`}
      >
        Введите корректный email
      </div>
      <div className="register__description">Пароль</div>
      <input
        className={`register__text-input ${
          passwordValidity ? "" : "register__text-input_disabled"
        }`}
        value={password}
        onChange={handleChangePassword}
        type="password"
      ></input>
      <div
        className={`register__span ${
          passwordValidity ? "register__span_disabled" : ""
        }`}
      >
        Длинна пароля от 3-ех до 30-ти символов
      </div>

      {path === "/login" ? (
        <>
          {!emailValidity || !passwordValidity || !renderButton ? (
            <button className="register__button register__button_disabled">
              Войти
            </button>
          ) : (
            <button
              onClick={() => props.handleSignIn(email, password)}
              className="register__button link"
            >
              Войти
            </button>
          )}
          <div className="register__already-registred">
            Еще не зарегистрированы?
            <Link to="/sign-up" className="register__link link">
              {" "}
              Регистрация
            </Link>
          </div>
        </>
      ) : (
        <>
          {!emailValidity ||
          !passwordValidity ||
          !nameValidity ||
          !renderButton ? (
            <button className="register__button register__button_disabled">
              Зарегестрироваться
            </button>
          ) : (
            <button
              onClick={() => props.handleSignUp(name, email, password)}
              className="register__button link"
            >
              Зарегестрироваться
            </button>
          )}
          <div className="register__already-registred">
            Уже зарегистрированы?
            <Link to="/login" className="register__link link link">
              {" "}
              Войти
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Register;
