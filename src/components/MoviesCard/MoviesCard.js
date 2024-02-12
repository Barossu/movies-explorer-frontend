import React from "react";
import './MoviesCard.css'
import { useLocation } from 'react-router-dom'

function MoviesCard({ movieInfo }) {
  // Для тестов
  const location = useLocation();
  const [ isSaved, setIsSaved ] = React.useState(false);
  function handleClick() {
    if (isSaved) {
      setIsSaved(false)
    } else {
      setIsSaved(true)
    };
  };
  
  
  return (
    <div className="movies-card"> 
      <div className="movies-card__info">
        <p className="movies-card__name">{movieInfo.name}</p> 
        <p className="movies-card__duration">{movieInfo.duration}</p>
      </div>
      <img className="movies-card__image" alt="Постер фильма" src={movieInfo.image} />
      {
        (location.pathname === '/movies') ? 
          <button type="button" onClick={handleClick} className={`movies-card__button ${isSaved ? 'movies-card__button_active' : ''}`}>{!isSaved ? 'Сохранить' : ''}</button>
          :
          <button type="button" className='movies-card__button movies-card__button_delete'></button>
      }
    </div>
  )
};

export default MoviesCard;