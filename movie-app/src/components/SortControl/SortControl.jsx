function SortControl({ sortByOptions, currentSelection, handleSortControlChange }) {

    const handleSortChange = (e) => {
        if (handleSortControlChange) {
            handleSortControlChange(e.target.value);
        }
    }

    return (
        <>
            <div className="sort d-flex align-items-center">
                <span className="me-2">Sort by:</span>
                <select
                    className="form-select form-select-sm bg-dark text-white border-0"
                    style={{ width: "auto" }}
                    value={currentSelection}
                    onChange={handleSortChange}
                >
                    {sortByOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );


}


export default SortControl;