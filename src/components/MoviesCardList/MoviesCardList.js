import React from "react";
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList({ handleDeleteMovie, myMovies, movies, handleAddMovie }) {
  return (
    <section className='movies-card-list'>
      {movies.map((movieInfo) => (
        <article className="movies-card-list__movie" key={movieInfo.movieId}>
          <MoviesCard handleDeleteMovie={handleDeleteMovie} myMovies={myMovies} handleAddMovie={handleAddMovie} movieInfo={movieInfo} />
        </article> 
      ))}
    </section>
  )
};

export default MoviesCardList;