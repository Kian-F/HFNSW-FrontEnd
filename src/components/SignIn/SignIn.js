import React, { useState } from 'react'

import useAxios from '../../Hooks/useAxios.js'

import { useHistory, withRouter } from "react-router-dom";
import LoginButton from '../LoginButton/LoginButton.js';
const SignIn = () => {

let history = useHistory();

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

  const options = {
    method: 'POST',
    url: `http://localhost:3000/user/token`,
    headers: {
      accept: '*/*'
    },
    data: {
      auth:{
        email: email,
        password: password,
      }
    }, 
  }

  const {
    callbacks: { fetchData },
    error,
    loading,
  } = useAxios()

  function handleSubmit(event) {
    event.preventDefault();

    fetchData(options)

    history.push('/')
    
    return false
  }

  return (
    <div>
      <h1>
        This is sign in
      </h1>

      <form>
        <input
          value={email}
          onInput={e => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <input
          value={password}
          onInput={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <LoginButton/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(SignIn)