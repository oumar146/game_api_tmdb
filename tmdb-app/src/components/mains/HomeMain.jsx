import React from "react";
import { NavLink } from "react-router-dom";

function HomeMain() {
  return (
    <main>
      <h2>A quels jeux jouerez-vous ?</h2>
      <div id="game-section" className="games-categories">
        <div className="game">
          <h3 className="replies">Seventh Art Rating</h3>
          <p className="comment">Trouvez le film le mieux noté</p>
          <NavLink to='/game/SaRatings'>
            <button className="card-button">Jouer</button>
          </NavLink>
        </div>
        <div className="game">
          <h3>Seventh Art Years</h3>
          <p className="comment">Trouvez l'année de sortie du film</p>
          <NavLink to='/game/SaYears'>
            <button className="card-button">Jouer</button>
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default HomeMain;
