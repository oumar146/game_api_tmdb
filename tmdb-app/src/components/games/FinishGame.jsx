// Importation du composant NavLink depuis 'react-router-dom'
import { NavLink } from 'react-router-dom';

// Composant fonctionnel FinishGame qui affiche le score final et un bouton pour retourner à l'accueil
const FinishGame = (props) => {
    return (
        <div className="test">
            <div>
                {/* Affiche le message de fin de jeu avec le score */}
                <p className="finishGame">
                    Vous avez terminé le jeu avec un score de <br />
                    {/* Affichage du nombre de réponses correctes et du nombre total de questions */}
                    {props.correctAnswers}/{props.totalQuestions} !
                </p>
            </div>
            <div className="button_go_home_restart_container">
                {/* Lien vers la page d'accueil */}
                <NavLink to="/home">
                    <button className="button_go_home">Accueil</button>
                </NavLink>
            </div>
        </div>
    );
};

export default FinishGame;
