import Searchbar from "../Searchbar/Searchbar";
import Card from "../Card/Card";
import "../Movies/Movies.css";
import mainApi from "../../utils/MainApi";
import { Link } from "react-router-dom";
import React from "react";
import useWindowDimensions from "../../utils/WindowDimenshions";

function SavedMovies() {
  const [resultsArray, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [allowShorts, setShorts] = React.useState(true);
  const [counter, setCounter] = React.useState(12);
  const [pagValue, setPagValue] = React.useState(3);
  const { height, width } = useWindowDimensions();

  React.useState(() => {
    if (width < 768) {
      setCounter(8);
      setPagValue(2);
    } else {
      if (width < 480) {
        setCounter(5);
      }
    }
  }, []);

  const changeShorts = (shorts, value) => {
    setShorts(shorts);
    if (!allowShorts) {
      moviesSort(value);
    } else {
      mainApi
        .getMovies()
        .then((res) => {
          setResults(res);
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    }
  };

  const moviesSort = (value) =>
    setResults(
      resultsArray.filter(
        (movie) =>
          (movie.nameRU.toLowerCase().includes(value) ||
            (movie.nameEN
              ? movie.nameEN.toLowerCase().includes(value)
              : false)) &&
          (allowShorts ? true : movie.duration > 40)
      )
    );

  React.useEffect(() => {
    mainApi
      .getMovies()
      .then((res) => {
        setResults(res);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const deleteMovie = (id) => {
    mainApi
      .deleteMovie(id)
      .then((res) =>
        setResults(resultsArray.filter((movie) => movie._id !== id))
      )
      .catch((e) => console.log(`Не удалось удалить фильм ${e}`));
  };

  return (
    <div className="movies">
      <div className="movies__content">
        <div className="movies__header">
          <Link to="/" className="movies__logo" />
          <div className="movies__buttons">
            <Link to="/movies" className="movies__nav-button link">
              Фильмы
            </Link>
            <button className="movies__nav-button movies__nav-button_is-active link">
              Сохранённые фильмы
            </button>
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
        {!isLoading ? (
          <div className="movies__grid">
            {resultsArray.slice(0, counter).map((movie, i) => (
              <Card handleDelete={deleteMovie} key={i} movie={movie} />
            ))}
          </div>
        ) : (
          <h1 className="movies__loading">Загрузка Фильмов...</h1>
        )}

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

export default SavedMovies;
