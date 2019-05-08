const router = require("express").Router();
const booksController = require("../controllers/booksController");


router.route("/api/books")
    .get(booksController.findAll)
    .post(booksController.create);


router
    .route("/api/books/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;
