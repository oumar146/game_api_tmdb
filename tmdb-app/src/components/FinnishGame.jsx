import { NavLink } from 'react-router-dom';

const FinishGame = (props) => {
    return (
        <div className="test">
            <div>
                <p className="finishGame">
                    Vous avez terminé le jeu avec un score de <br /> {props.correctAnswers}/{props.totalQuestions} !
                </p>
            </div>
            <div className="button_go_home_restart_container">
                <NavLink to="/home">
                    <button className="button_go_home">Accueil</button>
                </NavLink>
            </div>
        </div>
    );
};

export default FinishGame;