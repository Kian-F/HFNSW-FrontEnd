import React, { useState } from 'react'
//import axios from 'axios'
import useAxios from '../../Hooks/useAxios.js'
// import useAxios from 'axios-hooks';
import { useHistory, withRouter } from "react-router-dom";

const url = "http://localhost:3000/user/token"

const SignIn = () => {

let history = useHistory();

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

  const options = {
    method: 'POST',
    url: `http://localhost:3000/user/token`,
    headers: {accept: '*/*'},
    data: {auth:{
      email: email,
      password: password,
    }}, 
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  const { error,loading, fetchData} = useAxios(options)

//   `function updateData() {
//     executePost()
//   }`
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post(
  //       url, {
  //       auth: {
  //         email,
  //         password,
  //       },
  //     })
  //     .then((res) => {
  //       localStorage.setItem("jwt", res.data.jwt);
  //       console.log(res.data);
  //       console.log("user logged in");
  //       history.push("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       //setState({ errorMessage: "Invalid email or password" });
  //     });
  // };
  // function PostData() {
  //   executePost()
  // }
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
        <button type="submit"  onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(SignIn)
