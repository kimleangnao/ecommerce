


const SearchBar = () => {
    return(
        <div className="searchBar">
            <input type="search" className="searchBar_input" placeholder="SEARCH" />
            <button className="searchBar_button">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}

export default SearchBar;