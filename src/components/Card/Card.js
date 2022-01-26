import React from "react";
import { useLocation } from "react-router";
import "./Card.css";

function Card() {
  const location = useLocation();
  let buttonClassName;

  if (location.pathname === "/saved-movies") {
    buttonClassName = "card__button_delete";
  } else {
    //TODO: add tern operator
    buttonClassName = "card__button_is-active";
  }

  return (
    <div className="card">
      <div className="card__info">
        <h1 className="card__title">33 слова о дизайне</h1>
        <div className="card__duration">47 минут</div>
      </div>
      <img className="card__image" src={require("../../images/pic.png")} />
      <button className={"card__button link " + buttonClassName} />
    </div>
  );
}

export default Card;

