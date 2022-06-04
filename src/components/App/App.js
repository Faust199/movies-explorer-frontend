import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from "react";
import Main from "../Main/Main"

function App() {
  return (
      <Switch>
        <Route path="/signup">
        </Route>
        <Route path="/signin">
        </Route>
        <Route path="/movies">
        </Route>
        <Route path="/saved-movies">
        </Route>
        <Route path="/profile">
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
  );
}

export default App;
