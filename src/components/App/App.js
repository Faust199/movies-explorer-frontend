import './App.css';
import {Route, Switch, useHistory} from 'react-router-dom';
import React from "react";
import Main from "../Main/Main"
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import SuccessPopup from "../SuccessPopup/SuccessPopup"
import ProtectedRoute from "../Routes/ProtectedRoute";

import { CurrentUserDataContext } from "../../contexts/CurrentUserDataContext";
import { mainApi } from "../../utils/MainApi";

function App() {

    const history = useHistory();
    const [isErrorPopupOpen, setIsErrorPopupOpen] = React.useState(false);
    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);
    const [popupErrorMessage, setPopupErrorMessage] = React.useState('');
    const [popupSuccessMessage, setPopupSuccessMessage] = React.useState('');
    const [currentUserData, setCurrentUserData] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        if (localStorage.getItem("token")) {
            mainApi.getUser(localStorage.getItem("token"))
                .then(res => {
                    const user = res.user;
                    mainApi.getMovies(localStorage.getItem("token"))
                        .then(res => {
                            setCurrentUserData({
                                user: user,
                                films: [],
                                userFilms: res.movies,
                                searchString: '',
                                filter: false,
                                staticMovies: [],
                                filterMovies: [],
                                moreButtonVisible: false
                            });
                            setIsLoggedIn(true);
                            history.push("/movies");
                        })
                        .catch(err => {
                            localStorage.removeItem("token");
                            setIsLoggedIn(false);
                            history.push('/')
                        })
                })
                .catch(err => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                    history.push('/')
                })
        }
    }, []);

    function handleSignUpClick(password, email, firstName) {
        mainApi.signUp(password, email, firstName)
            .then((res) => {
                const user = res.user;
                mainApi.signIn(password, email)
                    .then(res => {
                        const token = res.token;
                        getSavedMovies(token, user);
                    })
                    .catch(err => {
                        setIsErrorPopupOpen(true);
                        setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
                    })
            }).catch(err => {
            setIsErrorPopupOpen(true);
            setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
        })
    }

    function handleSignInClick(password, email) {
        mainApi.signIn(password, email)
            .then((res) => {
                const token = res.token;
                mainApi.getUser(token)
                    .then(res => {
                        const user = res.user;
                        getSavedMovies(token, user);
                    })
                    .catch(err => {
                        setIsErrorPopupOpen(true);
                        setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
                    })
            }).catch(err => {
            setIsErrorPopupOpen(true);
            setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
        })
    }

    function getSavedMovies(token, user) {
        mainApi.getMovies(token)
            .then(res => {
                setCurrentUserData({
                    user: user,
                    films: [],
                    userFilms: res.movies,
                    searchString: '',
                    filter: false,
                    staticMovies: [],
                    filterMovies: [],
                    moreButtonVisible: false
                });
                localStorage.setItem("token", token);
                setIsLoggedIn(true);
                history.push("/movies");
            })
            .catch(err => {
                setIsErrorPopupOpen(true);
                setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
            })
    }

    function saveMovie(item, e) {
        mainApi.saveMovie(localStorage.getItem("token"), item.country, item.director, item.duration, item.year, item.description, `https://api.nomoreparties.co${item.image.url}`, item.trailerLink ? item.trailerLink : "https://item.trailerLink", `https://api.nomoreparties.co${item.image.url}`, item.id, item.nameRU, item.nameEN ? item.nameEN : "item.nameEN")
            .then(res => {
                e.target.innerText = "";
                e.target.classList.add('moviescard__button_selected');
                const tempArr = [...currentUserData.userFilms];
                tempArr.push(res.movie);
                const tempFilms = [];

                currentUserData.films.forEach(el => {
                    if (el.id === item.id) {
                        tempFilms.push(Object.assign({}, el, {
                            saved: true
                        }))
                    } else {
                        tempFilms.push(el)
                    }
                });
                const tempFilterMovies = [];
                currentUserData.filterMovies.forEach(el => {
                    if (el.id === item.id) {
                        tempFilterMovies.push(Object.assign({}, el, {
                            saved: true
                        }))
                    } else {
                        tempFilterMovies.push(el)
                    }
                });
                const tempStaticMovies = [];
                currentUserData.staticMovies.forEach(el => {
                    if (el.id === item.id) {
                        tempStaticMovies.push(Object.assign({}, el, {
                            saved: true
                        }))
                    } else {
                        tempStaticMovies.push(el)
                    }
                });

                setCurrentUserData(oldUserData => Object.assign({}, oldUserData, {
                    userFilms: tempArr,
                    films: tempFilms,
                    filterMovies: tempFilterMovies,
                    staticMovies: tempStaticMovies
                }));
            })
            .catch(err => {
                setIsErrorPopupOpen(true);
                setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
            })
    }

    function deleteMovieTemp(item, e) {
        const tempArrayId = currentUserData.userFilms.filter(el => {
            return el.movieId === item.id
        })
        mainApi.removeMovie(localStorage.getItem("token"),tempArrayId[0]._id)
            .then(res => {
                e.target.innerText = "Сохранить";
                e.target.classList.remove('moviescard__button_selected');
                const tempArr = [...currentUserData.userFilms].filter(el => {
                    return el._id !== tempArrayId[0]._id
                })

                const tempFilms = [];
                currentUserData.films.forEach(el => {
                    if (el.id === tempArrayId[0].movieId) {
                        tempFilms.push(Object.assign({}, el, {
                            saved: false
                        }))
                    } else {
                        tempFilms.push(el)
                    }
                });
                const tempFilterMovies = [];
                currentUserData.filterMovies.forEach(el => {
                    if (el.id === tempArrayId[0].movieId) {
                        tempFilterMovies.push(Object.assign({}, el, {
                            saved: false
                        }))
                    } else {
                        tempFilterMovies.push(el)
                    }
                });
                const tempStaticMovies = [];
                currentUserData.staticMovies.forEach(el => {
                    if (el.id === tempArrayId[0].movieId) {
                        tempStaticMovies.push(Object.assign({}, el, {
                            saved: false
                        }))
                    } else {
                        tempStaticMovies.push(el)
                    }
                });

                setCurrentUserData(oldUserData => Object.assign({}, oldUserData, {
                    userFilms: tempArr,
                    films: tempFilms,
                    filterMovies: tempFilterMovies,
                    staticMovies: tempStaticMovies
                }));

            })
            .catch(err => {
                setIsErrorPopupOpen(true);
                setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
            })
    }

    function deleteMovie(item) {
        mainApi.removeMovie(localStorage.getItem("token"),item._id)
            .then(res => {

                const tempArr = [...currentUserData.userFilms].filter(el => {
                    return el._id !== item._id
                })

                const tempFilms = [];
                currentUserData.films.forEach(el => {
                    if (el.id === item.movieId) {
                        tempFilms.push(Object.assign({}, el, {
                            saved: false
                        }))
                    } else {
                        tempFilms.push(el)
                    }
                });
                const tempFilterMovies = [];
                currentUserData.filterMovies.forEach(el => {
                    if (el.id === item.movieId) {
                        tempFilterMovies.push(Object.assign({}, el, {
                            saved: false
                        }))
                    } else {
                        tempFilterMovies.push(el)
                    }
                });
                const tempStaticMovies = [];
                currentUserData.staticMovies.forEach(el => {
                    if (el.id === item.movieId) {
                        tempStaticMovies.push(Object.assign({}, el, {
                            saved: false
                        }))
                    } else {
                        tempStaticMovies.push(el)
                    }
                });

                setCurrentUserData(oldUserData => Object.assign({}, oldUserData, {
                    userFilms: tempArr,
                    films: tempFilms,
                    filterMovies: tempFilterMovies,
                    staticMovies: tempStaticMovies
                }));

            })
            .catch(err => {
                setIsErrorPopupOpen(true);
                setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
            })
    }

    function handleLogOut() {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        history.push("/");
    }

    function handleUserUpdate(name, email) {
        if (currentUserData.user.name !== name || currentUserData.user.email !== email) {
            mainApi.updateUser(localStorage.getItem("token"), name, email)
                .then(res => {
                    setCurrentUserData(prevUserData => (
                        {
                            ...prevUserData,
                            user: res.user
                        }
                    ));
                    setIsSuccessPopupOpen(true);
                    setPopupSuccessMessage(`Вы успешно обновили информацию`);
                    history.push('/movies');
                })
                .catch(err => {
                    setIsErrorPopupOpen(true);
                    setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
                });
        } else {
            setIsErrorPopupOpen(true);
            setPopupErrorMessage(`Внесите данные для обновления`);
        }
    }

    function closeErrorPopup() {
        setIsErrorPopupOpen(false);
    }

    function closeSuccessPopup() {
        setIsSuccessPopupOpen(false);
    }

    return (
        <CurrentUserDataContext.Provider value={currentUserData}>
            <Switch>
                <Route path="/signup">
                    <Register onSignUpClick={handleSignUpClick}/>
                </Route>
                <Route path="/signin">
                    <Login onSignInClick={handleSignInClick}/>
                </Route>
                <ProtectedRoute path="/movies"
                                isLoggedIn={isLoggedIn}
                                onSaveMovie={saveMovie}
                                onDeleteMovie={deleteMovieTemp}
                                component={Movies}
                />
                <ProtectedRoute path="/saved-movies"
                                isLoggedIn={isLoggedIn}
                                onDeleteMovie={deleteMovie}
                                component={SavedMovies}
                />
                <ProtectedRoute path="/profile"
                                isLoggedIn={isLoggedIn}
                                onLogOut={handleLogOut}
                                onUserUpdate={handleUserUpdate}
                                component={Profile}
                />
                <Route exact path="/">
                    <Main
                        isLoggedIn={isLoggedIn}
                    />
                </Route>
            </Switch>
            <ErrorPopup
                onClose={closeErrorPopup}
                isOpen={isErrorPopupOpen}
                errorMessage={popupErrorMessage}
            />
            <SuccessPopup
                onClose={closeSuccessPopup}
                isOpen={isSuccessPopupOpen}
                successMessage={popupSuccessMessage}
            />
        </CurrentUserDataContext.Provider>
  );
}

export default App;
