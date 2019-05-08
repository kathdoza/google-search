import React from "react";
// import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import API from "../utils/API";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount= () => {
        // console.log(this.state.savedBooks + "componenet");
        API.searchBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        console.log(this.state.savedBooks);
        return(
            <main>
                <Results savedBooks={this.state.savedBooks} path={this.props.match.path}/>
            </main>
        );
    }
}

export default Saved;

