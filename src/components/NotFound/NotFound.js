import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./NotFound.css";

function NotFound() {
  const hist = useHistory();
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <div className="notfound__description">Страница не найдена</div>
      <button className="notfound__button link" onClick={(e) => hist.goBack()}>Назад</button>
    </div>
  );
}

export default NotFound;
