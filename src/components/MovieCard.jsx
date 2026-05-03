function MovieCard({data}) {
    return (
        <div className="card movieCard" style={{width: "18rem"}}>
            <img className="card-img-top" src={`https://media.themoviedb.org/t/p/w300_and_h450_face${data.poster_path}`} alt="Poster"/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.overview}</p>
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </div>
        </div>
    );
}
export default MovieCard;