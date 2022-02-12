class MainApi {
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

  setToken(token) {
    if (token) {
      this._headers.authorization = `Bearer ${token}`;
    } else {
      this._headers.authorization = null;
    }
  }

  getUserData() {
    //Получаем информацию пользователе с сервера.
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getMovies() {
    //получаем карточки, загруженные на сервер
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  saveMovie(data) {
    //Отправляем данные карточки
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        director: data.director,
        duration: data.duration,
        country: data.country ? data.country : "international",
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: data.thumbnail ? data.thumbnail : "none",
        movieId: data.id,
      }),
    }).then(this._checkResponse);
  }

  signUp(name, email, password) {
    //Регистрируем пользователя пользователя
    console.log(name, email, password);
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
      }),
    }).then(this._checkResponse);
  }

  signIn(email, password) {
    //Авторизируем пользователя
    console.log(email, password);
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  tokenCheck(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  deleteMovie(id) {
    //Сообщаем серверу, что лайк поставлен
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  sendUserData(name, email) {
    //Отправляем измененные данные на сервер.
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
      }),
    }).then(this._checkResponse);
  }
}

export default new MainApi({
  baseUrl: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});
