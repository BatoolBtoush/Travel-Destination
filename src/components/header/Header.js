import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <>
      <h1 className="header">Travel Destination Web Application</h1>
      <nav>
        <Navbar />
      </nav>
    </>
  );
}

export default Header;
