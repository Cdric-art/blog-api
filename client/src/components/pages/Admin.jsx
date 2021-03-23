import React from 'react';
import Dashboard from "../modules/Dashboard";
import Login from "../modules/Login";

const Admin = ({login, me}) => {

  return <main className="container">
    {
      me ? <Dashboard/>
        : <Login login={login}/>
    }
  </main>
};

export default Admin;
