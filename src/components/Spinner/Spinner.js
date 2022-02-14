import spinner from "../../images/spinner2.png"
import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner">
        <img
          className="spinner__img rotation"
          src={spinner}
          alt="Загрузка"
        />
        <h3 className="spinner-title">Загрузка</h3>
    </div>
  );
}

export default Spinner;
