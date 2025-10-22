
function MovieDetail({ movie }) {
  if (!movie) return null;

  const { imageUrl, title, year, duration, genres, description, rating } = movie;

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="movie-poster">
          <img src={imageUrl} alt={title} className="poster-img" />
        </div>

        <div className="movie-info">
          <div className="d-flex align-items-center mb-2">
            <h2 className="movie-title text-uppercase mb-0 me-3">{title}</h2>
            {rating && <div className="movie-rating">{rating}</div>}
          </div>

          <p className="movie-genres">{genres.join(" & ")}</p>
          <div className="movie-meta">
            <span className="movie-year-movie-info">{year}</span>
            <span className="movie-duration">{duration}</span>
          </div>
          <p className="movie-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
