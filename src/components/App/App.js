import './App.css';
import {Route, Switch, useHistory, Redirect} from 'react-router-dom';
import React from "react";
import Main from "../Main/Main"
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import ProtectedRoute from "../Routes/ProtectedRoute";

import { CurrentUserDataContext } from "../../contexts/CurrentUserDataContext";
import { mainApi } from "../../utils/MainApi";

function App() {

    const history = useHistory();
    const [isErrorPopupOpen, setIsErrorPopupOpen] = React.useState(false);
    const [popupErrorMessage, setPopupErrorMessage] = React.useState('');
    const [currentUserData, setCurrentUserData] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
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

    function handleLogOut() {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        history.push("/");
    }

    function handleUserUpdate(name, email) {
        mainApi.updateUser(localStorage.getItem("token"), name, email)
            .then(res => {
                setCurrentUserData(prevUserData => (
                    {
                        ...prevUserData,
                        user: res.user
                    }
                ));
                history.push('/movies');
            })
            .catch(err => {
                setIsErrorPopupOpen(true);
                setPopupErrorMessage(`УПС произошла ошибка ${err} введите корректные данные`);
            });
    }

    function closeErrorPopup() {
        setIsErrorPopupOpen(false);
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
                                component={Movies}
                />
                <ProtectedRoute path="/saved-movies"
                                isLoggedIn={isLoggedIn}
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
        </CurrentUserDataContext.Provider>
  );
}

export default App;
