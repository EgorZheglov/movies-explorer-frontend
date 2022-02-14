class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    //проверка ответа на запрос
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getMovies() {
    //получаем карточки, загруженные на сервер
    return fetch(this._url).then(this._checkResponse);
  }
}

export default new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});
