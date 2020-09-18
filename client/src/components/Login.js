import React from "react";
import axios from "axios";
// import { axiosWithAuth } from './axiosWithAuth';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const initialCredentials = {
    username: '',
    password: '',
  }


  const history =useHistory();
  const [credentials, setCredentials] =useState(initialCredentials)


  const handleChange = e => {
    setCredentials({
      ...credentials,

        [e.target.name]: e.target.value,

     
    })
    console.log(credentials)
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        console.log(res.data.payload)
        // res.data.payload ==> localStorage
        // navigate user to the "protected" route
       
        history.push("/bubble-page");
      })
      .catch(err => console.log(err))
      
    };


  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>

        <input
        autoComplete="off"
        id="username"

        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Lambda School"
       
        />
                <label htmlFor="password">Password:</label>

        <input 
         autoComplete="off"
         id="password"

        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder='i<3Lambd4'
        />
        <button>Login</button>
        
        </form>
      </div>
  );
};

export default Login;
