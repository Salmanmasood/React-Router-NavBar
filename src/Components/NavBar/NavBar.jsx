import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (

<nav className="navbar navbar-expand-sm bg-primary navbar-dark">

<ul className="navbar-nav">
      <li  className="nav-item">
        <NavLink className="nav-link" to="/Movies">Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Employees">Employees</NavLink>
      </li>
      
    </ul>

<ul className="nav navbar-nav navbar-right">
  <li className="nav-item">
  <NavLink className="nav-link" to="/Login">Login</NavLink>
  </li>
</ul>

</nav>

  );
};

export default NavBar;
