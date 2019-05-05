const db = require("../models/book");

module.exports = function (app) {
    app.get("/api/books/", function (req, res) {
        db.Book
            .find({})
            .sort({ date: -1 })
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    });

    app.get("/api/books/:id", function (req, res) {
        db.Book
            .findById(req.params.id)
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    });

    app.post("/api/books", function (req, res) {
        db.Book
            .create(req.body)
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    });

    app.delete("/api/books/:id", function (req, res) {
        db.Book
            .findById({ _id: req.params.id })
            .then(results => results.remove())
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    });
}