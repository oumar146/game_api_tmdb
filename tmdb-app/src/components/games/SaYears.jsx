import React, { useState, useEffect, useMemo } from "react";
import GetTopRatingMovies from "../Tmdb_api/GetTopRatingMovies";
import Header from "../Header";
import FinishGame from "./FinishGame";
import '../../styles/global/main.css';
import '../../styles/global/header.css';
import '../../styles/global/games.css';
import '../../styles/games/game-model-2.css';

function SaYears() {
    const [dataTopRates, setDataTopRates] = useState([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [finished, setFinished] = useState(false); // Add state for tracking game completion

    useEffect(() => {
        if (dataTopRates.length > 0) {
            setAnswered(false);
            setSelectedAnswer(null);
        }
    }, [dataTopRates]);

    const generateRealisticYears = (correctYear) => {
        const years = new Set();
        years.add(correctYear);
        while (years.size < 4) {
            const randomYear = correctYear + Math.floor(Math.random() * 11) - 5;
            years.add(randomYear);
        }
        return Array.from(years).sort();
    };

    const yearsForCurrentQuestion = useMemo(() => {
        if (dataTopRates.length > 0) {
            const correctYear = parseInt(dataTopRates[currentMovieIndex].release_date.split('-')[0]);
            return generateRealisticYears(correctYear);
        }
        return [];
    }, [currentMovieIndex, dataTopRates]);

    const switchQuestion = () => {
        if (currentMovieIndex + 1 < dataTopRates.length) {
            setCurrentMovieIndex(currentMovieIndex + 1);
            setAnswered(false);
            setSelectedAnswer(null);
        } else {
            setFinished(true); // Set the game as finished when no more questions are available
        }
    };

    const validateAnswer = () => {
        if (selectedAnswer !== null && !answered) {
            const movie = dataTopRates[currentMovieIndex];
            const correctYear = parseInt(movie.release_date.split('-')[0]);
            if (selectedAnswer === correctYear) {
                setCorrectAnswers(correctAnswers + 1);
            }
            setTotalQuestions(totalQuestions + 1);
            setAnswered(true);
        }
    };

    const handleAnswerClick = (year) => {
        if (!answered) {
            setSelectedAnswer(year);
        }
    };

    return (
        <div>
            <GetTopRatingMovies setData={setDataTopRates} />
            <Header />
            <main>
                {finished ? ( // Conditionally render FinishGame if the game is finished
                    <FinishGame
                        totalQuestions={totalQuestions}
                        correctAnswers={correctAnswers}
                    />
                ) : (
                    <>
                        <div id="hero">
                            <p className="question">Quelle est l'année du film ci-dessous ?</p>
                        </div>

                        <div className="game-data">
                            <div className="score">Score : {correctAnswers}</div>
                            <div className="questions">Question : {correctAnswers}/{totalQuestions}</div>
                        </div>

                        {dataTopRates.length > 0 && (
                            <>
                                <div className="question-image">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${dataTopRates[currentMovieIndex].backdrop_path}`}
                                        alt={dataTopRates[currentMovieIndex].title}
                                        className="img-large"
                                    />
                                </div>

                                <div className="answers">
                                    {yearsForCurrentQuestion.map((year, index) => (
                                        <div
                                            key={index}
                                            className={`answer white ${answered && selectedAnswer === year ? (year === parseInt(dataTopRates[currentMovieIndex].release_date.split('-')[0]) ? "green" : "red") : ""}`}
                                            onClick={() => handleAnswerClick(year)}
                                        >
                                            <p>{year}</p>
                                        </div>
                                    ))}
                                </div>


                            </>
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
                    </>
                )}
            </main>
        </div>
    );
}

export default SaYears;
