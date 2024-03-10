export const BASE_URL = 'https://api.movie.kalashnikov.nomoredomainswork.ru';
// export const BASE_URL = 'http://localhost:3000';

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const register = (email, name, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, name, password })
  })
    .then((res) => getResponse(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    credentials: "include",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }) 
  })
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    credentials: "include",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
};

export const loggedInCheck = () => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: "include",
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then((res) => getResponse(res))
};