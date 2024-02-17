import React from "react";
import './SearchForm.css'

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input className="search-form__input" type='text' name='movie' placeholder="Фильм" />
        <button className="search-form__button" type="submit">Поиск</button>
      </form>
      <label className="search-form__checkbox-container">
        <input className="search-form__checkbox" type="checkbox" value='' />
        <span className="search-form__visible-checkbox"></span>
        <span className="search-form__text">Короткометражки</span>
      </label>
    </section>
  ) 
};

export default SearchForm;