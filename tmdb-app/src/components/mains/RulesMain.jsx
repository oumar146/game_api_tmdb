import React from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/header.css";
function RulesMain() {
  return (
    <main>
      <div class="section">
        <h2>Présentation du jeu</h2>
        <p class="paragraph">
          The Seventh Art Game est un ensemble de jeux liés au cinéma. Chaque
          jeu vous propose différentes sortes de défis. Les jeux peuvent être
          joué dans 2 différents modes.
        </p>
      </div>

      <div class="section">
        <h2>Les modes de jeu</h2>
        <p class="paragraph">
          Les jeux proposés peuvent tous être joué dans 2 modes : le mode normal
          et le mode sans fin. Le
          <span class="colored">mode normal</span> consiste à jouer en répondant
          à une série de 20 questions. Le score vous est affiché tout au long de
          la partie. Le <span class="colored">mode sans fin</span> consiste
          quand à lui à jouer en répondant à une série de questions indéfinie.
          La partie continue tant que vous n'avez pas donné de mauvaise réponse.
        </p>
      </div>

      <h2 class="title-games">Les jeux</h2>

      <div class="game-section">
        <div class="game">
          <h4>Seventh Art Rating</h4>
        </div>

        <div class="description">
          <h3>Seventh Art Rating</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            tortor commodo, lacinia nibh id, pulvinar sapien. Aenean commodo
            consectetur est. Integer et ligula sagittis, molestie elit rhoncus,
            tristique risus. Quisque vel mattis purus. Sed dictum quam at libero
            convallis, eu egestas est finibus.
          </p>
        </div>
      </div>

      <div class="game-section">
        <div class="description">
          <h3>Seventh Art Years</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            tortor commodo, lacinia nibh id, pulvinar sapien. Aenean commodo
            consectetur est. Integer et ligula sagittis, molestie elit rhoncus,
            tristique risus. Quisque vel mattis purus. Sed dictum quam at libero
            convallis, eu egestas est finibus.
          </p>
        </div>

        <div class="game blue-color">
          <h4>Seventh Art Years</h4>
        </div>
      </div>
    </main>
  );
}

export default RulesMain;
