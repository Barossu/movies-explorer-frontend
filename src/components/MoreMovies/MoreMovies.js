import React from "react";
import './MoreMovies.css'

function MoreMovies({ handleMoreMovies }) {
  return (
    <div className="more-movies">
      <button onClick={handleMoreMovies} type="button" className="more-movies__button">Ещё</button>
    </div> 
  ) 
};

export default MoreMovies; 