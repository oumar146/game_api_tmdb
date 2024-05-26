// Importation des bibliothèques et composants nécessaires
import React, { useState, useEffect } from "react";
import GetTopRatingMovies from "../Tmdb_api/GetTopRatingMovies";
import FinishGame from "./FinishGame";

function SaRatings() {
  // Déclaration des états
  const [dataTopRates, setDataTopRates] = useState([]);
  const [indexMovie, setIndexMovie] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [finished, setFinished] = useState(false); // État pour suivre la fin du jeu

  // Effet pour réinitialiser la réponse et la sélection lorsqu'on obtient de nouvelles données
  useEffect(() => {
    if (dataTopRates.length > 0) {
      setAnswered(false);
      setSelectedAnswer(null);
    }
  }, [dataTopRates]);

  // Fonction pour passer à la question suivante
  const switchQuestion = () => {
    if (indexMovie + 2 < dataTopRates.length) {
      setIndexMovie(indexMovie + 2);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setFinished(true); // Marquer le jeu comme terminé s'il n'y a plus de questions
    }
  };

  // Fonction pour enregistrer la réponse sélectionnée
  const checkAnswer = (selectedIndex) => {
    setSelectedAnswer(selectedIndex);
  };

  // Fonction pour valider la réponse sélectionnée
  const validateAnswer = () => {
    if (selectedAnswer !== null && !answered) {
      const movie1 = dataTopRates[indexMovie];
      const movie2 = dataTopRates[indexMovie + 1];

      if ((selectedAnswer === 0 && movie1.vote_average > movie2.vote_average) ||
        (selectedAnswer === 1 && movie2.vote_average > movie1.vote_average)) {
        setCorrectAnswers(correctAnswers + 1);
      }
      setTotalQuestions(totalQuestions + 1);
      setAnswered(true);
    }
  };

  return (
    <div>
      {/* Récupération des films les mieux notés */}
      <GetTopRatingMovies setData={setDataTopRates} />
      <main>
        {finished ? ( // Afficher FinishGame si le jeu est terminé
          <FinishGame
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
          />
        ) : (
          <div>
            <div id="container">
              <p className="question">Quel est le film le mieux noté ?</p>
            </div>
            <div className="game-data">
              <div className="score">Score : {correctAnswers}</div>
              <div className="questions">Question : {correctAnswers}/{totalQuestions}</div>
            </div>
            {dataTopRates.length > 0 && (
              <div className="question-image">
                {/* Affichage des films à comparer */}
                {dataTopRates.slice(indexMovie, indexMovie + 2).map((movie, index) => (
                  <img
                    key={movie.id}
                    onClick={() => {
                      checkAnswer(index);
                    }}
                    disabled={answered}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className={`white img-movie ${answered && selectedAnswer === index ? (selectedAnswer === 0 && movie.vote_average > dataTopRates[indexMovie + 1].vote_average) || (selectedAnswer === 1 && movie.vote_average > dataTopRates[indexMovie].vote_average) ? "green" : "red" : ""}`}
                  />
                ))}
              </div>
            )}
            <div className="game-buttons">
              <button
                type="button"
                className="validation"
                onClick={validateAnswer}
                disabled={answered || selectedAnswer === null}
              >
                Valider la réponse
              </button>
              <button
                type="button"
                className="questions"
                onClick={switchQuestion}
                disabled={!answered}
              >
                Question suivante
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default SaRatings;
