import "./NavMenu.css"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function NavMenu() {
  const hist = useHistory()
  return (
    <div className="navmenu">
      <div className="navmenu__content">
        <button onClick={(e) => hist.goBack()} className="navmenu__button"/>
        <Link className="navmenu__link" to="/">Главная</Link>
        <Link className="navmenu__link" to="/movies">Фильмы</Link>
        <Link className="navmenu__link" to="/saved-movies">Сохранённые фильмы</Link>
        <Link className="navmenu__link" to="/profile">Аккаунт<div className="navmenu__acc-icon"></div></Link>
      </div>
    </div>
  );
}

export default NavMenu;
