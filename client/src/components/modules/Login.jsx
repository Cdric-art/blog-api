import React, { useState } from 'react';
import axios from "axios";

const Login = ({login}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    axios({
      method: 'post',
      withCredentials: true,
      url: `${process.env.REACT_APP_URL_API}/admin/login`,
      data: formData
    })
      .then(res => login(res.data))
      .catch(err => console.error({err}))
  }

  return <div className="login">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Votre email : </label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Votre mot de passe : </label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="submit">Se connecter</button>
    </form>
  </div>
};

export default Login;
