const express = require("express");
const router = express.Router();

const reviewsController = require("./reviewsController");

router.use("/:movieId/reviews", reviewsController);

const {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie,
  updateMovieById,
} = require("../queries/movies");

router.get("/", async (req, res) => {
  const allMovies = await getAllMovies();

  if (Array.isArray(allMovies)) {
    res.json(allMovies);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const movie = await getMovieById(id);

  if (movie.length === 0) {
    res.status(404).json({ error: "Not found" });
  } else {
    res.json(movie[0]);
  }
});

router.post("/", async (req, res) => {
  const createdMovie = await createMovie(req.body);
  res.json(createdMovie);
});

router.delete("/:id", async (req, res) => {
  const deletedMovie = await deleteMovie(req.params.id);

  if (deletedMovie.length === 0) {
    return res.status(404).json({ message: "No data found!", error: true });
  } else {
    return res.json(deletedMovie[0]);
  }
});

router.put("/:id", async (req, res) => {
  const updatedMovie = await updateMovieById(req.params.id, req.body);
  if (updatedMovie.length === 0) {
    res.status(404).json({ message: "Not found!", error: true });
  } else {
    res.json(updatedMovie[0]);
  }
});

module.exports = router;
