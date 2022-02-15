import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/city/:id" className="cities">
          Cities
        </Link>
      </nav>
      <h1 className="Destination">Destination</h1>
    </>
  );
}

export default Navbar;
