import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <ul className="NavBar__routes">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/author">AUTHORS</Link>
        </li>
        <li>
          <Link to="book">BOOKS</Link>
        </li>
      </ul>
      <span className="NavBar__login">Login</span>
    </div>
  );
}

export default NavBar;
