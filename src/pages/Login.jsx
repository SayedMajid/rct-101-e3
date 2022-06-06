import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const handleChange = (e) => {
    let x = e.target.value;
    console.log(x)
  }
  const submitLogin = () => {
    
  }
  return (
    <div>
      <h1>Login</h1>
      <input data-cy="login-email" onChange={handleChange} type="text"/>
      <br />
      <input data-cy="login-password" onChange={handleChange} type="text"/>
      <br />
      <button data-cy="login-submit" onClick={submitLogin}>Login</button>
    </div>
  );
};

export default Login;
