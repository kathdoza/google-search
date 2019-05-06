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

    handleChange = event => {
        event.preventDefault();
        this.setState({ bookInput: event.target.value })
    }

    handleSearchClick = event => {
        event.preventDefault();
        console.log(this.state.bookInput);
        // console.log(this.state);
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    // console.log(this);
                    console.log(response.data)
                    this.setState({ bookData: response.data });
                    //  console.log(this.state.bookData);
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