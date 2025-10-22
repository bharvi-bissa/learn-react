function GenreSelect({ genreList = [], selectedGenre, onSelect }) {

    const handleClick = (genre) => {
        if (onSelect) {
            onSelect(genre);
        }
    }

    return (
        <>
            <div className="filters">
                {genreList.map((genre) => (
                    <span key={genre}
                        className={genre === selectedGenre ? "active" : ""}
                        onClick={() => handleClick(genre)}>
                        {genre}
                    </span>
                ))}
            </div>
        </>
    );

}

export default GenreSelect;