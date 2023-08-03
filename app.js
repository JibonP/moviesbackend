<<<<<<< HEAD
const cors = require("cors");
const express = require("express");
const movieController = require("./controller/movieController.js");
const app = express();

// MiddleWare
app.use(cors());
app.use(express.json());
app.use("/movies", movieController);

app.get("/", (req, res) => {
  res.send("Welcome to Favorite Movies App");
});

// 404 Page route

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
