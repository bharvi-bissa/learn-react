import React, { useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.css";
import GenreSelect from "./components/SearchForm/GenreSelect";

function App() {

  const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

  const [selectedGenre, setSelectedGenre] = useState("ALL");

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const handleGenreSelect = (genre) => {
    console.log("User selected genre:", genre);
    // Update state
    setSelectedGenre(genre);
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

      <GenreSelect
        genreList={genres}
        selectedGenre={selectedGenre}
        onSelect = {handleGenreSelect}
      />

    </div>
  );
}

export default App;
