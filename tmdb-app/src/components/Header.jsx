import React from "react";
import { NavLink } from "react-router-dom";
// import { GoogleFont } from "re"
import "../styles/global/main.css";
import "../styles/global/navbar.css";
import "../styles/global/header.css";
// import hero from "../images/hero.jpg";

function Header(props) {
  return (
    <header>
      <div id="navbar" class="">
        <div id="logo">
          <NavLink to='/home'>The Seventh Art Game</NavLink>
        </div>
        <ul class="nav-links">
          <li>
            <NavLink to='/home'>Accueil</NavLink>
          </li>
          <li>
            <NavLink to='/rules'>Comment Jouer ?</NavLink>
          </li>
          <li>
            <a href="#game-anchor">Lancer une partie</a>
          </li>
        </ul>
      </div>
      {props && props.children}
    </header>
  );
}

export default Header;
