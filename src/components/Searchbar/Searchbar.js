import React from "react";
import "./Searchbar.css";

function Searchbar(props) {
  const [isCheckboxChecked, setCheckbox] = React.useState(false);
  const [value, setValue] = React.useState("");
  const toggleCheckbox = (e) => {
    setCheckbox(!isCheckboxChecked);
    props.shorts(isCheckboxChecked, value);
  };

  return (
    <div className="searchbar">
      <div className="searchbar__input">
        <input
          className="searchbar__text-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Фильм"
        ></input>
        <button
          onClick={(e) => props.sort(value)}
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
