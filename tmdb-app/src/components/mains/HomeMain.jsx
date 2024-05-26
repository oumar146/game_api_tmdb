import React from "react";
import { NavLink } from "react-router-dom";
// import "../styles/header.css";
function HomeMain() {
  return (
    <main>
      <h2 h2 > A quels jeux jouerez - vous ?</h2 >
      <div class="games-categories">
        <div class="game">
          <h3 class="replies">Seventh Art Rating</h3>
          <p class="comment">Trouvez le film le mieux noté</p>
          <NavLink to='/game/SaRatings'
          >
            <button class="card-button">Jouer</button>
          </NavLink>
        </div>

        <div class="game">
          <h3>Seventh Art Years</h3>
          <p class="comment">Trouvez l'année de sortie du film</p>
          <NavLink to='/game/SaYears'
          >
            <button class="card-button">Jouer</button>
          </NavLink>
        </div>
        <div class="game">
          <h3>Seventh Art Lines</h3>
          <p class="comment">Trouvez de quel film vient la réplique</p>
          <a href="games/sa-replica.html">
            <button class="card-button">Jouer</button>
          </a>
        </div>

        <div class="game">
          <h3>Dans quels films a joué ...</h3>
          <p class="comment">Trouvez dans quels films a joué l'acteur</p>
          <a href="games/sa-which-movies.html">
            <button class="card-button">Jouer</button>
          </a>
        </div>

        <div class="game">
          <h3>3 Acteurs 1 film</h3>
          <p class="comment">
            Trouvez le film dans lequel tous les acteurs ont joué
          </p>
          <a href="games/sa-three-actors.html">
            <button class="card-button">Jouer</button>
          </a>
        </div>

        <div class="game">
          <h3>7 Indices 1 film</h3>
          <p class="comment">Trouvez le film à l'aide de sept indices</p>
          <a href="games/sa-seven-indices.html">
            <button class="card-button">Jouer</button>
          </a>
        </div>
      </div>
    </main >
  );
}

export default HomeMain;
