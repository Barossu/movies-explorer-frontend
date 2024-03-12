class MoviesApi {
  constructor(options) {
    this._baseURL = options.baseURL;
    this._headers = options.headers;
  };

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  };

  _request(url, option) {
    return fetch(url, option).then(this._getResponseData)
  };

  getMovies() {
    return this._request(this._baseURL, { method: 'GET', headers: this._headers });
  }
}

const moviesApi = new MoviesApi({
  baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default moviesApi;