import Searchbar from "../Searchbar/Searchbar";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import "./Movies.css";
import React from "react";

function Movies() {

  return (
    <div className="movies">
      <div className="movies__content">
        <div className="movies__header">
          <div className="movies__logo" />
          <div className="movies__buttons">
            <button className="movies__nav-button movies__nav-button_is-active link">
              Фильмы
            </button>
            <Link to="/saved-movies" className="movies__nav-button link">Сохранённые фильмы</Link>
            <Link to="/profile" className="movies__nav-button movies__nav-button_profile link">
              Аккаунт
              <div className="movies__acc-icon"></div>
            </Link>
            <Link to="/menu" className="movies__menu-button link" />
          </div>
        </div>
        <Searchbar />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <button className="movies__pag-button link">Ещё</button>
      </div>
    </div>
  );
}

export default Movies;
