import React from "react";
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.js'
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoreMovies from "../MoreMovies/MoreMovies.js";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import NoMovies from "../NoMovies/NoMovies.js";

function Movies({ movies, loggedIn }) {
  const supermovies = true;

  return (
    <div className="movies">
      <Header loggedIn={loggedIn} />
      <main className="movies__main"> 
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