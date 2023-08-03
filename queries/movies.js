const db = require("../db/dbConfig");

const getAllMovies = async () => {
  try {
    const allMovies = await db.any("SELECT * FROM movies");
    return allMovies;
  } catch (error) {
    return error;
  }
};

const getMovieById = async (id) => {
  try {
    const movie = await db.any("SELECT * FROM movies WHERE id = $1", id);
    return movie;
  } catch (error) {
    return error;
  }
};

const createMovie = async (data) => {
  try {
    const newMovie = await db.one(
      "INSERT INTO movies (name, description, year, img, rating, favorite, actor, would_rewatch) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        data.name,
        data.description,
        data.year,
        data.img,
        data.rating,
        data.favorite,
        data.actor,
        data.would_rewatch,
      ]
    );
    return newMovie;
  } catch (e) {
    return e;
  }
};

const deleteMovie = async (id) => {
  try {
    const deletedMovie = await db.any(
      "DELETE FROM movies WHERE id = $1 RETURNING *",
      id
    );
    return deletedMovie;
  } catch (e) {
    return e;
  }
};

const updateMovieById = async (id, movie) => {
  try {
    const updatedMovie = await db.any(
      "UPDATE movies SET name = $1, description = $2, year = $3, img = $4, rating = $5, favorite = $6, actor = $7, would_rewatch = $8 WHERE id = $9 RETURNING *",
      [
        movie.name,
        movie.description,
        movie.year,
        movie.img,
        movie.rating,
        movie.favorite,
        movie.actor,
        movie.would_rewatch,
        id,
      ]
    );
    return updatedMovie;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie,
  updateMovieById,
};
