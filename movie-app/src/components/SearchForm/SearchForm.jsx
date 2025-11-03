import React, { useState } from "react";
/**
 * 
- OnSearch is a function passed from parent component. 
- onSearch is a callback function passed as a prop to this SearchBar component
- when search bar button is pressed
    - it takes value from search input
    - calls handleSearchClick - which calls onSearch present in parent component
    - if(onSearch) - It’s a safety check to make sure the component doesn’t crash if onSearch wasn’t passed.
 */
function SearchForm({ initialQuery = "", onSearch }) {
    const [query, setQuery] = useState(initialQuery);

    // Handles pressing Enter
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && onSearch) {
            onSearch(query);
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    // Handles clicking Search button
    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className="container search-bar text-center">
            <h2 className="mb-4 fw-bold text-uppercase">Find Your Movie</h2>
            <div className="input-group">
                <input
                    data-cy = "search-input"
                    type="text"
                    className="form-control"
                    placeholder="What do you want to watch?"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button className="btn btn-danger text-uppercase" onClick={handleSearchClick}>
                    search
                </button>
            </div>
        </div>
    );
}

export default SearchForm;