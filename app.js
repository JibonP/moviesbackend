const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const movieController = require("./controller/movieController");
const reviewsController = require("./controller/reviewsController");
// const userController = require("./controller/usersController.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/movies", movieController);
app.use("/reviews", reviewsController);
// app.use("/create-user", userController);

app.get("/", (req, res) => {
  res.send("Welcome to Movies App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
