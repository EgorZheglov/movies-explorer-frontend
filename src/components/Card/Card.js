import React from "react";
import { useLocation } from "react-router";
import "./Card.css";
import MainApi from "../../utils/MainApi";
import { UserContext } from "../contexts/UserContext";

function Card(props) {
  const movie = props.movie;
  const [id, setId] = React.useState("");
  const [like, setLike] = React.useState(false);
  const location = useLocation();
  let image;
  const cardLike = (movie) => {
    MainApi.saveMovie(movie)
      .then((res) => {
        setId(res._id);
        setLike(true);
      })
      .catch((e) => console.log(`Не удалось сохранить фильм ${e}`));
  };

  React.useEffect(() => {
    if (props.movies) {
      const el = props.movies.find(
        (el) =>
          el.nameRU === movie.nameRU &&
          el.nameEN === movie.nameEN &&
          el.duration === movie.duration &&
          el.trailer === movie.trailerLink
      );

      if (el) {
        setId(el._id);
        setLike(true);
      }
    }
  }, []);

  const cardDislike = () => {
    MainApi.deleteMovie(id)
      .then((res) => {
        setLike(false);
      })
      .catch((e) => console.log(`Не удалось удалить фильм ${e}`));
  };

  if (movie.image.url) {
    image = "https://api.nomoreparties.co/" + movie.image.url;
  } else {
    image = movie.image;
  }

  const toggleLikeButton = (movie) => {
    if (!like) {
      cardLike(movie);
    } else {
      cardDislike(id);
    }
  };
  let buttonClassName;

  if (location.pathname === "/saved-movies") {
    buttonClassName = "card__button_delete";
  } else {
    //TODO: add tern operator
    if (like) {
      buttonClassName = "card__button_is-active";
    } else {
      buttonClassName = "";
    }
  }

  const handleClick = () => {
    window.location.assign(movie.trailerLink);
  };

  return (
    <div className="card">
      <div className="card__info">
        <h1 className="card__title">{movie.nameRU}</h1>
        <div className="card__duration">{movie.duration} минут</div>
      </div>
      <img
        onClick={() => handleClick()}
        className="card__image link"
        src={image}
      />
      {location.pathname === "/movies" ? (
        <button
          onClick={(e) => toggleLikeButton(movie)}
          className={"card__button link " + buttonClassName}
        >
          {like ? "" : "Сохранить"}
        </button>
      ) : (
        <button
          onClick={(e) => props.handleDelete(movie._id)}
          className={"card__button card__button_delete link"}
        />
      )}
    </div>
  );
}

export default Card;
