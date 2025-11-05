import React from "react";
import "./MovieForm.css";

function MovieForm({ initialMovie = {}, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form className="movie-form container-fluid text-white" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label text-uppercase small text-danger fw-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control bg-dark text-white border-0"
            placeholder="Enter movie title"
            defaultValue={initialMovie.title || ""}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="releaseDate" className="form-label text-uppercase small text-danger fw-bold">
            Release Date
          </label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            className="form-control bg-dark text-white border-0"
            defaultValue={initialMovie.releaseDate || ""}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="movieUrl" className="form-label text-uppercase small text-danger fw-bold">
            Movie URL
          </label>
          <input
            type="url"
            id="movieUrl"
            name="movieUrl"
            className="form-control bg-dark text-white border-0"
            placeholder="https://"
            defaultValue={initialMovie.movieUrl || ""}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="rating" className="form-label text-uppercase small text-danger fw-bold">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="form-control bg-dark text-white border-0"
            placeholder="7.5"
            min="0"
            max="10"
            step="0.1"
            defaultValue={initialMovie.rating || ""}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="genre" className="form-label text-uppercase small text-danger fw-bold">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            className="form-select bg-dark text-white border-0"
            defaultValue={
              Array.isArray(initialMovie.genres) && initialMovie.genres.length > 0
                ? initialMovie.genres[0]
                : ""
            }
          >
            <option value="">Select Genre</option>
            <option value="Crime">Crime</option>
            <option value="Documentary">Documentary</option>
            <option value="Horror">Horror</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="runtime" className="form-label text-uppercase small text-danger fw-bold">
            Runtime
          </label>
          <input
            type="text"
            id="runtime"
            name="runtime"
            className="form-control bg-dark text-white border-0"
            placeholder="minutes"
            defaultValue={initialMovie.runtime || ""}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="overview" className="form-label text-uppercase small text-danger fw-bold">
          Overview
        </label>
        <textarea
          id="overview"
          name="overview"
          className="form-control bg-dark text-white border-0"
          rows="3"
          placeholder="Movie description"
          defaultValue={initialMovie.overview || ""}
        ></textarea>
      </div>

      <div className="d-flex justify-content-end gap-2 mt-4">
        <button type="reset" className="btn btn-outline-light text-uppercase px-4">
          Reset
        </button>
        <button type="submit" className="btn btn-danger text-uppercase px-4">
          Submit
        </button>
      </div>
    </form>
  );
}

export default MovieForm;
