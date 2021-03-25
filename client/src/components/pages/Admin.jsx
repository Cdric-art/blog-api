import React from 'react';
import Dashboard from "../modules/Dashboard";
import Login from "../modules/Login";
import { Link } from "react-router-dom";

const Admin = ({login, me}) => {

  return <main className="container">
    <Link to="/">Retour accueil</Link>
    {
      me ? <Dashboard me={me}/>
        : <Login login={login}/>
    }
  </main>
};

export default Admin;
