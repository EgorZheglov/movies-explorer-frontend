import Searchbar from "../Searchbar/Searchbar";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import "./Movies.css";
import React from "react";
import useWindowDimensions from "../../utils/WindowDimenshions";

function Movies(props) {
  const movies = props.movies;
  const [resultsArray, setResults] = React.useState([]);
  const [allowShorts, setShorts] = React.useState(true);
  const [counter, setCounter] = React.useState(12);
  const [pagValue, setPagValue] = React.useState(3);
  const { height, width } = useWindowDimensions();

  React.useState(() => {
    if(width < 768) {
      setCounter(8);
      setPagValue(2);
    }else {
      if(width < 480) {
        setCounter(5);
      }
    }
  }, [])

  const moviesSort = (value) =>
    setResults(
      movies.filter(
        (movie) =>
          (movie.nameRU.toLowerCase().includes(value) ||
            (movie.nameEN
              ? movie.nameEN.toLowerCase().includes(value)
              : false)) &&
          (allowShorts ? true : movie.duration > 40)
      )
    );

  const changeShorts = (shorts, value) => {
    setShorts(shorts);
    if (value) moviesSort(value);
  };

  return (
    <div className="movies">
      <div className="movies__content">
        <div className="movies__header">
          <Link to="/" className="movies__logo" />
          <div className="movies__buttons">
            <button className="movies__nav-button movies__nav-button_is-active link">
              Фильмы
            </button>
            <Link to="/saved-movies" className="movies__nav-button link">
              Сохранённые фильмы
            </Link>
            <Link
              to="/profile"
              className="movies__nav-button movies__nav-button_profile link"
            >
              Аккаунт
              <div className="movies__acc-icon"></div>
            </Link>
            <Link to="/menu" className="movies__menu-button link" />
          </div>
        </div>
        <Searchbar shorts={changeShorts} sort={moviesSort} />
        <div className="movies__grid">
          {resultsArray.slice(0, counter).map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
        </div>
        {counter > resultsArray.length ? (
          ""
        ) : (
          <button
            onClick={(e) => setCounter(counter + pagValue)}
            className="movies__pag-button link"
          >
            Ещё
          </button>
        )}
      </div>
    </div>
  );
}

export default Movies;
