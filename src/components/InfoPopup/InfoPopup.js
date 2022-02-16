import succes from "../../images/succes.svg";
import error from "../../images/error.svg";
import "./popup.css";
function InfoPopup(props) {
  return (
    <div
      className={`popup popup_type_photo ${
        props.isOpen ? "popup_is-opened" : " "
      }`}
      onClick={props.onClose}
    >
      <div className="popup__container">
        <img
          className="popup__registration-image"
          src={props.isSuccesed ? succes : error}
          alt={props.isSuccesed ? "Успешно!" : "Ошибка"}
        />
        <button
          className="popup__close"
          onClick={props.onClose}
          type="button"
        />
        <h3 className="popup__title popup__registration-title">
          {props.isSuccesed
            ? "Успешно!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h3>
        <button className="popup__continiue link" onClick={props.onClose} type="button">
          продолжить
        </button>
      </div>
    </div>
  );
}

export default InfoPopup;
