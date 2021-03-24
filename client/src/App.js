import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/modules/Header";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import Admin from "./components/pages/Admin";
import axios from "axios";

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: `${process.env.REACT_APP_URL_API}/admin`,
    })
      .then(res => setUser(res.data))
      .catch(err => console.error({err}))
  }, [])

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
