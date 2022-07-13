import {
    baseMovieUrl
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

    getMovies(token) {
        return fetch(`${this._baseUrl}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        }).then(this._parseResponse);
    }
}

export const mainApi = new MainApi(baseMovieUrl);