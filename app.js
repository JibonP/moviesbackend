const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const movieController = require("./controller/movieController");
const reviewsController = require("./controller/reviewsController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/movies", movieController);
app.use("/reviews", reviewsController);

// GET - /movies - get all movies
// POST - /movies - create movie
// GET - /movies/:id - get movie by id
// PUT - /movies/:id - update movie by id
// DELETE - /movies/:id - delete movie by id

// GET - /reviews - get all reviews
// POST - /reviews - create review
// GET - /reviews/:id - get review by id
// PUT - /reviews/:id - update review by id
// DELETE - /reviews/:id - delete review by id

/*
  /movies/:id/reviews - get all reviews for a specific movie
*/

app.get("/", (req, res) => {
  res.send("Welcome to Movies App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
