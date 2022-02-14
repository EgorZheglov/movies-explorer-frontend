import React from "react";
import "./Searchbar.css";

function Searchbar() {
  const [isCheckboxChecked, setCheckbox] = React.useState(false);

  const toggleCheckbox = (e) => setCheckbox(!isCheckboxChecked);

  return (
    <div className="searchbar">
      <div className="searchbar__input">
        <input
          className="searchbar__text-input"
          type="text"
          placeholder="Фильм"
        ></input>
        <button className="searchbar__search-button link">Найти</button>
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
