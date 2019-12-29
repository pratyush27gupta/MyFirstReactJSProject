import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

const NavBar = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </a>
        <Link to="/app">
          <p className="navbar-brand">App</p>
        </Link>
        <Link to="/counters">
          <p className="navbar-brand">Counters</p>
        </Link>
        <Link to="/shop">
          <p className="navbar-brand">Shop</p>
        </Link>
        <Link to="/myforms">
          <p className="navbar-brand">MyForms</p>
        </Link>
        <Link to="/login">
          <p className="navbar-brand">Login</p>
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
