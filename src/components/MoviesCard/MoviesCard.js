import React from "react";
import './MoviesCard.css'
import { useLocation } from 'react-router-dom'

function MoviesCard({ handleDeleteMovie, myMovies, movieInfo, handleAddMovie }) {
  const location = useLocation();
  let isSaved = false

  function handleSave() {
    handleAddMovie({
      ...movieInfo,
      image: `https://api.nomoreparties.co/${movieInfo.image.url}`,
      thumbnail: `https://api.nomoreparties.co/${movieInfo.image.formats.thumbnail.url}`,
    });
  };

  function handleDelete() { 
    if (location.pathname === '/movies') {
      const deletedMovie = myMovies.filter((movie) => {
        return movie.movieId === movieInfo.movieId
      })[0]
      handleDeleteMovie(deletedMovie)
    } else {
      handleDeleteMovie(movieInfo)
    }
  }


  if (location.pathname === '/movies') {
    isSaved = myMovies.some((item) => item.movieId === movieInfo.movieId);
  } else {
    isSaved = false;
  }
  
  return (
    <div className="movies-card"> 
      <div className="movies-card__info">
        <p className="movies-card__name">{movieInfo.nameRU}</p> 
        <p className="movies-card__duration">{`${Math.floor(movieInfo.duration / 60)}ч ${movieInfo.duration % 60}м`}</p>
      </div>
      <a className="movies-card__trailer-link" target="blank" href={movieInfo.trailerLink} >
        <img className="movies-card__image" alt="Постер фильма" src={(location.pathname === '/movies') ? `https://api.nomoreparties.co/${movieInfo.image.url}` : movieInfo.image} />
      </a>
      {
        (location.pathname === '/movies') ? 
          <button type="button" onClick={!isSaved ? handleSave : handleDelete} className={`movies-card__button ${isSaved ? 'movies-card__button_active' : ''}`}>{!isSaved ? 'Сохранить' : ''}</button>
          :
          <button onClick={handleDelete} type="button" className='movies-card__button movies-card__button_delete'></button>
      }
    </div>
  )
};

export default MoviesCard;
