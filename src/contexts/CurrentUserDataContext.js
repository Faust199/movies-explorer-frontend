import React from "react";

export const CurrentUserDataContext = React.createContext();

export const defaultUserData = {
    user: {},
    films: [],
    userFilms: [],
    searchString: '',
    filter: false,
    staticMovies: [],
    filterMovies: [],
    moreButtonVisible: false
};