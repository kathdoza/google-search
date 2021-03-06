import React from "react";
import API from "../../utils/API";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";

class BookResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            deleted: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSaveClick = function (event) {
        event.preventDefault();
        this.setState({ saved: true });
        // console.log(event);
        // console.log(this.props.title);
        const bookData = {
            title: this.props.title,
            authors: this.props.authors,
            link: this.props.link,
            img: this.props.img,
            description: this.props.description
        }
        // console.log(bookData);
        API.saveBook(bookData).then(
            (response) => {
                console.log("book saved!");
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    handleDeleteClick(event) {
        this.setState({ deleted: true });
        event.preventDefault();
        API.deleteBook(this.props.id).then(
            (response) => {
                console.log(response);
                Router.dispatch(this.props.location, null)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div className="bookResult container" id={(this.props.id) ? this.props.id : null}>
                <div className="container">
                    <div className="row">
                        <div className="aboutBook">
                            <h4>{this.props.title}</h4>
                            <p>By: {(this.props.authors) ? this.props.authors.join(", ") : "N/A"}</p>
                        </div>
                        <div className="btnDiv">
                            {

                                (this.props.link) ? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-dark" type="button" name="view">View</button></a> : null
                            }
                            {
                                (this.props.path === "/") ? <button className="btn btn-primary" type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved) ? "Saved" : "Save"}</button> : <button type="button" name="Delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button>
                            }
                        </div>
                    </div>
                    <div className="row">
                        {(this.props.img) ? <img src={
                            (this.props.img.smallThumbnail) ? this.props.img.smallThumbnail :
                                (this.props.img.thumbnail) ? this.props.img.thumbnail : ""
                        } alt="book cover" /> : null}
                        <p>{(this.props.description) ? this.props.description : "N/A"}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default BookResult;
