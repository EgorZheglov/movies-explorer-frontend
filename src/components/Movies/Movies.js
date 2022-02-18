import Searchbar from "../Searchbar/Searchbar";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import "./Movies.css";
import React from "react";
import useWindowDimensions from "../../utils/WindowDimenshions";
import MainApi from "../../utils/MainApi";
import spinner from "../../images/spinner2.png";
import SavedMovies from "../SavedMovies/SavedMovies";

function Movies(props) {
  const movies = props.movies;
  const [resultsArray, setResults] = React.useState([]);
  const [allowShorts, setShorts] = React.useState(true);
  const [counter, setCounter] = React.useState(12);
  const [pagValue, setPagValue] = React.useState(3);
  const [notFound, setNotFound] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const { height, width } = useWindowDimensions();

  const moviesSort = (value) => {
    setIsLoading(true);
    localStorage.setItem("checkbox", allowShorts.toString());
    setResults(
      movies.filter(
        (movie) =>
          (movie.nameRU.toLowerCase().includes(value) ||
            (movie.nameEN
              ? movie.nameEN.toLowerCase().includes(value)
              : false)) &&
          (!allowShorts ? true : movie.duration < 50)
      )
    );
    setTouched(true);
  };

  React.useState(() => {
    setIsLoading(true);
    if (localStorage.getItem("movies")) {
      setResults(JSON.parse(localStorage.getItem("movies")));
    }

    if (localStorage.getItem("checkbox")) {
      const checkbox = localStorage.getItem("checkbox");
      if (checkbox) {
        if (checkbox === "true") {
          setShorts(true);
        } else {
          setShorts(false);
        }
      }
    }

    MainApi.getMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .then(() => setIsLoading(false));

    if (width < 768) {
      setCounter(8);
      setPagValue(2);
    } else {
      if (width < 480) {
        setCounter(5);
      }
    }
  }, []);

  React.useEffect(() => {
    if (resultsArray.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    localStorage.setItem("movies", JSON.stringify(resultsArray));
    setIsLoading(false);
  }, [resultsArray]);

  React.useEffect(() => {
    if (value !== "" && value !== undefined) moviesSort(value);
  }, [allowShorts, value]);

  const changeShorts = (shorts, value) => {
    setShorts(!shorts);
    setValue(value);
  };

  const toggleCardLike = (movie) => {
    if (savedMovies.some((el) => el.nameRU === movie.nameRU)) {
      setSavedMovies(savedMovies.filter((el) => el.nameRU !== movie.nameRU));
    } else {
      setSavedMovies([...savedMovies, movie]);
    }
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
        {!isLoading ? (
          <div className="movies__grid">
            {resultsArray.slice(0, counter).map((movie, i) => (
              <Card
                toggleCardLike={toggleCardLike}
                key={i}
                movies={savedMovies}
                movie={movie}
              />
            ))}
          </div>
        ) : (
          <div className="spinner__movies">
            <img
              className="spinner__img rotation"
              src={spinner}
              alt="Загрузка"
            />
            <h3 className="spinner-title">Загрузка</h3>
          </div>
        )}
        {notFound && touched ? (
          <div className="movies__notfound">Ничего не найдено</div>
        ) : (
          ""
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

export default Movies;
