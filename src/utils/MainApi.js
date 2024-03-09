export const BASE_URL = 'https://api.movie.kalashnikov.nomoredomainswork.ru';
//export const BASE_URL = 'http://localhost:3000';

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    credentials: "include",
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then((res) => getResponse(res))
}

export const saveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    credentials: "include",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie)
  })
    .then((res) => getResponse(res))
}

export const deleteMovie = (movie) => {
  return fetch(`${BASE_URL}/movies/${movie._id}`, {
    credentials: "include",
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const changeUserData = (userData) => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: "include",
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  })
    .then((res) => getResponse(res))
}