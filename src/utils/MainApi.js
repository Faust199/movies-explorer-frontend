import {
    baseMainUrl
} from "./constants.js";

class MainApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    _parseResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    signUp(password, email, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                email: email,
                name: name
            })
        }).then(this._parseResponse);
    }

    signIn(password, email) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                email: email
            })
        }).then(this._parseResponse);
    }

    getUser(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${token}`
            }
        }).then(this._parseResponse);
    }

    updateUser(token, name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${token}`
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        }).then(this._parseResponse);
    }

    getMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${token}`
            }
        }).then(this._parseResponse);
    }

    saveMovie(token, country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${token}`
            },
            body: JSON.stringify({
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: image,
                trailerLink: trailerLink,
                thumbnail: thumbnail,
                movieId: movieId,
                nameRU: nameRU,
                nameEN: nameEN
            })
        }).then(this._parseResponse);
    }

    removeMovie(token, movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${token}`
            }
        }).then(this._parseResponse);
    }
}

export const mainApi = new MainApi(baseMainUrl);