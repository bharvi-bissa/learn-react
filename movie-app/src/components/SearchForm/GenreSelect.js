function GenreSelect({ genreList = [], selectedGenre, onSelect }) {

    const handleClick = (genre) => {
        if (onSelect) {
            onSelect(genre);
        }
    }

    return (
        <>
            <div className="filter-bar">
                <div className="filters">
                    {genreList.map((genre) => (
                        <span key={genre}
                            className={genre === selectedGenre ? "active" : ""}
                            onClick={() => handleClick(genre)}>
                            {genre}
                        </span>
                    ))}
                </div>
                 <div className="sort d-flex align-items-center">
                <span className="me-2">Sort by:</span>
                <select
                    className="form-select form-select-sm bg-dark text-white border-0"
                    style={{ width: "auto" }}
                >
                    <option defaultValue>Release Date</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                </select>
            </div>
            </div>
           
        </>
    );

}

export default GenreSelect;