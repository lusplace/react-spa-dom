import React from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import './Movie.css';
//TODO require('dotenv').config();
//TODO console.log(import.meta.env);

export const Movie = () => {
    //TODO console.log({'import.meta.env': import.meta.env});
    //const key = import.meta.env.REACT_APP_TMDB_READ_TOKEN;
    const key = process.env.REACT_APP_TMDB_KEY ;
    let { id } = useParams();

    const link = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
    const { data, loading, error } = useFetch(link);

    const content = loading? (<h3>Loading Movie...</h3>):
        error?
            (<h3>Error finding your movie, check trying:
                <a href={`https://www.themoviedb.org/collection/` + id}>
                {`https://www.themoviedb.org/collection/` + id}</a>
            </h3>):
            (<>

            <div className="container">
                <div className="card movieCard col-2" style={{width: "18rem"}}>
                    <img className="card-img-top" src={`https://media.themoviedb.org/t/p/w300_and_h450_face${data?.poster_path}`} alt="Poster for your movie"/>
                    <div className="card-body">
                        <h5 className="card-title">{data?.title}</h5>
                        <p className="card-text">{data?.tagline}</p>
                        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                </div>

                <div className="card-body rounded-3 col-6">
                    <h6>Duration:  <span className="badge bg-secondary">{data?.runtime} min.</span></h6>
                    <p className="card-text">{data?.overview}</p>

                    <h6>Release Date: <span className="badge bg-secondary">{data?.release_date}</span></h6>

                    <h6>Calliffication <span className="badge bg-secondary">{data?.vote_average}</span></h6>

                </div>
            </div>
            </>)

    return content;
};