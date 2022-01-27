import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <div className="notfound__description">Страница не найдена</div>
      <button className="notfound__button link">Назад</button>
    </div>
  );
}

export default NotFound;
