const db = require("../db/dbConfig");

const getAllReviews = async () => {
  try {
    const allReviews = await db.any(`SELECT * FROM reviews ORDER BY id ASC`);
    return allReviews;
  } catch (error) {
    return error;
  }
};

const getReviewById = async (movieId, reviewId) => {
  try {
    const oneReview = await db.any(
      `
        SELECT MOVIE_ID,
            REVIEWER,
            TITLE,
            CONTENT,
            RATING
        FROM MOVIES
        JOIN REVIEWS ON MOVIES.ID = REVIEWS.MOVIE_ID
        WHERE MOVIES.ID = $1
            AND REVIEWS.ID = $2;
    `,
      [movieId, reviewId]
    );

    return oneReview;
  } catch (error) {
    return error;
  }
};

const deleteReviewById = async (id) => {
  try {
    const deleteReview = await db.any(
      `DELETE FROM reviews WHERE id = $1 RETURNING *`,
      id
    );

    return deleteReview;
  } catch (error) {
    return error;
  }
};

const createReview = async (review) => {
  try {
    const newReview = await db.any(
      `INSERT INTO reviews (movie_id, reviewer, title, content, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        review.movie_id,
        review.reviewer,
        review.title,
        review.content,
        review.rating,
      ]
    );

    return newReview;
  } catch (error) {
    return error;
  }
};

const updateReviewById = async (id, review) => {
  let { reviewer, title, content, rating } = review;
  try {
    const updatedReview = await db.any(
      `UPDATE reviews SET reviewer = $1, title = $2, content = $3, rating = $4 WHERE id = $5 RETURNING *`,
      [reviewer, title, content, rating, id]
    );

    return updatedReview;
  } catch (error) {
    return error;
  }
};

const getAllReviewsOnMovieId = async (movieId) => {
  try {
    const allReviews = await db.any(
      `SELECT * FROM reviews WHERE movie_id = $1 ORDER BY id ASC`,
      movieId
    );
    return allReviews;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  deleteReviewById,
  createReview,
  updateReviewById,
  getAllReviewsOnMovieId,
};
