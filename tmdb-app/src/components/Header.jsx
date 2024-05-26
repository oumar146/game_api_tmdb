import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/global/main.css";
import "../styles/global/navbar.css";
import "../styles/global/header.css";

function Header(props) {
  return (
    <header>
      <div id="navbar">
        <div id="logo">
          <NavLink to='/home'>The Seventh Art Game</NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to='/home'>Accueil</NavLink>
          </li>
          <li>
            <NavLink to='/rules'>Comment Jouer ?</NavLink>
          </li>
          <li>
            <NavLink to='/home'>Lancer une partie</NavLink>
          </li>
        </ul>
      </div>
      {props && props.children}
    </header>
  );
}

export default Header;
