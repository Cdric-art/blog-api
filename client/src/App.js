import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/modules/Header";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import Admin from "./components/pages/Admin";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/post/:id" component={Post}/>
        <Route exact path="/admin" component={Admin}/>
      </Switch>
    </Router>
  );
}

export default App;
