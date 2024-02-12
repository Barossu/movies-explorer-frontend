import React from "react";
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList({ movies }) {
  return (
    <section className='movies-card-list'>
      {movies.map((movieInfo, i) => (
        <article className="movies-card-list__movie" key={i}>
          <MoviesCard movieInfo={movieInfo} />
        </article> 
      ))}
    </section>
  )
};

export default MoviesCardList;