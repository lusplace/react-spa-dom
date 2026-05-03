import React, {memo, useMemo, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import MovieCard from "../components/MovieCard";
import './Search.css';
/*
import * as dotenv from 'dotenv';
*/
const REACT_APP_MOVIE_DB_KEY='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNThkOTMxZDY4Mzk2OGY2MGVmZGM5YzlmNDA1ZmU0YyIsIm5iZiI6MTc3NzU0Njk5OS42OTgsInN1YiI6IjY5ZjMzNmY3NjFkMjU3ZGJlMzg0MmY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7qw3bS-AqDLysqq7rsQZTTsh6RKUdXwAq-XpCEnrThI'

export const Search = () => {
/*    console.log(process.env)

    dotenv.config();*/
    /*const movieLongAPIKey = process.env.REACT_APP_MOVIE_DB_KEY; // DOESNT WORK*/
    const [searchParams, setSearchParams] = useSearchParams();
    const searchData = searchParams.get("query");
    const [moviesData, setMoviesData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${REACT_APP_MOVIE_DB_KEY}`
        }
    };

    const query = searchData ? `&query=${searchData}` : '';

    const link = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1${query}`;
    console.log(link);
    useMemo(() => fetch(link, options)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setMoviesData(res.results);
        })
        .catch(err => console.error(err)), [link]);

    //console.log()

    return (<>
        <h2>Search Results</h2>
        <MovieList movies={moviesData} />

    </>);
};

const MovieList = memo(function MovieList({movies}) {
    console.log(' Render de MovieList');
    return (
        <ul className="movieList">
            {movies?.map((movie) => (
                <li key={movie.popularity}>
                    <Link className='cardLink' to={`/movie/${movie.id}`}>
                    <MovieCard data={movie}/>
                    </Link>
                </li>
            ))}
        </ul>
    );
});

