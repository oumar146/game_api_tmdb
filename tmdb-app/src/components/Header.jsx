import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div id="navbar">
                <div id="logo"><NavLink to={`/home`}>The Seventh Art Game</NavLink></div>
                <ul className="nav-links">
                    <li> <NavLink to={`/home`}>Accueil</NavLink></li>
                    <li><NavLink to={`/rules`}>Comment Jouer ?</NavLink></li>
                    <li><NavLink to={`/game`}>Catégories</NavLink></li>
                    <li><a href="play.html">Lancer une partie</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
