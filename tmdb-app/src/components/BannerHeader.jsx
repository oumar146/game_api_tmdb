import React from "react";
import { NavLink } from "react-router-dom";

function BannerHeader() {
    return (

        <div id="hero">
            <h1>A quel point connaissez-vous le septième art ?</h1>
            <p>Découvrez-le en jouant à nos divers jeux</p>
            <div class="cta">
                <a href="rules.html">
                    <button class="btn rules"><NavLink to='/rules'>Comment Jouer ?</NavLink></button>
                </a>
                <a href="index.html#game-anchor">
                    <button class="btn launch">Lancer une partie</button>
                </a>
            </div>
        </div>
    );
}

export default BannerHeader;
