import React from "react";
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm.js'
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoreMovies from "../MoreMovies/MoreMovies.js";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import NoMovies from "../NoMovies/NoMovies.js";

function Movies({
  handleDeleteMovie,
  movies,
  loggedIn,
  setNumberOfMovies,
  numberOfMovies,
  numberMoreMovies
})
  {
  const [resultMovies, setResultMovies] = React.useState([]); 

  const handleMoreMovies = () => {
    setNumberOfMovies(numberOfMovies + numberMoreMovies)
  };

  React.useEffect(() => {
    setResultMovies(movies.slice(0, numberOfMovies));
    console.log(numberOfMovies)
  }, [numberOfMovies, movies]);

  return (
    <div className="saved-movies">
      <Header loggedIn={loggedIn} />
      <main className="saved-movies__main">
        <SearchForm />
        {
          movies.length !== 0 ? 
            <>
              <MoviesCardList handleDeleteMovie={handleDeleteMovie} movies={resultMovies} />
              { movies.length > numberOfMovies && <MoreMovies handleMoreMovies={handleMoreMovies} /> }
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