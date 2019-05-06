import axios from "axios";
require('dotenv').config()

// const key = process.env.GBOOKS_KEY;

export default {
    searchBooks: title =>{
        // return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.GBOOKS_KEY}`);
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title + "&key=AIzaSyCiHB7FCjrf1MeI7LKpRMg9gXUx_R_NttQ")
        // console.log(title);
    },
    getSavedBooks: function () {
        return axios.get("/api/books/");
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};