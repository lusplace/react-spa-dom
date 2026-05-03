import React, { memo, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import './Movie.css';
//TODO require('dotenv').config();
//TODO console.log(import.meta.env);
const REACT_APP_MOVIE_DB_API_KEY='258d931d683968f60efdc9c9f405fe4c'

export const Movie = () => {
    //TODO console.log({'import.meta.env': import.meta.env});
    //const key = import.meta.env.REACT_APP_MOVIE_DB_KEY;
    const key = REACT_APP_MOVIE_DB_API_KEY;
    let { id } = useParams();

    const link = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
    console.log({link: link});
    const { data: data, loading, error } = useFetch(link);
    console.log(data)
    const imgLink = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${key}`;

    const { data: imgData, imgLoading, imgError } = useFetch(imgLink, key);

    console.log({
        imgData: imgData,
        imgLinks: imgLink
    });

    const imgBgData = imgLoading || imgError? null: {
        link: imgData?.backdrops[0]?.file_path,
        width: imgData?.backdrops[0]?.width,
        height: imgData?.backdrops[0]?.height
    };

    const content = loading? (<h3>Loading Movie...</h3>):
        error?
            (<h3>Error finding your movie, check trying:
                <a href={`https://www.themoviedb.org/collection/` + id}>
                {`https://www.themoviedb.org/collection/` + id}</a>
            </h3>):
            (<>

            <div className="container">
                <div className="card movieCard col-2" style={{width: "18rem"}}>
                    <img className="card-img-top" src={`https://media.themoviedb.org/t/p/w300_and_h450_face${data?.poster_path}`} alt="Card image cap"/>
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

/*
<!-- <img className="card-img-top img-bg" src={imgLoading || imgError? "error":
    `https://media.themoviedb.org/t/p/w${imgData?.width}_and_h${imgData?.height}_face${imgData?.file_path}`}
          alt="Card image cap"/>
-->*/
