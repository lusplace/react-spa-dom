import React, {memo, useMemo, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import MovieCard from "../components/MovieCard";
import './Search.css';
/*
import * as dotenv from 'dotenv';
*/
const REACT_APP_TMDB_READ_TOKEN = process.env.REACT_APP_TMDB_READ_TOKEN
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${REACT_APP_TMDB_READ_TOKEN}`
    }
};

export const Search = () => {
/*    console.log(process.env)

    dotenv.config();*/
    /*const movieLongAPIKey = process.env.REACT_APP_TMDB_READ_TOKEN; // DOESNT WORK*/
    const [searchParams] = useSearchParams();
    const searchData = searchParams.get("query");
    const [moviesData, setMoviesData] = useState([]);



    const query = searchData ? `&query=${searchData}` : '';

    const link = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1${query}`;
    useMemo(() => fetch(link, options)
        .then(res => res.json())
        .then(res => {
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
                <li key={movie.title + "" + movie.id}>
                    <Link className='cardLink' to={`/movie/${movie.id}`}>
                    <MovieCard data={movie}/>
                    </Link>
                </li>
            ))}
        </ul>
    );
});

