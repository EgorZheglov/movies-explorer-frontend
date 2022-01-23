import Searchbar from "../Searchbar/Searchbar";
import Card from "../Card/Card";
import "../Movies/Movies.css"
import { Link } from "react-router-dom";

function SavedMovies() {
  return (
    <div className="movies">
      <div className="movies__content">
        <div className="movies__header">
          <div className="movies__logo" />
          <div className="movies__buttons">
            <Link to="/movies" className="movies__nav-button link">
              Фильмы
            </Link>
            <button className="movies__nav-button movies__nav-button_is-active link">Сохранённые фильмы</button>
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
        <button className="movies__pag-button link">Ещё</button>
      </div>
    </div>
  );
}

export default SavedMovies;