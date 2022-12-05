const Search = () => {
    return (
        <div className="search-bar">
        <label htmlFor="search">Search by Event/Artist/Venue </label>
        <input type="text" 
        name="search"
        id = "search"
        placeholder="Search by Event/Artist/Venue "
        />
        </div>
    )
}

export default Search