import React from "react";

function SearchForm(props) {
    return (
        <div id="searchContainer">
            <h3>Book Search</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter a book to search:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(event) => props.handleChange(event)} placeholder="Book Title" required />
                <br></br>
                <button type="submit" onClick={(event) => props.handleSearchClick(event)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;
