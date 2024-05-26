// Importation de React et du hook useEffect
import React, { useEffect } from "react";
// Importation du token d'authentification depuis le fichier de configuration
const { TOKEN } = require('../../config.json');

// Composant fonctionnel GetTopRatingMovies
const GetTopRatingMovies = (props) => {

    // Utilisation du hook useEffect pour effectuer une requête API lorsque le composant est monté
    useEffect(() => {
        // Options de la requête fetch
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}` // Authentification avec le token
            }
        };

        // Requête fetch à l'API de The Movie Database (TMDb) pour obtenir les films les mieux notés
        fetch("https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1", options)
            .then(response => response.json())
            .then(response => props.setData(response.results))
            .catch(err => console.error(err));
    }, []);

    // Le composant ne retourne rien d'affiché dans le DOM
    return (
        <div>
        </div>
    );
};

export default GetTopRatingMovies;
