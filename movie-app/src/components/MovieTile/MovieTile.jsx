function MovieTile({ movie, handleMovieClick }) {
    const { title, imageUrl, year, genres } = movie;

    const handleMovieTileClick = () => {
        console.log("movie title - " + movie.title);
        if (handleMovieClick) {
            handleMovieClick(movie)
        }
    }

    return (
        <>
            <div data-testid="movie-card" className="movie-card" onClick={handleMovieTileClick}>
                <div className="dropdown movie-menu">
                    <button className="btn btn-dark btn-sm" type="button" data-bs-toggle="dropdown" onClick={(e) => e.stopPropagation()} // this prevent dropdown toggle from triggering card click
                        aria-expanded="false">
                        &#8942;
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Edit</a></li>
                        <li><a className="dropdown-item text-danger" href="#">Delete</a></li>
                    </ul>
                </div>
                <img src={imageUrl} alt="Movie Poster" />
                <div className="movie-info">
                    <h6>{title} <span className="movie-year">{year}</span></h6>
                    <p data-testid="movie-genres">{genres.join(" & ")}</p>
                </div>
            </div>
        </>

    );
}

export default MovieTile;