import React from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ bookInput: event.target.value })
    }

    handleSearchClick(event) {
        event.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    this.setState({ bookData: response.data });
                    this.setState({ bookInput: "" });
                }
            );
    }

    render() {
        return (
            <main>
                <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0) ?
                    <Results bookData={this.state.bookData} path={this.props.match.path} /> : null
                }
            </main>
        );
    }
}

export default Search;