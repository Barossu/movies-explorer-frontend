import React from "react";
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm.js'
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoreMovies from "../MoreMovies/MoreMovies.js";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import NoMovies from "../NoMovies/NoMovies.js";

function Movies({ movies, loggedIn }) {
  const supermovies = true

  return (
    <div className="saved-movies">
      <Header loggedIn={loggedIn} />
      <main className="saved-movies__main">
        <SearchForm />
        {
          supermovies ? 
            <>
              <MoviesCardList movies={ movies } />
              <MoreMovies />
            </>
          :
            <NoMovies />
        }
      </main>
      <Footer />
    </div>
  )
};

export default Movies;