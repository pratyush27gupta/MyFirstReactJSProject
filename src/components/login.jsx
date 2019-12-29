import React, { Component } from "react";
import Auth from "../auth";
const Login = props => {
  return (
    <div>
      <h4>Login component</h4>
      <button
        onClick={() => {
          Auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
