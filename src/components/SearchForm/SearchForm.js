import React from "react";
import './SearchForm.css'

function SearchForm({ checked, handleCheck, findMovie, handleMovieName, handleMovieSearch }) {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input onChange={handleMovieName} value={findMovie} className="search-form__input" type='text' name='movie' placeholder="Фильм" />
        <button onClick={handleMovieSearch} className="search-form__button" type="submit">Поиск</button>
      </form>
      <label className="search-form__checkbox-container">
        <input onChange={handleCheck} className="search-form__checkbox" type="checkbox" checked={checked} value='' />
        <span className="search-form__visible-checkbox"></span>
        <span className="search-form__text">Короткометражки</span>
      </label>
    </section>
  ) 
};

export default SearchForm;