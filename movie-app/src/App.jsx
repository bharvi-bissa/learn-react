import React, { useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.css";
import movieList from "./movies";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import SortControl from "./components/SortControl/SortControl";
import MovieTile from "./components/MovieTile/MovieTile";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {

  const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
  const sortByOptions = ["Release Date", "Title"];

  const [selectedGenre, setSelectedGenre] = useState("ALL");
  const [selectedSortByOption, setSelectedSortByOption] = useState("ReleaseDate");
  const [selectedMovie, setSelectedMovie] = useState();

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
        <button className="add-movie-btn">+ ADD MOVIE</button>

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
          {movieList.map((movie, index) => (
            <div className="col-md-4" key={index}>
              <MovieTile
                movie={movie}
                handleMovieClick={handleMovieClick} // 
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
