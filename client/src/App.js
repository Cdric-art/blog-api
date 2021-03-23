import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/modules/Header";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import Admin from "./components/pages/Admin";

function App() {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/post/:id" component={Post}/>
        <Route exact path="/admin">
          <Admin login={setUser} me={user}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
