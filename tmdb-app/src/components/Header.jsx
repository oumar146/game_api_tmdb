import React from "react";
import { NavLink } from "react-router-dom";
// import { GoogleFont } from "re"
import "../styles/global/main.css";
import "../styles/global/navbar.css";
import "../styles/global/header.css";

// import hero from "../images/hero.jpg";

function Header() {
  return (
    <header>
      <div id="navbar" class="">
        <div id="logo">
          <a href="index.html">The Seventh Art Game</a>
        </div>
        <ul class="nav-links">
          <li>
            <a href="index.html">Accueil</a>
          </li>
          <li>
            <a href="rules.html">Comment Jouer ?</a>
          </li>
          <li>
            <a href="index.html#game-anchor">Lancer une partie</a>
          </li>
        </ul>
      </div>

      <div id="hero">
        <h1>A quel point connaissez-vous le septième art ?</h1>
        <p>Découvrez-le en jouant à nos divers jeux</p>
        <div class="cta">
          <a href="rules.html">
            <button class="btn rules">Comment Jouer ?</button>
          </a>
          <a href="index.html#game-anchor">
            <button class="btn launch">Lancer une partie</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
