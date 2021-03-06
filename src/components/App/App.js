import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from "react";
import Main from "../Main/Main"
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  return (
      <Switch>
        <Route path="/signup">
            <Register />
        </Route>
        <Route path="/signin">
            <Login />
        </Route>
        <Route path="/movies">
            <Movies />
        </Route>
        <Route path="/saved-movies">
            <SavedMovies />
        </Route>
        <Route path="/profile">
            <Profile />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
  );
}

export default App;
