const express = require("express");
const {
  getAllReviews,
  getReviewById,
  deleteReviewById,
  createReview,
  updateReviewById,
  getAllReviewsOnMovieId,
} = require("../queries/reviews");

const router = express.Router({ mergeParams: true });
router.get("/", async (req, res) => {
  const allReviews = await getAllReviewsOnMovieId(req.params.movieId);

  if (allReviews.length === 0) {
    res.status(404).json({ error: "Reviews not found for this movie" });
  } else {
    res.json(allReviews);
  }
});

router.get("/", async (req, res) => {
  const allReviews = await getAllReviews();

  if (allReviews.length === 0) {
    res.status(404).json({ error: "No reviews found" });
  } else {
    res.json(allReviews);
  }
});

router.get("/:reviewId", async (req, res) => {
  try {
    const review = await getReviewById(req.params.movieId, req.params.reviewId);

    if (review.length === 0) {
      throw {
        status: 404,
        message: "Review not found",
      };
    } else {
      return res.json(review[0]);
    }
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedReview = await deleteReviewById(id);

  if (deletedReview.length === 0) {
    return res.status(404).json({ error: "Review not found" });
  } else {
    return res.json(deletedReview[0]);
  }
});

router.post("/", async (req, res) => {
  const createdReview = await createReview(req.body);

  res.json(createdReview[0]);
});

router.put("/:id", async (req, res) => {
  const updatedReview = await updateReviewById(req.params.id, req.body);

  if (updatedReview.length === 0) {
    return res.status(404).json({ error: "Review not found" });
  } else {
    return res.json(updatedReview[0]);
  }
});

router.get("/:movieId/get-all-reviews", async (req, res) => {
  const { movieId } = req.params;

  try {
    const allReviewsById = await getAllReviewsOnMovieId(movieId);

    if (allReviewsById.length === 0) {
      return res.status(404).json({ error: "Review not found" });
    } else {
      console.log(allReviewsById);
      return res.json(allReviewsById);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
