import React, { useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.css";
import movieList from "./movies";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import SortControl from "./components/SortControl/SortControl";
import MovieTile from "./components/MovieTile/MovieTile";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Dialog from "./components/Dialog/Dialog";
import MovieForm from "./components/MovieForm/MovieForm";

function App() {

  const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
  const sortByOptions = ["Release Date", "Title"];

  const [selectedGenre, setSelectedGenre] = useState("ALL");
  const [selectedSortByOption, setSelectedSortByOption] = useState("ReleaseDate");
  const [selectedMovie, setSelectedMovie] = useState();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogeOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState(null);
  const [movies, setMovies] = useState(movieList);

  const handleAddMovieClick = () => {
    setIsAddDialogOpen(true);
  };

  const handleEditMovieClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleDialogClose = () => {
    if (isAddDialogOpen)
      setIsAddDialogOpen(false);

    if (isEditDialogeOpen)
      setIsEditDialogOpen(false);
  };

  const handleMovieSubmit = (movieData) => {
    console.log("New movie submitted:", movieData);
    setIsAddDialogOpen(false);
    setIsEditDialogOpen(false);
  };

  const handleDeleteMovieClick = (movie) => {
    setMovieToDelete(movie);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteMovie = () => {
    console.log("deleteing movie - ",movieToDelete)
    setIsDeleteDialogOpen(false);
  };

  const cancelDelete = () => {
    setMovieToDelete(null);
    setIsDeleteDialogOpen(false);
  };


  const dummyMovie = {
    title: "Moana",
    releaseDate: "2016-11-14",
    movieUrl: "https://www.moana.com",
    rating: "7.6",
    runtime: "1h 47m",
    genres: ["Crime", "Horror"],
    overview:
      "Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. She sets sail on an epic journey across the Pacific.",
  };

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const handleGenreSelect = (genre) => {
    console.log("User selected genre:", genre);
    setSelectedGenre(genre);
  }

  const handleSortControlChange = (sortByOption) => {
    console.log("User selected sort control:", sortByOption);
    setSelectedSortByOption(sortByOption);
  }

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    console.log("movie click - " + JSON.stringify(movie, null, 2));
  }

  return (
    <div>
      <header className="header">
        <span className="logo">
          netflix<span style={{ color: "white" }}>roulette</span>
        </span>
        <button className="add-movie-btn" onClick={handleAddMovieClick}>
          + ADD MOVIE
        </button>

        <SearchForm initialQuery="The Dark Knight" onSearch={handleSearch} />
      </header>

      {selectedMovie && <MovieDetail movie={selectedMovie} />}

      <div className="filter-bar d-flex justify-content-between align-items-center px-3 py-2">
        <GenreSelect
          genreList={genres}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />

        <SortControl
          sortByOptions={sortByOptions}
          currentSelection={selectedSortByOption}
          handleSortControlChange={handleSortControlChange}

        />
      </div>

      <div className="container my-4">
        <div className="row">
          {movies.map((movie, index) => (
            <div className="col-md-4" key={index}>
              <MovieTile
                movie={movie}
                handleDeleteMovieClick={handleDeleteMovieClick}
                handleEditMovieClick={handleEditMovieClick}
                handleMovieClick={handleMovieClick} // 
              />
            </div>
          ))}
        </div>
      </div>

      {isAddDialogOpen && (
        <Dialog title="Add Movie" onClose={handleDialogClose}>
          <MovieForm onSubmit={handleMovieSubmit} />
        </Dialog>
      )}

      {isEditDialogeOpen && (
        <Dialog title="Edit Movie" onClose={handleDialogClose}>
          <MovieForm initialMovie={dummyMovie} onSubmit={handleMovieSubmit} />
        </Dialog>
      )}

      {isDeleteDialogOpen && (
        <Dialog title="Delete Movie" onClose={cancelDelete}>
          <p className="text-white mb-4">
            Are you sure you want to delete{" "}
            <strong>{movieToDelete?.title}</strong>?
          </p>
          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-danger" onClick={confirmDeleteMovie}>
              Confirm
            </button>
          </div>
        </Dialog>
      )}

    </div>

  );
}

export default App;
