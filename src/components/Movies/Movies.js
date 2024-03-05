import React from "react";
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.js'
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoreMovies from "../MoreMovies/MoreMovies.js";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import NoMovies from "../NoMovies/NoMovies.js";
import Preloader from "../Preloader/Preloader.js"

function Movies({
  numberMoreMovies,
  numberOfMovies,
  setNumberOfMovies,
  isLoad,
  checked,
  handleCheck,
  movies,
  loggedIn,
  findMovie,
  handleMovieName,
  handleMovieSearch,
  handleAddMovie,
  myMovies,
  handleDeleteMovie
})
  {  
  const [resultMovies, setResultMovies] = React.useState([]);
  
  const handleMoreMovies = () => {
    setNumberOfMovies(numberOfMovies + numberMoreMovies)
  }

  React.useEffect(() => {
    setResultMovies(movies.slice(0, numberOfMovies));
  }, [numberOfMovies, movies])

  return (
    <div className="movies">
      <Header loggedIn={loggedIn} />
      <main className="movies__main">
        <SearchForm checked={checked} handleCheck={handleCheck} findMovie={findMovie} handleMovieName={handleMovieName} handleMovieSearch={handleMovieSearch} />
        { !isLoad ?
          (
            movies.length !== 0 ? 
              <>
                <MoviesCardList handleDeleteMovie={handleDeleteMovie} myMovies={myMovies} handleAddMovie={handleAddMovie} movies={resultMovies} />
                { movies.length > numberOfMovies && <MoreMovies handleMoreMovies={ handleMoreMovies } />}
              </>
            :
              <NoMovies />
          )
          :
          <Preloader />
        }
      </main>
      <Footer />
    </div>
  )
};

export default Movies;