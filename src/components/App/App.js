import React from "react";
import './App.css'
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Profile from "../Profile/Profile.js";
import NotFound from "../NotFound/NotFound.js"
import { Route, Routes } from 'react-router-dom'
// Временные фильмы
import { movies, savedMovies } from '../../utils/Constants.js'

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/movies" element={<Movies loggedIn={loggedIn} movies={movies} />} />
        <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} movies={savedMovies} />} />
        <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
