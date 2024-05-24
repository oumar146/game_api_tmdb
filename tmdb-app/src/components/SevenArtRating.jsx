import React, { useState, useEffect } from "react";
import GetTopRatingMovies from "./Tmdb_api/GetTopRatingMovies";
import '../styles/sevenArtRating.css'
import Header from "./Header";

function SevenArtRating() {
    const [dataTopRates, setDataTopRates] = useState([]);
    const [indexMovie, setIndexMovie] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    useEffect(() => {
        if (dataTopRates.length > 0) {
            setAnswered(false);
            setSelectedAnswer(null);
        }
    }, [dataTopRates]);

    const switchQuestion = () => {
        if (indexMovie + 2 < dataTopRates.length) {
            setIndexMovie(indexMovie + 2);
            setAnswered(false);
            setSelectedAnswer(null);
        }
    };

    const checkAnswer = (selectedIndex) => {
        setSelectedAnswer(selectedIndex);
    };

    const validateAnswer = () => {
        if (selectedAnswer !== null && !answered) {
            const movie1 = dataTopRates[indexMovie];
            const movie2 = dataTopRates[indexMovie + 1];

            if ((selectedAnswer === 0 && movie1.vote_average > movie2.vote_average) ||
                (selectedAnswer === 1 && movie2.vote_average > movie1.vote_average)) {
                setCorrectAnswers(correctAnswers + 1); // Increment correct answers
            }
            // Always increment total questions whether the answer is correct or not
            setTotalQuestions(totalQuestions + 1); // Increment total questions
            setAnswered(true);
        }
    };


    return (
        <div>
            <GetTopRatingMovies setData={setDataTopRates} />
            <Header />
            <main>
                <h1 id="hero">
                    Qui a la meilleure note ?
                </h1>
                <div className="game-data">
                    <div className="score">Score : {correctAnswers}</div>
                    <div className="questions">Question : {correctAnswers}/{totalQuestions}</div>
                </div>
                {dataTopRates.length > 0 && (
                    <div className="img">
                        {dataTopRates.slice(indexMovie, indexMovie + 2).map((movie, index) => (
                            <img
                                key={movie.id}
                                onClick={() => checkAnswer(index)}
                                disabled={answered}
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                className={`img-movie ${selectedAnswer === index ? "selected" : ""} ${answered && selectedAnswer === index ? (selectedAnswer === 0 && movie.vote_average > dataTopRates[indexMovie + 1].vote_average) || (selectedAnswer === 1 && movie.vote_average > dataTopRates[indexMovie].vote_average) ? "green" : "red" : ""}`}
                            />
                        ))}
                    </div>
                )}
                <div className="game-data">
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
            </main>
        </div>
    );
}

export default SevenArtRating;
