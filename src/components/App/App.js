import React from "react";
import './App.css'
import Main from "../Main/Main"; 
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Profile from "../Profile/Profile.js";
import NotFound from "../NotFound/NotFound.js"
import { useLocation, useNavigate, Route, Routes } from 'react-router-dom'
import moviesApi from "../../utils/MoviesApi.js";
import { Context } from "../../contexts/Context.js";
import ProtectedRouteElement from '../../utils/ProtectedRoute.js';
import ProtectedRouteAuth from "../../utils/ProtectedRouteAuth.js";
import * as auth from '../../utils/auth.js'
import * as mainApi from "../../utils/MainApi.js" 
let allMovies = [];
let allMyMovies = [];

function App() { 
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filteredMyMovies, setFilteredMyMovies] = React.useState([]);
  const [findMovie, setFindMovie] = React.useState('');
  const [findSavedMovie, setFindSavedMovie] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [checkedSavedMovie, setCheckedSavedMovie] = React.useState(false)
  const [isLoad, setIsLoad] = React.useState(false);
  const [numberOfMovies, setNumberOfMovies] = React.useState('');
  const [numberMoreMovies, setNumberMoreMovies] = React.useState('');
  const [width, setWidth] = React.useState(window.innerWidth);
  const [myMovies, setMyMovies] = React.useState([]);
  const [mainMovies, setMainMovies] = React.useState([]);
  const [userData, setUserData] = React.useState({name: '', email: '', id: ''});
  const navigate = useNavigate();
  const location = useLocation()

  React.useEffect(() => {
    handleLoggedinCheck()
  }, [loggedIn])

  // React.useEffect(() => {
  //   mainApi.getMovies()
  //     .then((res) => {
  //       setMyMovies(res);
  //       setMainMovies(res);
  //     })
  //     .catch(console.error)
  // }, [loggedIn])

  
  React.useEffect(() => {
    function changeWidthWithTimeout() {
      let previosCall = this.lastCall
      this.lastCall = Date.now()
      if (previosCall && this.lastCall - previosCall <= 1000) {
        clearTimeout(this.lastCallTimer)
      }
      this.lastCallTimer = setTimeout(() => setWidth(window.innerWidth), 500)
    }

    window.addEventListener('resize', changeWidthWithTimeout);
    return () => {
      window.removeEventListener('resize', changeWidthWithTimeout);
    }
  }, [])

  React.useEffect(() => {
    changeNumberOfMovies()
  }, [width, movies])

  React.useEffect(() => {
    isShortMovies();
  }, [checked, movies])

  React.useEffect(() => {
    isShortMyMovies();
  }, [checkedSavedMovie, myMovies])



  React.useEffect(() => {
    const localMovies = JSON.parse(window.localStorage.getItem('movies'));
    const localInputValue = window.localStorage.getItem('input');
    if (!localMovies) {
      setMovies([]);
    } else {
      setMovies(localMovies);
    }
    if (localInputValue === null) {
      setFindMovie('');
    } else {
      setFindMovie(localInputValue);
    }
    setChecked(JSON.parse(window.localStorage.getItem('checked')));
  }, [])

  React.useEffect(() => {
    clearSearchInputs()
  }, [location.pathname])

  const clearSearchInputs = () => {
    setCheckedSavedMovie(false);
    setFindSavedMovie('');
    setMyMovies(mainMovies)
  }

  const handleAddMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then((mov) => {
        setMyMovies([mov, ...myMovies]);
        setMainMovies([mov, ...mainMovies]);
      })
      .catch(console.error)
  };

  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(movie)
      .then(() => {
        setMyMovies((state) => state.filter((m) => m !== movie))
        setMainMovies((state) => state.filter((m) => m !== movie))
      })
      .catch(console.error)
  }

  const handleUpdateUser = (user) => {
     return mainApi.changeUserData(user)
      .then((res) => setUserData(res))
  }

  const handleLoggedinCheck = () => {
    auth.loggedInCheck()
    .then((res) => {
      if (res) {
        setLoggedIn(true);
        setUserData({ name: res.name, email: res.email });
        navigate(location.pathname, {replace: true});
        mainApi.getMovies()
          .then((res) => {
            setMyMovies(res);
            setMainMovies(res);
          })
          .catch(console.error)
      } 
    })
    .catch(console.error)
  }

  const handleMovieName = (e) => {
    setFindMovie(e.target.value)
  };

  const handleSavedMovieName = (e) => {
    setFindSavedMovie(e.target.value)
  };

  const changeNumberOfMovies = () => {
    if (width >= 1280) {
      setNumberOfMovies(12)
      setNumberMoreMovies(3)
    }
    if (width < 1280) {
      setNumberOfMovies(8)
      setNumberMoreMovies(2)
    }
    if (width < 768) {
      setNumberOfMovies(5)
      setNumberMoreMovies(1)
    }
  }

  const handleMovieSearch = (e) => {
    e.preventDefault();
    window.localStorage.setItem('input', findMovie);
    changeNumberOfMovies()
    setIsLoad(true);
    if (loggedIn) {
      moviesApi.getMovies()
        .then((res) => {
          const foundMovies = res.filter((movie) => {
            return (movie.nameRU.toLowerCase().includes(findMovie.toLowerCase()) || movie.nameEN.toLowerCase().includes(findMovie.toLowerCase()))
          });
          foundMovies.map((movie) => {
            movie.movieId = movie.id;
            delete movie.id;
            delete movie.created_at;
            delete movie.updated_at;
            return movie;
          });
          setMovies(foundMovies);
          window.localStorage.setItem('movies', JSON.stringify(foundMovies));
        })
        .catch(console.error);
    };
  };

  const handleMyMovieSearch = (e) => {
    e.preventDefault();
    changeNumberOfMovies()
    setIsLoad(true);
    if (loggedIn) {
      const foundMovies = mainMovies.filter((movie) => {
        return (movie.nameRU.toLowerCase().includes(findSavedMovie.toLowerCase()) || movie.nameEN.toLowerCase().includes(findSavedMovie.toLowerCase()))
      });
      setMyMovies(foundMovies);
    };
  };

  const isShortMovies = () => {
    setIsLoad(true)
    allMovies = movies;
    if (checked) {
      const shortMovies = movies.filter((movie) => {
        return (movie.duration <= 40)
      });
      setFilteredMovies(shortMovies);
    } else {
      setFilteredMovies(allMovies);
    }
    setIsLoad(false);
  }

  const handleCheck = () => {
    if (checked) {
      setChecked(false)
      window.localStorage.setItem('checked', JSON.stringify(false));
    } else {
      setChecked(true)
      window.localStorage.setItem('checked', JSON.stringify(true));
    } 
  }

  const handleCheckSaved = () => {
    if (checkedSavedMovie) {
      setCheckedSavedMovie(false);
    } else {
      setCheckedSavedMovie(true);
    };
  }

  const isShortMyMovies = () => {
    setIsLoad(true)
    allMyMovies = myMovies;
    if (checkedSavedMovie) {
      const shortMyMovies = myMovies.filter((movie) => {
        return (movie.duration <= 40)
      });
      setFilteredMyMovies(shortMyMovies);
    } else {
      setFilteredMyMovies(allMyMovies);
    }
    setIsLoad(false);
  }

  const handleRegister = (email, name, password) => {
    return auth.register(email, name, password)
  };
  
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    auth.logout()
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
      })
  };

  return (
    <div className="page">
      <Context.Provider value={{width: width, userData: userData}}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/movies" element={<ProtectedRouteElement
            element={Movies}
            numberMoreMovies={numberMoreMovies}
            numberOfMovies={numberOfMovies}
            setNumberOfMovies={setNumberOfMovies}
            isLoad={isLoad}
            checked={checked}
            handleCheck={handleCheck}
            loggedIn={loggedIn}
            movies={filteredMovies}
            findMovie={findMovie}
            handleMovieName={handleMovieName}
            handleMovieSearch={handleMovieSearch}
            handleAddMovie={handleAddMovie}
            myMovies={myMovies}
            handleDeleteMovie={handleDeleteMovie}
          />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement
            element={SavedMovies}
            movies={filteredMyMovies}
            loggedIn={loggedIn}
            handleDeleteMovie={handleDeleteMovie}
            setNumberOfMovies={setNumberOfMovies}
            numberOfMovies={numberOfMovies}
            numberMoreMovies={numberMoreMovies}
            handleMyMovieSearch={handleMyMovieSearch}
            handleCheck={handleCheckSaved}
            checked={checkedSavedMovie}
            findMovie={findSavedMovie}
            handleMovieName={handleSavedMovieName}
          />} />
          <Route path="/profile" element={<ProtectedRouteElement
            element={Profile}
            loggedIn={loggedIn}
            handleLogout={handleLogout}
            handleUpdateUser={handleUpdateUser}
          />} />
          <Route path='/signin' element={<ProtectedRouteAuth
            element={Login}
            handleLogin={handleLogin}
            loggedIn={loggedIn}
          />} />
          <Route path='/signup' element={<ProtectedRouteAuth
            element={Register}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            loggedIn={loggedIn}
          />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
