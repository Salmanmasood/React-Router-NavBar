import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (

<nav class="navbar navbar-expand-sm bg-primary navbar-dark">

<ul className="navbar-nav">
      <li  className="nav-item">
        <Link className="nav-link" to="/Movies">Movies</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Employees">Employees</Link>
      </li>
      
    </ul>


</nav>

  );
};

export default NavBar;
