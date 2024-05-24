import React from 'react';
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div id="navbar">
                <div id="logo"><a href="index.html">The Seventh Art Game</a></div>
                <ul className="nav-links">
                    <li><a href="">Accueil</a></li>
                    <li><a href="rules.html">Comment Jouer ?</a></li>
                    <li><a href="categories.html">Catégories</a></li>
                    <li><a href="play.html">Lancer une partie</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
