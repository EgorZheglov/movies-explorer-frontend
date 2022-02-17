import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./Searchbar.css";

function Searchbar(props) {
  const [isCheckboxChecked, setCheckbox] = React.useState(false);
  const [value, setValue] = React.useState("");
  const location = useLocation();

  const toggleCheckbox = (e) => {
    setCheckbox(!isCheckboxChecked);
    props.shorts(isCheckboxChecked, value);
  };

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      const checkbox = sessionStorage.getItem("checkbox");
      if (checkbox) {
        if (checkbox === "true") {
          setCheckbox(true);
        } else {
          setCheckbox(false);
        }
      }
      const value = sessionStorage.getItem("value");
      if (value) {
        setValue(value);
      }
    }
  }, []);

  const handleSort = () => {
    props.sort(value);
    props.shorts(isCheckboxChecked);
  };

  const handleTextInput = (e) => {
    sessionStorage.setItem("value", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="searchbar">
      <div className="searchbar__input">
        <input
          className="searchbar__text-input"
          type="text"
          value={value}
          onChange={(e) => handleTextInput(e)}
          placeholder="Фильм"
        ></input>
        <button
          onClick={(e) => handleSort()}
          className="searchbar__search-button link"
        >
          Найти
        </button>
      </div>
      <div className="searchbar__line"></div>
      <div className="searchbar__item">
        <input
          className="searchbar__checkbox"
          value={1}
          checked={isCheckboxChecked}
          type="checkbox"
          id="shorts"
          onChange={toggleCheckbox}
        />
        <label
          className={`searchbar__label ${
            isCheckboxChecked ? "searchbar__label_checked" : ""
          }`}
          htmlFor="shorts"
        ></label>
        Короткометражки
      </div>
    </div>
  );
}

export default Searchbar;
