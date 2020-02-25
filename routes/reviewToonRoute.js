const express = require("express");
const reviewToonController = require("../controllers/reviewToonController");

const router = express.Router();

router.route("/").get(reviewToonController.getAllReview);
router.route("/addreview").post(reviewToonController.createReview);

router
  .route("/:id")
  .get(reviewToonController.getReview)
  .delete(reviewToonController.deleteReview)
  .patch(reviewToonController.editReview);

module.exports = router;
