const express = require("express");
const { getAllMovies } = require("../queries/movieQuery.js");
// router variable to handle request
const movie = express.Router();

//Index
movie.get("/", async (req, res) => {
  try {
    const allMovies = await getAllMovies();

    if (allMovies[0]) {
      res.status(200).json(allMovies);
    } else {
      res.status(500).json({ error: "Server error" });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = movie;
