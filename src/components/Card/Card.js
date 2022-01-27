import React from "react";
import { useLocation } from "react-router";
import "./Card.css";

function Card() {
  const location = useLocation();
  let buttonClassName;
  //will depends on props change to true to see active state
  let cardLike = true;

  if (location.pathname === "/saved-movies") {
    buttonClassName = "card__button_delete";
  } else {
    //TODO: add tern operator
    cardLike ? buttonClassName = "card__button_is-active": buttonClassName = '';
  }

  return (
    <div className="card">
      <div className="card__info">
        <h1 className="card__title">В погоне за Бенкси</h1>
        <div className="card__duration">47 минут</div>
      </div>
      <img className="card__image" src={require("../../images/pic.png")} />
      <button className={"card__button link " + buttonClassName}>
        {buttonClassName === "card__button_is-active" ? "" : "Сохранить"}
      </button>
    </div>
  );
}

export default Card;
