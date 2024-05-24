import React, { useEffect } from "react";
const { TOKEN } = require('../../config.json')

const GetTopRatingMovies = (props) => {

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };

        fetch('https://api.themoviedb.org/3/tv/popular?language=fr-FR&page=1', options)
            .then(response => response.json())
            .then(response => props.setData(response.results))
            .catch(err => console.error(err));
    }, [])

    return (
        <div>

        </div>
    );
};

export default GetTopRatingMovies;
