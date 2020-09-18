import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
        <Switch>
      <div className="App">
        <Route exact path="/" component={Login} />
      

        <PrivateRoute exact path="/bubble-page" component={BubblePage}></PrivateRoute>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
